// 模拟数据 - 涵盖APP和管理网站所需的所有数据
// 真实在售项目引用 + LP招募项目保留

export const currentUser = {
  id: 'u1',
  name: '张明远',
  avatar: '👤',
  demandTags: ['三房两厅', '近地铁', '学区', '120-150㎡', '总价300-500万'],
  lifestyle: '三口之家，注重教育配套和社区环境',
  lpStatus: 'active',
  totalInvest: 1500000,
  expectedReturn: 225000,
  joinedProjects: ['p1', 'p2'],
}

// ====== 视频轮播数据（真实在售项目，模拟宣传片） ======
export const videoCarousel = [
  {
    id: 'v1',
    title: '滨江金帝·奥映世纪',
    subtitle: '奥体核芯 · 一线江景大宅 · 238-388㎡',
    location: '杭州钱江世纪城奥体板块',
    price: '千万级',
    videoUrl: null, // 真实场景用真实视频URL
    posterColor: 'from-blue-900 via-indigo-800 to-slate-900',
    icon: '🌊',
    tags: ['奥体核芯', '一线江景', '纯大平层', '滨江出品'],
    link: 'https://hz.focus.cn/loupan/',
    description: '2026年江河世纪壹号作品，直线距离钱塘江约400米，对望钱江新城、江河汇',
  },
  {
    id: 'v2',
    title: '杭珹未来中心',
    subtitle: '未来科技城 · TOD综合体 · 智慧社区',
    location: '杭州余杭区未来科技城',
    price: '350万起',
    videoUrl: null,
    posterColor: 'from-emerald-800 via-teal-700 to-cyan-900',
    icon: '🏙️',
    tags: ['TOD地铁上盖', '智慧社区', '未来科技城', '刚需改善'],
    link: 'https://hz.focus.cn/loupan/',
    description: '未来科技城核心区TOD综合体，地铁5号线直达，商业综合体+智慧社区配套',
  },
  {
    id: 'v3',
    title: '滨江建杭·潮映杭园',
    subtitle: '钱新2.0 · 滨江4.0迭代 · 精装交付',
    location: '杭州上城区钱江新城二期',
    price: '600万起',
    videoUrl: null,
    posterColor: 'from-purple-900 via-violet-800 to-indigo-900',
    icon: '🏛️',
    tags: ['钱新2.0', '滨江迭代', '精装交付', '改善首选'],
    link: 'https://hz.focus.cn/loupan/',
    description: '滨江集团深耕钱江新城二期全新4.0迭代作品，钱新2.0核心位置',
  },
  {
    id: 'v4',
    title: '滨江&绿城·未科地王',
    subtitle: '联排+叠排 · 纯低密 · 未科核心',
    location: '杭州余杭区未来科技城',
    price: '800万起',
    videoUrl: null,
    posterColor: 'from-amber-700 via-orange-600 to-red-800',
    icon: '🏡',
    tags: ['纯低密', '联排叠排', '滨江×绿城', '地王项目'],
    link: 'https://hz.focus.cn/loupan/',
    description: '2026年5月滨江&绿城联合竞得，楼面价31644元/㎡，未科核心纯低密住区',
  },
]

// ====== 真实在售项目（用于首页"热门在售"板块） ======
export const realProjects = [
  {
    id: 'rp1',
    name: '滨江金帝·奥映世纪',
    location: '钱江世纪城奥体核芯',
    icon: '🌊',
    price: '千万级',
    areaRange: '238-388㎡',
    type: '纯大平层',
    developer: '滨江集团',
    tags: ['一线江景', '奥体核芯', '纯住宅'],
    status: '在售',
    link: 'https://hz.focus.cn/loupan/',
    desc: '直线距离钱塘江约400米，对望钱江新城、江河汇',
  },
  {
    id: 'rp2',
    name: '杭珹未来中心',
    location: '未来科技城核心区',
    icon: '🏙️',
    price: '350万起',
    areaRange: '98-168㎡',
    type: 'TOD综合体',
    developer: '华润置地',
    tags: ['TOD', '智慧社区', '刚需改善'],
    status: '在售',
    link: 'https://hz.focus.cn/loupan/',
    desc: '地铁5号线直达，商业综合体+智慧社区配套',
  },
  {
    id: 'rp3',
    name: '滨江建杭·潮映杭园',
    location: '钱江新城二期',
    icon: '🏛️',
    price: '600万起',
    areaRange: '145-235㎡',
    type: '精装高层',
    developer: '滨江&建杭',
    tags: ['钱新2.0', '精装交付', '改善'],
    status: '在售',
    link: 'https://hz.focus.cn/loupan/',
    desc: '滨江4.0迭代作品，钱新2.0核心位置',
  },
  {
    id: 'rp4',
    name: '滨江&绿城·未科地王',
    location: '未来科技城',
    icon: '🏡',
    price: '800万起',
    areaRange: '180-320㎡',
    type: '联排+叠排',
    developer: '滨江×绿城',
    tags: ['纯低密', '联排叠排', '地王'],
    status: '待售',
    link: 'https://hz.focus.cn/loupan/',
    desc: '楼面价31644元/㎡，未科核心纯低密住区',
  },
  {
    id: 'rp5',
    name: '海威安铂中心',
    location: '钱江世纪城',
    icon: '🌆',
    price: '58000元/㎡',
    areaRange: '180-300㎡',
    type: '高端住宅',
    developer: '海威置业',
    tags: ['世纪城', '高端', '大平层'],
    status: '在售',
    link: 'https://hz.focus.cn/loupan/',
    desc: '钱江世纪城核心，城市天际线住宅',
  },
  {
    id: 'rp6',
    name: '保利天珺',
    location: '钱江世纪城',
    icon: '✨',
    price: '售价待定',
    areaRange: '120-200㎡',
    type: '精装高层',
    developer: '保利发展',
    tags: ['世纪城', '保利', '精装'],
    status: '待售',
    link: 'https://hz.focus.cn/loupan/',
    desc: '保利天字系产品，钱江世纪城核心地段',
  },
]

// ====== LP招募项目（保留原有逻辑） ======
export const projects = [
  {
    id: 'p1',
    name: '翡翠湾花园',
    location: '杭州市余杭区未来科技城',
    coverImage: '🏘️',
    currentStage: 4,
    stageStartedAt: '2026-03-15',
    totalUnits: 286,
    reservedUnits: 213,
    lpCount: 187,
    totalInvestment: 850000000,
    targetCSI: 4.5,
    currentCSI: 4.7,
    minInvest: 500000,
    unitPrice: 32000,
    areaRange: '98-168㎡',
    stageProgress: {
      1: { completedAt: '2025-10-20', duration: 45 },
      2: { completedAt: '2025-12-15', duration: 56 },
      3: { completedAt: '2026-02-28', duration: 75 },
      4: { completedAt: null, duration: null },
      5: { completedAt: null, duration: null },
      6: { completedAt: null, duration: null },
      7: { completedAt: null, duration: null },
    },
    modules: [
      { id: 'm1', name: '户型结构', options: ['三房两厅两卫', '四房两厅两卫', '三房两厅一卫'] },
      { id: 'm2', name: '装修风格', options: ['现代简约', '新中式', '北欧风', '轻奢'] },
      { id: 'm3', name: '智能家居', options: ['基础包', '舒适包', '全屋智能'] },
      { id: 'm4', name: '收纳方案', options: ['标准收纳', '升级收纳', '定制收纳'] },
    ],
    description: '位于未来科技城核心区，毗邻地铁5号线，周边配套成熟。由LP投资合伙人共同参与，个性化定制交付。',
  },
  {
    id: 'p2',
    name: '云栖山居',
    location: '杭州市西湖区之江板块',
    coverImage: '🏔️',
    currentStage: 2,
    stageStartedAt: '2026-06-01',
    totalUnits: 156,
    reservedUnits: 89,
    lpCount: 72,
    totalInvestment: 520000000,
    targetCSI: 4.5,
    currentCSI: 4.3,
    minInvest: 800000,
    unitPrice: 45000,
    areaRange: '120-220㎡',
    stageProgress: {
      1: { completedAt: '2026-04-15', duration: 38 },
      2: { completedAt: null, duration: null },
      3: { completedAt: null, duration: null },
      4: { completedAt: null, duration: null },
      5: { completedAt: null, duration: null },
      6: { completedAt: null, duration: null },
      7: { completedAt: null, duration: null },
    },
    modules: [
      { id: 'm1', name: '户型结构', options: ['四房两厅三卫', '五房两厅三卫', '四房两厅两卫'] },
      { id: 'm2', name: '装修风格', options: ['新中式', '现代轻奢', '日式禅意'] },
      { id: 'm3', name: '庭院方案', options: ['中式庭院', '现代花园', '禅意枯山水'] },
      { id: 'm4', name: '智能家居', options: ['全屋智能豪华包', '全屋智能旗舰包'] },
    ],
    description: '之江板块低密改善社区，背靠山林，面向钱塘江。注重自然与居住的融合，打造高品质改善型住宅。',
  },
  {
    id: 'p3',
    name: '星耀城',
    location: '杭州市萧山区钱江世纪城',
    coverImage: '🌆',
    currentStage: 1,
    stageStartedAt: '2026-07-01',
    totalUnits: 420,
    reservedUnits: 56,
    lpCount: 0,
    totalInvestment: 1200000000,
    targetCSI: 4.5,
    currentCSI: null,
    minInvest: 300000,
    unitPrice: 28000,
    areaRange: '85-135㎡',
    stageProgress: {
      1: { completedAt: null, duration: null },
      2: { completedAt: null, duration: null },
      3: { completedAt: null, duration: null },
      4: { completedAt: null, duration: null },
      5: { completedAt: null, duration: null },
      6: { completedAt: null, duration: null },
      7: { completedAt: null, duration: null },
    },
    modules: [],
    description: '钱江世纪城地铁上盖TOD项目，面向年轻家庭和城市新锐。高性价比+个性化轻定制。',
  },
]

export const myInvestments = [
  { id: 'inv1', projectId: 'p1', projectName: '翡翠湾花园', amount: 1000000, share: 0.00118, investedAt: '2025-11-01', estimatedReturn: 150000, currentValue: 1080000, status: 'active' },
  { id: 'inv2', projectId: 'p2', projectName: '云栖山居', amount: 500000, share: 0.00096, investedAt: '2026-05-15', estimatedReturn: 75000, currentValue: 510000, status: 'active' },
]

export const investmentTransactions = [
  { id: 'tx1', projectName: '翡翠湾花园', type: '出资', amount: 500000, date: '2025-11-01', status: '已完成' },
  { id: 'tx2', projectName: '翡翠湾花园', type: '二期出资', amount: 500000, date: '2026-01-15', status: '已完成' },
  { id: 'tx3', projectName: '云栖山居', type: '出资', amount: 500000, date: '2026-05-15', status: '已完成' },
  { id: 'tx4', projectName: '翡翠湾花园', type: '分红', amount: 30000, date: '2026-06-30', status: '已到账' },
]

export const evaluations = [
  { id: 'ev1', projectName: '翡翠湾花园', stage: '需求发现', score: 4.5, content: '需求采集很细致，感觉被充分倾听了', date: '2025-10-15', sentiment: 'positive', user: '张先生' },
  { id: 'ev2', projectName: '翡翠湾花园', stage: '共创设计', score: 4.8, content: '参与设计的感觉太棒了！方案迭代很快', date: '2026-01-20', sentiment: 'positive', user: '李女士' },
  { id: 'ev3', projectName: '翡翠湾花园', stage: '透明建造', score: 4.3, content: '直播看工地很放心，但希望能增加更多细节', date: '2026-05-10', sentiment: 'neutral', user: '王先生' },
  { id: 'ev4', projectName: '云栖山居', stage: '需求发现', score: 4.2, content: '整体不错，需求匹配度还有提升空间', date: '2026-04-10', sentiment: 'neutral', user: '赵女士' },
  { id: 'ev5', projectName: '翡翠湾花园', stage: '共创设计', score: 4.9, content: '没想到买房还能参与设计！模块化配置特别直观', date: '2026-02-05', sentiment: 'positive', user: '陈先生' },
  { id: 'ev6', projectName: '云栖山居', stage: '精准获地', score: 4.6, content: '选址很好，之江板块环境优美，期待后续', date: '2026-05-20', sentiment: 'positive', user: '刘女士' },
]

export const demandHeatmapData = [
  { region: '未来科技城', score: 92, demand: '刚需+改善', priceRange: '300-500万' },
  { region: '钱江世纪城', score: 88, demand: '刚需', priceRange: '250-400万' },
  { region: '之江', score: 85, demand: '改善+高端', priceRange: '500-1000万' },
  { region: '钱江新城二期', score: 83, demand: '高端改善', priceRange: '600-1500万' },
  { region: '滨江', score: 82, demand: '改善', priceRange: '400-700万' },
  { region: '城东新城', score: 78, demand: '刚需+改善', priceRange: '300-500万' },
  { region: '申花', score: 75, demand: '改善+高端', priceRange: '600-1200万' },
  { region: '良渚', score: 72, demand: '刚需+养老', priceRange: '200-350万' },
]

export const customerSegments = [
  { name: '年轻刚需', percentage: 35, avgAge: 29, avgBudget: 2800000, topDemand: '地铁+小户型', color: '#667eea' },
  { name: '改善家庭', percentage: 30, avgAge: 38, avgBudget: 5200000, topDemand: '学区+大户型', color: '#f093fb' },
  { name: '品质升级', percentage: 20, avgAge: 45, avgBudget: 8500000, topDemand: '低密+景观', color: '#4facfe' },
  { name: '投资养老', percentage: 15, avgAge: 55, avgBudget: 3500000, topDemand: '环境+医疗', color: '#43e97b' },
]

export const csiHistory = [
  { month: '1月', csi: 4.2, nps: 35 },
  { month: '2月', csi: 4.3, nps: 38 },
  { month: '3月', csi: 4.1, nps: 32 },
  { month: '4月', csi: 4.4, nps: 42 },
  { month: '5月', csi: 4.5, nps: 45 },
  { month: '6月', csi: 4.6, nps: 48 },
  { month: '7月', csi: 4.7, nps: 52 },
]

export const touchpointEvaluations = [
  { touchpoint: '需求表达', score: 4.6, count: 1245, trend: 'up' },
  { touchpoint: '产品概念', score: 4.4, count: 892, trend: 'up' },
  { touchpoint: '设计参与', score: 4.7, count: 756, trend: 'stable' },
  { touchpoint: '建造透明', score: 4.3, count: 634, trend: 'up' },
  { touchpoint: '交付体验', score: 4.5, count: 412, trend: 'stable' },
  { touchpoint: '综合评价', score: 4.5, count: 523, trend: 'up' },
  { touchpoint: '居住体验', score: 4.2, count: 287, trend: 'down' },
]

export const improvementTickets = [
  { id: 'tk1', project: '翡翠湾花园', issue: '建造直播细节不够丰富', source: '客户评价', severity: 'yellow', status: '处理中', createdAt: '2026-05-12', dueAt: '2026-05-19', assignee: '工程部-李明' },
  { id: 'tk2', project: '云栖山居', issue: '需求匹配度反馈一般', source: '需求发现评价', severity: 'yellow', status: '已完成', createdAt: '2026-04-15', dueAt: '2026-04-22', assignee: '产品部-王芳' },
  { id: 'tk3', project: '翡翠湾花园', issue: '设计模块选择不够灵活', source: '共创设计评价', severity: 'green', status: '已完成', createdAt: '2026-02-01', dueAt: '2026-02-14', assignee: '设计部-陈工' },
  { id: 'tk4', project: '星耀城', issue: '需求采集渠道单一', source: 'AI分析', severity: 'yellow', status: '待处理', createdAt: '2026-07-10', dueAt: '2026-07-17', assignee: '运营部-赵敏' },
]

export const riskAlerts = [
  { id: 'r1', project: '翡翠湾花园', type: '进度风险', level: 'yellow', content: '主体结构施工略有滞后，预计延误3-5天', createdAt: '2026-07-15' },
  { id: 'r2', project: '云栖山居', type: 'LP募集', level: 'green', content: 'LP募集进度85%，超出预期，建议加速推进', createdAt: '2026-07-14' },
  { id: 'r3', project: '星耀城', type: '市场风险', level: 'yellow', content: '周边竞品项目降价促销，需关注定价策略', createdAt: '2026-07-13' },
]

export const dashboardStats = {
  totalProjects: 3,
  activeProjects: 3,
  totalLP: 259,
  totalCapital: 2570000000,
  avgCSI: 4.5,
  avgNPS: 45,
  totalImprovements: 47,
  pendingImprovements: 8,
}

export const designModules = {
  selected: {
    'p1': { 'm1': '三房两厅两卫', 'm2': '现代简约', 'm3': '舒适包', 'm4': '升级收纳' }
  },
  costs: {
    'm1': { '三房两厅两卫': 0, '四房两厅两卫': 150000, '三房两厅一卫': -50000 },
    'm2': { '现代简约': 0, '新中式': 80000, '北欧风': 30000, '轻奢': 120000 },
    'm3': { '基础包': 0, '舒适包': 50000, '全屋智能': 120000 },
    'm4': { '标准收纳': 0, '升级收纳': 30000, '定制收纳': 80000 },
  }
}

// ====== 通知消息数据 ======
export const notifications = [
  { id: 'n1', type: 'progress', title: '建造进度更新', content: '翡翠湾花园主体结构已封顶，进入内部装修阶段', time: '2小时前', read: false },
  { id: 'n2', type: 'evaluation', title: '评价提醒', content: '请对翡翠湾花园「透明建造」阶段进行评价', time: '1天前', read: false },
  { id: 'n3', type: 'dividend', title: '分红到账', content: '翡翠湾花园项目分红 ¥30,000 已到账', time: '2天前', read: false },
  { id: 'n4', type: 'vote', title: '方案投票', content: '云栖山居外立面方案投票即将截止，请尽快参与', time: '3天前', read: true },
  { id: 'n5', type: 'system', title: '系统通知', content: '您已被提名为翡翠湾花园LP客户委员会候选成员', time: '5天前', read: true },
  { id: 'n6', type: 'community', title: '社群动态', content: '翡翠湾花园业主社群新增15条讨论', time: '1周前', read: true },
]

// ====== 投资指南 ======
export const investGuide = {
  sections: [
    { title: '什么是LP投资合伙人？', content: 'LP（Limited Partner，有限合伙人）是项目投资的出资方。您作为购房客户，可以同时成为项目投资合伙人，享受购房折扣+项目利润分红。您以出资额为限承担有限责任，不参与日常经营决策。' },
    { title: '投资门槛与收益', content: '不同项目最低投资额不同，通常为30万-80万起。收益包括：①购房折扣（LP专属5%折扣）；②项目利润分红（按出资比例）；③房产增值收益。预期年化回报率8-15%。' },
    { title: '资金安全保障', content: '所有LP资金进入托管银行监管账户，实行三账户隔离（土地款/建设款/预备金）。大额支出需托管银行+LP委员会双审核。月度资金使用报告对LP公开。' },
    { title: '退出机制', content: '您有三种退出方式：①实物退出——以折扣价购买对应房产（最常用）；②现金退出——项目清算时按份额分配利润；③份额转让——在平台内部转让LP份额（需GP同意）。' },
    { title: '风险提示', content: 'LP投资非保本理财产品，存在市场风险。但通过数据驱动的精准定位+GP跟投共担+透明化管理，我们已将传统开发的市场风险大幅降低。历史项目CSI均≥4.3。' },
  ]
}

// ====== 帮助与客服 ======
export const faqList = [
  { q: '如何表达我的住房需求？', a: '在首页点击"我想住在这样的房子里..."入口，描述您的理想居住需求，包括户型、面积、预算、地段偏好等。AI将分析您的需求并匹配合适的项目。' },
  { q: '成为LP需要什么条件？', a: '需要完成风险承受能力评估、资金来源合规审查，并满足最低投资额要求。首次LP设有投资上限，保护您的投资安全。' },
  { q: '如何参与设计方案？', a: '在项目进入「共创设计」阶段后，您可以在APP的"共创"Tab中选择模块化配置方案，包括户型、装修风格、智能家居等。您的选择将直接影响最终交付。' },
  { q: '建造过程能看到吗？', a: '可以！在「透明建造」阶段，您可以通过APP实时查看工地直播、关键节点验收记录、材料品牌批次追溯。关键节点还可申请现场参与验收。' },
  { q: '不满意可以退款吗？', a: '在LP份额锁定前（精准获地阶段）可全额退出。锁定后退出需通过份额转让机制。如有质量问题，通过客户评价体系触发改进工单，GP须在约定时间内响应。' },
  { q: 'CSI评分影响什么？', a: 'CSI（客户综合满意指数）直接影响GP的管理费收入和后续项目LP募集能力。CSI≥4.5分管理费100%收取，CSI<3.5分管理费打折+强制整改。您的评价真正有力量。' },
]

// ====== LP管理数据（管理后台用） ======
export const lpList = [
  { id: 'lp1', name: '张明远', level: 'VIP', investTotal: 1500000, projects: 2, joinDate: '2025-10-01', status: 'active', avatar: '👤' },
  { id: 'lp2', name: '李建国', level: '普通', investTotal: 500000, projects: 1, joinDate: '2025-11-15', status: 'active', avatar: '👨' },
  { id: 'lp3', name: '王思雨', level: 'VIP', investTotal: 2000000, projects: 2, joinDate: '2025-09-20', status: 'active', avatar: '👩' },
  { id: 'lp4', name: '陈伟', level: '普通', investTotal: 800000, projects: 1, joinDate: '2026-01-10', status: 'active', avatar: '👨‍💼' },
  { id: 'lp5', name: '赵敏', level: '潜在', investTotal: 0, projects: 0, joinDate: '2026-07-01', status: 'pending', avatar: '👩‍💼' },
]

export const designLibrary = [
  { id: 'd1', name: '现代简约-A', type: '装修风格', usage: 45, rating: 4.6, preview: '🎨' },
  { id: 'd2', name: '新中式-B', type: '装修风格', usage: 32, rating: 4.4, preview: '🏯' },
  { id: 'd3', name: '北欧风-C', type: '装修风格', usage: 28, rating: 4.3, preview: '🌿' },
  { id: 'd4', name: '三房两厅两卫', type: '户型模块', usage: 67, rating: 4.7, preview: '🏠' },
  { id: 'd5', name: '全屋智能旗舰', type: '智能家居', usage: 38, rating: 4.8, preview: '🤖' },
  { id: 'd6', name: '定制收纳方案', type: '收纳方案', usage: 52, rating: 4.5, preview: '📦' },
]

export const engineeringData = [
  { project: '翡翠湾花园', progress: 62, qualityScore: 4.6, safetyDays: 287, workers: 156, nextMilestone: '内部装修进场' },
  { project: '云栖山居', progress: 28, qualityScore: 4.4, safetyDays: 89, workers: 72, nextMilestone: '基础施工完成' },
  { project: '星耀城', progress: 8, qualityScore: null, safetyDays: 17, workers: 34, nextMilestone: '方案设计评审' },
]

export const aiModelData = {
  demandPrediction: { accuracy: 87.3, trainingSamples: 12580, lastTrained: '2026-07-15', version: 'v2.4.1' },
  productRecommend: { accuracy: 84.6, trainingSamples: 8920, lastTrained: '2026-07-14', version: 'v1.9.3' },
  qualityEval: { accuracy: 91.2, trainingSamples: 4560, lastTrained: '2026-07-13', version: 'v3.1.0' },
  serviceMatch: { accuracy: 79.8, trainingSamples: 6780, lastTrained: '2026-07-12', version: 'v1.5.2' },
}
