import { a as useLanguage, j as jsxRuntimeExports, r as reactExports, u as useNavigate, d as getCurrentUser, y as getDailyGoals, z as getParentMessage, C as getPendingAssignmentsForStudent, o as getBadgeLevel, D as getStreak, E as getLastQuizScore, F as LANGUAGES, l as AVATARS, L as LEVEL_NAMES, n as BADGE_EMOJIS, G as BADGE_NAMES, H as markParentMessageRead, f as updatePoints, J as updateDailyGoals, K as markAssignmentCompleted, M as getSpacedRepQueue, N as getTopicStats } from "./index-CVbKHV8b.js";
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
function getNoiseLevelInfo(volume) {
  if (volume < 20) {
    return {
      level: "silent",
      emoji: "🤫",
      message: "Harika! Sessizsin!",
      color: "text-green-300",
      barColor: "bg-green-400"
    };
  }
  if (volume < 50) {
    return {
      level: "moderate",
      emoji: "😐",
      message: "Biraz sessiz ol!",
      color: "text-yellow-300",
      barColor: "bg-yellow-400"
    };
  }
  return {
    level: "loud",
    emoji: "😱",
    message: "Çok gürültülü!",
    color: "text-red-300",
    barColor: "bg-red-400"
  };
}
function NoiseMeter() {
  const [isActive, setIsActive] = reactExports.useState(false);
  const [volume, setVolume] = reactExports.useState(0);
  const [error, setError] = reactExports.useState("");
  const streamRef = reactExports.useRef(null);
  const animFrameRef = reactExports.useRef(null);
  const analyserRef = reactExports.useRef(null);
  const audioCtxRef = reactExports.useRef(null);
  const stopMeter = reactExports.useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (streamRef.current) {
      for (const track of streamRef.current.getTracks()) track.stop();
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    analyserRef.current = null;
    setVolume(0);
    setIsActive(false);
  }, []);
  reactExports.useEffect(() => {
    return () => {
      stopMeter();
    };
  }, [stopMeter]);
  const startMeter = async () => {
    setError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      analyserRef.current = analyser;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const tick = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        const normalized = Math.min(100, avg / 128 * 100);
        setVolume(normalized);
        animFrameRef.current = requestAnimationFrame(tick);
      };
      animFrameRef.current = requestAnimationFrame(tick);
      setIsActive(true);
    } catch {
      setError("Mikrofon izni verilmedi.");
    }
  };
  const info = getNoiseLevelInfo(volume);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-8 bg-white/10 rounded-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-full ${info.barColor} rounded-full transition-all duration-100`,
          style: { width: `${volume}%` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 text-xs font-bold", children: isActive ? `${Math.round(volume)}%` : "Başlatılmadı" }) })
    ] }),
    isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: info.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-black text-lg ${info.color}`, children: info.message })
    ] }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "noisemeter.error_state",
        className: "text-red-300 text-sm text-center",
        children: [
          "⚠️ ",
          error
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "noisemeter.toggle",
        onClick: isActive ? stopMeter : startMeter,
        className: `w-full py-2 rounded-xl font-black text-sm transition-all ${isActive ? "bg-red-500/30 hover:bg-red-500/40 text-red-200 border border-red-400/40" : "bg-green-500/30 hover:bg-green-500/40 text-green-200 border border-green-400/40"}`,
        children: isActive ? "🛑 Durdur" : "🎤 Başlat"
      }
    )
  ] });
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
  const { t, lang, setLang } = useLanguage();
  const [profile, setProfile] = reactExports.useState(getCurrentUser());
  const [dailyGoals, setDailyGoals] = reactExports.useState(
    profile ? getDailyGoals(profile.studentNumber) : null
  );
  const [noiseMeterOpen, setNoiseMeterOpen] = reactExports.useState(false);
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
      title: t("daily_quiz"),
      desc: t("daily_quiz_desc"),
      path: "/quiz",
      gradient: "from-purple-500 to-pink-500",
      ocid: "home.quiz_card"
    },
    {
      icon: "🎮",
      title: t("games"),
      desc: t("games_desc"),
      path: "/games",
      gradient: "from-green-500 to-emerald-500",
      ocid: "home.games_card"
    },
    {
      icon: "🌍",
      title: t("general_culture"),
      desc: t("general_culture_desc"),
      path: "/culture",
      gradient: "from-blue-500 to-cyan-500",
      ocid: "home.culture_card"
    },
    {
      icon: "👤",
      title: t("my_profile"),
      desc: t("my_profile_desc"),
      path: "/profile",
      gradient: "from-orange-500 to-amber-500",
      ocid: "home.profile_card"
    },
    {
      icon: "📖",
      title: t("stories"),
      desc: t("stories_desc"),
      path: "/stories",
      gradient: "from-rose-500 to-pink-500",
      ocid: "home.stories_card"
    },
    {
      icon: "🎭",
      title: t("poems"),
      desc: t("poems_desc"),
      path: "/poems",
      gradient: "from-violet-500 to-purple-500",
      ocid: "home.poems_card"
    },
    {
      icon: "🔬",
      title: t("experiments"),
      desc: t("experiments_desc"),
      path: "/experiments",
      gradient: "from-green-500 to-teal-500",
      ocid: "home.experiments_card"
    },
    {
      icon: "🧩",
      title: t("puzzles"),
      desc: t("puzzles_desc"),
      path: "/puzzles",
      gradient: "from-amber-500 to-orange-500",
      ocid: "home.puzzles_card"
    },
    {
      icon: "🗻️",
      title: t("turkey_map"),
      desc: t("turkey_map_desc"),
      path: "/turkey-map",
      gradient: "from-red-500 to-red-700",
      ocid: "home.turkeymap_card"
    },
    {
      icon: "🎵",
      title: t("art_music"),
      desc: t("art_music_desc"),
      path: "/art-music",
      gradient: "from-indigo-500 to-blue-500",
      ocid: "home.artmusic_card"
    },
    {
      icon: "📝",
      title: t("wrong_answers"),
      desc: t("wrong_answers_desc"),
      path: "/wrong-answers",
      gradient: "from-red-500 to-orange-500",
      ocid: "home.wrong_answers_card"
    },
    {
      icon: "🏆",
      title: t("leaderboard"),
      desc: t("leaderboard_desc"),
      path: "/leaderboard",
      gradient: "from-yellow-500 to-amber-500",
      ocid: "home.leaderboard_card"
    },
    {
      icon: "📜",
      title: t("proverbs"),
      desc: t("proverbs_desc"),
      path: "/proverbs",
      gradient: "from-amber-600 to-yellow-500",
      ocid: "home.proverbs_card"
    },
    {
      icon: "📝",
      title: t("grammar"),
      desc: t("grammar_desc"),
      path: "/grammar",
      gradient: "from-teal-500 to-cyan-500",
      ocid: "home.grammar_card"
    },
    {
      icon: "📖",
      title: t("vocabulary"),
      desc: t("vocabulary_desc"),
      path: "/vocabulary",
      gradient: "from-purple-600 to-violet-500",
      ocid: "home.vocabulary_card"
    },
    {
      icon: "🔢",
      title: t("math_practice"),
      desc: t("math_practice_desc"),
      path: "/math-practice",
      gradient: "from-blue-600 to-indigo-500",
      ocid: "home.mathpractice_card"
    },
    {
      icon: "📖",
      title: t("math_story"),
      desc: t("math_story_desc"),
      path: "/math-story",
      gradient: "from-teal-600 to-emerald-500",
      ocid: "home.mathstory_card"
    },
    {
      icon: "💪",
      title: t("health"),
      desc: t("health_desc"),
      path: "/health",
      gradient: "from-green-600 to-emerald-500",
      ocid: "home.health_card"
    },
    {
      icon: "🗺️",
      title: t("geography"),
      desc: t("geography_desc"),
      path: "/geography",
      gradient: "from-blue-500 to-sky-400",
      ocid: "home.geography_card"
    },
    {
      icon: "🏗️",
      title: t("history"),
      desc: t("history_desc"),
      path: "/history",
      gradient: "from-amber-800 to-yellow-700",
      ocid: "home.history_card"
    },
    {
      icon: "🦬",
      title: t("science"),
      desc: t("science_desc"),
      path: "/science",
      gradient: "from-emerald-600 to-teal-500",
      ocid: "home.science_card"
    },
    {
      icon: "🇬🇧",
      title: t("english"),
      desc: t("english_desc"),
      path: "/english",
      gradient: "from-red-500 to-orange-400",
      ocid: "home.english_card"
    },
    {
      icon: "💻",
      title: t("coding"),
      desc: t("coding_desc"),
      path: "/coding",
      gradient: "from-violet-700 to-purple-600",
      ocid: "home.coding_card"
    },
    {
      icon: "🎨",
      title: t("coloring"),
      desc: t("coloring_desc"),
      path: "/coloring",
      gradient: "from-pink-500 to-rose-400",
      ocid: "home.coloring_card"
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: AVATARS[profile.avatarIndex] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold flex items-center gap-2", children: [
            profile.username,
            streak.current > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-400 font-black text-sm bg-orange-400/20 px-2 py-0.5 rounded-full", children: [
              "🔥 ",
              streak.current,
              " ",
              t("streak_days")
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("total_progress") }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 border border-white/20 rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "home.noisemeter_toggle",
          onClick: () => setNoiseMeterOpen((prev) => !prev),
          className: "w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-sm", children: [
              "🎤 ",
              t("noise_meter")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-lg leading-none", children: noiseMeterOpen ? "▲" : "▼" })
          ]
        }
      ),
      noiseMeterOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NoiseMeter, {}) })
    ] }) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs font-semibold uppercase tracking-wide", children: t("recommended_for_you") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm", children: lastQuizScore < 50 ? t("quiz_struggled") : t("quiz_great") })
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
            t("parent_panel_link")
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
            t("admin_link")
          ]
        }
      )
    ] })
  ] });
}
export {
  HomePage as default
};
