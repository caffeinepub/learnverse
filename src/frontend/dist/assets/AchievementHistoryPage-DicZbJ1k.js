import { u as useNavigate, a as useLanguage, D as useTheme, d as getCurrentUser, r as reactExports, j as jsxRuntimeExports } from "./index-LlKdgcmg.js";
function getAchievementHistory(studentNumber) {
  try {
    const raw = localStorage.getItem(
      `learnverse_achievements_${studentNumber}`
    );
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function addAchievement(studentNumber, entry) {
  const history = getAchievementHistory(studentNumber);
  const newEntry = {
    ...entry,
    id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
    date: (/* @__PURE__ */ new Date()).toISOString()
  };
  history.unshift(newEntry);
  localStorage.setItem(
    `learnverse_achievements_${studentNumber}`,
    JSON.stringify(history.slice(0, 200))
  );
}
const MONTH_NAMES_TR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
];
const MONTH_NAMES_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const MONTH_NAMES_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
function getMonthName(lang, month) {
  if (lang === "en") return MONTH_NAMES_EN[month];
  if (lang === "es") return MONTH_NAMES_ES[month];
  return MONTH_NAMES_TR[month];
}
function getTitle(lang) {
  if (lang === "en") return "Achievement History";
  if (lang === "es") return "Historial de logros";
  return "Başarı Geçmişi";
}
function getEmptyMsg(lang) {
  if (lang === "en")
    return "No achievements yet — keep learning and earning badges! 🚀";
  if (lang === "es")
    return "¡Aún no hay logros — sigue aprendiendo y ganando insignias! 🚀";
  return "Henüz başarı yok — öğrenmeye devam et ve rozetler kazan! 🚀";
}
function AchievementHistoryPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const profile = getCurrentUser();
  const history = reactExports.useMemo(() => {
    if (!profile) return [];
    return getAchievementHistory(profile.studentNumber);
  }, [profile]);
  const grouped = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const entry of history) {
      const d = new Date(entry.date);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(entry);
    }
    return Array.from(map.entries()).map(([key, entries]) => {
      const [year, month] = key.split("-").map(Number);
      return { year, month, entries };
    });
  }, [history]);
  const bg = isDark ? "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900" : "min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-100";
  const cardBg = isDark ? "bg-white/10 backdrop-blur" : "bg-white/80 shadow-sm";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const entryBg = isDark ? "bg-white/5 hover:bg-white/10" : "bg-gray-50 hover:bg-gray-100";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: bg, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `sticky top-0 z-10 ${isDark ? "bg-indigo-950/80" : "bg-white/80"} backdrop-blur-md border-b ${isDark ? "border-white/10" : "border-gray-200"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "achievement_history.back_button",
              onClick: () => navigate({ to: "/profile" }),
              className: `p-2 rounded-xl transition-colors ${isDark ? "hover:bg-white/10 text-white" : "hover:bg-gray-100 text-gray-700"}`,
              children: "←"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: `text-lg font-black ${textMain}`, children: [
            "🏆 ",
            getTitle(lang)
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-6 space-y-6", children: [
      history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "achievement_history.empty_state",
          className: `${cardBg} rounded-3xl p-8 text-center`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🌟" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${textSub} text-sm leading-relaxed`, children: getEmptyMsg(lang) })
          ]
        }
      ) : grouped.map(({ year, month, entries }, groupIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-px flex-1 ${isDark ? "bg-white/20" : "bg-gray-200"}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isDark ? "bg-white/10 text-white/70" : "bg-gray-100 text-gray-500"}`,
              children: [
                getMonthName(lang, month),
                " ",
                year
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-px flex-1 ${isDark ? "bg-white/20" : "bg-gray-200"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: entries.map((entry, i) => {
          const globalIdx = groupIdx * 10 + i + 1;
          const d = new Date(entry.date);
          const dateStr = d.toLocaleDateString(
            lang === "tr" ? "tr-TR" : lang === "es" ? "es-ES" : "en-US",
            {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit"
            }
          );
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `achievement_history.item.${globalIdx}`,
              className: `${entryBg} rounded-2xl p-4 flex items-center gap-4 transition-colors`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${isDark ? "bg-white/10" : "bg-yellow-50"}`,
                    children: entry.emoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `font-bold text-sm ${textMain} truncate`,
                      children: entry.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${textSub} truncate mt-0.5`, children: entry.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${textSub} mt-1`, children: dateStr })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-yellow-400 font-black text-sm", children: [
                    "+",
                    entry.points
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${textSub}`, children: "puan" })
                ] })
              ]
            },
            entry.id
          );
        }) })
      ] }, `${year}-${month}`)),
      history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${cardBg} rounded-3xl p-4 flex justify-between items-center`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-bold ${textMain}`, children: lang === "en" ? "Total achievements" : lang === "es" ? "Total logros" : "Toplam başarı" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-400 font-black", children: history.length })
          ]
        }
      )
    ] })
  ] });
}
export {
  addAchievement,
  AchievementHistoryPage as default,
  getAchievementHistory
};
