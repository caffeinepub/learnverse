import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, S as getProfiles, j as jsxRuntimeExports, B as Button, o as getBadgeLevel, l as AVATARS, L as LEVEL_NAMES, n as BADGE_EMOJIS } from "./index-LlKdgcmg.js";
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
const rankIcons = ["🥇", "🥈", "🥉"];
function LeaderboardPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const currentUser = getCurrentUser();
  const [level, setLevel] = reactExports.useState((currentUser == null ? void 0 : currentUser.level) || "ilkokul");
  const allProfiles = getProfiles();
  const filtered = allProfiles.filter((p) => p.level === level).sort((a, b) => b.totalPoints - a.totalPoints).slice(0, 10);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-yellow-500 to-amber-700 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "leaderboard.back_button",
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
      "🏆 ",
      t("leaderboard_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "leaderboard.tab",
        onClick: () => setLevel(t2.key),
        className: `py-2 rounded-2xl font-bold text-xs transition-all ${level === t2.key ? "bg-white text-amber-700" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: t2.label
      },
      t2.key
    )) }),
    filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "leaderboard.empty_state",
        className: "bg-white/20 rounded-3xl p-8 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", children: "🏜️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg", children: t("leaderboard_empty") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mt-2", children: "İlk sen ol!" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((p, idx) => {
      const isMe = p.studentNumber === (currentUser == null ? void 0 : currentUser.studentNumber);
      const badge = getBadgeLevel(p.totalPoints);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `leaderboard.item.${idx + 1}`,
          className: `rounded-2xl p-4 flex items-center gap-3 transition-all ${isMe ? "bg-white border-2 border-yellow-300 shadow-lg shadow-yellow-300/30" : "bg-white/20 backdrop-blur"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `text-2xl font-black w-8 text-center ${isMe ? "text-amber-600" : "text-white"}`,
                children: idx < 3 ? rankIcons[idx] : `#${idx + 1}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: AVATARS[p.avatarIndex] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `font-black ${isMe ? "text-gray-800" : "text-white"}`,
                  children: [
                    p.username,
                    " ",
                    isMe && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-500 text-xs", children: "(Sen)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `text-xs ${isMe ? "text-gray-500" : "text-white/60"}`,
                  children: LEVEL_NAMES[p.level]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `font-black text-sm ${isMe ? "text-amber-600" : "text-yellow-300"}`,
                  children: [
                    "⭐ ",
                    p.totalPoints
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: BADGE_EMOJIS[badge - 1] })
            ] })
          ]
        },
        p.studentNumber
      );
    }) })
  ] }) });
}
export {
  LeaderboardPage as default
};
