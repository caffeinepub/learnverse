import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, a4 as playAudio, j as jsxRuntimeExports, B as Button, ao as saveGameResult, f as updatePoints, ad as syncToBackend } from "./index-C6v58384.js";
const EMOJI_SETS = [
  // Set 1: Animals
  ["🐯", "🦁", "🐸", "🦊", "🐧", "🦋"],
  // Set 2: Fruits
  ["🍎", "🍌", "🍓", "🍇", "🍉", "🥝"],
  // Set 3: Space
  ["🚀", "🌍", "⭐", "🌙", "☀️", "🪐"],
  // Set 4: Music Instruments
  ["🎸", "🎹", "🎺", "🥁", "🎻", "🎷"],
  // Set 5: Vehicles
  ["🚗", "✈️", "🚂", "🚢", "🚁", "🚲"],
  // Set 6: Birds
  ["🦅", "🦉", "🦜", "🐦", "🕊️", "🦚"],
  // Set 7: Flowers
  ["🌹", "🌻", "🌷", "🌸", "🌺", "🌼"],
  // Set 8: Food
  ["🍕", "🍔", "🌮", "🍣", "🍩", "🎂"],
  // Set 9: Nature/Plants
  ["🌲", "🌴", "🌵", "🍀", "🌾", "🌿"],
  // Set 10: Weather
  ["🌈", "⚡", "❄️", "🌊", "🔥", "🌪️"],
  // Set 11: Activities
  ["🏖️", "🏕️", "🎡", "🎢", "⛷️", "🏄"],
  // Set 12: Sports Trophies
  ["🏆", "🥇", "🎯", "🎳", "🏹", "🥋"],
  // Set 13: Space Objects
  ["🛸", "🌠", "☄️", "🔭", "🌌", "🛰️"],
  // Set 14: Sea Animals
  ["🐙", "🦈", "🐬", "🦀", "🐡", "🦞"],
  // Set 15: Vegetables
  ["🥦", "🥕", "🌽", "🧅", "🥔", "🫑"],
  // Set 16: World Flags
  ["🇹🇷", "🇺🇸", "🇬🇧", "🇯🇵", "🇫🇷", "🇩🇪"],
  // Set 17: Sports
  ["⚽", "🏀", "🎾", "🏈", "⚾", "🏐"],
  // Set 18: Emotions/Feelings
  ["😊", "😢", "😡", "😱", "🤩", "😴"],
  // Set 19: Insects & Small Creatures
  ["🐝", "🐛", "🦗", "🦟", "🐞", "🦎"],
  // Set 20: Tools & Objects
  ["🔨", "🔑", "🔍", "📷", "🎒", "🧲"],
  // Set 21: Sweets & Desserts
  ["🍰", "🧁", "🍭", "🍫", "🍬", "🍦"],
  // Set 22: Professions / Jobs
  ["👨‍⚕️", "👨‍🍳", "👨‍🏫", "👨‍🚒", "👨‍✈️", "👩‍🔬"],
  // Set 23: Wild Animals
  ["🦒", "🦓", "🐘", "🦏", "🐆", "🦍"],
  // Set 24: Clothing Items
  ["👒", "🧣", "🧤", "👟", "👗", "🧥"],
  // Set 25: Ocean / Underwater
  ["🐠", "🐋", "🦭", "🐚", "🌊", "🪸"],
  // Set 26: Farm Animals
  ["🐄", "🐖", "🐓", "🐑", "🐴", "🐐"],
  // Set 27: School Supplies
  ["📚", "✏️", "📐", "🖊️", "📏", "🗂️"],
  // Set 28: Jungle Animals
  ["🐅", "🦜", "🐍", "🦧", "🦎", "🐆"],
  // Set 29: Fantasy & Mythical
  ["🐉", "🦄", "🧙", "🧝", "🧚", "🦸"],
  // Set 30: Winter & Snow
  ["⛄", "🎿", "🧊", "🏔️", "🌨️", "🧣"],
  // Set 31: Tropical Fruits
  ["🍍", "🥭", "🍈", "🍑", "🫐", "🍒"],
  // Set 32: Technology
  ["💻", "📱", "🖥️", "🎮", "📡", "🔋"],
  // Set 33: Travel & Adventure
  ["🗺️", "🧭", "🏕️", "🎒", "🗽", "🌋"]
];
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function getPairsCount(level, consecutiveWins) {
  const base = level === "okul_oncesi" ? 3 : level === "ilkokul" ? 5 : 6;
  const max = level === "okul_oncesi" ? 5 : 6;
  return Math.min(base + Math.floor(consecutiveWins / 2), max);
}
function MemoryGame() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();
  const level = (profile == null ? void 0 : profile.level) || "ilkokul";
  const [consecutiveWins, setConsecutiveWins] = reactExports.useState(0);
  const [setIndex, setSetIndex] = reactExports.useState(
    () => Math.floor(Math.random() * EMOJI_SETS.length)
  );
  const pairsCount = getPairsCount(level, consecutiveWins);
  const emojis = reactExports.useMemo(
    () => EMOJI_SETS[setIndex % EMOJI_SETS.length].slice(0, pairsCount),
    [setIndex, pairsCount]
  );
  const [cards, setCards] = reactExports.useState(
    () => shuffle(
      [...emojis, ...emojis].map((e, i) => ({
        id: i,
        emoji: e,
        flipped: false,
        matched: false
      }))
    )
  );
  const [flipped, setFlipped] = reactExports.useState([]);
  const [moves, setMoves] = reactExports.useState(0);
  const [time, setTime] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(0);
  reactExports.useEffect(() => {
    playAudio("game_start");
  }, []);
  reactExports.useEffect(() => {
    if (done) return;
    const t2 = setInterval(() => setTime((tt) => tt + 1), 1e3);
    return () => clearInterval(t2);
  }, [done]);
  reactExports.useEffect(() => {
    setCards(
      shuffle(
        [...emojis, ...emojis].map((e, i) => ({
          id: i,
          emoji: e,
          flipped: false,
          matched: false
        }))
      )
    );
    setFlipped([]);
  }, [emojis]);
  const handleFlip = reactExports.useCallback(
    (id) => {
      if (flipped.length === 2) return;
      const card = cards.find((c) => c.id === id);
      if (!card || card.flipped || card.matched) return;
      const newFlipped = [...flipped, id];
      setCards(
        (cs) => cs.map((c) => c.id === id ? { ...c, flipped: true } : c)
      );
      setFlipped(newFlipped);
      if (newFlipped.length === 2) {
        setMoves((m) => m + 1);
        const [a, b] = newFlipped.map(
          (fid) => cards.find((c) => c.id === fid)
        );
        if (a.emoji === b.emoji) {
          playAudio("correct_answer");
          setCards(
            (cs) => cs.map(
              (c) => newFlipped.includes(c.id) ? { ...c, matched: true } : c
            )
          );
          setFlipped([]);
          if (cards.filter((c) => c.matched).length + 2 === cards.length) {
            const s = Math.max(10, 100 - moves * 2 - Math.floor(time / 10));
            setScore(s);
            setDone(true);
            playAudio("game_end");
          }
        } else {
          playAudio("wrong_answer");
          setTimeout(() => {
            setCards(
              (cs) => cs.map(
                (c) => newFlipped.includes(c.id) ? { ...c, flipped: false } : c
              )
            );
            setFlipped([]);
          }, 800);
        }
      }
    },
    [flipped, cards, moves, time]
  );
  const finish = () => {
    if (!profile) return;
    saveGameResult({
      studentNumber: profile.studentNumber,
      gameType: "memory",
      score,
      date: (/* @__PURE__ */ new Date()).toISOString()
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };
  const playAgain = () => {
    const nextSet = (setIndex + 1) % EMOJI_SETS.length;
    setConsecutiveWins((w) => w + 1);
    setSetIndex(nextSet);
    setMoves(0);
    setTime(0);
    setDone(false);
    setScore(0);
    playAudio("game_start");
  };
  const newPairsCount = getPairsCount(level, consecutiveWins + 1);
  const diffIncreasing = newPairsCount > pairsCount;
  if (done)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black mb-2", children: "Tebrikler!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-1", children: [
        moves,
        " hamle, ",
        time,
        "s"
      ] }),
      diffIncreasing && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-pink-600 mb-1", children: "⬆️ Sonraki turda daha fazla kart!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-pink-600 my-4", children: [
        "+",
        score,
        " Puan"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "memory.play_again_button",
            onClick: playAgain,
            className: "flex-1 bg-purple-500 text-white",
            children: t("game_play_again")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "memory.finish_button",
            onClick: finish,
            className: "flex-1 bg-pink-500 text-white",
            children: "Bitir"
          }
        )
      ] })
    ] }) });
  const cols = pairsCount <= 3 ? 3 : pairsCount <= 4 ? 4 : 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-pink-500 to-rose-600 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "memory.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/games" }),
          className: "text-white",
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: "💞 Hafıza Oyunu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white text-sm", children: [
        moves,
        " hamle | ",
        time,
        "s"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-center text-xs mb-2", children: [
      pairsCount,
      " çift • Set ",
      setIndex + 1,
      "/",
      EMOJI_SETS.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid gap-3 max-w-xs mx-auto",
        style: { gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` },
        children: cards.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `memory.card.${card.id + 1}`,
            onClick: () => handleFlip(card.id),
            className: `aspect-square rounded-2xl text-3xl flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 ${card.flipped || card.matched ? "bg-white" : "bg-pink-800 hover:bg-pink-700"} ${card.matched ? "opacity-60" : ""}`,
            children: card.flipped || card.matched ? card.emoji : "❓"
          },
          card.id
        ))
      }
    )
  ] });
}
export {
  MemoryGame as default
};
