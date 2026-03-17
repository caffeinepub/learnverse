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

function generateProblem(level: string): { question: string; answer: number } {
  if (level === "okul_oncesi") {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    return { question: `${a} + ${b} = ?`, answer: a + b };
  }
  if (level === "ilkokul") {
    const ops = ["+", "-"];
    const op = ops[Math.floor(Math.random() * 2)];
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    if (op === "-" && b > a) [a, b] = [b, a];
    return {
      question: `${a} ${op} ${b} = ?`,
      answer: op === "+" ? a + b : a - b,
    };
  }
  const ops = ["+", "-", "×"];
  const op = ops[Math.floor(Math.random() * 3)];
  let a = Math.floor(Math.random() * 50) + 1;
  let b = Math.floor(Math.random() * 20) + 1;
  if (op === "-" && b > a) [a, b] = [b, a];
  let ans = op === "+" ? a + b : op === "-" ? a - b : a * b;
  if (op === "×") {
    a = Math.floor(Math.random() * 12) + 1;
    b = Math.floor(Math.random() * 12) + 1;
    ans = a * b;
  }
  return { question: `${a} ${op} ${b} = ?`, answer: ans };
}

export default function MathGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const level = profile?.level || "ilkokul";
  const [problems] = useState(() =>
    Array.from({ length: 10 }, () => generateProblem(level)),
  );
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [timer, setTimer] = useState(30);
  const [phase, setPhase] = useState<"question" | "feedback" | "done">(
    "question",
  );
  const [feedbackOk, setFeedbackOk] = useState(false);

  const nextProblem = useCallback(() => {
    if (current + 1 >= problems.length) {
      setPhase("done");
      return;
    }
    setCurrent((c) => c + 1);
    setInput("");
    setTimer(30);
    setPhase("question");
  }, [current, problems.length]);

  useEffect(() => {
    if (phase !== "question") return;
    if (timer <= 0) {
      nextProblem();
      return;
    }
    const t = setTimeout(() => setTimer((tt) => tt - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, phase, nextProblem]);

  const submit = () => {
    const num = Number.parseInt(input);
    const isOk = num === problems[current].answer;
    if (isOk) {
      setCorrect((c) => c + 1);
      playAudio("correct_answer");
    } else playAudio("wrong_answer");
    setFeedbackOk(isOk);
    setPhase("feedback");
    setTimeout(nextProblem, 1000);
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

  if (phase === "done")
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🧠</div>
          <h2 className="text-2xl font-black mb-2">{correct}/10 Doğru!</h2>
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
        <div className="text-white font-bold">{current + 1}/10</div>
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
            {problems[current].question}
          </p>
          {phase === "feedback" && (
            <p
              className={`text-lg mt-2 font-bold ${
                feedbackOk ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedbackOk
                ? "✅ Doğru!"
                : `❌ Cevap: ${problems[current].answer}`}
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
