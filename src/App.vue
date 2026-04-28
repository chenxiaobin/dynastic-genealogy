<template>
  <div class="app-container">
    <!-- 朝代页签 -->
    <div class="dynasty-tabs" ref="tabsRef">
      <div class="tab-slider" :style="sliderStyle"></div>
      <button
        v-for="(d, i) in dynasties"
        :key="d.key"
        class="tab-btn"
        :class="{ active: currentDynasty === d.key }"
        @click="switchDynasty(d.key, i)"
      >{{ d.label }}</button>
    </div>

    <!-- 下载按钮 -->
    <div class="side-panel">
      <button class="download-btn" @click="downloadImage">下载完整图片</button>
      <button class="download-btn screenshot-btn" @click="doScreenshot">屏幕截图</button>
    </div>

    <!-- Vue Flow 画布 -->
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :node-types="nodeTypes"
      :edge-types="edgeTypes"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :elements-selectable="false"
      :default-viewport="{ zoom: 0.8, x: 50, y: 50 }"
      :min-zoom="0.3"
      :max-zoom="2"
      fit-view-on-init
      class="vue-flow-container"
    >
      <Background pattern-color="#eee" :gap="16" />
      <Controls position="bottom-right" />
    </VueFlow>

    <!-- 操作提示 -->
    <div class="hint">滚轮缩放 · 拖拽移动 · 点击节点查看详情</div>
  </div>
</template>

<script setup>
import { markRaw, ref, computed } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import domtoimage from 'dom-to-image-more'
import EmperorCard from './components/EmperorCard.vue'
import WaypointEdge from './components/WaypointEdge.vue'
import TitleCard from './components/TitleCard.vue'
import LegendCard from './components/LegendCard.vue'
import { useScreenshot } from './useScreenshot.js'
import { buildFlowData as buildMing } from './data/mingData.js'
import { buildFlowData as buildTang } from './data/tangData.js'
import { buildFlowData as buildSong } from './data/songData.js'
import { buildFlowData as buildYuan } from './data/yuanData.js'
import { buildFlowData as buildQing } from './data/qingData.js'

const nodeTypes = { emperorCard: markRaw(EmperorCard), titleCard: markRaw(TitleCard), legendCard: markRaw(LegendCard) }
const edgeTypes  = { waypoint: markRaw(WaypointEdge) }

const { fitView, vueFlowRef } = useVueFlow()
const { capture } = useScreenshot()

// 朝代配置
const dynasties = [
  { key: 'tang',  label: '唐', builder: buildTang },
  { key: 'song',  label: '宋', builder: buildSong },
  { key: 'yuan',  label: '元', builder: buildYuan },
  { key: 'ming',  label: '明', builder: buildMing },
  { key: 'qing',  label: '清', builder: buildQing },
]

// 从 URL 参数读取初始朝代，默认明
const urlKey = new URLSearchParams(location.search).get('dynasty') || 'ming'
const initIndex = dynasties.findIndex(d => d.key === urlKey)
const currentDynasty = ref(urlKey)
const activeIndex = ref(initIndex >= 0 ? initIndex : 3)
const nodes = ref([])
const edges = ref([])

// 每个 tab 高度 + gap
const TAB_H = 44
const TAB_GAP = 8
const sliderStyle = computed(() => ({
  transform: `translateY(${activeIndex.value * (TAB_H + TAB_GAP)}px)`
}))

function switchDynasty(key, index) {
  currentDynasty.value = key
  activeIndex.value = index
  // 更新 URL 参数，不刷新页面
  const url = new URL(location.href)
  url.searchParams.set('dynasty', key)
  history.replaceState(null, '', url)
  const builder = dynasties.find(d => d.key === key)?.builder
  if (!builder) return
  try {
    const result = builder()
    nodes.value = result.nodes
    edges.value = result.edges
  } catch (e) {
    console.error('加载朝代数据失败：', e)
    nodes.value = []
    edges.value = []
  }
  // 切换后重置视图
  setTimeout(() => fitView({ padding: 0.05, duration: 300 }), 100)
}

// 初始加载（从 URL 参数或默认明朝）
switchDynasty(urlKey, initIndex >= 0 ? initIndex : 3)

async function doScreenshot() {
  if (!vueFlowRef.value) return
  await fitView({ padding: 0.03, duration: 0 })
  await new Promise(r => setTimeout(r, 600))
  const label = dynasties.find(d => d.key === currentDynasty.value)?.label || ''
  await capture(vueFlowRef.value, { shouldDownload: true, fileName: `${label}朝帝王世袭图` })
}

async function downloadImage() {
  try {
    await fitView({ padding: 0.03, duration: 0 })
    await new Promise(r => setTimeout(r, 600))

    const container = document.querySelector('.vue-flow-container')
    const W = container.offsetWidth
    const H = container.offsetHeight
    const scale = 4

    // 1. 先把所有 SVG 的 overflow 改为 visible，防止边被裁剪
    const allSvgs = container.querySelectorAll('svg')
    const origOverflows = []
    allSvgs.forEach(svg => {
      origOverflows.push(svg.style.overflow)
      svg.style.overflow = 'visible'
      // 同时扩大 viewBox
      svg.setAttribute('overflow', 'visible')
    })

    // 2. 把所有 SVG path 的 style 属性内联
    const allPaths = container.querySelectorAll('path, line, polyline')
    allPaths.forEach(path => {
      const stroke = path.getAttribute('stroke') || getComputedStyle(path).stroke
      const strokeWidth = path.getAttribute('stroke-width') || getComputedStyle(path).strokeWidth
      const fill = path.getAttribute('fill') || getComputedStyle(path).fill
      const strokeDasharray = path.getAttribute('stroke-dasharray') || getComputedStyle(path).strokeDasharray
      if (stroke && stroke !== 'none') path.style.stroke = stroke
      if (strokeWidth) path.style.strokeWidth = strokeWidth
      if (fill) path.style.fill = fill
      if (strokeDasharray && strokeDasharray !== 'none') path.style.strokeDasharray = strokeDasharray
    })

    // 隐藏 UI 控件
    const hideEls = container.querySelectorAll('.vue-flow__controls, .vue-flow__background')
    hideEls.forEach(el => el.style.visibility = 'hidden')

    await new Promise(r => setTimeout(r, 100))

    const dataUrl = await domtoimage.toPng(container, {
      bgcolor: '#d4eaf7',
      width:  W * scale,
      height: H * scale,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width:  W + 'px',
        height: H + 'px',
      }
    })

    hideEls.forEach(el => el.style.visibility = '')
    allSvgs.forEach((svg, i) => { svg.style.overflow = origOverflows[i] })

    const link = document.createElement('a')
    link.href = dataUrl
    link.download = '明朝帝王世袭图.png'
    link.click()
  } catch (e) {
    console.error('下载失败：', e)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft YaHei', 'SimSun', sans-serif;
  overflow: hidden;
}

.app-container {
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(to bottom, #e0f2f7 0%, #b3e5fc 100%); */
  background: #F0F4F8;
  position: relative;
}

/* 朝代页签 */
.dynasty-tabs {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255,255,255,0.9);
  padding: 12px 6px;
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  position: absolute;
}
.tab-slider {
  position: absolute;
  left: 6px;
  top: 12px;
  width: calc(100% - 12px);
  height: 44px;
  background: #1976d2;
  border-radius: 16px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}
.tab-btn {
  position: relative;
  z-index: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 15px;
  font-family: 'Microsoft YaHei', serif;
  font-weight: bold;
  background: transparent;
  color: #666;
  transition: color 0.2s;
  line-height: 1;
  height: 44px;
}
.tab-btn:hover { color: #333; }
.tab-btn.active { color: #fff; }

/* 右侧面板：下载按钮 */
.side-panel {
  position: absolute;
  bottom: 15px;
  right: 50px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Vue Flow 容器 */
.vue-flow-container {
  width: 100%;
  height: 100%;
}

/* 操作提示 */
.hint {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(0,0,0,0.4);
  font-size: 12px;
  z-index: 10;
  background: rgba(255,255,255,0.7);
  padding: 6px 16px;
  border-radius: 6px;
}

/* 覆盖 vue-flow 默认样式 */
:deep(.vue-flow__background) {
  background-color: transparent;
}
:deep(.vue-flow__edge-path) {
  stroke-linecap: round;
}
/* 下载按钮 */
.download-btn {
  padding: 8px 20px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Microsoft YaHei', sans-serif;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
.screenshot-btn { background: #388e3c; }
.screenshot-btn:hover { background: #2e7d32; }

/* 隐藏 Controls 锁按钮（第4个） */
:deep(.vue-flow__controls-button:nth-child(4)) {
  display: none;
}
:deep(.vue-flow__edge[style*="z-index: 1000"]) {
  z-index: 1000 !important;
}
:deep(.vue-flow__edges) {
  overflow: visible;
}
/* 让红色 path 在灰色 path 上层 */
:deep(.vue-flow__edge path[stroke="#e74c3c"]) {
  paint-order: stroke;
}
</style>
