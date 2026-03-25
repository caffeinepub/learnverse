import { u as useNavigate, a as useLanguage, r as reactExports, d as getCurrentUser, o as getBadgeLevel, V as getQuizResults, U as getGameResults, D as getStreak, j as jsxRuntimeExports, B as Button, l as AVATARS, L as LEVEL_NAMES, n as BADGE_EMOJIS, G as BADGE_NAMES, N as getTopicStats } from "./index-CVbKHV8b.js";
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
function TopicPerformanceChart({ studentNumber }) {
  const stats = getTopicStats(studentNumber);
  const topics = [
    {
      id: "science",
      icon: "🔬",
      label: "Fen / Science",
      color: "bg-emerald-400"
    },
    {
      id: "history",
      icon: "🏛️",
      label: "Tarih / History",
      color: "bg-amber-400"
    },
    {
      id: "geography",
      icon: "🌍",
      label: "Coğrafya / Geography",
      color: "bg-blue-400"
    },
    { id: "math", icon: "🔢", label: "Matematik / Math", color: "bg-rose-400" },
    {
      id: "general",
      icon: "💡",
      label: "Genel / General",
      color: "bg-violet-400"
    }
  ];
  const hasAnyData = topics.some((tp) => stats[tp.id].total > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold mb-3", children: "📊 Konu Bazlı Başarı" }),
    !hasAnyData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "profile.empty_state", className: "text-center py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "📚" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-sm", children: "Henüz konu quizi yapılmadı" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-xs mt-1", children: "Quiz sayfasından konu seçerek oyna!" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: topics.map((tp) => {
      const s = stats[tp.id];
      const pct = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-sm font-medium", children: [
            tp.icon,
            " ",
            tp.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-xs", children: s.total > 0 ? `${s.correct}/${s.total} (%${pct})` : "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-white/20 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-full ${tp.color} rounded-full transition-all duration-700`,
            style: { width: s.total > 0 ? `${pct}%` : "0%" }
          }
        ) })
      ] }, tp.id);
    }) })
  ] });
}
function StudyCalendar({ studentNumber }) {
  const { t } = useLanguage();
  const [viewDate, setViewDate] = reactExports.useState(() => /* @__PURE__ */ new Date());
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const activeDays = /* @__PURE__ */ new Set();
  const quizResults = getQuizResults().filter(
    (r) => r.studentNumber === studentNumber
  );
  const gameResults = getGameResults().filter(
    (r) => r.studentNumber === studentNumber
  );
  for (const r of [...quizResults, ...gameResults]) {
    const d = new Date(r.date);
    if (d.getFullYear() === year && d.getMonth() === month) {
      activeDays.add(d.getDate());
    }
  }
  const streakData = getStreak(studentNumber);
  if (streakData.current > 0 && streakData.lastDate) {
    const last = new Date(streakData.lastDate);
    for (let i = 0; i < streakData.current; i++) {
      const d = new Date(last);
      d.setDate(d.getDate() - i);
      if (d.getFullYear() === year && d.getMonth() === month) {
        activeDays.add(d.getDate());
      }
    }
  }
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
  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));
  const isToday = (d) => today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "profile.pagination_prev",
          onClick: prevMonth,
          className: "text-white bg-white/20 hover:bg-white/30 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all",
          children: "‹"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold", children: [
        "📅 ",
        t("study_calendar"),
        " — ",
        monthNames[month],
        " ",
        year
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "profile.pagination_next",
          onClick: nextMonth,
          className: "text-white bg-white/20 hover:bg-white/30 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all",
          children: "›"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-1 mb-1", children: dayHeaders.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center text-white/60 text-xs font-bold py-1",
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
          className: `aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all ${active ? "bg-orange-400 text-white shadow-md" : todayCell ? "bg-white/30 text-white ring-2 ring-white" : "bg-white/10 text-white/60"}`,
          children: active ? "🔥" : day
        },
        day
      );
    }) }),
    activeDays.size === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-center text-white/50 text-xs mt-2",
        "data-ocid": "profile.empty_state",
        children: t("calendar_no_activity")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded bg-orange-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-xs", children: t("calendar_activity_day") })
    ] })
  ] });
}
function getSeenBadge(studentNumber) {
  return Number(
    localStorage.getItem(`learnverse_badge_seen_${studentNumber}`) || "1"
  );
}
function setSeenBadge(studentNumber, level) {
  localStorage.setItem(`learnverse_badge_seen_${studentNumber}`, String(level));
}
function getProgressItems(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
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
  const readTopics = getProgressItems(
    `learnverse_read_${profile.studentNumber}`
  );
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
${t("profile_total_points")}: ${profile.totalPoints}
Tarih: ${(/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR")}`;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-orange-500 to-pink-600 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "profile.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm mx-auto space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-8xl mb-3", children: AVATARS[profile.avatarIndex] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black text-white", children: profile.username }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80", children: LEVEL_NAMES[profile.level] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-white/20 rounded-2xl p-3 inline-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: BADGE_EMOJIS[badge - 1] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold ml-2", children: BADGE_NAMES[badge - 1] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "profile.open_modal_button",
            onClick: () => setShowCertificate(true),
            className: "bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-6 py-2 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all",
            children: "🎓 Sertifikamı Gör"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm mb-1", children: "Öğrenci Numarası" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-white font-mono text-lg flex-1 tracking-wider", children: (_a = profile.studentNumber.match(/.{1,4}/g)) == null ? void 0 : _a.join(" ") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              "data-ocid": "profile.copy_button",
              size: "sm",
              onClick: copyNumber,
              className: "bg-white/20 hover:bg-white/30 text-white border-0",
              children: copied ? "✓ Kopyalandı" : "📋 Kopyala"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-2xl p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-white", children: profile.totalPoints }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: t("profile_total_points") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-2xl p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-white", children: quizResults.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: "Quiz" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-2xl p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-white", children: gameResults.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: "Oyun" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-3", children: [
          "🔥 ",
          t("profile_streak")
        ] }),
        streak.current > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: "🔥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-black text-orange-200", children: [
              streak.current,
              " gün"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm", children: "arka arkaya aktifsin!" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1", children: "💤" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-sm", children: "Henüz seri yok" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-xs mt-1", children: "Her gün giriş yaparak seri başlat!" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopicPerformanceChart, { studentNumber: profile.studentNumber }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StudyCalendar, { studentNumber: profile.studentNumber }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-3", children: [
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs text-center leading-tight font-bold", children: name }),
                earned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-xs", children: "✓" })
              ]
            },
            name
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "profile.download_button",
              onClick: handleDownloadCertificate,
              disabled: downloading,
              className: "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 disabled:opacity-60 text-yellow-900 font-black text-sm py-3 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-95",
              children: downloading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin text-base", children: "⏳" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hazırlanıyor..." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "📥" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sertifikayı İndir (PNG)" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-xs text-center mt-2", children: [
            BADGE_EMOJIS[badge - 1],
            " ",
            BADGE_NAMES[badge - 1],
            " rozetinle sertifikayı indir ve paylaş"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white font-bold mb-3", children: [
          "📊 ",
          t("profile_content_completed")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          contentProgress.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white/10 rounded-2xl p-3 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: s.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm leading-tight", children: s.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-xs", children: [
                    s.count,
                    " tamamlandı"
                  ] })
                ] })
              ]
            },
            s.key
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🌍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm leading-tight", children: "Genel Kültür" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-xs", children: [
                readTopics.length,
                " okundu"
              ] })
            ] })
          ] })
        ] })
      ] }),
      quizResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-3xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-bold mb-3", children: t("profile_quiz_history") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quizResults.slice(-5).reverse().map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex justify-between items-center bg-white/10 rounded-xl p-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-sm", children: new Date(r.date).toLocaleDateString("tr-TR") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-bold", children: [
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
      ] })
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden", children: [
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
        ] })
      }
    )
  ] });
}
export {
  ProfilePage as default
};
