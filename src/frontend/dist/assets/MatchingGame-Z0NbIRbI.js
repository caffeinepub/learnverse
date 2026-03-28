import { u as useNavigate, d as getCurrentUser, r as reactExports, a4 as playAudio, j as jsxRuntimeExports, B as Button, ao as saveGameResult, f as updatePoints, ad as syncToBackend } from "./index-KcrWLd1W.js";
const PAIR_SETS = [
  {
    label: "Hayvanlar",
    pairs: [
      { emoji: "🐯", word: "Kaplan" },
      { emoji: "🦁", word: "Aslan" },
      { emoji: "🐸", word: "Kurbağa" },
      { emoji: "🦊", word: "Tilki" },
      { emoji: "🐧", word: "Penguen" },
      { emoji: "🦋", word: "Kelebek" }
    ]
  },
  {
    label: "Meyveler",
    pairs: [
      { emoji: "🍎", word: "Elma" },
      { emoji: "🍌", word: "Muz" },
      { emoji: "🍓", word: "Çilek" },
      { emoji: "🍇", word: "Üzüm" },
      { emoji: "🍉", word: "Karpuz" },
      { emoji: "🥝", word: "Kivi" }
    ]
  },
  {
    label: "Taşıtlar",
    pairs: [
      { emoji: "🚗", word: "Araba" },
      { emoji: "✈️", word: "Uçak" },
      { emoji: "🚂", word: "Tren" },
      { emoji: "🚢", word: "Gemi" },
      { emoji: "🚁", word: "Helikopter" },
      { emoji: "🚲", word: "Bisiklet" }
    ]
  },
  {
    label: "Meslekler",
    pairs: [
      { emoji: "👨‍⚕️", word: "Doktor" },
      { emoji: "👨‍🍳", word: "Aşçı" },
      { emoji: "👨‍🏫", word: "Öğretmen" },
      { emoji: "👨‍🚒", word: "İtfaiyeci" },
      { emoji: "👨‍✈️", word: "Pilot" },
      { emoji: "👨‍🔬", word: "Bilim İnsanı" }
    ]
  },
  {
    label: "Spor",
    pairs: [
      { emoji: "⚽", word: "Futbol" },
      { emoji: "🏀", word: "Basketbol" },
      { emoji: "🎾", word: "Tenis" },
      { emoji: "🏊", word: "Yüzme" },
      { emoji: "🚴", word: "Bisiklet" },
      { emoji: "🥊", word: "Boks" }
    ]
  },
  {
    label: "Müzik Aletleri",
    pairs: [
      { emoji: "🎸", word: "Gitar" },
      { emoji: "🎹", word: "Piyano" },
      { emoji: "🥁", word: "Davul" },
      { emoji: "🎺", word: "Trompet" },
      { emoji: "🎻", word: "Keman" },
      { emoji: "🎷", word: "Saksofon" }
    ]
  },
  {
    label: "Uzay",
    pairs: [
      { emoji: "🌍", word: "Dünya" },
      { emoji: "🌙", word: "Ay" },
      { emoji: "☀️", word: "Güneş" },
      { emoji: "⭐", word: "Yıldız" },
      { emoji: "🪐", word: "Satürn" },
      { emoji: "🚀", word: "Roket" }
    ]
  },
  {
    label: "Yiyecekler",
    pairs: [
      { emoji: "🍕", word: "Pizza" },
      { emoji: "🍔", word: "Hamburger" },
      { emoji: "🌮", word: "Taco" },
      { emoji: "🍜", word: "Erişte" },
      { emoji: "🍩", word: "Donut" },
      { emoji: "🎂", word: "Pasta" }
    ]
  },
  {
    label: "Kuşlar",
    pairs: [
      { emoji: "🦅", word: "Kartal" },
      { emoji: "🦉", word: "Baykuş" },
      { emoji: "🦜", word: "Papağan" },
      { emoji: "🕊️", word: "Güvercin" },
      { emoji: "🦚", word: "Tavus Kuşu" },
      { emoji: "🐦", word: "Serçe" }
    ]
  },
  {
    label: "Sebzeler",
    pairs: [
      { emoji: "🥕", word: "Havuç" },
      { emoji: "🥦", word: "Brokoli" },
      { emoji: "🌽", word: "Mısır" },
      { emoji: "🍅", word: "Domates" },
      { emoji: "🥒", word: "Salatalık" },
      { emoji: "🧅", word: "Soğan" }
    ]
  },
  {
    label: "Ülkeler",
    pairs: [
      { emoji: "🇹🇷", word: "Türkiye" },
      { emoji: "🇫🇷", word: "Fransa" },
      { emoji: "🇩🇪", word: "Almanya" },
      { emoji: "🇯🇵", word: "Japonya" },
      { emoji: "🇺🇸", word: "Amerika" },
      { emoji: "🇬🇧", word: "İngiltere" }
    ]
  },
  {
    label: "Duygular",
    pairs: [
      { emoji: "😊", word: "Mutlu" },
      { emoji: "😢", word: "Üzgün" },
      { emoji: "😡", word: "Kızgın" },
      { emoji: "😱", word: "Korkmuş" },
      { emoji: "😴", word: "Uykulu" },
      { emoji: "🤩", word: "Heyecanlı" }
    ]
  },
  {
    label: "Ülkeler ve Başkentleri",
    pairs: [
      { emoji: "🇹🇷", word: "Ankara" },
      { emoji: "🇫🇷", word: "Paris" },
      { emoji: "🇩🇪", word: "Berlin" },
      { emoji: "🇯🇵", word: "Tokyo" },
      { emoji: "🇬🇧", word: "Londra" },
      { emoji: "🇮🇹", word: "Roma" }
    ]
  },
  {
    label: "Bilim İnsanları",
    pairs: [
      { emoji: "🍎", word: "Newton" },
      { emoji: "💡", word: "Edison" },
      { emoji: "☢️", word: "Curie" },
      { emoji: "🌌", word: "Hawking" },
      { emoji: "⚡", word: "Tesla" },
      { emoji: "🧬", word: "Darwin" }
    ]
  },
  {
    label: "Renkler Türkçe",
    pairs: [
      { emoji: "❤️", word: "Kırmızı" },
      { emoji: "💙", word: "Mavi" },
      { emoji: "💚", word: "Yeşil" },
      { emoji: "💛", word: "Sarı" },
      { emoji: "🟣", word: "Mor" },
      { emoji: "🟠", word: "Turuncu" }
    ]
  },
  {
    label: "Hava Durumu",
    pairs: [
      { emoji: "☀️", word: "Güneşli" },
      { emoji: "🌧️", word: "Yağmurlu" },
      { emoji: "❄️", word: "Karlı" },
      { emoji: "⛅", word: "Bulutlu" },
      { emoji: "🌪️", word: "Fırtınalı" },
      { emoji: "🌈", word: "Gökkuşağı" }
    ]
  },
  {
    label: "Vücut Parçaları",
    pairs: [
      { emoji: "👁️", word: "Göz" },
      { emoji: "👂", word: "Kulak" },
      { emoji: "👃", word: "Burun" },
      { emoji: "👄", word: "Ağız" },
      { emoji: "🖐️", word: "El" },
      { emoji: "🦵", word: "Bacak" }
    ]
  },
  {
    label: "Ev Eşyaları",
    pairs: [
      { emoji: "🛋️", word: "Koltuk" },
      { emoji: "🛏️", word: "Yatak" },
      { emoji: "🪑", word: "Sandalye" },
      { emoji: "🚿", word: "Duş" },
      { emoji: "🪞", word: "Ayna" },
      { emoji: "🚪", word: "Kapı" }
    ]
  },
  {
    label: "Şekiller ve Renkler",
    pairs: [
      { emoji: "🔴", word: "Kırmızı Daire" },
      { emoji: "🔵", word: "Mavi Daire" },
      { emoji: "🟩", word: "Yeşil Kare" },
      { emoji: "🟨", word: "Sarı Kare" },
      { emoji: "🔺", word: "Kırmızı Üçgen" },
      { emoji: "🟦", word: "Mavi Kare" }
    ]
  },
  {
    label: "Araçlar ve Aletler",
    pairs: [
      { emoji: "🔨", word: "Çekiç" },
      { emoji: "🔑", word: "Anahtar" },
      { emoji: "✂️", word: "Makas" },
      { emoji: "🔧", word: "İngiliz Anahtarı" },
      { emoji: "🪛", word: "Tornavida" },
      { emoji: "📏", word: "Cetvel" }
    ]
  },
  {
    label: "Deniz Canlıları",
    pairs: [
      { emoji: "🐙", word: "Ahtapot" },
      { emoji: "🦈", word: "Köpek Balığı" },
      { emoji: "🐬", word: "Yunus" },
      { emoji: "🦀", word: "Yengeç" },
      { emoji: "🐡", word: "Balon Balığı" },
      { emoji: "🦑", word: "Kalamar" }
    ]
  },
  // New sets 22-27
  {
    label: "Zıt Anlamlılar",
    pairs: [
      { emoji: "⬆️", word: "Yukarı" },
      { emoji: "⬇️", word: "Aşağı" },
      { emoji: "🌞", word: "Gündüz" },
      { emoji: "🌚", word: "Gece" },
      { emoji: "🔥", word: "Sıcak" },
      { emoji: "❄️", word: "Soğuk" }
    ]
  },
  {
    label: "Eylemler",
    pairs: [
      { emoji: "🏃", word: "Koşmak" },
      { emoji: "🤸", word: "Atlamak" },
      { emoji: "🍽️", word: "Yemek" },
      { emoji: "💤", word: "Uyumak" },
      { emoji: "📖", word: "Okumak" },
      { emoji: "✍️", word: "Yazmak" }
    ]
  },
  {
    label: "Doğa Unsurları",
    pairs: [
      { emoji: "🌋", word: "Yanardağ" },
      { emoji: "🏔️", word: "Dağ" },
      { emoji: "🌊", word: "Dalga" },
      { emoji: "🌾", word: "Tarla" },
      { emoji: "🏜️", word: "Çöl" },
      { emoji: "🌲", word: "Orman" }
    ]
  },
  {
    label: "Mutfak Eşyaları",
    pairs: [
      { emoji: "🍳", word: "Tava" },
      { emoji: "🥄", word: "Kaşık" },
      { emoji: "🔪", word: "Bıçak" },
      { emoji: "🫕", word: "Tencere" },
      { emoji: "🧊", word: "Buz" },
      { emoji: "🫙", word: "Kavanoz" }
    ]
  },
  {
    label: "Okul Malzemeleri",
    pairs: [
      { emoji: "✏️", word: "Kalem" },
      { emoji: "📚", word: "Kitap" },
      { emoji: "📐", word: "Gönye" },
      { emoji: "🎒", word: "Çanta" },
      { emoji: "📏", word: "Cetvel" },
      { emoji: "🖊️", word: "Tükenmez" }
    ]
  },
  {
    label: "Bahçe Nesneleri",
    pairs: [
      { emoji: "🌱", word: "Fide" },
      { emoji: "🌺", word: "Çiçek" },
      { emoji: "🐛", word: "Solucan" },
      { emoji: "🪴", word: "Saksı" },
      { emoji: "💧", word: "Su" },
      { emoji: "🌻", word: "Ayçiçeği" }
    ]
  },
  void 0,
  {
    label: "Gezegenler",
    pairs: [
      { emoji: "🌍", word: "Dünya" },
      { emoji: "🪐", word: "Satürn" },
      { emoji: "♂️", word: "Mars" },
      { emoji: "☿", word: "Merkür" },
      { emoji: "♃", word: "Jüpiter" },
      { emoji: "🌕", word: "Ay" }
    ]
  },
  {
    label: "Orman Hayvanları",
    pairs: [
      { emoji: "🦊", word: "Tilki" },
      { emoji: "🦌", word: "Geyik" },
      { emoji: "🐻", word: "Ayı" },
      { emoji: "🐗", word: "Yaban Domuzu" },
      { emoji: "🦝", word: "Rakun" },
      { emoji: "🦔", word: "Kirpi" }
    ]
  },
  {
    label: "Spor Ekipmanları",
    pairs: [
      { emoji: "⚽", word: "Top" },
      { emoji: "🏸", word: "Badminton Raketi" },
      { emoji: "🥊", word: "Boks Eldiveni" },
      { emoji: "⛷️", word: "Kayak" },
      { emoji: "🏊", word: "Yüzücü" },
      { emoji: "🎯", word: "Hedef Tahtası" }
    ]
  },
  {
    label: "Çiçekler",
    pairs: [
      { emoji: "🌹", word: "Gül" },
      { emoji: "🌷", word: "Lale" },
      { emoji: "🌸", word: "Kiraz Çiçeği" },
      { emoji: "🌻", word: "Ayçiçeği" },
      { emoji: "🌺", word: "Hibiskus" },
      { emoji: "💐", word: "Çiçek Demeti" }
    ]
  },
  {
    label: "Teknoloji",
    pairs: [
      { emoji: "💻", word: "Dizüstü Bilgisayar" },
      { emoji: "📱", word: "Telefon" },
      { emoji: "🖨️", word: "Yazıcı" },
      { emoji: "🎮", word: "Oyun Konsolu" },
      { emoji: "📡", word: "Uydu" },
      { emoji: "🔋", word: "Pil" }
    ]
  },
  {
    label: "Mitolojik Varlıklar",
    pairs: [
      { emoji: "🐉", word: "Ejderha" },
      { emoji: "🦄", word: "Tek Boynuzlu At" },
      { emoji: "🧜", word: "Deniz Kızı" },
      { emoji: "🧚", word: "Peri" },
      { emoji: "🧙", word: "Büyücü" },
      { emoji: "🦸", word: "Süper Kahraman" }
    ]
  }
];
function shuffleArr(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
function getPairsCount(level, consecutiveWins) {
  const base = level === "okul_oncesi" ? 3 : level === "ilkokul" ? 4 : 6;
  const max = 6;
  return Math.min(base + Math.floor(consecutiveWins / 2), max);
}
function MatchingGame() {
  const navigate = useNavigate();
  const profile = getCurrentUser();
  const level = (profile == null ? void 0 : profile.level) || "ilkokul";
  const [consecutiveWins, setConsecutiveWins] = reactExports.useState(0);
  const [setIdx, setSetIdx] = reactExports.useState(
    () => Math.floor(Math.random() * PAIR_SETS.length)
  );
  const currentSet = PAIR_SETS[setIdx];
  const pairsCount = getPairsCount(level, consecutiveWins);
  const levelPairs = currentSet.pairs.slice(0, pairsCount);
  const [emojis, setEmojis] = reactExports.useState(
    () => shuffleArr(levelPairs.map((p) => p.emoji))
  );
  const [words, setWords] = reactExports.useState(
    () => shuffleArr(levelPairs.map((p) => p.word))
  );
  const [selectedEmoji, setSelectedEmoji] = reactExports.useState(null);
  const [matched, setMatched] = reactExports.useState([]);
  const [score, setScore] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    playAudio("game_start");
  }, []);
  const handleWord = (word) => {
    if (!selectedEmoji) return;
    const pair = levelPairs.find((p) => p.emoji === selectedEmoji);
    if ((pair == null ? void 0 : pair.word) === word) {
      const newMatched = [...matched, selectedEmoji, word];
      playAudio("correct_answer");
      setMatched(newMatched);
      setScore((s) => s + 10);
      setSelectedEmoji(null);
      if (newMatched.length === levelPairs.length * 2) {
        setDone(true);
        playAudio("game_end");
      }
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
      date: (/* @__PURE__ */ new Date()).toISOString()
    });
    updatePoints(profile.studentNumber, score);
    syncToBackend(profile.studentNumber);
    navigate({ to: "/games" });
  };
  const playNext = () => {
    const next = (setIdx + 1) % PAIR_SETS.length;
    setConsecutiveWins((w) => w + 1);
    setSetIdx(next);
    const nextSet = PAIR_SETS[next];
    const newPairsCount2 = getPairsCount(level, consecutiveWins + 1);
    const nextPairs = nextSet.pairs.slice(0, newPairsCount2);
    setEmojis(shuffleArr(nextPairs.map((p) => p.emoji)));
    setWords(shuffleArr(nextPairs.map((p) => p.word)));
    setSelectedEmoji(null);
    setMatched([]);
    setDone(false);
    playAudio("game_start");
  };
  const newPairsCount = getPairsCount(level, consecutiveWins + 1);
  const diffIncreasing = newPairsCount > pairsCount;
  if (done)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-8 text-center max-w-xs w-full shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎉" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-black mb-2", children: "Hepsi Eşleşti!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mb-2", children: currentSet.label }),
      diffIncreasing && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-orange-600 mb-1", children: "⬆️ Sonraki turda daha fazla eşleşme!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-black text-orange-600 my-4", children: [
        "+",
        score,
        " Puan"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "matching.next_button",
            onClick: playNext,
            className: "flex-1 bg-purple-500 text-white",
            children: "Sonraki Set"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "matching.finish_button",
            onClick: finish,
            className: "flex-1 bg-orange-500 text-white",
            children: "Bitir"
          }
        )
      ] })
    ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-orange-500 to-amber-600 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "matching.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/games" }),
          className: "text-white",
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold", children: "🔎 Resim-Kelime Eşleştirme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs", children: [
          currentSet.label,
          " • ",
          pairsCount,
          " çift"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white text-sm", children: [
        matched.length / 2,
        "/",
        levelPairs.length
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xs mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-center mb-4 text-sm", children: "Bir emoji seç, sonra eşleştiği kelimeye dokun" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-center mb-2", children: "Emoji" }),
          emojis.map((emoji, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `matching.emoji.${i + 1}`,
              onClick: () => !matched.includes(emoji) && setSelectedEmoji(emoji),
              disabled: matched.includes(emoji),
              className: `w-full py-3 rounded-2xl text-3xl transition-all hover:scale-105 active:scale-95 ${matched.includes(emoji) ? "bg-green-500 opacity-60" : selectedEmoji === emoji ? "bg-white shadow-lg scale-105" : "bg-white/20 hover:bg-white/30"}`,
              children: emoji
            },
            emoji
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-center mb-2", children: "Kelime" }),
          words.map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `matching.word.${i + 1}`,
              onClick: () => handleWord(word),
              disabled: matched.includes(word),
              className: `w-full py-3 rounded-2xl font-bold text-sm transition-all hover:scale-105 active:scale-95 ${matched.includes(word) ? "bg-green-500 text-white opacity-60" : selectedEmoji ? "bg-white text-gray-800 hover:bg-yellow-100" : "bg-white/20 text-white"}`,
              children: word
            },
            word
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/60 text-center text-xs mt-3", children: [
        "Set ",
        setIdx + 1,
        "/",
        PAIR_SETS.length
      ] })
    ] })
  ] });
}
export {
  MatchingGame as default
};
