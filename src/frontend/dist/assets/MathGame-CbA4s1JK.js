import { u as useNavigate, d as getCurrentUser, r as reactExports, a2 as playAudio, j as jsxRuntimeExports, B as Button, aj as saveGameResult, f as updatePoints, aa as syncToBackend } from "./index-BMS1Ic9U.js";
function generateProblem(level, boost) {
  if (level === "okul_oncesi") {
    const max = 5 + boost * 3;
    const a2 = Math.floor(Math.random() * max) + 1;
    const b2 = Math.floor(Math.random() * max) + 1;
    return { question: `${a2} + ${b2} = ?`, answer: a2 + b2 };
  }
  if (level === "ilkokul") {
    const maxA2 = 20 + boost * 10;
    const maxB = 10 + boost * 5;
    const useMultiply = boost >= 2;
    const ops2 = useMultiply ? ["+", "-", "×"] : ["+", "-"];
    const op2 = ops2[Math.floor(Math.random() * ops2.length)];
    if (op2 === "×") {
      const a3 = Math.floor(Math.random() * 10) + 1;
      const b3 = Math.floor(Math.random() * 10) + 1;
      return { question: `${a3} × ${b3} = ?`, answer: a3 * b3 };
    }
    let a2 = Math.floor(Math.random() * maxA2) + 1;
    let b2 = Math.floor(Math.random() * maxB) + 1;
    if (op2 === "-" && b2 > a2) [a2, b2] = [b2, a2];
    return {
      question: `${a2} ${op2} ${b2} = ?`,
      answer: op2 === "+" ? a2 + b2 : a2 - b2
    };
  }
  const maxA = 50 + boost * 20;
  const ops = ["+", "-", "×", "÷"];
  const op = ops[Math.floor(Math.random() * 4)];
  if (op === "÷") {
    const b2 = Math.floor(Math.random() * (10 + boost * 2)) + 1;
    const ans2 = Math.floor(Math.random() * (12 + boost * 3)) + 1;
    const a2 = b2 * ans2;
    return { question: `${a2} ÷ ${b2} = ?`, answer: ans2 };
  }
  let a = Math.floor(Math.random() * maxA) + 1;
  let b = Math.floor(Math.random() * 20) + 1;
  if (op === "-" && b > a) [a, b] = [b, a];
  if (op === "×") {
    a = Math.floor(Math.random() * (12 + boost)) + 1;
    b = Math.floor(Math.random() * (12 + boost)) + 1;
    return { question: `${a} × ${b} = ?`, answer: a * b };
  }
  return {
    question: `${a} ${op} ${b} = ?`,
    answer: op === "+" ? a + b : a - b
  };
}
function MathGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const level = (profile == null ? void 0 : profile.level) || "ilkokul";
  const [diffBoost, setDiffBoost] = reactExports.useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = reactExports.useState(0);
  const [currentProblem, setCurrentProblem] = reactExports.useState(
    () => generateProblem(level, 0)
  );
  const [current, setCurrent] = reactExports.useState(0);
  const [input, setInput] = reactExports.useState("");
  const [correct, setCorrect] = reactExports.useState(0);
  const [timer, setTimer] = reactExports.useState(30);
  const [phase, setPhase] = reactExports.useState(
    "question"
  );
  const [feedbackOk, setFeedbackOk] = reactExports.useState(false);
  reactExports.useEffect(() => {
    playAudio("game_start");
  }, []);
  const nextProblem = reactExports.useCallback(
    (nextBoost) => {
      if (current + 1 >= 10) {
        setPhase("done");
        playAudio("game_end");
        return;
      }
      setCurrent((c) => c + 1);
      setCurrentProblem(generateProblem(level, nextBoost));
      setInput("");
      setTimer(30);
      setPhase("question");
    },
    [current, level]
  );
  reactExports.useEffect(() => {
    if (phase !== "question") return;
    if (timer <= 0) {
      const nb = consecutiveCorrect >= 3 ? Math.min(diffBoost + 1, 3) : diffBoost;
      setConsecutiveCorrect(0);
      nextProblem(nb);
      return;
    }
    const t = setTimeout(() => setTimer((tt) => tt - 1), 1e3);
    return () => clearTimeout(t);
  }, [timer, phase, nextProblem, consecutiveCorrect, diffBoost]);
  const submit = () => {
    const num = Number.parseInt(input);
    const isOk = num === currentProblem.answer;
    if (isOk) {
      setCorrect((c) => c + 1);
      playAudio("correct_answer");
      const newConsec = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsec);
      const newBoost = newConsec >= 3 ? Math.min(diffBoost + 1, 3) : diffBoost;
      if (newBoost > diffBoost) {
        setDiffBoost(newBoost);
        setConsecutiveCorrect(0);
      }
      setFeedbackOk(true);
      setPhase("feedback");
      setTimeout(() => nextProblem(newBoost), 1e3);
    } else {
      playAudio("wrong_answer");
      setConsecutiveCorrect(0);
      setFeedbackOk(false);
      setPhase("feedback");
      setTimeout(() => nextProblem(diffBoost), 1e3);
    }
  };
  const finish = () => {
    if (!profile) return;
    const score = correct * 10;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "math",
      score,
      date: (/* @__PURE__ */ new Date()).toISOString()
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };
  const diffLabel = diffBoost === 0 ? "" : diffBoost === 1 ? "⬆️" : diffBoost === 2 ? "⬆️⬆️" : "🔥";
  if (phase === "done")
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🧠" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-black mb-2", children: [
        correct,
        "/10 Doğru!"
      ] }),
      diffBoost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 mb-2", children: [
        "🎯 Zorluk seviyesi arttı ",
        diffLabel
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-green-600 my-4", children: [
        "+",
        correct * 10,
        " Puan"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "math.finish_button",
          onClick: finish,
          className: "w-full bg-green-500 text-white",
          children: "Bitir"
        }
      )
    ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "math.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/games" }),
          className: "text-white",
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold text-center", children: [
        current + 1,
        "/10",
        diffBoost > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full", children: diffLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `text-white font-bold px-3 py-1 rounded-full ${timer <= 5 ? "bg-red-500 animate-pulse" : "bg-white/20"}`,
          children: [
            "⏱ ",
            timer,
            "s"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xs mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-3xl p-8 mb-6 text-center shadow-xl ${phase === "feedback" ? feedbackOk ? "border-4 border-green-500" : "border-4 border-red-500" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-black text-gray-800", children: currentProblem.question }),
            phase === "feedback" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-lg mt-2 font-bold ${feedbackOk ? "text-green-600" : "text-red-600"}`,
                children: feedbackOk ? "✅ Doğru!" : `❌ Cevap: ${currentProblem.answer}`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          "data-ocid": "math.answer_input",
          type: "number",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && input && submit(),
          disabled: phase === "feedback",
          className: "w-full bg-white/20 text-white text-center text-2xl font-bold rounded-2xl p-4 border-0 outline-none placeholder-white/50 mb-4",
          placeholder: "Cevabını yaz..."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "math.submit_button",
          onClick: submit,
          disabled: !input || phase === "feedback",
          className: "w-full bg-white text-green-600 font-bold py-4 rounded-2xl text-lg",
          children: "Kontrol Et"
        }
      )
    ] })
  ] });
}
export {
  MathGame as default
};
