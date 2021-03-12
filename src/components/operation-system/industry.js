const industry = [{ 'id': 1001, 'name': 'IT服务', 'children': [{ 'id': 1001000, 'name': '计算机软件/硬件/信息服务', 'children': [] }, { 'id': 1001001, 'name': '互联网和相关服务', 'children': [] }, { 'id': 1001002, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1002, 'name': '制造业', 'children': [{ 'id': 1002000, 'name': '机械/电子', 'children': [] }, { 'id': 1003000, 'name': '服装/纺织', 'children': [] }, { 'id': 1002002, 'name': '汽车', 'children': [] }, { 'id': 1002005, 'name': '金属制品', 'children': [] }, { 'id': 1003002, 'name': '食品/饮料', 'children': [] }, { 'id': 1003003, 'name': '家具/家纺', 'children': [] }, { 'id': 1002001, 'name': '重工制造', 'children': [] }, { 'id': 1003005, 'name': '家电/数码', 'children': [] }, { 'id': 1002004, 'name': '橡胶/塑料', 'children': [] }, { 'id': 1003004, 'name': '日用品/化妆品', 'children': [] }, { 'id': 1002006, 'name': '化学原料制品', 'children': [] }, { 'id': 1003007, 'name': '文教/工美/体育/娱乐用品', 'children': [] }, { 'id': 1003006, 'name': '烟酒/茶', 'children': [] }, { 'id': 1002007, 'name': '非金属矿物', 'children': [] }, { 'id': 1002003, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1003, 'name': '批发/零售', 'children': [{ 'id': 1003008, 'name': '批发', 'children': [] }, { 'id': 1003010, 'name': '零售', 'children': [] }, { 'id': 1003001, 'name': '超市/便利店/百货商场', 'children': [] }, { 'id': 1003011, 'name': '进出口', 'children': [] }, { 'id': 1003009, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1004, 'name': '生活服务', 'children': [{ 'id': 1004001, 'name': '餐饮', 'children': [] }, { 'id': 1004004, 'name': '居民服务', 'children': [] }, { 'id': 1004002, 'name': '租赁和商务服务', 'children': [] }, { 'id': 1004000, 'name': '酒店/住宿', 'children': [] }, { 'id': 1004003, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1005, 'name': '文化/体育/娱乐业', 'children': [{ 'id': 1005001, 'name': '文化/体育', 'children': [] }, { 'id': 1005002, 'name': '娱乐/旅游', 'children': [] }, { 'id': 1005000, 'name': '新闻传媒', 'children': [] }, { 'id': 1005003, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1006, 'name': '建筑/房地产', 'children': [{ 'id': 1006001, 'name': '建筑业', 'children': [] }, { 'id': 1006002, 'name': '建材装修', 'children': [] }, { 'id': 1006000, 'name': '房地产', 'children': [] }, { 'id': 1006003, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1007, 'name': '教育', 'children': [{ 'id': 1007000, 'name': '学前教育', 'children': [], 'desc': '如：托儿所、幼儿园' }, { 'id': 1007001, 'name': '初中等教育', 'children': [], 'desc': '如：小学、初中、高中、职高' }, { 'id': 1007002, 'name': '高等教育', 'children': [], 'desc': '如：大学、高职、高专' }, { 'id': 1007003, 'name': '培训机构', 'children': [] }, { 'id': 1007004, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1008, 'name': '运输/物流/仓储', 'children': [{ 'id': 1008003, 'name': '物流/仓储', 'children': [] }, { 'id': 1008000, 'name': '道路/铁路运输', 'children': [] }, { 'id': 1008004, 'name': '邮政/快递', 'children': [] }, { 'id': 1008001, 'name': '航空运输', 'children': [] }, { 'id': 1008002, 'name': '水上运输', 'children': [] }, { 'id': 1008005, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1009, 'name': '医疗', 'children': [{ 'id': 1009000, 'name': '医院/医疗机构', 'children': [] }, { 'id': 1009003, 'name': '医疗器械', 'children': [] }, { 'id': 1009001, 'name': '医药制造', 'children': [] }, { 'id': 1009002, 'name': '医药流通', 'children': [] }, { 'id': 1009004, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1010, 'name': '政府', 'children': [{ 'id': 1010000, 'name': '党政机关', 'children': [] }, { 'id': 1010001, 'name': '国家权力/行政机构', 'children': [] }, { 'id': 1010002, 'name': '检察院/法院/公安', 'children': [] }, { 'id': 1010003, 'name': '民政/人社/交通/卫生', 'children': [] }, { 'id': 1010004, 'name': '发改委/经信委/商务局/统计局', 'children': [] }, { 'id': 1010005, 'name': '国土/规划', 'children': [] }, { 'id': 1010006, 'name': '税务/海关/工商/环保/物价/药品', 'children': [] }, { 'id': 1010007, 'name': '政协/民主党派', 'children': [] }, { 'id': 1010008, 'name': '地方政府', 'children': [] }, { 'id': 1010009, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1011, 'name': '金融', 'children': [{ 'id': 1011000, 'name': '保险', 'children': [] }, { 'id': 1011001, 'name': '银行', 'children': [] }, { 'id': 1011002, 'name': '证券/投资/基金', 'children': [] }, { 'id': 1011003, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1012, 'name': '能源/采矿', 'children': [{ 'id': 1014003, 'name': '电力/热力/燃气/水供应业', 'children': [] }, { 'id': 1012003, 'name': '石油/天然气', 'children': [] }, { 'id': 1012002, 'name': '煤炭', 'children': [] }, { 'id': 1012001, 'name': '有色金属', 'children': [] }, { 'id': 1012000, 'name': '钢铁', 'children': [] }, { 'id': 1012004, 'name': '其他', 'children': [] }], 'icon': '' }, { 'id': 1013, 'name': '农林渔牧', 'children': [{ 'id': 1013000, 'name': '农林渔牧', 'children': [] }], 'icon': '' }, { 'id': 1014, 'name': '其他行业', 'children': [{ 'id': 1014000, 'name': '科学研究和技术服务业', 'children': [] }, { 'id': 1014002, 'name': '社会组织', 'children': [] }, { 'id': 1014001, 'name': '水利和环境管理', 'children': [] }, { 'id': 1014004, 'name': '国际组织', 'children': [] }, { 'id': 1014005, 'name': '其他', 'children': [] }], 'icon': '' }]

const fmtIndustry = industry.map(item => {
  return {
    ...item,
    label: item.name,
    value: item.name,
    children: item.children.map(obj => {
      const arr2 = {
        ...obj,
        label: obj.name,
        value: obj.name,
        children: obj.children.map(obj2 => {
          return {
            ...obj2,
            label: obj2.name,
            value: obj2.name
          }
        })
      }
      if (arr2.children.length === 0) {
        delete arr2.children
      }
      return arr2
    })
  }
})

export { fmtIndustry }
