export type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export interface Puzzle {
  key: string;
  question: string;
  emoji: string;
  choices: string[];
  correct: number;
}

export const puzzlesZh: Record<Level, Puzzle[]> = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "太阳是什么颜色的？",
      emoji: "☀️",
      choices: ["蓝色", "红色", "黄色", "绿色"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_1",
      question: "哪个动物会飞？",
      emoji: "🐦",
      choices: ["猫", "鸟", "鱼", "狗"],
      correct: 1,
    },
    {
      key: "puzzle_sayi_1",
      question: "2 + 3 等于多少？",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_1",
      question: "哪个不是水果？",
      emoji: "🍎",
      choices: ["苹果", "香蕉", "胡萝卜", "葡萄"],
      correct: 2,
    },
    {
      key: "puzzle_sekil_1",
      question: "车轮像什么形状？",
      emoji: "⭕",
      choices: ["正方形", "圆形", "三角形", "长方形"],
      correct: 1,
    },
    {
      key: "puzzle_renk_2",
      question: "天空是什么颜色的？",
      emoji: "🌤️",
      choices: ["绿色", "蓝色", "黄色", "红色"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_2",
      question: "哪个动物会下蛋？",
      emoji: "🐔",
      choices: ["猫", "狗", "母鸡", "马"],
      correct: 2,
    },
    {
      key: "puzzle_sayi_2",
      question: "10 - 4 等于多少？",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o1",
      question: "我每天早晨升起，傍晚落下。我是什么？",
      emoji: "☀️",
      choices: ["月亮", "太阳", "星星", "云"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o2",
      question: "我有牙齿但不能咬东西。我是什么？",
      emoji: "⚙️",
      choices: ["锯子", "梳子", "叉子", "勺子"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new1",
      question: "我在日落后出现，带来满天星星。我是什么？",
      emoji: "🌙",
      choices: ["早晨", "夜晚", "中午", "傍晚"],
      correct: 3,
    },
    {
      key: "puzzle_oo_new5",
      question: "冬天什么白色的东西会从天上飘下来？",
      emoji: "❄️",
      choices: ["雨", "雪", "冰雹", "雾"],
      correct: 1,
    },
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "7 × 8 等于多少？",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_1",
      question: "土耳其的首都是哪里？",
      emoji: "🏛️",
      choices: ["伊斯坦布尔", "安卡拉", "伊兹密尔", "布尔萨"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_1",
      question: "哪颗行星离太阳最近？",
      emoji: "🪐",
      choices: ["金星", "地球", "水星", "火星"],
      correct: 2,
    },
    {
      key: "puzzle_dil_1",
      question: "中文有多少个声调？",
      emoji: "🔤",
      choices: ["3", "4", "5", "6"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_3",
      question: "陆地上跑得最快的动物是什么？",
      emoji: "🐆",
      choices: ["狮子", "猎豹", "豹子", "老虎"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_1",
      question: "谁发现了美洲？",
      emoji: "⛵",
      choices: ["马可波罗", "麦哲伦", "哥伦布", "阿美利哥"],
      correct: 2,
    },
    {
      key: "puzzle_matematik_2",
      question: "六边形有几条边？",
      emoji: "🔷",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_2",
      question: "地球大气层中最多的气体是什么？",
      emoji: "💨",
      choices: ["氧气", "二氧化碳", "氮气", "氩气"],
      correct: 2,
    },
    {
      key: "puzzle_cografi_2",
      question: "世界上最大的海洋是哪个？",
      emoji: "🌊",
      choices: ["大西洋", "印度洋", "太平洋", "北冰洋"],
      correct: 2,
    },
    {
      key: "puzzle_sanat_1",
      question: "谁画了《蒙娜丽莎》？",
      emoji: "🎨",
      choices: ["米开朗基罗", "拉斐尔", "达芬奇", "波提切利"],
      correct: 2,
    },
  ],
  ortaokul: [
    {
      key: "puzzle_o_math_1",
      question: "144 的平方根是多少？",
      emoji: "🔢",
      choices: ["11", "12", "13", "14"],
      correct: 1,
    },
    {
      key: "puzzle_o_science_1",
      question: "水的化学式是什么？",
      emoji: "💧",
      choices: ["HO", "H₂O", "H₂O₂", "OH"],
      correct: 1,
    },
    {
      key: "puzzle_o_geo_1",
      question: "世界上最长的河流是哪条？",
      emoji: "🌍",
      choices: ["亚马逊河", "长江", "密西西比河", "尼罗河"],
      correct: 3,
    },
    {
      key: "puzzle_o_hist_1",
      question: "第一次世界大战是哪年开始的？",
      emoji: "📅",
      choices: ["1912", "1914", "1916", "1918"],
      correct: 1,
    },
    {
      key: "puzzle_o_lit_1",
      question: "谁写了《唐吉诃德》？",
      emoji: "📚",
      choices: ["洛佩·德·维加", "卡尔德隆", "塞万提斯", "克维多"],
      correct: 2,
    },
    {
      key: "puzzle_o_phys_1",
      question: "光速大约是每秒多少千米？",
      emoji: "💡",
      choices: ["100,000", "200,000", "300,000", "400,000"],
      correct: 2,
    },
    {
      key: "puzzle_o_bio_1",
      question: "正常人体细胞有多少条染色体？",
      emoji: "🧬",
      choices: ["23", "44", "46", "48"],
      correct: 2,
    },
    {
      key: "puzzle_o_chem_1",
      question: "元素周期表中最轻的元素是什么？",
      emoji: "⚗️",
      choices: ["氦", "锂", "氢", "铍"],
      correct: 2,
    },
  ],
};
