import { useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    axis: "EI",
    prompt: "如果你早上醒来，发现自己被封为“小区气氛组组长”，你会先干嘛？",
    options: [
      { label: "立刻拿喇叭组织楼下晨间走秀", pole: "E" },
      { label: "先拉窗帘，确认没人知道是我", pole: "I" },
    ],
  },
  {
    id: 2,
    axis: "SN",
    prompt: "你捡到一张写着“今晚月亮会发工资”的纸条，你更相信什么？",
    options: [
      { label: "这一定是某种隐喻，细节里有暗号", pole: "N" },
      { label: "先看纸张材质，像不像真的工资条", pole: "S" },
    ],
  },
  {
    id: 3,
    axis: "TF",
    prompt: "朋友失恋后说想去动物园和羊驼谈心，你的第一反应是？",
    options: [
      { label: "抱住他，羊驼不懂，但我懂", pole: "F" },
      { label: "先评估羊驼是否具备情绪支持资质", pole: "T" },
    ],
  },
  {
    id: 4,
    axis: "JP",
    prompt: "周末旅行前夜，你的行李箱通常是什么状态？",
    options: [
      { label: "三天前就按颜色和命运分层打包", pole: "J" },
      { label: "出门前五分钟把人生一起塞进去", pole: "P" },
    ],
  },
  {
    id: 5,
    axis: "EI",
    prompt: "火锅店突然让你上台领唱店歌，你会？",
    options: [
      { label: "抢麦开唱，顺便带隔壁桌合声", pole: "E" },
      { label: "假装去调蘸料，从后门蒸发", pole: "I" },
    ],
  },
  {
    id: 6,
    axis: "SN",
    prompt: "你看到一只猫对着空气挥拳，你更容易想到？",
    options: [
      { label: "它在和异次元甲方交涉", pole: "N" },
      { label: "空气里大概率真有飞虫", pole: "S" },
    ],
  },
  {
    id: 7,
    axis: "TF",
    prompt: "同事把 PPT 做成荧光绿加大红渐变，你会怎么说？",
    options: [
      { label: "我先夸你的勇气，再一起救页面", pole: "F" },
      { label: "直接指出这份审美需要抢救", pole: "T" },
    ],
  },
  {
    id: 8,
    axis: "JP",
    prompt: "点外卖时，商家送来“随机惊喜盲盒酱汁”，你会？",
    options: [
      { label: "先阅读所有评价，推导最优蘸法", pole: "J" },
      { label: "来都来了，往饭上一浇听天由命", pole: "P" },
    ],
  },
  {
    id: 9,
    axis: "EI",
    prompt: "公司团建安排“蒙眼找搭子”游戏，你通常？",
    options: [
      { label: "三分钟内认识全场并组了个群", pole: "E" },
      { label: "希望自己像背景板一样自动虚化", pole: "I" },
    ],
  },
  {
    id: 10,
    axis: "SN",
    prompt: "你收到一块会发光的石头，第一件事是？",
    options: [
      { label: "给它起名，并怀疑自己被选中了", pole: "N" },
      { label: "查成分，看是不是夜光塑料", pole: "S" },
    ],
  },
  {
    id: 11,
    axis: "TF",
    prompt: "朋友穿着像刚从冰箱里逃出来，问你好不好看，你会？",
    options: [
      { label: "先保护他的自尊，再委婉建议换件外套", pole: "F" },
      { label: "诚实告知：像冷藏柜门成精了", pole: "T" },
    ],
  },
  {
    id: 12,
    axis: "JP",
    prompt: "你准备做饭，发现缺三样调料，这时你会？",
    options: [
      { label: "立刻改菜单并列出补货清单", pole: "J" },
      { label: "凭直觉乱加，做出一道新物种", pole: "P" },
    ],
  },
  {
    id: 13,
    axis: "EI",
    prompt: "演唱会散场时大家一起合照，你通常站哪？",
    options: [
      { label: "正中间，甚至已经摆好第二套表情", pole: "E" },
      { label: "最后一排边角，仿佛路过的保安", pole: "I" },
    ],
  },
  {
    id: 14,
    axis: "SN",
    prompt: "算命先生说你命里缺“闪光感”，你会怎么理解？",
    options: [
      { label: "我懂了，我天生适合当传奇", pole: "N" },
      { label: "先问具体是缺睡眠还是缺亮片", pole: "S" },
    ],
  },
  {
    id: 15,
    axis: "TF",
    prompt: "群里吵起来了，有人开始发二十张哭哭表情包，你会？",
    options: [
      { label: "先缓和气氛，把人从情绪沼泽里捞出来", pole: "F" },
      { label: "提炼争议焦点，逐条解决问题", pole: "T" },
    ],
  },
  {
    id: 16,
    axis: "JP",
    prompt: "出门赶高铁时导航突然说要绕路，你的反应是？",
    options: [
      { label: "切换备用方案，步速和心率同步上升", pole: "J" },
      { label: "先买杯喝的，事情总会自己展开", pole: "P" },
    ],
  },
  {
    id: 17,
    axis: "EI",
    prompt: "在陌生婚礼上被误认成新人的重要朋友，你会？",
    options: [
      { label: "顺势寒暄，十分钟后已经敬完一圈", pole: "E" },
      { label: "微笑点头，然后消失去角落吃甜品", pole: "I" },
    ],
  },
  {
    id: 18,
    axis: "SN",
    prompt: "深夜听见楼上在拖动神秘重物，你脑内弹出的剧情是？",
    options: [
      { label: "也许他们在搬运穿越门框", pole: "N" },
      { label: "多半是在挪家具，别瞎想", pole: "S" },
    ],
  },
  {
    id: 19,
    axis: "TF",
    prompt: "队友把截止时间记错，项目快炸了，你会先做什么？",
    options: [
      { label: "先稳住大家，别让气氛比项目先炸", pole: "F" },
      { label: "立即拆任务，谁错谁补，先救交付", pole: "T" },
    ],
  },
  {
    id: 20,
    axis: "JP",
    prompt: "你打开电脑准备学习，结果弹出七个娱乐邀请窗口，你会？",
    options: [
      { label: "全部关闭，给自己排一份作战表", pole: "J" },
      { label: "先点一个看看，说不定能学到人生", pole: "P" },
    ],
  },
  {
    id: 21,
    axis: "EI",
    prompt: "咖啡店有人问“这里有人吗”，其实那是你的座位，你会？",
    options: [
      { label: "顺势聊两句，可能还能拼个桌友谊", pole: "E" },
      { label: "低声说有，然后抱紧电脑和座位", pole: "I" },
    ],
  },
  {
    id: 22,
    axis: "SN",
    prompt: "如果明天世界只剩下一种颜色，你更担心什么？",
    options: [
      { label: "那象征意义会不会改变命运结构", pole: "N" },
      { label: "衣服、食物和红绿灯还怎么分辨", pole: "S" },
    ],
  },
  {
    id: 23,
    axis: "TF",
    prompt: "朋友做了一首难听但很努力的歌，硬要你点评，你会？",
    options: [
      { label: "先肯定情绪表达，再挑一处最能救的", pole: "F" },
      { label: "直接说副歌像打印机卡纸", pole: "T" },
    ],
  },
  {
    id: 24,
    axis: "JP",
    prompt: "看到旅游攻略写“最佳路线请严格照做”，你的内心是？",
    options: [
      { label: "很好，终于有人替我把混乱收拾了", pole: "J" },
      { label: "不，我偏要在第三站突然拐进小巷", pole: "P" },
    ],
  },
  {
    id: 25,
    axis: "EI",
    prompt: "直播间主持人突然点你连麦，你会？",
    options: [
      { label: "接，最好再来段即兴感言", pole: "E" },
      { label: "手速如电退出直播间", pole: "I" },
    ],
  },
  {
    id: 26,
    axis: "SN",
    prompt: "你梦见自己在卖云朵，醒来后第一想法是？",
    options: [
      { label: "这可能是个创业启示，我得记下来", pole: "N" },
      { label: "昨晚一定吃太晚了，胃在抗议", pole: "S" },
    ],
  },
  {
    id: 27,
    axis: "TF",
    prompt: "朋友问你“我是不是有点过头”，而你觉得他确实有点过头，这时你会？",
    options: [
      { label: "先陪他笑完，再轻轻指出问题的方向", pole: "F" },
      { label: "是，而且我能给你列出五个证据", pole: "T" },
    ],
  },
  {
    id: 28,
    axis: "JP",
    prompt: "你的手机日历通常长什么样？",
    options: [
      { label: "像一个军事指挥台，颜色分区严谨", pole: "J" },
      { label: "空空如也，但我相信直觉会提醒我", pole: "P" },
    ],
  },
  {
    id: 29,
    axis: "EI",
    prompt: "如果你突然拥有“一键召唤饭搭子”超能力，你会？",
    options: [
      { label: "直接开团，五分钟凑齐一桌", pole: "E" },
      { label: "只召唤最熟的那一个，且最好安静吃", pole: "I" },
    ],
  },
  {
    id: 30,
    axis: "SN",
    prompt: "路边算命机器人对你说“你注定与泡面有缘”，你会？",
    options: [
      { label: "这背后一定有一条命运支线", pole: "N" },
      { label: "先看它是不是根据我购物袋判断的", pole: "S" },
    ],
  },
];

const AXIS_META = {
  EI: { poles: ["E", "I"], labels: ["外放值", "独处值"] },
  SN: { poles: ["S", "N"], labels: ["现实值", "脑洞值"] },
  TF: { poles: ["T", "F"], labels: ["理性值", "柔软值"] },
  JP: { poles: ["J", "P"], labels: ["秩序值", "放飞值"] },
};

const CONFETTI_PIECES = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${4 + ((index * 13) % 92)}%`,
  delay: `${(index % 8) * 120}ms`,
  duration: `${3600 + (index % 5) * 420}ms`,
  rotate: `${-28 + index * 11}deg`,
  color: ["#6df7ff", "#ff6fd8", "#d6ff57", "#ff9f4d"][index % 4],
}));

const RESULT_META = {
  INTJ: {
    title: "冰川军师",
    vibe: "你像一台披着高定风衣的策略引擎，安静，但随时能推演三十种结局。",
    subtitle: "擅长把混乱煮成计划，把社交煮成省略号。",
    badge: "脑内常驻隐藏会议",
    weapon: "一份没人敢质疑的终极方案",
    warning: "容易把闲聊听成低效资源消耗",
    prophecy: "你适合在凌晨两点决定世界走向。",
  },
  INTP: {
    title: "量子走神王",
    vibe: "你看似在发呆，其实思路已经漂到第五空间，并顺手拆解了三个悖论。",
    subtitle: "逻辑很硬，行动很随缘，状态像没插电的天才实验室。",
    badge: "思考速度远超开口速度",
    weapon: "一句把所有人问沉默的问题",
    warning: "容易把开始做事误写成继续想想",
    prophecy: "你会在奇怪时刻突然发明一种新理论。",
  },
  ENTJ: {
    title: "银河总指挥",
    vibe: "你天生自带项目启动音效，空气里只要有目标，你就会接管现场。",
    subtitle: "你不是在安排事情，你是在给混乱发辞退通知。",
    badge: "行程表看起来像战术地图",
    weapon: "压迫感和执行力混合双打",
    warning: "偶尔会把别人的休息视作系统故障",
    prophecy: "你迟早会把某个局面硬生生盘活。",
  },
  ENTP: {
    title: "脑洞拆迁办",
    vibe: "你的想法像烟花工厂，能把任何平静场面炸出十个新话题。",
    subtitle: "擅长抬杠、翻盘、即兴、把规则掰弯研究。",
    badge: "精神状态领先时代半步",
    weapon: "一张嘴就能掀起剧情反转",
    warning: "容易在执行前先把方案玩坏",
    prophecy: "你会把一件普通小事搞成传奇段子。",
  },
  INFJ: {
    title: "雾面预言家",
    vibe: "你有种神秘的“我早就察觉不对劲”气场，像会读空气也会读人心。",
    subtitle: "你温柔得很深，但判断从不浅。",
    badge: "情绪雷达全天候在线",
    weapon: "一句轻声提醒直接点醒众人",
    warning: "太容易偷偷扛下不属于自己的情绪",
    prophecy: "你会在某个关键时刻拯救一场即将翻车的人类交流。",
  },
  INFP: {
    title: "彩虹逃兵",
    vibe: "你内心住着一整个戏剧空间，柔软、浪漫、容易被一句歌词带跑神。",
    subtitle: "看起来像轻飘飘，其实原则感比钢筋还硬。",
    badge: "状态自带 BGM",
    weapon: "让人突然想诚实活一次的感染力",
    warning: "容易对不喜欢的现实直接精神离席",
    prophecy: "你会在某天写出一句把朋友都震住的话。",
  },
  ENFJ: {
    title: "人群打光师",
    vibe: "你往人堆里一站，别人会自动觉得“这局还能救”。",
    subtitle: "你擅长鼓舞、组织、抚平尴尬，像会发光的社交补丁。",
    badge: "开口自带聚光灯和拥抱感",
    weapon: "一句话把散沙团成队伍",
    warning: "太容易把所有人的状态都背到自己肩上",
    prophecy: "你会莫名其妙成为很多人的情绪售后。",
  },
  ENFP: {
    title: "快乐龙卷风",
    vibe: "你像一袋会自己爆开的彩纸炮，路过哪儿哪儿就有剧情。",
    subtitle: "热情、跳脱、脑回路发亮，计划经常追不上你的兴致。",
    badge: "三秒熟络，五秒开脑洞",
    weapon: "把尴尬场合聊出综艺感",
    warning: "容易同时爱上八个新计划然后全忘了收尾",
    prophecy: "你的随机热情会拯救一次非常无聊的聚会。",
  },
  ISTJ: {
    title: "秩序保险柜",
    vibe: "你像一份可被正式盖章的稳定性，靠谱得让人想把密码都交给你。",
    subtitle: "不爱虚张声势，但说到做到，像沉默版本的压舱石。",
    badge: "生活习惯比闹钟还准",
    weapon: "把所有细节稳稳落地的能力",
    warning: "容易对突发高波动事件露出明显皱眉",
    prophecy: "当别人都乱成一锅时，你会是最后那把还在工作的扳手。",
  },
  ISFJ: {
    title: "奶油防空洞",
    vibe: "你温和得像软垫，但关键时刻又稳得像墙，治愈和担当同时在线。",
    subtitle: "你记得别人忘掉的小事，也记得他们没说出口的疲惫。",
    badge: "细节守护神",
    weapon: "让人安心到想当场躺平的照顾力",
    warning: "容易把“我能扛”说成口头禅",
    prophecy: "你会在很普通的一天，默默救到一个快崩的人。",
  },
  ESTJ: {
    title: "铁面日程官",
    vibe: "你像拿着排程表降临人间，凡事都能被你安排出秩序和交付节点。",
    subtitle: "效率是你的天赋，拖延在你这儿没有人权。",
    badge: "看不惯低效但真的能收拾残局",
    weapon: "一声令下就有人开始干活",
    warning: "偶尔会让快乐看起来像待审批流程",
    prophecy: "你会在混乱现场接管麦克风并成功收官。",
  },
  ESFJ: {
    title: "热场发动机",
    vibe: "你擅长把冷场烤热，把人照顾周到，把聚会变得像有人认真运营。",
    subtitle: "热情不是表演，是你默认打开的社交操作系统。",
    badge: "连空气都能被你招呼到",
    weapon: "超强现场感和照顾全局能力",
    warning: "可能会为别人开太多情绪分期付款",
    prophecy: "你会在任何大型聚会里自动变成半个主持人。",
  },
  ISTP: {
    title: "冷感修理侠",
    vibe: "你看起来懒洋洋，实际上哪里坏了你都想上手研究一下。",
    subtitle: "你不爱废话，但动手能力强得像现实世界的隐藏外挂。",
    badge: "沉默，但会解决问题",
    weapon: "把复杂东西拆开再装回去的天赋",
    warning: "情绪表达经常被误解成信号不好",
    prophecy: "总有一天你会靠现场反应救下一次高压事故。",
  },
  ISFP: {
    title: "野生美学体",
    vibe: "你像一阵有态度的风，安静时很柔，想表达时又格外鲜明。",
    subtitle: "你讨厌被框住，但对喜欢的东西会认真到发光。",
    badge: "审美和感觉优先通行",
    weapon: "把平凡瞬间过成有镜头感的能力",
    warning: "很会忍，忍到最后突然失踪",
    prophecy: "你会在意想不到的时候，凭直觉做出最对的选择。",
  },
  ESTP: {
    title: "临场蹦迪王",
    vibe: "你像风险和魅力同时爆表的现场选手，哪里热闹哪里就有你试图控场。",
    subtitle: "反应快，胆子大，人生很多时候靠“先上再说”。",
    badge: "紧急时刻会突然很可靠",
    weapon: "把压力直接玩成竞技项目",
    warning: "容易在刺激里忘记后续维护",
    prophecy: "你会在某个高能场面贡献一段被反复提起的名场面。",
  },
  ESFP: {
    title: "人间彩炮机",
    vibe: "你自带热闹磁场和舞台感，能把日常活成一档正在播的节目。",
    subtitle: "快乐、真诚、会来事，情绪一到位就想点亮全场。",
    badge: "拍照时永远知道自己该站哪",
    weapon: "把所有人从无聊里拽出来",
    warning: "容易因为太想尽兴而忘记明天",
    prophecy: "你会在某次普通出门里制造一个年度回忆。",
  },
};

function getResult(scores) {
  const type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P",
  ].join("");

  const axisStats = Object.entries(AXIS_META).map(([axis, meta]) => {
    const [leftPole, rightPole] = meta.poles;
    const total = scores[leftPole] + scores[rightPole];
    const dominantPole = scores[leftPole] >= scores[rightPole] ? leftPole : rightPole;
    const percent = total === 0 ? 50 : Math.round((scores[dominantPole] / total) * 100);

    return {
      axis,
      dominantPole,
      percent,
      labels: meta.labels,
    };
  });

  return {
    type,
    meta: RESULT_META[type],
    axisStats,
  };
}

function buildScores(answers) {
  return answers.reduce(
    (acc, answer) => {
      acc[answer] += 1;
      return acc;
    },
    { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
  );
}

function getBehaviorNotes(result, scores) {
  const socialNote =
    scores.E >= scores.I
      ? "在群体场景里，你很容易从旁观者自动切进控场位。"
      : "在群体场景里，你更擅长先观察气氛，再精准选择出手时机。";

  const decisionNote =
    scores.T >= scores.F
      ? "遇到混乱信息时，你会优先整理结构，再决定谁该先被拯救。"
      : "遇到混乱信息时，你会先处理人的感受，再慢慢把局面缝回来。";

  const chaosNote =
    scores.J >= scores.P
      ? "你的日常系统偏向提前布防，临时变动会被你迅速收编。"
      : "你的日常系统偏向动态生长，最佳方案常常在途中突然出现。";

  const nightMode =
    result.type.includes("N")
      ? "深夜状态监测：越晚越容易冒出跨度过大的灵感，并且你真的会信。"
      : "深夜状态监测：越晚越倾向回到具体事务，连胡思乱想都带执行感。";

  const label =
    result.type[0] === "E" ? "朋友对你的默认期待是“你来定气氛”。" : "朋友对你的默认期待是“你来给出那个最稳的判断”。";

  return [
    { title: "社交表现", text: socialNote },
    { title: "决策节奏", text: decisionNote },
    { title: "混乱耐受", text: chaosNote },
    { title: "夜间样本", text: nightMode },
    { title: "外部印象", text: label },
  ];
}

function App() {
  const [phase, setPhase] = useState("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = QUESTIONS[currentIndex];
  const scores = buildScores(answers);
  const result = answers.length === QUESTIONS.length ? getResult(scores) : null;
  const progress = Math.round((answers.length / QUESTIONS.length) * 100);
  const behaviorNotes = result ? getBehaviorNotes(result, scores) : [];

  const startQuiz = () => {
    setPhase("quiz");
    setCurrentIndex(0);
    setAnswers([]);
  };

  const restartQuiz = () => {
    setPhase("quiz");
    setCurrentIndex(0);
    setAnswers([]);
  };

  const handleSelect = (pole) => {
    const nextAnswers = [...answers, pole];
    setAnswers(nextAnswers);

    if (currentIndex === QUESTIONS.length - 1) {
      setPhase("result");
      return;
    }

    setCurrentIndex((index) => index + 1);
  };

  return (
    <div className={`app-shell phase-${phase}`}>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />
      <div className="grain" />
      <div className="scanline" />

      <main className="app-frame">
        {phase === "intro" && (
          <section className="hero-card">
            <div className="eyebrow">Persona Index / 30 Questions</div>
            <h1>MBTI 人格测试</h1>
            <p className="hero-copy">
              基于四维偏好模型设计的沉浸式场景问答，通过 30 道题观察你的互动方式、信息处理习惯与决策风格。
            </p>

            <div className="hero-tags">
              <span>场景化题库</span>
              <span>16 型结果画像</span>
              <span>动态反馈</span>
            </div>

            <div className="intro-grid">
              <article className="glass-tile">
                <strong>30</strong>
                <span>题行为观察</span>
              </article>
              <article className="glass-tile">
                <strong>16</strong>
                <span>型结果模型</span>
              </article>
              <article className="glass-tile">
                <strong>4</strong>
                <span>维偏好分析</span>
              </article>
            </div>

            <button className="primary-btn" onClick={startQuiz}>
              开始测试
            </button>
          </section>
        )}

        {phase === "quiz" && currentQuestion && (
          <>
            <section className="quiz-header-card">
              <div className="status-top">
                <span>{`Question ${String(currentIndex + 1).padStart(2, "0")}`}</span>
                <span>{progress}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </section>

            <section className="question-card">
              <div className="question-index">
                <span className="question-chip">{currentQuestion.axis} 维度</span>
                <span>{currentQuestion.id} / 30</span>
              </div>

              <h2>{currentQuestion.prompt}</h2>

              <div className="answer-list">
                {currentQuestion.options.map((option, index) => (
                  <button
                    className="answer-btn"
                    key={option.label}
                    onClick={() => handleSelect(option.pole)}
                    style={{ "--delay": `${index * 90}ms` }}
                  >
                    <span className="answer-mark">{index === 0 ? "A" : "B"}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>

              <p className="question-tip">请按直觉作答，系统将基于你的即时选择生成结果画像。</p>
            </section>
          </>
        )}

        {phase === "result" && result && (
          <section className="result-shell">
            <div className="confetti-layer" aria-hidden="true">
              {CONFETTI_PIECES.map((piece) => (
                <span
                  className="confetti-piece"
                  key={piece.id}
                  style={{
                    "--left": piece.left,
                    "--delay": piece.delay,
                    "--duration": piece.duration,
                    "--rotate": piece.rotate,
                    "--color": piece.color,
                  }}
                />
              ))}
            </div>

            <article className="result-card">
              <div className="result-head">
                <div>
                  <div className="eyebrow">测试完成</div>
                  <h2>
                    {result.type} / {result.meta.title}
                  </h2>
                  <p>{result.meta.vibe}</p>
                </div>
                <div className="type-orb">{result.type}</div>
              </div>

              <div className="summary-banner">
                <span>系统结论</span>
                <strong>你的稳定人格外观之下，明显带着一层独特的场景表现欲。</strong>
              </div>

              <div className="result-panels">
                <article className="result-panel">
                  <span className="panel-label">人格摘要</span>
                  <strong>{result.meta.subtitle}</strong>
                  <p>{result.meta.prophecy}</p>
                </article>

                <article className="result-panel">
                  <span className="panel-label">人格装备</span>
                  <p>称号：{result.meta.badge}</p>
                  <p>武器：{result.meta.weapon}</p>
                  <p>注意：{result.meta.warning}</p>
                </article>

                <article className="result-panel quirky-panel">
                  <span className="panel-label">补充观察</span>
                  <strong>系统怀疑你在特定场景下会触发一些非常具体的个人风格。</strong>
                  <div className="quirky-list">
                    {behaviorNotes.map((note) => (
                      <div className="quirky-item" key={note.title}>
                        <span>{note.title}</span>
                        <p>{note.text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="stats-card">
                <div className="stats-title">
                  <strong>你的四维偏好</strong>
                  <span>基于作答趋势生成</span>
                </div>

                <div className="stats-list">
                  {result.axisStats.map((item) => (
                    <div className="stat-row" key={item.axis}>
                      <div className="stat-meta">
                        <span>{item.axis}</span>
                        <span>{item.percent}%</span>
                      </div>
                      <div className="stat-track">
                        <div className="stat-fill" style={{ width: `${item.percent}%` }} />
                      </div>
                      <div className="stat-labels">
                        <span>{item.labels[0]}</span>
                        <span>{item.labels[1]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="result-actions">
                <button className="primary-btn" onClick={restartQuiz}>
                  再测一次
                </button>
                <button
                  className="ghost-btn"
                  onClick={() => {
                    setPhase("intro");
                    setCurrentIndex(0);
                    setAnswers([]);
                  }}
                >
                  返回首页
                </button>
              </div>
            </article>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
