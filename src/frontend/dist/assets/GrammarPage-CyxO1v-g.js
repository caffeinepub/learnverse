import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-CsapSQCz.js";
import { c as contentTranslationsEn } from "./content-translations-Cn7jfJx5.js";
const grammarCards = {
  okul_oncesi: [
    {
      key: "gr_harf_a",
      title: "A Harfi",
      emoji: "🔤",
      rule: "A harfi büyük 'A' ve küçük 'a' olarak yazılır.",
      example: "Araba, Aslan, Ayı"
    },
    {
      key: "gr_hece",
      title: "Hece Nedir?",
      emoji: "🗣️",
      rule: "Kelimeler hecelerden oluşur. Her hecede bir sesli harf bulunur.",
      example: "Ka-pı, ma-sa, e-v"
    },
    {
      key: "gr_sesli",
      title: "Sesli Harfler",
      emoji: "🔊",
      rule: "Sesli harfler: a, e, ı, i, o, ö, u, ü",
      example: "Arı, ev, ip, ot, üzüm"
    },
    {
      key: "gr_sessiz",
      title: "Sessiz Harfler",
      emoji: "🤫",
      rule: "Sesli olmayan harflere sessiz harf denir.",
      example: "b, c, ç, d, f, g..."
    },
    {
      key: "gr_nokta",
      title: "Nokta (.)",
      emoji: "⭕",
      rule: "Cümlenin sonuna nokta koyarız.",
      example: "Bugün hava güzel."
    },
    {
      key: "gr_buyuk",
      title: "Büyük Harf",
      emoji: "🔠",
      rule: "Cümleler büyük harfle başlar. Özel isimler büyük harfle yazılır.",
      example: "Ali okula gitti. Ankara güzel bir şehir."
    },
    {
      key: "gr_isim",
      title: "İsim Nedir?",
      emoji: "🏷️",
      rule: "Varlıkların, kişilerin, yerlerin adlarına isim denir.",
      example: "Kalem, kitap, okul, Ali"
    },
    {
      key: "gr_fiil_okul",
      title: "Fiil (Eylem)",
      emoji: "🏃",
      rule: "Hareketleri, eylemleri anlatan kelimelere fiil denir.",
      example: "koşmak, yazmak, gülmek"
    }
  ],
  ilkokul: [
    {
      key: "gr_fiil_zaman",
      title: "Şimdiki Zaman",
      emoji: "⏱️",
      rule: "Şu an yapılan eylemi anlatır. -iyor eki kullanılır.",
      example: "Ali koşuyor. Ben yazıyorum."
    },
    {
      key: "gr_gecmis",
      title: "Geçmiş Zaman",
      emoji: "📅",
      rule: "Geçmişte olmuş eylemleri anlatır. -di veya -miş eki kullanılır.",
      example: "Dün okula gittim. Kitap okumuş."
    },
    {
      key: "gr_gelecek",
      title: "Gelecek Zaman",
      emoji: "🔮",
      rule: "İleride olacak eylemleri anlatır. -ecek/-acak eki kullanılır.",
      example: "Yarın okula gideceğim."
    },
    {
      key: "gr_sifat",
      title: "Sıfat Nedir?",
      emoji: "🌈",
      rule: "İsimleri niteleyen, belgeleyen kelimelere sıfat denir.",
      example: "kırmızı elma, büyük ev, güzel çiçek"
    },
    {
      key: "gr_zarf",
      title: "Zarf Nedir?",
      emoji: "⚡",
      rule: "Fiilleri niteleyen kelimelere zarf denir.",
      example: "hızlı koştu, güzel söyledi, iyi çalıştı"
    },
    {
      key: "gr_soru",
      title: "Soru Cümlesi",
      emoji: "❓",
      rule: "Soru cümleleri soru işareti (?) ile biter.",
      example: "Sen de gelecek misin? Hava güzel mi?"
    },
    {
      key: "gr_baglac",
      title: "Bağlaç",
      emoji: "🔗",
      rule: "Cümleleri veya kelimeleri birbirine bağlayan kelimelerdir.",
      example: "ve, ama, ya da, çünkü, ancak"
    },
    {
      key: "gr_noktalama",
      title: "Virgül (,)",
      emoji: "✏️",
      rule: "Virgül, sıralamada ve uzun cümlelerde kullanılır.",
      example: "Elma, armut, kiraz aldım."
    }
  ],
  ortaokul: [
    {
      key: "gr_edilgen",
      title: "Edilgen Yapı",
      emoji: "🔄",
      rule: "Eylemin kimin tarafından yapıldığı bilinmiyorsa edilgen çatı kullanılır.",
      example: "Kitap okundu. Pencere kırıldı."
    },
    {
      key: "gr_etken",
      title: "Etken Yapı",
      emoji: "💪",
      rule: "Eylemin kimin tarafından yapıldığı bellidir.",
      example: "Ali kitabı okudu. Çocuk topu attı."
    },
    {
      key: "gr_doldurma",
      title: "Dolaylı Tümleç",
      emoji: "📍",
      rule: "Eylemin nerede, ne yönde gerçekleştiğini gösterir.",
      example: "Okula gittim. Evde kaldım. Okuldan geldim."
    },
    {
      key: "gr_anlam",
      title: "Sözcükte Anlam",
      emoji: "💡",
      rule: "Sözcükler gerçek, mecaz, terim veya deyim anlamlarıyla kullanılabilir.",
      example: "El (gerçek: organ), el atmak (mecaz: yardım etmek)"
    },
    {
      key: "gr_anlatim",
      title: "Anlatım Bozukluğu",
      emoji: "⚠️",
      rule: "Cümlede anlam veya dil bilgisi hatası bulunmasıdır.",
      example: "Yanlış: 'Kitabı okuyarak okur.' Doğru: 'Kitabı tekrar tekrar okur.'"
    },
    {
      key: "gr_ses_olaylar",
      title: "Ses Olayları",
      emoji: "🔉",
      rule: "Ünlü düşmesi, ünsüz yumuşaması gibi ses değişimleri.",
      example: "boyun + u = boynu (ünlü düşmesi)"
    },
    {
      key: "gr_cumle_turleri",
      title: "Cümle Türleri",
      emoji: "📝",
      rule: "Olumlu, olumsuz, soru ve ünlem cümleleri.",
      example: "Olumlu: Geldi. Olumsuz: Gelmedi. Soru: Geldi mi?"
    },
    {
      key: "gr_paragraf",
      title: "Paragraf",
      emoji: "📖",
      rule: "Bir düşüncenin birden fazla cümleyle anlatıldığı metin birimidir.",
      example: "Her paragrafın bir ana fikri vardır. İlk cümle konuyu tanıtır."
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
function GrammarPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "grammar");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const filteredCards = grammarCards[level].filter((c) => {
    const enTr = contentTranslationsEn[c.key];
    const displayTitle = lang === "en" && (enTr == null ? void 0 : enTr.title) ? enTr.title : c.title;
    const displayRule = lang === "en" && (enTr == null ? void 0 : enTr.rule) ? enTr.rule : c.rule;
    const q = searchTerm.toLowerCase();
    return displayTitle.toLowerCase().includes(q) || displayRule.toLowerCase().includes(q);
  });
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-teal-500 to-cyan-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": "grammar.back_button",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4 font-bold text-sm",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "📝 ",
      lang === "en" ? "Grammar Cards" : "Dilbilgisi"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "grammar.tab",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-teal-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    (() => {
      const total = grammarCards[level].length;
      const done = grammarCards[level].filter(
        (c) => readTopics.includes(c.key)
      ).length;
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📝" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: t("progress_label") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black", children: [
              done,
              "/",
              total
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-green-400 rounded-full transition-all duration-500",
              style: { width: `${pct}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-sm", children: [
          pct,
          "%"
        ] })
      ] });
    })(),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        "data-ocid": "grammar.search_input",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredCards.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "grammar.empty_state",
        className: "text-center text-white/60 py-8",
        children: [
          lang === "en" ? "No results found" : "Sonuç bulunamadı",
          " 🔍"
        ]
      }
    ) : filteredCards.map((c, idx) => {
      const isRead = readTopics.includes(c.key);
      const enTr = contentTranslationsEn[c.key];
      const displayTitle = lang === "en" && (enTr == null ? void 0 : enTr.title) ? enTr.title : c.title;
      const displayRule = lang === "en" && (enTr == null ? void 0 : enTr.rule) ? enTr.rule : c.rule;
      const displayExample = lang === "en" && (enTr == null ? void 0 : enTr.example) ? enTr.example : c.example;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `grammar.item.${idx + 1}`,
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: c.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg", children: displayTitle }),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-green-300 text-xl", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm leading-relaxed mb-3", children: displayRule }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-xs font-bold block mb-1", children: lang === "en" ? "Example:" : "Örnek:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-medium", children: displayExample })
            ] }),
            !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "grammar.read_button",
                onClick: () => handleRead(c.key),
                className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                children: [
                  "✏️ ",
                  t("learned"),
                  " +10 puan"
                ]
              }
            ),
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-300 text-xs font-bold", children: [
              "✅ ",
              t("learned"),
              " (+10 puan)"
            ] })
          ]
        },
        c.key
      );
    }) })
  ] }) });
}
export {
  GrammarPage as default
};
