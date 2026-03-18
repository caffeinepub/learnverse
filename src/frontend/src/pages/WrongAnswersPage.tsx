import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  clearWrongAnswers,
  getCurrentUser,
  getWrongAnswers,
  removeWrongAnswer,
  updatePoints,
} from "../store";
import type { WrongAnswer } from "../types";

export default function WrongAnswersPage() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [answers, setAnswers] = useState<WrongAnswer[]>(() =>
    profile ? getWrongAnswers(profile.studentNumber) : [],
  );
  const [retryId, setRetryId] = useState<string | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  if (!profile) return null;

  const handleClearAll = () => {
    clearWrongAnswers(profile.studentNumber);
    setAnswers([]);
  };

  const retryAnswer = answers.find((a) => a.id === retryId);

  const handleRetryAnswer = (idx: number) => {
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

  // Retry mode
  if (retryId && retryAnswer) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-600 p-4">
        <div className="max-w-sm mx-auto">
          <Button
            data-ocid="wrong_answers.back_button"
            variant="ghost"
            onClick={() => {
              setRetryId(null);
              setSelectedIdx(null);
              setAnswered(false);
            }}
            className="text-white mb-4"
          >
            ← Geri
          </Button>
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <div className="text-center text-2xl mb-3">🔄 Tekrar Çöz</div>
            <p className="text-gray-800 font-bold text-lg text-center mb-6">
              {retryAnswer.question}
            </p>
            <div className="space-y-3">
              {retryAnswer.choices.map((choice, i) => {
                let cls = "bg-gray-100 text-gray-800 hover:bg-gray-200";
                if (answered) {
                  if (i === retryAnswer.correctIndex)
                    cls = "bg-green-500 text-white";
                  else if (i === selectedIdx) cls = "bg-red-500 text-white";
                  else cls = "bg-gray-100 text-gray-400";
                }
                return (
                  <button
                    type="button"
                    key={`${retryAnswer.id}-choice-${i}`}
                    data-ocid={`wrong_answers.answer_button.${i + 1}`}
                    onClick={() => handleRetryAnswer(i)}
                    disabled={answered}
                    className={`w-full ${cls} rounded-2xl p-4 text-left font-semibold transition-all`}
                  >
                    <span className="mr-2 opacity-60">
                      {["A", "B", "C", "D"][i]})
                    </span>
                    {choice}
                  </button>
                );
              })}
            </div>
            {answered && selectedIdx === retryAnswer.correctIndex && (
              <div className="mt-4 text-center text-green-600 font-black text-lg">
                🎉 Doğru! +5 puan kazandın!
              </div>
            )}
            {answered && selectedIdx !== retryAnswer.correctIndex && (
              <div className="mt-4 text-center text-red-600 font-bold text-sm">
                ❌ Yanlış. Doğru cevap:
                <span className="font-black">
                  {" "}
                  {retryAnswer.choices[retryAnswer.correctIndex]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-600 p-4">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Button
            data-ocid="wrong_answers.back_button"
            variant="ghost"
            onClick={() => navigate({ to: "/home" })}
            className="text-white"
          >
            ← Geri
          </Button>
          {answers.length > 0 && (
            <button
              type="button"
              data-ocid="wrong_answers.delete_button"
              onClick={handleClearAll}
              className="text-white/80 hover:text-white text-sm font-semibold bg-white/20 px-3 py-1 rounded-full"
            >
              🗑️ Tümünü Temizle
            </button>
          )}
        </div>
        <h1 className="text-3xl font-black text-white mb-6">
          📝 Yanlış Cevaplarım
        </h1>

        {answers.length === 0 ? (
          <div
            data-ocid="wrong_answers.empty_state"
            className="bg-white/20 rounded-3xl p-8 text-center"
          >
            <div className="text-5xl mb-3">🎉</div>
            <div className="text-white font-black text-xl">
              Henüz yanlış cevabın yok!
            </div>
            <div className="text-white/70 text-sm mt-2">Harika gidiyorsun!</div>
          </div>
        ) : (
          <div className="space-y-4">
            {answers.map((a, idx) => (
              <div
                key={a.id}
                data-ocid={`wrong_answers.item.${idx + 1}`}
                className="bg-white rounded-3xl p-5 shadow-xl"
              >
                <p className="text-gray-800 font-bold mb-4">{a.question}</p>
                <div className="space-y-2 mb-4">
                  {a.choices.map((choice, i) => {
                    let cls = "bg-gray-50 text-gray-700";
                    if (i === a.correctIndex)
                      cls =
                        "bg-green-100 text-green-800 border border-green-300";
                    else if (i === a.userIndex)
                      cls = "bg-red-100 text-red-800 border border-red-300";
                    return (
                      <div
                        key={`${a.id}-${i}`}
                        className={`${cls} rounded-xl px-3 py-2 text-sm font-medium`}
                      >
                        {i === a.correctIndex && (
                          <span className="mr-1">✅</span>
                        )}
                        {i === a.userIndex && i !== a.correctIndex && (
                          <span className="mr-1">❌</span>
                        )}
                        {choice}
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  data-ocid={`wrong_answers.edit_button.${idx + 1}`}
                  onClick={() => {
                    setRetryId(a.id);
                    setSelectedIdx(null);
                    setAnswered(false);
                  }}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-2 rounded-xl hover:opacity-90 transition-all"
                >
                  🔄 Tekrar Çöz
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
