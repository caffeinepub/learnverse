import { a as useLanguage, j as jsxRuntimeExports, d as getCurrentUser, r as reactExports, z as getWeeklyGoals, f as updatePoints, C as updateWeeklyGoals, u as useNavigate, D as useTheme, E as getDailyGoals, F as getParentMessage, G as getPendingAssignmentsForStudent, o as getBadgeLevel, H as getStreak, J as getLastQuizScore, K as LANGUAGES, l as AVATARS, L as LEVEL_NAMES, n as BADGE_EMOJIS, M as BADGE_NAMES, N as markParentMessageRead, O as updateDailyGoals, P as markAssignmentCompleted, Q as getSpacedRepQueue, R as getTopicStats } from "./index-KcrWLd1W.js";
const WORDS_TR = [
  { word: "Azim", meaning: "Bir hedefe ulaşmak için vazgeçmeden çalışmak" },
  { word: "Emevi", meaning: "İslam tarihindeki ilk büyük hanedan" },
  { word: "Cömert", meaning: "İnsanlara karşı eli açık, yardımsever olmak" },
  { word: "Erdem", meaning: "Ahlaki üstünlük, iyilik" },
  {
    word: "Faraday",
    meaning: "Elektromanyetik indüksiyonu keşfeden bilim insanı"
  },
  { word: "Gökyüzü", meaning: "Atmosferin görünen kısmı" },
  {
    word: "Hayal",
    meaning: "Zihinsel olarak canlandırılan düşünce veya resim"
  },
  { word: "İnanç", meaning: "Bir şeyin doğru olduğuna duyulan güçlü his" },
  { word: "Jeotermal", meaning: "Yeraltı ısısından elde edilen enerji" },
  { word: "Kavram", meaning: "Bir nesne veya olgunun zihinsel tasarımı" },
  {
    word: "Liderlik",
    meaning: "Bir grubu yönlendirme ve güçlendirme yeteneği"
  },
  { word: "Merak", meaning: "Yeni şeyler öğrenmek için duyulan istek" },
  { word: "Nebula", meaning: "Uzayda gaz ve tozdan oluşan büyük bulut" },
  { word: "Özgün", meaning: "Başkalarından farklı, kendine has olan" },
  { word: "Perspektif", meaning: "Bir konuya bakış açısı" },
  { word: "Sabır", meaning: "Güçlük karşısında sakin ve kararlı kalmak" },
  { word: "Titiz", meaning: "Her şeyi özenle ve dikkatle yapan" },
  { word: "Ufuk", meaning: "Gökyüzünün yeryüzüyle birleştiği görünen çizgi" },
  { word: "Verimli", meaning: "Az çabayla çok iş başaran, üretken" },
  { word: "Yenilik", meaning: "Daha önce olmayan yeni bir şey ortaya koymak" }
];
const FACTS_TR = [
  "🐙 Ahtapotların üç kalbi vardır.",
  "🌍 Dünya, saniyede 30 km hızla Güneş'in etrafında döner.",
  "🦷 Fil dişleri tüm yaşamı boyunca sadece iki kez çıkar.",
  "🌊 Okyanus suyunun %95'i hâlâ keşfedilmemiştir.",
  "🧠 İnsan beyninde yaklaşık 86 milyar nöron bulunur.",
  "🐝 Bal arıları dans ederek yol tarifi verir.",
  "🌱 Bambu, dünyanın en hızlı büyüyen bitkisidir.",
  "❄️ Hiçbir kar tanesi diğeriyle aynı değildir.",
  "🔭 Işık bir saniyede 300.000 km yol alır.",
  "🐬 Yunuslar uyurken beynin sadece yarısı çalışır.",
  "🦋 Kelebekler tatlarını ayaklarıyla hisseder.",
  "🌙 Ay her yıl Dünya'dan 3.8 cm uzaklaşmaktadır.",
  "🐘 Filler birbirini ismiyle çağırabilir.",
  "🌺 Çiçekler renkleriyle böcekleri kendilerine çeker.",
  "🧊 Antarktika, dünyanın en büyük çöl bölgesidir."
];
const WORDS_EN = [
  { word: "Perseverance", meaning: "Continuing firmly despite difficulty" },
  { word: "Curiosity", meaning: "A strong desire to know or learn" },
  { word: "Empathy", meaning: "Understanding others' feelings" },
  { word: "Resilience", meaning: "Recovering quickly from difficulties" },
  { word: "Innovation", meaning: "Introducing something new" },
  { word: "Integrity", meaning: "Being honest and having strong morals" },
  { word: "Diligence", meaning: "Careful and persistent work" },
  { word: "Horizon", meaning: "The line where earth meets sky" },
  { word: "Nebula", meaning: "A cloud of gas and dust in space" },
  { word: "Perspective", meaning: "A particular way of viewing things" }
];
const FACTS_EN = [
  "🐙 Octopuses have three hearts.",
  "🌍 Earth travels around the Sun at 30 km per second.",
  "🧠 The human brain has about 86 billion neurons.",
  "🐝 Bees communicate by dancing.",
  "🦋 Butterflies taste with their feet.",
  "🌙 The Moon moves 3.8 cm away from Earth each year.",
  "🐬 Dolphins sleep with half their brain at a time.",
  "❄️ No two snowflakes are identical.",
  "🔭 Light travels 300,000 km per second.",
  "🌱 Bamboo is the fastest-growing plant in the world."
];
function DailyCard() {
  const { lang } = useLanguage();
  const dayOfYear = Math.floor(
    (Date.now() - new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 0).getTime()) / 864e5
  );
  const isEn = lang === "en";
  const words = isEn ? WORDS_EN : WORDS_TR;
  const facts = isEn ? FACTS_EN : FACTS_TR;
  const word = words[dayOfYear % words.length];
  const fact = facts[dayOfYear % facts.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-3 grid grid-cols-2 gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs font-bold uppercase tracking-wide mb-1", children: [
        "📚 ",
        isEn ? "Word of the Day" : "Günün Kelimesi"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base leading-tight mb-1", children: word.word }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-xs leading-snug", children: word.meaning })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs font-bold uppercase tracking-wide mb-1", children: [
        "🌟 ",
        isEn ? "Did You Know?" : "Biliyor musun?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-xs leading-snug font-semibold", children: fact })
    ] })
  ] });
}
const WEEKLY_GOALS = {
  storiesRead: 5,
  quizzesCompleted: 3,
  wordsLearned: 15
};
function t(key, lang) {
  var _a, _b;
  const texts = {
    weekly_goals: {
      tr: "Haftalık Hedefler",
      en: "Weekly Goals",
      es: "Metas Semanales",
      fr: "Objectifs Hebdomadaires"
    },
    stories_goal: {
      tr: "5 hikaye oku",
      en: "Read 5 stories",
      es: "Lee 5 historias",
      fr: "Lire 5 histoires"
    },
    quizzes_goal: {
      tr: "3 quiz tamamla",
      en: "Complete 3 quizzes",
      es: "Completa 3 quizzes",
      fr: "Termine 3 quiz"
    },
    words_goal: {
      tr: "15 kelime öğren",
      en: "Learn 15 words",
      es: "Aprende 15 palabras",
      fr: "Apprendre 15 mots"
    },
    claim_bonus: {
      tr: "Haftalık hedefler tamam! +50 puan al",
      en: "Weekly goals done! Claim +50 pts",
      es: "¡Metas semanales! +50 puntos",
      fr: "Objectifs hebdo ! +50 pts"
    },
    bonus_claimed: {
      tr: "Haftalık hedefler tamamlandı! +50 bonus puan kazandın 🎉",
      en: "Weekly goals complete! +50 bonus points earned 🎉",
      es: "¡Metas semanales completadas! +50 puntos ganados 🎉",
      fr: "Objectifs hebdo complétés ! +50 pts 🎉"
    }
  };
  return ((_a = texts[key]) == null ? void 0 : _a[lang]) ?? ((_b = texts[key]) == null ? void 0 : _b.en) ?? key;
}
function WeeklyGoalsCard({ lang }) {
  const profile = getCurrentUser();
  const [goals, setGoals] = reactExports.useState(
    () => profile ? getWeeklyGoals(profile.studentNumber) : null
  );
  if (!profile || !goals) return null;
  const storiesDone = Math.min(goals.storiesRead, WEEKLY_GOALS.storiesRead);
  const quizzesDone = Math.min(
    goals.quizzesCompleted,
    WEEKLY_GOALS.quizzesCompleted
  );
  const wordsDone = Math.min(goals.wordsLearned, WEEKLY_GOALS.wordsLearned);
  const goalsCompleted = (storiesDone >= WEEKLY_GOALS.storiesRead ? 1 : 0) + (quizzesDone >= WEEKLY_GOALS.quizzesCompleted ? 1 : 0) + (wordsDone >= WEEKLY_GOALS.wordsLearned ? 1 : 0);
  const allDone = goalsCompleted === 3;
  const handleClaim = () => {
    if (!allDone || goals.bonusAwarded) return;
    updatePoints(profile.studentNumber, 50);
    const updated = updateWeeklyGoals(profile.studentNumber, {
      bonusAwarded: true
    });
    setGoals(updated);
  };
  const GoalRow = ({
    emoji,
    label,
    current,
    total
  }) => {
    const done = current >= total;
    const pct = Math.min(100, current / total * 100);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `text-sm font-bold flex items-center gap-1.5 ${done ? "text-violet-200 line-through" : "text-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: done ? "✅" : emoji }),
              label
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/60 text-xs font-bold", children: [
          current,
          "/",
          total
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-white/15 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-full rounded-full transition-all duration-500 ${done ? "bg-gradient-to-r from-violet-400 to-fuchsia-400" : "bg-gradient-to-r from-purple-400 to-violet-400"}`,
          style: { width: `${pct}%` }
        }
      ) })
    ] });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "home.weekly_goals_card",
      className: `rounded-2xl p-4 border ${allDone ? "bg-gradient-to-r from-violet-600/50 to-fuchsia-600/50 border-violet-400/60" : "bg-gradient-to-r from-violet-900/40 to-purple-900/40 border-violet-500/30"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-black text-sm flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: allDone ? "🏆" : "📅" }),
            t("weekly_goals", lang)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-xs font-bold", children: [
              goalsCompleted,
              "/3"
            ] }),
            allDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-violet-500/50 text-violet-200 text-xs font-black px-2 py-0.5 rounded-full", children: "🏆" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-white/15 rounded-full mb-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-full rounded-full transition-all duration-500 ${allDone ? "bg-gradient-to-r from-violet-400 to-fuchsia-400" : "bg-gradient-to-r from-purple-400 to-violet-400"}`,
            style: { width: `${goalsCompleted / 3 * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GoalRow,
            {
              emoji: "📖",
              label: `${t("stories_goal", lang)} (${storiesDone}/${WEEKLY_GOALS.storiesRead})`,
              current: storiesDone,
              total: WEEKLY_GOALS.storiesRead
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GoalRow,
            {
              emoji: "🎯",
              label: `${t("quizzes_goal", lang)} (${quizzesDone}/${WEEKLY_GOALS.quizzesCompleted})`,
              current: quizzesDone,
              total: WEEKLY_GOALS.quizzesCompleted
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GoalRow,
            {
              emoji: "📝",
              label: `${t("words_goal", lang)} (${wordsDone}/${WEEKLY_GOALS.wordsLearned})`,
              current: wordsDone,
              total: WEEKLY_GOALS.wordsLearned
            }
          )
        ] }),
        allDone && !goals.bonusAwarded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "home.weekly_bonus_button",
            onClick: handleClaim,
            className: "mt-3 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white font-black text-sm py-2 rounded-xl transition-all animate-pulse",
            children: [
              "🏆 ",
              t("claim_bonus", lang)
            ]
          }
        ),
        allDone && goals.bonusAwarded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-center text-violet-200 text-xs font-bold bg-violet-500/20 rounded-xl py-2", children: t("bonus_claimed", lang) })
      ]
    }
  ) });
}
const TOPIC_INFO = {
  science: {
    label: "Fen Bilimleri",
    labelEn: "Science",
    path: "/science",
    icon: "🔬"
  },
  history: {
    label: "Tarih",
    labelEn: "History",
    path: "/history",
    icon: "🏛️"
  },
  geography: {
    label: "Coğrafya",
    labelEn: "Geography",
    path: "/geography",
    icon: "🌍"
  },
  math: {
    label: "Matematik",
    labelEn: "Math",
    path: "/math-practice",
    icon: "🔢"
  },
  general: {
    label: "Genel Kültür",
    labelEn: "General Knowledge",
    path: "/culture",
    icon: "💡"
  }
};
function getPersonalizedRecommendation(studentNumber) {
  const srQueue = getSpacedRepQueue(studentNumber);
  const topicStats = getTopicStats(studentNumber);
  const topicScores = {};
  for (const [key, stat] of Object.entries(topicStats)) {
    if (stat.total > 0) {
      const errorRate = (stat.total - stat.correct) / stat.total;
      topicScores[key] = errorRate;
    }
  }
  const hasSpacedRepItems = srQueue.length > 0;
  let worstTopic = null;
  let worstScore = -1;
  for (const [key, score] of Object.entries(topicScores)) {
    if (score > worstScore && TOPIC_INFO[key]) {
      worstScore = score;
      worstTopic = key;
    }
  }
  if (worstTopic && worstScore > 0.2) {
    const info = TOPIC_INFO[worstTopic];
    const pct = Math.round((1 - worstScore) * 100);
    return {
      topicKey: worstTopic,
      ...info,
      reason: `${info.icon} ${info.label} konusunda %${pct} başarı oranın var — biraz daha pratik yapalım!`,
      reasonEn: `${info.icon} You have ${pct}% accuracy in ${info.labelEn} — let's practice more!`
    };
  }
  if (hasSpacedRepItems) {
    return {
      topicKey: "general",
      ...TOPIC_INFO.general,
      reason: "📝 Tekrar listende bekleyen sorular var — quiz yaparak pekiştir!",
      reasonEn: "📝 You have questions waiting in your review list — do a quiz!"
    };
  }
  return null;
}
function RecommendationCard({
  studentNumber,
  lang
}) {
  const navigate = useNavigate();
  const dismissKey = `learnverse_rec_dismissed_${studentNumber}_${(/* @__PURE__ */ new Date()).toDateString()}`;
  const [dismissed, setDismissed] = reactExports.useState(
    () => localStorage.getItem(dismissKey) === "1"
  );
  const rec = getPersonalizedRecommendation(studentNumber);
  const handleDismiss = () => {
    localStorage.setItem(dismissKey, "1");
    setDismissed(true);
  };
  if (dismissed) return null;
  if (!rec) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "home.recommendation_card",
        className: "mx-4 mb-3 relative bg-gradient-to-r from-indigo-600/30 to-violet-600/30 border border-indigo-400/40 rounded-2xl p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "home.recommendation_close",
              onClick: handleDismiss,
              className: "absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 text-xs font-bold transition-all",
              "aria-label": "Kapat",
              children: "✕"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 pr-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: "🌟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5", children: lang === "en" ? "For You" : "Senin İçin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm", children: lang === "en" ? "Start learning! Every quiz and story earns you points." : "Öğrenmeye başla! Her quiz ve hikaye sana puan kazandırır." })
            ] })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "home.recommendation_card",
      className: "mx-4 mb-3 relative bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 border border-violet-400/40 rounded-2xl p-4",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "home.recommendation_close",
            onClick: handleDismiss,
            className: "absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 text-xs font-bold transition-all",
            "aria-label": "Kapat",
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pr-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0", children: "📚" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5", children: lang === "en" ? "We recommend" : "Öneri" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm leading-snug", children: lang === "en" ? rec.reasonEn : rec.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "home.recommendation_go_button",
              onClick: () => navigate({ to: rec.path }),
              className: "flex-shrink-0 bg-violet-500 hover:bg-violet-400 text-white font-black text-xs px-3 py-2 rounded-xl transition-all",
              children: lang === "en" ? "Go →" : "Git →"
            }
          )
        ] })
      ]
    }
  );
}
function HomePage() {
  const navigate = useNavigate();
  const { t: t2, lang, setLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [profile, setProfile] = reactExports.useState(getCurrentUser());
  const [dailyGoals, setDailyGoals] = reactExports.useState(
    profile ? getDailyGoals(profile.studentNumber) : null
  );
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const [parentMsg, setParentMsg] = reactExports.useState(
    () => profile ? getParentMessage(profile.studentNumber) : null
  );
  const [pendingAssignments, setPendingAssignments] = reactExports.useState(
    () => profile ? getPendingAssignmentsForStudent(profile.studentNumber) : []
  );
  reactExports.useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
    setDailyGoals(getDailyGoals(p.studentNumber));
    setPendingAssignments(getPendingAssignmentsForStudent(p.studentNumber));
  }, []);
  if (!profile) return null;
  const sections = [
    {
      icon: "📚",
      title: t2("daily_quiz"),
      desc: t2("daily_quiz_desc"),
      path: "/quiz",
      gradient: "from-purple-500 to-pink-500",
      ocid: "home.quiz_card"
    },
    {
      icon: "🎮",
      title: t2("games"),
      desc: t2("games_desc"),
      path: "/games",
      gradient: "from-green-500 to-emerald-500",
      ocid: "home.games_card"
    },
    {
      icon: "🌍",
      title: t2("general_culture"),
      desc: t2("general_culture_desc"),
      path: "/culture",
      gradient: "from-blue-500 to-cyan-500",
      ocid: "home.culture_card"
    },
    {
      icon: "👤",
      title: t2("my_profile"),
      desc: t2("my_profile_desc"),
      path: "/profile",
      gradient: "from-orange-500 to-amber-500",
      ocid: "home.profile_card"
    },
    {
      icon: "📖",
      title: t2("stories"),
      desc: t2("stories_desc"),
      path: "/stories",
      gradient: "from-rose-500 to-pink-500",
      ocid: "home.stories_card"
    },
    {
      icon: "🎭",
      title: t2("poems"),
      desc: t2("poems_desc"),
      path: "/poems",
      gradient: "from-violet-500 to-purple-500",
      ocid: "home.poems_card"
    },
    {
      icon: "🔬",
      title: t2("experiments"),
      desc: t2("experiments_desc"),
      path: "/experiments",
      gradient: "from-green-500 to-teal-500",
      ocid: "home.experiments_card"
    },
    {
      icon: "🧩",
      title: t2("puzzles"),
      desc: t2("puzzles_desc"),
      path: "/puzzles",
      gradient: "from-amber-500 to-orange-500",
      ocid: "home.puzzles_card"
    },
    {
      icon: "🗻️",
      title: t2("turkey_map"),
      desc: t2("turkey_map_desc"),
      path: "/turkey-map",
      gradient: "from-red-500 to-red-700",
      ocid: "home.turkeymap_card"
    },
    {
      icon: "🎵",
      title: t2("art_music"),
      desc: t2("art_music_desc"),
      path: "/art-music",
      gradient: "from-indigo-500 to-blue-500",
      ocid: "home.artmusic_card"
    },
    {
      icon: "📝",
      title: t2("wrong_answers"),
      desc: t2("wrong_answers_desc"),
      path: "/wrong-answers",
      gradient: "from-red-500 to-orange-500",
      ocid: "home.wrong_answers_card"
    },
    {
      icon: "🏆",
      title: t2("leaderboard"),
      desc: t2("leaderboard_desc"),
      path: "/leaderboard",
      gradient: "from-yellow-500 to-amber-500",
      ocid: "home.leaderboard_card"
    },
    {
      icon: "⭐",
      title: lang === "en" ? "Favorites" : "Favorilerim",
      desc: lang === "en" ? "Saved content" : "Kayıtlı içerikler",
      path: "/favorites",
      gradient: "from-pink-500 to-rose-500",
      ocid: "home.favorites_card"
    },
    {
      icon: "📜",
      title: t2("proverbs"),
      desc: t2("proverbs_desc"),
      path: "/proverbs",
      gradient: "from-amber-600 to-yellow-500",
      ocid: "home.proverbs_card"
    },
    {
      icon: "📝",
      title: t2("grammar"),
      desc: t2("grammar_desc"),
      path: "/grammar",
      gradient: "from-teal-500 to-cyan-500",
      ocid: "home.grammar_card"
    },
    {
      icon: "📖",
      title: t2("vocabulary"),
      desc: t2("vocabulary_desc"),
      path: "/vocabulary",
      gradient: "from-purple-600 to-violet-500",
      ocid: "home.vocabulary_card"
    },
    {
      icon: "🔢",
      title: t2("math_practice"),
      desc: t2("math_practice_desc"),
      path: "/math-practice",
      gradient: "from-blue-600 to-indigo-500",
      ocid: "home.mathpractice_card"
    },
    {
      icon: "📖",
      title: t2("math_story"),
      desc: t2("math_story_desc"),
      path: "/math-story",
      gradient: "from-teal-600 to-emerald-500",
      ocid: "home.mathstory_card"
    },
    {
      icon: "💪",
      title: t2("health"),
      desc: t2("health_desc"),
      path: "/health",
      gradient: "from-green-600 to-emerald-500",
      ocid: "home.health_card"
    },
    {
      icon: "🗺️",
      title: t2("geography"),
      desc: t2("geography_desc"),
      path: "/geography",
      gradient: "from-blue-500 to-sky-400",
      ocid: "home.geography_card"
    },
    {
      icon: "🏗️",
      title: t2("history"),
      desc: t2("history_desc"),
      path: "/history",
      gradient: "from-amber-800 to-yellow-700",
      ocid: "home.history_card"
    },
    {
      icon: "🦬",
      title: t2("science"),
      desc: t2("science_desc"),
      path: "/science",
      gradient: "from-emerald-600 to-teal-500",
      ocid: "home.science_card"
    },
    {
      icon: "🇬🇧",
      title: t2("english"),
      desc: t2("english_desc"),
      path: "/english",
      gradient: "from-red-500 to-orange-400",
      ocid: "home.english_card"
    },
    {
      icon: "💻",
      title: t2("coding"),
      desc: t2("coding_desc"),
      path: "/coding",
      gradient: "from-violet-700 to-purple-600",
      ocid: "home.coding_card"
    },
    {
      icon: "🎨",
      title: t2("coloring"),
      desc: t2("coloring_desc"),
      path: "/coloring",
      gradient: "from-pink-500 to-rose-400",
      ocid: "home.coloring_card"
    },
    {
      icon: "✖️",
      title: t2("multiplication_table"),
      desc: t2("multiplication_table_desc"),
      path: "/multiplication",
      gradient: "from-indigo-600 to-purple-500",
      ocid: "home.multiplication_card"
    },
    {
      icon: "✏️",
      title: lang === "en" ? "Letter & Number Tracing" : "Harf & Sayı Yazma",
      desc: lang === "en" ? "Trace letters and numbers" : "Harfleri ve sayıları iz sürerek öğren",
      path: "/tracing",
      gradient: "from-green-500 to-teal-500",
      ocid: "home.tracing_card"
    }
  ];
  const badge = getBadgeLevel(profile.totalPoints);
  const progress = Math.min(100, profile.totalPoints / 1e3 * 100);
  const streak = getStreak(profile.studentNumber);
  const lastQuizScore = getLastQuizScore(profile.studentNumber);
  const goals = dailyGoals;
  const goalsDone = goals ? (goals.quizDone ? 1 : 0) + (goals.contentReads >= 1 ? 1 : 0) + (goals.contentReads >= 5 ? 1 : 0) : 0;
  const allGoalsDone = goalsDone === 3;
  const currentLang = LANGUAGES.find((l) => l.code === lang);
  const handleBonusClaim = () => {
    if (!goals || goals.bonusAwarded || !allGoalsDone) return;
    updatePoints(profile.studentNumber, 30);
    const updated = updateDailyGoals(profile.studentNumber, {
      bonusAwarded: true
    });
    setDailyGoals(updated);
    setProfile(getCurrentUser());
  };
  const handleCompleteAssignment = (assignmentId, section) => {
    markAssignmentCompleted(assignmentId, profile.studentNumber);
    updatePoints(profile.studentNumber, 20);
    setProfile(getCurrentUser());
    setPendingAssignments((prev) => prev.filter((a) => a.id !== assignmentId));
    navigate({ to: `/${section}` });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: [
        "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 lv-page",
        !isDark ? "lv-light-page" : ""
      ].join(" "),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur px-4 py-3 flex items-center justify-between lv-topbar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: AVATARS[profile.avatarIndex] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold flex items-center gap-2", children: [
                profile.username,
                streak.current > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-400 font-black text-sm bg-orange-400/20 px-2 py-0.5 rounded-full", children: [
                  "🔥 ",
                  streak.current,
                  " ",
                  t2("streak_days")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: LEVEL_NAMES[profile.level] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "home.language_toggle",
                  onClick: () => setLangOpen((v) => !v),
                  className: "flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1 rounded-xl text-white text-xs font-bold transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: currentLang == null ? void 0 : currentLang.flag }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: lang.toUpperCase() })
                  ]
                }
              ),
              langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-full mt-1 bg-slate-800 border border-white/20 rounded-2xl p-2 grid grid-cols-2 gap-1 w-36 z-50 shadow-2xl", children: LANGUAGES.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setLang(l.code);
                    setLangOpen(false);
                  },
                  className: `flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === l.code ? "bg-purple-600 text-white" : "text-white/80 hover:bg-white/10"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.flag }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.name })
                  ]
                },
                l.code
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "home.search_button",
                onClick: () => navigate({ to: "/search" }),
                className: "bg-white/10 hover:bg-white/20 px-2 py-1 rounded-xl text-white text-xs font-bold transition-colors",
                title: "Arama",
                children: "🔍"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "home.theme_toggle",
                onClick: toggleTheme,
                className: "bg-white/10 hover:bg-white/20 px-2 py-1 rounded-xl text-white text-xs font-bold transition-colors",
                title: isDark ? "Açık tema" : "Koyu tema",
                children: isDark ? "☀️" : "🌙"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold", children: [
                "⭐ ",
                profile.totalPoints
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs", children: [
                BADGE_EMOJIS[badge - 1],
                " ",
                BADGE_NAMES[badge - 1]
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white/70 text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t2("total_progress") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              Math.round(progress),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500",
              style: { width: `${progress}%` }
            }
          ) })
        ] }),
        goals && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded-2xl p-4 border ${allGoalsDone ? "bg-gradient-to-r from-emerald-600/40 to-teal-600/40 border-emerald-400/40" : "bg-white/10 border-white/20"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-black text-sm", children: [
                  "🎯 ",
                  lang === "tr" ? "Bugünün Görevleri" : "Today's Goals"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-xs font-bold", children: [
                  goalsDone,
                  "/3"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-full rounded-full transition-all duration-500 ${allGoalsDone ? "bg-gradient-to-r from-emerald-400 to-teal-400" : "bg-gradient-to-r from-blue-400 to-indigo-400"}`,
                  style: { width: `${goalsDone / 3 * 100}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: goals.quizDone ? "✅" : "⬜" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-sm font-bold ${goals.quizDone ? "text-green-300 line-through" : "text-white"}`,
                      children: [
                        "🎯 ",
                        lang === "tr" ? "1 quiz çöz" : "Do 1 quiz"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: goals.contentReads >= 1 ? "✅" : "⬜" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-sm font-bold ${goals.contentReads >= 1 ? "text-green-300 line-through" : "text-white"}`,
                      children: [
                        "📖 ",
                        lang === "tr" ? "1 içerik oku" : "Read 1 content"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: goals.contentReads >= 5 ? "✅" : "⬜" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-sm font-bold ${goals.contentReads >= 5 ? "text-green-300 line-through" : "text-white"}`,
                      children: [
                        "📚",
                        " ",
                        lang === "tr" ? `5 içerik oku (${goals.contentReads}/5)` : `Read 5 items (${goals.contentReads}/5)`
                      ]
                    }
                  )
                ] })
              ] }),
              allGoalsDone && !goals.bonusAwarded && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "home.daily_bonus_button",
                  onClick: handleBonusClaim,
                  className: "mt-3 w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black text-sm py-2 rounded-xl transition-all animate-pulse",
                  children: [
                    "🎉",
                    " ",
                    lang === "tr" ? "Tüm görevler tamam! +30 puan al" : "All goals complete! Claim +30 pts"
                  ]
                }
              ),
              allGoalsDone && goals.bonusAwarded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center text-green-300 text-xs font-bold bg-green-500/20 rounded-xl py-2", children: [
                "🎉",
                " ",
                lang === "tr" ? "Tüm görevler tamamlandı! +30 bonus puan kazandın" : "All goals complete! +30 bonus points earned"
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WeeklyGoalsCard, { lang }),
        pendingAssignments.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-400/40 rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "📋" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-sm", children: "Bekleyen Ödevler" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto bg-blue-500 text-white text-xs font-black px-2 py-0.5 rounded-full", children: pendingAssignments.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: pendingAssignments.slice(0, 3).map((asgn) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white/10 rounded-xl p-3 flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm truncate", children: asgn.title }),
                  asgn.dueDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/50 text-xs", children: [
                    "Son:",
                    " ",
                    new Date(asgn.dueDate).toLocaleDateString("tr-TR")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "home.assignment_go_button",
                    onClick: () => handleCompleteAssignment(asgn.id, asgn.section),
                    className: "bg-blue-500 hover:bg-blue-400 text-white text-xs font-black px-3 py-1.5 rounded-xl transition-all shrink-0",
                    children: "Git →"
                  }
                )
              ]
            },
            asgn.id
          )) }),
          pendingAssignments.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-white/50 text-xs mt-2", children: [
            "+",
            pendingAssignments.length - 3,
            " daha fazla ödev"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "home.noisemeter_toggle",
            onClick: () => navigate({ to: "/noise-meter" }),
            className: "w-full bg-white/10 border border-white/20 rounded-2xl flex items-center justify-between px-4 py-3 hover:bg-white/15 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-sm", children: [
                "🔊 ",
                t2("noise_meter")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-sm", children: "›" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RecommendationCard, { studentNumber: profile.studentNumber, lang }),
        lastQuizScore !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": "home.quiz_recommendation_card",
            onClick: () => navigate({ to: lastQuizScore < 50 ? "/culture" : "/games" }),
            className: "w-full bg-white/10 border border-white/20 rounded-2xl p-3 flex items-center gap-3 text-left hover:bg-white/15 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: lastQuizScore < 50 ? "📚" : "🎮" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs font-semibold uppercase tracking-wide", children: t2("recommended_for_you") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm", children: lastQuizScore < 50 ? t2("quiz_struggled") : t2("quiz_great") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-white/40", children: "›" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DailyCard, {}),
        (parentMsg == null ? void 0 : parentMsg.message) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `mx-4 mb-4 rounded-3xl p-5 ${!parentMsg.read ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30 animate-pulse" : "bg-gradient-to-r from-orange-400/80 to-amber-400/80"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💌" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/90 text-xs font-bold mb-1", children: "Velinden mesaj:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-sm leading-relaxed", children: parentMsg.message })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "home.parent_msg_button",
                  onClick: () => {
                    if (profile) markParentMessageRead(profile.studentNumber);
                    setParentMsg(null);
                  },
                  className: "bg-white/30 hover:bg-white/40 text-white font-black px-5 py-2 rounded-xl text-sm",
                  children: "Tamam 👍"
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 grid grid-cols-2 gap-4", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": s.ocid,
            onClick: () => navigate({ to: s.path }),
            className: `bg-gradient-to-br ${s.gradient} rounded-3xl p-5 text-left shadow-xl hover:scale-105 transition-transform active:scale-95`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-2", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg leading-tight", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mt-1", children: s.desc })
            ]
          },
          s.path
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-6 pb-6 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "home.parent_link",
              onClick: () => navigate({ to: "/parent" }),
              className: "text-white/60 hover:text-white text-sm underline",
              children: [
                "👨‍👩‍👧 ",
                t2("parent_panel_link")
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "home.admin_link",
              onClick: () => navigate({ to: "/admin" }),
              className: "text-white/60 hover:text-white text-sm underline",
              children: [
                "⚙️ ",
                t2("admin_link")
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  HomePage as default
};
