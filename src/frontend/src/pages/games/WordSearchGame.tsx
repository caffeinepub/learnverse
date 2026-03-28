import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  getCurrentUser,
  playAudio,
  saveGameResult,
  syncToBackend,
  updatePoints,
} from "../../store";

const WORD_SETS = [
  {
    label: "Okul Eşyaları",
    words: ["KALEM", "KITAP", "OKUL", "MASA", "KALE"],
    placements: [
      { word: "KALEM", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "KITAP", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "OKUL", row: 4, col: 1, dir: [0, 1] as [number, number] },
      { word: "MASA", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "KALE", row: 1, col: 5, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Hayvanlar",
    words: ["ASLAN", "KAPLAN", "KURT", "AYAK", "BALIK"],
    placements: [
      { word: "ASLAN", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "KAPLAN", row: 2, col: 1, dir: [0, 1] as [number, number] },
      { word: "KURT", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "AYAK", row: 6, col: 2, dir: [0, 1] as [number, number] },
      { word: "BALIK", row: 1, col: 5, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Meyveler",
    words: ["ELMA", "ARMUT", "MANGO", "ERIK", "AYVA"],
    placements: [
      { word: "ELMA", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "ARMUT", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "MANGO", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "ERIK", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "AYVA", row: 1, col: 5, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Renkler",
    words: ["KIRMIZI", "MAVI", "YESIL", "SARI", "TURUNCU"],
    placements: [
      { word: "KIRMIZI", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "MAVI", row: 2, col: 3, dir: [0, 1] as [number, number] },
      { word: "YESIL", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "SARI", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "TURUNCU", row: 1, col: 0, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Türkiye Şehirleri",
    words: ["ANKARA", "IZMIR", "BURSA", "ADANA", "KONYA"],
    placements: [
      { word: "ANKARA", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "IZMIR", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "BURSA", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "ADANA", row: 6, col: 2, dir: [0, 1] as [number, number] },
      { word: "KONYA", row: 1, col: 5, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Spor Dalları",
    words: ["FUTBOL", "TENIS", "YUZME", "GOLF", "BOKS"],
    placements: [
      { word: "FUTBOL", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "TENIS", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "YUZME", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "GOLF", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "BOKS", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Meslekler",
    words: ["DOKTOR", "ASCI", "PILOT", "HAKIM", "IMAM"],
    placements: [
      { word: "DOKTOR", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "ASCI", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "PILOT", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "HAKIM", row: 6, col: 2, dir: [0, 1] as [number, number] },
      { word: "IMAM", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Doğa",
    words: ["ORMAN", "DENIZ", "DERE", "TEPE", "YAYLA"],
    placements: [
      { word: "ORMAN", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "DENIZ", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "DERE", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "TEPE", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "YAYLA", row: 1, col: 5, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Vücudumuz",
    words: ["KULAK", "BURUN", "AGIZ", "GOZLER", "EL"],
    placements: [
      { word: "KULAK", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "BURUN", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "AGIZ", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "GOZLER", row: 6, col: 1, dir: [0, 1] as [number, number] },
      { word: "EL", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Tatiller",
    words: ["BAYRAM", "TATIL", "DENIZ", "KUMSAL", "GEZI"],
    placements: [
      { word: "BAYRAM", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "TATIL", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "DENIZ", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "KUMSAL", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "GEZI", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Müzik Aletleri",
    words: ["GITAR", "PIYANO", "KEMAN", "DAVUL", "KLARNET"],
    placements: [
      { word: "GITAR", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "PIYANO", row: 2, col: 1, dir: [0, 1] as [number, number] },
      { word: "KEMAN", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "DAVUL", row: 6, col: 2, dir: [0, 1] as [number, number] },
      { word: "KLARNET", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Türk Yemekleri",
    words: ["BAKLAVA", "KOFTE", "PILAV", "DONER", "AYRAN"],
    placements: [
      { word: "BAKLAVA", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "KOFTE", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "PILAV", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "DONER", row: 6, col: 2, dir: [0, 1] as [number, number] },
      { word: "AYRAN", row: 1, col: 5, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Ülke Başkentleri",
    words: ["PARIS", "BERLIN", "ROMA", "LONDRA", "TOKYO"],
    placements: [
      { word: "PARIS", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "BERLIN", row: 2, col: 1, dir: [0, 1] as [number, number] },
      { word: "ROMA", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "LONDRA", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "TOKYO", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  // New sets 14-17
  {
    label: "Sebzeler",
    words: ["HAVUC", "PATATES", "SOĞAN", "BEZELYE", "ISPANAK"],
    placements: [
      { word: "HAVUC", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "PATATES", row: 2, col: 0, dir: [0, 1] as [number, number] },
      { word: "SOĞAN", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "BEZELYE", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "ISPANAK", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Uzay",
    words: ["ROKET", "GEZEGEN", "YILDIZ", "METEOR", "UYDU"],
    placements: [
      { word: "ROKET", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "GEZEGEN", row: 2, col: 0, dir: [0, 1] as [number, number] },
      { word: "YILDIZ", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "METEOR", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "UYDU", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Giysiler",
    words: ["GOMLEK", "PANTOLON", "ETEK", "CEKET", "SAPKA"],
    placements: [
      { word: "GOMLEK", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "PANTOLON", row: 2, col: 0, dir: [0, 1] as [number, number] },
      { word: "ETEK", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "CEKET", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "SAPKA", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Hava Durumu",
    words: ["YAGMUR", "FIRTINA", "KARLI", "BULUTLU", "GUNES"],
    placements: [
      { word: "YAGMUR", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "FIRTINA", row: 2, col: 0, dir: [0, 1] as [number, number] },
      { word: "KARLI", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "BULUTLU", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "GUNES", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  undefined,
  {
    label: "Uzay Cisimleri",
    words: ["GEZEGEN", "YILDIZ", "KUYRUKLU", "NEBULA", "GALAKSI"],
    placements: [
      { word: "GEZEGEN", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "YILDIZ", row: 2, col: 1, dir: [0, 1] as [number, number] },
      { word: "KUYRUKLU", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "NEBULA", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "GALAKSI", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Seyahat",
    words: ["PASAPORT", "BILET", "BAVUL", "OTEL", "HARITA"],
    placements: [
      { word: "PASAPORT", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "BILET", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "BAVUL", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "OTEL", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "HARITA", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Teknoloji",
    words: ["ROBOT", "YAZILIM", "INTERNET", "BILGISAYAR", "EKRAN"],
    placements: [
      { word: "ROBOT", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "YAZILIM", row: 2, col: 0, dir: [0, 1] as [number, number] },
      { word: "INTERNET", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "BILGISAYAR", row: 6, col: 0, dir: [0, 1] as [number, number] },
      { word: "EKRAN", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Yiyecek ve İçecek",
    words: ["EKMEK", "SIMIT", "PEYNIR", "ZEYTIN", "SUTLAC"],
    placements: [
      { word: "EKMEK", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "SIMIT", row: 2, col: 2, dir: [0, 1] as [number, number] },
      { word: "PEYNIR", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "ZEYTIN", row: 6, col: 1, dir: [0, 1] as [number, number] },
      { word: "SUTLAC", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Matematik",
    words: ["TOPLAMA", "CIKARMA", "CARPMA", "BOLME", "KESIR"],
    placements: [
      { word: "TOPLAMA", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "CIKARMA", row: 2, col: 0, dir: [0, 1] as [number, number] },
      { word: "CARPMA", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "BOLME", row: 6, col: 1, dir: [0, 1] as [number, number] },
      { word: "KESIR", row: 0, col: 7, dir: [1, 0] as [number, number] },
    ],
  },
  {
    label: "Sanat",
    words: ["RESIM", "HEYKEL", "MUZIK", "DANS", "TIYATRO"],
    placements: [
      { word: "RESIM", row: 0, col: 0, dir: [0, 1] as [number, number] },
      { word: "HEYKEL", row: 2, col: 1, dir: [0, 1] as [number, number] },
      { word: "MUZIK", row: 4, col: 0, dir: [0, 1] as [number, number] },
      { word: "DANS", row: 6, col: 3, dir: [0, 1] as [number, number] },
      { word: "TIYATRO", row: 1, col: 6, dir: [1, 0] as [number, number] },
    ],
  },
];

const SIZE = 8;

function buildGrid(
  placements: {
    word: string;
    row: number;
    col: number;
    dir: [number, number];
  }[],
): { grid: string[][]; positions: Map<string, [number, number][]> } {
  const grid: string[][] = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(""),
  );
  const positions = new Map<string, [number, number][]>();
  for (const { word, row, col, dir } of placements) {
    const pos: [number, number][] = [];
    for (let i = 0; i < word.length; i++) {
      const r = row + dir[0] * i;
      const c = col + dir[1] * i;
      if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) {
        grid[r][c] = word[i];
        pos.push([r, c]);
      }
    }
    positions.set(word, pos);
  }
  const LETTERS = "ABCDEFGHIJKLMNOPRSTUVYZ";
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++)
      if (!grid[r][c])
        grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  return { grid, positions };
}

export default function WordSearchGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const level = profile?.level || "ilkokul";

  const [setIdx, setSetIdx] = useState(() =>
    Math.floor(Math.random() * WORD_SETS.length),
  );
  const currentSet = WORD_SETS[setIdx]!;
  const { grid, positions } = useMemo(
    () => buildGrid(currentSet.placements),
    // eslint-disable-next-line
    [currentSet],
  );
  const [found, setFound] = useState<string[]>([]);
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [highlighted, setHighlighted] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  // Adaptive: track wrong guesses, show hint after 3 in a row
  const [wrongStreak, setWrongStreak] = useState(0);
  const [hintWord, setHintWord] = useState<string | null>(null);

  // Preschool: only show first 3 words (shorter list)
  const visibleWords = useMemo(() => {
    if (level === "okul_oncesi") return currentSet.words.slice(0, 3);
    if (level === "ilkokul") return currentSet.words.slice(0, 4);
    return currentSet.words;
  }, [currentSet.words, level]);

  // Play game start sound on mount
  useEffect(() => {
    playAudio("game_start");
  }, []);

  const handleCell = (r: number, c: number) => {
    if (!selected) {
      setSelected([r, c]);
      return;
    }
    const [sr, sc] = selected;
    for (const word of visibleWords) {
      if (found.includes(word)) continue;
      const pos = positions.get(word)!;
      if (!pos) continue;
      const start = pos[0];
      const end = pos[pos.length - 1];
      if (
        (sr === start[0] && sc === start[1] && r === end[0] && c === end[1]) ||
        (sr === end[0] && sc === end[1] && r === start[0] && c === start[1])
      ) {
        playAudio("correct_answer");
        const newFound = [...found, word];
        const newHighlighted = new Set(highlighted);
        for (const [pr, pc] of pos) newHighlighted.add(`${pr},${pc}`);
        setFound(newFound);
        setHighlighted(newHighlighted);
        setScore((s) => s + 20);
        setSelected(null);
        setWrongStreak(0);
        setHintWord(null);
        if (newFound.length === visibleWords.length) {
          setDone(true);
          playAudio("game_end");
        }
        return;
      }
    }
    // Wrong selection
    const newStreak = wrongStreak + 1;
    setWrongStreak(newStreak);
    if (newStreak >= 3) {
      // Show hint: first unfound word
      const unfound = visibleWords.find((w) => !found.includes(w));
      if (unfound) setHintWord(unfound);
    }
    setSelected([r, c]);
  };

  const useHint = () => {
    if (!hintWord) return;
    const pos = positions.get(hintWord);
    if (!pos) return;
    // Highlight just the first letter of the hint word
    const [hr, hc] = pos[0];
    setSelected([hr, hc]);
    setHintWord(null);
    setWrongStreak(0);
  };

  const finish = () => {
    if (!profile) return;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "wordsearch",
      score,
      date: new Date().toISOString(),
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };

  const playNext = () => {
    const next = (setIdx + 1) % WORD_SETS.length;
    setSetIdx(next);
    setFound([]);
    setSelected(null);
    setHighlighted(new Set());
    setDone(false);
    setWrongStreak(0);
    setHintWord(null);
    playAudio("game_start");
  };

  if (done)
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-black mb-2">Tüm Kelimeler Bulundu!</h2>
          <p className="text-gray-500 text-sm mb-2">{currentSet.label}</p>
          <div className="text-4xl font-black text-blue-600 my-4">
            +{score} Puan
          </div>
          <div className="flex gap-2">
            <Button
              data-ocid="wordsearch.next_button"
              onClick={playNext}
              className="flex-1 bg-purple-500 text-white"
            >
              Sonraki Set
            </Button>
            <Button
              data-ocid="wordsearch.finish_button"
              onClick={finish}
              className="flex-1 bg-blue-500 text-white"
            >
              Bitir
            </Button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="flex items-center justify-between mb-3">
        <Button
          data-ocid="wordsearch.back_button"
          variant="ghost"
          onClick={() => navigate({ to: "/games" })}
          className="text-white"
        >
          ←
        </Button>
        <div className="text-center">
          <div className="text-white font-bold">🔠 Kelime Bulmaca</div>
          <div className="text-white/70 text-xs">{currentSet.label}</div>
        </div>
        <div className="text-white text-sm">
          {found.length}/{visibleWords.length}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3 justify-center">
        {visibleWords.map((w) => (
          <span
            key={w}
            className={`px-3 py-1 rounded-full text-sm font-bold ${
              found.includes(w)
                ? "bg-green-500 text-white line-through"
                : "bg-white/20 text-white"
            }`}
          >
            {w}
          </span>
        ))}
      </div>
      {hintWord && (
        <div className="flex justify-center mb-2">
          <button
            type="button"
            data-ocid="wordsearch.hint_button"
            onClick={useHint}
            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-sm animate-bounce shadow-lg"
          >
            💡 İpucu: {hintWord}
          </button>
        </div>
      )}
      <div
        className="grid gap-1 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
          maxWidth: 320,
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => {
            const key = `${r},${c}`;
            const isHighlighted = highlighted.has(key);
            const isSelected =
              selected && selected[0] === r && selected[1] === c;
            // Highlight hint word positions subtly
            const isHintCell =
              hintWord &&
              positions.get(hintWord)?.some(([hr, hc]) => hr === r && hc === c);
            return (
              <button
                type="button"
                key={key}
                data-ocid={`wordsearch.cell.${r * SIZE + c + 1}`}
                onClick={() => handleCell(r, c)}
                className={`aspect-square flex items-center justify-center text-sm font-black rounded transition-all ${
                  isHighlighted
                    ? "bg-green-400 text-white"
                    : isSelected
                      ? "bg-yellow-400 text-gray-800 scale-110"
                      : isHintCell
                        ? "bg-yellow-200/40 text-white"
                        : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {cell}
              </button>
            );
          }),
        )}
      </div>
      <p className="text-white/70 text-center text-xs mt-3">
        Kelimenin ilk harfine, sonra son harfine dokunun • Set {setIdx + 1}/
        {WORD_SETS.length}
      </p>
    </div>
  );
}
