<template>
  <div class="legend-card">
    <div class="legend-title">图例</div>
    <div class="legend-items">
      <div v-for="item in data.items" :key="item.label" class="legend-item">
        <div class="legend-dot" :style="{ background: item.color }"></div>
        <span class="legend-label">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ inheritAttrs: false })
defineProps({
  id: String, type: String, selected: Boolean, resizing: Boolean,
  dragging: Boolean, connectable: Boolean, position: Object,
  dimensions: Object, isValidTargetPos: Function, isValidSourcePos: Function,
  parent: String, parentNodeId: String, zIndex: Number,
  targetPosition: String, sourcePosition: String, label: String,
  dragHandle: String, data: Object,
})
</script>

<style scoped>
.legend-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 18px 26px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  user-select: none;
}

.legend-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
}

.legend-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-dot {
  width: 14px;
  height: 14px;
  border: 1px solid rgba(0,0,0,0.2);
  flex-shrink: 0;
}

.legend-label {
  font-size: 20px;
  color: #555;
}
</style>
