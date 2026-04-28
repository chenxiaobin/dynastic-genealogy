export const NODE_W = 44
export const NODE_H = 100
export const H_STEP = 65
export const V_GAP  = 70
export const TITLE_OFFSET_X = 250
export const LEGEND_W = 180
export const LEGEND_H = 240

// 皇帝类型颜色
export const COLORS = {
  // 基础类型
  ANCESTOR: '#2C5470',  // 追尊的先辈 - 石青灰
  FOUNDER: '#F9C851',    // 开国君王 - 明黄
  EMPEROR: '#2196F3',    // 普通皇帝 - 耀空蓝
  LAST: '#9B4D7D',       // 末代帝王 - 暮紫红
  EMPRESS: '#E9432A',    // 女帝 - 烈朱红
  PRINCE: '#B5C8C7',     // 太子/封王 - 淡瓷绿
  DIED_YOUNG: '#C5BCB7', // 早夭 - 石灰华
  
  // 普通皇帝备用色
  EMPEROR_ALT1: '#467A66',  // 普通皇帝（备用1） - 翠微绿
  EMPEROR_ALT2: '#B8845C',  // 普通皇帝（备用2） - 秋檀棕
}

export const DEFAULT_LEGEND_ITEMS = [
  { label: '追尊皇帝', color: COLORS.ANCESTOR },
  { label: '开国皇帝', color: COLORS.FOUNDER },
  { label: '皇帝', color: COLORS.EMPEROR },
  { label: '末代帝王', color: COLORS.LAST },
  { label: '太子/王', color: COLORS.PRINCE },
  { label: '早夭', color: COLORS.DIED_YOUNG },
]

export const SUCCESSION_STYLE = {
  stroke: '#e74c3c',
  strokeWidth: 2,
  strokeDasharray: '6,4',
}
export const SUCCESSION_MARKER = { type: 'arrowclosed', color: '#e74c3c', width: 14, height: 14 }
export const SUCCESSION_ZINDEX = 1000

export function sortChildren(node) {
  if (node.children && node.children.length > 0) {
    node.children.sort((a, b) => a.rank - b.rank)
    node.children.forEach(sortChildren)
  }
}

export function preprocess(node) {
  if (!node.children || node.children.length === 0) return

  node.children.forEach((child, i) => {
    child.index      = i + 1
    child.childSlots = child.children ? child.children.length : 0

    if (i === 0) {
      child.slotDiff = 0
      child.offsetX  = 0
    } else {
      const prev = node.children[i - 1]

      if (child.childSlots > 0) {
        child.slotDiff = 0
      } else {
        child.slotDiff = prev.slotDiff === 0
          ? Math.max(prev.childSlots - 2, 0)
          : Math.max(prev.slotDiff - 1, 0)
      }

      if (child.childSlots === 0) {
        child.offsetX = prev.offsetX + 1
      } else {
        child.offsetX = prev.childSlots === 0
          ? prev.offsetX + prev.slotDiff + 1
          : prev.offsetX + prev.childSlots
      }
    }

    preprocess(child)
  })
}

export function assignX(node, parentX) {
  node._x = parentX + (node.offsetX || 0) * H_STEP
  if (!node.children || node.children.length === 0) return
  node.children.forEach(child => assignX(child, node._x))
}

export function assignY(node) {
  node._y = node.generation * (NODE_H + V_GAP) + 40
  if (node.children) node.children.forEach(child => assignY(child))
}

export function collectNodesAndEdges(node, nodes, edges, parentId = null, dynasty = '') {
  const edgeType = node.type === 'EMPEROR' ? 'smoothstep' : 'step'
  nodes.push({
    id: node.id,
    type: 'emperorCard',
    position: { x: node._x - NODE_W / 2, y: node._y - NODE_H / 2 },
    data: {
      name: node.name,
      title: node.title,
      temple: node.temple,
      reign: node.reign,
      order: node.order,
      rank: node.rank,
      cardType: node.type,
      cardColor: node.color,
      dynasty: dynasty
    }
  })
  if (parentId) {
    edges.push({
      id: `${parentId}->${node.id}`,
      source: parentId,
      target: node.id,
      type: edgeType,
      style: { stroke: '#7f8c8d', strokeWidth: 1.5 },
      markerEnd: { type: 'arrowclosed', color: '#7f8c8d', width: 14, height: 14 },
      zIndex: 0,
    })
  }
  if (node.children) {
    node.children.forEach(child => collectNodesAndEdges(child, nodes, edges, node.id, dynasty))
  }
}

export function buildTitleNode(dynastyName) {
  return {
    id: 'title',
    type: 'titleCard',
    position: { x: 0, y: 0 },
    data: { text: `${dynastyName}帝王世袭图` },
    draggable: false,
    selectable: false,
    connectable: false,
  }
}

export function positionTitleNode(nodes, titleNode, offsetX = 250) {
  const emperorNodes = nodes.filter(n => n.type === 'emperorCard')
  const minX = Math.min(...emperorNodes.map(n => n.position.x))
  const minY = Math.min(...emperorNodes.map(n => n.position.y))
  titleNode.position = { x: minX - offsetX, y: minY }
}

export function buildLegendNode(items = DEFAULT_LEGEND_ITEMS) {
  return {
    id: 'legend',
    type: 'legendCard',
    position: { x: 0, y: 0 },
    data: { items },
    draggable: false,
    selectable: false,
    connectable: false,
  }
}

export function positionLegendNode(nodes, legendNode, titleNode) {
  const emperorNodes = nodes.filter(n => n.type === 'emperorCard')
  const maxY = Math.max(...emperorNodes.map(n => n.position.y + NODE_H))
  legendNode.position = {
    x: titleNode.position.x,
    y: maxY - LEGEND_H
  }
}

export function buildSuccessionEdges(nodes, SUCCESSION, TREE) {
  const successionEdges = []
  const parentMap = new Map()
  const buildParentMap = (node, pid) => {
    if (pid) parentMap.set(node.id, pid)
    if (node.children) node.children.forEach(c => buildParentMap(c, node.id))
  }
  buildParentMap(TREE, null)

  const nodeMap = new Map(nodes.map(n => [n.id, n]))

  for (const { from: fromId, to: toId, sourceHandle, targetHandle, type: edgeType } of SUCCESSION) {
    const edgeId = `succession_${fromId}->${toId}`
    const isDirectParent = parentMap.get(toId) === fromId

    if (isDirectParent && sourceHandle === 'bottom' && targetHandle === 'top') {
      const idx = edges.findIndex(e => e.source === fromId && e.target === toId)
      if (idx !== -1) {
        const existing = edges.splice(idx, 1)[0]
        existing.style = SUCCESSION_STYLE
        existing.markerEnd = SUCCESSION_MARKER
        existing.zIndex = SUCCESSION_ZINDEX
        successionEdges.push(existing)
      }
    } else {
      const edgeData = { ...SUCCESSION_STYLE }

      successionEdges.push({
        id: edgeId,
        source: fromId,
        target: toId,
        type: edgeType || 'smoothstep',
        sourceHandle,
        targetHandle,
        style: SUCCESSION_STYLE,
        markerEnd: SUCCESSION_MARKER,
        zIndex: SUCCESSION_ZINDEX,
        data: edgeData,
      })
    }
  }

  return successionEdges
}

export function processTree(TREE) {
  sortChildren(TREE)
  preprocess(TREE)
  assignX(TREE, 60)
  assignY(TREE)

  if (TREE.children && TREE.children.length > 0) {
    const first = TREE.children[0]
    const last  = TREE.children[TREE.children.length - 1]
    TREE._x = (first._x + last._x) / 2
  }
}
