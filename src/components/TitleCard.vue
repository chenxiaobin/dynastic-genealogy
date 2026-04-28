<template>
  <div class="title-card">
    <div class="title-inner">
      <span v-for="(char, i) in (data?.text || '帝王世袭图')" :key="i">{{ char }}</span>
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
.title-card {
  background: #2C5470;     /* 与追尊色一致 */
  border: 3px solid #F9C851; /* 开国明黄 */
  /* background: #5c3a1e;
  border: 3px solid #c8a84b; */
  border-radius: 6px;
  padding: 6px;
  box-shadow:
    0 0 0 1px #8b6914,
    inset 0 0 0 2px #8b6914,
    0 4px 16px rgba(0,0,0,0.4);
  cursor: default;
  user-select: none;
}

.title-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c8a84b;
  padding: 12px 20px;
  border-radius: 3px;
}

.title-inner span {
  font-size: 55px;
  /* color: #f5d87a; */
  color: #F9C851;  
  font-family: '行书', 'STLiti', 'LiSu', serif;
  line-height: 1.4;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
</style>
