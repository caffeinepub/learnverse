import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, j as jsxRuntimeExports, B as Button, f as updatePoints } from "./index-DiEM5xmX.js";
const readingTexts = {
  okul_oncesi: [
    {
      key: "rf_1",
      title: "Minnoş Kedi",
      emoji: "🐱",
      text: "Minnoş adında küçük bir kedi vardı. Her sabah bahçede oynardı. Bir gün güzel bir kelebek gördü. Kelebeğin peşinden koştu ama yakalayamadı. Gülerek eve döndü. Annesi sütünü hazırladı. Minnoş mutlu oldu.",
      wordCount: 35,
      targetWPM: { min: 40, max: 60 }
    },
    {
      key: "rf_2",
      title: "Küçük Yıldız",
      emoji: "⭐",
      text: "Gökyüzünde küçük bir yıldız vardı. Gece gelince parlamaya başladı. Tüm gökyüzü aydınlandı. Çocuklar pencereden baktı. Hepsi hayranlıkla izledi. Yıldız onlara göz kırptı. Çocuklar mutlu olarak uyudu.",
      wordCount: 33,
      targetWPM: { min: 40, max: 60 }
    },
    {
      key: "rf_3",
      title: "Renkli Balon",
      emoji: "🎈",
      text: "Ali renkli bir balon aldı. Kırmızı ve sarı renkleri vardı. Rüzgar esince balon sallandı. Ali ipini sıkıca tuttu. Parka gitti ve arkadaşlarıyla oynadı. Akşam eve dönerken balon hâlâ uçuyordu.",
      wordCount: 32,
      targetWPM: { min: 40, max: 60 }
    }
  ],
  ilkokul: [
    {
      key: "rf_4",
      title: "Tavşan ile Kaplumbağa",
      emoji: "🐢",
      text: "Bir ormanda hızlı bir tavşan ve yavaş bir kaplumbağa yaşıyordu. Bir gün yarış yapmaya karar verdiler. Tavşan hızla koştu ve dinlenmeye yattı. Kaplumbağa durmadan yürüdü. Tavşan uyuya kaldı. Kaplumbağa bitiş çizgisine ulaştı ve yarışı kazandı. Sabır ve azim her zaman kazandırır.",
      wordCount: 45,
      targetWPM: { min: 60, max: 90 }
    },
    {
      key: "rf_5",
      title: "Sihirli Kitap",
      emoji: "📚",
      text: "Elif kütüphanede eski bir kitap buldu. Kitabı açınca sayfalar ışıldadı. İçinden bir peri çıktı. Peri dedi ki, bu kitabı okursan tüm soruların cevabını bulursun. Elif her gece kitabı okudu. Okul sınavlarında çok başarılı oldu. Kitapların gücüne inandı.",
      wordCount: 44,
      targetWPM: { min: 60, max: 90 }
    },
    {
      key: "rf_6",
      title: "Deniz Macerası",
      emoji: "🌊",
      text: "Can ailesiyle denize gitti. Kumda kale yaptı. Dalgalar gelince kale yıkıldı. Ama Can yılmadı ve daha büyük bir kale yaptı. Bu sefer dalganın erişemeyeceği yüksek bir yere kurdu. Babası ona aferin dedi. Azim ile her şey mümkündür.",
      wordCount: 40,
      targetWPM: { min: 60, max: 90 }
    }
  ],
  ortaokul: [
    {
      key: "rf_7",
      title: "Teknoloji ve Doğa",
      emoji: "🌿",
      text: "Modern dünyada teknoloji hayatımızın her alanına girmiştir. Akıllı telefonlar, bilgisayarlar ve internetle bağlı olan insanlar doğayı unutmaya başlamıştır. Oysa doğada geçirilen her an insanın zihnini ve bedenini yeniler. Bilim insanları, yeşil alanların insan psikolojisi üzerindeki olumlu etkilerini kanıtlamıştır. Teknolojiyle doğayı dengelemek bu çağın en önemli görevidir.",
      wordCount: 57,
      targetWPM: { min: 100, max: 150 }
    },
    {
      key: "rf_8",
      title: "Bilimin Gücü",
      emoji: "🔬",
      text: "Bilim, insanlığın gelişiminde en temel araçlardan biri olmuştur. Hastalıkları yenen ilaçlardan uzayı keşfeden roketlere kadar her şey bilimsel düşüncenin ürünüdür. Bir soru sormak, gözlem yapmak, deney düzenlemek ve sonuçları paylaşmak bilimin temel adımlarıdır. Bu süreci öğrenmek, çocukları geleceğin bilim insanlarına dönüştürür.",
      wordCount: 52,
      targetWPM: { min: 100, max: 150 }
    },
    {
      key: "rf_9",
      title: "Çevre Bilinci",
      emoji: "♻️",
      text: "Dünyamız hızla değişmektedir. İklim değişikliği, hava kirliliği ve su kaynaklarının azalması ciddi sorunlara yol açmaktadır. Ancak bireysel tercihlerle büyük değişimler mümkündür. Plastik kullanımını azaltmak, geri dönüşüm yapmak ve enerji tasarrufu sağlamak bu adımların başında gelir. Gelecek nesillere temiz bir dünya bırakmak hepimizin sorumluluğudur.",
      wordCount: 54,
      targetWPM: { min: 100, max: 150 }
    }
  ]
};
const labels = {
  tr: {
    title: "Okuma Akıcılığı",
    subtitle: "Okuma hızını ölç ve geliştir",
    selectLevel: "Seviye Seç",
    preschool: "Okul Öncesi",
    primary: "İlkokul",
    middle: "Ortaokul",
    selectText: "Metin Seç",
    readyPrompt: "Hazır olduğunda 'Başla' butonuna bas ve metni yüksek sesle oku.",
    start: "Başla",
    done: "Bitti",
    result: "Sonuç",
    wpm: "kelime/dakika",
    excellent: "Mükemmel! Okuma hızın çok iyi.",
    good: "İyi! Hedefe ulaştın.",
    practice: "Biraz daha pratik yapman gerekiyor.",
    target: "Hedef",
    yourSpeed: "Hızın",
    tryAgain: "Tekrar Dene",
    nextText: "Sonraki Metin",
    back: "Geri",
    points: "+15 puan kazandın!",
    readingTime: "Okuma süresi",
    seconds: "saniye",
    words: "kelime",
    history: "Geçmiş Sonuçlar",
    noHistory: "Henüz sonuç yok",
    bestWPM: "En İyi"
  },
  en: {
    title: "Reading Fluency",
    subtitle: "Measure and improve your reading speed",
    selectLevel: "Select Level",
    preschool: "Preschool",
    primary: "Primary School",
    middle: "Middle School",
    selectText: "Select Text",
    readyPrompt: "When ready, press 'Start' and read the text aloud.",
    start: "Start",
    done: "Done",
    result: "Result",
    wpm: "words/min",
    excellent: "Excellent! Your reading speed is great.",
    good: "Good! You reached the target.",
    practice: "You need a bit more practice.",
    target: "Target",
    yourSpeed: "Your Speed",
    tryAgain: "Try Again",
    nextText: "Next Text",
    back: "Back",
    points: "+15 points earned!",
    readingTime: "Reading time",
    seconds: "seconds",
    words: "words",
    history: "Past Results",
    noHistory: "No results yet",
    bestWPM: "Best"
  },
  es: {
    title: "Fluidez Lectora",
    subtitle: "Mide y mejora tu velocidad de lectura",
    selectLevel: "Seleccionar nivel",
    preschool: "Preescolar",
    primary: "Primaria",
    middle: "Secundaria",
    selectText: "Seleccionar texto",
    readyPrompt: "Cuando estés listo, pulsa 'Iniciar' y lee el texto en voz alta.",
    start: "Iniciar",
    done: "Listo",
    result: "Resultado",
    wpm: "palabras/min",
    excellent: "¡Excelente! Tu velocidad de lectura es muy buena.",
    good: "¡Bien! Has alcanzado el objetivo.",
    practice: "Necesitas un poco más de práctica.",
    target: "Objetivo",
    yourSpeed: "Tu velocidad",
    tryAgain: "Intentar de nuevo",
    nextText: "Siguiente texto",
    back: "Volver",
    points: "¡+15 puntos ganados!",
    readingTime: "Tiempo de lectura",
    seconds: "segundos",
    words: "palabras",
    history: "Resultados anteriores",
    noHistory: "Sin resultados aún",
    bestWPM: "Mejor"
  },
  fr: {
    title: "Fluidité de Lecture",
    subtitle: "Mesure et améliore ta vitesse de lecture",
    selectLevel: "Choisir le niveau",
    preschool: "Préscolaire",
    primary: "Primaire",
    middle: "Collège",
    selectText: "Choisir un texte",
    readyPrompt: "Quand tu es prêt, appuie sur 'Commencer' et lis le texte à haute voix.",
    start: "Commencer",
    done: "Terminé",
    result: "Résultat",
    wpm: "mots/min",
    excellent: "Excellent ! Ta vitesse de lecture est très bonne.",
    good: "Bien ! Tu as atteint l'objectif.",
    practice: "Tu as besoin d'un peu plus de pratique.",
    target: "Objectif",
    yourSpeed: "Ta vitesse",
    tryAgain: "Réessayer",
    nextText: "Texte suivant",
    back: "Retour",
    points: "+15 points gagnés !",
    readingTime: "Temps de lecture",
    seconds: "secondes",
    words: "mots",
    history: "Résultats passés",
    noHistory: "Pas encore de résultats",
    bestWPM: "Meilleur"
  }
};
function ReadingFluencyPage() {
  const navigate = useNavigate();
  const { lang: langCode } = useLanguage();
  const lang = labels[langCode] || labels.tr;
  const user = getCurrentUser();
  const level = (user == null ? void 0 : user.level) ?? "ilkokul";
  const texts = readingTexts[level];
  const [selectedIdx, setSelectedIdx] = reactExports.useState(0);
  const [phase, setPhase] = reactExports.useState("select");
  const [elapsed, setElapsed] = reactExports.useState(0);
  const [wpm, setWpm] = reactExports.useState(0);
  const [history, setHistory] = reactExports.useState([]);
  const timerRef = reactExports.useRef(null);
  const startRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("readingFluencyHistory");
    if (stored) setHistory(JSON.parse(stored));
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const currentText = texts[selectedIdx];
  function startReading() {
    setElapsed(0);
    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1e3));
    }, 500);
    setPhase("reading");
  }
  function finishReading() {
    if (timerRef.current) clearInterval(timerRef.current);
    const totalSeconds = (Date.now() - startRef.current) / 1e3;
    const calculatedWpm = Math.round(
      currentText.wordCount / totalSeconds * 60
    );
    setWpm(calculatedWpm);
    setElapsed(Math.round(totalSeconds));
    if (calculatedWpm >= currentText.targetWPM.min) {
      if (user == null ? void 0 : user.studentNumber) updatePoints(user.studentNumber, 15);
    }
    const record = {
      key: currentText.key,
      title: currentText.title,
      wpm: calculatedWpm,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString()
    };
    const stored = localStorage.getItem("readingFluencyHistory");
    const prev = stored ? JSON.parse(stored) : [];
    const updated = [record, ...prev].slice(0, 20);
    localStorage.setItem("readingFluencyHistory", JSON.stringify(updated));
    setHistory(updated);
    setPhase("result");
  }
  function getResultEmoji(wpmVal) {
    const { min, max } = currentText.targetWPM;
    if (wpmVal >= max) return "🏆";
    if (wpmVal >= min) return "✅";
    return "💪";
  }
  function getResultMsg(wpmVal) {
    const { min, max } = currentText.targetWPM;
    if (wpmVal >= max) return lang.excellent;
    if (wpmVal >= min) return lang.good;
    return lang.practice;
  }
  function getBarColor(wpmVal) {
    const { min, max } = currentText.targetWPM;
    if (wpmVal >= max) return "bg-green-500";
    if (wpmVal >= min) return "bg-yellow-500";
    return "bg-red-400";
  }
  const bestForThisText = history.filter((r) => r.key === currentText.key).reduce((best, r) => Math.max(best, r.wpm), 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          className: "text-white hover:bg-white/20",
          onClick: () => navigate({ to: "/stories" }),
          children: [
            "← ",
            lang.back
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-white", children: [
          "📖 ",
          lang.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-sm", children: lang.subtitle })
      ] })
    ] }),
    phase === "select" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 mb-6", children: texts.map((t, i) => {
        const best = history.filter((r) => r.key === t.key).reduce((b, r) => Math.max(b, r.wpm), 0);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSelectedIdx(i),
            className: `text-left p-4 rounded-2xl border-2 transition-all ${selectedIdx === i ? "border-yellow-400 bg-white/20" : "border-white/20 bg-white/10 hover:bg-white/15"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: t.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: t.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-indigo-200 text-sm", children: [
                    t.wordCount,
                    " ",
                    lang.words,
                    " · ",
                    lang.target,
                    ":",
                    " ",
                    t.targetWPM.min,
                    "–",
                    t.targetWPM.max,
                    " ",
                    lang.wpm
                  ] })
                ] })
              ] }),
              best > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-yellow-400 font-bold text-sm", children: lang.bestWPM }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold", children: [
                  best,
                  " ",
                  lang.wpm
                ] })
              ] })
            ] })
          },
          t.key
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full py-4 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl",
          onClick: () => {
            setPhase("reading");
            startReading();
          },
          children: [
            "📖 ",
            lang.start
          ]
        }
      ),
      history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-3", children: [
          "📊 ",
          lang.history
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto", children: history.slice(0, 8).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between bg-white/10 rounded-xl px-4 py-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm", children: r.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-200 text-xs", children: r.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-400 font-bold text-sm", children: [
                  r.wpm,
                  " ",
                  lang.wpm
                ] })
              ] })
            ]
          },
          `${r.key}-${r.date}-${i}`
        )) })
      ] })
    ] }),
    phase === "reading" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-3xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-bold text-yellow-400", children: elapsed }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.seconds })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/90 rounded-2xl p-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: currentText.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-800", children: currentText.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-lg leading-relaxed", children: currentText.text })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-center text-sm mb-4", children: lang.readyPrompt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full py-4 text-lg font-bold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-2xl",
          onClick: finishReading,
          children: [
            "✅ ",
            lang.done
          ]
        }
      )
    ] }),
    phase === "result" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur rounded-3xl p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-3", children: getResultEmoji(wpm) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white mb-1", children: lang.result }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 mb-6", children: getResultMsg(wpm) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-6 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-8 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.yourSpeed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-yellow-400", children: wpm }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.wpm })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-white/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.target }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-white", children: [
              currentText.targetWPM.min,
              "–",
              currentText.targetWPM.max
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.wpm })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px bg-white/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.readingTime }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white", children: elapsed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-indigo-200 text-sm", children: lang.seconds })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/20 rounded-full h-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-3 rounded-full transition-all ${getBarColor(wpm)}`,
            style: {
              width: `${Math.min(100, wpm / currentText.targetWPM.max * 100)}%`
            }
          }
        ) }),
        wpm >= currentText.targetWPM.min && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-green-400 font-bold", children: [
          "🎉 ",
          lang.points
        ] }),
        bestForThisText > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-yellow-300 text-sm", children: [
          lang.bestWPM,
          ": ",
          bestForThisText,
          " ",
          lang.wpm
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 py-3 font-bold bg-white/20 hover:bg-white/30 text-white rounded-2xl",
            onClick: () => {
              setPhase("reading");
              startReading();
            },
            children: [
              "🔄 ",
              lang.tryAgain
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "flex-1 py-3 font-bold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-2xl",
            onClick: () => {
              const nextIdx = (selectedIdx + 1) % texts.length;
              setSelectedIdx(nextIdx);
              setPhase("select");
            },
            children: [
              "➡️ ",
              lang.nextText
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  ReadingFluencyPage as default
};
