import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, ab as getWrongAnswers, O as getSpacedRepQueue, $ as getDueSpacedItems, j as jsxRuntimeExports, B as Button, ac as clearWrongAnswers, ad as removeWrongAnswer, f as updatePoints } from "./index-DC5JVjHI.js";
function WrongAnswersPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const [answers, setAnswers] = reactExports.useState(
    () => profile ? getWrongAnswers(profile.studentNumber) : []
  );
  const [retryId, setRetryId] = reactExports.useState(null);
  const [selectedIdx, setSelectedIdx] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  if (!profile) return null;
  const srQueue = getSpacedRepQueue(profile.studentNumber);
  const dueItems = getDueSpacedItems(profile.studentNumber);
  const handleClearAll = () => {
    clearWrongAnswers(profile.studentNumber);
    setAnswers([]);
  };
  const retryAnswer = answers.find((a) => a.id === retryId);
  const handleRetryAnswer = (idx) => {
    if (!retryAnswer || answered) return;
    setSelectedIdx(idx);
    setAnswered(true);
    if (idx === retryAnswer.correctIndex) {
      removeWrongAnswer(profile.studentNumber, retryAnswer.id);
      updatePoints(profile.studentNumber, 5);
      setTimeout(() => {
        setAnswers(getWrongAnswers(profile.studentNumber));
        setRetryId(null);
        setSelectedIdx(null);
        setAnswered(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setRetryId(null);
        setSelectedIdx(null);
        setAnswered(false);
      }, 1500);
    }
  };
  if (retryId && retryAnswer) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-red-600 to-orange-600 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "wrong_answers.back_button",
          variant: "ghost",
          onClick: () => {
            setRetryId(null);
            setSelectedIdx(null);
            setAnswered(false);
          },
          className: "text-white mb-4",
          children: [
            "← ",
            t("back")
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-6 shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-2xl mb-3", children: "🔄 Tekrar Çöz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 font-bold text-lg text-center mb-6", children: retryAnswer.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: retryAnswer.choices.map((choice, i) => {
          let cls = "bg-gray-100 text-gray-800 hover:bg-gray-200";
          if (answered) {
            if (i === retryAnswer.correctIndex)
              cls = "bg-green-500 text-white";
            else if (i === selectedIdx) cls = "bg-red-500 text-white";
            else cls = "bg-gray-100 text-gray-400";
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": `wrong_answers.answer_button.${i + 1}`,
              onClick: () => handleRetryAnswer(i),
              disabled: answered,
              className: `w-full ${cls} rounded-2xl p-4 text-left font-semibold transition-all`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mr-2 opacity-60", children: [
                  ["A", "B", "C", "D"][i],
                  ")"
                ] }),
                choice
              ]
            },
            `${retryAnswer.id}-choice-${i}`
          );
        }) }),
        answered && selectedIdx === retryAnswer.correctIndex && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center text-green-600 font-black text-lg", children: "🎉 Doğru! +5 puan kazandın!" }),
        answered && selectedIdx !== retryAnswer.correctIndex && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center text-red-600 font-bold text-sm", children: [
          "❌ Yanlış. Doğru cevap:",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black", children: [
            " ",
            retryAnswer.choices[retryAnswer.correctIndex]
          ] })
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-red-600 to-orange-600 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          "data-ocid": "wrong_answers.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/home" }),
          className: "text-white",
          children: [
            "← ",
            t("back")
          ]
        }
      ),
      answers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "wrong_answers.delete_button",
          onClick: handleClearAll,
          className: "text-white/80 hover:text-white text-sm font-semibold bg-white/20 px-3 py-1 rounded-full",
          children: "🗑️ Tümünü Temizle"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "📝 ",
      t("wrong_answers_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "wrong_answers.spaced_rep_card",
        className: "bg-orange-400/90 backdrop-blur-sm rounded-2xl p-4 mb-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "🔁" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-sm mb-1", children: lang === "en" ? "Spaced Repetition" : "Aralıklı Tekrar Sistemi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl px-3 py-1.5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg leading-none", children: srQueue.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-100 text-xs", children: lang === "en" ? "Total" : "Toplam" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl px-3 py-1.5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg leading-none", children: dueItems.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-orange-100 text-xs", children: lang === "en" ? "Due Today" : "Bugün" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-100 text-xs", children: lang === "en" ? "Wrong answers appear automatically in your next quiz" : "Yanlış cevaplar sonraki quizde otomatik çıkar" }) })
            ] })
          ] })
        ] })
      }
    ),
    answers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "wrong_answers.empty_state",
        className: "bg-white/20 rounded-3xl p-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-xl", children: t("wrong_answers_empty") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-2", children: "Harika gidiyorsun!" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: answers.map((a, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `wrong_answers.item.${idx + 1}`,
        className: "bg-white rounded-3xl p-5 shadow-xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 font-bold mb-4", children: a.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: a.choices.map((choice, i) => {
            let cls = "bg-gray-50 text-gray-700";
            if (i === a.correctIndex)
              cls = "bg-green-100 text-green-800 border border-green-300";
            else if (i === a.userIndex)
              cls = "bg-red-100 text-red-800 border border-red-300";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `${cls} rounded-xl px-3 py-2 text-sm font-medium`,
                children: [
                  i === a.correctIndex && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: "✅" }),
                  i === a.userIndex && i !== a.correctIndex && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-1", children: "❌" }),
                  choice
                ]
              },
              `${a.id}-${i}`
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `wrong_answers.edit_button.${idx + 1}`,
              onClick: () => {
                setRetryId(a.id);
                setSelectedIdx(null);
                setAnswered(false);
              },
              className: "w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-2 rounded-xl hover:opacity-90 transition-all",
              children: "🔄 Tekrar Çöz"
            }
          )
        ]
      },
      a.id
    )) })
  ] }) });
}
export {
  WrongAnswersPage as default
};
