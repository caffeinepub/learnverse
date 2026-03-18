import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
  undefined,
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
];

const SIZE = 8;

function buildGrid(
  _words: string[],
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
  const [setIdx, setSetIdx] = useState(() =>
    Math.floor(Math.random() * WORD_SETS.length),
  );
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const currentSet = WORD_SETS[setIdx]!;
  const { grid, positions } = useMemo(
    () => buildGrid(currentSet.words, currentSet.placements),
    // eslint-disable-next-line
    [currentSet],
  );
  const [found, setFound] = useState<string[]>([]);
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [highlighted, setHighlighted] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleCell = (r: number, c: number) => {
    if (!selected) {
      setSelected([r, c]);
      return;
    }
    const [sr, sc] = selected;
    for (const word of currentSet.words) {
      if (found.includes(word)) continue;
      const pos = positions.get(word)!;
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
        if (newFound.length === currentSet.words.length) setDone(true);
        return;
      }
    }
    setSelected([r, c]);
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
          {found.length}/{currentSet.words.length}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3 justify-center">
        {currentSet.words.map((w) => (
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
