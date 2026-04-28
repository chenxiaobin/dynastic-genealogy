<template>
  <div
    class="emperor-card"
    :class="data.cardType"
    :style="cardStyle"
    @click="onCardClick"
  >
    <!-- 顶部：庙号或王位 -->
    <div class="card-top" :style="cardTopStyle">{{ topLabel }}</div>
    <!-- 竖排姓名 -->
    <div class="card-name">
      <span v-for="(char, i) in data.name" :key="i">{{ char }}</span>
    </div>
    <!-- 底部：帝王显示年号，非帝王显示兄弟排行 -->
    <div class="card-order" :style="cardOrderStyle">
      {{ cardOrderText }}
    </div>

    <Handle id="top" type="target" :position="Position.Top" />
    <Handle id="bottom" type="source" :position="Position.Bottom" />
    <Handle id="left" type="source" :position="Position.Left" />
    <Handle id="right" type="source" :position="Position.Right" />
    <Handle id="left-t" type="target" :position="Position.Left" />
    <Handle id="right-t" type="target" :position="Position.Right" />
    <Handle id="bottom-t" type="target" :position="Position.Bottom" />
  </div>

  <Teleport to="body">
    <div v-if="showTooltip" class="emperor-tooltip" :style="tooltipStyle">
      <div v-if="data.temple" class="tip-row">
        <span class="tip-label">庙号</span>{{ data.temple }}
      </div>
      <div v-if="data.title" class="tip-row">
        <span class="tip-label">年号</span>{{ data.title }}
      </div>
      <div class="tip-row">
        <span class="tip-label">姓名</span>{{ data.name }}
      </div>
      <div v-if="data.reign" class="tip-row">
        <span class="tip-label">在位</span>{{ data.reign }}
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { COLORS } from '../utils/utils.js'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  data: { type: Object, required: true },
  id: String,
  type: String,
  selected: Boolean,
  resizing: Boolean,
  dragging: Boolean,
  connectable: Boolean,
  position: Object,
  dimensions: Object,
  isValidTargetPos: Function,
  isValidSourcePos: Function,
  parent: String,
  parentNodeId: String,
  zIndex: Number,
  targetPosition: String,
  sourcePosition: String,
  label: String,
  dragHandle: String
})

defineEmits(['updateNodeInternals'])

// 顶部标签：皇帝显示庙号，普通人显示王位（title）
const topLabel = computed(() => {
  if (
    ['EMPEROR', 'FOUNDER', 'LAST', 'ANCESTOR', 'EMPRESS'].includes(
      props.data.cardType
    )
  )
    return props.data.temple || ''
  return props.data.title || ''
})

// 根据卡片类型获取基础色值
const cardColor = computed(() => {
  if (props.data.cardColor) {
    return props.data.cardColor
  }
  switch (props.data.cardType) {
    case 'EMPEROR':
      return COLORS.EMPEROR
    case 'FOUNDER':
      return COLORS.FOUNDER
    case 'PRINCE':
      return COLORS.PRINCE
    case 'DIED_YOUNG':
      return COLORS.DIED_YOUNG
    case 'LAST':
      return COLORS.LAST
    case 'EMPRESS':
      return COLORS.EMPRESS
    case 'ANCESTOR':
      return COLORS.ANCESTOR
    default:
      return null
  }
})

// 根据卡片类型计算文本颜色
const cardTextColor = computed(() => {
  switch (props.data.cardType) {
    case 'PRINCE':
    case 'FOUNDER':
      return '#2c3e50' // 浅色背景用黑色字体
    case 'DIED_YOUNG':
      return '#9AACB5'
    case 'EMPEROR':
    case 'RESTORED':
    case 'LAST':
    case 'EMPRESS':
    case 'ANCESTOR':
    default:
      return '#fff' // 深色背景用白色字体
  }
})

const cardStyle = computed(() => {
  if (!cardColor.value) return {}
  return {
    background: cardColor.value + 'b3',
    'border-color': cardColor.value,
    color: cardTextColor.value
  }
})

const cardTopStyle = computed(() => {
  if (!cardColor.value) return {}
  return {
    background: cardColor.value + 'cc'
  }
})

const cardOrderStyle = computed(() => {
  if (!cardColor.value) return {}
  return {
    background: cardColor.value + 'cc'
  }
})

const cardOrderText = computed(() => {
  const isImperialType = ['EMPEROR', 'FOUNDER', 'LAST', 'EMPRESS'].includes(props.data.cardType)
  const isMingOrQing = props.data.dynasty === '明朝' || props.data.dynasty === '清朝'
  if (isImperialType && isMingOrQing) {
    return props.data.title
  }
  return props.data.rank
})

const showTooltip = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

const tooltipStyle = computed(() => ({
  left: mouseX.value + 16 + 'px',
  top: mouseY.value - 10 + 'px'
}))

function onCardClick(e) {
  if (!props.data.temple && !props.data.reign) return
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  showTooltip.value = !showTooltip.value
}

// 点击其他地方关闭
if (typeof window !== 'undefined') {
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.emperor-card')) {
      showTooltip.value = false
    }
  })
}
</script>

<style scoped>
.emperor-card {
  width: 44px;
  height: 120px;
  border-radius: 5px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.15s,
    box-shadow 0.15s;
  user-select: none;
  overflow: hidden;
}

/* 顶部庙号/王位 */
.card-top {
  width: 100%;
  height: 16px;
  border-radius: 3px 3px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 2px;
}

.emperor-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
}

/* 类型颜色 */
/* 颜色已移至 cardStyle 计算属性 */

/* 竖排文字 */
.card-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  justify-content: center;
}

.card-name span {
  font-size: 13px;
  font-weight: bold;
  line-height: 1.2;
  font-family: 'Microsoft YaHei', 'SimSun', serif;
}

/* 底部年号 */
.card-order {
  width: 100%;
  height: 16px;
  border-radius: 0 0 3px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 2px;
}

/* 连接点隐藏默认样式 */
:deep(.vue-flow__handle) {
  width: 6px;
  height: 6px;
  background: transparent;
  border: none;
}
</style>

<style>
/* tooltip 全局样式（teleport 到 body） */
.emperor-tooltip {
  position: fixed;
  background: rgba(20, 20, 20, 0.92);
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.9;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  font-family: 'Microsoft YaHei', sans-serif;
  min-width: 140px;
}

.tip-row {
  display: flex;
  gap: 8px;
}

.tip-label {
  color: #aaa;
  flex-shrink: 0;
  width: 28px;
}
</style>
