import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export interface FlashCard {
  key: string;
  front: string;
  back: string;
  emoji?: string;
}

interface FlashcardModeProps {
  cards: FlashCard[];
  onClose: () => void;
  onComplete?: (known: number, total: number) => void;
  lang?: string;
  accentColor?: string; // tailwind class for bg
}

export default function FlashcardMode({
  cards,
  onClose,
  onComplete,
  lang = "tr",
  accentColor = "from-indigo-600 to-purple-600",
}: FlashcardModeProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);

  const isEn = lang === "en";
  const card = cards[index];
  const total = cards.length;
  const knownCount = Object.values(results).filter(Boolean).length;

  const handleAnswer = (knew: boolean) => {
    const newResults = { ...results, [card.key]: knew };
    setResults(newResults);
    if (index + 1 >= total) {
      setFinished(true);
      const knownFinal = Object.values(newResults).filter(Boolean).length;
      onComplete?.(knownFinal, total);
    } else {
      setFlipped(false);
      setTimeout(() => setIndex((i) => i + 1), 150);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setFlipped(false);
    setResults({});
    setFinished(false);
  };

  if (finished) {
    const pct = total > 0 ? Math.round((knownCount / total) * 100) : 0;
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
            {isEn ? "Session Complete!" : "Tur Tamamlandı!"}
          </h2>
          <p className="text-gray-500 mb-6">
            {isEn
              ? `You knew ${knownCount} out of ${total} cards`
              : `${total} karttan ${knownCount} tanesini bildiniz`}
          </p>
          <div className="bg-gray-100 rounded-2xl p-4 mb-6">
            <div className="text-4xl font-black text-indigo-600 mb-1">
              {pct}%
            </div>
            <div className="text-sm text-gray-500">
              {isEn ? "Correct" : "Doğru"}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div
                className="bg-green-400 h-3 rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              data-ocid="flashcard.restart_button"
              onClick={handleRestart}
              className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-2xl transition-all"
            >
              {isEn ? "🔄 Restart" : "🔄 Tekrar"}
            </button>
            <button
              type="button"
              data-ocid="flashcard.close_button"
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
    <div className="fixed inset-0 z-50 flex flex-col bg-black/60 p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white font-bold text-sm">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          data-ocid="flashcard.close_button"
          onClick={onClose}
          className="text-white/70 hover:text-white font-bold text-xl"
        >
          ✕
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-white/20 rounded-full h-2 mb-6">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${card.key}-${flipped}`}
            initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setFlipped((f) => !f)}
            className={`w-full max-w-sm bg-gradient-to-br ${accentColor} rounded-3xl p-8 shadow-2xl cursor-pointer select-none min-h-[240px] flex flex-col items-center justify-center`}
            data-ocid="flashcard.canvas_target"
          >
            {!flipped ? (
              <>
                {card.emoji && (
                  <div className="text-6xl mb-4">{card.emoji}</div>
                )}
                <div className="text-white font-black text-2xl text-center leading-snug">
                  {card.front}
                </div>
                <div className="text-white/60 text-sm mt-4">
                  {isEn ? "Tap to reveal" : "Çevirmek için dokun"}
                </div>
              </>
            ) : (
              <>
                <div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-3">
                  {isEn ? "Answer" : "Cevap"}
                </div>
                <div className="text-white font-bold text-lg text-center leading-relaxed">
                  {card.back}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {flipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 mt-6 w-full max-w-sm"
          >
            <button
              type="button"
              data-ocid="flashcard.secondary_button"
              onClick={() => handleAnswer(false)}
              className="flex-1 bg-red-400/80 hover:bg-red-500 text-white font-black py-4 rounded-2xl transition-all text-sm"
            >
              {isEn ? "❌ Didn't know" : "❌ Bilemedim"}
            </button>
            <button
              type="button"
              data-ocid="flashcard.primary_button"
              onClick={() => handleAnswer(true)}
              className="flex-1 bg-green-400/80 hover:bg-green-500 text-white font-black py-4 rounded-2xl transition-all text-sm"
            >
              {isEn ? "✅ Knew it" : "✅ Bildim"}
            </button>
          </motion.div>
        )}

        {!flipped && (
          <div className="flex gap-3 mt-6 w-full max-w-sm">
            <button
              type="button"
              data-ocid="flashcard.pagination_prev"
              disabled={index === 0}
              onClick={() => {
                setFlipped(false);
                setIndex((i) => i - 1);
              }}
              className="flex-1 bg-white/20 disabled:opacity-30 hover:bg-white/30 text-white font-bold py-3 rounded-2xl transition-all"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              className="flex-[3] bg-white/30 hover:bg-white/40 text-white font-bold py-3 rounded-2xl transition-all text-sm"
            >
              {isEn ? "Show Answer" : "Cevabı Göster"}
            </button>
            <button
              type="button"
              data-ocid="flashcard.pagination_next"
              disabled={index >= total - 1}
              onClick={() => {
                setFlipped(false);
                setIndex((i) => i + 1);
              }}
              className="flex-1 bg-white/20 disabled:opacity-30 hover:bg-white/30 text-white font-bold py-3 rounded-2xl transition-all"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-1 flex-wrap">
        {cards.map((c, i) => {
          const r = results[c.key];
          return (
            <div
              key={c.key}
              className={`w-3 h-3 rounded-full ${
                r === true
                  ? "bg-green-400"
                  : r === false
                    ? "bg-red-400"
                    : i === index
                      ? "bg-white"
                      : "bg-white/30"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
