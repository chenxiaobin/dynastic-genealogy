/**
 * 清朝帝王世袭图数据
 */

import {
  NODE_W, NODE_H, H_STEP, V_GAP, TITLE_OFFSET_X,
  SUCCESSION_STYLE, SUCCESSION_MARKER, SUCCESSION_ZINDEX,
  sortChildren, preprocess, assignX, assignY,
  collectNodesAndEdges, buildTitleNode, positionTitleNode, processTree,
  buildLegendNode, positionLegendNode
} from '../utils/utils.js'

const TREE = {
  id: 'nurhaci',
  name: '努尔哈赤', title: '天命', temple: '清太祖', reign: '1616-1626',
  order: 1, type: 'FOUNDER', generation: 0, rank: 1,
  children: [
    { id: 'chu_yingtai',  name: '褚英',   title: '广略贝勒',  type: 'PRINCE',      generation: 1, rank: 1,  children: [] },
    { id: 'daisan',       name: '代善',   title: '礼亲王',    type: 'PRINCE',      generation: 1, rank: 2,  children: [] },
    { id: 'abai',         name: '阿拜',   title: '镇国公',    type: 'PRINCE',      generation: 1, rank: 3,  children: [] },
    { id: 'tanggu_dai',   name: '汤古代', title: '镇国将军',  type: 'PRINCE',      generation: 1, rank: 4,  children: [] },
    { id: 'manggu_ertai', name: '莽古尔泰', title: '和硕贝勒', type: 'PRINCE',     generation: 1, rank: 5,  children: [] },
    { id: 'tabai',        name: '塔拜',   title: '辅国公',    type: 'PRINCE',      generation: 1, rank: 6,  children: [] },
    { id: 'abatai',       name: '阿巴泰', title: '饶馀郡王',  type: 'PRINCE',      generation: 1, rank: 7,  children: [] },
    {
      id: 'huangtaiji', name: '皇太极', title: '天聪/崇德', temple: '清太宗',
      reign: '1626-1643', order: 2, type: 'EMPEROR', generation: 1, rank: 7,
      children: [
        { id: 'haoge', name: '豪格', title: '肃亲王', type: 'PRINCE', generation: 2, rank: 1, children: [] },
        { id: 'luoke_duo',  name: '洛格',   title: '早夭',      type: 'DIED_YOUNG', generation: 2, rank: 2,  children: [] },
        { id: 'luoke_hong', name: '洛博会', title: '早夭',      type: 'DIED_YOUNG', generation: 2, rank: 3,  children: [] },
        { id: 'ye_bu_shu',  name: '叶布舒', title: '辅国公',    type: 'PRINCE',     generation: 2, rank: 4,  children: [] },
        { id: 'shuo_sai',   name: '硕塞',   title: '承泽亲王',  type: 'PRINCE',     generation: 2, rank: 5,  children: [] },
        { id: 'gao_sai',    name: '高塞',   title: '镇国公',    type: 'PRINCE',     generation: 2, rank: 6,  children: [] },
        { id: 'chang_shu',  name: '常舒',   title: '辅国公',    type: 'PRINCE',     generation: 2, rank: 7,  children: [] },
        { id: 'wuming_2_8', name: '无名',   title: '早夭',      type: 'DIED_YOUNG', generation: 2, rank: 8,  children: [] },
        {
          id: 'fulin', name: '福临', title: '顺治', temple: '清世祖',
          reign: '1643-1661', order: 3, type: 'EMPEROR', generation: 2, rank: 9,
          children: [
            { id: 'niuniu',    name: '牛钮', title: '早夭',    type: 'DIED_YOUNG', generation: 3, rank: 1, children: [] },
            { id: 'fuquan',    name: '福全', title: '裕亲王',  type: 'PRINCE',     generation: 3, rank: 2, children: [] },
            {
              id: 'xuanye', name: '玄烨', title: '康熙', temple: '清圣祖',
              reign: '1661-1722', order: 4, type: 'EMPEROR', generation: 3, rank: 3,
              children: [
                { id: 'yinzhi1',    name: '胤禔',  title: '直郡王',  type: 'PRINCE',     generation: 4, rank: 1,  children: [] },
                { id: 'yinreng',    name: '胤礽',  title: '理亲王',  type: 'PRINCE',     generation: 4, rank: 2,  children: [] },
                { id: 'yinzhi',     name: '胤祉',  title: '诚郡王',  type: 'PRINCE',     generation: 4, rank: 3,  children: [] },
                { id: 'yinzhen', name: '胤禛', title: '雍正', temple: '清世宗',
                  reign: '1722-1735', order: 5, type: 'EMPEROR', generation: 4, rank: 4,
                  children: [
                    { id: 'honghui',  name: '弘晖', title: '早夭',    type: 'DIED_YOUNG', generation: 5, rank: 1,  children: [] },
                    { id: 'hongbing', name: '弘昐', title: '早夭',    type: 'DIED_YOUNG', generation: 5, rank: 2,  children: [] },
                    { id: 'hongyun',  name: '弘昀', title: '早夭',    type: 'DIED_YOUNG', generation: 5, rank: 3,  children: [] },
                    { id: 'hongshi',  name: '弘时', title: '削籍',    type: 'PRINCE',     generation: 5, rank: 4,  children: [] },
                    {
                      id: 'hongli', name: '弘历', title: '乾隆', temple: '清高宗',
                      reign: '1735-1796', order: 6, type: 'EMPEROR', generation: 5, rank: 5,
                      children: [
                        { id: 'yonghuang', name: '永璜', title: '定亲王',    type: 'PRINCE',     generation: 6, rank: 1,  children: [] },
                        { id: 'yonglian',  name: '永琏', title: '端慧太子',  type: 'DIED_YOUNG', generation: 6, rank: 2,  children: [] },
                        { id: 'yongzhang', name: '永璋', title: '循郡王',    type: 'PRINCE',     generation: 6, rank: 3,  children: [] },
                        { id: 'yongcheng', name: '永珹', title: '履亲王',    type: 'PRINCE',     generation: 6, rank: 4,  children: [] },
                        { id: 'yongqi',    name: '永琪', title: '荣亲王',    type: 'PRINCE',     generation: 6, rank: 5,  children: [] },
                        { id: 'yongrong',  name: '永瑢', title: '质亲王',    type: 'PRINCE',     generation: 6, rank: 6,  children: [] },
                        { id: 'yongcong',  name: '永琮', title: '哲亲王',    type: 'DIED_YOUNG', generation: 6, rank: 7,  children: [] },
                        { id: 'yongxuan',  name: '永璇', title: '仪亲王',    type: 'PRINCE',     generation: 6, rank: 8,  children: [] },
                        { id: 'yong9',     name: '无名', title: '早夭',      type: 'DIED_YOUNG', generation: 6, rank: 9,  children: [] },
                        { id: 'yongxing',  name: '永瑆', title: '成亲王',    type: 'PRINCE',     generation: 6, rank: 10, children: [] },
                        { id: 'yongji2',   name: '永璂', title: '贝勒',      type: 'PRINCE',     generation: 6, rank: 11, children: [] },
                        { id: 'yongji3',   name: '永璟', title: '早夭',      type: 'DIED_YOUNG', generation: 6, rank: 12, children: [] },
                        { id: 'yonglu',    name: '永璐', title: '早夭',      type: 'DIED_YOUNG', generation: 6, rank: 13, children: [] },
                        {
                          id: 'yongyan', name: '颙琰', title: '嘉庆', temple: '清仁宗',
                          reign: '1796-1820', order: 7, type: 'EMPEROR', generation: 6, rank: 14,
                          children: [
                            { id: 'wuming_7_1', name: '无名',  title: '穆郡王',  type: 'DIED_YOUNG', generation: 7, rank: 1, children: [] },
                            {
                              id: 'minning', name: '旻宁', title: '道光', temple: '清宣宗',
                              reign: '1820-1850', order: 8, type: 'EMPEROR', generation: 7, rank: 2,
                              children: [
                                { id: 'yiwei',  name: '奕纬', title: '隐郡王',    type: 'PRINCE',     generation: 8, rank: 1, children: [] },
                                { id: 'yigang', name: '奕纲', title: '顺郡王',    type: 'DIED_YOUNG', generation: 8, rank: 2, children: [] },
                                { id: 'yiji',   name: '奕继', title: '慧郡王',    type: 'DIED_YOUNG', generation: 8, rank: 3, children: [] },
                                {
                                  id: 'yizhu', name: '奕詝', title: '咸丰', temple: '清文宗',
                                  reign: '1850-1861', order: 9, type: 'EMPEROR', generation: 8, rank: 4,
                                  children: [
                                    {
                                      id: 'zaichun', name: '载淳', title: '同治', temple: '清穆宗',
                                      reign: '1861-1875', order: 10, type: 'EMPEROR', generation: 9, rank: 1,
                                      children: []
                                    },
                                    { id: 'wuming_9_2', name: '无名', title: '早夭', type: 'DIED_YOUNG', generation: 9, rank: 2, children: [] }
                                  ]
                                },
                                { id: 'yicong',  name: '奕誴', title: '惇亲王',  type: 'PRINCE', generation: 8, rank: 5, children: [] },
                                {
                                  id: 'yixin', name: '奕訢', title: '恭亲王', type: 'PRINCE', generation: 8, rank: 6,
                                  children: [
                                    {
                                      id: 'zaitian', name: '载湉', title: '光绪', temple: '清德宗',
                                      reign: '1875-1908', order: 11, type: 'EMPEROR', generation: 9, rank: 1,
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  id: 'yihuan', name: '奕譞', title: '醇亲王', type: 'PRINCE', generation: 8, rank: 7,
                                  children: [
                                    {
                                      id: 'puyi', name: '溥仪', title: '宣统', temple: '清逊帝',
                                      reign: '1908-1912', order: 12, type: 'LAST', generation: 9, rank: 2,
                                      children: []
                                    }
                                  ]
                                },
                                { id: 'yihe',   name: '奕詥', title: '钟郡王',  type: 'DIED_YOUNG', generation: 8, rank: 8, children: [] },
                                { id: 'yijing', name: '奕譓', title: '孚郡王',  type: 'DIED_YOUNG', generation: 8, rank: 9, children: [] }
                              ]
                            },
                            { id: 'miankai', name: '绵恺', title: '惇亲王', type: 'PRINCE', generation: 7, rank: 3, children: [] },
                            { id: 'mianxin', name: '绵忻', title: '瑞亲王', type: 'PRINCE', generation: 7, rank: 4, children: [] },
                            { id: 'mianyu',  name: '绵愉', title: '惠亲王', type: 'PRINCE', generation: 7, rank: 5, children: [] }
                          ]
                        },
                        { id: 'yong15',   name: '无名', title: '早夭',    type: 'DIED_YOUNG', generation: 6, rank: 15, children: [] },
                        { id: 'yong16',   name: '无名', title: '早夭',    type: 'DIED_YOUNG', generation: 6, rank: 16, children: [] },
                        { id: 'yonglin',  name: '永璘', title: '庆亲王', type: 'PRINCE',     generation: 6, rank: 17, children: [] }
                      ]
                    },
                    { id: 'hongzhou', name: '弘昼', title: '和亲王',  type: 'PRINCE',     generation: 5, rank: 6,  children: [] },
                    { id: 'fuyi',     name: '福宜', title: '早夭',    type: 'DIED_YOUNG', generation: 5, rank: 7,  children: [] },
                    { id: 'fuhui',    name: '福惠', title: '怀亲王',  type: 'DIED_YOUNG', generation: 5, rank: 8,  children: [] },
                    { id: 'fupei',    name: '福沛', title: '早夭',    type: 'DIED_YOUNG', generation: 5, rank: 9,  children: [] },
                    { id: 'honggong', name: '弘曕', title: '果郡王',  type: 'PRINCE',     generation: 5, rank: 10, children: [] }
                  ]
                },
                { id: 'yinqi',     name: '胤祺',  title: '恒亲王',  type: 'PRINCE',     generation: 4, rank: 5,  children: [] },
                { id: 'yinzuo',    name: '胤祚',  title: '早夭',    type: 'DIED_YOUNG', generation: 4, rank: 6,  children: [] },
                { id: 'yinyou',    name: '胤祐',  title: '淳郡王',  type: 'PRINCE',     generation: 4, rank: 7,  children: [] },
                { id: 'yinsi',     name: '胤禩',  title: '廉亲王',  type: 'PRINCE',     generation: 4, rank: 8,  children: [] },
                { id: 'yintang',   name: '胤禟',  title: '贝子',    type: 'PRINCE',     generation: 4, rank: 9,  children: [] },
                { id: 'yine',      name: '胤䄉',  title: '辅国公',  type: 'PRINCE',     generation: 4, rank: 10, children: [] },
                { id: 'yinjie',    name: '胤禌',  title: '早夭',    type: 'DIED_YOUNG', generation: 4, rank: 11, children: [] },
                { id: 'yintao',    name: '胤祹',  title: '履亲王',  type: 'PRINCE',     generation: 4, rank: 12, children: [] },
                { id: 'yinxiang',  name: '胤祥',  title: '怡亲王',  type: 'PRINCE',     generation: 4, rank: 13, children: [] },
                { id: 'yinti',     name: '胤禵',  title: '恂郡王',  type: 'PRINCE',     generation: 4, rank: 14, children: [] },
                { id: 'yinyou2',   name: '胤禑',  title: '愉郡王',  type: 'PRINCE',     generation: 4, rank: 15, children: [] },
                { id: 'yinlu',     name: '胤禄',  title: '庄亲王',  type: 'PRINCE',     generation: 4, rank: 16, children: [] },
                { id: 'yinli',     name: '胤礼',  title: '果亲王',  type: 'PRINCE',     generation: 4, rank: 17, children: [] },
                { id: 'yinxie',    name: '胤祄',  title: '早夭',    type: 'DIED_YOUNG', generation: 4, rank: 18, children: [] },
                { id: 'yinjie2',   name: '胤禝',  title: '早夭',    type: 'DIED_YOUNG', generation: 4, rank: 19, children: [] },
                { id: 'yinwei',    name: '胤祎',  title: '贝勒',    type: 'PRINCE',     generation: 4, rank: 20, children: [] },
                { id: 'yinxi2',    name: '胤禧',  title: '慎郡王',  type: 'PRINCE',     generation: 4, rank: 21, children: [] },
                { id: 'yinhu2',    name: '胤祜',  title: '贝勒',    type: 'PRINCE',     generation: 4, rank: 22, children: [] },
                { id: 'yinqi2',    name: '胤祁',  title: '贝勒',    type: 'PRINCE',     generation: 4, rank: 23, children: [] },
                { id: 'yinmi',     name: '胤秘',  title: '諴亲王',  type: 'PRINCE',     generation: 4, rank: 24, children: [] }
              ]
            },
            { id: 'wuming_3_4', name: '无名',   title: '早夭',    type: 'DIED_YOUNG', generation: 3, rank: 4, children: [] },
            { id: 'changning',  name: '常宁',   title: '恭亲王',  type: 'PRINCE',     generation: 3, rank: 5, children: [] },
            { id: 'qishou',     name: '奇绶',   title: '早夭',    type: 'DIED_YOUNG', generation: 3, rank: 6, children: [] },
            { id: 'longxi',     name: '隆禧',   title: '纯亲王',  type: 'PRINCE',     generation: 3, rank: 7, children: [] },
            { id: 'yonggan',    name: '永干',   title: '早夭',    type: 'DIED_YOUNG', generation: 3, rank: 8, children: [] }
          ]
        },
        { id: 'taosai',        name: '韬塞',     title: '辅国公',  type: 'PRINCE',     generation: 2, rank: 10, children: [] },
        { id: 'bomuboguo_er', name: '博穆博果尔', title: '襄亲王', type: 'PRINCE',     generation: 2, rank: 11, children: [] }
      ]
    },
    { id: 'babu_tai',    name: '巴布泰', title: '镇国公',    type: 'PRINCE',      generation: 1, rank: 9,  children: [] },
    { id: 'degele',      name: '德格类', title: '和硕贝勒',  type: 'PRINCE',      generation: 1, rank: 10, children: [] },
    { id: 'babuhai',     name: '巴布海', title: '镇国将军',  type: 'PRINCE',      generation: 1, rank: 11, children: [] },
    { id: 'ajige',       name: '阿济格', title: '英亲王',    type: 'PRINCE',      generation: 1, rank: 12, children: [] },
    { id: 'laimubu',     name: '赖慕布', title: '辅国公',    type: 'PRINCE',      generation: 1, rank: 13, children: [] },
    { id: 'dorgon',      name: '多尔衮', title: '睿亲王',    type: 'PRINCE',      generation: 1, rank: 14, children: [] },
    { id: 'duo_duo',     name: '多铎',   title: '豫亲王',    type: 'PRINCE',      generation: 1, rank: 15, children: [] },
    { id: 'feiyanggu',   name: '费扬果', title: '早夭', type: 'DIED_YOUNG', generation: 1, rank: 16, children: [] }
  ]
}

const SUCCESSION = [
  { from: 'nurhaci',   to: 'huangtaiji', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'huangtaiji', to: 'fulin',     sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'fulin',     to: 'xuanye',     sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'xuanye',    to: 'yinzhen',    sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'yinzhen',   to: 'hongli',     sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'hongli',    to: 'yongyan',    sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'yongyan',   to: 'minning',    sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'minning',   to: 'yizhu',      sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'yizhu',     to: 'zaichun',    sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zaichun',   to: 'zaitian',    sourceHandle: 'bottom', targetHandle: 'bottom-t', type: 'waypoint' },
  { from: 'zaitian',   to: 'puyi',       sourceHandle: 'bottom', targetHandle: 'bottom-t', type: 'waypoint' },
]

export function buildFlowData() {
  const nodes = []
  const edges = []

  processTree(TREE)
  collectNodesAndEdges(TREE, nodes, edges, null, '清朝')

  const titleNode = buildTitleNode('清朝')
  nodes.push(titleNode)
  positionTitleNode(nodes, titleNode, TITLE_OFFSET_X)

  const legendNode = buildLegendNode()
  nodes.push(legendNode)
  positionLegendNode(nodes, legendNode, titleNode)

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

      // 同治 → 光绪（旁系继承，底部年号底边中点连线）
      if (fromId === 'zaichun' && toId === 'zaitian') {
        const fromNode = nodeMap.get(fromId)
        const toNode   = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120        // 卡片实际高度120px，年号底边
          const toX   = toNode.position.x + NODE_W / 2
          const toY   = toNode.position.y + 120
          const midY  = Math.max(fromY, toY) + 20
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints  = [
            { x: fromX, y: midY },
            { x: toX,   y: midY },
          ]
          edgeData.endPoint   = { x: toX, y: toY }
          edgeData.label      = '旁系继承'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY + 14 }
        }
      }

      // 光绪 → 宣统（旁系继承，底部年号底边中点连线）
      if (fromId === 'zaitian' && toId === 'puyi') {
        const fromNode = nodeMap.get(fromId)
        const toNode   = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX   = toNode.position.x + NODE_W / 2
          const toY   = toNode.position.y + 120
          const midY  = Math.max(fromY, toY) + 20        // 与上一条错开，避免重叠
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints  = [
            { x: fromX, y: midY },
            { x: toX,   y: midY },
          ]
          edgeData.endPoint   = { x: toX, y: toY }
          edgeData.label      = '旁系继承'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY + 14 }
        }
      }

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

  edges.push(...successionEdges)

  return { nodes, edges }
}
