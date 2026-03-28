type ContentTranslationZh = {
  title?: string;
  text?: string;
  meaning?: string;
  rule?: string;
  example?: string;
  word?: string;
  definition?: string;
  synonym?: string;
  antonym?: string;
};

export const contentTranslationsZh: Record<string, ContentTranslationZh> = {
  // PROVERBS
  pr_damla: {
    title: "滴水穿石",
    text: "滴水穿石。",
    meaning: "小事积累起来会变成大事。",
  },
  pr_erken: {
    title: "早起的鸟儿有虫吃",
    text: "早起的鸟儿有虫吃。",
    meaning: "早开始做事情更容易成功。",
  },
  pr_karpuz: {
    title: "一心不可二用",
    text: "一心不可二用。",
    meaning: "不能同时做所有事情。",
  },
  pr_komsu: {
    title: "远亲不如近邻",
    text: "远亲不如近邻。",
    meaning: "邻居互相帮助。",
  },
  pr_kervan: {
    title: "任凭风吹浪打，胜似闲庭信步",
    text: "障碍无法阻止我们前进。",
    meaning: "困难阻挡不了前进的脚步。",
  },
  pr_bugun: {
    title: "今日事今日毕",
    text: "今日事今日毕。",
    meaning: "按时完成任务。",
  },
  pr_agac: {
    title: "少小不学，老大徒悲",
    text: "少小不学，老大徒悲。",
    meaning: "年轻时学习更容易。",
  },
  pr_sabir: {
    title: "有志者事竟成",
    text: "坚持就是胜利。",
    meaning: "耐心能带来成功。",
  },
  pr_degirmen: {
    title: "不积跬步，无以至千里",
    text: "不积跬步，无以至千里。",
    meaning: "持续的努力才有结果。",
  },
  pr_dost: {
    title: "患难见真情",
    text: "患难见真情。",
    meaning: "真正的朋友在困难时出现。",
  },
  pr_saglik: {
    title: "健康是最大的财富",
    text: "健康是最大的财富。",
    meaning: "健康是最重要的价值。",
  },
  pr_emek: {
    title: "一分耕耘，一分收获",
    text: "一分耕耘，一分收获。",
    meaning: "成功需要努力工作。",
  },
  pr_sukut: {
    title: "沉默是金",
    text: "沉默是金。",
    meaning: "有时沉默比说话更好。",
  },
  pr_kalkar: {
    title: "知错能改，善莫大焉",
    text: "知错能改，善莫大焉。",
    meaning: "从错误中学习是成长的一部分。",
  },
  pr_insanlar: {
    title: "近朱者赤，近墨者黑",
    text: "近朱者赤，近墨者黑。",
    meaning: "你的朋友影响你的品格。",
  },

  // GRAMMAR
  gr_isim: {
    title: "名词",
    rule: "名词是指人、地方、物体或想法的词。",
    example: "书、学校、爱",
  },
  gr_fiil: {
    title: "动词",
    rule: "动词表示动作或状态。",
    example: "跑、吃、是",
  },
  gr_sifat: {
    title: "形容词",
    rule: "形容词描述名词的特征。",
    example: "大、红、快乐",
  },
  gr_zarf: {
    title: "副词",
    rule: "副词修饰动词、形容词或其他副词。",
    example: "快速地、非常、今天",
  },
  gr_zamir: {
    title: "代词",
    rule: "代词代替名词使用。",
    example: "我、你、他、她、它",
  },
  gr_baglac: {
    title: "连词",
    rule: "连词连接词语、短语或从句。",
    example: "和、但是、或者",
  },
  gr_edat: {
    title: "介词",
    rule: "介词表示位置、时间或方向关系。",
    example: "在...上、在...里、从",
  },
  gr_cumle: {
    title: "句子",
    rule: "句子是由主语和谓语组成的完整表达。",
    example: "小明在读书。",
  },
  gr_noktalama: {
    title: "标点符号",
    rule: "标点符号用于区分句子中的成分。",
    example: "句号(。)、逗号(，)、问号(？)",
  },
  gr_ses: {
    title: "声调",
    rule: "普通话有四个声调和一个轻声。",
    example: "妈(一声)、麻(二声)、马(三声)、骂(四声)",
  },

  // VOCABULARY
  voc_mutlu: {
    word: "快乐",
    definition: "感到高兴或满足的状态。",
    synonym: "幸福、开心",
    antonym: "悲伤、不高兴",
    example: "她因为得了好成绩而感到快乐。",
  },
  voc_buyuk: {
    word: "大",
    definition: "尺寸、数量或程度很大。",
    synonym: "巨大、庞大",
    antonym: "小、微小",
    example: "那是一栋很大的建筑。",
  },
  voc_guzzel: {
    word: "美丽",
    definition: "外表好看令人愉悦。",
    synonym: "漂亮、好看",
    antonym: "丑陋、难看",
    example: "公园里的花很美丽。",
  },
  voc_cesur: {
    word: "勇敢",
    definition: "面对危险时无所畏惧。",
    synonym: "无畏、英勇",
    antonym: "胆小、懦弱",
    example: "消防员非常勇敢。",
  },
  voc_akilli: {
    word: "聪明",
    definition: "有高度的智慧或才能。",
    synonym: "聪颖、睿智",
    antonym: "愚蠢、迟钝",
    example: "这个聪明的学生总是回答正确。",
  },
  voc_hizli: {
    word: "快",
    definition: "以很高的速度移动或行动。",
    synonym: "迅速、敏捷",
    antonym: "慢、迟缓",
    example: "猎豹是跑得最快的动物。",
  },
  voc_sessiz: {
    word: "安静",
    definition: "没有噪音或干扰。",
    synonym: "寂静、平静",
    antonym: "嘈杂、吵闹",
    example: "图书馆里总是很安静。",
  },
  voc_guclu: {
    word: "强壮",
    definition: "具有很强的力量或能力。",
    synonym: "有力、强健",
    antonym: "软弱、虚弱",
    example: "大象是非常强壮的动物。",
  },
  voc_nazik: {
    word: "善良",
    definition: "温柔、关心他人。",
    synonym: "仁慈、友善",
    antonym: "残忍、刻薄",
    example: "老师对学生非常善良。",
  },
  voc_merakli: {
    word: "好奇",
    definition: "对了解事物有强烈的欲望。",
    synonym: "求知欲强、探索性的",
    antonym: "漠不关心、无兴趣",
    example: "好奇的孩子提出很多问题。",
  },
};
