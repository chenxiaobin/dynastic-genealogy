/**
 * 唐朝帝王世袭图数据
 */

import {
  NODE_W,
  NODE_H,
  H_STEP,
  V_GAP,
  TITLE_OFFSET_X,
  SUCCESSION_STYLE,
  SUCCESSION_MARKER,
  SUCCESSION_ZINDEX,
  sortChildren,
  preprocess,
  assignX,
  assignY,
  collectNodesAndEdges,
  buildTitleNode,
  positionTitleNode,
  processTree,
  buildLegendNode,
  positionLegendNode,
  COLORS
} from '../utils/utils.js'

const TREE = {
  id: 'liyuan_a3f7',
  name: '李渊',
  title: '武德',
  temple: '唐高祖',
  reign: '618-626',
  order: 1,
  type: 'FOUNDER',
  generation: 1,
  rank: '第1帝',
  children: [
    {
      id: 'lijiancheng_8c2d',
      name: '李建成',
      title: '隐太子',
      type: 'PRINCE',
      generation: 2,
      rank: 1,
      children: []
    },
    {
      id: 'lishimin_9k1m',
      name: '李世民',
      title: '贞观',
      temple: '唐太宗',
      reign: '626-649',
      order: 2,
      type: 'EMPEROR',
      generation: 2,
      rank: '第2帝',
      children: [
        {
          id: 'lichengqian_2p5r',
          name: '李承乾',
          title: '太子',
          type: 'PRINCE',
          generation: 3,
          rank: 1,
          children: []
        },
        {
          id: 'likuan_4j8s',
          name: '李宽',
          title: '楚王',
          type: 'DIED_YOUNG',
          generation: 3,
          rank: 2,
          children: []
        },
        {
          id: 'like_7n3h',
          name: '李恪',
          title: '吴王',
          type: 'PRINCE',
          generation: 3,
          rank: 3,
          children: []
        },
        {
          id: 'litai_1q6w',
          name: '李泰',
          title: '魏王',
          type: 'PRINCE',
          generation: 3,
          rank: 4,
          children: []
        },
        {
          id: 'liyou_5t2z',
          name: '李佑',
          title: '齐王',
          type: 'PRINCE',
          generation: 3,
          rank: 5,
          children: []
        },
        {
          id: 'liyin_8e7k',
          name: '李愔',
          title: '蜀王',
          type: 'PRINCE',
          generation: 3,
          rank: 6,
          children: []
        },
        {
          id: 'lihun_3m9x',
          name: '李恽',
          title: '蒋王',
          type: 'PRINCE',
          generation: 3,
          rank: 7,
          children: []
        },
        {
          id: 'lizhen_6p1c',
          name: '李贞',
          title: '越王',
          type: 'PRINCE',
          generation: 3,
          rank: 8,
          children: []
        },
        {
          id: 'lizhi_2v4b',
          name: '李治',
          title: '永徽',
          temple: '唐高宗',
          reign: '649-683',
          order: 3,
          type: 'EMPEROR',
          generation: 3,
          rank: '第3帝',
          children: [
            {
              id: 'lizhong_9d8f',
              name: '李忠',
              title: '燕王',
              type: 'PRINCE',
              generation: 4,
              rank: 1,
              children: []
            },
            {
              id: 'lixiao_4g2j',
              name: '李孝',
              title: '原王',
              type: 'PRINCE',
              generation: 4,
              rank: 2,
              children: []
            },
            {
              id: 'lishangjin_7h5n',
              name: '李上金',
              title: '泽王',
              type: 'PRINCE',
              generation: 4,
              rank: 3,
              children: []
            },
            {
              id: 'lisujie_1m8q',
              name: '李素节',
              title: '许王',
              type: 'PRINCE',
              generation: 4,
              rank: 4,
              children: []
            },
            {
              id: 'lihong_5c3r',
              name: '李弘',
              title: '孝敬皇帝',
              temple: '孝敬皇帝',
              type: 'ANCESTOR',
              generation: 4,
              rank: 5,
              children: []
            },
            {
              id: 'lixian_8k6t',
              name: '李贤',
              title: '章怀太子',
              type: 'PRINCE',
              generation: 4,
              rank: 6,
              children: []
            },
            {
              id: 'lixian_2n9w',
              name: '李显',
              title: '嗣圣',
              temple: '唐中宗',
              reign: '683-684/705-710',
              order: 4,
              type: 'EMPEROR',
              generation: 4,
              rank: '第4帝(复)',
              children: [
                {
                  id: 'lichongrun_6p1s',
                  name: '李重润',
                  title: '懿德太子',
                  type: 'PRINCE',
                  generation: 5,
                  rank: 1,
                  children: []
                },
                {
                  id: 'lizhongfu_3t5v',
                  name: '李重福',
                  title: '谯王',
                  type: 'PRINCE',
                  generation: 5,
                  rank: 2,
                  children: []
                },
                {
                  id: 'lichongjun_7x2y',
                  name: '李重俊',
                  title: '节愍太子',
                  type: 'PRINCE',
                  generation: 5,
                  rank: 3,
                  children: []
                },
                {
                  id: 'lichongmao_4z8a',
                  name: '李重茂',
                  title: '唐隆',
                  temple: '唐殇帝',
                  reign: '710',
                  order: 7,
                  type: 'EMPEROR',
                  generation: 5,
                  rank: '傀儡皇帝',
                  children: []
                }
              ]
            },
            {
              id: 'lidan_9b3d',
              name: '李旦',
              title: '文明',
              temple: '唐睿宗',
              reign: '684-690/710-712',
              order: 5,
              type: 'EMPEROR',
              generation: 4,
              rank: '第5帝(复)',
              children: [
                {
                  id: 'lichengqi_5f7g',
                  name: '李成器',
                  title: '让皇帝',
                  type: 'ANCESTOR',
                  generation: 5,
                  rank: 1,
                  children: []
                },
                {
                  id: 'lichengyi_2h9k',
                  name: '李成义',
                  title: '惠庄太子',
                  type: 'PRINCE',
                  generation: 5,
                  rank: 2,
                  children: []
                },
                {
                  id: 'lilongji_8m4n',
                  name: '李隆基',
                  title: '先天',
                  temple: '唐玄宗',
                  reign: '712-756',
                  order: 6,
                  type: 'EMPEROR',
                  generation: 5,
                  rank: '第7帝',
                  children: [
                    {
                      id: 'licong_4q1p',
                      name: '李琮',
                      title: '奉天皇帝',
                      type: 'ANCESTOR',
                      generation: 6,
                      rank: 1,
                      children: []
                    },
                    {
                      id: 'liying_7s6t',
                      name: '李瑛',
                      title: '废太子',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 2,
                      children: []
                    },
                    {
                      id: 'liheng_2w8x',
                      name: '李亨',
                      title: '至德',
                      temple: '唐肃宗',
                      reign: '756-762',
                      order: 8,
                      type: 'EMPEROR',
                      generation: 6,
                      rank: '第8帝',
                      children: [
                        {
                          id: 'liyu_5z3c',
                          name: '李豫',
                          title: '宝应',
                          temple: '唐代宗',
                          reign: '762-779',
                          order: 9,
                          type: 'EMPEROR',
                          generation: 7,
                          rank: '第9帝',
                          children: [
                            {
                              id: 'lishi_9d6f',
                              name: '李适',
                              title: '建中',
                              temple: '唐德宗',
                              reign: '779-805',
                              order: 10,
                              type: 'EMPEROR',
                              generation: 8,
                              rank: '第10帝',
                              children: [
                                {
                                  id: 'lisheng_3g8h',
                                  name: '李诵',
                                  title: '永贞',
                                  temple: '唐顺宗',
                                  reign: '805',
                                  order: 11,
                                  type: 'EMPEROR',
                                  generation: 9,
                                  rank: '第11帝',
                                  children: [
                                    {
                                      id: 'lichun_7j2k',
                                      name: '李纯',
                                      title: '元和',
                                      temple: '唐宪宗',
                                      reign: '805-820',
                                      order: 12,
                                      type: 'EMPEROR',
                                      generation: 10,
                                      rank: '第12帝',
                                      children: [
                                        {
                                          id: 'liheng2_4n5m',
                                          name: '李恒',
                                          title: '长庆',
                                          temple: '唐穆宗',
                                          reign: '820-824',
                                          order: 13,
                                          type: 'EMPEROR',
                                          generation: 11,
                                          rank: '第13帝',
                                          children: [
                                            {
                                              id: 'lizhan_8p1q',
                                              name: '李湛',
                                              title: '宝历',
                                              temple: '唐敬宗',
                                              reign: '824-826',
                                              order: 14,
                                              type: 'EMPEROR',
                                              generation: 12,
                                              rank: '第14帝',
                                              children: [
                                                {
                                                  id: 'lipu_2s4t',
                                                  name: '李普',
                                                  title: '悼怀太子',
                                                  type: 'DIED_YOUNG',
                                                  generation: 13,
                                                  rank: 1,
                                                  children: []
                                                }
                                              ]
                                            },
                                            {
                                              id: 'liang_6v7w',
                                              name: '李昂',
                                              title: '太和',
                                              temple: '唐文宗',
                                              reign: '826-840',
                                              order: 15,
                                              type: 'EMPEROR',
                                              generation: 12,
                                              rank: '第15帝',
                                              children: []
                                            },
                                            {
                                              id: 'liyan_3x9z',
                                              name: '李炎',
                                              title: '会昌',
                                              temple: '唐武宗',
                                              reign: '840-846',
                                              order: 16,
                                              type: 'EMPEROR',
                                              generation: 12,
                                              rank: '第16帝',
                                              children: [
                                                {
                                                  id: 'lijun_1a2b',
                                                  name: '李峻',
                                                  title: '杞王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 1,
                                                  children: []
                                                },
                                                {
                                                  id: 'lixian_3c4d',
                                                  name: '李岘',
                                                  title: '益王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 2,
                                                  children: []
                                                },
                                                {
                                                  id: 'liqi_5e6f',
                                                  name: '李岐',
                                                  title: '兖王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 3,
                                                  children: []
                                                },
                                                {
                                                  id: 'liyi_7g8h',
                                                  name: '李峄',
                                                  title: '德王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 4,
                                                  children: []
                                                },
                                                {
                                                  id: 'licuo_9i0j',
                                                  name: '李嵯',
                                                  title: '昌王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 5,
                                                  children: []
                                                }
                                              ]
                                            },
                                            {
                                              id: 'licou_9a2c',
                                              name: '李凑',
                                              title: '怀懿太子',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 4,
                                              children: []
                                            },
                                            {
                                              id: 'lirong_5d6f',
                                              name: '李溶',
                                              title: '安王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 5,
                                              children: []
                                            }
                                          ]
                                        },
                                        {
                                          id: 'liyi2_2h8k',
                                          name: '李忱',
                                          title: '大中',
                                          temple: '唐宣宗',
                                          reign: '846-859',
                                          order: 17,
                                          type: 'EMPEROR',
                                          generation: 11,
                                          rank: '第17帝',
                                          children: [
                                            {
                                              id: 'licui_7m3n',
                                              name: '李漼',
                                              title: '咸通',
                                              temple: '唐懿宗',
                                              reign: '859-873',
                                              order: 18,
                                              type: 'EMPEROR',
                                              generation: 12,
                                              rank: '第18帝',
                                              children: [
                                                {
                                                  id: 'liyii_1a2b',
                                                  name: '李佾',
                                                  title: '魏王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 1,
                                                  children: []
                                                },
                                                {
                                                  id: 'liting2_3c4d',
                                                  name: '李侹',
                                                  title: '凉王',
                                                  type: 'DIED_YOUNG',
                                                  generation: 13,
                                                  rank: 2,
                                                  children: []
                                                },
                                                {
                                                  id: 'liji_5e6f',
                                                  name: '李佶',
                                                  title: '蜀王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 3,
                                                  children: []
                                                },
                                                {
                                                  id: 'likan_7g8h',
                                                  name: '李侃',
                                                  title: '威王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 4,
                                                  children: []
                                                },
                                                {
                                                  id: 'lixuan_4q6p',
                                                  name: '李儇',
                                                  title: '乾符',
                                                  temple: '唐僖宗',
                                                  reign: '873-888',
                                                  order: 19,
                                                  type: 'EMPEROR',
                                                  generation: 13,
                                                  rank: '第19帝',
                                                  children: [
                                                    {
                                                      id: 'lizhen_9i0j',
                                                      name: '李震',
                                                      title: '建王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 1,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lisheng2_1k2l',
                                                      name: '李升',
                                                      title: '益王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 2,
                                                      children: []
                                                    }
                                                  ]
                                                },
                                                {
                                                  id: 'libao_3m4n',
                                                  name: '李保',
                                                  title: '吉王',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 6,
                                                  children: []
                                                },
                                                {
                                                  id: 'liye_8s2t',
                                                  name: '李晔',
                                                  title: '龙纪',
                                                  temple: '唐昭宗',
                                                  reign: '888-904',
                                                  order: 20,
                                                  type: 'EMPEROR',
                                                  generation: 13,
                                                  rank: '第20帝',
                                                  children: [
                                                    {
                                                      id: 'liyu_2v4b',
                                                      name: '李裕',
                                                      title: '德王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 1,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'liyu2_5c6d',
                                                      name: '李祤',
                                                      title: '棣王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 2,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lixi_7e8f',
                                                      name: '李禊',
                                                      title: '虔王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 3,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'liyi3_9g0h',
                                                      name: '李禋',
                                                      title: '沂王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 4,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'liyi4_1j2k',
                                                      name: '李祎',
                                                      title: '遂王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 5,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'limi_3l4m',
                                                      name: '李秘',
                                                      title: '景王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 6,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'liqi_5n6o',
                                                      name: '李祺',
                                                      title: '祁王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 7,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lizhen2_7p8q',
                                                      name: '李禛',
                                                      title: '雅王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 8,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lixiang3_9r0s',
                                                      name: '李祥',
                                                      title: '琼王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 9,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lizhen3_1t2u',
                                                      name: '李祯',
                                                      title: '端王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 10,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'liqi2_3v4w',
                                                      name: '李祁',
                                                      title: '丰王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 11,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lifu_5x6y',
                                                      name: '李福',
                                                      title: '和王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 12,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lixi2_7z8a',
                                                      name: '李禧',
                                                      title: '登王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 13,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lihu_9b0c',
                                                      name: '李祜',
                                                      title: '嘉王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 14,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lizhi2_1d2e',
                                                      name: '李禔',
                                                      title: '颍王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 15,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'liyou_3f4g',
                                                      name: '李祐',
                                                      title: '蔡王',
                                                      type: 'PRINCE',
                                                      generation: 14,
                                                      rank: 16,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'lizhu_3v5w',
                                                      name: '李柷',
                                                      title: '天佑',
                                                      temple: '唐哀帝',
                                                      reign: '904-907',
                                                      order: 21,
                                                      type: 'LAST',
                                                      generation: 14,
                                                      rank: '第21帝',
                                                      children: []
                                                    }
                                                  ]
                                                },
                                                {
                                                  id: 'liyi_6z1a',
                                                  name: '李倚',
                                                  title: '恭哀太子',
                                                  type: 'PRINCE',
                                                  generation: 13,
                                                  rank: 8,
                                                  children: []
                                                }
                                              ]
                                            },
                                            {
                                              id: 'limei_5a6b',
                                              name: '李渼',
                                              title: '靖怀太子',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 2,
                                              children: []
                                            },
                                            {
                                              id: 'lijing_7c8d',
                                              name: '李泾',
                                              title: '雅王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 3,
                                              children: []
                                            },
                                            {
                                              id: 'lizi_9e0f',
                                              name: '李滋',
                                              title: '夔王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 4,
                                              children: []
                                            },
                                            {
                                              id: 'liyi_1g2h',
                                              name: '李沂',
                                              title: '庆王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 5,
                                              children: []
                                            },
                                            {
                                              id: 'lize_3i4j',
                                              name: '李泽',
                                              title: '濮王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 6,
                                              children: []
                                            },
                                            {
                                              id: 'lirun_5k6l',
                                              name: '李润',
                                              title: '鄂王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 7,
                                              children: []
                                            },
                                            {
                                              id: 'lihe_7m8n',
                                              name: '李冾',
                                              title: '怀王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 8,
                                              children: []
                                            },
                                            {
                                              id: 'lirui_9o0p',
                                              name: '李汭',
                                              title: '昭王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 9,
                                              children: []
                                            },
                                            {
                                              id: 'liwen_1q2r',
                                              name: '李汶',
                                              title: '康王',
                                              type: 'DIED_YOUNG',
                                              generation: 12,
                                              rank: 10,
                                              children: []
                                            },
                                            {
                                              id: 'liyong_3s4t',
                                              name: '李澭',
                                              title: '广王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 11,
                                              children: []
                                            },
                                            {
                                              id: 'liguan_5u6v',
                                              name: '李灌',
                                              title: '卫王',
                                              type: 'PRINCE',
                                              generation: 12,
                                              rank: 12,
                                              children: []
                                            }
                                          ]
                                        },
                                        {
                                          id: 'lining_6x1y',
                                          name: '李宁',
                                          title: '惠昭太子',
                                          type: 'DIED_YOUNG',
                                          generation: 11,
                                          rank: 2,
                                          children: []
                                        },
                                        {
                                          id: 'liyun_2z4a',
                                          name: '李恽',
                                          title: '澧王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 3,
                                          children: []
                                        },
                                        {
                                          id: 'licong3_8c7d',
                                          name: '李悰',
                                          title: '深王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 4,
                                          children: []
                                        },
                                        {
                                          id: 'lixin_5f2g',
                                          name: '李忻',
                                          title: '洋王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 5,
                                          children: []
                                        },
                                        {
                                          id: 'liwu_3h9k',
                                          name: '李悟',
                                          title: '绛王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 6,
                                          children: []
                                        },
                                        {
                                          id: 'like2_7m4n',
                                          name: '李恪',
                                          title: '建王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 7,
                                          children: []
                                        },
                                        {
                                          id: 'lijing_4q8t',
                                          name: '李憬',
                                          title: '鄜王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 8,
                                          children: []
                                        },
                                        {
                                          id: 'liyue_9s2v',
                                          name: '李悦',
                                          title: '琼王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 9,
                                          children: []
                                        },
                                        {
                                          id: 'lixun_3w6x',
                                          name: '李恂',
                                          title: '沔王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 10,
                                          children: []
                                        },
                                        {
                                          id: 'liyi_8a11',
                                          name: '李怿',
                                          title: '婺王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 11,
                                          children: []
                                        },
                                        {
                                          id: 'liyin2_2c4d',
                                          name: '李愔',
                                          title: '茂王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 12,
                                          children: []
                                        },
                                        {
                                          id: 'lixie_8f7g',
                                          name: '李协',
                                          title: '淄王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 13,
                                          children: []
                                        },
                                        {
                                          id: 'lidan2_5h2j',
                                          name: '李憺',
                                          title: '衡王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 14,
                                          children: []
                                        },
                                        {
                                          id: 'lichu_3k9m',
                                          name: '李㤝',
                                          title: '澶王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 15,
                                          children: []
                                        },
                                        {
                                          id: 'lizhu2_7p4q',
                                          name: '李惴',
                                          title: '棣王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 16,
                                          children: []
                                        },
                                        {
                                          id: 'liti_4s8t',
                                          name: '李惕',
                                          title: '彭王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 17,
                                          children: []
                                        },
                                        {
                                          id: 'litan_9v2w',
                                          name: '李坦',
                                          title: '信王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 18,
                                          children: []
                                        },
                                        {
                                          id: 'liji_3x6z',
                                          name: '李㥽',
                                          title: '荣王',
                                          type: 'PRINCE',
                                          generation: 11,
                                          rank: 19,
                                          children: []
                                        }
                                      ]
                                    },
                                    {
                                      id: 'lijing2_8a1c',
                                      name: '李经',
                                      title: '郯王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 2,
                                      children: []
                                    },
                                    {
                                      id: 'liwei_4d5f',
                                      name: '李纬',
                                      title: '均王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 3,
                                      children: []
                                    },
                                    {
                                      id: 'lizong_7g9h',
                                      name: '李纵',
                                      title: '溆王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 4,
                                      children: []
                                    },
                                    {
                                      id: 'lishu_2k3m',
                                      name: '李纾',
                                      title: '莒王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 5,
                                      children: []
                                    },
                                    {
                                      id: 'lichou_6n8p',
                                      name: '李绸',
                                      title: '密王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 6,
                                      children: []
                                    },
                                    {
                                      id: 'lizong2_9q2t',
                                      name: '李综',
                                      title: '郇王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 7,
                                      children: []
                                    },
                                    {
                                      id: 'liyue2_3v5w',
                                      name: '李约',
                                      title: '邵王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 8,
                                      children: []
                                    },
                                    {
                                      id: 'lijie_7x1y',
                                      name: '李结',
                                      title: '宋王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 9,
                                      children: []
                                    },
                                    {
                                      id: 'lixiang_4z8a',
                                      name: '李缃',
                                      title: '集王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 10,
                                      children: []
                                    },
                                    {
                                      id: 'liqiu_8c3d',
                                      name: '李絿',
                                      title: '冀王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 11,
                                      children: []
                                    },
                                    {
                                      id: 'liqi_5f7g',
                                      name: '李绮',
                                      title: '和王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 12,
                                      children: []
                                    },
                                    {
                                      id: 'lixuan2_2h9k',
                                      name: '李绚',
                                      title: '衡王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 13,
                                      children: []
                                    },
                                    {
                                      id: 'lixun2_8m4n',
                                      name: '李纁',
                                      title: '会王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 14,
                                      children: []
                                    },
                                    {
                                      id: 'liwan_3q7p',
                                      name: '李绾',
                                      title: '福王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 15,
                                      children: []
                                    },
                                    {
                                      id: 'lishan_6s2t',
                                      name: '李缮',
                                      title: '珍王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 16,
                                      children: []
                                    },
                                    {
                                      id: 'ligun_4v5w',
                                      name: '李绲',
                                      title: '岳王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 17,
                                      children: []
                                    },
                                    {
                                      id: 'lishen_9x3z',
                                      name: '李绅',
                                      title: '袁王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 18,
                                      children: []
                                    },
                                    {
                                      id: 'lilun_3a7c',
                                      name: '李纶',
                                      title: '桂王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 19,
                                      children: []
                                    },
                                    {
                                      id: 'liqi2_7d2f',
                                      name: '李绮',
                                      title: '翼王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 20,
                                      children: []
                                    },
                                    {
                                      id: 'lifang_5g9h',
                                      name: '李繁',
                                      title: '蕲王',
                                      type: 'PRINCE',
                                      generation: 10,
                                      rank: 21,
                                      children: []
                                    }
                                  ]
                                },
                                {
                                  id: 'liliang_2k4m',
                                  name: '李谅',
                                  title: '通王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 2,
                                  children: []
                                },
                                {
                                  id: 'lishen2_8n7p',
                                  name: '李诜',
                                  title: '虔王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 3,
                                  children: []
                                },
                                {
                                  id: 'lixiang2_4q1t',
                                  name: '李详',
                                  title: '肃王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 4,
                                  children: []
                                },
                                {
                                  id: 'liqian_9v4w',
                                  name: '李谦',
                                  title: '资王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 5,
                                  children: []
                                },
                                {
                                  id: 'liyi3_3x8z',
                                  name: '李谊',
                                  title: '代王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 6,
                                  children: []
                                },
                                {
                                  id: 'lichen_7a2c',
                                  name: '李谌',
                                  title: '昭王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 7,
                                  children: []
                                },
                                {
                                  id: 'lijie2_5d6f',
                                  name: '李诫',
                                  title: '钦王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 8,
                                  children: []
                                },
                                {
                                  id: 'lie_9g3h',
                                  name: '李谔',
                                  title: '珍王',
                                  type: 'PRINCE',
                                  generation: 9,
                                  rank: 9,
                                  children: []
                                }
                              ]
                            },
                            {
                              id: 'limiao_2j8k',
                              name: '李邈',
                              title: '昭靖太子',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 2,
                              children: []
                            },
                            {
                              id: 'lixia_7m4n',
                              name: '李遐',
                              title: '均王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 3,
                              children: []
                            },
                            {
                              id: 'lishu2_4q9t',
                              name: '李述',
                              title: '睦王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 4,
                              children: []
                            },
                            {
                              id: 'liyu2_8s3v',
                              name: '李逾',
                              title: '丹王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 5,
                              children: []
                            },
                            {
                              id: 'lilian_3v6w',
                              name: '李连',
                              title: '恩王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 6,
                              children: []
                            },
                            {
                              id: 'lijiong_9x2z',
                              name: '李迥',
                              title: '韩王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 7,
                              children: []
                            },
                            {
                              id: 'ligou_4a8c',
                              name: '李遘',
                              title: '简王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 8,
                              children: []
                            },
                            {
                              id: 'linai_7d5f',
                              name: '李乃',
                              title: '益王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 9,
                              children: []
                            },
                            {
                              id: 'lixun3_2g9h',
                              name: '李迅',
                              title: '隋王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 10,
                              children: []
                            },
                            {
                              id: 'lixuan3_8k4m',
                              name: '李选',
                              title: '早夭',
                              type: 'DIED_YOUNG',
                              generation: 8,
                              rank: 11,
                              children: []
                            },
                            {
                              id: 'lisu_3n7p',
                              name: '李溯',
                              title: '蜀王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 12,
                              children: []
                            },
                            {
                              id: 'lizao_6q2t',
                              name: '李造',
                              title: '忻王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 13,
                              children: []
                            },
                            {
                              id: 'lixian2_4w5x',
                              name: '李暹',
                              title: '韶王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 14,
                              children: []
                            },
                            {
                              id: 'liyun2_9z3a',
                              name: '李运',
                              title: '嘉王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 15,
                              children: []
                            },
                            {
                              id: 'liyu3_5c7d',
                              name: '李遇',
                              title: '端王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 16,
                              children: []
                            },
                            {
                              id: 'liyu4_8f2g',
                              name: '李遹',
                              title: '循王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 17,
                              children: []
                            },
                            {
                              id: 'litong_3h9k',
                              name: '李通',
                              title: '恭王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 18,
                              children: []
                            },
                            {
                              id: 'likui_7m5n',
                              name: '李逵',
                              title: '原王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 19,
                              children: []
                            },
                            {
                              id: 'liyiya_4q8t',
                              name: '李逸',
                              title: '雅王',
                              type: 'PRINCE',
                              generation: 8,
                              rank: 20,
                              children: []
                            },
                            {
                              id: 'lixi2_9s2v',
                              name: '李僖',
                              title: '早夭',
                              type: 'DIED_YOUNG',
                              generation: 8,
                              rank: 21,
                              children: []
                            }
                          ]
                        },
                        {
                          id: 'lixi_3w6x',
                          name: '李系',
                          title: '越王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 2,
                          children: []
                        },
                        {
                          id: 'litan2_8a1c',
                          name: '李倓',
                          title: '承天皇帝',
                          type: 'ANCESTOR',
                          generation: 7,
                          rank: 3,
                          children: []
                        },
                        {
                          id: 'libi_4d5f',
                          name: '李佖',
                          title: '卫王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 4,
                          children: []
                        },
                        {
                          id: 'lijin_7g9h',
                          name: '李仅',
                          title: '彭王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 5,
                          children: []
                        },
                        {
                          id: 'lixianyan_2k3m',
                          name: '李僩',
                          title: '兖王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 6,
                          children: []
                        },
                        {
                          id: 'liting_6n8p',
                          name: '李侹',
                          title: '泾王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 7,
                          children: []
                        },
                        {
                          id: 'lirong2_9q2t',
                          name: '李荣',
                          title: '郓王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 8,
                          children: []
                        },
                        {
                          id: 'liguang_3v5w',
                          name: '李僙',
                          title: '襄王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 9,
                          children: []
                        },
                        {
                          id: 'lichui_7x1y',
                          name: '李倕',
                          title: '杞王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 10,
                          children: []
                        },
                        {
                          id: 'lisi_4z8a',
                          name: '李偲',
                          title: '召王',
                          type: 'PRINCE',
                          generation: 7,
                          rank: 11,
                          children: []
                        },
                        {
                          id: 'lizhao_8c3d',
                          name: '李佋',
                          title: '早夭',
                          type: 'DIED_YOUNG',
                          generation: 7,
                          rank: 12,
                          children: []
                        },
                        {
                          id: 'lidong_5f7g',
                          name: '李侗',
                          title: '早夭',
                          type: 'DIED_YOUNG',
                          generation: 7,
                          rank: 13,
                          children: []
                        }
                      ]
                    },
                    {
                      id: 'liyan2_2h9k',
                      name: '李琰',
                      title: '棣王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 4,
                      children: []
                    },
                    {
                      id: 'liyao_8m4n',
                      name: '李瑶',
                      title: '鄂王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 5,
                      children: []
                    },
                    {
                      id: 'liwan2_3q7p',
                      name: '李琬',
                      title: '靖恭太子',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 6,
                      children: []
                    },
                    {
                      id: 'liju_6s2t',
                      name: '李琚',
                      title: '光王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 7,
                      children: []
                    },
                    {
                      id: 'liyi4_4v5w',
                      name: '李一',
                      title: '夏悼王',
                      type: 'DIED_YOUNG',
                      generation: 6,
                      rank: 8,
                      children: []
                    },
                    {
                      id: 'lisui_9x3z',
                      name: '李璲',
                      title: '仪王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 9,
                      children: []
                    },
                    {
                      id: 'lijiao_3a7c',
                      name: '李璬',
                      title: '颍王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 10,
                      children: []
                    },
                    {
                      id: 'limin_7d2f',
                      name: '李敏',
                      title: '怀哀王',
                      type: 'DIED_YOUNG',
                      generation: 6,
                      rank: 11,
                      children: []
                    },
                    {
                      id: 'lilin_5g9h',
                      name: '李璘',
                      title: '永王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 12,
                      children: []
                    },
                    {
                      id: 'limao_2j8k',
                      name: '李瑁',
                      title: '寿王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 13,
                      children: []
                    },
                    {
                      id: 'libin_7m4n',
                      name: '李玢',
                      title: '延王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 14,
                      children: []
                    },
                    {
                      id: 'liqi2_4q9t',
                      name: '李琦',
                      title: '盛王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 15,
                      children: []
                    },
                    {
                      id: 'lihuan_8s3v',
                      name: '李环',
                      title: '济王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 16,
                      children: []
                    },
                    {
                      id: 'lihuang_3v6w',
                      name: '李瑝',
                      title: '信王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 17,
                      children: []
                    },
                    {
                      id: 'lici_9x2z',
                      name: '李玼',
                      title: '义王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 18,
                      children: []
                    },
                    {
                      id: 'ligui_4a8c',
                      name: '李珪',
                      title: '陈王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 19,
                      children: []
                    },
                    {
                      id: 'ligong_7d5f',
                      name: '李珙',
                      title: '丰王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 20,
                      children: []
                    },
                    {
                      id: 'litian2_2g9h',
                      name: '李瑱',
                      title: '恒王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 21,
                      children: []
                    },
                    {
                      id: 'lirui_8k4m',
                      name: '李璿',
                      title: '凉王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 22,
                      children: []
                    },
                    {
                      id: 'lijing2_3n7p',
                      name: '李璥',
                      title: '汴哀王',
                      type: 'PRINCE',
                      generation: 6,
                      rank: 23,
                      children: []
                    }
                  ]
                },
                {
                  id: 'lilongfan_6q2t',
                  name: '李隆范',
                  title: '惠文太子',
                  type: 'PRINCE',
                  generation: 5,
                  rank: 4,
                  children: []
                },
                {
                  id: 'lilongye_4w5x',
                  name: '李隆业',
                  title: '惠宣太子',
                  type: 'PRINCE',
                  generation: 5,
                  rank: 5,
                  children: []
                },
                {
                  id: 'lilongti_9z3a',
                  name: '李隆悌',
                  title: '隋王',
                  type: 'DIED_YOUNG',
                  generation: 5,
                  rank: 6,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 'wuzetian_5c7d',
          name: '武则天',
          title: '天授',
          temple: '则天大圣',
          reign: '690-705',
          order: 4,
          type: 'EMPRESS',
          generation: 3,
          rank: '第6帝',
          children: []
        },
        {
          id: 'lishen_8f2g',
          name: '李慎',
          title: '纪王',
          type: 'PRINCE',
          generation: 3,
          rank: 10,
          children: []
        },
        {
          id: 'lixiao2_3h9k',
          name: '李嚣',
          title: '江殇王',
          type: 'DIED_YOUNG',
          generation: 3,
          rank: 11,
          children: []
        },
        {
          id: 'lijian2_7m5n',
          name: '李简',
          title: '代王',
          type: 'DIED_YOUNG',
          generation: 3,
          rank: 12,
          children: []
        },
        {
          id: 'lifu_4q8t',
          name: '李福',
          title: '赵王',
          type: 'PRINCE',
          generation: 3,
          rank: 13,
          children: []
        },
        {
          id: 'liming_9s2v',
          name: '李明',
          title: '曹王',
          type: 'PRINCE',
          generation: 3,
          rank: 14,
          children: []
        }
      ]
    },
    {
      id: 'lixuanba_3w6x',
      name: '李玄霸',
      title: '卫王',
      type: 'PRINCE',
      generation: 2,
      rank: 3,
      children: []
    },
    {
      id: 'liyuanji_8a1c',
      name: '李元吉',
      title: '巢王',
      type: 'PRINCE',
      generation: 2,
      rank: 4,
      children: []
    },
    {
      id: 'lizhiyun_4d5f',
      name: '李智云',
      title: '楚王',
      type: 'PRINCE',
      generation: 2,
      rank: 5,
      children: []
    },
    {
      id: 'liyuanjing_7g9h',
      name: '李元景',
      title: '荆王',
      type: 'PRINCE',
      generation: 2,
      rank: 6,
      children: []
    },
    {
      id: 'liyuanchang_2k3m',
      name: '李元昌',
      title: '汉王',
      type: 'PRINCE',
      generation: 2,
      rank: 7,
      children: []
    },
    {
      id: 'liyuanheng_6n8p',
      name: '李元亨',
      title: '酆王',
      type: 'DIED_YOUNG',
      generation: 2,
      rank: 8,
      children: []
    },
    {
      id: 'liyuanfang_9q2t',
      name: '李元方',
      title: '周王',
      type: 'DIED_YOUNG',
      generation: 2,
      rank: 9,
      children: []
    },
    {
      id: 'liyuanli_3v5w',
      name: '李元礼',
      title: '徐王',
      type: 'PRINCE',
      generation: 2,
      rank: 10,
      children: []
    },
    {
      id: 'liyuanjia_7x1y',
      name: '李元嘉',
      title: '韩王',
      type: 'PRINCE',
      generation: 2,
      rank: 11,
      children: []
    },
    {
      id: 'liyuanze_4z8a',
      name: '李元则',
      title: '彭王',
      type: 'PRINCE',
      generation: 2,
      rank: 12,
      children: []
    },
    {
      id: 'liyuanyi_8c3d',
      name: '李元懿',
      title: '郑王',
      type: 'PRINCE',
      generation: 2,
      rank: 13,
      children: []
    },
    {
      id: 'liyuangui_5f7g',
      name: '李元轨',
      title: '霍王',
      type: 'PRINCE',
      generation: 2,
      rank: 14,
      children: []
    },
    {
      id: 'lifeng_2h9k',
      name: '李凤',
      title: '虢王',
      type: 'PRINCE',
      generation: 2,
      rank: 15,
      children: []
    },
    {
      id: 'liyuanqing_8m4n',
      name: '李元庆',
      title: '道王',
      type: 'PRINCE',
      generation: 2,
      rank: 16,
      children: []
    },
    {
      id: 'liyuanyu_3q7p',
      name: '李元裕',
      title: '邓王',
      type: 'PRINCE',
      generation: 2,
      rank: 17,
      children: []
    },
    {
      id: 'liyuanming_6s2t',
      name: '李元名',
      title: '舒王',
      type: 'PRINCE',
      generation: 2,
      rank: 18,
      children: []
    },
    {
      id: 'lilingkui_4v5w',
      name: '李灵夔',
      title: '鲁王',
      type: 'PRINCE',
      generation: 2,
      rank: 19,
      children: []
    },
    {
      id: 'liyuanxiang_9x3z',
      name: '李元祥',
      title: '江王',
      type: 'PRINCE',
      generation: 2,
      rank: 20,
      children: []
    },
    {
      id: 'liyuanxiao_3a7c',
      name: '李元晓',
      title: '密王',
      type: 'PRINCE',
      generation: 2,
      rank: 21,
      children: []
    },
    {
      id: 'liyuanying_7d2f',
      name: '李元婴',
      title: '滕王',
      type: 'PRINCE',
      generation: 2,
      rank: 22,
      children: []
    }
  ]
}

const SUCCESSION = [
  {
    from: 'liyuan_a3f7',
    to: 'lishimin_9k1m',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'waypoint',
    label: '玄武门之变'
  },
  {
    from: 'lishimin_9k1m',
    to: 'lizhi_2v4b',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'lizhi_2v4b',
    to: 'lixian_2n9w',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  { from: 'lixian_2n9w',   to: 'lichongmao_4z8a', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'lixian_2n9w',   to: 'lidan_9b3d',    sourceHandle: 'right',  targetHandle: 'left', type: 'waypoint', label: '权臣拥立' },
  {
    from: 'lidan_9b3d',
    to: 'lilongji_8m4n',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'liyu_5z3c',
    to: 'lishi_9d6f',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'lishi_9d6f',
    to: 'lisheng_3g8h',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'lichun_7j2k',
    to: 'liheng2_4n5m',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  }
]


export function buildFlowData() {
  const nodes = []
  const edges = []

  processTree(TREE)
  collectNodesAndEdges(TREE, nodes, edges, null, '唐朝')

  const titleNode = buildTitleNode('唐朝')
  nodes.push(titleNode)
  positionTitleNode(nodes, titleNode, TITLE_OFFSET_X)

  const legendNode = buildLegendNode([
    { label: '追尊皇帝', color: COLORS.ANCESTOR },
    { label: '开国皇帝', color: COLORS.FOUNDER },
    { label: '皇帝', color: COLORS.EMPEROR },
    { label: '女帝', color: COLORS.EMPRESS },
    { label: '太子/王', color: COLORS.PRINCE },
    { label: '早夭', color: COLORS.DIED_YOUNG }
  ])
  nodes.push(legendNode)
  positionLegendNode(nodes, legendNode, titleNode)

  const successionEdges = []
  const parentMap = new Map()
  const buildParentMap = (node, pid) => {
    if (pid) parentMap.set(node.id, pid)
    if (node.children) node.children.forEach((c) => buildParentMap(c, node.id))
  }
  buildParentMap(TREE, null)

  const nodeMap = new Map(nodes.map((n) => [n.id, n]))

  for (const {
    from: fromId,
    to: toId,
    sourceHandle,
    targetHandle,
    type: edgeType,
    label
  } of SUCCESSION) {
    const edgeId = `succession_${fromId}->${toId}`
    const isDirectParent = parentMap.get(toId) === fromId

    if (edgeType === 'waypoint') {
      const edgeData = { ...SUCCESSION_STYLE }

      // 李渊 -> 李世民：玄武门之变
      if (fromId === 'liyuan_a3f7' && toId === 'lishimin_9k1m') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromBottomY = fromNode.position.y + NODE_H
          const below = fromBottomY + 45
          const toX = toNode.position.x + NODE_W / 2
          const toTopY = toNode.position.y
          edgeData.waypoints = [
            { x: fromX, y: fromBottomY + 20 },
            { x: fromX, y: below },
            { x: toX, y: below },
            { x: toX, y: toTopY - 20 }
          ]
          edgeData.label = label
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: below - 10 }
        }
      }

      // 李显 -> 李旦：权臣拥立
      if (fromId === 'lixian_2n9w' && toId === 'lidan_9b3d') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromRightX = fromNode.position.x + NODE_W + 10
          const fromY = fromNode.position.y + NODE_H / 2
          const toLeftX = toNode.position.x
          edgeData.label = label
          edgeData.labelPoint = { x: (fromRightX + toLeftX) / 2, y: fromY }
        }
      }

      const idx = edges.findIndex(
        (e) => e.source === fromId && e.target === toId
      )
      if (idx !== -1) {
        edges.splice(idx, 1)
      }

      successionEdges.push({
        id: edgeId,
        source: fromId,
        target: toId,
        type: 'waypoint',
        sourceHandle,
        targetHandle,
        style: SUCCESSION_STYLE,
        markerEnd: SUCCESSION_MARKER,
        zIndex: SUCCESSION_ZINDEX,
        data: edgeData
      })
    } else if (
      isDirectParent &&
      sourceHandle === 'bottom' &&
      targetHandle === 'top'
    ) {
      const idx = edges.findIndex(
        (e) => e.source === fromId && e.target === toId
      )
      if (idx !== -1) {
        const existing = edges.splice(idx, 1)[0]
        existing.style = SUCCESSION_STYLE
        existing.markerEnd = SUCCESSION_MARKER
        existing.zIndex = SUCCESSION_ZINDEX
        if (label) {
          existing.label = label
          existing.labelPoint = {
            x: existing.waypoints
              ? (existing.waypoints[0].x + existing.waypoints[1].x) / 2
              : 0,
            y: (existing.waypoints ? existing.waypoints[0].y : 0) - 10
          }
        }
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
        data: edgeData
      })
    }
  }

  edges.push(...successionEdges)

  // 完全自定义：李旦 -> 武则天（废黜）
  const lidanNode = nodeMap.get('lidan_9b3d')
  const wuzetianNode = nodeMap.get('wuzetian_5c7d')
  if (lidanNode && wuzetianNode) {
    const fromX = lidanNode.position.x + NODE_W / 2
    const fromTopY = lidanNode.position.y
    const toX = wuzetianNode.position.x + NODE_W / 2
    const toTopY = wuzetianNode.position.y
    const above = Math.min(fromTopY, toTopY) - 25
    
    const customEdge = {
      id: 'custom_lidan_to_wuzetian',
      source: 'lidan_9b3d',
      target: 'wuzetian_5c7d',
      type: 'waypoint',
      sourceHandle: 'top',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromTopY - 20 },
          { x: fromX, y: above },
          { x: toX, y: above },
          { x: toX, y: toTopY - 20 }
        ],
        label: '废黜',
        labelPoint: { x: (fromX + toX) / 2, y: above - 5 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：武则天 -> 李显（神龙政变）
  const wuzetianNode2 = nodeMap.get('wuzetian_5c7d')
  const lixianNode = nodeMap.get('lixian_2n9w')
  if (wuzetianNode2 && lixianNode) {
    const fromX = wuzetianNode2.position.x + NODE_W / 2
    const fromBottomY = wuzetianNode2.position.y + NODE_H
    const toX = lixianNode.position.x + NODE_W / 2
    const toTopY = lixianNode.position.y
    const below = fromBottomY + 40
    
    const customEdge = {
      id: 'custom_wuzetian_to_lixian',
      source: 'wuzetian_5c7d',
      target: 'lixian_2n9w',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '神龙政变',
        labelPoint: { x: (fromX + toX) / 2, y: below - 5 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：李重茂 -> 李旦（唐隆政变）
  const lichongmaoNode = nodeMap.get('lichongmao_4z8a')
  const lidanNode2 = nodeMap.get('lidan_9b3d')
  if (lichongmaoNode && lidanNode2) {
    const fromX = lichongmaoNode.position.x + NODE_W / 2
    const fromTopY = lichongmaoNode.position.y
    const toLeftX = lidanNode2.position.x
    const lidanCenterY = lidanNode2.position.y + NODE_H / 2 + 10
    
    const customEdge = {
      id: 'custom_lichongmao_to_lidan',
      source: 'lichongmao_4z8a',
      target: 'lidan_9b3d',
      type: 'waypoint',
      sourceHandle: 'top',
      targetHandle: 'left',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromTopY - 30 },
          { x: fromX, y: lidanCenterY },
          { x: toLeftX - 10, y: lidanCenterY }
        ],
        label: '唐隆政变',
        labelPoint: { x: fromX, y: lidanCenterY + 50 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐玄宗 -> 唐肃宗（自立平叛）
  const lilongjiNode = nodeMap.get('lilongji_8m4n')
  const lihengNode = nodeMap.get('liheng_2w8x')
  if (lilongjiNode && lihengNode) {
    const fromX = lilongjiNode.position.x + NODE_W / 2
    const fromBottomY = lilongjiNode.position.y + NODE_H
    const toX = lihengNode.position.x + NODE_W / 2
    const toTopY = lihengNode.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_lilongji_to_liheng',
      source: 'lilongji_8m4n',
      target: 'liheng_2w8x',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '自立平叛',
        labelPoint: { x: (fromX + toX) / 2, y: below - 5 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐肃宗 -> 唐代宗（宦官拥立）
  const lihengNode2 = nodeMap.get('liheng_2w8x')
  const liyuNode = nodeMap.get('liyu_5z3c')
  if (lihengNode2 && liyuNode) {
    const fromX = lihengNode2.position.x + NODE_W / 2
    const fromBottomY = lihengNode2.position.y + NODE_H
    const toX = liyuNode.position.x + NODE_W / 2
    const toTopY = liyuNode.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_liheng_to_liyu',
      source: 'liheng_2w8x',
      target: 'liyu_5z3c',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '宦官拥立',
        labelPoint: { x: fromX - NODE_W / 2 - 5, y: below }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐顺宗 -> 唐宪宗（禅位）
  const lishengNode = nodeMap.get('lisheng_3g8h')
  const lichunNode = nodeMap.get('lichun_7j2k')
  if (lishengNode && lichunNode) {
    const fromX = lishengNode.position.x + NODE_W / 2
    const fromBottomY = lishengNode.position.y + NODE_H
    const toX = lichunNode.position.x + NODE_W / 2
    const toTopY = lichunNode.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_lisheng_to_lichun',
      source: 'lisheng_3g8h',
      target: 'lichun_7j2k',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '父禅位子',
        labelPoint: { x: fromX - NODE_W / 2 - 5 , y: below }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐宪宗 -> 唐穆宗（宦官拥立）
  const lichunNode2 = nodeMap.get('lichun_7j2k')
  const liheng2Node = nodeMap.get('liheng2_4n5m')
  if (lichunNode2 && liheng2Node) {
    const fromX = lichunNode2.position.x + NODE_W / 2
    const fromBottomY = lichunNode2.position.y + NODE_H
    const toX = liheng2Node.position.x + NODE_W / 2
    const toTopY = liheng2Node.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_lichun_to_liheng2',
      source: 'lichun_7j2k',
      target: 'liheng2_4n5m',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '宦官拥立',
        labelPoint: { x: fromX - NODE_W / 2 - 5, y: below }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐敬宗 -> 唐文宗（宦官拥立）
  const lizhanNode = nodeMap.get('lizhan_8p1q')
  const liangNode = nodeMap.get('liang_6v7w')
  if (lizhanNode && liangNode) {
    const fromX = lizhanNode.position.x + NODE_W / 2
    const fromBottomY = lizhanNode.position.y + NODE_H
    const toX = liangNode.position.x + NODE_W / 2
    const toBottomY = liangNode.position.y + NODE_H
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_lizhan_to_liang',
      source: 'lizhan_8p1q',
      target: 'liang_6v7w',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'bottom',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 35 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toBottomY + 35 }
        ],
        label: '宦官拥立',
        labelPoint: { x: (fromX + toX) / 2, y: below + 15 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐文宗 -> 唐武宗（宦官拥立）
  const liangNode2 = nodeMap.get('liang_6v7w')
  const liyanNode = nodeMap.get('liyan_3x9z')
  if (liangNode2 && liyanNode) {
    const fromX = liangNode2.position.x + NODE_W / 2
    const fromBottomY = liangNode2.position.y + NODE_H
    const toX = liyanNode.position.x + NODE_W / 2
    const toBottomY = liyanNode.position.y + NODE_H
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_liang_to_liyan',
      source: 'liang_6v7w',
      target: 'liyan_3x9z',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'bottom',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 35 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toBottomY + 35 }
        ],
        label: '宦官拥立',
        labelPoint: { x: (fromX + toX) / 2, y: below + 15 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐武宗 -> 唐宣宗（宦官拥立）
  const liyanNode2 = nodeMap.get('liyan_3x9z')
  const liyi2Node = nodeMap.get('liyi2_2h8k')
  if (liyanNode2 && liyi2Node) {
    const fromX = liyanNode2.position.x + NODE_W / 2
    const fromTopY = liyanNode2.position.y
    const toX = liyi2Node.position.x
    const toCenterY = liyi2Node.position.y + NODE_H / 2
    const above = Math.min(fromTopY, toCenterY) + 10
    
    const customEdge = {
      id: 'custom_liyan_to_liyi2',
      source: 'liyan_3x9z',
      target: 'liyi2_2h8k',
      type: 'waypoint',
      sourceHandle: 'top',
      targetHandle: 'left',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromTopY - 20 },
          { x: fromX, y: above }
        ],
        label: '宦官拥立',
        labelPoint: { x: (fromX + toX) / 2, y: above - 8 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐宣宗 -> 唐懿宗（宦官拥立）
  const liyi2Node2 = nodeMap.get('liyi2_2h8k')
  const licuiNode = nodeMap.get('licui_7m3n')
  if (liyi2Node2 && licuiNode) {
    const fromX = liyi2Node2.position.x + NODE_W / 2
    const fromBottomY = liyi2Node2.position.y + NODE_H
    const toX = licuiNode.position.x + NODE_W / 2
    const toTopY = licuiNode.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_liyi2_to_licui',
      source: 'liyi2_2h8k',
      target: 'licui_7m3n',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '宦官拥立',
        labelPoint: { x: fromX - NODE_W / 2 - 5, y: below }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐懿宗 -> 唐僖宗（宦官拥立）
  const licuiNode2 = nodeMap.get('licui_7m3n')
  const lixuanNode = nodeMap.get('lixuan_4q6p')
  if (licuiNode2 && lixuanNode) {
    const fromX = licuiNode2.position.x + NODE_W / 2
    const fromBottomY = licuiNode2.position.y + NODE_H
    const toX = lixuanNode.position.x + NODE_W / 2
    const toTopY = lixuanNode.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_licui_to_lixuan',
      source: 'licui_7m3n',
      target: 'lixuan_4q6p',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '宦官拥立',
        labelPoint: { x: (fromX + toX) / 2, y: below - 5 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐僖宗 -> 唐昭宗（宦官拥立）
  const lixuanNode2 = nodeMap.get('lixuan_4q6p')
  const liyeNode = nodeMap.get('liye_8s2t')
  if (lixuanNode2 && liyeNode) {
    const fromX = lixuanNode2.position.x + NODE_W / 2
    const fromBottomY = lixuanNode2.position.y + NODE_H
    const toX = liyeNode.position.x + NODE_W / 2
    const toBottomY = liyeNode.position.y + NODE_H
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_lixuan_to_liye',
      source: 'lixuan_4q6p',
      target: 'liye_8s2t',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'bottom',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 35 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toBottomY + 35 }
        ],
        label: '宦官拥立',
        labelPoint: { x: (fromX + toX) / 2, y: below - 5 }
      }
    }
    edges.push(customEdge)
  }

  // 完全自定义：唐昭宗 -> 唐哀宗（朱温拥立）
  const liyeNode2 = nodeMap.get('liye_8s2t')
  const lizhuNode = nodeMap.get('lizhu_3v5w')
  if (liyeNode2 && lizhuNode) {
    const fromX = liyeNode2.position.x + NODE_W / 2
    const fromBottomY = liyeNode2.position.y + NODE_H
    const toX = lizhuNode.position.x + NODE_W / 2
    const toTopY = lizhuNode.position.y
    const below = fromBottomY + 45
    
    const customEdge = {
      id: 'custom_liye_to_lizhu',
      source: 'liye_8s2t',
      target: 'lizhu_3v5w',
      type: 'waypoint',
      sourceHandle: 'bottom',
      targetHandle: 'top',
      style: SUCCESSION_STYLE,
      markerEnd: SUCCESSION_MARKER,
      zIndex: SUCCESSION_ZINDEX,
      data: {
        ...SUCCESSION_STYLE,
        waypoints: [
          { x: fromX, y: fromBottomY + 20 },
          { x: fromX, y: below },
          { x: toX, y: below },
          { x: toX, y: toTopY - 20 }
        ],
        label: '朱温拥立',
        labelPoint: { x: (fromX + toX) / 2, y: below - 5 }
      }
    }
    edges.push(customEdge)
  }

  return {
    nodes: nodes,
    edges: edges
  }
}
