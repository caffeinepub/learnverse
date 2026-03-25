import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, j as jsxRuntimeExports, B as Button, f as updatePoints } from "./index-DKzO8o3N.js";
const storyProblems = {
  okul_oncesi: [
    {
      key: "sp_o1",
      story: "Ayşe'nin 3 elması vardı. Annesi ona 2 tane daha verdi.",
      question: "Ayşe'nin şimdi kaç elması var?",
      options: ["4", "5", "6", "3"],
      answer: "5",
      emoji: "🍎",
      explanation: "3 + 2 = 5"
    },
    {
      key: "sp_o2",
      story: "Bahçede 6 kelebek uçuyordu. 2 tanesi uzaklaştı.",
      question: "Bahçede kaç kelebek kaldı?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      emoji: "🦋",
      explanation: "6 - 2 = 4"
    },
    {
      key: "sp_o3",
      story: "Sepette 4 portakal vardı. Komşuya 1 tane verildi.",
      question: "Sepette kaç portakal kaldı?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      emoji: "🍊",
      explanation: "4 - 1 = 3"
    },
    {
      key: "sp_o4",
      story: "Havuzda 2 ördek yüzüyordu. 3 ördek daha geldi.",
      question: "Havuzda toplam kaç ördek var?",
      options: ["3", "4", "5", "6"],
      answer: "5",
      emoji: "🦆",
      explanation: "2 + 3 = 5"
    },
    {
      key: "sp_o5",
      story: "Ali'nin 5 baloonu vardı. 2 tanesi uçup gitti.",
      question: "Ali'nin kaç balonu kaldı?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      emoji: "🎈",
      explanation: "5 - 2 = 3"
    },
    {
      key: "sp_o6",
      story: "Masada 1 kırmızı, 2 mavi, 1 sarı kalem vardı.",
      question: "Masada toplam kaç kalem var?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      emoji: "✏️",
      explanation: "1 + 2 + 1 = 4"
    },
    {
      key: "sp_o7",
      story: "Zeynep sınıfa 3 çiçek getirdi. Öğretmeni de 4 çiçek getirdi.",
      question: "Sınıfta toplam kaç çiçek var?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      emoji: "🌸",
      explanation: "3 + 4 = 7"
    },
    {
      key: "sp_o8",
      story: "Kardeşim doğum günümde 8 şeker verdi. 3 tanesini yedim.",
      question: "Kaç şekerim kaldı?",
      options: ["4", "5", "6", "7"],
      answer: "5",
      emoji: "🍬",
      explanation: "8 - 3 = 5"
    }
  ],
  ilkokul: [
    {
      key: "sp_i1",
      story: "Bir markette elma 3 TL, portakal 4 TL'dir. Mehmet her ikisinden birer tane aldı.",
      question: "Mehmet toplam kaç TL ödedi?",
      options: ["5 TL", "6 TL", "7 TL", "8 TL"],
      answer: "7 TL",
      emoji: "🛒",
      explanation: "3 + 4 = 7 TL"
    },
    {
      key: "sp_i2",
      story: "Bir sınıfta 28 öğrenci var. 12 tanesi kız öğrenci.",
      question: "Sınıfta kaç erkek öğrenci var?",
      options: ["14", "15", "16", "17"],
      answer: "16",
      emoji: "🏫",
      explanation: "28 - 12 = 16"
    },
    {
      key: "sp_i3",
      story: "Bir çiftlikte 6 sıra elma ağacı var. Her sırada 9 ağaç bulunuyor.",
      question: "Çiftlikte toplam kaç elma ağacı var?",
      options: ["48", "52", "54", "56"],
      answer: "54",
      emoji: "🌳",
      explanation: "6 × 9 = 54"
    },
    {
      key: "sp_i4",
      story: "48 çikolata 6 çocuğa eşit paylaştırıldı.",
      question: "Her çocuğa kaç çikolata düşer?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      emoji: "🍫",
      explanation: "48 ÷ 6 = 8"
    },
    {
      key: "sp_i5",
      story: "Kitapçıda 125 roman ve 87 hikaye kitabı var.",
      question: "Kitapçıda toplam kaç kitap var?",
      options: ["200", "210", "212", "215"],
      answer: "212",
      emoji: "📚",
      explanation: "125 + 87 = 212"
    },
    {
      key: "sp_i6",
      story: "Bir tren 300 km yolculuk yapıyor. 145 km'yi tamamladı.",
      question: "Kaç km yolu kaldı?",
      options: ["145 km", "155 km", "165 km", "175 km"],
      answer: "155 km",
      emoji: "🚂",
      explanation: "300 - 145 = 155"
    },
    {
      key: "sp_i7",
      story: "Bir dükkanda 5 kutuda toplam 75 kalem var.",
      question: "Her kutuda kaç kalem vardır?",
      options: ["12", "13", "14", "15"],
      answer: "15",
      emoji: "✏️",
      explanation: "75 ÷ 5 = 15"
    },
    {
      key: "sp_i8",
      story: "Serap günde 3 bardak süt içiyor. Bir hafta boyunca kaç bardak süt içer?",
      question: "Bir haftada kaç bardak süt içer?",
      options: ["18", "20", "21", "24"],
      answer: "21",
      emoji: "🥛",
      explanation: "3 × 7 = 21 (7 gün)"
    }
  ],
  ortaokul: [
    {
      key: "sp_or1",
      story: "Bir arabanın yakıt deposu 60 litredir. Depo 3/4 dolu.",
      question: "Depoda kaç litre yakıt vardır?",
      options: ["40 litre", "42 litre", "45 litre", "48 litre"],
      answer: "45 litre",
      emoji: "🚗",
      explanation: "60 × (3/4) = 45 litre"
    },
    {
      key: "sp_or2",
      story: "Bir mağazada gömlek 200 TL'ye satılıyor. %25 indirim uygulandı.",
      question: "İndirimli fiyat ne kadar?",
      options: ["140 TL", "145 TL", "150 TL", "160 TL"],
      answer: "150 TL",
      emoji: "🏷️",
      explanation: "200 - (200 × 0.25) = 200 - 50 = 150 TL"
    },
    {
      key: "sp_or3",
      story: "Bir sınıfta 24 öğrenci var. 3'te 2'si sınav geçti.",
      question: "Kaç öğrenci sınavı geçti?",
      options: ["14", "15", "16", "18"],
      answer: "16",
      emoji: "📝",
      explanation: "24 × (2/3) = 16"
    },
    {
      key: "sp_or4",
      story: "Ali'nin yaşı Ayşe'nin 2 katı. Ayşe 12 yaşında.",
      question: "Ali kaç yaşındadır?",
      options: ["20", "22", "24", "26"],
      answer: "24",
      emoji: "👦",
      explanation: "2 × 12 = 24"
    },
    {
      key: "sp_or5",
      story: "Bir dikdörtgenin uzunluğu 15 cm, genişliği 8 cm.",
      question: "Dikdörtgenin alanı kaç cm²'dir?",
      options: ["100 cm²", "110 cm²", "120 cm²", "130 cm²"],
      answer: "120 cm²",
      emoji: "📐",
      explanation: "15 × 8 = 120 cm²"
    },
    {
      key: "sp_or6",
      story: "Bir koşucu saatte 10 km koşuyor. 3,5 saatte kaç km koşar?",
      question: "3,5 saatte kaç km koşar?",
      options: ["30 km", "32 km", "35 km", "38 km"],
      answer: "35 km",
      emoji: "🏃",
      explanation: "10 × 3,5 = 35 km"
    },
    {
      key: "sp_or7",
      story: "Bir öğrenci 5 sınavdan 70, 80, 90, 60, 75 aldı.",
      question: "Ortalama puanı nedir?",
      options: ["73", "74", "75", "76"],
      answer: "75",
      emoji: "📊",
      explanation: "(70+80+90+60+75) ÷ 5 = 375 ÷ 5 = 75"
    },
    {
      key: "sp_or8",
      story: "Bir fabrika günde 240 ürün üretiyor. Bunu 8 saatlik çalışma süresinde yapıyor.",
      question: "Saatte kaç ürün üretiliyor?",
      options: ["25", "28", "30", "32"],
      answer: "30",
      emoji: "🏭",
      explanation: "240 ÷ 8 = 30 ürün/saat"
    }
  ]
};
function MathStoryPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();
  const [level, setLevel] = reactExports.useState("ilkokul");
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [selectedAnswer, setSelectedAnswer] = reactExports.useState(null);
  const [isCorrect, setIsCorrect] = reactExports.useState(null);
  const [correctCount, setCorrectCount] = reactExports.useState(0);
  const [isFinished, setIsFinished] = reactExports.useState(false);
  const [showExplanation, setShowExplanation] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "math-story");
  }, [profile == null ? void 0 : profile.studentNumber]);
  const levelProblems = storyProblems[level];
  const currentProblem = levelProblems[currentIndex];
  const total = levelProblems.length;
  const handleLevelChange = (l) => {
    setLevel(l);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectCount(0);
    setIsFinished(false);
    setShowExplanation(false);
  };
  const handleAnswer = (option) => {
    if (selectedAnswer !== null) return;
    const correct = option === currentProblem.answer;
    setSelectedAnswer(option);
    setIsCorrect(correct);
    setShowExplanation(true);
    if (correct && profile) {
      updatePoints(profile.studentNumber, 20);
      setCorrectCount((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 >= total) {
        setIsFinished(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowExplanation(false);
      }
    }, 2500);
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectCount(0);
    setIsFinished(false);
    setShowExplanation(false);
  };
  const levelLabels = {
    okul_oncesi: "Okul Öncesi",
    ilkokul: "İlkokul",
    ortaokul: "Ortaokul"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-emerald-700 to-teal-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          className: "text-white hover:bg-white/20",
          onClick: () => navigate({ to: "/home" }),
          "data-ocid": "mathstory.back_button",
          children: [
            "← ",
            t("back")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "📖 Matematik Hikayeleri" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-6", "data-ocid": "mathstory.level.tab", children: ["okul_oncesi", "ilkokul", "ortaokul"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => handleLevelChange(l),
        className: `flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-all ${level === l ? "bg-white text-emerald-700 shadow-lg" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: levelLabels[l]
      },
      l
    )) }),
    isFinished ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white rounded-2xl p-8 text-center shadow-xl",
        "data-ocid": "mathstory.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🌟" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-2", children: "Harika!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-4", children: [
            total,
            " problemden",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-emerald-600", children: correctCount }),
            " ",
            "tanesini doğru çözdün!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-emerald-600 mb-6", children: [
            "+",
            correctCount * 20,
            " puan 🎉"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleRestart,
                className: "bg-emerald-600 hover:bg-emerald-700 text-white",
                "data-ocid": "mathstory.restart_button",
                children: "🔄 Tekrar Oyna"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => navigate({ to: "/home" }),
                "data-ocid": "mathstory.home_button",
                children: "🏠 Ana Sayfa"
              }
            )
          ] })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white/80 text-sm mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            currentIndex + 1,
            "/",
            total,
            " problem"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "✅ ",
            correctCount,
            " doğru"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-white/20 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-white rounded-full transition-all duration-500",
            style: { width: `${currentIndex / total * 100}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-2xl p-6 shadow-xl",
          "data-ocid": "mathstory.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2 text-center", children: currentProblem.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-base leading-relaxed font-medium", children: currentProblem.story })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold text-gray-800 mb-4 text-center", children: [
              "❓ ",
              currentProblem.question
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: currentProblem.options.map((option, idx) => {
              let btnClass = "py-4 px-4 rounded-xl text-base font-bold border-2 transition-all ";
              if (selectedAnswer === null) {
                btnClass += "border-gray-200 bg-gray-50 hover:border-emerald-400 hover:bg-emerald-50 text-gray-800";
              } else if (option === currentProblem.answer) {
                btnClass += "border-green-500 bg-green-100 text-green-700";
              } else if (option === selectedAnswer) {
                btnClass += "border-red-500 bg-red-100 text-red-700";
              } else {
                btnClass += "border-gray-200 bg-gray-50 text-gray-400";
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleAnswer(option),
                  className: btnClass,
                  "data-ocid": `mathstory.option.${idx + 1}`,
                  disabled: selectedAnswer !== null,
                  children: option
                },
                option
              );
            }) }),
            showExplanation && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `mt-4 p-4 rounded-xl ${isCorrect ? "bg-green-100 border border-green-300" : "bg-red-50 border border-red-300"}`,
                "data-ocid": isCorrect ? "mathstory.correct_state" : "mathstory.wrong_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `font-bold text-sm mb-1 ${isCorrect ? "text-green-700" : "text-red-700"}`,
                      children: isCorrect ? "✅ Doğru! +20 puan" : `❌ Yanlış. Doğru cevap: ${currentProblem.answer}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-600 text-sm", children: [
                    "💡 Çözüm: ",
                    currentProblem.explanation
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
export {
  MathStoryPage as default
};
