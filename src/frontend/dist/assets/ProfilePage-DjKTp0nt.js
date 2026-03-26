import { u as useNavigate, a as useLanguage, z as useTheme, r as reactExports, d as getCurrentUser, o as getBadgeLevel, X as getQuizResults, W as getGameResults, F as getStreak, j as jsxRuntimeExports, l as AVATARS, L as LEVEL_NAMES, n as BADGE_EMOJIS, J as BADGE_NAMES, B as Button, C as getDailyGoals, P as getTopicStats, Z as getFavorites } from "./index-CJOOPb92.js";
import { P as Progress } from "./progress-DSsA1-y_.js";
import { getAchievementHistory } from "./AchievementHistoryPage-E5nUtVTR.js";
import { m as motion } from "./proxy-Qh6q3IJc.js";
import "./index-DBKRZ9XY.js";
function downloadCertificateAsPng(profile, badgeLevel) {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 560;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const bg = ctx.createLinearGradient(0, 0, 800, 560);
  bg.addColorStop(0, "#fff7ed");
  bg.addColorStop(1, "#fef3c7");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 800, 560);
  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 8;
  ctx.strokeRect(16, 16, 768, 528);
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 3;
  ctx.strokeRect(28, 28, 744, 504);
  const corners = [
    [28, 28],
    [772, 28],
    [28, 532],
    [772, 532]
  ];
  for (const [cx, cy] of corners) {
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, Math.PI * 2);
    ctx.fill();
  }
  const headerGrad = ctx.createLinearGradient(0, 48, 800, 48);
  headerGrad.addColorStop(0, "#f97316");
  headerGrad.addColorStop(0.5, "#f59e0b");
  headerGrad.addColorStop(1, "#ec4899");
  ctx.fillStyle = headerGrad;
  ctx.fillRect(40, 48, 720, 6);
  ctx.font = "24px serif";
  ctx.fillStyle = "#f59e0b";
  ctx.textAlign = "center";
  ctx.fillText("⭐  ⭐  ⭐", 400, 95);
  ctx.font = "bold 38px sans-serif";
  ctx.fillStyle = "#1f2937";
  ctx.fillText("LearnVerse", 400, 145);
  ctx.font = "bold 16px sans-serif";
  ctx.fillStyle = "#f97316";
  ctx.fillText("BAŞARI SERTİFİKASI", 400, 175);
  ctx.strokeStyle = "#fde68a";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(120, 190);
  ctx.lineTo(680, 190);
  ctx.stroke();
  ctx.font = "80px serif";
  ctx.fillText(AVATARS[profile.avatarIndex], 400, 285);
  ctx.font = "bold 36px sans-serif";
  ctx.fillStyle = "#111827";
  ctx.fillText(profile.username, 400, 335);
  ctx.font = "16px sans-serif";
  ctx.fillStyle = "#6b7280";
  ctx.fillText(LEVEL_NAMES[profile.level], 400, 360);
  ctx.fillStyle = "#fffbeb";
  const boxX = 270;
  const boxY = 378;
  const boxW = 260;
  const boxH = 68;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 16);
  ctx.fill();
  ctx.strokeStyle = "#fbbf24";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 16);
  ctx.stroke();
  ctx.font = "32px serif";
  ctx.fillText(BADGE_EMOJIS[badgeLevel - 1], 316, 422);
  ctx.font = "bold 22px sans-serif";
  ctx.fillStyle = "#1f2937";
  ctx.fillText(BADGE_NAMES[badgeLevel - 1], 420, 420);
  ctx.font = "12px sans-serif";
  ctx.fillStyle = "#9ca3af";
  ctx.fillText("Rozet", 420, 436);
  ctx.font = "bold 26px sans-serif";
  ctx.fillStyle = "#f97316";
  ctx.fillText(`⭐ ${profile.totalPoints} Puan`, 400, 478);
  ctx.font = "13px sans-serif";
  ctx.fillStyle = "#9ca3af";
  ctx.fillText((/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR"), 400, 500);
  const footerGrad = ctx.createLinearGradient(0, 530, 800, 530);
  footerGrad.addColorStop(0, "#ec4899");
  footerGrad.addColorStop(0.5, "#f59e0b");
  footerGrad.addColorStop(1, "#f97316");
  ctx.fillStyle = footerGrad;
  ctx.fillRect(40, 506, 720, 6);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `learnverse-sertifika-${profile.username.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 5e3);
  }, "image/png");
}
function TopicPerformanceChart({
  studentNumber,
  isDark
}) {
  const stats = getTopicStats(studentNumber);
  const topics = [
    { id: "science", icon: "🔬", label: "Fen", color: "bg-emerald-400" },
    { id: "history", icon: "🏛️", label: "Tarih", color: "bg-amber-400" },
    { id: "geography", icon: "🌍", label: "Coğrafya", color: "bg-blue-400" },
    { id: "math", icon: "🔢", label: "Matematik", color: "bg-rose-400" },
    { id: "general", icon: "💡", label: "Genel", color: "bg-violet-400" }
  ];
  const hasAnyData = topics.some((tp) => stats[tp.id].total > 0);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const barBg = isDark ? "bg-white/10" : "bg-black/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${card} rounded-2xl p-4`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold mb-3 flex items-center gap-2`, children: "📊 Konu Bazlı Başarı" }),
    !hasAnyData ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "profile.topic_chart.empty_state",
        className: "text-center py-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "📚" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-sm`, children: "Henüz konu quizi yapılmadı" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-xs mt-1 opacity-60`, children: "Quiz sayfasından konu seç!" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: topics.map((tp) => {
      const s = stats[tp.id];
      const pct = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${textMain} text-sm font-medium`, children: [
            tp.icon,
            " ",
            tp.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${textSub} text-xs`, children: s.total > 0 ? `${s.correct}/${s.total} (%${pct})` : "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2.5 ${barBg} rounded-full overflow-hidden`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: `h-full ${tp.color} rounded-full`,
            initial: { width: 0 },
            animate: { width: s.total > 0 ? `${pct}%` : "0%" },
            transition: { duration: 0.8, delay: 0.1 }
          }
        ) })
      ] }, tp.id);
    }) })
  ] });
}
function StudyCalendar({
  studentNumber,
  isDark
}) {
  const [viewDate, setViewDate] = reactExports.useState(() => /* @__PURE__ */ new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const activeDays = reactExports.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    const quizResults = getQuizResults().filter(
      (r) => r.studentNumber === studentNumber
    );
    const gameResults = getGameResults().filter(
      (r) => r.studentNumber === studentNumber
    );
    for (const r of [...quizResults, ...gameResults]) {
      const d = new Date(r.date);
      if (d.getFullYear() === year && d.getMonth() === month)
        set.add(d.getDate());
    }
    const streakData = getStreak(studentNumber);
    if (streakData.current > 0 && streakData.lastDate) {
      const last = new Date(streakData.lastDate);
      for (let i = 0; i < streakData.current; i++) {
        const d = new Date(last);
        d.setDate(d.getDate() - i);
        if (d.getFullYear() === year && d.getMonth() === month)
          set.add(d.getDate());
      }
    }
    return set;
  }, [studentNumber, year, month]);
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = /* @__PURE__ */ new Date();
  const monthNames = [
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
  const dayHeaders = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);
  const isToday = (d) => today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const btnHover = isDark ? "hover:bg-white/20" : "hover:bg-black/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${card} rounded-2xl p-4`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "profile.pagination_prev",
          onClick: () => setViewDate(new Date(year, month - 1, 1)),
          className: `${textMain} ${btnHover} w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all`,
          children: "‹"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `${textMain} font-bold text-sm`, children: [
        "📅 ",
        monthNames[month],
        " ",
        year
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "profile.pagination_next",
          onClick: () => setViewDate(new Date(year, month + 1, 1)),
          className: `${textMain} ${btnHover} w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all`,
          children: "›"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 mb-1", children: dayHeaders.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-center ${textSub} text-xs font-bold py-0.5`,
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1", children: cells.map((day, idx) => {
      if (!day) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}, `empty-${idx}`);
      const active = activeDays.has(day);
      const todayCell = isToday(day);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `aspect-square flex items-center justify-center rounded-lg text-xs font-bold transition-all ${active ? "bg-orange-400 text-white shadow-sm" : todayCell ? isDark ? "bg-white/30 text-white ring-1 ring-white" : "bg-orange-100 text-orange-700 ring-1 ring-orange-300" : isDark ? "bg-white/5 text-white/40" : "bg-black/5 text-gray-400"}`,
          children: active ? "🔥" : day
        },
        day
      );
    }) }),
    activeDays.size === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-center ${textSub} text-xs mt-2 opacity-60`,
        "data-ocid": "profile.calendar.empty_state",
        children: "Bu ay henüz aktivite yok"
      }
    )
  ] });
}
function DailyTasksCard({
  studentNumber,
  isDark
}) {
  const goals = getDailyGoals(studentNumber);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const tasks = [
    {
      icon: "🧩",
      label: "Günlük Quiz",
      done: goals.quizDone,
      pts: "+20"
    },
    {
      icon: "📖",
      label: "3 İçerik Oku",
      done: goals.contentReads >= 3,
      progress: Math.min(goals.contentReads, 3),
      total: 3,
      pts: "+15"
    }
  ];
  const completedCount = tasks.filter((t) => t.done).length;
  const totalCount = tasks.length;
  const allDone = completedCount === totalCount;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${card} rounded-2xl p-4`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold flex items-center gap-2`, children: "✅ Bugünün Görevleri" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: `text-xs font-bold px-2 py-0.5 rounded-full ${allDone ? "bg-green-500 text-white" : isDark ? "bg-white/20 text-white/70" : "bg-black/10 text-gray-600"}`,
          children: [
            completedCount,
            "/",
            totalCount
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${task.done ? isDark ? "bg-green-500/20" : "bg-green-50" : isDark ? "bg-white/5" : "bg-white/50"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: task.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `text-sm font-semibold ${textMain} ${task.done ? "line-through opacity-60" : ""}`,
                children: task.label
              }
            ),
            "progress" in task && !task.done && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Progress,
                {
                  value: task.progress / task.total * 100,
                  className: "h-1.5"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs ${textSub} mt-0.5 block`, children: [
                task.progress,
                "/",
                task.total
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-xs font-bold ${task.done ? "text-green-400" : isDark ? "text-yellow-300" : "text-orange-500"}`,
              children: task.done ? "✓" : task.pts
            }
          )
        ]
      },
      task.label
    )) }),
    allDone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className: "mt-3 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: "🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-xs font-bold ${isDark ? "text-yellow-300" : "text-orange-600"} mt-1`,
              children: "Tüm görevler tamamlandı! +30 bonus puan!"
            }
          )
        ]
      }
    )
  ] });
}
function RecommendationsCard({
  studentNumber,
  isDark
}) {
  const stats = getTopicStats(studentNumber);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const topics = [
    { id: "science", icon: "🔬", label: "Fen Bilimleri", route: "/science" },
    { id: "history", icon: "🏛️", label: "Tarih", route: "/history" },
    { id: "geography", icon: "🌍", label: "Coğrafya", route: "/geography" },
    { id: "math", icon: "🔢", label: "Matematik", route: "/math-practice" },
    { id: "general", icon: "💡", label: "Genel Kültür", route: "/culture" }
  ];
  const navigate = useNavigate();
  const weakTopics = topics.filter((tp) => {
    const s = stats[tp.id];
    if (s.total < 3) return false;
    return s.correct / s.total < 0.6;
  });
  const unstartedTopics = topics.filter((tp) => stats[tp.id].total === 0);
  const recommendations = [
    ...weakTopics.slice(0, 2).map((tp) => ({
      ...tp,
      reason: `%${Math.round(stats[tp.id].correct / stats[tp.id].total * 100)} doğruluk — pratik yap!`,
      urgent: true
    })),
    ...unstartedTopics.slice(0, 2).map((tp) => ({
      ...tp,
      reason: "Henüz başlamadın — dene!",
      urgent: false
    }))
  ].slice(0, 3);
  if (recommendations.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${card} rounded-2xl p-4`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold mb-3 flex items-center gap-2`, children: "🎯 Sana Özel Öneriler" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: recommendations.map((rec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "profile.recommendation.button",
        onClick: () => navigate({ to: rec.route }),
        className: `w-full flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all text-left ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-white/60 hover:bg-white/90"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: rec.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-semibold ${textMain}`, children: rec.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${textSub}`, children: rec.reason })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-xs px-2 py-0.5 rounded-full font-bold ${rec.urgent ? "bg-rose-500/20 text-rose-400" : isDark ? "bg-white/10 text-white/60" : "bg-blue-100 text-blue-600"}`,
              children: rec.urgent ? "Zayıf" : "Yeni"
            }
          )
        ]
      },
      rec.id
    )) })
  ] });
}
function FavoritesShortcut({
  studentNumber,
  isDark
}) {
  const navigate = useNavigate();
  const favs = getFavorites(studentNumber);
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  if (favs.length === 0) return null;
  const preview = favs.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": "profile.favorites.button",
      onClick: () => navigate({ to: "/favorites" }),
      className: `${card} rounded-2xl p-4 w-full text-left transition-all ${isDark ? "hover:bg-white/15" : "hover:bg-black/10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold flex items-center gap-2`, children: "⭐ Favorilerim" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs ${textSub}`, children: [
            favs.length,
            " içerik ›"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
          preview.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `text-xs px-2.5 py-1 rounded-full font-medium ${isDark ? "bg-yellow-400/20 text-yellow-300" : "bg-yellow-100 text-yellow-700"}`,
              children: [
                f.type === "story" ? "📖" : f.type === "poem" ? "🎭" : "🔬",
                " ",
                f.title.slice(0, 20),
                f.title.length > 20 ? "…" : ""
              ]
            },
            f.id
          )),
          favs.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `text-xs px-2.5 py-1 rounded-full ${isDark ? "bg-white/10 text-white/50" : "bg-gray-100 text-gray-500"}`,
              children: [
                "+",
                favs.length - 4,
                " daha"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function AchievementPreview({
  entries,
  isDark,
  onViewAll
}) {
  const card = isDark ? "bg-white/10" : "bg-black/5";
  const textMain = isDark ? "text-white" : "text-gray-800";
  const textSub = isDark ? "text-white/60" : "text-gray-500";
  const itemBg = isDark ? "bg-white/5" : "bg-white/60";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${card} rounded-2xl p-4`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold flex items-center gap-2`, children: "🏆 Son Başarılar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "profile.achievement_history.button",
          onClick: onViewAll,
          className: `text-xs ${textSub} hover:underline`,
          children: "Tümünü gör ›"
        }
      )
    ] }),
    entries.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "profile.achievements.empty_state",
        className: "text-center py-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1", children: "🌟" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-xs`, children: "Henüz başarı yok — öğrenmeye devam et!" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: entries.slice(0, 3).map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `profile.achievement.item.${i + 1}`,
        className: `${itemBg} rounded-xl p-3 flex items-center gap-3`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl w-8 text-center", children: entry.emoji }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-semibold ${textMain} truncate`, children: entry.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs ${textSub} truncate`, children: entry.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-yellow-400 font-bold text-sm", children: [
            "+",
            entry.points
          ] })
        ]
      },
      entry.id
    )) })
  ] });
}
function getProgressItems(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}
function getSeenBadge(studentNumber) {
  return Number(
    localStorage.getItem(`learnverse_badge_seen_${studentNumber}`) || "1"
  );
}
function setSeenBadge(studentNumber, level) {
  localStorage.setItem(`learnverse_badge_seen_${studentNumber}`, String(level));
}
const CONTENT_SECTIONS = [
  { icon: "📖", label: "Hikayeler", key: "stories" },
  { icon: "🎭", label: "Şiirler", key: "poems" },
  { icon: "🔬", label: "Deneyler", key: "experiments" },
  { icon: "🧩", label: "Bulmacalar", key: "puzzles" },
  { icon: "🗺️", label: "Türkiye Haritası", key: "turkeymap" },
  { icon: "🎵", label: "Müzik & Sanat", key: "artmusic" }
];
function ProfilePage() {
  var _a;
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [profile, setProfile] = reactExports.useState(getCurrentUser());
  const [copied, setCopied] = reactExports.useState(false);
  const [showCertificate, setShowCertificate] = reactExports.useState(false);
  const [shareMsg, setShareMsg] = reactExports.useState("");
  const [downloading, setDownloading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const p = getCurrentUser();
    if (!p) {
      navigate({ to: "/" });
      return;
    }
    setProfile(p);
    const currentBadge = getBadgeLevel(p.totalPoints);
    const seenBadge = getSeenBadge(p.studentNumber);
    if (currentBadge > seenBadge) {
      setShowCertificate(true);
      setSeenBadge(p.studentNumber, currentBadge);
    }
  }, []);
  if (!profile) return null;
  const badge = getBadgeLevel(profile.totalPoints);
  const quizResults = getQuizResults().filter(
    (r) => r.studentNumber === profile.studentNumber
  );
  const gameResults = getGameResults().filter(
    (r) => r.studentNumber === profile.studentNumber
  );
  const streak = getStreak(profile.studentNumber);
  const achievements = getAchievementHistory(profile.studentNumber);
  const contentProgress = CONTENT_SECTIONS.map((s) => ({
    ...s,
    count: getProgressItems(
      `learnverse_progress_${s.key}_${profile.studentNumber}`
    ).length
  }));
  const copyNumber = () => {
    navigator.clipboard.writeText(profile.studentNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const handleDownloadCertificate = () => {
    setDownloading(true);
    try {
      downloadCertificateAsPng(profile, badge);
    } finally {
      setTimeout(() => setDownloading(false), 1e3);
    }
  };
  const shareCertificate = async () => {
    const text = `🎓 LearnVerse Başarı Sertifikası
${profile.username} — ${LEVEL_NAMES[profile.level]}
Rozet: ${BADGE_EMOJIS[badge - 1]} ${BADGE_NAMES[badge - 1]}
${t("profile_total_points")}: ${profile.totalPoints}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "LearnVerse Sertifikası", text });
      } catch {
      }
    } else {
      await navigator.clipboard.writeText(text);
      setShareMsg("Sertifika metni kopyalandı!");
      setTimeout(() => setShareMsg(""), 3e3);
    }
  };
  const pageBg = isDark ? "min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950" : "min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500";
  const heroBg = isDark ? "bg-white/10" : "bg-white/25";
  const cardBg = isDark ? "bg-white/10" : "bg-white/20";
  const textMain = isDark ? "text-white" : "text-white";
  const textSub = isDark ? "text-white/60" : "text-white/80";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${pageBg} pb-8`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `sticky top-0 z-20 ${isDark ? "bg-slate-900/80" : "bg-orange-500/80"} backdrop-blur-md border-b ${isDark ? "border-white/10" : "border-white/20"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 py-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "profile.back_button",
              onClick: () => navigate({ to: "/home" }),
              className: `p-2 rounded-xl transition-colors ${isDark ? "hover:bg-white/10 text-white" : "hover:bg-white/20 text-white"}`,
              children: "←"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-black text-lg", children: "👤 Profilim" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto px-4 pt-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: `${heroBg} backdrop-blur rounded-3xl p-6 text-center relative overflow-hidden`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-2", children: AVATARS[profile.avatarIndex] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-black ${textMain}`, children: profile.username }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${textSub} text-sm mb-3`, children: LEVEL_NAMES[profile.level] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/20 rounded-2xl px-4 py-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: BADGE_EMOJIS[badge - 1] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${textMain} font-bold`, children: BADGE_NAMES[badge - 1] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-black ${textMain}`, children: profile.totalPoints }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-xs`, children: "Puan" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `text-xl font-black ${textMain} flex items-center justify-center gap-1`,
                    children: [
                      "🔥 ",
                      streak.current
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-xs`, children: "Seri" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-black ${textMain}`, children: quizResults.length + gameResults.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-xs`, children: "Aktivite" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "profile.open_modal_button",
                onClick: () => setShowCertificate(true),
                className: "mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 font-black text-sm px-5 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95",
                children: "🎓 Sertifikamı Gör"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.05 },
          className: `${cardBg} backdrop-blur rounded-2xl px-4 py-3 flex items-center gap-2`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${textSub} text-xs mb-0.5`, children: "Öğrenci Numarası" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: `${textMain} font-mono text-sm tracking-wider`, children: (_a = profile.studentNumber.match(/.{1,4}/g)) == null ? void 0 : _a.join(" ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                "data-ocid": "profile.copy_button",
                size: "sm",
                onClick: copyNumber,
                className: "bg-white/20 hover:bg-white/30 text-white border-0 text-xs",
                children: copied ? "✓" : "📋"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DailyTasksCard,
            {
              studentNumber: profile.studentNumber,
              isDark
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.15 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TopicPerformanceChart,
            {
              studentNumber: profile.studentNumber,
              isDark
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            RecommendationsCard,
            {
              studentNumber: profile.studentNumber,
              isDark
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.25 },
          className: `${cardBg} backdrop-blur rounded-2xl p-4`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `${textMain} font-bold mb-3`, children: [
              "🏅 ",
              t("profile_badges")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: BADGE_NAMES.map((name, i) => {
              const earned = badge > i;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex flex-col items-center gap-1 rounded-2xl p-2 transition-all ${earned ? "bg-white/20" : "bg-white/5 opacity-40"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: BADGE_EMOJIS[i] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `${textMain} text-xs text-center leading-tight font-bold`,
                        children: name
                      }
                    ),
                    earned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-xs", children: "✓" })
                  ]
                },
                name
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "profile.download_button",
                onClick: handleDownloadCertificate,
                disabled: downloading,
                className: "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:opacity-90 disabled:opacity-60 text-yellow-900 font-black text-sm py-2.5 rounded-xl transition-all shadow active:scale-95",
                children: downloading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin", children: "⏳" }),
                  " Hazırlanıyor..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📥" }),
                  " Sertifikayı İndir (PNG)"
                ] })
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.3 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            AchievementPreview,
            {
              entries: achievements,
              isDark,
              onViewAll: () => navigate({ to: "/achievement-history" })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.35 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${cardBg} backdrop-blur rounded-2xl p-4`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold mb-3`, children: "📅 Çalışma Takvimi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StudyCalendar,
              {
                studentNumber: profile.studentNumber,
                isDark
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.4 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FavoritesShortcut,
            {
              studentNumber: profile.studentNumber,
              isDark
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.45 },
          className: `${cardBg} backdrop-blur rounded-2xl p-4`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `${textMain} font-bold mb-3`, children: [
              "📊 ",
              t("profile_content_completed")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: contentProgress.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white/10 rounded-xl p-3 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: s.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `${textMain} font-bold text-sm leading-tight`,
                        children: s.label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${textSub} text-xs`, children: [
                      s.count,
                      " tamamlandı"
                    ] })
                  ] })
                ]
              },
              s.key
            )) })
          ]
        }
      ),
      quizResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.5 },
          className: `${cardBg} backdrop-blur rounded-2xl p-4`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `${textMain} font-bold mb-3`, children: t("profile_quiz_history") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quizResults.slice(-5).reverse().map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between items-center bg-white/10 rounded-xl p-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${textSub} text-sm`, children: new Date(r.date).toLocaleDateString("tr-TR") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${textMain} font-bold`, children: [
                    r.correct,
                    "/",
                    r.total
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-300 text-sm", children: [
                    "+",
                    r.score,
                    " puan"
                  ] })
                ]
              },
              r.date
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center pt-2 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xs ${textSub} opacity-50`, children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        ". Built with love using",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline",
            children: "caffeine.ai"
          }
        )
      ] }) })
    ] }),
    showCertificate && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "profile.modal",
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
        onClick: (e) => {
          if (e.target === e.currentTarget) setShowCertificate(false);
        },
        onKeyDown: (e) => {
          if (e.key === "Escape") setShowCertificate(false);
        },
        tabIndex: -1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.85, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            className: "relative bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: "⭐ ⭐ ⭐" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-black text-gray-800 mb-1", children: "LearnVerse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-orange-500 uppercase tracking-widest mb-4", children: "Başarı Sertifikası" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-3", children: AVATARS[profile.avatarIndex] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-gray-800 mb-1", children: profile.username }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500 mb-4", children: LEVEL_NAMES[profile.level] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-2xl px-5 py-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: BADGE_EMOJIS[badge - 1] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: "Rozet" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-gray-800", children: BADGE_NAMES[badge - 1] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 rounded-2xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-orange-500", children: profile.totalPoints }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: t("profile_total_points") })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-pink-50 rounded-2xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-pink-500", children: (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500", children: "Tarih" })
                  ] })
                ] }),
                shareMsg && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": "profile.success_state",
                    className: "text-green-600 text-sm mb-2",
                    children: shareMsg
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "profile.secondary_button",
                        onClick: shareCertificate,
                        className: "flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold rounded-xl",
                        children: "📤 Paylaş"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        "data-ocid": "profile.close_button",
                        variant: "outline",
                        onClick: () => setShowCertificate(false),
                        className: "flex-1 rounded-xl",
                        children: "Kapat"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "profile.download_button",
                      onClick: () => {
                        handleDownloadCertificate();
                        setShowCertificate(false);
                      },
                      className: "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-black text-sm py-2.5 rounded-xl transition-all hover:opacity-90 active:scale-95",
                      children: "📥 PNG Olarak İndir"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "profile.close_button",
                  onClick: () => setShowCertificate(false),
                  className: "absolute top-4 right-4 w-7 h-7 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 text-sm font-bold flex items-center justify-center",
                  children: "✕"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  ProfilePage as default
};
