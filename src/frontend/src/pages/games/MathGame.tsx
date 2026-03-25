import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  getCurrentUser,
  playAudio,
  saveGameResult,
  syncToBackend,
  updatePoints,
} from "../../store";

function generateProblem(
  level: string,
  boost: number,
): { question: string; answer: number } {
  if (level === "okul_oncesi") {
    // Preschool: 1-10 base, boost expands to 1-15
    const max = 5 + boost * 3;
    const a = Math.floor(Math.random() * max) + 1;
    const b = Math.floor(Math.random() * max) + 1;
    return { question: `${a} + ${b} = ?`, answer: a + b };
  }
  if (level === "ilkokul") {
    // Primary: +/- with 1-50 base, boost adds *, bigger numbers
    const maxA = 20 + boost * 10;
    const maxB = 10 + boost * 5;
    const useMultiply = boost >= 2;
    const ops = useMultiply ? ["+", "-", "×"] : ["+", "-"];
    const op = ops[Math.floor(Math.random() * ops.length)];
    if (op === "×") {
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      return { question: `${a} × ${b} = ?`, answer: a * b };
    }
    let a = Math.floor(Math.random() * maxA) + 1;
    let b = Math.floor(Math.random() * maxB) + 1;
    if (op === "-" && b > a) [a, b] = [b, a];
    return {
      question: `${a} ${op} ${b} = ?`,
      answer: op === "+" ? a + b : a - b,
    };
  }
  // Middle school: includes division, boost increases ranges
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
    answer: op === "+" ? a + b : a - b,
  };
}

export default function MathGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const level = profile?.level || "ilkokul";

  // Adaptive difficulty state
  const [diffBoost, setDiffBoost] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);

  const [currentProblem, setCurrentProblem] = useState(() =>
    generateProblem(level, 0),
  );
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [timer, setTimer] = useState(30);
  const [phase, setPhase] = useState<"question" | "feedback" | "done">(
    "question",
  );
  const [feedbackOk, setFeedbackOk] = useState(false);

  // Play game start sound on mount
  useEffect(() => {
    playAudio("game_start");
  }, []);

  const nextProblem = useCallback(
    (nextBoost: number) => {
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
    [current, level],
  );

  useEffect(() => {
    if (phase !== "question") return;
    if (timer <= 0) {
      const nb =
        consecutiveCorrect >= 3 ? Math.min(diffBoost + 1, 3) : diffBoost;
      setConsecutiveCorrect(0);
      nextProblem(nb);
      return;
    }
    const t = setTimeout(() => setTimer((tt) => tt - 1), 1000);
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
      // After 3 consecutive correct, boost difficulty (max boost level 3)
      const newBoost = newConsec >= 3 ? Math.min(diffBoost + 1, 3) : diffBoost;
      if (newBoost > diffBoost) {
        setDiffBoost(newBoost);
        setConsecutiveCorrect(0);
      }
      setFeedbackOk(true);
      setPhase("feedback");
      setTimeout(() => nextProblem(newBoost), 1000);
    } else {
      playAudio("wrong_answer");
      setConsecutiveCorrect(0);
      setFeedbackOk(false);
      setPhase("feedback");
      setTimeout(() => nextProblem(diffBoost), 1000);
    }
  };

  const finish = () => {
    if (!profile) return;
    const score = correct * 10;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "math",
      score,
      date: new Date().toISOString(),
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };

  const diffLabel =
    diffBoost === 0
      ? ""
      : diffBoost === 1
        ? "⬆️"
        : diffBoost === 2
          ? "⬆️⬆️"
          : "🔥";

  if (phase === "done")
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🧠</div>
          <h2 className="text-2xl font-black mb-2">{correct}/10 Doğru!</h2>
          {diffBoost > 0 && (
            <p className="text-sm text-green-600 mb-2">
              🎯 Zorluk seviyesi arttı {diffLabel}
            </p>
          )}
          <div className="text-4xl font-black text-green-600 my-4">
            +{correct * 10} Puan
          </div>
          <Button
            data-ocid="math.finish_button"
            onClick={finish}
            className="w-full bg-green-500 text-white"
          >
            Bitir
          </Button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-4">
      <div className="flex items-center justify-between mb-4">
        <Button
          data-ocid="math.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/games" })}
          className="text-white"
        >
          ←
        </Button>
        <div className="text-white font-bold text-center">
          {current + 1}/10
          {diffBoost > 0 && (
            <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {diffLabel}
            </span>
          )}
        </div>
        <div
          className={`text-white font-bold px-3 py-1 rounded-full ${
            timer <= 5 ? "bg-red-500 animate-pulse" : "bg-white/20"
          }`}
        >
          ⏱ {timer}s
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <div
          className={`bg-white rounded-3xl p-8 mb-6 text-center shadow-xl ${
            phase === "feedback"
              ? feedbackOk
                ? "border-4 border-green-500"
                : "border-4 border-red-500"
              : ""
          }`}
        >
          <p className="text-4xl font-black text-gray-800">
            {currentProblem.question}
          </p>
          {phase === "feedback" && (
            <p
              className={`text-lg mt-2 font-bold ${
                feedbackOk ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedbackOk ? "✅ Doğru!" : `❌ Cevap: ${currentProblem.answer}`}
            </p>
          )}
        </div>
        <input
          data-ocid="math.answer_input"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && input && submit()}
          disabled={phase === "feedback"}
          className="w-full bg-white/20 text-white text-center text-2xl font-bold rounded-2xl p-4 border-0 outline-none placeholder-white/50 mb-4"
          placeholder="Cevabını yaz..."
        />
        <Button
          data-ocid="math.submit_button"
          onClick={submit}
          disabled={!input || phase === "feedback"}
          className="w-full bg-white text-green-600 font-bold py-4 rounded-2xl text-lg"
        >
          Kontrol Et
        </Button>
      </div>
    </div>
  );
}
