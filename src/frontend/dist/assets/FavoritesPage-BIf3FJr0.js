import { u as useNavigate, a as useLanguage, D as useTheme, d as getCurrentUser, r as reactExports, $ as getFavorites, j as jsxRuntimeExports, y as toggleFavorite } from "./index-C-dKD6p7.js";
const TYPE_LABELS = {
  story: { tr: "Hikaye", en: "Story", icon: "📖" },
  poem: { tr: "Şiir", en: "Poem", icon: "🎭" },
  experiment: { tr: "Deney", en: "Experiment", icon: "🔬" }
};
function FavoritesPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const profile = getCurrentUser();
  const [favorites, setFavorites] = reactExports.useState(
    () => profile ? getFavorites(profile.studentNumber) : []
  );
  const [filter, setFilter] = reactExports.useState(
    "all"
  );
  const filtered = filter === "all" ? favorites : favorites.filter((f) => f.type === filter);
  function handleRemove(item) {
    if (!profile) return;
    toggleFavorite(profile.studentNumber, {
      type: item.type,
      key: item.key,
      title: item.title,
      emoji: item.emoji
    });
    setFavorites(getFavorites(profile.studentNumber));
  }
  const bg = isDark ? "min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-red-900" : "min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100";
  const cardBg = isDark ? "bg-white/10 border border-white/20" : "bg-white/80 border border-pink-200";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-white/70" : "text-gray-600";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: bg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto p-4 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: "/home" }),
          className: `${isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"} text-2xl font-bold`,
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `text-2xl font-black ${textPrimary}`, children: lang === "en" ? "⭐ My Favorites" : "⭐ Favorilerim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${textSecondary}`, children: lang === "en" ? `${favorites.length} saved items` : `${favorites.length} kayıtlı içerik` })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-5 flex-wrap", children: ["all", "story", "poem", "experiment"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setFilter(f),
        className: `px-4 py-2 rounded-full text-sm font-bold transition-all ${filter === f ? "bg-pink-500 text-white shadow" : isDark ? "bg-white/20 text-white hover:bg-white/30" : "bg-white/80 text-gray-700 hover:bg-white"}`,
        children: f === "all" ? lang === "en" ? "All" : "Tümü" : `${TYPE_LABELS[f].icon} ${lang === "en" ? TYPE_LABELS[f].en : TYPE_LABELS[f].tr}`
      },
      f
    )) }),
    filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-16 ${textSecondary}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "⭐" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: lang === "en" ? "No favorites yet" : "Henüz favori yok" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: lang === "en" ? "Tap the ⭐ icon on stories, poems, or experiments to save them here." : "Hikaye, şiir veya deney sayfalarındaki ⭐ ikonuna basarak buraya kaydedin." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((item) => {
      const typeInfo = TYPE_LABELS[item.type];
      const savedDate = new Date(item.savedAt).toLocaleDateString(
        lang === "en" ? "en-US" : "tr-TR",
        { day: "numeric", month: "short" }
      );
      const routeMap = {
        story: "/stories",
        poem: "/poems",
        experiment: "/experiments"
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${cardBg} rounded-2xl p-4 flex items-center gap-3`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: item.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `font-black text-base ${textPrimary} truncate`,
                  children: item.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs ${textSecondary}`, children: [
                typeInfo.icon,
                " ",
                lang === "en" ? typeInfo.en : typeInfo.tr,
                " ",
                "· ",
                savedDate
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => navigate({ to: routeMap[item.type] }),
                  className: `${isDark ? "bg-white/20 hover:bg-white/30 text-white" : "bg-pink-100 hover:bg-pink-200 text-pink-700"} text-xs font-bold px-3 py-2 rounded-xl transition-all`,
                  children: lang === "en" ? "Go" : "Git"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleRemove(item),
                  className: `${isDark ? "bg-red-500/30 hover:bg-red-500/50 text-red-300" : "bg-red-100 hover:bg-red-200 text-red-600"} text-xs font-bold px-3 py-2 rounded-xl transition-all`,
                  title: lang === "en" ? "Remove" : "Kaldır",
                  children: "🗑"
                }
              )
            ] })
          ]
        },
        item.id
      );
    }) })
  ] }) });
}
export {
  FavoritesPage as default
};
