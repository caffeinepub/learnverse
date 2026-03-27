import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, B as Button, m as markTopicRead, f as updatePoints } from "./index-CcOZ68mj.js";
const people = [
  {
    key: "aziz_sancar",
    icon: "🔬",
    name: "Aziz Sancar",
    desc: "Nobel ödüllü Türk bilim insanı. DNA tamir mekanizmalarını keşfetti."
  },
  {
    key: "cahit_arf",
    icon: "➕",
    name: "Cahit Arf",
    desc: "Dünyaca ünlü Türk matematiksel. Arf halkası ve Arf değismezi ile tanınır."
  },
  {
    key: "sabiha_gokcen",
    icon: "✈️",
    name: "Sabiha Gökçen",
    desc: "Dünyanın ilk kadın savaş pilotlarından. Atatürk'ün manevi kızı."
  },
  {
    key: "naim_suleymanoglu",
    icon: "🏆",
    name: "Naim Süleymanoğlu",
    desc: "Üç kez olimpiyat şampiyonu halterci. 'Cüce Küp' lakabıyla anılır."
  },
  {
    key: "abidin_dino",
    icon: "🎨",
    name: "Abidin Dino",
    desc: "Türkiye'nin önemli ressam ve yazarı. Paris sanat dünyasında nam salmıştır."
  },
  {
    key: "fatma_aliye",
    icon: "📖",
    name: "Fatma Aliye Topuz",
    desc: "Türkiye'nin ilk kadın romancısı. Kadın hakları savunucusu ve düşünür."
  },
  {
    key: "ihsan_dogramaci",
    icon: "🏥",
    name: "İhsan Doğramacı",
    desc: "Türk çocuk hekimi ve Bilkent Üniversitesi'nin kurucusu. Dünya Sağlık Örgütü'nde görev yaptı."
  },
  {
    key: "celal_sengor",
    icon: "🌋",
    name: "A.M. Celâl Şengör",
    desc: "Dünyaca tanınan Türk jeolog ve jeotektonikçi. Tethys Okyanusu araştırmalarıyla öne çıkmıştır."
  },
  {
    key: "yunus_emre",
    icon: "📜",
    name: "Yunus Emre",
    desc: "Anadolu'nun büyük şairi ve mutasavvıfı. Sevgi ve hoşgörü üzerine kalıcı şiirler yazdı."
  },
  {
    key: "seyfi_dursunoglu",
    icon: "🎖️",
    name: "Kurtuluş Savaşı Kahramanları",
    desc: "Türk Kurtuluş Savaşı'nda vatanları için canlarını feda eden kahraman askerler ve komutanlar."
  }
];
const rules = [
  {
    key: "trafik",
    icon: "🚦",
    title: "Trafik Kuralları",
    items: [
      "Kırmızıda dur, yeşilde geç",
      "Kaldırımda yürü",
      "Emniyet kemeri tak",
      "Zebrada geç"
    ]
  },
  {
    key: "okul",
    icon: "🏫",
    title: "Okul Kuralları",
    items: [
      "Zile dikkat et",
      "Derste sessiz ol",
      "Arkadaşlara saygı göster",
      "Temiz ol"
    ]
  },
  {
    key: "toplum",
    icon: "🤝",
    title: "Toplumsal Kurallar",
    items: [
      "Büyüklerine saygı göster",
      "Kuyruğa katıl",
      "Doğayı kirletme",
      "Yardım etmeye çalış"
    ]
  }
];
const emergency = [
  { num: "110", icon: "🗣️🔥", name: "İtfaiye", color: "bg-red-500" },
  { num: "112", icon: "🚑", name: "Ambulans", color: "bg-green-500" },
  { num: "155", icon: "👮", name: "Polis", color: "bg-blue-500" },
  { num: "156", icon: "💂", name: "Jandarma", color: "bg-gray-600" }
];
const earthquake = [
  "Masa altına gir",
  "Başını koru",
  "Pencerelerden uzak dur",
  "Sarsilma duruncaya kadar bekle"
];
const fire = [
  "Sakin ol ve 110'u ara",
  "Yaşlak bez ile ağzını kapa",
  "Aşağı doğru eğil",
  "Asansör kullanma, merdiven kullan"
];
function CulturePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "culture");
  }, []);
  const [tab, setTab] = reactExports.useState("people");
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 5);
    setReadTopics((prev) => [...prev, key]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-600 to-cyan-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "culture.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          t("back")
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black text-white mb-4", children: "🌍 Genel Kültür" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: ["people", "rules", "emergency"].map((key) => {
      const labels = {
        people: "🧑 Tanıyalım",
        rules: "📋 Kurallar",
        emergency: "🚨 Acil"
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `culture.${key}_tab`,
          onClick: () => setTab(key),
          className: `py-3 rounded-2xl font-bold text-sm transition-all ${tab === key ? "bg-white text-blue-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: labels[key]
        },
        key
      );
    }) }),
    tab === "people" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: people.map((p) => {
      const isRead = readTopics.includes(p.key);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white/20 backdrop-blur rounded-2xl p-4 flex gap-3 transition-all ${isRead ? "border-2 border-green-400" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: p.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: p.name }),
                isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-lg", children: "✓" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mb-2", children: p.desc }),
              !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "culture.read_button",
                  onClick: () => handleRead(p.key),
                  className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all",
                  children: "📖 Okudum! +5 puan"
                }
              )
            ] })
          ]
        },
        p.name
      );
    }) }),
    tab === "rules" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: rules.map((r) => {
      const isRead = readTopics.includes(r.key);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white/20 backdrop-blur rounded-2xl p-4 transition-all ${isRead ? "border-2 border-green-400" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-black", children: [
                r.icon,
                " ",
                r.title
              ] }),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-lg", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 mb-3", children: r.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "text-white/80 text-sm flex gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "•" }),
                  " ",
                  item
                ]
              },
              item
            )) }),
            !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "culture.read_button",
                onClick: () => handleRead(r.key),
                className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all",
                children: "📖 Okudum! +5 puan"
              }
            )
          ]
        },
        r.title
      );
    }) }),
    tab === "emergency" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: emergency.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${e.color} rounded-2xl p-4 text-center`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-1", children: e.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-2xl", children: e.num }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/90 text-sm", children: e.name })
          ]
        },
        e.num
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black mb-2", children: "🏠 Depremde Ne Yapmalı?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: earthquake.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-white/80 text-sm", children: [
          earthquake.indexOf(s) + 1,
          ". ",
          s
        ] }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 backdrop-blur rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black mb-2", children: "🔥 Yanginda Ne Yapmalı?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: fire.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-white/80 text-sm", children: [
          fire.indexOf(s) + 1,
          ". ",
          s
        ] }, s)) })
      ] })
    ] })
  ] }) });
}
export {
  CulturePage as default
};
