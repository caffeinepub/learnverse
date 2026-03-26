import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, j as jsxRuntimeExports, B as Button, f as updatePoints } from "./index-Bubhbmh-.js";
const problems = {
  okul_oncesi: [
    {
      key: "mp1",
      question: "1 + 1 = ?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      emoji: "🍎",
      difficulty: "easy"
    },
    {
      key: "mp2",
      question: "3 - 1 = ?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      emoji: "🐣",
      difficulty: "easy"
    },
    {
      key: "mp3",
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      emoji: "🌟",
      difficulty: "easy"
    },
    {
      key: "mp4",
      question: "5 - 2 = ?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      emoji: "🦋",
      difficulty: "easy"
    },
    {
      key: "mp5",
      question: "1 + 3 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      emoji: "🐸",
      difficulty: "easy"
    },
    {
      key: "mp6",
      question: "Kaç tane elma var? 🍎🍎🍎",
      options: ["1", "2", "3", "4"],
      answer: "3",
      emoji: "🍎",
      difficulty: "easy"
    },
    {
      key: "mp7",
      question: "4 + 1 = ?",
      options: ["4", "5", "6", "7"],
      answer: "5",
      emoji: "⭐",
      difficulty: "easy"
    },
    {
      key: "mp8",
      question: "2 + 3 = ?",
      options: ["4", "5", "6", "7"],
      answer: "5",
      emoji: "🌈",
      difficulty: "easy"
    }
  ],
  ilkokul: [
    {
      key: "mp_i1",
      question: "12 + 15 = ?",
      options: ["25", "26", "27", "28"],
      answer: "27",
      emoji: "➕",
      difficulty: "medium"
    },
    {
      key: "mp_i2",
      question: "30 - 14 = ?",
      options: ["14", "15", "16", "17"],
      answer: "16",
      emoji: "➖",
      difficulty: "medium"
    },
    {
      key: "mp_i3",
      question: "6 × 7 = ?",
      options: ["40", "42", "44", "46"],
      answer: "42",
      emoji: "✖️",
      difficulty: "medium"
    },
    {
      key: "mp_i4",
      question: "48 ÷ 6 = ?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      emoji: "➗",
      difficulty: "medium"
    },
    {
      key: "mp_i5",
      question: "25 + 37 = ?",
      options: ["60", "61", "62", "63"],
      answer: "62",
      emoji: "🔢",
      difficulty: "medium"
    },
    {
      key: "mp_i6",
      question: "100 - 43 = ?",
      options: ["55", "56", "57", "58"],
      answer: "57",
      emoji: "💯",
      difficulty: "medium"
    },
    {
      key: "mp_i7",
      question: "9 × 8 = ?",
      options: ["70", "72", "74", "76"],
      answer: "72",
      emoji: "🌟",
      difficulty: "medium"
    },
    {
      key: "mp_i8",
      question: "56 ÷ 7 = ?",
      options: ["6", "7", "8", "9"],
      answer: "8",
      emoji: "🧩",
      difficulty: "medium"
    }
  ],
  ortaokul: [
    {
      key: "mp_o1",
      question: "1/2 + 1/4 = ?",
      options: ["1/6", "2/6", "3/4", "1/3"],
      answer: "3/4",
      emoji: "🍕",
      difficulty: "hard"
    },
    {
      key: "mp_o2",
      question: "%50 = kaç kesirine eşittir?",
      options: ["1/3", "1/2", "1/4", "2/3"],
      answer: "1/2",
      emoji: "📊",
      difficulty: "hard"
    },
    {
      key: "mp_o3",
      question: "x + 5 = 12, x = ?",
      options: ["5", "6", "7", "8"],
      answer: "7",
      emoji: "🔣",
      difficulty: "hard"
    },
    {
      key: "mp_o4",
      question: "3/4 - 1/4 = ?",
      options: ["1/2", "2/4", "1/4", "3/8"],
      answer: "1/2",
      emoji: "➗",
      difficulty: "hard"
    },
    {
      key: "mp_o5",
      question: "%25 × 80 = ?",
      options: ["15", "20", "25", "30"],
      answer: "20",
      emoji: "💡",
      difficulty: "hard"
    },
    {
      key: "mp_o6",
      question: "2x = 18, x = ?",
      options: ["7", "8", "9", "10"],
      answer: "9",
      emoji: "🧮",
      difficulty: "hard"
    },
    {
      key: "mp_o7",
      question: "1/3 + 1/6 = ?",
      options: ["1/2", "2/9", "1/4", "3/6"],
      answer: "1/2",
      emoji: "📐",
      difficulty: "hard"
    },
    {
      key: "mp_o8",
      question: "15² = ?",
      options: ["175", "200", "225", "250"],
      answer: "225",
      emoji: "📏",
      difficulty: "hard"
    }
  ]
};
function MathPracticePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();
  const [level, setLevel] = reactExports.useState("ilkokul");
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [selectedAnswer, setSelectedAnswer] = reactExports.useState(null);
  const [isCorrect, setIsCorrect] = reactExports.useState(null);
  const [correctCount, setCorrectCount] = reactExports.useState(0);
  const [isFinished, setIsFinished] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "math-practice");
  }, [profile == null ? void 0 : profile.studentNumber]);
  const levelProblems = problems[level];
  const currentProblem = levelProblems[currentIndex];
  const total = levelProblems.length;
  const handleLevelChange = (l) => {
    setLevel(l);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectCount(0);
    setIsFinished(false);
  };
  const handleAnswer = (option) => {
    if (selectedAnswer !== null) return;
    const correct = option === currentProblem.answer;
    setSelectedAnswer(option);
    setIsCorrect(correct);
    if (correct && profile) {
      updatePoints(profile.studentNumber, 15);
      setCorrectCount((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 >= total) {
        setIsFinished(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      }
    }, 2e3);
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectCount(0);
    setIsFinished(false);
  };
  const levelLabels = {
    okul_oncesi: "Okul Öncesi",
    ilkokul: "İlkokul",
    ortaokul: "Ortaokul"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-600 to-indigo-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "ghost",
          className: "text-white hover:bg-white/20",
          onClick: () => navigate({ to: "/home" }),
          "data-ocid": "mathpractice.back_button",
          children: [
            "← ",
            t("back")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "🔢 Matematik Alıştırmaları" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-6", "data-ocid": "mathpractice.level.tab", children: ["okul_oncesi", "ilkokul", "ortaokul"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => handleLevelChange(l),
        className: `flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-all ${level === l ? "bg-white text-blue-600 shadow-lg" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: levelLabels[l]
      },
      l
    )) }),
    isFinished ? (
      /* Summary Screen */
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-2xl p-8 text-center shadow-xl",
          "data-ocid": "mathpractice.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🏆" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-2", children: "Tebrikler!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-4", children: [
              total,
              " sorudan",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-blue-600", children: correctCount }),
              " ",
              "tanesini doğru yaptın!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-blue-600 mb-6", children: [
              "+",
              correctCount * 15,
              " puan 🎉"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleRestart,
                  className: "bg-blue-600 hover:bg-blue-700 text-white",
                  "data-ocid": "mathpractice.restart_button",
                  children: "🔄 Tekrar Oyna"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => navigate({ to: "/home" }),
                  "data-ocid": "mathpractice.home_button",
                  children: "🏠 Ana Sayfa"
                }
              )
            ] })
          ]
        }
      )
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white/80 text-sm mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            currentIndex + 1,
            "/",
            total,
            " soru tamamlandı"
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
          "data-ocid": "mathpractice.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: currentProblem.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-800", children: currentProblem.question })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: currentProblem.options.map((option, idx) => {
              let btnClass = "py-4 px-4 rounded-xl text-lg font-bold border-2 transition-all ";
              if (selectedAnswer === null) {
                btnClass += "border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-blue-50 text-gray-800";
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
                  "data-ocid": `mathpractice.option.${idx + 1}`,
                  disabled: selectedAnswer !== null,
                  children: option
                },
                option
              );
            }) }),
            selectedAnswer !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `mt-4 p-3 rounded-xl text-center font-semibold ${isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`,
                "data-ocid": isCorrect ? "mathpractice.correct_state" : "mathpractice.wrong_state",
                children: isCorrect ? "✅ Doğru! +15 puan" : `❌ Yanlış. Doğru cevap: ${currentProblem.answer}`
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
export {
  MathPracticePage as default
};
