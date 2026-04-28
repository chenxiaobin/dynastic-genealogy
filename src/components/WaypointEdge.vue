<template>
  <path
    :d="pathD"
    fill="none"
    :stroke="data.stroke || '#e74c3c'"
    :stroke-width="data.strokeWidth || 2"
    :stroke-dasharray="data.strokeDasharray || '6,4'"
    style="position: relative; z-index: 1000;"
  />
  <!-- 箭头 -->
  <defs>
    <marker
      :id="`arrow-${id}`"
      markerWidth="10"
      markerHeight="10"
      refX="10"
      refY="5"
      orient="auto"
      markerUnits="userSpaceOnUse"
    >
      <path d="M0,0 L0,10 L10,5 z" :fill="data.stroke || '#e74c3c'" />
    </marker>
  </defs>
  <path
    :d="pathD"
    fill="none"
    stroke="transparent"
    stroke-width="10"
  />
  <path
    :d="arrowPath"
    fill="none"
    :stroke="data.stroke || '#e74c3c'"
    :stroke-width="data.strokeWidth || 2"
    :stroke-dasharray="data.strokeDasharray || '6,4'"
    :marker-end="`url(#arrow-${id})`"
  />
  <!-- 终点附近标签 -->
  <text
    v-if="data.label"
    :x="labelX"
    :y="labelY"
    text-anchor="middle"
    :fill="data.stroke || '#e74c3c'"
    font-size="11"
    font-family="Microsoft YaHei, sans-serif"
    font-weight="bold"
  >{{ data.label }}</text>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  id: String,
  source: String,
  target: String,
  sourceX: Number,
  sourceY: Number,
  targetX: Number,
  targetY: Number,
  data: Object,
  // vue-flow 传入的边属性，声明后不透传到 DOM
  sourceNode: Object,
  targetNode: Object,
  type: String,
  updatable: Boolean,
  selected: Boolean,
  animated: Boolean,
  label: String,
  labelStyle: Object,
  labelShowBg: Boolean,
  labelBgStyle: Object,
  labelBgPadding: Array,
  labelBgBorderRadius: Number,
  events: Object,
  style: Object,
  markerStart: String,
  markerEnd: [String, Object],
  sourcePosition: String,
  targetPosition: String,
  sourceHandleId: String,
  targetHandleId: String,
  interactionWidth: Number,
})

/**
 * data.waypoints: 相对于画布的绝对坐标折点数组 [{x, y}, ...]
 * 如果没有 waypoints，退化为直线
 */
const pathD = computed(() => {
  const sx = props.data?.startPoint?.x ?? props.sourceX
  const sy = props.data?.startPoint?.y ?? props.sourceY
  const tx = props.data?.endPoint?.x ?? props.targetX
  const ty = props.data?.endPoint?.y ?? props.targetY
  const pts = props.data?.waypoints

  if (!pts || pts.length === 0) {
    return `M${sx},${sy} L${tx},${ty}`
  }

  let d = `M${sx},${sy}`
  pts.forEach(p => { d += ` L${p.x},${p.y}` })
  d += ` L${tx},${ty}`
  return d
})

const arrowPath = computed(() => {
  const tx = props.data?.endPoint?.x ?? props.targetX
  const ty = props.data?.endPoint?.y ?? props.targetY
  const pts = props.data?.waypoints

  if (!pts || pts.length === 0) {
    const sx = props.data?.startPoint?.x ?? props.sourceX
    const sy = props.data?.startPoint?.y ?? props.sourceY
    return `M${sx},${sy} L${tx},${ty}`
  }

  const last = pts[pts.length - 1]
  return `M${last.x},${last.y} L${tx},${ty}`
})

// 标签位置：优先用 data.labelPoint，否则用线段中点下方10px
const labelX = computed(() => {
  if (props.data?.labelPoint) return props.data.labelPoint.x
  const sx = props.data?.startPoint?.x ?? props.sourceX
  const tx = props.data?.endPoint?.x ?? props.targetX
  return (sx + tx) / 2
})
const labelY = computed(() => {
  if (props.data?.labelPoint) return props.data.labelPoint.y
  const sy = props.data?.startPoint?.y ?? props.sourceY
  const ty = props.data?.endPoint?.y ?? props.targetY
  return (sy + ty) / 2 + 14
})
</script>
