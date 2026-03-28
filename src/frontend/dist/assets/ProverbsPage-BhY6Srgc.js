import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-KcrWLd1W.js";
import { c as contentTranslationsEs, a as contentTranslationsEn, b as contentTranslationsFr, d as contentTranslationsZh, e as contentTranslationsHi } from "./content-translations-zh-BDHVU5kR.js";
const proverbs = {
  okul_oncesi: [
    {
      key: "pr_damla",
      title: "Damlaya damlaya göl olur",
      emoji: "💧",
      text: "Damlaya damlaya göl olur.",
      meaning: "Küçük şeyler birikerek büyük olur."
    },
    {
      key: "pr_erken",
      title: "Erken kalkan yol alır",
      emoji: "🌅",
      text: "Erken kalkan yol alır.",
      meaning: "Erkenden başlamak işi kolaylaştırır."
    },
    {
      key: "pr_karpuz",
      title: "Bir elde iki karpuz tutulmaz",
      emoji: "🍉",
      text: "Bir elde iki karpuz tutulmaz.",
      meaning: "Her şeyi aynı anda yapamayız."
    },
    {
      key: "pr_komsu",
      title: "Komşu komşunun külüne muhtaçtır",
      emoji: "🏠",
      text: "Komşu komşunun külüne muhtaçtır.",
      meaning: "Komşular birbirine yardım eder."
    },
    {
      key: "pr_kervan",
      title: "İt ürür kervan yürür",
      emoji: "🐕",
      text: "İt ürür kervan yürür.",
      meaning: "Engeller bizi durduramaz."
    },
    {
      key: "pr_bugun",
      title: "Bugünün işini yarına bırakma",
      emoji: "⏰",
      text: "Bugünün işini yarına bırakma.",
      meaning: "İşleri vaktinde yapmak gerekir."
    },
    {
      key: "pr_agac",
      title: "Ağaç yaşken eğilir",
      emoji: "🌳",
      text: "Ağaç yaşken eğilir.",
      meaning: "Küçükken öğrenmek daha kolaydır."
    },
    {
      key: "pr_sabir",
      title: "Sabreden derviş muradına ermiş",
      emoji: "🧘",
      text: "Sabreden derviş muradına ermiş.",
      meaning: "Sabırlı olmak başarı getirir."
    }
  ],
  ilkokul: [
    {
      key: "pr_degirmen",
      title: "Taşıma su ile değirmen dönmez",
      emoji: "💦",
      text: "Taşıma su ile değirmen dönmez.",
      meaning: "Sürekli çalışma sonucu vermez."
    },
    {
      key: "pr_dost",
      title: "Dost kara günde belli olur",
      emoji: "🤝",
      text: "Dost kara günde belli olur.",
      meaning: "Gerçek arkadaşlar zorluklarda görünür."
    },
    {
      key: "pr_saglik",
      title: "Her şeyin başı sağlık",
      emoji: "💪",
      text: "Her şeyin başı sağlık.",
      meaning: "Sağlık en önemli değerdir."
    },
    {
      key: "pr_emek",
      title: "Emek olmadan yemek olmaz",
      emoji: "🍽️",
      text: "Emek olmadan yemek olmaz.",
      meaning: "Çalışmadan başarıya ulaşılamaz."
    },
    {
      key: "pr_sukut",
      title: "Söz gümüşse sükut altındır",
      emoji: "🤫",
      text: "Söz gümüşse sükut altındır.",
      meaning: "Bazen susmak konuşmaktan iyidir."
    },
    {
      key: "pr_yuva",
      title: "Yuvayı dişi kuş yapar",
      emoji: "🐦",
      text: "Yuvayı dişi kuş yapar.",
      meaning: "Evi güzelleştiren sabr ve emektir."
    },
    {
      key: "pr_bic",
      title: "Bin ölç bir biç",
      emoji: "📏",
      text: "Bin ölç bir biç.",
      meaning: "Karar vermeden önce iyice düşün."
    },
    {
      key: "pr_el",
      title: "El elden üstündür",
      emoji: "🙌",
      text: "El elden üstündür.",
      meaning: "Her güclünün daha güclüsü vardır."
    },
    {
      key: "pr_cuval",
      title: "Boş çuval dik durmaz",
      emoji: "🎒",
      text: "Boş çuval dik durmaz.",
      meaning: "Bilgisiz insan güçlü olamaz."
    }
  ],
  ortaokul: [
    {
      key: "pr_kalkar",
      title: "İnsan düştüğü yerden kalkar",
      emoji: "🦅",
      text: "İnsan düştüğü yerden kalkar.",
      meaning: "Başarısızlıktan öğrenerek yeniden başlanır."
    },
    {
      key: "pr_kilici",
      title: "Kılıç yarası geçer dil yarası geçmez",
      emoji: "⚔️",
      text: "Kılıç yarası geçer dil yarası geçmez.",
      meaning: "Sözler kalıcı iz bırakabilir."
    },
    {
      key: "pr_yogurt",
      title: "Her yiğidin bir yoğurt yiyişi vardır",
      emoji: "🥣",
      text: "Her yiğidin bir yoğurt yiyişi vardır.",
      meaning: "Herkesin kendine özgü yöntemi vardır."
    },
    {
      key: "pr_civi",
      title: "Çivi çiviyi söker",
      emoji: "🔨",
      text: "Çivi çiviyi söker.",
      meaning: "Bir sorun bazen başka bir sorunla çözülür."
    },
    {
      key: "pr_akil",
      title: "Akıl yaşta değil baştadır",
      emoji: "🧠",
      text: "Akıl yaşta değil baştadır.",
      meaning: "Zeka yaşa bağlı değildir."
    },
    {
      key: "pr_balik",
      title: "Balık baştan kokar",
      emoji: "🐟",
      text: "Balık baştan kokar.",
      meaning: "Sorunlar genellikle tepeden kaynaklanır."
    },
    {
      key: "pr_deli",
      title: "Deli olmadan akıllı olunamaz",
      emoji: "💡",
      text: "Deli olmadan akıllı olunamaz.",
      meaning: "Hatalardan öğrenilir."
    },
    {
      key: "pr_cambaz",
      title: "İki cambaz bir ipte oynamaz",
      emoji: "🎪",
      text: "İki cambaz bir ipte oynamaz.",
      meaning: "İki güçlü lider aynı yerde olamaz."
    },
    {
      key: "pr_kör",
      title: "Körle yatan şaşı kalkar",
      emoji: "👁️",
      text: "Körle yatan şaşı kalkar.",
      meaning: "Çevremiz bizi etkiler."
    },
    {
      key: "pr_gun",
      title: "Bugün bana, yarın sana",
      emoji: "🔄",
      text: "Bugün bana, yarın sana.",
      meaning: "Hayat değişkendir; bugün güçlü olan yarın zayıf düşebilir."
    },
    {
      key: "pr_duman",
      title: "Ateş olmayan yerden duman çıkmaz",
      emoji: "🔥",
      text: "Ateş olmayan yerden duman çıkmaz.",
      meaning: "Her söylentinin bir gerçeği vardır."
    },
    {
      key: "pr_taş",
      title: "Taşıma su ile dolmaz",
      emoji: "🪣",
      text: "Taşıma su ile dolmaz.",
      meaning: "Küçük adımlarla büyük işler yapılmaz."
    },
    {
      key: "pr_soz",
      title: "Söz gümüşse sükut altındır",
      emoji: "🥇",
      text: "Söz gümüşse sükut altındır.",
      meaning: "Susmak zaman zaman konuşmaktan daha değerlidir."
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
function ProverbsPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "proverbs");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [speakingId, setSpeakingId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  const getTtsLang = () => {
    if (lang === "en") return "en-US";
    if (lang === "ar") return "ar-SA";
    if (lang === "fr") return "fr-FR";
    if (lang === "es") return "es-ES";
    if (lang === "ru") return "ru-RU";
    if (lang === "zh") return "zh-CN";
    if (lang === "pt") return "pt-PT";
    if (lang === "hi") return "hi-IN";
    if (lang === "bn") return "bn-BD";
    return "tr-TR";
  };
  const getTranslation = (key) => {
    if (lang === "es") return contentTranslationsEs[key];
    if (lang === "en") return contentTranslationsEn[key];
    if (lang === "fr") return contentTranslationsFr[key];
    if (lang === "zh") return contentTranslationsZh[key];
    if (lang === "hi") return contentTranslationsHi[key];
    return null;
  };
  const handleSpeak = (id, trText, localText) => {
    const speakText = localText || trText;
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(speakText);
      utt.lang = getTtsLang();
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const filteredProverbs = proverbs[level].filter((p) => {
    const tr = getTranslation(p.key);
    const displayTitle = (tr == null ? void 0 : tr.title) || p.title;
    const displayText = (tr == null ? void 0 : tr.text) || p.text;
    const displayMeaning = (tr == null ? void 0 : tr.meaning) || p.meaning;
    const q = searchTerm.toLowerCase();
    return displayTitle.toLowerCase().includes(q) || displayText.toLowerCase().includes(q) || displayMeaning.toLowerCase().includes(q);
  });
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const pageTitle = lang === "es" ? "Refranes y Dichos" : lang === "en" ? "Proverbs & Idioms" : "Atasözleri & Deyimler";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-amber-600 to-yellow-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "proverbs.back_button",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4 font-bold text-sm",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "📜 ",
      pageTitle
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "proverbs.tab",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-amber-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    (() => {
      const total = proverbs[level].length;
      const done = proverbs[level].filter(
        (p) => readTopics.includes(p.key)
      ).length;
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📜" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("progress_label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black", children: [
              done,
              "/",
              total
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-green-400 rounded-full transition-all duration-500",
              style: { width: `${pct}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-sm", children: [
          pct,
          "%"
        ] })
      ] });
    })(),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        "data-ocid": "proverbs.search_input",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredProverbs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "proverbs.empty_state",
        className: "text-center text-white/60 py-8",
        children: [
          lang === "es" ? "No se encontraron resultados" : lang === "en" ? "No results found" : "Sonuç bulunamadı",
          " ",
          "🔍"
        ]
      }
    ) : filteredProverbs.map((p, idx) => {
      const isRead = readTopics.includes(p.key);
      const tr = getTranslation(p.key);
      const displayTitle = (tr == null ? void 0 : tr.title) || p.title;
      const displayText = (tr == null ? void 0 : tr.text) || p.text;
      const displayMeaning = (tr == null ? void 0 : tr.meaning) || p.meaning;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `proverbs.item.${idx + 1}`,
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: p.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base", children: displayTitle }),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-green-300 text-xl", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white font-bold text-sm leading-relaxed mb-2", children: [
              "“",
              displayText,
              "”"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-sm leading-relaxed mb-4", children: [
              "💡 ",
              displayMeaning
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "proverbs.listen_button",
                onClick: () => handleSpeak(p.key, p.text, tr == null ? void 0 : tr.text),
                className: "bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2",
                children: speakingId === p.key ? `⏹ ${t("stop")}` : `🔊 ${t("listen")}`
              }
            ),
            !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "proverbs.read_button",
                onClick: () => handleRead(p.key),
                className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                children: [
                  "📜 ",
                  t("learned"),
                  " +10 puan"
                ]
              }
            ),
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-300 text-xs font-bold", children: [
              "✅ ",
              t("learned"),
              " (+10 puan)"
            ] })
          ]
        },
        p.key
      );
    }) })
  ] }) });
}
export {
  ProverbsPage as default
};
