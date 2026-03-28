type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export const poemsZh: Record<
  Level,
  {
    key: string;
    title: string;
    emoji: string;
    lines: string[];
    author?: string;
  }[]
> = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "下雨了",
      emoji: "🌧️",
      lines: [
        "滴答滴答，雨声响，",
        "打在窗上闹洋洋。",
        "花儿喝水树儿长，",
        "雨是世界好营养！",
      ],
    },
    {
      key: "poem_kelebek",
      title: "蝴蝶",
      emoji: "🦋",
      lines: [
        "蝴蝶飞来花园里，",
        "翅膀颜色多美丽。",
        "轻轻落在花瓣上，",
        "带来快乐和欢喜！",
      ],
    },
    {
      key: "poem_ay",
      title: "月亮",
      emoji: "🌙",
      lines: [
        "月亮月亮挂天上，",
        "银色光芒多明亮。",
        "星星围着你跳舞，",
        "陪我入梦到天亮。",
      ],
    },
    {
      key: "poem_bahce",
      title: "我们的花园",
      emoji: "🌷",
      lines: [
        "花园里的玫瑰开，",
        "向日葵朝天伸出来。",
        "蜜蜂嗡嗡鸟儿唱，",
        "快乐的日子一天天来！",
      ],
    },
    {
      key: "poem_gunes",
      title: "太阳",
      emoji: "☀️",
      lines: [
        "太阳太阳照下来，",
        "照亮街道照进来。",
        "照着花儿照着我，",
        "世界多温暖多精彩！",
      ],
    },
    {
      key: "poem_kedi",
      title: "我的小猫",
      emoji: "🐱",
      lines: [
        "我的小猫白又软，",
        "每晚陪我睡甜甜。",
        "呼噜呼噜暖和和，",
        "有你陪伴多安全！",
      ],
    },
    {
      key: "poem_renk",
      title: "颜色歌",
      emoji: "🌈",
      lines: [
        "红是玫瑰蓝是天，",
        "黄色太阳多灿烂。",
        "绿是叶子橙是果，",
        "颜色世界多美好！",
      ],
    },
    {
      key: "poem_sayi",
      title: "数数歌",
      emoji: "🔢",
      lines: [
        "一二三四来数数，",
        "数数苹果多又多。",
        "五六七八九十到，",
        "数数真是好有趣！",
      ],
    },
    {
      key: "poem_deniz",
      title: "大海",
      emoji: "🌊",
      lines: [
        "海浪拍打沙滩边，",
        "邀我去探索无边。",
        "沙子钻进小脚趾，",
        "大海去哪谁知晓？",
      ],
    },
    {
      key: "poem_yildiz",
      title: "星星",
      emoji: "⭐",
      lines: [
        "星星点点满夜空，",
        "每颗都有自己的光。",
        "也许有一天我能飞，",
        "去摘天上的星一颗！",
      ],
    },
  ],
  ilkokul: [
    {
      key: "poem_turkiye",
      title: "我的祖国",
      emoji: "🌏",
      lines: [
        "我的祖国广阔又美，",
        "高山触碰每颗星。",
        "大海蔚蓝田野绿，",
        "这是我见过最美的地方。",
      ],
    },
    {
      key: "poem_ogretmen",
      title: "我的老师",
      emoji: "👩‍🏫",
      lines: [
        "老师是明亮的向导，",
        "教我读书和写字。",
        "耐心善良总在身旁，",
        "给我最真诚的关怀。",
      ],
    },
    {
      key: "poem_kitap",
      title: "书本",
      emoji: "📖",
      lines: [
        "打开一本书你会发现，",
        "里面有世界和奇迹。",
        "城市丛林和海洋，",
        "一切都在等你去探索！",
      ],
    },
    {
      key: "poem_dost",
      title: "朋友",
      emoji: "🤝",
      lines: [
        "朋友是关心你的人，",
        "忠诚真实守信义。",
        "无论好时还是难，",
        "朋友让一切都美好！",
      ],
    },
    {
      key: "poem_ilkbahar",
      title: "春天",
      emoji: "🌷",
      lines: [
        "花儿开放鸟儿唱，",
        "欢迎春天美好时光！",
        "每棵树又绿起来，",
        "春天来了真美好！",
      ],
    },
    {
      key: "poem_okul",
      title: "学校",
      emoji: "🏫",
      lines: [
        "学校是我学习的地方，",
        "学习和玩耍在一起。",
        "朋友老师在身旁，",
        "最好的知识在这里！",
      ],
    },
    {
      key: "poem_ataturk",
      title: "伟大的领袖",
      emoji: "🌟",
      lines: [
        "一位勇敢而真实的领袖，",
        "为国家指引了方向。",
        "自由和平与知识光，",
        "他的遗产永远闪光。",
      ],
    },
    {
      key: "poem_kuslar",
      title: "鸟儿",
      emoji: "🐦",
      lines: [
        "鸟儿在枝头在天空飞，",
        "从早到晚歌声美。",
        "羽毛柔软色彩亮，",
        "鸟儿是大自然的喜悦！",
      ],
    },
    {
      key: "poem_anne",
      title: "妈妈",
      emoji: "💕",
      lines: [
        "妈妈的怀抱温暖又安全，",
        "她的爱无人能比。",
        "每天守护着我，",
        "永远不会消失的爱。",
      ],
    },
    {
      key: "poem_doga",
      title: "大自然",
      emoji: "🌿",
      lines: [
        "森林呼吸河流唱，",
        "大自然有千种奇。",
        "认真听你会发现，",
        "心灵平静的智慧在这里。",
      ],
    },
  ],
  ortaokul: [
    {
      key: "poem_ozgur_ruh",
      title: "自由的灵魂",
      emoji: "🕊️",
      lines: [
        "越过山丘和大海，",
        "我的灵魂渴望自由飞翔。",
        "质疑、梦想、勇于成长，",
        "学习未知不退缩。",
      ],
    },
    {
      key: "poem_zaman",
      title: "时间",
      emoji: "⏰",
      lines: [
        "时间像河水般流淌，",
        "它不放慢也不迷茫。",
        "趁你还能好好珍惜，",
        "失去的时间不再来。",
      ],
    },
    {
      key: "poem_umut",
      title: "希望",
      emoji: "🌅",
      lines: [
        "希望是黑夜中的光，",
        "轻声说话不慌张。",
        "风雨中紧紧把它抱，",
        "黑夜之后阳光来。",
      ],
    },
    {
      key: "poem_bilgi",
      title: "知识",
      emoji: "🎓",
      lines: [
        "知识打开所有的门，",
        "给你探索的勇气和根。",
        "没有宝藏比知识更亮，",
        "每个夜晚保持求知心。",
      ],
    },
    {
      key: "poem_vatan",
      title: "祖国",
      emoji: "🏔️",
      lines: [
        "这些山脉和宽广的河，",
        "这片土地是我们的根。",
        "祖国在风雨中呼唤，",
        "像旋律般回响心间。",
      ],
    },
    {
      key: "poem_genclik",
      title: "青春",
      emoji: "🌱",
      lines: [
        "青春是力量青春是火，",
        "高高飞翔瞄准更好。",
        "未来等待敢于梦想的人，",
        "用爱和勇气建造你的梦。",
      ],
    },
    {
      key: "poem_adalet",
      title: "公正",
      emoji: "⚖️",
      lines: [
        "公正建立在坚实的基础上，",
        "真理和公平在那里住。",
        "为没有声音的人发声，",
        "坚守正直永远是选择。",
      ],
    },
    {
      key: "poem_insanlik",
      title: "人类",
      emoji: "🌍",
      lines: [
        "我们人数众多，我们是一，",
        "共享大地在同一个太阳下。",
        "当我们帮助和关爱，",
        "人性就在我们身边。",
      ],
    },
    {
      key: "poem_sessizlik",
      title: "寂静",
      emoji: "🌌",
      lines: [
        "在夜晚的宁静中，",
        "闪烁着柔和无限的光。",
        "寂静说出语言无法表达的，",
        "好好倾听，别让它溜走。",
      ],
    },
    {
      key: "poem_gelecek",
      title: "未来",
      emoji: "🚀",
      lines: [
        "未来在山丘那边闪光，",
        "奇迹的世界等待开放。",
        "接过火炬，响应召唤，",
        "未来需要你最好的样子。",
      ],
    },
  ],
};
