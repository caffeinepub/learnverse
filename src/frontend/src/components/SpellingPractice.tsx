import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

export interface SpellingWord {
  key: string;
  word: string;
  emoji: string;
  hint?: string;
}

interface SpellingPracticeProps {
  words: SpellingWord[];
  onClose: () => void;
  onComplete?: (score: number, total: number, points: number) => void;
  lang?: string;
}

export default function SpellingPractice({
  words,
  onClose,
  onComplete,
  lang = "tr",
}: SpellingPracticeProps) {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isEn = lang === "en";
  const word = words[index];
  const total = words.length;
  const earnedPoints = score * 10;

  const handleSubmit = () => {
    if (submitted || !input.trim()) return;
    const correct = input.trim().toLowerCase() === word.word.toLowerCase();
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (index + 1 >= total) {
      const finalScore = isCorrect ? score : score;
      setFinished(true);
      onComplete?.(finalScore, total, finalScore * 10);
    } else {
      setIndex((i) => i + 1);
      setInput("");
      setSubmitted(false);
      setIsCorrect(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setInput("");
    setSubmitted(false);
    setIsCorrect(false);
    setScore(0);
    setFinished(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  if (finished) {
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl"
        >
          <div className="text-6xl mb-4">
            {pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"}
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">
            {isEn ? "Practice Complete!" : "Alıştırma Bitti!"}
          </h2>
          <p className="text-gray-500 mb-2">
            {isEn
              ? `You got ${score} out of ${total} correct`
              : `${total} kelimeden ${score} tanesini doğru yazdınız`}
          </p>
          <p className="text-green-600 font-bold mb-6">
            +{earnedPoints} {isEn ? "pts" : "puan"} 🎉
          </p>
          <div className="bg-gray-100 rounded-2xl p-4 mb-6">
            <div className="text-4xl font-black text-violet-600 mb-1">
              {pct}%
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-violet-400 h-3 rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              data-ocid="spelling.restart_button"
              onClick={handleRestart}
              className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 rounded-2xl transition-all"
            >
              {isEn ? "🔄 Try Again" : "🔄 Tekrar"}
            </button>
            <button
              type="button"
              data-ocid="spelling.close_button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-all"
            >
              {isEn ? "✕ Close" : "✕ Kapat"}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-violet-700 to-purple-800 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button
          type="button"
          data-ocid="spelling.close_button"
          onClick={onClose}
          className="text-white/70 hover:text-white font-bold text-sm"
        >
          ← {isEn ? "Back" : "Geri"}
        </button>
        <span className="text-white font-bold text-sm">
          {index + 1} / {total}
        </span>
      </div>

      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      <h2 className="text-white font-black text-xl text-center mb-1">
        {isEn ? "Spell the word" : "Kelimeyi yaz"}
      </h2>
      <p className="text-white/60 text-sm text-center mb-6">
        {isEn ? "Type what you see below" : "Aşağıdaki resme göre yaz"}
      </p>

      {/* Emoji display */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <motion.div
          key={word.key}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-9xl select-none"
        >
          {word.emoji}
        </motion.div>

        {word.hint && (
          <p className="text-white/50 text-xs">
            {isEn ? "Hint:" : "İpucu:"} {word.hint}
          </p>
        )}

        {/* Input */}
        <div className="w-full max-w-xs">
          <input
            ref={inputRef}
            type="text"
            data-ocid="spelling.input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (!submitted) handleSubmit();
                else handleNext();
              }
            }}
            disabled={submitted}
            placeholder={isEn ? "Type the word..." : "Kelimeyi yaz..."}
            className={`w-full rounded-2xl px-5 py-4 text-center text-xl font-black outline-none transition-all ${
              submitted
                ? isCorrect
                  ? "bg-green-100 text-green-700 border-4 border-green-400"
                  : "bg-red-100 text-red-700 border-4 border-red-400"
                : "bg-white/20 text-white placeholder-white/40 border-2 border-white/30 focus:border-white"
            }`}
          />
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-center rounded-2xl px-6 py-4 ${
                isCorrect ? "bg-green-400/30" : "bg-red-400/30"
              }`}
              data-ocid={
                isCorrect ? "spelling.success_state" : "spelling.error_state"
              }
            >
              {isCorrect ? (
                <>
                  <div className="text-3xl mb-1">✅</div>
                  <div className="text-white font-black text-lg">
                    {isEn ? "Correct! +10 pts" : "Doğru! +10 puan"}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-3xl mb-1">❌</div>
                  <div className="text-white font-black text-base">
                    {isEn ? "Correct answer:" : "Doğru cevap:"}
                  </div>
                  <div className="text-white font-black text-2xl mt-1">
                    {word.word}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        {!submitted ? (
          <button
            type="button"
            data-ocid="spelling.submit_button"
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="w-full max-w-xs bg-white text-violet-700 font-black py-4 rounded-2xl text-lg disabled:opacity-40 transition-all hover:bg-white/90"
          >
            {isEn ? "Check ✓" : "Kontrol Et ✓"}
          </button>
        ) : (
          <button
            type="button"
            data-ocid="spelling.primary_button"
            onClick={handleNext}
            className="w-full max-w-xs bg-white text-violet-700 font-black py-4 rounded-2xl text-lg transition-all hover:bg-white/90"
          >
            {index + 1 >= total
              ? isEn
                ? "Finish 🎉"
                : "Bitir 🎉"
              : isEn
                ? "Next →"
                : "Sonraki →"}
          </button>
        )}
      </div>

      {/* Score bar */}
      <div className="flex justify-center gap-1 mt-4 flex-wrap">
        {words.map((w, i) => (
          <div
            key={w.key}
            className={`w-3 h-3 rounded-full ${
              i < index
                ? "bg-white/50"
                : i === index
                  ? "bg-white"
                  : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
