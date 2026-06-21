export const navigation = [
  {
    label: '走进萌净', path: '/about', eyebrow: 'ABOUT MENGJING',
    children: [
      ['集团简介', '/about/profile'], ['发展历程', '/about/history'],
      ['企业文化', '/about/culture'], ['企业荣誉', '/about/honors'],
    ],
  },
  {
    label: '企业发展', path: '/development', eyebrow: 'DEVELOPMENT',
    children: [
      ['发展战略', '/development/strategy'], ['绿色环保', '/development/green'],
      ['科技研发', '/development/research'], ['品质保障', '/development/quality'],
    ],
  },
  {
    label: '产品中心', path: '/products', eyebrow: 'PRODUCTS',
    children: [
      ['宠物洗护系列', '/products/pet-care'], ['宠物除味系列', '/products/deodorization'],
      ['宠物消毒清洁系列', '/products/disinfection'], ['宠物用品清洗系列', '/products/pet-supplies'],
      ['家居洗涤系列', '/products/home-cleaning'], ['织物清洁系列', '/products/fabric-care'],
      ['餐具清洁系列', '/products/dish-cleaning'],
    ],
  },
  {
    label: '品牌家族', path: '/brands', eyebrow: 'OUR BRANDS',
    children: [
      ['萌净宠护', '/brands/mengjing-care'], ['净爪星球', '/brands/paw-planet'],
      ['悠宠生活', '/brands/youpet-life'], ['净家优选', '/brands/clean-home'],
    ],
  },
  {
    label: '宠物健康生活', path: '/pet-life', eyebrow: 'PET WELLNESS',
    children: [
      ['宠物洗护知识', '/pet-life/care'], ['养宠清洁指南', '/pet-life/cleaning-guide'],
      ['宠物家庭清洁方案', '/pet-life/home-solutions'], ['常见问题', '/pet-life/faq'],
    ],
  },
  {
    label: '社会责任', path: '/responsibility', eyebrow: 'RESPONSIBILITY',
    children: [
      ['公益救助', '/responsibility/public-welfare'], ['流浪动物关爱', '/responsibility/animal-care'],
      ['绿色生产', '/responsibility/green-production'], ['环保包装', '/responsibility/eco-packaging'],
    ],
  },
  {
    label: '资讯动态', path: '/news', eyebrow: 'NEWSROOM',
    children: [
      ['集团新闻', '/news/group'], ['品牌动态', '/news/brands'],
      ['新品发布', '/news/products'], ['行业资讯', '/news/industry'],
    ],
  },
  {
    label: '加入萌净', path: '/careers', eyebrow: 'CAREERS',
    children: [
      ['人才理念', '/careers/philosophy'], ['员工成长', '/careers/growth'],
      ['招聘岗位', '/careers/jobs'], ['联系我们', '/contact'],
    ],
  },
];

export const sectionMeta = {
  about: {
    title: '走进萌净', eyebrow: 'ABOUT MENGJING',
    intro: '以宠物清洁护理为起点，构建人与宠物友好共生的健康生活方式。',
    statement: '我们相信，真正的洁净不仅关乎环境，也关乎每一份长久陪伴。',
  },
  development: {
    title: '企业发展', eyebrow: 'SUSTAINABLE GROWTH',
    intro: '以长期主义连接战略、研发、绿色生产与品质管理。',
    statement: '让每一项创新经得起专业标准，也回应真实生活需求。',
  },
  products: {
    title: '产品中心', eyebrow: 'PRODUCT CENTER',
    intro: '覆盖宠物护理与家庭清洁的多场景产品矩阵。',
    statement: '从温和洗护到深度清洁，为人与宠物共居空间提供专业选择。',
  },
  brands: {
    title: '品牌家族', eyebrow: 'BRAND FAMILY',
    intro: '多元品牌协同发展，共同服务更健康、更洁净的生活。',
    statement: '不同定位，同一份对专业、品质与陪伴的坚持。',
  },
  'pet-life': {
    title: '宠物健康生活', eyebrow: 'PET WELLNESS',
    intro: '分享科学、易懂、可实践的宠物护理与家庭清洁知识。',
    statement: '懂清洁，也更懂宠物生活。',
  },
  responsibility: {
    title: '社会责任', eyebrow: 'SOCIAL RESPONSIBILITY',
    intro: '关注每一个生命，也珍惜我们共同生活的环境。',
    statement: '以持续行动，让洁净生活拥有更长远的价值。',
  },
  news: {
    title: '资讯动态', eyebrow: 'MENGJING NEWS',
    intro: '记录集团发展、品牌行动、产品创新与行业观察。',
    statement: '与每一次向前同行。',
  },
  careers: {
    title: '加入萌净', eyebrow: 'JOIN MENGJING',
    intro: '与热爱宠物、关注健康生活的人一起创造长期价值。',
    statement: '在彼此成就中，共同成长。',
  },
};

const seriesDetails = [
  { group: 'pet', en: 'PET BATH & CARE', summary: '温和洁净，关注不同宠物的皮肤与毛发需求。', scene: '日常洗护 · 毛发护理' },
  { group: 'pet', en: 'PET DEODORIZATION', summary: '从异味来源与使用场景出发，改善宠物家庭空气体验。', scene: '空间净味 · 局部除味' },
  { group: 'pet', en: 'PET HYGIENE', summary: '兼顾清洁效率与宠物家庭使用体验，守护共居环境。', scene: '环境清洁 · 日常卫生' },
  { group: 'pet', en: 'PET SUPPLIES CARE', summary: '针对窝垫、玩具等高频用品，提供细分清洗方案。', scene: '窝垫清洗 · 玩具清洁' },
  { group: 'home', en: 'HOME LAUNDRY', summary: '面向人宠共居家庭的日常洗涤与洁净需求。', scene: '日常洗衣 · 家庭清洁' },
  { group: 'home', en: 'FABRIC CARE', summary: '关注沙发、地毯与宠物织物的清洁和气味管理。', scene: '织物护理 · 局部清洁' },
  { group: 'home', en: 'DISH CARE', summary: '针对宠物与家庭餐具，提供易冲洗的洁净选择。', scene: '餐具清洁 · 油污管理' },
];

export const productSeries = navigation[2].children.map(([title, path], index) => ({
  title,
  path,
  number: String(index + 1).padStart(2, '0'),
  ...seriesDetails[index],
}));

export const products = [
  { slug: 'gentle-shampoo', name: '宠物温和净护香波', series: 'pet-care', tag: '温和洗护', spec: '500mL', careType: '日常护理', audience: '犬猫适用', form: '液体', brand: '萌净宠护', brandSlug: 'mengjing-care', scenario: '宠物日常沐浴与毛发清洁', benefits: ['温和清洁', '易于冲洗', '柔顺毛发'] },
  { slug: 'paw-cleanser', name: '日常免洗洁足泡沫', series: 'pet-care', tag: '免洗洁足', spec: '150mL', careType: '局部清洁', audience: '犬猫适用', form: '泡沫', brand: '净爪星球', brandSlug: 'paw-planet', scenario: '外出回家后的足部清洁', benefits: ['按压起泡', '无需水洗', '日常便携'] },
  { slug: 'coat-conditioner', name: '宠物柔顺护毛素', series: 'pet-care', tag: '毛发护理', spec: '300mL', careType: '深度护理', audience: '犬猫适用', form: '乳液', brand: '萌净宠护', brandSlug: 'mengjing-care', scenario: '洗护后的毛发柔顺护理', benefits: ['顺滑毛发', '减少打结', '护理毛鳞片'] },
  { slug: 'space-deodorizer', name: '宠物空间净味喷雾', series: 'deodorization', tag: '空间除味', spec: '300mL', careType: '环境管理', audience: '宠物家庭', form: '喷雾', brand: '悠宠生活', brandSlug: 'youpet-life', scenario: '客厅、宠物活动区日常净味', benefits: ['快速喷洒', '气味管理', '多场景适用'] },
  { slug: 'litter-deodorizer', name: '猫砂盆净味护理喷雾', series: 'deodorization', tag: '局部净味', spec: '250mL', careType: '局部清洁', audience: '养猫家庭', form: '喷雾', brand: '净爪星球', brandSlug: 'paw-planet', scenario: '猫砂盆及周边区域气味管理', benefits: ['定点净味', '使用便捷', '适合高频区域'] },
  { slug: 'surface-cleaner', name: '宠物家庭表面清洁液', series: 'disinfection', tag: '表面清洁', spec: '500mL', careType: '环境管理', audience: '宠物家庭', form: '喷雾', brand: '萌净宠护', brandSlug: 'mengjing-care', scenario: '地面与非食品接触表面清洁', benefits: ['日常洁净', '场景明确', '使用规范'] },
  { slug: 'floor-cleaner', name: '人宠共居地板清洁液', series: 'disinfection', tag: '地面清洁', spec: '1L', careType: '深度清洁', audience: '宠物家庭', form: '浓缩液', brand: '净家优选', brandSlug: 'clean-home', scenario: '瓷砖及适用地板的周期清洁', benefits: ['集中清洁', '易于稀释', '减少残留'] },
  { slug: 'toy-cleaner', name: '宠物玩具清洗液', series: 'pet-supplies', tag: '用品清洗', spec: '500mL', careType: '日常护理', audience: '犬猫适用', form: '液体', brand: '萌净宠护', brandSlug: 'mengjing-care', scenario: '宠物玩具与日常用品清洗', benefits: ['针对用品', '易漂洗', '清晰用量'] },
  { slug: 'bed-laundry', name: '宠物窝垫洗涤液', series: 'pet-supplies', tag: '窝垫清洁', spec: '1L', careType: '深度清洁', audience: '宠物家庭', form: '浓缩液', brand: '悠宠生活', brandSlug: 'youpet-life', scenario: '窝垫、毯子与可水洗用品', benefits: ['深层洁净', '气味管理', '机洗手洗'] },
  { slug: 'home-laundry', name: '宠物家庭洗衣液', series: 'home-cleaning', tag: '家居洗涤', spec: '2L', careType: '日常护理', audience: '人宠共居家庭', form: '浓缩液', brand: '净家优选', brandSlug: 'clean-home', scenario: '家庭衣物与可水洗织物', benefits: ['日常洗涤', '低泡易漂', '家庭适用'] },
  { slug: 'stain-prewash', name: '衣物局部预洗液', series: 'home-cleaning', tag: '局部去渍', spec: '300mL', careType: '局部清洁', audience: '家庭适用', form: '液体', brand: '净家优选', brandSlug: 'clean-home', scenario: '衣物可水洗区域的局部预处理', benefits: ['精准涂抹', '预洗处理', '使用方便'] },
  { slug: 'fabric-cleaner', name: '宠物织物洁净液', series: 'fabric-care', tag: '织物清洁', spec: '1L', careType: '深度清洁', audience: '宠物家庭', form: '液体', brand: '悠宠生活', brandSlug: 'youpet-life', scenario: '沙发套、地毯与可洗织物', benefits: ['织物护理', '气味管理', '适用多场景'] },
  { slug: 'fabric-mist', name: '家居织物清新喷雾', series: 'fabric-care', tag: '日常清新', spec: '300mL', careType: '环境管理', audience: '家庭适用', form: '喷雾', brand: '净家优选', brandSlug: 'clean-home', scenario: '窗帘、沙发等织物日常清新', benefits: ['均匀喷雾', '使用轻便', '空间清新'] },
  { slug: 'bowl-cleaner', name: '宠物餐具清洁液', series: 'dish-cleaning', tag: '餐具清洁', spec: '500mL', careType: '日常护理', audience: '犬猫适用', form: '液体', brand: '萌净宠护', brandSlug: 'mengjing-care', scenario: '宠物食盆、水碗与适用餐具', benefits: ['针对油污', '易于冲洗', '按压取量'] },
  { slug: 'home-dish-cleaner', name: '家庭餐具清洁液', series: 'dish-cleaning', tag: '家庭清洁', spec: '500mL', careType: '日常护理', audience: '家庭适用', form: '液体', brand: '净家优选', brandSlug: 'clean-home', scenario: '家庭餐具日常手洗', benefits: ['日常去污', '泡沫适中', '易冲洗'] },
];

export const brands = [
  { slug: 'mengjing-care', name: '萌净宠护', en: 'MENGJING CARE', positioning: '专业、温和的宠物清洁护理', color: 'sage', audience: '重视成分与护理体验的宠物家庭', territory: '宠物洗护 · 餐具与用品清洁', promise: '让专业护理回到每一天', description: '以宠物自身护理为核心，关注洗护、用品与餐具等高频清洁场景。' },
  { slug: 'paw-planet', name: '净爪星球', en: 'PAW PLANET', positioning: '轻松有活力的宠物日常清洁', color: 'blue', audience: '年轻养宠人与城市宠物家庭', territory: '免洗清洁 · 局部护理 · 日常净味', promise: '轻松处理养宠日常小问题', description: '聚焦外出回家、局部清洁和气味管理，让高频护理更轻便。' },
  { slug: 'youpet-life', name: '悠宠生活', en: 'YOUPET LIFE', positioning: '围绕陪伴的品质宠物生活', color: 'sand', audience: '关注人宠共居品质的家庭', territory: '空间净味 · 织物与窝垫护理', promise: '把陪伴安放在舒适空间里', description: '从共同生活的空间出发，关注织物、窝垫与家庭气味管理。' },
  { slug: 'clean-home', name: '净家优选', en: 'CLEAN HOME', positioning: '安心实用的家庭清洁方案', color: 'mint', audience: '人宠共居与日常家庭用户', territory: '家居洗涤 · 地面 · 餐具清洁', promise: '让家庭洁净简单而可靠', description: '服务家庭高频清洁任务，强调清晰用法、稳定体验与实用选择。' },
];

export const articles = [
  { slug: 'bath-frequency', category: 'care', type: '宠物洗护知识', title: '不同季节，应该多久给宠物洗一次澡？', date: '2026.05.24', updated: '2026.05.28', read: '6 分钟', topic: '洗护频率', petType: '犬猫通用', scenario: '居家洗护', summary: '结合宠物类型、活动频率、皮肤状态与季节变化，判断更合适的洗护节奏。', reviewer: '萌净宠物护理内容组' },
  { slug: 'odor-management', category: 'cleaning-guide', type: '养宠清洁指南', title: '宠物家庭异味管理，从这三个区域开始', date: '2026.05.12', updated: '2026.05.12', read: '5 分钟', topic: '气味管理', petType: '宠物家庭', scenario: '客厅 · 窝垫 · 猫砂区', summary: '先找到气味来源，再分别处理高频活动区、织物和排泄区域。', reviewer: '萌净家庭清洁内容组' },
  { slug: 'shared-home', category: 'home-solutions', type: '家庭清洁方案', title: '人宠共居空间的一周清洁计划', date: '2026.04.28', updated: '2026.05.06', read: '8 分钟', topic: '周期清洁', petType: '人宠共居', scenario: '全屋清洁', summary: '按每日、每周与按需任务拆分清洁工作，减少临时集中处理的压力。', reviewer: '萌净健康生活编辑部' },
  { slug: 'paw-care', category: 'care', type: '宠物洗护知识', title: '外出回家后，如何正确清洁宠物足部？', date: '2026.04.16', updated: '2026.04.18', read: '4 分钟', topic: '足部护理', petType: '犬类为主', scenario: '外出回家', summary: '根据路面环境和足部状态选择擦拭、免洗或水洗，避免不必要的过度清洁。', reviewer: '萌净宠物护理内容组' },
];

export const newsItems = [
  { slug: 'green-factory-plan', category: 'group', type: '集团新闻', title: '萌净启动绿色生产升级计划', date: '2026.06.06', source: '萌净集团', location: '苏州', summary: '围绕能源管理、生产流程与包装减量，推进可持续生产体系建设。', related: '绿色生产' },
  { slug: 'new-care-line', category: 'products', type: '新品发布', title: '全新宠物温和洗护系列正式发布', date: '2026.05.18', source: '萌净产品中心', location: '上海', summary: '从真实宠物护理需求出发，带来更细分的日常洗护选择。', related: '宠物洗护系列' },
  { slug: 'animal-care-action', category: 'brands', type: '品牌动态', title: '净爪星球携手公益伙伴开展关爱行动', date: '2026.04.22', source: '净爪星球', location: '上海', summary: '通过物资支持与科学养护分享，为待领养动物提供持续帮助。', related: '流浪动物关爱' },
  { slug: 'clean-living-report', category: 'industry', type: '行业资讯', title: '人宠共居推动家庭清洁需求走向精细化', date: '2026.04.08', source: '萌净研究观察', location: '中国', summary: '关注宠物友好家庭在产品、安全与使用场景方面的新需求。', related: '宠物家庭清洁方案' },
];

export const jobs = [
  { slug: 'brand-manager', title: '品牌经理', department: '品牌中心', category: '品牌与市场', location: '上海', type: '社会招聘', experience: '3–5 年', posted: '2026.06.10' },
  { slug: 'product-researcher', title: '产品研发工程师', department: '研发中心', category: '研发与品质', location: '苏州', type: '社会招聘', experience: '3 年以上', posted: '2026.06.08' },
  { slug: 'content-editor', title: '宠物内容编辑', department: '内容中心', category: '品牌与市场', location: '上海', type: '社会招聘', experience: '1–3 年', posted: '2026.06.02' },
  { slug: 'quality-specialist', title: '质量管理专员', department: '品质中心', category: '研发与品质', location: '苏州', type: '校园招聘', experience: '应届可投', posted: '2026.05.26' },
];

export const responsibilityPrograms = [
  { slug: 'public-welfare', number: '01', title: '公益救助', en: 'PUBLIC WELFARE', focus: '物资支持 · 科普协作', summary: '围绕救助机构的实际需求，提供清洁物资、日常养护知识与持续沟通支持。', status: '持续项目', partner: '合作机构信息待正式公布' },
  { slug: 'animal-care', number: '02', title: '流浪动物关爱', en: 'ANIMAL CARE', focus: '待领养动物 · 志愿行动', summary: '关注待领养动物的清洁、生活环境与领养前准备，支持更稳定的关爱行动。', status: '长期关注', partner: '公益伙伴信息待正式公布' },
  { slug: 'green-production', number: '03', title: '绿色生产', en: 'GREEN PRODUCTION', focus: '能源管理 · 流程优化', summary: '从生产过程、能源使用与内部管理入手，逐步建立可追踪的绿色实践。', status: '推进中', partner: '阶段数据待审核后发布' },
  { slug: 'eco-packaging', number: '04', title: '环保包装', en: 'ECO PACKAGING', focus: '包装减量 · 回收友好', summary: '关注包装材料、结构减量与回收提示，让环保信息更清楚、更易执行。', status: '持续改进', partner: '包装方案按产品逐步更新' },
];

export function findNavItem(pathname) {
  return navigation.flatMap((item) => item.children.map(([label, path]) => ({ label, path, parent: item })))
    .find((item) => pathname === item.path);
}
