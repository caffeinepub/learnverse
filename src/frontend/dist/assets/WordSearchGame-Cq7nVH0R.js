import { u as useNavigate, d as getCurrentUser, r as reactExports, a4 as playAudio, j as jsxRuntimeExports, B as Button, ao as saveGameResult, f as updatePoints, ad as syncToBackend } from "./index-DJxeeYpK.js";
const WORD_SETS = [
  {
    label: "Okul Eşyaları",
    words: ["KALEM", "KITAP", "OKUL", "MASA", "KALE"],
    placements: [
      { word: "KALEM", row: 0, col: 0, dir: [0, 1] },
      { word: "KITAP", row: 2, col: 2, dir: [0, 1] },
      { word: "OKUL", row: 4, col: 1, dir: [0, 1] },
      { word: "MASA", row: 6, col: 3, dir: [0, 1] },
      { word: "KALE", row: 1, col: 5, dir: [1, 0] }
    ]
  },
  {
    label: "Hayvanlar",
    words: ["ASLAN", "KAPLAN", "KURT", "AYAK", "BALIK"],
    placements: [
      { word: "ASLAN", row: 0, col: 0, dir: [0, 1] },
      { word: "KAPLAN", row: 2, col: 1, dir: [0, 1] },
      { word: "KURT", row: 4, col: 0, dir: [0, 1] },
      { word: "AYAK", row: 6, col: 2, dir: [0, 1] },
      { word: "BALIK", row: 1, col: 5, dir: [1, 0] }
    ]
  },
  {
    label: "Meyveler",
    words: ["ELMA", "ARMUT", "MANGO", "ERIK", "AYVA"],
    placements: [
      { word: "ELMA", row: 0, col: 0, dir: [0, 1] },
      { word: "ARMUT", row: 2, col: 2, dir: [0, 1] },
      { word: "MANGO", row: 4, col: 0, dir: [0, 1] },
      { word: "ERIK", row: 6, col: 3, dir: [0, 1] },
      { word: "AYVA", row: 1, col: 5, dir: [1, 0] }
    ]
  },
  {
    label: "Renkler",
    words: ["KIRMIZI", "MAVI", "YESIL", "SARI", "TURUNCU"],
    placements: [
      { word: "KIRMIZI", row: 0, col: 0, dir: [0, 1] },
      { word: "MAVI", row: 2, col: 3, dir: [0, 1] },
      { word: "YESIL", row: 4, col: 0, dir: [0, 1] },
      { word: "SARI", row: 6, col: 3, dir: [0, 1] },
      { word: "TURUNCU", row: 1, col: 0, dir: [1, 0] }
    ]
  },
  {
    label: "Türkiye Şehirleri",
    words: ["ANKARA", "IZMIR", "BURSA", "ADANA", "KONYA"],
    placements: [
      { word: "ANKARA", row: 0, col: 0, dir: [0, 1] },
      { word: "IZMIR", row: 2, col: 2, dir: [0, 1] },
      { word: "BURSA", row: 4, col: 0, dir: [0, 1] },
      { word: "ADANA", row: 6, col: 2, dir: [0, 1] },
      { word: "KONYA", row: 1, col: 5, dir: [1, 0] }
    ]
  },
  {
    label: "Spor Dalları",
    words: ["FUTBOL", "TENIS", "YUZME", "GOLF", "BOKS"],
    placements: [
      { word: "FUTBOL", row: 0, col: 0, dir: [0, 1] },
      { word: "TENIS", row: 2, col: 2, dir: [0, 1] },
      { word: "YUZME", row: 4, col: 0, dir: [0, 1] },
      { word: "GOLF", row: 6, col: 3, dir: [0, 1] },
      { word: "BOKS", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Meslekler",
    words: ["DOKTOR", "ASCI", "PILOT", "HAKIM", "IMAM"],
    placements: [
      { word: "DOKTOR", row: 0, col: 0, dir: [0, 1] },
      { word: "ASCI", row: 2, col: 2, dir: [0, 1] },
      { word: "PILOT", row: 4, col: 0, dir: [0, 1] },
      { word: "HAKIM", row: 6, col: 2, dir: [0, 1] },
      { word: "IMAM", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Doğa",
    words: ["ORMAN", "DENIZ", "DERE", "TEPE", "YAYLA"],
    placements: [
      { word: "ORMAN", row: 0, col: 0, dir: [0, 1] },
      { word: "DENIZ", row: 2, col: 2, dir: [0, 1] },
      { word: "DERE", row: 4, col: 0, dir: [0, 1] },
      { word: "TEPE", row: 6, col: 3, dir: [0, 1] },
      { word: "YAYLA", row: 1, col: 5, dir: [1, 0] }
    ]
  },
  {
    label: "Vücudumuz",
    words: ["KULAK", "BURUN", "AGIZ", "GOZLER", "EL"],
    placements: [
      { word: "KULAK", row: 0, col: 0, dir: [0, 1] },
      { word: "BURUN", row: 2, col: 2, dir: [0, 1] },
      { word: "AGIZ", row: 4, col: 0, dir: [0, 1] },
      { word: "GOZLER", row: 6, col: 1, dir: [0, 1] },
      { word: "EL", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Tatiller",
    words: ["BAYRAM", "TATIL", "DENIZ", "KUMSAL", "GEZI"],
    placements: [
      { word: "BAYRAM", row: 0, col: 0, dir: [0, 1] },
      { word: "TATIL", row: 2, col: 2, dir: [0, 1] },
      { word: "DENIZ", row: 4, col: 0, dir: [0, 1] },
      { word: "KUMSAL", row: 6, col: 0, dir: [0, 1] },
      { word: "GEZI", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Müzik Aletleri",
    words: ["GITAR", "PIYANO", "KEMAN", "DAVUL", "KLARNET"],
    placements: [
      { word: "GITAR", row: 0, col: 0, dir: [0, 1] },
      { word: "PIYANO", row: 2, col: 1, dir: [0, 1] },
      { word: "KEMAN", row: 4, col: 0, dir: [0, 1] },
      { word: "DAVUL", row: 6, col: 2, dir: [0, 1] },
      { word: "KLARNET", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Türk Yemekleri",
    words: ["BAKLAVA", "KOFTE", "PILAV", "DONER", "AYRAN"],
    placements: [
      { word: "BAKLAVA", row: 0, col: 0, dir: [0, 1] },
      { word: "KOFTE", row: 2, col: 2, dir: [0, 1] },
      { word: "PILAV", row: 4, col: 0, dir: [0, 1] },
      { word: "DONER", row: 6, col: 2, dir: [0, 1] },
      { word: "AYRAN", row: 1, col: 5, dir: [1, 0] }
    ]
  },
  {
    label: "Ülke Başkentleri",
    words: ["PARIS", "BERLIN", "ROMA", "LONDRA", "TOKYO"],
    placements: [
      { word: "PARIS", row: 0, col: 0, dir: [0, 1] },
      { word: "BERLIN", row: 2, col: 1, dir: [0, 1] },
      { word: "ROMA", row: 4, col: 0, dir: [0, 1] },
      { word: "LONDRA", row: 6, col: 0, dir: [0, 1] },
      { word: "TOKYO", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  // New sets 14-17
  {
    label: "Sebzeler",
    words: ["HAVUC", "PATATES", "SOĞAN", "BEZELYE", "ISPANAK"],
    placements: [
      { word: "HAVUC", row: 0, col: 0, dir: [0, 1] },
      { word: "PATATES", row: 2, col: 0, dir: [0, 1] },
      { word: "SOĞAN", row: 4, col: 0, dir: [0, 1] },
      { word: "BEZELYE", row: 6, col: 0, dir: [0, 1] },
      { word: "ISPANAK", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  {
    label: "Uzay",
    words: ["ROKET", "GEZEGEN", "YILDIZ", "METEOR", "UYDU"],
    placements: [
      { word: "ROKET", row: 0, col: 0, dir: [0, 1] },
      { word: "GEZEGEN", row: 2, col: 0, dir: [0, 1] },
      { word: "YILDIZ", row: 4, col: 0, dir: [0, 1] },
      { word: "METEOR", row: 6, col: 0, dir: [0, 1] },
      { word: "UYDU", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  {
    label: "Giysiler",
    words: ["GOMLEK", "PANTOLON", "ETEK", "CEKET", "SAPKA"],
    placements: [
      { word: "GOMLEK", row: 0, col: 0, dir: [0, 1] },
      { word: "PANTOLON", row: 2, col: 0, dir: [0, 1] },
      { word: "ETEK", row: 4, col: 0, dir: [0, 1] },
      { word: "CEKET", row: 6, col: 0, dir: [0, 1] },
      { word: "SAPKA", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  {
    label: "Hava Durumu",
    words: ["YAGMUR", "FIRTINA", "KARLI", "BULUTLU", "GUNES"],
    placements: [
      { word: "YAGMUR", row: 0, col: 0, dir: [0, 1] },
      { word: "FIRTINA", row: 2, col: 0, dir: [0, 1] },
      { word: "KARLI", row: 4, col: 0, dir: [0, 1] },
      { word: "BULUTLU", row: 6, col: 0, dir: [0, 1] },
      { word: "GUNES", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  void 0,
  {
    label: "Uzay Cisimleri",
    words: ["GEZEGEN", "YILDIZ", "KUYRUKLU", "NEBULA", "GALAKSI"],
    placements: [
      { word: "GEZEGEN", row: 0, col: 0, dir: [0, 1] },
      { word: "YILDIZ", row: 2, col: 1, dir: [0, 1] },
      { word: "KUYRUKLU", row: 4, col: 0, dir: [0, 1] },
      { word: "NEBULA", row: 6, col: 0, dir: [0, 1] },
      { word: "GALAKSI", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  {
    label: "Seyahat",
    words: ["PASAPORT", "BILET", "BAVUL", "OTEL", "HARITA"],
    placements: [
      { word: "PASAPORT", row: 0, col: 0, dir: [0, 1] },
      { word: "BILET", row: 2, col: 2, dir: [0, 1] },
      { word: "BAVUL", row: 4, col: 0, dir: [0, 1] },
      { word: "OTEL", row: 6, col: 3, dir: [0, 1] },
      { word: "HARITA", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Teknoloji",
    words: ["ROBOT", "YAZILIM", "INTERNET", "BILGISAYAR", "EKRAN"],
    placements: [
      { word: "ROBOT", row: 0, col: 0, dir: [0, 1] },
      { word: "YAZILIM", row: 2, col: 0, dir: [0, 1] },
      { word: "INTERNET", row: 4, col: 0, dir: [0, 1] },
      { word: "BILGISAYAR", row: 6, col: 0, dir: [0, 1] },
      { word: "EKRAN", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  {
    label: "Yiyecek ve İçecek",
    words: ["EKMEK", "SIMIT", "PEYNIR", "ZEYTIN", "SUTLAC"],
    placements: [
      { word: "EKMEK", row: 0, col: 0, dir: [0, 1] },
      { word: "SIMIT", row: 2, col: 2, dir: [0, 1] },
      { word: "PEYNIR", row: 4, col: 0, dir: [0, 1] },
      { word: "ZEYTIN", row: 6, col: 1, dir: [0, 1] },
      { word: "SUTLAC", row: 1, col: 6, dir: [1, 0] }
    ]
  },
  {
    label: "Matematik",
    words: ["TOPLAMA", "CIKARMA", "CARPMA", "BOLME", "KESIR"],
    placements: [
      { word: "TOPLAMA", row: 0, col: 0, dir: [0, 1] },
      { word: "CIKARMA", row: 2, col: 0, dir: [0, 1] },
      { word: "CARPMA", row: 4, col: 0, dir: [0, 1] },
      { word: "BOLME", row: 6, col: 1, dir: [0, 1] },
      { word: "KESIR", row: 0, col: 7, dir: [1, 0] }
    ]
  },
  {
    label: "Sanat",
    words: ["RESIM", "HEYKEL", "MUZIK", "DANS", "TIYATRO"],
    placements: [
      { word: "RESIM", row: 0, col: 0, dir: [0, 1] },
      { word: "HEYKEL", row: 2, col: 1, dir: [0, 1] },
      { word: "MUZIK", row: 4, col: 0, dir: [0, 1] },
      { word: "DANS", row: 6, col: 3, dir: [0, 1] },
      { word: "TIYATRO", row: 1, col: 6, dir: [1, 0] }
    ]
  }
];
const SIZE = 8;
function buildGrid(placements) {
  const grid = Array.from(
    { length: SIZE },
    () => Array(SIZE).fill("")
  );
  const positions = /* @__PURE__ */ new Map();
  for (const { word, row, col, dir } of placements) {
    const pos = [];
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
function WordSearchGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const level = (profile == null ? void 0 : profile.level) || "ilkokul";
  const [setIdx, setSetIdx] = reactExports.useState(
    () => Math.floor(Math.random() * WORD_SETS.length)
  );
  const currentSet = WORD_SETS[setIdx];
  const { grid, positions } = reactExports.useMemo(
    () => buildGrid(currentSet.placements),
    // eslint-disable-next-line
    [currentSet]
  );
  const [found, setFound] = reactExports.useState([]);
  const [selected, setSelected] = reactExports.useState(null);
  const [highlighted, setHighlighted] = reactExports.useState(/* @__PURE__ */ new Set());
  const [score, setScore] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [wrongStreak, setWrongStreak] = reactExports.useState(0);
  const [hintWord, setHintWord] = reactExports.useState(null);
  const visibleWords = reactExports.useMemo(() => {
    if (level === "okul_oncesi") return currentSet.words.slice(0, 3);
    if (level === "ilkokul") return currentSet.words.slice(0, 4);
    return currentSet.words;
  }, [currentSet.words, level]);
  reactExports.useEffect(() => {
    playAudio("game_start");
  }, []);
  const handleCell = (r, c) => {
    if (!selected) {
      setSelected([r, c]);
      return;
    }
    const [sr, sc] = selected;
    for (const word of visibleWords) {
      if (found.includes(word)) continue;
      const pos = positions.get(word);
      if (!pos) continue;
      const start = pos[0];
      const end = pos[pos.length - 1];
      if (sr === start[0] && sc === start[1] && r === end[0] && c === end[1] || sr === end[0] && sc === end[1] && r === start[0] && c === start[1]) {
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
    const newStreak = wrongStreak + 1;
    setWrongStreak(newStreak);
    if (newStreak >= 3) {
      const unfound = visibleWords.find((w) => !found.includes(w));
      if (unfound) setHintWord(unfound);
    }
    setSelected([r, c]);
  };
  const useHint = () => {
    if (!hintWord) return;
    const pos = positions.get(hintWord);
    if (!pos) return;
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
      date: (/* @__PURE__ */ new Date()).toISOString()
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
    setHighlighted(/* @__PURE__ */ new Set());
    setDone(false);
    setWrongStreak(0);
    setHintWord(null);
    playAudio("game_start");
  };
  if (done)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black mb-2", children: "Tüm Kelimeler Bulundu!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mb-2", children: currentSet.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-blue-600 my-4", children: [
        "+",
        score,
        " Puan"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "wordsearch.next_button",
            onClick: playNext,
            className: "flex-1 bg-purple-500 text-white",
            children: "Sonraki Set"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "wordsearch.finish_button",
            onClick: finish,
            className: "flex-1 bg-blue-500 text-white",
            children: "Bitir"
          }
        )
      ] })
    ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "wordsearch.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/games" }),
          className: "text-white",
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: "🔠 Kelime Bulmaca" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: currentSet.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white text-sm", children: [
        found.length,
        "/",
        visibleWords.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3 justify-center", children: visibleWords.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `px-3 py-1 rounded-full text-sm font-bold ${found.includes(w) ? "bg-green-500 text-white line-through" : "bg-white/20 text-white"}`,
        children: w
      },
      w
    )) }),
    hintWord && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "wordsearch.hint_button",
        onClick: useHint,
        className: "bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-sm animate-bounce shadow-lg",
        children: [
          "💡 İpucu: ",
          hintWord
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-1 mx-auto",
        style: {
          gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))`,
          maxWidth: 320
        },
        children: grid.map(
          (row, r) => row.map((cell, c) => {
            var _a;
            const key = `${r},${c}`;
            const isHighlighted = highlighted.has(key);
            const isSelected = selected && selected[0] === r && selected[1] === c;
            const isHintCell = hintWord && ((_a = positions.get(hintWord)) == null ? void 0 : _a.some(([hr, hc]) => hr === r && hc === c));
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `wordsearch.cell.${r * SIZE + c + 1}`,
                onClick: () => handleCell(r, c),
                className: `aspect-square flex items-center justify-center text-sm font-black rounded transition-all ${isHighlighted ? "bg-green-400 text-white" : isSelected ? "bg-yellow-400 text-gray-800 scale-110" : isHintCell ? "bg-yellow-200/40 text-white" : "bg-white/20 text-white hover:bg-white/30"}`,
                children: cell
              },
              key
            );
          })
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-center text-xs mt-3", children: [
      "Kelimenin ilk harfine, sonra son harfine dokunun • Set ",
      setIdx + 1,
      "/",
      WORD_SETS.length
    ] })
  ] });
}
export {
  WordSearchGame as default
};
