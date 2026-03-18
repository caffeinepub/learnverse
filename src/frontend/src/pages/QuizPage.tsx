import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { getAdaptiveDailyQuestions } from "../data/questions";
import {
  getCurrentUser,
  getLastQuizScore,
  hasPlayedQuizToday,
  markQuizPlayedToday,
  playAudio,
  saveQuizResult,
  saveWrongAnswer,
  setLastQuizScore,
  syncToBackend,
  updateDailyGoals,
  updatePoints,
  updateStreak,
} from "../store";
import type { Question, WrongAnswer } from "../types";

export default function QuizPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [questions] = useState<Question[]>(() => {
    const lastScore = getLastQuizScore(profile?.studentNumber || "");
    return getAdaptiveDailyQuestions(profile?.level || "ilkokul", lastScore);
  });
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [timer, setTimer] = useState(60);
  const [phase, setPhase] = useState<"question" | "feedback" | "done">(
    "question",
  );
  const [feedbackCorrect, setFeedbackCorrect] = useState(false);

  const nextQuestion = useCallback(() => {
    if (current + 1 >= questions.length) {
      setPhase("done");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTimer(60);
      setPhase("question");
    }
  }, [current, questions.length]);

  useEffect(() => {
    if (phase !== "question") return;
    if (timer <= 0) {
      nextQuestion();
      return;
    }
    const t = setTimeout(() => setTimer((tt) => tt - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, phase, nextQuestion]);

  const handleAnswer = (idx: number) => {
    if (phase !== "question" || !profile) return;
    setSelected(idx);
    const isCorrect = idx === questions[current].correctIndex;
    setFeedbackCorrect(isCorrect);
    if (isCorrect) {
      setCorrect((c) => c + 1);
      playAudio("correct_answer");
    } else {
      playAudio("wrong_answer");
      const wa: WrongAnswer = {
        id: Date.now().toString(),
        studentNumber: profile.studentNumber,
        question: questions[current].text,
        choices: questions[current].choices,
        correctIndex: questions[current].correctIndex,
        userIndex: idx,
        savedAt: new Date().toISOString(),
      };
      saveWrongAnswer(wa);
    }
    setPhase("feedback");
    setTimeout(nextQuestion, 1200);
  };

  const finishQuiz = () => {
    if (!profile) return;
    const score = correct * 10;
    saveQuizResult({
      studentNumber: profile.studentNumber,
      date: new Date().toISOString(),
      score,
      total: questions.length,
      correct,
      level: profile.level,
    });
    updatePoints(profile.studentNumber, score);
    markQuizPlayedToday(profile.studentNumber);
    updateDailyGoals(profile.studentNumber, { quizDone: true });
    updateStreak(profile.studentNumber);
    setLastQuizScore(
      profile.studentNumber,
      Math.round((correct / questions.length) * 100),
    );
    syncToBackend(profile.studentNumber);
    playAudio("game_end");
    navigate({ to: "/home" });
  };

  if (!profile) return null;

  if (hasPlayedQuizToday(profile.studentNumber)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl">
          <div className="text-6xl mb-4">🌙</div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">
            Bugünkü Quiz Tamamlandı!
          </h2>
          <p className="text-gray-600 mb-6">
            Yarın yeni sorularla geri dön. Her gün 1 quiz hakkın var!
          </p>
          <Button
            data-ocid="quiz.home_button"
            onClick={() => navigate({ to: "/home" })}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl"
          >
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const score = correct * 10;
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full shadow-2xl">
          <div className="text-6xl mb-4">
            {correct >= 7 ? "🎉" : correct >= 5 ? "😊" : "💪"}
          </div>
          <h2 className="text-3xl font-black text-gray-800 mb-2">Tebrikler!</h2>
          <p className="text-gray-600 mb-4">
            {questions.length} sorudan {correct} doğru
          </p>
          <div className="text-4xl font-black text-purple-600 mb-6">
            +{score} Puan
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
              style={{ width: `${(correct / questions.length) * 100}%` }}
            />
          </div>
          <Button
            data-ocid="quiz.finish_button"
            onClick={finishQuiz}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl"
          >
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-4">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Button
            data-ocid="quiz.back_button"
            variant="ghost"
            onClick={() => navigate({ to: "/home" })}
            className="text-white"
          >
            ←
          </Button>
          <div className="text-white font-bold">
            {current + 1} / {questions.length}
          </div>
          <div
            className={`text-white font-bold px-3 py-1 rounded-full ${
              timer <= 10 ? "bg-red-500 animate-pulse" : "bg-white/20"
            }`}
          >
            ⏱ {timer}s
          </div>
        </div>
        <div className="bg-white/20 rounded-full h-2 mb-6">
          <div
            className="bg-white h-2 rounded-full transition-all"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-xl">
          <p className="text-gray-800 font-bold text-lg text-center leading-relaxed">
            {q.text}
          </p>
        </div>
        <div className="space-y-3">
          {q.choices.map((choice, i) => {
            let bg = "bg-white/20 text-white hover:bg-white/30";
            if (phase === "feedback") {
              if (i === q.correctIndex) bg = "bg-green-500 text-white";
              else if (i === selected && !feedbackCorrect)
                bg = "bg-red-500 text-white";
              else bg = "bg-white/10 text-white/50";
            }
            return (
              <button
                type="button"
                key={choice}
                data-ocid={`quiz.answer_button.${i + 1}`}
                onClick={() => handleAnswer(i)}
                disabled={phase === "feedback"}
                className={`w-full ${bg} rounded-2xl p-4 text-left font-semibold transition-all text-base`}
              >
                <span className="mr-2 opacity-60">
                  {["A", "B", "C", "D"][i]})
                </span>{" "}
                {choice}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
