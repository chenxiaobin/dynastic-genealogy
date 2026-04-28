/**
 * 宋朝帝王世袭图数据
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
  id: 'zhao_hongyin',
  name: '赵弘殷',
  title: '宋宣祖',
  temple: '宋宣祖',
  reign: '',
  type: 'ANCESTOR',
  generation: 0,
  rank: 1,
  children: [
    {
      id: 'zhao_kuangji',
      name: '赵匡济',
      title: '曹王',
      type: 'PRINCE',
      generation: 1,
      rank: 1,
      children: []
    },
    {
      id: 'zhao_kuangyin',
      name: '赵匡胤',
      title: '建隆',
      temple: '宋太祖',
      reign: '960-976',
      order: 1,
      type: 'FOUNDER',
      generation: 1,
      rank: '第1帝',
      children: [
        {
          id: 'zhao_dexiu',
          name: '赵德秀',
          title: '滕王',
          type: 'DIED_YOUNG',
          generation: 2,
          rank: 1,
          children: []
        },
        {
          id: 'zhao_dezhao',
          name: '赵德昭',
          title: '燕懿王',
          type: 'PRINCE',
          generation: 2,
          rank: 2,
          children: [
            {
              id: 'zhao_weiji',
              name: '赵惟吉',
              title: '冀康靖王',
              type: 'PRINCE',
              generation: 3,
              rank: 1,
              children: [
                {
                  id: 'zhao_shoudu',
                  name: '赵守度',
                  title: '-',
                  type: 'PRINCE',
                  generation: 4,
                  rank: 1,
                  children: [
                    {
                      id: 'zhao_shikuo',
                      name: '赵世括',
                      title: '-',
                      type: 'PRINCE',
                      generation: 5,
                      rank: 1,
                      children: [
                        {
                          id: 'zhao_lingjia',
                          name: '赵令稼',
                          title: '房国公',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 1,
                          children: [
                            {
                              id: 'zhao_zishi',
                              name: '赵子奭',
                              title: '-',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 1,
                              children: [
                                {
                                  id: 'zhao_bowu',
                                  name: '赵伯旿',
                                  title: '-',
                                  type: 'PRINCE',
                                  generation: 8,
                                  rank: 1,
                                  children: [
                                    {
                                      id: 'zhao_shiyi',
                                      name: '赵师意',
                                      title: '-',
                                      type: 'PRINCE',
                                      generation: 9,
                                      rank: 1,
                                      children: [
                                        {
                                          id: 'zhao_xiluo',
                                          name: '赵希瓐',
                                          title: '荣王',
                                          type: 'PRINCE',
                                          generation: 10,
                                          rank: 1,
                                          children: [
                                            {
                                              id: 'zhao_yun2',
                                              name: '赵昀',
                                              title: '宝庆',
                                              temple: '宋理宗',
                                              reign: '1224-1264',
                                              order: 14,
                                              type: 'EMPEROR',
                                              generation: 11,
                                              rank: '第5帝',
                                              color: COLORS.EMPEROR_ALT1,
                                              children: [
                                                {
                                                  id: 'zhao_ji4',
                                                  name: '赵缉',
                                                  title: '永王',
                                                  type: 'DIED_YOUNG',
                                                  generation: 12,
                                                  rank: 1,
                                                  children: []
                                                },
                                                {
                                                  id: 'zhao_yi2',
                                                  name: '赵绎',
                                                  title: '昭王',
                                                  type: 'DIED_YOUNG',
                                                  generation: 12,
                                                  rank: 2,
                                                  children: []
                                                },
                                                {
                                                  id: 'zhao_wei2',
                                                  name: '赵维',
                                                  title: '祁国公',
                                                  type: 'DIED_YOUNG',
                                                  generation: 12,
                                                  rank: 3,
                                                  children: []
                                                }
                                              ]
                                            },
                                            {
                                              id: 'zhao_yurui',
                                              name: '赵与芮',
                                              title: '荣王',
                                              type: 'PRINCE',
                                              generation: 11,
                                              rank: 2,
                                              children: [
                                                {
                                                  id: 'zhao_qi5',
                                                  name: '赵禥',
                                                  title: '咸淳',
                                                  temple: '宋度宗',
                                                  reign: '1264-1274',
                                                  order: 15,
                                                  type: 'EMPEROR',
                                                  generation: 12,
                                                  rank: '第6帝',
                                                  color: COLORS.EMPEROR_ALT1,
                                                  children: [
                                                    {
                                                      id: 'zhao_zhuo',
                                                      name: '赵焯',
                                                      title: '广冲善王',
                                                      type: 'DIED_YOUNG',
                                                      generation: 13,
                                                      rank: 1,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'zhao_shu3',
                                                      name: '赵舒',
                                                      title: '早夭',
                                                      type: 'DIED_YOUNG',
                                                      generation: 13,
                                                      rank: 2,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'zhao_xian2',
                                                      name: '赵宪',
                                                      title: '冲定公',
                                                      type: 'DIED_YOUNG',
                                                      generation: 13,
                                                      rank: 3,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'zhao_huang',
                                                      name: '赵锽',
                                                      title: '岐冲靖王',
                                                      type: 'DIED_YOUNG',
                                                      generation: 13,
                                                      rank: 4,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'zhao_shi',
                                                      name: '赵昰',
                                                      title: '景炎',
                                                      temple: '宋端宗',
                                                      reign: '1276-1278',
                                                      order: 17,
                                                      type: 'EMPEROR',
                                                      generation: 13,
                                                      rank: '第8帝',
                                                      color:
                                                        COLORS.EMPEROR_ALT1,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'zhao_xian3',
                                                      name: '赵显',
                                                      title: '德祐',
                                                      temple: '宋恭帝',
                                                      reign: '1274-1276',
                                                      order: 16,
                                                      type: 'EMPEROR',
                                                      generation: 13,
                                                      rank: '第7帝',
                                                      color:
                                                        COLORS.EMPEROR_ALT1,
                                                      children: []
                                                    },
                                                    {
                                                      id: 'zhao_bing',
                                                      name: '赵昺',
                                                      title: '祥兴',
                                                      temple: '宋怀宗',
                                                      reign: '1278-1279',
                                                      order: 18,
                                                      type: 'LAST',
                                                      generation: 13,
                                                      rank: '第9帝',
                                                      color:
                                                        COLORS.EMPEROR_ALT1,
                                                      children: []
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'zhao_delin',
          name: '赵德林',
          title: '舒王',
          type: 'DIED_YOUNG',
          generation: 2,
          rank: 3,
          children: []
        },
        {
          id: 'zhao_defang',
          name: '赵德芳',
          title: '秦康惠王',
          type: 'PRINCE',
          generation: 2,
          rank: 4,
          children: [
            {
              id: 'zhao_weixian',
              name: '赵惟宪',
              title: '英国公',
              type: 'PRINCE',
              generation: 3,
              rank: 1,
              children: [
                {
                  id: 'zhao_congyu',
                  name: '赵从郁',
                  title: '新兴侯',
                  type: 'PRINCE',
                  generation: 4,
                  rank: 1,
                  children: [
                    {
                      id: 'zhao_shijiang',
                      name: '赵世将',
                      title: '华阴侯',
                      type: 'PRINCE',
                      generation: 5,
                      rank: 1,
                      children: [
                        {
                          id: 'zhao_lingmo',
                          name: '赵令譮',
                          title: '庆国公',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 1,
                          children: [
                            {
                              id: 'zhao_zicheng',
                              name: '赵子偁',
                              title: '秀安僖王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 1,
                              children: [
                                {
                                  id: 'zhao_shen2',
                                  name: '赵昚',
                                  title: '隆兴',
                                  temple: '宋孝宗',
                                  reign: '1162-1189',
                                  order: 11,
                                  type: 'EMPEROR',
                                  generation: 8,
                                  rank: '第2帝',
                                  color: COLORS.EMPEROR_ALT1,
                                  children: [
                                    {
                                      id: 'zhao_qi3',
                                      name: '赵愭',
                                      title: '庄文太子',
                                      type: 'PRINCE',
                                      generation: 9,
                                      rank: 1,
                                      children: []
                                    },
                                    {
                                      id: 'zhao_kai2',
                                      name: '赵恺',
                                      title: '魏惠宪王',
                                      type: 'PRINCE',
                                      generation: 9,
                                      rank: 2,
                                      children: []
                                    },
                                    {
                                      id: 'zhao_dun',
                                      name: '赵惇',
                                      title: '绍熙',
                                      temple: '宋光宗',
                                      reign: '1189-1194',
                                      order: 12,
                                      type: 'EMPEROR',
                                      generation: 9,
                                      rank: '第3帝',
                                      color: COLORS.EMPEROR_ALT1,
                                      children: [
                                        {
                                          id: 'zhao_ting',
                                          name: '赵梃',
                                          title: '节度使',
                                          type: 'PRINCE',
                                          generation: 10,
                                          rank: 1,
                                          children: []
                                        },
                                        {
                                          id: 'zhao_kuo',
                                          name: '赵扩',
                                          title: '庆元',
                                          temple: '宋宁宗',
                                          reign: '1194-1224',
                                          order: 13,
                                          type: 'EMPEROR',
                                          generation: 10,
                                          rank: '第4帝',
                                          color: COLORS.EMPEROR_ALT1,
                                          children: [
                                            {
                                              id: 'zhao_jun2',
                                              name: '赵埈',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 1,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_tan',
                                              name: '赵坦',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 2,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_zeng',
                                              name: '赵增',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 3,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_di2',
                                              name: '赵觌',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 4,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_jiong',
                                              name: '赵埛',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 5,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_qi4',
                                              name: '赵圻',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 6,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_zhi4',
                                              name: '赵墌',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 7,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_ji3',
                                              name: '赵垍',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 8,
                                              children: []
                                            },
                                            {
                                              id: 'zhao_zi',
                                              name: '赵坁',
                                              title: '早夭',
                                              type: 'DIED_YOUNG',
                                              generation: 11,
                                              rank: 9,
                                              children: []
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      id: 'zhao_ke',
                                      name: '赵恪',
                                      title: '邵悼肃王',
                                      type: 'DIED_YOUNG',
                                      generation: 9,
                                      rank: 4,
                                      children: []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'zhao_kuangyi',
      name: '赵匡义',
      title: '太平兴国',
      temple: '宋太宗',
      reign: '976-997',
      order: 2,
      type: 'EMPEROR',
      generation: 1,
      rank: '第2帝',
      children: [
        {
          id: 'zhao_yuanzuo',
          name: '赵元佐',
          title: '魏恭宪王',
          type: 'PRINCE',
          generation: 2,
          rank: 1,
          children: []
        },
        {
          id: 'zhao_yuanxi',
          name: '赵元僖',
          title: '昭成太子',
          type: 'PRINCE',
          generation: 2,
          rank: 2,
          children: []
        },
        {
          id: 'zhao_heng',
          name: '赵恒',
          title: '咸平',
          temple: '宋真宗',
          reign: '997-1022',
          order: 3,
          type: 'EMPEROR',
          generation: 2,
          rank: '第3帝',
          children: [
            {
              id: 'zhao_ti',
              name: '赵禔',
              title: '温王',
              type: 'DIED_YOUNG',
              generation: 3,
              rank: 1,
              children: []
            },
            {
              id: 'zhao_you',
              name: '赵祐',
              title: '悼献太子',
              type: 'DIED_YOUNG',
              generation: 3,
              rank: 2,
              children: []
            },
            {
              id: 'zhao_zhi',
              name: '赵祇',
              title: '昌王',
              type: 'DIED_YOUNG',
              generation: 3,
              rank: 3,
              children: []
            },
            {
              id: 'zhao_zhi2',
              name: '赵祉',
              title: '信王',
              type: 'DIED_YOUNG',
              generation: 3,
              rank: 4,
              children: []
            },
            {
              id: 'zhao_qi',
              name: '赵祈',
              title: '钦王',
              type: 'DIED_YOUNG',
              generation: 3,
              rank: 5,
              children: []
            },
            {
              id: 'zhao_zhen',
              name: '赵祯',
              title: '天圣',
              temple: '宋仁宗',
              reign: '1022-1063',
              order: 4,
              type: 'EMPEROR',
              generation: 3,
              rank: '第4帝',
              children: [
                {
                  id: 'zhao_fang',
                  name: '赵昉',
                  title: '杨王',
                  type: 'DIED_YOUNG',
                  generation: 4,
                  rank: 1,
                  children: []
                },
                {
                  id: 'zhao_xin',
                  name: '赵昕',
                  title: '雍王',
                  type: 'DIED_YOUNG',
                  generation: 4,
                  rank: 2,
                  children: []
                },
                {
                  id: 'zhao_xi',
                  name: '赵曦',
                  title: '荆王',
                  type: 'DIED_YOUNG',
                  generation: 4,
                  rank: 3,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 'zhao_yuanfen',
          name: '赵元份',
          title: '商恭靖王',
          type: 'PRINCE',
          generation: 2,
          rank: 4,
          children: [
            {
              id: 'zhao_yunning',
              name: '赵允宁',
              title: '信安郡王',
              type: 'PRINCE',
              generation: 3,
              rank: 1,
              children: []
            },
            {
              id: 'zhao_yunhuai',
              name: '赵允怀',
              title: '-',
              type: 'PRINCE',
              generation: 3,
              rank: 2,
              children: []
            },
            {
              id: 'zhao_yunrang',
              name: '赵允让',
              title: '濮安懿王',
              type: 'PRINCE',
              generation: 3,
              rank: 3,
              children: [
                {
                  id: 'zhao_shu',
                  name: '赵曙',
                  title: '治平',
                  temple: '宋英宗',
                  reign: '1063-1067',
                  order: 5,
                  type: 'EMPEROR',
                  generation: 4,
                  rank: '第5帝',
                  children: [
                    {
                      id: 'zhao_xu',
                      name: '赵顼',
                      title: '熙宁',
                      temple: '宋神宗',
                      reign: '1067-1085',
                      order: 6,
                      type: 'EMPEROR',
                      generation: 5,
                      rank: '第6帝',
                      children: [
                        {
                          id: 'zhao_yi',
                          name: '赵佾',
                          title: '成王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 1,
                          children: []
                        },
                        {
                          id: 'zhao_jin',
                          name: '赵仅',
                          title: '惠王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 2,
                          children: []
                        },
                        {
                          id: 'zhao_jun',
                          name: '赵俊',
                          title: '唐哀献王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 3,
                          children: []
                        },
                        {
                          id: 'zhao_shen',
                          name: '赵伸',
                          title: '褒王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 4,
                          children: []
                        },
                        {
                          id: 'zhao_xian',
                          name: '赵僩',
                          title: '冀王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 5,
                          children: []
                        },
                        {
                          id: 'zhao_xu2',
                          name: '赵煦',
                          title: '元祐',
                          temple: '宋哲宗',
                          reign: '1085-1100',
                          order: 7,
                          type: 'EMPEROR',
                          generation: 6,
                          rank: '第7帝',
                          children: [
                            {
                              id: 'zhao_mao',
                              name: '赵茂',
                              title: '献愍太子',
                              type: 'DIED_YOUNG',
                              generation: 7,
                              rank: 1,
                              children: []
                            }
                          ]
                        },
                        {
                          id: 'zhao_jia',
                          name: '赵价',
                          title: '豫悼惠王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 7,
                          children: []
                        },
                        {
                          id: 'zhao_ti2',
                          name: '赵倜',
                          title: '徐冲惠王',
                          type: 'DIED_YOUNG',
                          generation: 6,
                          rank: 8,
                          children: []
                        },
                        {
                          id: 'zhao_bi',
                          name: '赵佖',
                          title: '吴荣穆王',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 9,
                          children: []
                        },
                        {
                          id: 'zhao_wei',
                          name: '赵伟',
                          title: '仪王',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 10,
                          children: []
                        },
                        {
                          id: 'zhao_ji',
                          name: '赵佶',
                          title: '建中靖国',
                          temple: '宋徽宗',
                          reign: '1100-1125',
                          order: 8,
                          type: 'EMPEROR',
                          generation: 6,
                          rank: '第8帝',
                          children: [
                            {
                              id: 'zhao_huan',
                              name: '赵桓',
                              title: '靖康',
                              temple: '宋钦宗',
                              reign: '1125-1127',
                              order: 9,
                              type: 'EMPEROR',
                              generation: 7,
                              rank: '第9帝',
                              children: []
                            },
                            {
                              id: 'zhao_cheng',
                              name: '赵柽',
                              title: '衮王',
                              type: 'DIED_YOUNG',
                              generation: 7,
                              rank: 2,
                              children: []
                            },
                            {
                              id: 'zhao_kai',
                              name: '赵楷',
                              title: '郓王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 3,
                              children: []
                            },
                            {
                              id: 'zhao_ji2',
                              name: '赵楫',
                              title: '荆王',
                              type: 'DIED_YOUNG',
                              generation: 7,
                              rank: 4,
                              children: []
                            },
                            {
                              id: 'zhao_shu2',
                              name: '赵枢',
                              title: '肃王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 5,
                              children: []
                            },
                            {
                              id: 'zhao_qi2',
                              name: '赵杞',
                              title: '景王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 6,
                              children: []
                            },
                            {
                              id: 'zhao_xu3',
                              name: '赵栩',
                              title: '济王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 7,
                              children: []
                            },
                            {
                              id: 'zhao_yu',
                              name: '赵棫',
                              title: '益王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 8,
                              children: []
                            },
                            {
                              id: 'zhao_gou',
                              name: '赵构',
                              title: '建炎',
                              temple: '宋高宗',
                              reign: '1127-1162',
                              order: 10,
                              type: 'EMPEROR',
                              generation: 7,
                              rank: '第1帝',
                              children: [],
                              color: COLORS.EMPEROR_ALT1
                            },
                            {
                              id: 'zhao_cai',
                              name: '赵材',
                              title: '邠王',
                              type: 'DIED_YOUNG',
                              generation: 7,
                              rank: 10,
                              children: []
                            },
                            {
                              id: 'zhao_mo',
                              name: '赵模',
                              title: '祁王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 11,
                              children: []
                            },
                            {
                              id: 'zhao_zhi3',
                              name: '赵植',
                              title: '莘王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 12,
                              children: []
                            },
                            {
                              id: 'zhao_pu',
                              name: '赵朴',
                              title: '仪王',
                              type: 'DIED_YOUNG',
                              generation: 7,
                              rank: 13,
                              children: []
                            },
                            {
                              id: 'zhao_di',
                              name: '赵棣',
                              title: '徐王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 14,
                              children: []
                            },
                            {
                              id: 'zhao_tong',
                              name: '赵桐',
                              title: '沂王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 15,
                              children: []
                            },
                            {
                              id: 'zhao_huan2',
                              name: '赵焕',
                              title: '郓王',
                              type: 'DIED_YOUNG',
                              generation: 7,
                              rank: 16,
                              children: []
                            },
                            {
                              id: 'zhao_kang',
                              name: '赵炕',
                              title: '均王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 17,
                              children: []
                            },
                            {
                              id: 'zhao_tun',
                              name: '赵焞',
                              title: '韩王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 18,
                              children: []
                            },
                            {
                              id: 'zhao_xuan',
                              name: '赵煊',
                              title: '申王',
                              type: 'PRINCE',
                              generation: 7,
                              rank: 19,
                              children: []
                            }
                          ]
                        },
                        {
                          id: 'zhao_yu2',
                          name: '赵俣',
                          title: '燕王',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 12,
                          children: []
                        },
                        {
                          id: 'zhao_si',
                          name: '赵似',
                          title: '楚荣宪王',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 13,
                          children: []
                        },
                        {
                          id: 'zhao_cai2',
                          name: '赵偲',
                          title: '越王',
                          type: 'PRINCE',
                          generation: 6,
                          rank: 14,
                          children: []
                        }
                      ]
                    },
                    {
                      id: 'zhao_hao',
                      name: '赵颢',
                      title: '吴荣王',
                      type: 'PRINCE',
                      generation: 5,
                      rank: 2,
                      children: []
                    },
                    {
                      id: 'zhao_yan',
                      name: '赵颜',
                      title: '润王',
                      type: 'PRINCE',
                      generation: 5,
                      rank: 3,
                      children: []
                    },
                    {
                      id: 'zhao_yun',
                      name: '赵頵',
                      title: '益端献王',
                      type: 'PRINCE',
                      generation: 5,
                      rank: 4,
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'zhao_yuanjie',
          name: '赵元杰',
          title: '越文惠王',
          type: 'PRINCE',
          generation: 2,
          rank: 5,
          children: []
        },
        {
          id: 'zhao_yuanwo',
          name: '赵元偓',
          title: '镇恭懿王',
          type: 'PRINCE',
          generation: 2,
          rank: 6,
          children: []
        },
        {
          id: 'zhao_yuancheng',
          name: '赵元偁',
          title: '楚恭惠王',
          type: 'PRINCE',
          generation: 2,
          rank: 7,
          children: []
        },
        {
          id: 'zhao_yuanyan',
          name: '赵元俨',
          title: '周恭肃王',
          type: 'PRINCE',
          generation: 2,
          rank: 8,
          children: []
        },
        {
          id: 'zhao_yuanyi',
          name: '赵元亿',
          title: '崇王',
          type: 'PRINCE',
          generation: 2,
          rank: 9,
          children: []
        }
      ]
    },
    {
      id: 'zhao_tingmei',
      name: '赵廷美',
      title: '魏王',
      type: 'PRINCE',
      generation: 1,
      rank: 4,
      children: []
    },
    {
      id: 'zhao_guangzan',
      name: '赵光赞',
      title: '岐王',
      type: 'DIED_YOUNG',
      generation: 1,
      rank: 5,
      children: []
    }
  ]
}

const SUCCESSION = [
  {
    from: 'zhao_kuangyin',
    to: 'zhao_kuangyi',
    sourceHandle: 'right',
    targetHandle: 'left-t',
    type: 'waypoint'
  },
  {
    from: 'zhao_kuangyi',
    to: 'zhao_heng',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_heng',
    to: 'zhao_zhen',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_zhen',
    to: 'zhao_shu',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'waypoint'
  },
  {
    from: 'zhao_shu',
    to: 'zhao_xu',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_xu',
    to: 'zhao_xu2',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_xu2',
    to: 'zhao_ji',
    sourceHandle: 'bottom',
    targetHandle: 'bottom-t',
    type: 'waypoint'
  },
  {
    from: 'zhao_ji',
    to: 'zhao_huan',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_huan',
    to: 'zhao_gou',
    sourceHandle: 'bottom',
    targetHandle: 'bottom-t',
    type: 'waypoint'
  },
  {
    from: 'zhao_gou',
    to: 'zhao_shen2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'waypoint'
  },
  {
    from: 'zhao_shen2',
    to: 'zhao_dun',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_dun',
    to: 'zhao_kuo',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_kuo',
    to: 'zhao_yun2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'waypoint'
  },
  {
    from: 'zhao_yun2',
    to: 'zhao_qi5',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'waypoint'
  },
  {
    from: 'zhao_qi5',
    to: 'zhao_xian3',
    sourceHandle: 'bottom',
    targetHandle: 'top'
  },
  {
    from: 'zhao_xian3',
    to: 'zhao_shi',
    sourceHandle: 'right',
    targetHandle: 'left-t',
    type: 'waypoint'
  },
  {
    from: 'zhao_shi',
    to: 'zhao_bing',
    sourceHandle: 'right',
    targetHandle: 'left-t',
    type: 'waypoint'
  }
]

export function buildFlowData() {
  const nodes = []
  const edges = []

  processTree(TREE)
  collectNodesAndEdges(TREE, nodes, edges, null, '宋朝')

  const titleNode = buildTitleNode('宋朝')
  nodes.push(titleNode)
  positionTitleNode(nodes, titleNode, TITLE_OFFSET_X)

  const legendNode = buildLegendNode([
    { label: '追尊皇帝', color: COLORS.ANCESTOR },
    { label: '开国皇帝', color: COLORS.FOUNDER },
    { label: '北宋皇帝', color: COLORS.EMPEROR },
    { label: '南宋皇帝', color: COLORS.EMPEROR_ALT1 },
    { label: '末代帝王', color: COLORS.LAST },
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
    type: edgeType
  } of SUCCESSION) {
    const edgeId = `succession_${fromId}->${toId}`
    const isDirectParent = parentMap.get(toId) === fromId

    if (isDirectParent && sourceHandle === 'bottom' && targetHandle === 'top') {
      const idx = edges.findIndex(
        (e) => e.source === fromId && e.target === toId
      )
      if (idx !== -1) {
        const existing = edges.splice(idx, 1)[0]
        existing.style = SUCCESSION_STYLE
        existing.markerEnd = SUCCESSION_MARKER
        existing.zIndex = SUCCESSION_ZINDEX
        successionEdges.push(existing)
      }
    } else {
      const edgeData = { ...SUCCESSION_STYLE }

      // 太祖 → 太宗（兄终弟及，横向连线）
      if (fromId === 'zhao_kuangyin' && toId === 'zhao_kuangyi') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const y = fromNode.position.y + NODE_H / 2
          edgeData.startPoint = { x: fromNode.position.x + NODE_W, y }
          edgeData.waypoints = []
          edgeData.endPoint = { x: toNode.position.x, y }
          edgeData.label = '兄终弟及'
          edgeData.labelPoint = {
            x: (fromNode.position.x + NODE_W + toNode.position.x) / 2,
            y: y - 14
          }
        }
      }

      // 仁宗 → 英宗（旁系继承，仁宗底部 → 英宗顶部）
      if (fromId === 'zhao_zhen' && toId === 'zhao_shu') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y
          const midY = fromY + (toY - fromY) / 2
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '旁系入继'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY - 8 }
        }
      }

      // 哲宗 → 徽宗（兄终弟及，底部中点连线）
      if (fromId === 'zhao_xu2' && toId === 'zhao_ji') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y + 120
          const midY = Math.max(fromY, toY) + 25
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '兄终弟及'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY + 14 }
        }
      }

      // 钦宗 → 高宗（兄被虏，弟另立，底部中点连线）
      if (fromId === 'zhao_huan' && toId === 'zhao_gou') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y + 120
          const midY = Math.max(fromY, toY) + 10
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '兄被虏，弟另立'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY + 14 }
        }
      }

      // 高宗 → 孝宗（旁系继承，高宗底部 → 孝宗顶部）
      if (fromId === 'zhao_gou' && toId === 'zhao_shen2') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y
          const midY = fromY + (toY - fromY) / 2
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY + 15 },
            { x: toX, y: midY + 15 }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '绍兴内禅'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY + 8 }
        }
      }

      // 宁宗 → 理宗（旁系继承，宁宗底部 → 理宗顶部）
      if (fromId === 'zhao_kuo' && toId === 'zhao_yun2') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y
          const midY = fromY + (toY - fromY) / 2
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '远支旁系继承'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY - 14 }
        }
      }

      // 理宗 → 度宗（旁系继承，理宗底部 → 度宗顶部）
      if (fromId === 'zhao_yun2' && toId === 'zhao_qi5') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y
          const midY = fromY + (toY - fromY) / 2
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '旁系入继'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY - 14 }
        }
      }

      // 恭帝 → 端宗（兄终弟及，底部中点连线）
      if (fromId === 'zhao_xian3' && toId === 'zhao_shi') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y + 120
          const midY = Math.max(fromY, toY) + 20
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '弟终兄及'
          edgeData.labelPoint = { x: (fromX + toX) / 2, y: midY - 5 }
        }
      }

      // 端宗 → 怀宗（兄终弟及，底部中点连线）
      if (fromId === 'zhao_shi' && toId === 'zhao_bing') {
        const fromNode = nodeMap.get(fromId)
        const toNode = nodeMap.get(toId)
        if (fromNode && toNode) {
          const fromX = fromNode.position.x + NODE_W / 2
          const fromY = fromNode.position.y + 120
          const toX = toNode.position.x + NODE_W / 2
          const toY = toNode.position.y + 120
          const midY = Math.max(fromY, toY) + 40
          edgeData.startPoint = { x: fromX, y: fromY }
          edgeData.waypoints = [
            { x: fromX, y: midY },
            { x: toX, y: midY }
          ]
          edgeData.endPoint = { x: toX, y: toY }
          edgeData.label = '兄终弟及'
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
        data: edgeData
      })
    }
  }

  edges.push(...successionEdges)

  return { nodes, edges }
}
