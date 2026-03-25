import { r as reactExports, j as jsxRuntimeExports, u as useNavigate, a as useLanguage, d as getCurrentUser, t as trackContentVisit, e as getReadTopics, f as updatePoints, i as incrementDailyContentRead, m as markTopicRead } from "./index-CVbKHV8b.js";
import { m as motion, A as AnimatePresence, F as FlashcardMode } from "./FlashcardMode-CK1BEPw3.js";
import { c as contentTranslationsEs, a as contentTranslationsEn } from "./content-translations-es-Bcans0no.js";
function SpellingPractice({
  words,
  onClose,
  onComplete,
  lang = "tr"
}) {
  const [index, setIndex] = reactExports.useState(0);
  const [input, setInput] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [isCorrect, setIsCorrect] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(0);
  const [finished, setFinished] = reactExports.useState(false);
  const inputRef = reactExports.useRef(null);
  const isEn = lang === "en";
  const word = words[index];
  const total = words.length;
  const earnedPoints = score * 10;
  const handleSubmit = () => {
    if (submitted || !input.trim()) return;
    const correct = input.trim().toLowerCase() === word.word.toLowerCase();
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
  };
  const handleNext = () => {
    if (index + 1 >= total) {
      const finalScore = isCorrect ? score : score;
      setFinished(true);
      onComplete == null ? void 0 : onComplete(finalScore, total, finalScore * 10);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setSubmitted(false);
      setIsCorrect(false);
      setTimeout(() => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, 100);
    }
  };
  const handleRestart = () => {
    setIndex(0);
    setInput("");
    setSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setFinished(false);
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 100);
  };
  if (finished) {
    const pct = total > 0 ? Math.round(score / total * 100) : 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        className: "bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black text-gray-800 mb-2", children: isEn ? "Practice Complete!" : "Alıştırma Bitti!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 mb-2", children: isEn ? `You got ${score} out of ${total} correct` : `${total} kelimeden ${score} tanesini doğru yazdınız` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-green-600 font-bold mb-6", children: [
            "+",
            earnedPoints,
            " ",
            isEn ? "pts" : "puan",
            " 🎉"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-100 rounded-2xl p-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-violet-600 mb-1", children: [
              pct,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-200 rounded-full h-3 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "bg-violet-400 h-3 rounded-full transition-all",
                style: { width: `${pct}%` }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "spelling.restart_button",
                onClick: handleRestart,
                className: "flex-1 bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 rounded-2xl transition-all",
                children: isEn ? "🔄 Try Again" : "🔄 Tekrar"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "spelling.close_button",
                onClick: onClose,
                className: "flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all",
                children: isEn ? "✕ Close" : "✕ Kapat"
              }
            )
          ] })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-violet-700 to-purple-800 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "spelling.close_button",
          onClick: onClose,
          className: "text-white/70 hover:text-white font-bold text-sm",
          children: [
            "← ",
            isEn ? "Back" : "Geri"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold text-sm", children: [
        index + 1,
        " / ",
        total
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/20 rounded-full h-2 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-white h-2 rounded-full transition-all duration-300",
        style: { width: `${index / total * 100}%` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-white font-black text-xl text-center mb-1", children: isEn ? "Spell the word" : "Kelimeyi yaz" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm text-center mb-6", children: isEn ? "Type what you see below" : "Aşağıdaki resme göre yaz" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          className: "text-9xl select-none",
          children: word.emoji
        },
        word.key
      ),
      word.hint && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-xs", children: [
        isEn ? "Hint:" : "İpucu:",
        " ",
        word.hint
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inputRef,
          type: "text",
          "data-ocid": "spelling.input",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter") {
              if (!submitted) handleSubmit();
              else handleNext();
            }
          },
          disabled: submitted,
          placeholder: isEn ? "Type the word..." : "Kelimeyi yaz...",
          className: `w-full rounded-2xl px-5 py-4 text-center text-xl font-black outline-none transition-all ${submitted ? isCorrect ? "bg-green-100 text-green-700 border-4 border-green-400" : "bg-red-100 text-red-700 border-4 border-red-400" : "bg-white/20 text-white placeholder-white/40 border-2 border-white/30 focus:border-white"}`
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: submitted && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0 },
          className: `text-center rounded-2xl px-6 py-4 ${isCorrect ? "bg-green-400/30" : "bg-red-400/30"}`,
          "data-ocid": isCorrect ? "spelling.success_state" : "spelling.error_state",
          children: isCorrect ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1", children: "✅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg", children: isEn ? "Correct! +10 pts" : "Doğru! +10 puan" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1", children: "❌" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base", children: isEn ? "Correct answer:" : "Doğru cevap:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-2xl mt-1", children: word.word })
          ] })
        }
      ) }),
      !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "spelling.submit_button",
          onClick: handleSubmit,
          disabled: !input.trim(),
          className: "w-full max-w-xs bg-white text-violet-700 font-black py-4 rounded-2xl text-lg disabled:opacity-40 transition-all hover:bg-white/90",
          children: isEn ? "Check ✓" : "Kontrol Et ✓"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "spelling.primary_button",
          onClick: handleNext,
          className: "w-full max-w-xs bg-white text-violet-700 font-black py-4 rounded-2xl text-lg transition-all hover:bg-white/90",
          children: index + 1 >= total ? isEn ? "Finish 🎉" : "Bitir 🎉" : isEn ? "Next →" : "Sonraki →"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mt-4 flex-wrap", children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-3 h-3 rounded-full ${i < index ? "bg-white/50" : i === index ? "bg-white" : "bg-white/20"}`
      },
      w.key
    )) })
  ] });
}
const vocabulary = {
  okul_oncesi: [
    {
      key: "v_mutlu",
      word: "Mutlu",
      emoji: "😊",
      definition: "Sevinçli ve neşeli olmak",
      synonym: "Sevinçli, neşeli",
      antonym: "Üzgün, mutsuz",
      example: "Bugün çok mutluyum."
    },
    {
      key: "v_guzel",
      word: "Güzel",
      emoji: "🌸",
      definition: "Hoş görünüşlü, beğenilen",
      synonym: "Hoş, şirin",
      antonym: "Çirkin, kötü",
      example: "Ne güzel bir çiçek!"
    },
    {
      key: "v_buyuk",
      word: "Büyük",
      emoji: "🐘",
      definition: "Boyutu veya miktarı fazla olan",
      synonym: "İri, kocaman",
      antonym: "Küçük, ufak",
      example: "Büyük bir fil gördüm."
    },
    {
      key: "v_hizli",
      word: "Hızlı",
      emoji: "⚡",
      definition: "Çok çabuk hareket eden",
      synonym: "Çabuk, süratli",
      antonym: "Yavaş, ağır",
      example: "Koşucu çok hızlı koştu."
    },
    {
      key: "v_sicak",
      word: "Sıcak",
      emoji: "☀️",
      definition: "Yüksek ısıya sahip olan",
      synonym: "ılık, kavurucu",
      antonym: "Soğuk, serin",
      example: "Yaz günleri çok sıcak olur."
    },
    {
      key: "v_sert",
      word: "Sert",
      emoji: "🪨",
      definition: "Kolaylıkla bükülmeyen, katı",
      synonym: "Katı, rijit",
      antonym: "Yumuşak, esnek",
      example: "Taş çok serttir."
    },
    {
      key: "v_temiz",
      word: "Temiz",
      emoji: "✨",
      definition: "Kirsiz, düzenli",
      synonym: "Pak, arı",
      antonym: "Kirli, pis",
      example: "Ellerini temiz tut."
    },
    {
      key: "v_sessiz",
      word: "Sessiz",
      emoji: "🤫",
      definition: "Ses çıkarmayan",
      synonym: "Sakin, sükutlu",
      antonym: "Gürültülü, sesli",
      example: "Kütüphane çok sessizdir."
    }
  ],
  ilkokul: [
    {
      key: "v_cesur",
      word: "Cesur",
      emoji: "🦁",
      definition: "Tehlikeden korkmayan, yiğit",
      synonym: "Yiğit, gözüpek",
      antonym: "Korkak, ürkek",
      example: "Cesur kahraman canavarı yendi."
    },
    {
      key: "v_sabir",
      word: "Sabr",
      emoji: "🧘",
      definition: "Güçlüklere dayanma gücu",
      synonym: "Tahammul, metanet",
      antonym: "Sabırsızlık, aceleci",
      example: "Sabırla çalışırsan başarırsın."
    },
    {
      key: "v_merak",
      word: "Merak",
      emoji: "🔍",
      definition: "Öğrenme veya bilme isteği",
      synonym: "İlgi, araştırma isteği",
      antonym: "İlgisizlik, kayıtsızlık",
      example: "Meraklı çocuklar çok şey öğrenir."
    },
    {
      key: "v_basari",
      word: "Başarı",
      emoji: "🏆",
      definition: "Bir hedefi gerçekleştirme",
      synonym: "Kazanım, zafer",
      antonym: "Başarısızlık, yenilgi",
      example: "Çalışmak başarıyı getirir."
    },
    {
      key: "v_fedakar",
      word: "Fedakâr",
      emoji: "❤️",
      definition: "Başkaları için fedakarlık gösteren",
      synonym: "Özverili, cömert",
      antonym: "Bencil, egoist",
      example: "Anneler çok fedakârdır."
    },
    {
      key: "v_akilli",
      word: "Akıllı",
      emoji: "🧠",
      definition: "Zeki, düşünceli",
      synonym: "Zeki, anlayışlı",
      antonym: "Aptal, budala",
      example: "Akıllı öğrenci zor soruyu çözdü."
    },
    {
      key: "v_dürüst",
      word: "Dürüst",
      emoji: "🤝",
      definition: "Her zaman doğruyu söyleyen",
      synonym: "Namuslu, güvenilir",
      antonym: "Yalançı, hilekâr",
      example: "Dürüst olmak önemlidir."
    },
    {
      key: "v_mesgul",
      word: "Meşgul",
      emoji: "📚",
      definition: "İşle uğraşan, boş olmayan",
      synonym: "Yoğun, işle dolu",
      antonym: "Boş, serbest",
      example: "Öğretmen şu an çok meşgul."
    }
  ],
  ortaokul: [
    {
      key: "v_ironik",
      word: "İronik",
      emoji: "😏",
      definition: "Söyleenenin tersini kasteden",
      synonym: "Alaylı, hicivli",
      antonym: "Samimi, açık sözlü",
      example: "İronik bir şekilde 'ne kadar zekisin!' dedi."
    },
    {
      key: "v_analiz",
      word: "Analiz",
      emoji: "🔬",
      definition: "Bir bütünü parçalara ayırarak inceleme",
      synonym: "İnceleme, çözümleme",
      antonym: "Sentez, birleştirme",
      example: "Bilim insanı örnekleri analiz etti."
    },
    {
      key: "v_hipotez",
      word: "Hipotez",
      emoji: "💭",
      definition: "Kanıtlanmamış geçici açıklama",
      synonym: "Varsayım, öngörü",
      antonym: "Kanıt, kesinlik",
      example: "Bilim insanı hipotezini test etti."
    },
    {
      key: "v_empati",
      word: "Empati",
      emoji: "🤝",
      definition: "Başkasının duygularını anlayabilme yetisi",
      synonym: "Anlayış, sezgi",
      antonym: "Bencillik, ilgisizlik",
      example: "Empati kurmak ilişkileri güçlendirir."
    },
    {
      key: "v_paradoks",
      word: "Paradoks",
      emoji: "♾️",
      definition: "Görünürde çelişkili ama doğru olan önerme",
      synonym: "Çelişki, tezat",
      antonym: "Tutarlılık, uyum",
      example: "'Az çok olur' bir paradokstur."
    },
    {
      key: "v_nostalji",
      word: "Nostalji",
      emoji: "📷",
      definition: "Geçmişe özlem duyma",
      synonym: "Özlem, hasret",
      antonym: "İlerleme, yenilik",
      example: "Eski fotoğraflar nostaljiye yol açar."
    },
    {
      key: "v_sinerji",
      word: "Sinerji",
      emoji: "⚡",
      definition: "Birlikte çalışmanın toplam etkisi",
      synonym: "Birleşim gücu, uyum",
      antonym: "Çatışma, ayrılık",
      example: "Ekip sinerjisiyle büyük işler başardı."
    },
    {
      key: "v_ambivalans",
      word: "Ambivalans",
      emoji: "⚖️",
      definition: "Aynı anda iki zıt duyguyu hissetme",
      synonym: "İkilem, kararsızlık",
      antonym: "Kesinlik, netlik",
      example: "Sınav sonucuna ambivalans hissetti: hem heyecan hem korku."
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
function VocabularyPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "vocabulary");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [mode, setMode] = reactExports.useState(
    "browse"
  );
  const getTranslation = (key) => {
    if (lang === "es") return contentTranslationsEs[key];
    if (lang === "en") return contentTranslationsEn[key];
    return null;
  };
  const filteredWords = vocabulary[level].filter((w) => {
    const tr = getTranslation(w.key);
    const displayWord = (tr == null ? void 0 : tr.word) || w.word;
    const displayDef = (tr == null ? void 0 : tr.definition) || w.definition;
    const q = searchTerm.toLowerCase();
    return displayWord.toLowerCase().includes(q) || displayDef.toLowerCase().includes(q);
  });
  const flashCards = vocabulary[level].map((w) => {
    const tr = getTranslation(w.key);
    return {
      key: w.key,
      front: (tr == null ? void 0 : tr.word) || w.word,
      back: (tr == null ? void 0 : tr.definition) || w.definition,
      emoji: w.emoji
    };
  });
  const spellingWords = vocabulary[level].map((w) => {
    const tr = getTranslation(w.key);
    return { key: w.key, word: (tr == null ? void 0 : tr.word) || w.word, emoji: w.emoji };
  });
  const handleFlashcardComplete = (known, _total) => {
    if (profile) {
      updatePoints(profile.studentNumber, known * 5);
      incrementDailyContentRead(profile.studentNumber);
    }
  };
  const handleSpellingComplete = (_score, _total, points) => {
    if (profile && points > 0) {
      updatePoints(profile.studentNumber, points);
      incrementDailyContentRead(profile.studentNumber);
    }
  };
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const pageTitle = lang === "es" ? "Vocabulario" : lang === "en" ? "Vocabulary Builder" : "Kelime Haznesi";
  const browseLabel = lang === "es" ? "Ver" : lang === "en" ? "Browse" : "Listele";
  const flashLabel = lang === "es" ? "Tarjetas" : lang === "en" ? "Flashcards" : "Flaş Kart";
  const spellingLabel = lang === "es" ? "Ortografía" : lang === "en" ? "Spelling" : "Yazım";
  const exLabel = lang === "es" ? "Ej:" : lang === "en" ? "Ex:" : "Örn:";
  const synLabel = lang === "es" ? "Sin:" : lang === "en" ? "Syn:" : "Eş:";
  const antLabel = lang === "es" ? "Ant:" : lang === "en" ? "Ant:" : "Zıt:";
  const noResults = lang === "es" ? "No se encontraron resultados" : lang === "en" ? "No results found" : "Sonuç bulunamadı";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-purple-600 to-violet-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "vocabulary.back_button",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4 font-bold text-sm",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "📖 ",
      pageTitle
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "vocabulary.tab",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-purple-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "vocabulary.tab",
          onClick: () => setMode("browse"),
          className: `py-3 rounded-2xl font-bold text-xs transition-all ${mode === "browse" ? "bg-white text-purple-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: [
            "📚 ",
            browseLabel
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "vocabulary.open_modal_button",
          onClick: () => setMode("flashcard"),
          className: `py-3 rounded-2xl font-bold text-xs transition-all ${mode === "flashcard" ? "bg-white text-purple-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: [
            "🃏 ",
            flashLabel
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "vocabulary.secondary_button",
          onClick: () => setMode("spelling"),
          className: `py-3 rounded-2xl font-bold text-xs transition-all ${mode === "spelling" ? "bg-white text-purple-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: [
            "✏️ ",
            spellingLabel
          ]
        }
      )
    ] }),
    mode === "flashcard" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FlashcardMode,
      {
        cards: flashCards,
        onClose: () => setMode("browse"),
        onComplete: handleFlashcardComplete,
        lang,
        accentColor: "from-purple-600 to-violet-600"
      }
    ),
    mode === "spelling" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SpellingPractice,
      {
        words: spellingWords,
        onClose: () => setMode("browse"),
        onComplete: handleSpellingComplete,
        lang
      }
    ),
    (() => {
      const total = vocabulary[level].length;
      const done = vocabulary[level].filter(
        (w) => readTopics.includes(w.key)
      ).length;
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📖" }),
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
        "data-ocid": "vocabulary.search_input",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredWords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "vocabulary.empty_state",
        className: "text-center text-white/60 py-8",
        children: [
          noResults,
          " 🔍"
        ]
      }
    ) : filteredWords.map((w, idx) => {
      const isRead = readTopics.includes(w.key);
      const tr = getTranslation(w.key);
      const displayWord = (tr == null ? void 0 : tr.word) || w.word;
      const displayDef = (tr == null ? void 0 : tr.definition) || w.definition;
      const displaySynonym = (tr == null ? void 0 : tr.synonym) || w.synonym;
      const displayAntonym = (tr == null ? void 0 : tr.antonym) || w.antonym;
      const displayExample = (tr == null ? void 0 : tr.example) || w.example;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `vocabulary.item.${idx + 1}`,
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: w.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-xl", children: displayWord }),
                isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-300 text-sm", children: [
                  "✓ ",
                  t("learned")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm leading-relaxed mb-3", children: displayDef }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [
              displaySynonym && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-blue-400/30 text-white text-xs font-bold px-3 py-1 rounded-full", children: [
                "🔵 ",
                synLabel,
                " ",
                displaySynonym
              ] }),
              displayAntonym && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-red-400/30 text-white text-xs font-bold px-3 py-1 rounded-full", children: [
                "🔴 ",
                antLabel,
                " ",
                displayAntonym
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-xs italic mb-4", children: [
              exLabel,
              " “",
              displayExample,
              "”"
            ] }),
            !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "vocabulary.read_button",
                onClick: () => handleRead(w.key),
                className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                children: [
                  "💡 ",
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
        w.key
      );
    }) })
  ] }) });
}
export {
  VocabularyPage as default
};
