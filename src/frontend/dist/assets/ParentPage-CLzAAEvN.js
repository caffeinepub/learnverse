import { u as useNavigate, a as useLanguage, r as reactExports, j as jsxRuntimeExports, B as Button, I as Input, o as getBadgeLevel, F as getStreak, R as getContentVisits, J as BADGE_NAMES, l as AVATARS, L as LEVEL_NAMES, n as BADGE_EMOJIS, S as saveParentMessage, q as getTeacherMessages, v as saveTeacherMessage, T as markTeacherMessageRead, P as getTopicStats, U as getStudentDataFromBackend, V as saveProfile, k as getProfileByStudentNumber, W as getGameResults, X as getQuizResults } from "./index-BMS1Ic9U.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BNA1_lkk.js";
import { T as Textarea } from "./textarea-34Jg6XhA.js";
import "./index-NtoA_Ia3.js";
function ParentPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [query, setQuery] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [msgText, setMsgText] = reactExports.useState("");
  const [msgSent, setMsgSent] = reactExports.useState(false);
  const [teacherReplyText, setTeacherReplyText] = reactExports.useState("");
  const [teacherMessages, setTeacherMessages] = reactExports.useState([]);
  const search = async () => {
    const clean = query.replace(/\s/g, "");
    setLoading(true);
    setResult(null);
    const backendData = await getStudentDataFromBackend(clean);
    if (backendData.profile) {
      saveProfile(backendData.profile);
      setResult({
        profile: backendData.profile,
        quizResults: backendData.quizResults,
        gameResults: backendData.gameResults
      });
      setLoading(false);
      return;
    }
    const localProfile = getProfileByStudentNumber(clean);
    if (localProfile) {
      setResult({
        profile: localProfile,
        quizResults: getQuizResults().filter((r) => r.studentNumber === clean),
        gameResults: getGameResults().filter((r) => r.studentNumber === clean)
      });
    } else {
      setResult("notfound");
    }
    setLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "parent.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-black text-white", children: [
        "👨‍👩‍👧 ",
        t("parent_panel")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "parent.secondary_button",
          onClick: () => navigate({ to: "/classes" }),
          className: "bg-white/20 hover:bg-white/30 text-white font-bold text-sm",
          children: "🏫 Sınıflar"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mb-6", children: t("parent_panel_desc") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          "data-ocid": "parent.search_input",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: t("student_number_placeholder"),
          className: "flex-1 bg-white/10 border-white/20 text-white placeholder-white/40",
          onKeyDown: (e) => e.key === "Enter" && !loading && search()
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "parent.search_button",
          onClick: search,
          disabled: loading,
          className: "bg-white text-slate-800 font-bold",
          children: loading ? "..." : "Ara"
        }
      )
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "parent.loading_state",
        className: "bg-white/10 rounded-2xl p-4 text-white text-center",
        children: "🔍 Sorgulanıyor..."
      }
    ),
    result === "notfound" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "parent.error_state",
        className: "bg-red-500/20 border border-red-500/40 rounded-2xl p-4 text-white text-center",
        children: "❌ Öğrenci bulunamadı. Lütfen numarayı kontrol edin."
      }
    ),
    result && result !== "notfound" && (() => {
      const {
        profile: p,
        quizResults: quizzes,
        gameResults: games
      } = result;
      const badge = getBadgeLevel(p.totalPoints);
      const streak = getStreak(p.studentNumber);
      const contentVisits = getContentVisits(p.studentNumber);
      const avgScore = quizzes.length > 0 ? Math.round(
        quizzes.reduce((s, q) => s + q.correct / q.total * 100, 0) / quizzes.length
      ) : 0;
      const maxScore = quizzes.length > 0 ? Math.max(
        ...quizzes.map(
          (q) => Math.round(q.correct / q.total * 100)
        )
      ) : 0;
      const minScore = quizzes.length > 0 ? Math.min(
        ...quizzes.map(
          (q) => Math.round(q.correct / q.total * 100)
        )
      ) : 0;
      const totalCorrect = quizzes.reduce((s, q) => s + q.correct, 0);
      const totalQuestions = quizzes.reduce((s, q) => s + q.total, 0);
      const gameTypeMap = {};
      for (const g of games) {
        if (!gameTypeMap[g.gameType])
          gameTypeMap[g.gameType] = { count: 0, totalScore: 0 };
        gameTypeMap[g.gameType].count += 1;
        gameTypeMap[g.gameType].totalScore += g.score;
      }
      const visitList = Object.values(contentVisits).sort(
        (a, b) => b.count - a.count
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "parent.success_state", className: "space-y-4", children: [
        (() => {
          const alerts = [];
          const streak2 = getStreak(p.studentNumber);
          const lastLogin = streak2.lastDate;
          const today = (/* @__PURE__ */ new Date()).toDateString();
          const yesterday = new Date(
            Date.now() - 864e5
          ).toDateString();
          const twoDaysAgo = new Date(
            Date.now() - 2 * 864e5
          ).toDateString();
          if (lastLogin && lastLogin !== today && lastLogin !== yesterday && lastLogin !== twoDaysAgo) {
            alerts.push({
              icon: "⚠️",
              msg: "Öğrenci 3+ gündür giriş yapmadı",
              color: "border-orange-400/60 bg-orange-500/10"
            });
          }
          if (streak2.current === 0 && lastLogin && lastLogin !== today) {
            alerts.push({
              icon: "💔",
              msg: "Günlük seri kırıldı",
              color: "border-red-400/60 bg-red-500/10"
            });
          }
          if (streak2.current >= 7) {
            alerts.push({
              icon: "🔥",
              msg: `Harika! ${streak2.current} günlük seri devam ediyor`,
              color: "border-green-400/60 bg-green-500/10"
            });
          }
          const badge2 = getBadgeLevel(p.totalPoints);
          if (badge2 >= 3) {
            alerts.push({
              icon: "🏅",
              msg: `Yeni rozet kazandı: ${BADGE_NAMES[badge2 - 1]}`,
              color: "border-yellow-400/60 bg-yellow-500/10"
            });
          }
          if (alerts.length === 0) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `border rounded-2xl p-3 flex items-center gap-3 ${a.color}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: a.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-bold", children: a.msg })
              ]
            },
            a.msg
          )) });
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-3xl p-5 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl", children: AVATARS[p.avatarIndex] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-xl", children: p.username }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70", children: LEVEL_NAMES[p.level] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-yellow-300", children: [
              "⭐ ",
              p.totalPoints,
              " puan"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/80", children: [
              BADGE_EMOJIS[badge - 1],
              " ",
              BADGE_NAMES[badge - 1]
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 border border-white/20 rounded-3xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "D83dDcec" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-base", children: "Mesaj G00f6nder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs ml-auto", children: "(maks. 200 karakter)" })
          ] }),
          msgSent ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "parent.success_state",
              className: "bg-green-500/20 border border-green-500/40 rounded-2xl p-3 text-green-300 font-bold text-center",
              children: "2705 Mesaj 00f6011frenciye iletildi!"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                "data-ocid": "parent.textarea",
                value: msgText,
                onChange: (e) => setMsgText(e.target.value.slice(0, 200)),
                placeholder: "00d6011frencine te015fvik edici bir mesaj yaz...",
                className: "bg-white/10 border-white/20 text-white placeholder-white/40 resize-none",
                rows: 3
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/40 text-xs", children: [
                msgText.length,
                "/200"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  "data-ocid": "parent.submit_button",
                  disabled: !msgText.trim(),
                  onClick: () => {
                    saveParentMessage(p.studentNumber, msgText.trim());
                    setMsgSent(true);
                    setMsgText("");
                    setTimeout(() => setMsgSent(false), 3e3);
                  },
                  className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-5 py-2 rounded-xl disabled:opacity-40",
                  children: "G00f6nder 2709Fe0f"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end no-print", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "parent.secondary_button",
            onClick: () => window.print(),
            className: "bg-white/20 hover:bg-white/30 text-white font-bold text-sm",
            children: "📄 Raporu Yazdır"
          }
        ) }),
        (() => {
          const msgs = teacherMessages.length > 0 ? teacherMessages : getTeacherMessages(p.studentNumber);
          const unread = msgs.filter((m) => !m.read).length;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-slate-800 border border-white/20 rounded-3xl p-5 no-print",
              onMouseEnter: () => {
                const allMsgs = getTeacherMessages(p.studentNumber);
                for (const m of allMsgs.filter((m2) => !m2.read)) {
                  markTeacherMessageRead(p.studentNumber, m.id);
                }
                setTeacherMessages(getTeacherMessages(p.studentNumber));
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💬" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-base", children: "Öğretmen Mesajları" }),
                  unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1", children: [
                    unread,
                    " yeni"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-56 overflow-y-auto mb-3", children: msgs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": "parent.empty_state",
                    className: "text-white/50 text-sm text-center py-4",
                    children: "Henüz mesaj yok."
                  }
                ) : [...msgs].sort(
                  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                ).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `rounded-2xl p-3 flex gap-2 items-start ${m.fromRole === "teacher" ? "bg-blue-500/20 border border-blue-400/30" : "bg-green-500/20 border border-green-400/30"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ${m.fromRole === "teacher" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`,
                          children: m.fromRole === "teacher" ? "Öğretmen" : "Veli"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm", children: m.message }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-xs mt-1", children: new Date(m.date).toLocaleString("tr-TR") })
                      ] }),
                      !m.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-1" })
                    ]
                  },
                  m.id
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      "data-ocid": "parent.textarea",
                      value: teacherReplyText,
                      onChange: (e) => setTeacherReplyText(e.target.value.slice(0, 300)),
                      placeholder: "Öğretmene yanıt yaz...",
                      className: "bg-white/10 border-white/20 text-white placeholder-white/40 resize-none text-sm",
                      rows: 2
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "parent.submit_button",
                      disabled: !teacherReplyText.trim(),
                      onClick: () => {
                        saveTeacherMessage({
                          studentNumber: p.studentNumber,
                          from: "Veli",
                          fromRole: "parent",
                          message: teacherReplyText.trim()
                        });
                        setTeacherReplyText("");
                        setTeacherMessages(
                          getTeacherMessages(p.studentNumber)
                        );
                      },
                      className: "bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-4 rounded-xl disabled:opacity-40 self-end",
                      children: "Yanıtla"
                    }
                  )
                ] })
              ]
            }
          );
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: "print-report",
            className: "hidden print:block text-black bg-white p-8 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black mb-1", children: "📚 LearnVerse İlerleme Raporu" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-gray-500 text-xs", children: [
                  "Yazdırma Tarihi: ",
                  (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-gray-300 pb-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Öğrenci:" }),
                  " ",
                  p.username
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Öğrenci No:" }),
                  " ",
                  p.studentNumber
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Seviye:" }),
                  " ",
                  LEVEL_NAMES[p.level]
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Toplam Puan:" }),
                  " ",
                  p.totalPoints
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Rozet:" }),
                  " ",
                  BADGE_EMOJIS[getBadgeLevel(p.totalPoints) - 1],
                  " ",
                  BADGE_NAMES[getBadgeLevel(p.totalPoints) - 1]
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Seri:" }),
                  " ",
                  getStreak(p.studentNumber).current,
                  " gün"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mb-2", children: "Son 5 Quiz Sonucu" }),
                quizzes.slice(-5).reverse().map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between border-b border-gray-100 py-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(q.date).toLocaleDateString("tr-TR") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        q.correct,
                        "/",
                        q.total,
                        " (",
                        Math.round(q.correct / q.total * 100),
                        "%)"
                      ] })
                    ]
                  },
                  q.date
                )),
                quizzes.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-400", children: "Henüz quiz yapılmadı." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold mb-2", children: "Konu Bazlı Başarı" }),
                (() => {
                  const ts = getTopicStats(p.studentNumber);
                  return [
                    { label: "Fen Bilimleri", key: "science" },
                    { label: "Tarih", key: "history" },
                    { label: "Coğrafya", key: "geography" },
                    { label: "Matematik", key: "math" },
                    { label: "Genel", key: "general" }
                  ].map(({ label, key }) => {
                    const s = ts[key];
                    const pct = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex justify-between border-b border-gray-100 py-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.total > 0 ? `${s.correct}/${s.total} (%${pct})` : "—" })
                        ]
                      },
                      key
                    );
                  });
                })()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-400 text-xs mt-6 border-t border-gray-200 pt-4", children: "LearnVerse — www.learnverse.app" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "genel", className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full bg-white/10 rounded-2xl p-1 mb-4 grid grid-cols-5 h-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "genel",
                "data-ocid": "parent.tab",
                className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold",
                children: "Genel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "quiz",
                "data-ocid": "parent.tab",
                className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold",
                children: "Quiz"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "icerik",
                "data-ocid": "parent.tab",
                className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold",
                children: "İçerik"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "konu",
                className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold",
                children: "📊 Konu"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "oyunlar",
                "data-ocid": "parent.tab",
                className: "text-white/70 data-[state=active]:bg-white data-[state=active]:text-slate-800 rounded-xl text-xs py-2 font-bold",
                children: "Oyunlar"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "genel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-white", children: quizzes.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm", children: "Quiz Tamamlandı" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black text-white", children: games.length }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm", children: "Oyun Oynandı" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "🔥" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-black text-lg", children: [
                  streak.current,
                  " günlük seri"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "Arka arkaya giriş yapılan gün sayısı" })
              ] })
            ] }),
            quizzes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3 text-sm", children: "Son Quiz Sonuçları" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quizzes.slice(-5).reverse().map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex justify-between text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: new Date(q.date).toLocaleDateString("tr-TR") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white", children: [
                      q.correct,
                      "/",
                      q.total,
                      " doğru"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-300", children: [
                      "+",
                      q.score,
                      " puan"
                    ] })
                  ]
                },
                q.date
              )) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "quiz", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: quizzes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "parent.empty_state",
              className: "bg-white/10 rounded-2xl p-6 text-center text-white/60",
              children: "Henüz quiz yapılmadı."
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-black text-white", children: [
                  "%",
                  avgScore
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "Ortalama" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-black text-green-400", children: [
                  "%",
                  maxScore
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "En Yüksek" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-3 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-black text-red-400", children: [
                  "%",
                  minScore
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/60 text-xs", children: "En Düşük" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3 text-sm", children: "Doğru / Yanlış Oranı" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-white/20 rounded-full h-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full bg-green-500 rounded-full",
                    style: {
                      width: `${totalQuestions > 0 ? totalCorrect / totalQuestions * 100 : 0}%`
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-xs font-bold", children: [
                  totalCorrect,
                  "/",
                  totalQuestions
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-400", children: [
                  totalCorrect,
                  " Doğru"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-400", children: [
                  totalQuestions - totalCorrect,
                  " Yanlış"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3 text-sm", children: "Son 10 Quiz" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: quizzes.slice(-10).reverse().map((q, i) => {
                const pct = Math.round(
                  q.correct / q.total * 100
                );
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 text-xs w-4", children: i + 1 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-white/10 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `h-full rounded-full ${pct >= 70 ? "bg-green-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500"}`,
                          style: { width: `${pct}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-xs w-10 text-right", children: [
                        "%",
                        pct
                      ] })
                    ]
                  },
                  q.date
                );
              }) })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "icerik", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: visitList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "parent.empty_state",
              className: "bg-white/10 rounded-2xl p-6 text-center text-white/60",
              children: "Henüz içerik ziyareti yok."
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3 text-sm", children: "Ziyaret Edilen Sayfalar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: visitList.map((v) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex justify-between items-center text-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white capitalize", children: v.page }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full h-2 w-16 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full bg-cyan-400 rounded-full",
                          style: {
                            width: `${Math.min(100, v.count / (((_a = visitList[0]) == null ? void 0 : _a.count) || 1) * 100)}%`
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/80 text-xs", children: [
                        v.count,
                        "x"
                      ] })
                    ] })
                  ]
                },
                v.page
              );
            }) })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "konu", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: (() => {
            const topicStats = getTopicStats(p.studentNumber);
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
              {
                id: "math",
                icon: "🔢",
                label: "Matematik / Math",
                color: "bg-rose-400"
              },
              {
                id: "general",
                icon: "💡",
                label: "Genel / General",
                color: "bg-violet-400"
              }
            ];
            const hasAny = topics.some(
              (tp) => topicStats[tp.id].total > 0
            );
            if (!hasAny) {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "parent.empty_state",
                  className: "bg-white/10 rounded-2xl p-6 text-center text-white/60",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: "📚" }),
                    "Henüz konu quizi yapılmadı."
                  ]
                }
              );
            }
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3 text-sm", children: "Konu Bazlı Başarı" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: topics.map((tp) => {
                const s = topicStats[tp.id];
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
                      style: {
                        width: s.total > 0 ? `${pct}%` : "0%"
                      }
                    }
                  ) })
                ] }, tp.id);
              }) })
            ] });
          })() }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "oyunlar", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.keys(gameTypeMap).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "parent.empty_state",
              className: "bg-white/10 rounded-2xl p-6 text-center text-white/60",
              children: "Henüz oyun oynanmadı."
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-3 text-sm", children: "Oyun İstatistikleri" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Object.entries(gameTypeMap).map(([type, stats]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-white/10 rounded-xl p-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm capitalize", children: type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-white/70 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      stats.count,
                      " kez oynandı"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Toplam: ",
                      stats.totalScore,
                      " puan"
                    ] })
                  ] })
                ]
              },
              type
            )) })
          ] }) }) })
        ] })
      ] });
    })()
  ] });
}
export {
  ParentPage as default
};
