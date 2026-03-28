import { u as useNavigate, a as useLanguage, j as jsxRuntimeExports, B as Button } from "./index-CGT7mtIO.js";
function GamesPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const games = [
    {
      icon: "🇴",
      title: t("game_memory"),
      desc: "İki eşlеşeni bul!",
      path: "/games/memory",
      gradient: "from-pink-500 to-rose-500",
      ocid: "games.memory_card"
    },
    {
      icon: "🗒️",
      title: t("game_word"),
      desc: "Kelimeleri bul",
      path: "/games/wordsearch",
      gradient: "from-blue-500 to-indigo-500",
      ocid: "games.wordsearch_card"
    },
    {
      icon: "➖",
      title: t("game_math"),
      desc: "Hızlı hesapla!",
      path: "/games/math",
      gradient: "from-green-500 to-teal-500",
      ocid: "games.math_card"
    },
    {
      icon: "🔎",
      title: t("game_matching"),
      desc: "Eşleştir",
      path: "/games/matching",
      gradient: "from-orange-500 to-amber-500",
      ocid: "games.matching_card"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 to-green-900 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "games.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-6", children: [
      "🎮 ",
      t("games_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: games.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": g.ocid,
        onClick: () => navigate({ to: g.path }),
        className: `bg-gradient-to-br ${g.gradient} rounded-3xl p-5 text-left shadow-xl hover:scale-105 transition-transform active:scale-95`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-2", children: g.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base leading-tight", children: g.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mt-1", children: g.desc })
        ]
      },
      g.path
    )) })
  ] });
}
export {
  GamesPage as default
};
