/**
 * 明朝帝王世袭图数据
 */

import {
  NODE_W, NODE_H, H_STEP, V_GAP, TITLE_OFFSET_X,
  SUCCESSION_STYLE, SUCCESSION_MARKER, SUCCESSION_ZINDEX,
  sortChildren, preprocess, assignX, assignY,
  collectNodesAndEdges, buildTitleNode, positionTitleNode, processTree,
  buildLegendNode, positionLegendNode
} from '../utils/utils.js'

const TREE = {
  id: 'zhu_yuanzhang',
  name: '朱元璋', title: '洪武', temple: '明太祖', reign: '1368-1398',
  order: 1, type: 'FOUNDER', generation: 0, rank: 1,
  children: [
    {
      id: 'zhu_biao', name: '朱标', title: '懿文太子', type: 'PRINCE',
      generation: 1, rank: 1,
      children: [
        { id: 'zhu_xiongying', name: '朱雄英', title: '虞怀王', type: 'PRINCE', generation: 2, rank: 1, children: [] },
        {
          id: 'zhu_yunwen', name: '朱允炆', title: '建文', temple: '明惠帝',
          reign: '1398-1402', order: 2, type: 'EMPEROR', generation: 2, rank: 2,
          children: [
            { id: 'zhu_wenkui', name: '朱文奎', title: '太子', type: 'PRINCE', generation: 3, rank: 1, children: [] },
            { id: 'zhu_wengui', name: '朱文圭', title: '建庶人', type: 'PRINCE', generation: 3, rank: 2, children: [] }
          ]
        },
        { id: 'zhu_yunteng', name: '朱允熥', title: '吴王', type: 'PRINCE', generation: 2, rank: 3, children: [] },
        { id: 'zhu_yunjian', name: '朱允熞', title: '衡王', type: 'PRINCE', generation: 2, rank: 4, children: [] },
        { id: 'zhu_yunxi',   name: '朱允熙', title: '徐王', type: 'PRINCE', generation: 2, rank: 5, children: [] }
      ]
    },
    { id: 'zhu_shang', name: '朱樉',  title: '秦愍王',  type: 'PRINCE', generation: 1, rank: 2,  children: [] },
    { id: 'zhu_gang',  name: '朱棡',  title: '晋恭王',  type: 'PRINCE', generation: 1, rank: 3,  children: [] },
    {
      id: 'zhu_di', name: '朱棣', title: '永乐', temple: '明成祖', reign: '1402-1424',
      order: 3, type: 'EMPEROR', generation: 1, rank: 4,
      children: [
        {
          id: 'zhu_gaochi', name: '朱高炽', title: '洪熙', temple: '明仁宗',
          reign: '1424-1425', order: 4, type: 'EMPEROR', generation: 2, rank: 1,
          children: [
            {
              id: 'zhu_zhanji', name: '朱瞻基', title: '宣德', temple: '明宣宗',
              reign: '1425-1435', order: 5, type: 'EMPEROR', generation: 3, rank: 1,
              children: [
                {
                  id: 'zhu_qizhen', name: '朱祁镇', title: '正统/天顺', temple: '明英宗',
                  reign: '1435-1449/1457-1464', order: 6, type: 'EMPEROR', generation: 4, rank: 1,
                  children: [
                    {
                      id: 'zhu_jianshen', name: '朱见深', title: '成化', temple: '明宪宗',
                      reign: '1464-1487', order: 9, type: 'EMPEROR', generation: 5, rank: 1,
                      children: [
                        { id: 'zhu_youji',    name: '朱祐极', title: '悼恭太子', type: 'PRINCE', generation: 6, rank: 1,  children: [] },
                        {
                          id: 'zhu_youtang', name: '朱祐樘', title: '弘治', temple: '明孝宗',
                          reign: '1487-1505', order: 10, type: 'EMPEROR', generation: 6, rank: 2,
                          children: [
                            {
                              id: 'zhu_houzhao', name: '朱厚照', title: '正德', temple: '明武宗',
                              reign: '1505-1521', order: 11, type: 'EMPEROR', generation: 7, rank: 1,
                              children: []
                            },
                            { id: 'zhu_houwei', name: '朱厚炜', title: '蔚悼王', type: 'PRINCE', generation: 7, rank: 2, children: [] }
                          ]
                        },
                        {
                          id: 'zhu_youyuan', name: '朱祐杬', title: '兴献王', type: 'PRINCE', generation: 6, rank: 3,
                          children: [
                            { id: 'zhu_houxi', name: '朱厚熙', title: '早夭', type: 'DIED_YOUNG', generation: 7, rank: 1, children: [] },
                            {
                              id: 'zhu_houcong', name: '朱厚熜', title: '嘉靖', temple: '明世宗',
                              reign: '1521-1567', order: 12, type: 'EMPEROR', generation: 7, rank: 2,
                              children: [
                                { id: 'zhu_zaiji',    name: '朱载基', title: '哀冲太子', type: 'PRINCE', generation: 8, rank: 1, children: [] },
                                { id: 'zhu_zairang',  name: '朱载壡', title: '庄敬太子', type: 'PRINCE', generation: 8, rank: 2, children: [] },
                                {
                                  id: 'zhu_zaihou', name: '朱载坖', title: '隆庆', temple: '明穆宗',
                                  reign: '1567-1572', order: 13, type: 'EMPEROR', generation: 8, rank: 3,
                                  children: [
                                    { id: 'zhu_yiliu',  name: '朱翊釴', title: '宪怀太子', type: 'PRINCE', generation: 9, rank: 1, children: [] },
                                    { id: 'zhu_yiqian', name: '朱翊钤', title: '早夭', type: 'DIED_YOUNG', generation: 9, rank: 2, children: [] },
                                    {
                                      id: 'zhu_yijun', name: '朱翊钧', title: '万历', temple: '明神宗',
                                      reign: '1572-1620', order: 14, type: 'EMPEROR', generation: 9, rank: 3,
                                      children: [
                                        {
                                          id: 'zhu_changluo', name: '朱常洛', title: '泰昌', temple: '明光宗',
                                          reign: '1620', order: 15, type: 'EMPEROR', generation: 10, rank: 1,
                                          children: [
                                            {
                                              id: 'zhu_youjiao', name: '朱由校', title: '天启', temple: '明熹宗',
                                              reign: '1620-1627', order: 16, type: 'EMPEROR', generation: 11, rank: 1,
                                              children: [
                                                { id: 'zhu_ciran',  name: '朱慈燃', title: '早夭', type: 'DIED_YOUNG', generation: 12, rank: 1, children: [] },
                                                { id: 'zhu_cijiao', name: '朱慈焴', title: '早夭', type: 'DIED_YOUNG', generation: 12, rank: 2, children: [] },
                                                { id: 'zhu_cijing', name: '朱慈炅', title: '早夭', type: 'DIED_YOUNG', generation: 12, rank: 3, children: [] }
                                              ]
                                            },
                                            { id: 'zhu_youyong',  name: '朱由㰒', title: '早夭', type: 'DIED_YOUNG', generation: 11, rank: 2, children: [] },
                                            { id: 'zhu_youji2',   name: '朱由楫', title: '湘王',   type: 'PRINCE', generation: 11, rank: 3, children: [] },
                                            { id: 'zhu_youmo',    name: '朱由模', title: '简怀王', type: 'PRINCE', generation: 11, rank: 4, children: [] },
                                            {
                                              id: 'zhu_youjian', name: '朱由检', title: '崇祯', temple: '明思宗',
                                              reign: '1627-1644', order: 17, type: 'LAST', generation: 11, rank: 5,
                                              children: [
                                                { id: 'zhu_cilang',  name: '朱慈烺', title: '太子',   type: 'PRINCE', generation: 12, rank: 1, children: [] },
                                                { id: 'zhu_cixuan',  name: '朱慈烜', title: '早夭', type: 'DIED_YOUNG', generation: 12, rank: 2, children: [] },
                                                { id: 'zhu_cijing2', name: '朱慈炯', title: '定王',   type: 'PRINCE', generation: 12, rank: 3, children: [] },
                                                { id: 'zhu_cizhao',  name: '朱慈炤', title: '永王',   type: 'PRINCE', generation: 12, rank: 4, children: [] },
                                                { id: 'zhu_cihuan',  name: '朱慈焕', title: '悼灵王', type: 'PRINCE', generation: 12, rank: 5, children: [] },
                                                { id: 'zhu_ci6',     name: '朱慈䌭', title: '早夭', type: 'DIED_YOUNG', generation: 12, rank: 6, children: [] },
                                                { id: 'zhu_ci7',     name: '幼子',   title: '早夭', type: 'DIED_YOUNG', generation: 12, rank: 7, children: [] }
                                              ]
                                            },
                                            { id: 'zhu_youxu2',  name: '朱由栩', title: '怀隐王', type: 'PRINCE', generation: 11, rank: 6, children: [] },
                                            { id: 'zhu_youhui',  name: '朱由橏', title: '早夭', type: 'DIED_YOUNG', generation: 11, rank: 7, children: [] }
                                          ]
                                        },
                                        { id: 'zhu_changxu',   name: '朱常溆', title: '早夭', type: 'DIED_YOUNG', generation: 10, rank: 2, children: [] },
                                        { id: 'zhu_changxun',  name: '朱常洵', title: '福王',   type: 'PRINCE', generation: 10, rank: 3, children: [] },
                                        { id: 'zhu_changzhi',  name: '朱常治', title: '早夭', type: 'DIED_YOUNG', generation: 10, rank: 4, children: [] },
                                        { id: 'zhu_changhao',  name: '朱常浩', title: '瑞王',   type: 'PRINCE', generation: 10, rank: 5, children: [] },
                                        { id: 'zhu_changrun',  name: '朱常润', title: '惠王',   type: 'PRINCE', generation: 10, rank: 6, children: [] },
                                        { id: 'zhu_changying', name: '朱常瀛', title: '桂王',   type: 'PRINCE', generation: 10, rank: 7, children: [] },
                                        { id: 'zhu_changpu',   name: '朱常溥', title: '早夭', type: 'DIED_YOUNG', generation: 10, rank: 8, children: [] }
                                      ]
                                    },
                                    { id: 'zhu_yijing', name: '朱翊镠', title: '潞王', type: 'PRINCE', generation: 9, rank: 4, children: [] }
                                  ]
                                },
                                { id: 'zhu_zaigao2',  name: '朱载圳', title: '景恭王', type: 'PRINCE', generation: 8, rank: 4, children: [] },
                                { id: 'zhu_zaicheng', name: '朱载墒', title: '早夭', type: 'DIED_YOUNG', generation: 8, rank: 5, children: [] },
                                { id: 'zhu_zaili',    name: '朱载沴', title: '早夭', type: 'DIED_YOUNG', generation: 8, rank: 6, children: [] },
                                { id: 'zhu_zaijun',   name: '朱载㙺', title: '早夭', type: 'DIED_YOUNG', generation: 8, rank: 7, children: [] },
                                { id: 'zhu_zaigao',   name: '朱载堸', title: '均思王', type: 'PRINCE', generation: 8, rank: 8, children: [] }
                              ]
                            }
                          ]
                        },
                        { id: 'zhu_youyun',  name: '朱祐棆', title: '岐惠王',  type: 'PRINCE', generation: 6, rank: 4,  children: [] },
                        { id: 'zhu_youbin',  name: '朱祐槟', title: '益端王',  type: 'PRINCE', generation: 6, rank: 5,  children: [] },
                        { id: 'zhu_youmu',   name: '朱祐楎', title: '衡恭王',  type: 'PRINCE', generation: 6, rank: 6,  children: [] },
                        { id: 'zhu_youyue',  name: '朱祐枟', title: '蔚恭王',  type: 'PRINCE', generation: 6, rank: 7,  children: [] },
                        { id: 'zhu_youzhi',  name: '朱祐榰', title: '寿定王',  type: 'PRINCE', generation: 6, rank: 8,  children: [] },
                        { id: 'zhu_youpeng', name: '朱祐梈', title: '汝安王',  type: 'PRINCE', generation: 6, rank: 9,  children: [] },
                        { id: 'zhu_youxun',  name: '朱祐橓', title: '泾简王',  type: 'PRINCE', generation: 6, rank: 10, children: [] },
                        { id: 'zhu_youshu',  name: '朱祐枢', title: '荣庄王',  type: 'PRINCE', generation: 6, rank: 11, children: [] },
                        { id: 'zhu_youkai',  name: '朱祐楷', title: '申懿王',  type: 'PRINCE', generation: 6, rank: 12, children: [] },
                        { id: 'zhu_you13',   name: '无名',   title: '早夭', type: 'DIED_YOUNG', generation: 6, rank: 13, children: [] },
                        { id: 'zhu_you14',   name: '无名',   title: '早夭', type: 'DIED_YOUNG', generation: 6, rank: 14, children: [] }
                      ]
                    },
                    { id: 'zhu_jianlun',  name: '朱见潾', title: '德庄王',  type: 'PRINCE', generation: 5, rank: 2, children: [] },
                    { id: 'zhu_jianshi',  name: '朱见湜', title: '秀怀王',  type: 'PRINCE', generation: 5, rank: 3, children: [] },
                    { id: 'zhu_jianchun', name: '朱见淳', title: '崇简王',  type: 'PRINCE', generation: 5, rank: 4, children: [] },
                    { id: 'zhu_jianshu',  name: '朱见澍', title: '吉简王',  type: 'PRINCE', generation: 5, rank: 5, children: [] },
                    { id: 'zhu_jianze',   name: '朱见泽', title: '忻穆王',  type: 'PRINCE', generation: 5, rank: 6, children: [] },
                    { id: 'zhu_jianjun',  name: '朱见浚', title: '益端王',  type: 'PRINCE', generation: 5, rank: 7, children: [] },
                    { id: 'zhu_jianzhi',  name: '朱见治', title: '衡恭王',  type: 'PRINCE', generation: 5, rank: 8, children: [] },
                    { id: 'zhu_jianpei',  name: '朱见沛', title: '雍靖王',  type: 'PRINCE', generation: 5, rank: 9, children: [] }
                  ]
                },
                {
                  id: 'zhu_qiyu', name: '朱祁钰', title: '景泰', temple: '明代宗',
                  reign: '1449-1457', order: 7, type: 'EMPEROR', generation: 4, rank: 2,
                  children: [
                    { id: 'zhu_jianji', name: '朱见济', title: '怀献太子', type: 'PRINCE', generation: 5, rank: 1, children: [] }
                  ]
                }
              ]
            },
            { id: 'zhu_zhanjun',   name: '朱瞻埈', title: '郑靖王',  type: 'PRINCE', generation: 3, rank: 2,  children: [] },
            { id: 'zhu_zhanyong',  name: '朱瞻墉', title: '越靖王',  type: 'PRINCE', generation: 3, rank: 3,  children: [] },
            { id: 'zhu_zhanyin',   name: '朱瞻垠', title: '蕲献王',  type: 'PRINCE', generation: 3, rank: 4,  children: [] },
            { id: 'zhu_zhanshan',  name: '朱瞻墡', title: '襄宪王',  type: 'PRINCE', generation: 3, rank: 5,  children: [] },
            { id: 'zhu_zhankang',  name: '朱瞻堈', title: '荆宪王',  type: 'PRINCE', generation: 3, rank: 6,  children: [] },
            { id: 'zhu_zhanmo',    name: '朱瞻墺', title: '淮靖王',  type: 'PRINCE', generation: 3, rank: 7,  children: [] },
            { id: 'zhu_zhankui',   name: '朱瞻垲', title: '滕怀王',  type: 'PRINCE', generation: 3, rank: 8,  children: [] },
            { id: 'zhu_zhanji2',   name: '朱瞻垍', title: '梁庄王',  type: 'PRINCE', generation: 3, rank: 9,  children: [] },
            { id: 'zhu_zhanshan2', name: '朱瞻埏', title: '卫恭王',  type: 'PRINCE', generation: 3, rank: 10, children: [] }
          ]
        },
        { id: 'zhu_gaoxu',  name: '朱高煦', title: '汉王',   type: 'PRINCE', generation: 2, rank: 2, children: [] },
        { id: 'zhu_gaosui', name: '朱高燧', title: '赵简王', type: 'PRINCE', generation: 2, rank: 3, children: [] },
        { id: 'zhu_gaoxi',  name: '朱高爔', title: '早夭', type: 'DIED_YOUNG', generation: 2, rank: 4, children: [] }
      ]
    },
    { id: 'zhu_su',   name: '朱橚',  title: '周定王', type: 'PRINCE', generation: 1, rank: 5,  children: [] },
    { id: 'zhu_zhen', name: '朱桢',  title: '楚昭王', type: 'PRINCE', generation: 1, rank: 6,  children: [] },
    { id: 'zhu_fu',   name: '朱榑',  title: '齐恭王', type: 'PRINCE', generation: 1, rank: 7,  children: [] },
    { id: 'zhu_zi',   name: '朱梓',  title: '潭王',   type: 'PRINCE', generation: 1, rank: 8,  children: [] },
    { id: 'zhu_qi',   name: '朱杞',  title: '赵王',   type: 'PRINCE', generation: 1, rank: 9,  children: [] },
    { id: 'zhu_tan',  name: '朱檀',  title: '鲁荒王', type: 'PRINCE', generation: 1, rank: 10, children: [] },
    { id: 'zhu_chun', name: '朱椿',  title: '蜀献王', type: 'PRINCE', generation: 1, rank: 11, children: [] },
    { id: 'zhu_bai',  name: '朱柏',  title: '湘献王', type: 'PRINCE', generation: 1, rank: 12, children: [] },
    { id: 'zhu_gui',  name: '朱桂',  title: '代简王', type: 'PRINCE', generation: 1, rank: 13, children: [] },
    { id: 'zhu_jian', name: '朱楧',  title: '肃庄王', type: 'PRINCE', generation: 1, rank: 14, children: [] },
    { id: 'zhu_zhi',  name: '朱植',  title: '辽简王', type: 'PRINCE', generation: 1, rank: 15, children: [] },
    { id: 'zhu_zhan', name: '朱栴',  title: '庆靖王', type: 'PRINCE', generation: 1, rank: 16, children: [] },
    { id: 'zhu_quan', name: '朱权',  title: '宁献王', type: 'PRINCE', generation: 1, rank: 17, children: [] },
    { id: 'zhu_pian', name: '朱楩',  title: '岷庄王', type: 'PRINCE', generation: 1, rank: 18, children: [] },
    { id: 'zhu_hui',  name: '朱橞',  title: '谷王',   type: 'PRINCE', generation: 1, rank: 19, children: [] },
    { id: 'zhu_song', name: '朱松',  title: '韩宪王', type: 'PRINCE', generation: 1, rank: 20, children: [] },
    { id: 'zhu_mo',   name: '朱模',  title: '沈简王', type: 'PRINCE', generation: 1, rank: 21, children: [] },
    { id: 'zhu_ying', name: '朱楹',  title: '安惠王', type: 'PRINCE', generation: 1, rank: 22, children: [] },
    { id: 'zhu_jing', name: '朱桱',  title: '唐定王', type: 'PRINCE', generation: 1, rank: 23, children: [] },
    { id: 'zhu_dong', name: '朱栋',  title: '郢靖王', type: 'PRINCE', generation: 1, rank: 24, children: [] },
    { id: 'zhu_yi',   name: '朱㰘',  title: '伊厉王', type: 'PRINCE', generation: 1, rank: 25, children: [] },
    { id: 'zhu_nan',  name: '朱楠',  title: '早夭', type: 'DIED_YOUNG', generation: 1, rank: 26, children: [] }
  ]
}

const SUCCESSION = [
  { from: 'zhu_yuanzhang', to: 'zhu_yunwen',  sourceHandle: 'left', targetHandle: 'bottom-t', type: 'waypoint' },
  { from: 'zhu_yunwen',    to: 'zhu_di',       sourceHandle: 'bottom', targetHandle: 'left-t', type: 'waypoint' },
  { from: 'zhu_di',        to: 'zhu_gaochi',   sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_gaochi',    to: 'zhu_zhanji',   sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_zhanji',    to: 'zhu_qizhen',   sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_qizhen',    to: 'zhu_jianshen', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_jianshen',  to: 'zhu_youtang',  sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_youtang',   to: 'zhu_houzhao',  sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_houcong',   to: 'zhu_zaihou',   sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_zaihou',    to: 'zhu_yijun',    sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_yijun',     to: 'zhu_changluo', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'zhu_changluo',  to: 'zhu_youjiao',  sourceHandle: 'bottom', targetHandle: 'top' },
]

export function buildFlowData() {
  const nodes = []
  const edges = []

  processTree(TREE)
  collectNodesAndEdges(TREE, nodes, edges, null, '明朝')

  const titleNode = buildTitleNode('明朝')
  nodes.push(titleNode)
  positionTitleNode(nodes, titleNode, TITLE_OFFSET_X)

  const legendNode = buildLegendNode()
  nodes.push(legendNode)
  positionLegendNode(nodes, legendNode, titleNode)

  // 传位关系边单独收集，最后 push 保证 DOM 顺序在最上层
  const successionEdges = []
  const parentMap = new Map()
  const buildParentMap = (node, pid) => {
    if (pid) parentMap.set(node.id, pid)
    if (node.children) node.children.forEach(c => buildParentMap(c, node.id))
  }
  buildParentMap(TREE, null)

  // 建立 id -> node 的映射，用于计算折点坐标
  const nodeMap = new Map(nodes.map(n => [n.id, n]))

  for (const { from: fromId, to: toId, sourceHandle, targetHandle, type: edgeType } of SUCCESSION) {
    const edgeId = `succession_${fromId}->${toId}`
    const isDirectParent = parentMap.get(toId) === fromId

    if (isDirectParent && sourceHandle === 'bottom' && targetHandle === 'top') {
      // 标准父子关系，把现有边移到末尾并改颜色
      const idx = edges.findIndex(e => e.source === fromId && e.target === toId)
      if (idx !== -1) {
        const existing = edges.splice(idx, 1)[0]
        existing.style = SUCCESSION_STYLE
        existing.markerEnd = SUCCESSION_MARKER
        existing.zIndex = SUCCESSION_ZINDEX
        successionEdges.push(existing)
      }
    } else {
      // 新增传位虚线（自定义连接点，或非直接父子）
      const edgeData = { ...SUCCESSION_STYLE }

      // waypoint 类型：朱元璋左侧 → 向左到朱标左边 → 垂直向下到朱允炆底部
      if (edgeType === 'waypoint' && fromId === 'zhu_yuanzhang' && toId === 'zhu_yunwen') {
        const fromNode   = nodeMap.get(fromId)
        const biao       = nodeMap.get('zhu_biao')
        const xiongying  = nodeMap.get('zhu_xiongying')
        const toNode     = nodeMap.get(toId)
        if (fromNode && biao && xiongying && toNode) {
          const leftX      = biao.position.x - 20                        // 朱标左边再偏左20
          const fromY      = fromNode.position.y + NODE_H / 2            // 朱元璋左侧中点Y
          const belowXY    = xiongying.position.y + NODE_H + 45          // 朱雄英下方
          const toX        = toNode.position.x + NODE_W / 2              // 朱允炆中点X
          const toBottomY  = toNode.position.y + NODE_H                  // 朱允炆底部Y
          edgeData.waypoints = [
            { x: leftX, y: fromY },        // 向左平移
            { x: leftX, y: belowXY },      // 垂直向下到朱雄英下方
            { x: toX,   y: belowXY },      // 水平右拐到朱允炆正下方
            { x: toX,   y: toBottomY + 30 } // 稍低于底部，保证箭头向上
          ]
        }
      }

      // 朱允炆 → 朱棣
      if (edgeType === 'waypoint' && fromId === 'zhu_yunwen' && toId === 'zhu_di') {
        const fromNode  = nodeMap.get(fromId)
        const yunxi     = nodeMap.get('zhu_yunxi')   // 朱允熙（朱标最后一子）
        const gaochi    = nodeMap.get('zhu_gaochi')  // 朱高炽（朱棣长子）
        const toNode    = nodeMap.get(toId)
        if (fromNode && yunxi && gaochi && toNode) {
          const fromX     = fromNode.position.x + NODE_W / 2   // 朱允炆底部中点X
          const fromBottomY = fromNode.position.y + NODE_H     // 朱允炆底部Y
          const below     = fromBottomY + 45                   // 向下32
          // 朱允熙右边 和 朱高炽左边 的中点X
          const midX      = (yunxi.position.x + NODE_W + gaochi.position.x) / 2
          const toY       = toNode.position.y + NODE_H / 2     // 朱棣左侧中点Y
          edgeData.waypoints = [
            { x: fromX,  y: below  },
            { x: midX,   y: below  },
            { x: midX,   y: toY+ 10 },
            { x: toNode.position.x - 12, y: toY + 10 },
          ]
          edgeData.label      = '靖难之役'
          edgeData.labelPoint = { x: (fromX + midX) / 2, y: below + 14 }
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

  // 红色传位边最后 push，保证 DOM 顺序在最上层
  edges.push(...successionEdges)

  // 完全自定义：朱祁镇 -> 朱祁钰（兄被俘，第继位）
  const zhuQizhenNode = nodeMap.get('zhu_qizhen')
  const zhuQiyuNode = nodeMap.get('zhu_qiyu')
  if (zhuQizhenNode && zhuQiyuNode) {
    const fromX = zhuQizhenNode.position.x + NODE_W
    const fromY = zhuQizhenNode.position.y + NODE_H / 2 - 6
    const toX = zhuQiyuNode.position.x
    const toY = zhuQiyuNode.position.y + NODE_H / 2 - 6
    
    const customEdge = {
      id: 'custom_zhu_qizhen_to_zhu_qiyu',
      source: 'zhu_qizhen',
      target: 'zhu_qiyu',
      type: 'waypoint',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        startPoint: { x: fromX, y: fromY },
        waypoints: [],
        endPoint: { x: toX, y: toY },
        label: '兄被俘，第继位',
        labelPoint: { x: (fromX + toX) / 2, y: fromY - 8 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：朱祁钰 -> 朱祁镇（夺门之变）
  const zhuQiyuNode2 = nodeMap.get('zhu_qiyu')
  const zhuQizhenNode2 = nodeMap.get('zhu_qizhen')
  if (zhuQiyuNode2 && zhuQizhenNode2) {
    const fromX = zhuQiyuNode2.position.x
    const fromY = zhuQiyuNode2.position.y + NODE_H / 2 + 6
    const toX = zhuQizhenNode2.position.x + NODE_W
    const toY = zhuQizhenNode2.position.y + NODE_H / 2 + 6

    const customEdge2 = {
      id: 'custom_zhu_qiyu_to_zhu_qizhen',
      source: 'zhu_qiyu',
      target: 'zhu_qizhen',
      type: 'waypoint',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        startPoint: { x: fromX, y: fromY },
        waypoints: [],
        endPoint: { x: toX, y: toY },
        label: '夺门之变',
        labelPoint: { x: (fromX + toX) / 2, y: fromY + 14 }
      }
    }
    edges.push(customEdge2)
  }

  // 完全自定义：朱厚照 -> 朱厚熜（藩王入继）
  const zhuHouzhaoNode = nodeMap.get('zhu_houzhao')
  const zhuHoucongNode = nodeMap.get('zhu_houcong')
  if (zhuHouzhaoNode && zhuHoucongNode) {
    const fromX = zhuHouzhaoNode.position.x + NODE_W / 2
    const fromY = zhuHouzhaoNode.position.y + NODE_H
    const toX = zhuHoucongNode.position.x + NODE_W / 2
    const toY = zhuHoucongNode.position.y + NODE_H
    const below = Math.max(fromY, toY) + 45

    const customEdge3 = {
      id: 'custom_zhu_houzhao_to_zhu_houcong',
      source: 'zhu_houzhao',
      target: 'zhu_houcong',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'bottom',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromY + 25 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toY + 25 }
        ],
        label: '藩王入继',
        labelPoint: { x: (fromX + toX) / 2, y: below + 14 }
      }
    }
    edges.push(customEdge3)
  }

  // 完全自定义：朱由校 -> 朱由检（兄终弟及）
  const zhuYoujiaoNode = nodeMap.get('zhu_youjiao')
  const zhuYoujianNode = nodeMap.get('zhu_youjian')
  if (zhuYoujiaoNode && zhuYoujianNode) {
    const fromX = zhuYoujiaoNode.position.x + NODE_W / 2
    const fromY = zhuYoujiaoNode.position.y + NODE_H
    const toX = zhuYoujianNode.position.x + NODE_W / 2
    const toY = zhuYoujianNode.position.y + NODE_H
    const below = Math.max(fromY, toY) + 45

    const customEdge4 = {
      id: 'custom_zhu_youjiao_to_zhu_youjian',
      source: 'zhu_youjiao',
      target: 'zhu_youjian',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'bottom',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromY + 25 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toY + 25 }
        ],
        label: '兄终弟及',
        labelPoint: { x: (fromX + toX) / 2 + 60, y: below + 14 }
      }
    }
    edges.push(customEdge4)
  }

  return { nodes, edges }
}
