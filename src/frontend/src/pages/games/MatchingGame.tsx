import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  getCurrentUser,
  playAudio,
  saveGameResult,
  syncToBackend,
  updatePoints,
} from "../../store";

const PAIR_SETS = [
  {
    label: "Hayvanlar",
    pairs: [
      { emoji: "🐯", word: "Kaplan" },
      { emoji: "🦁", word: "Aslan" },
      { emoji: "🐸", word: "Kurbağa" },
      { emoji: "🦊", word: "Tilki" },
      { emoji: "🐧", word: "Penguen" },
      { emoji: "🦋", word: "Kelebek" },
    ],
  },
  {
    label: "Meyveler",
    pairs: [
      { emoji: "🍎", word: "Elma" },
      { emoji: "🍌", word: "Muz" },
      { emoji: "🍓", word: "Çilek" },
      { emoji: "🍇", word: "Üzüm" },
      { emoji: "🍉", word: "Karpuz" },
      { emoji: "🥝", word: "Kivi" },
    ],
  },
  {
    label: "Taşıtlar",
    pairs: [
      { emoji: "🚗", word: "Araba" },
      { emoji: "✈️", word: "Uçak" },
      { emoji: "🚂", word: "Tren" },
      { emoji: "🚢", word: "Gemi" },
      { emoji: "🚁", word: "Helikopter" },
      { emoji: "🚲", word: "Bisiklet" },
    ],
  },
  {
    label: "Meslekler",
    pairs: [
      { emoji: "👨‍⚕️", word: "Doktor" },
      { emoji: "👨‍🍳", word: "Aşçı" },
      { emoji: "👨‍🏫", word: "Öğretmen" },
      { emoji: "👨‍🚒", word: "İtfaiyeci" },
      { emoji: "👨‍✈️", word: "Pilot" },
      { emoji: "👨‍🔬", word: "Bilim İnsanı" },
    ],
  },
  {
    label: "Spor",
    pairs: [
      { emoji: "⚽", word: "Futbol" },
      { emoji: "🏀", word: "Basketbol" },
      { emoji: "🎾", word: "Tenis" },
      { emoji: "🏊", word: "Yüzme" },
      { emoji: "🚴", word: "Bisiklet" },
      { emoji: "🥊", word: "Boks" },
    ],
  },
  {
    label: "Müzik Aletleri",
    pairs: [
      { emoji: "🎸", word: "Gitar" },
      { emoji: "🎹", word: "Piyano" },
      { emoji: "🥁", word: "Davul" },
      { emoji: "🎺", word: "Trompet" },
      { emoji: "🎻", word: "Keman" },
      { emoji: "🎷", word: "Saksofon" },
    ],
  },
  {
    label: "Uzay",
    pairs: [
      { emoji: "🌍", word: "Dünya" },
      { emoji: "🌙", word: "Ay" },
      { emoji: "☀️", word: "Güneş" },
      { emoji: "⭐", word: "Yıldız" },
      { emoji: "🪐", word: "Satürn" },
      { emoji: "🚀", word: "Roket" },
    ],
  },
  {
    label: "Yiyecekler",
    pairs: [
      { emoji: "🍕", word: "Pizza" },
      { emoji: "🍔", word: "Hamburger" },
      { emoji: "🌮", word: "Taco" },
      { emoji: "🍜", word: "Erişte" },
      { emoji: "🍩", word: "Donut" },
      { emoji: "🎂", word: "Pasta" },
    ],
  },
  {
    label: "Kuşlar",
    pairs: [
      { emoji: "🦅", word: "Kartal" },
      { emoji: "🦉", word: "Baykuş" },
      { emoji: "🦜", word: "Papağan" },
      { emoji: "🕊️", word: "Güvercin" },
      { emoji: "🦚", word: "Tavus Kuşu" },
      { emoji: "🐦", word: "Serçe" },
    ],
  },
  {
    label: "Sebzeler",
    pairs: [
      { emoji: "🥕", word: "Havuç" },
      { emoji: "🥦", word: "Brokoli" },
      { emoji: "🌽", word: "Mısır" },
      { emoji: "🍅", word: "Domates" },
      { emoji: "🥒", word: "Salatalık" },
      { emoji: "🧅", word: "Soğan" },
    ],
  },
  {
    label: "Ülkeler",
    pairs: [
      { emoji: "🇹🇷", word: "Türkiye" },
      { emoji: "🇫🇷", word: "Fransa" },
      { emoji: "🇩🇪", word: "Almanya" },
      { emoji: "🇯🇵", word: "Japonya" },
      { emoji: "🇺🇸", word: "Amerika" },
      { emoji: "🇬🇧", word: "İngiltere" },
    ],
  },
  {
    label: "Duygular",
    pairs: [
      { emoji: "😊", word: "Mutlu" },
      { emoji: "😢", word: "Üzgün" },
      { emoji: "😡", word: "Kızgın" },
      { emoji: "😱", word: "Korkmuş" },
      { emoji: "😴", word: "Uykulu" },
      { emoji: "🤩", word: "Heyecanlı" },
    ],
  },
  {
    label: "Ülkeler ve Başkentleri",
    pairs: [
      { emoji: "🇹🇷", word: "Ankara" },
      { emoji: "🇫🇷", word: "Paris" },
      { emoji: "🇩🇪", word: "Berlin" },
      { emoji: "🇯🇵", word: "Tokyo" },
      { emoji: "🇬🇧", word: "Londra" },
      { emoji: "🇮🇹", word: "Roma" },
    ],
  },
  {
    label: "Bilim İnsanları",
    pairs: [
      { emoji: "🍎", word: "Newton" },
      { emoji: "💡", word: "Edison" },
      { emoji: "☢️", word: "Curie" },
      { emoji: "🌌", word: "Hawking" },
      { emoji: "⚡", word: "Tesla" },
      { emoji: "🧬", word: "Darwin" },
    ],
  },
  {
    label: "Renkler Türkçe",
    pairs: [
      { emoji: "❤️", word: "Kırmızı" },
      { emoji: "💙", word: "Mavi" },
      { emoji: "💚", word: "Yeşil" },
      { emoji: "💛", word: "Sarı" },
      { emoji: "🟣", word: "Mor" },
      { emoji: "🟠", word: "Turuncu" },
    ],
  },
];

function shuffleArr<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function MatchingGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const [setIdx, setSetIdx] = useState(() =>
    Math.floor(Math.random() * PAIR_SETS.length),
  );
  const currentSet = PAIR_SETS[setIdx];
  const [emojis, setEmojis] = useState(() =>
    shuffleArr(currentSet.pairs.map((p) => p.emoji)),
  );
  const [words, setWords] = useState(() =>
    shuffleArr(currentSet.pairs.map((p) => p.word)),
  );
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleWord = (word: string) => {
    if (!selectedEmoji) return;
    const pair = currentSet.pairs.find((p) => p.emoji === selectedEmoji);
    if (pair?.word === word) {
      const newMatched = [...matched, selectedEmoji, word];
      playAudio("correct_answer");
      setMatched(newMatched);
      setScore((s) => s + 10);
      setSelectedEmoji(null);
      if (newMatched.length === currentSet.pairs.length * 2) setDone(true);
    } else {
      playAudio("wrong_answer");
      setSelectedEmoji(null);
    }
  };

  const finish = () => {
    if (!profile) return;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "matching",
      score,
      date: new Date().toISOString(),
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };

  const playNext = () => {
    const next = (setIdx + 1) % PAIR_SETS.length;
    setSetIdx(next);
    const nextSet = PAIR_SETS[next];
    setEmojis(shuffleArr(nextSet.pairs.map((p) => p.emoji)));
    setWords(shuffleArr(nextSet.pairs.map((p) => p.word)));
    setSelectedEmoji(null);
    setMatched([]);
    setDone(false);
  };

  if (done)
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-black mb-2">Hepsi Eşleşti!</h2>
          <p className="text-gray-500 text-sm mb-2">{currentSet.label}</p>
          <div className="text-4xl font-black text-orange-600 my-4">
            +{score} Puan
          </div>
          <div className="flex gap-2">
            <Button
              data-ocid="matching.next_button"
              onClick={playNext}
              className="flex-1 bg-purple-500 text-white"
            >
              Sonraki Set
            </Button>
            <Button
              data-ocid="matching.finish_button"
              onClick={finish}
              className="flex-1 bg-orange-500 text-white"
            >
              Bitir
            </Button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-amber-600 p-4">
      <div className="flex items-center justify-between mb-4">
        <Button
          data-ocid="matching.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/games" })}
          className="text-white"
        >
          ←
        </Button>
        <div className="text-center">
          <div className="text-white font-bold">🔎 Resim-Kelime Eşleştirme</div>
          <div className="text-white/70 text-xs">{currentSet.label}</div>
        </div>
        <div className="text-white text-sm">
          {matched.length / 2}/{currentSet.pairs.length}
        </div>
      </div>
      <div className="max-w-xs mx-auto">
        <p className="text-white/80 text-center mb-4 text-sm">
          Bir emoji seç, sonra eşleştiği kelimeye dokun
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="text-white font-bold text-center mb-2">Emoji</div>
            {emojis.map((emoji, i) => (
              <button
                type="button"
                key={emoji}
                data-ocid={`matching.emoji.${i + 1}`}
                onClick={() =>
                  !matched.includes(emoji) && setSelectedEmoji(emoji)
                }
                disabled={matched.includes(emoji)}
                className={`w-full py-3 rounded-2xl text-3xl transition-all hover:scale-105 active:scale-95 ${
                  matched.includes(emoji)
                    ? "bg-green-500 opacity-60"
                    : selectedEmoji === emoji
                      ? "bg-white shadow-lg scale-105"
                      : "bg-white/20 hover:bg-white/30"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <div className="text-white font-bold text-center mb-2">Kelime</div>
            {words.map((word, i) => (
              <button
                type="button"
                key={word}
                data-ocid={`matching.word.${i + 1}`}
                onClick={() => handleWord(word)}
                disabled={matched.includes(word)}
                className={`w-full py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95 ${
                  matched.includes(word)
                    ? "bg-green-500 text-white opacity-60"
                    : selectedEmoji
                      ? "bg-white text-gray-800 hover:bg-yellow-100"
                      : "bg-white/20 text-white"
                }`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
        <p className="text-white/60 text-center text-xs mt-3">
          Set {setIdx + 1}/{PAIR_SETS.length}
        </p>
      </div>
    </div>
  );
}
