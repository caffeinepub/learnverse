import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, j as jsxRuntimeExports, B as Button, f as updatePoints } from "./index-C6v58384.js";
import { P as Progress } from "./progress-CkdQ3T6h.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-7SzfCqrq.js";
import "./index-38jj-yH_.js";
const STORAGE_KEY = "learnverse_multtable_progress";
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
const TABLE_COLORS = [
  "bg-red-400",
  "bg-orange-400",
  "bg-amber-400",
  "bg-yellow-400",
  "bg-lime-400",
  "bg-green-400",
  "bg-teal-400",
  "bg-cyan-400",
  "bg-blue-400",
  "bg-violet-400",
  "bg-purple-400",
  "bg-pink-400"
];
function MultiplicationTablePage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const level = (profile == null ? void 0 : profile.level) ?? "ilkokul";
  const maxTable = level === "okul_oncesi" ? 5 : level === "ilkokul" ? 10 : 12;
  const [progress, setProgress] = reactExports.useState(loadProgress);
  const [highlightRow, setHighlightRow] = reactExports.useState(null);
  const [highlightCol, setHighlightCol] = reactExports.useState(null);
  const [practiceNum, setPracticeNum] = reactExports.useState(0);
  const [practiceMultiplier, setPracticeMultiplier] = reactExports.useState(0);
  const [userAnswer, setUserAnswer] = reactExports.useState("");
  const [feedback, setFeedback] = reactExports.useState(null);
  const [practicePoints, setPracticePoints] = reactExports.useState(0);
  const [drillTable, setDrillTable] = reactExports.useState(1);
  const [drillIndex, setDrillIndex] = reactExports.useState(0);
  const [drillAnswer, setDrillAnswer] = reactExports.useState("");
  const [drillFeedback, setDrillFeedback] = reactExports.useState(null);
  const isRTL = lang === "ar";
  const generatePracticeQuestion = reactExports.useCallback(() => {
    const a = Math.floor(Math.random() * maxTable) + 1;
    const b = Math.floor(Math.random() * maxTable) + 1;
    setPracticeNum(a);
    setPracticeMultiplier(b);
    setUserAnswer("");
    setFeedback(null);
  }, [maxTable]);
  reactExports.useEffect(() => {
    generatePracticeQuestion();
  }, [generatePracticeQuestion]);
  function checkPracticeAnswer() {
    const correct = practiceNum * practiceMultiplier;
    const isCorrect = Number.parseInt(userAnswer) === correct;
    setFeedback(isCorrect ? "correct" : "wrong");
    const key = practiceNum;
    const prev = progress[key] ?? { correct: 0, total: 0 };
    const updated = {
      ...progress,
      [key]: {
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        total: prev.total + 1
      }
    };
    setProgress(updated);
    saveProgress(updated);
    if (isCorrect && profile) {
      updatePoints(profile.studentNumber, 5);
      setPracticePoints((p) => p + 5);
    }
  }
  function checkDrillAnswer() {
    const correct = drillTable * (drillIndex + 1);
    const isCorrect = Number.parseInt(drillAnswer) === correct;
    setDrillFeedback(isCorrect ? "correct" : "wrong");
    const prev = progress[drillTable] ?? { correct: 0, total: 0 };
    const updated = {
      ...progress,
      [drillTable]: {
        correct: isCorrect ? prev.correct + 1 : prev.correct,
        total: prev.total + 1
      }
    };
    setProgress(updated);
    saveProgress(updated);
    if (isCorrect && profile) {
      updatePoints(profile.studentNumber, 5);
      setTimeout(() => {
        setDrillAnswer("");
        setDrillFeedback(null);
        setDrillIndex((i) => (i + 1) % maxTable);
      }, 800);
    }
  }
  const tableNums = Array.from({ length: maxTable }, (_, i) => i + 1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen bg-background text-foreground",
      dir: isRTL ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-4 py-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => navigate({ to: "/home" }),
              "data-ocid": "mult.back_button",
              children: "←"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: t("multiplication_table") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "max-w-4xl mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "table", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-6", "data-ocid": "mult.tab", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "table",
                className: "flex-1",
                "data-ocid": "mult.view_tab",
                children: t("mult_view_mode")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "practice",
                className: "flex-1",
                "data-ocid": "mult.practice_tab",
                children: t("mult_practice_mode")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "drill",
                className: "flex-1",
                "data-ocid": "mult.drill_tab",
                children: t("mult_drill_mode")
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "table", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-auto rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-center text-sm select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2 bg-muted font-bold text-muted-foreground", children: "✖️" }),
                tableNums.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    scope: "col",
                    className: `p-2 font-bold cursor-pointer transition-colors ${highlightCol === c ? "bg-yellow-300 dark:bg-yellow-600 text-black" : "bg-muted text-muted-foreground"}`,
                    onClick: () => setHighlightCol(highlightCol === c ? null : c),
                    onKeyDown: (e) => e.key === "Enter" && setHighlightCol(highlightCol === c ? null : c),
                    children: c
                  },
                  c
                ))
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tableNums.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: `p-2 font-bold cursor-pointer transition-colors ${highlightRow === r ? "bg-yellow-300 dark:bg-yellow-600 text-black" : "bg-muted text-muted-foreground"}`,
                    onClick: () => setHighlightRow(highlightRow === r ? null : r),
                    onKeyDown: (e) => e.key === "Enter" && setHighlightRow(highlightRow === r ? null : r),
                    children: r
                  }
                ),
                tableNums.map((c) => {
                  const highlighted = highlightRow === r || highlightCol === c;
                  const intersection = highlightRow === r && highlightCol === c;
                  const colorIdx = (r + c - 2) % TABLE_COLORS.length;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `p-2 transition-all font-semibold rounded ${intersection ? "bg-orange-400 text-white scale-110 font-bold text-base" : highlighted ? `${TABLE_COLORS[colorIdx]} text-white` : "hover:bg-muted/80"}`,
                      children: r * c
                    },
                    c
                  );
                })
              ] }, r)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center mt-3", children: t("mult_click_hint") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3", children: tableNums.map((n) => {
              const p = progress[n];
              const pct = p && p.total > 0 ? Math.round(p.correct / p.total * 100) : 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-card border border-border rounded-lg p-3 text-center",
                  "data-ocid": `mult.progress.item.${n}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold", children: [
                      n,
                      "×"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: pct, className: "my-2 h-2" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      pct,
                      "%"
                    ] })
                  ]
                },
                n
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "practice", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-8 text-center shadow-lg w-full max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-black mb-2", children: [
                practiceNum,
                " × ",
                practiceMultiplier,
                " = ?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm opacity-80", children: t("mult_enter_answer") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center w-full max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  value: userAnswer,
                  onChange: (e) => setUserAnswer(e.target.value),
                  onKeyDown: (e) => e.key === "Enter" && !feedback && checkPracticeAnswer(),
                  className: "flex-1 border border-border rounded-lg px-4 py-3 text-2xl text-center bg-background focus:outline-none focus:ring-2 focus:ring-indigo-400",
                  placeholder: "?",
                  "data-ocid": "mult.answer_input"
                }
              ),
              !feedback ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: checkPracticeAnswer,
                  className: "px-6 py-3",
                  "data-ocid": "mult.check_button",
                  children: t("check_answer")
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: generatePracticeQuestion,
                  className: "px-6 py-3",
                  "data-ocid": "mult.next_button",
                  children: t("quiz_play_again")
                }
              )
            ] }),
            feedback === "correct" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-green-500 text-2xl font-bold animate-bounce",
                "data-ocid": "mult.correct_state",
                children: [
                  "✅ ",
                  t("quiz_correct"),
                  " +5 ⭐"
                ]
              }
            ),
            feedback === "wrong" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-red-500 text-xl font-bold",
                "data-ocid": "mult.error_state",
                children: [
                  "❌ ",
                  t("quiz_wrong"),
                  " ",
                  practiceNum,
                  " × ",
                  practiceMultiplier,
                  " =",
                  " ",
                  practiceNum * practiceMultiplier
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 text-center w-full max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: t("mult_session_points") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-black text-indigo-500", children: [
                "+",
                practicePoints,
                " ⭐"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "drill", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap gap-2 justify-center",
                "data-ocid": "mult.drill_select",
                children: tableNums.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setDrillTable(n);
                      setDrillIndex(0);
                      setDrillAnswer("");
                      setDrillFeedback(null);
                    },
                    className: `w-10 h-10 rounded-full font-bold text-sm transition-all ${drillTable === n ? "bg-indigo-600 text-white scale-110" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
                    "data-ocid": `mult.drill.button.${n}`,
                    children: n
                  },
                  n
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl p-8 text-center shadow-lg w-full max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-5xl font-black", children: [
                drillTable,
                " × ",
                drillIndex + 1,
                " = ?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm opacity-80 mt-2", children: [
                drillIndex + 1,
                " / ",
                maxTable
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center w-full max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "number",
                  value: drillAnswer,
                  onChange: (e) => setDrillAnswer(e.target.value),
                  onKeyDown: (e) => e.key === "Enter" && !drillFeedback && checkDrillAnswer(),
                  className: "flex-1 border border-border rounded-lg px-4 py-3 text-2xl text-center bg-background focus:outline-none focus:ring-2 focus:ring-teal-400",
                  placeholder: "?",
                  "data-ocid": "mult.drill_input"
                }
              ),
              !drillFeedback ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: checkDrillAnswer,
                  className: "px-6 py-3",
                  "data-ocid": "mult.drill_check_button",
                  children: t("check_answer")
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: () => {
                    setDrillAnswer("");
                    setDrillFeedback(null);
                    setDrillIndex((i) => (i + 1) % maxTable);
                  },
                  className: "px-6 py-3",
                  "data-ocid": "mult.drill_next_button",
                  children: "→"
                }
              )
            ] }),
            drillFeedback === "correct" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-green-500 text-2xl font-bold animate-bounce",
                "data-ocid": "mult.drill_correct_state",
                children: [
                  "✅ ",
                  t("quiz_correct"),
                  " +5 ⭐"
                ]
              }
            ),
            drillFeedback === "wrong" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-red-500 text-xl font-bold",
                "data-ocid": "mult.drill_error_state",
                children: [
                  "❌ ",
                  drillTable,
                  " × ",
                  drillIndex + 1,
                  " =",
                  " ",
                  drillTable * (drillIndex + 1)
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Progress,
              {
                value: drillIndex / maxTable * 100,
                className: "w-full max-w-sm h-3",
                "data-ocid": "mult.drill_progress"
              }
            )
          ] }) })
        ] }) })
      ]
    }
  );
}
export {
  MultiplicationTablePage as default
};
