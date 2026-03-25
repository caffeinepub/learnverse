import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-xVQhpC0C.js";
const scienceDataTr = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Bitkiler",
      info: "Bitkiler topraktan su ve güneş ışığından yararlanarak büyür.",
      fact: "Bitkiler bizim için oksijen üretir!"
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Hayvanlar",
      info: "Hayvanlar canlılardır. Bazıları evcil, bazıları vahsi yaşar.",
      fact: "Dünyada 8 milyondan fazla hayvan türü var!"
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "Su",
      info: "Su hayat için çok önemlidir. Insan vücudunun %60'ı sudan oluşur.",
      fact: "Su katı, sıvı ve gaz halinde bulunabilir."
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "Gökyüzü",
      info: "Gökyüzünde güneş, ay, yıldızlar ve bulutlar var.",
      fact: "Ay, Dünya'nın tek doğal uydusu."
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Mevsimler",
      info: "Yılda 4 mevsim vardır: İlkbahar, Yaz, Sonbahar ve Kış.",
      fact: "Mevsimler Dünya'nın eğimli dönüşünden kaynaklanır."
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Renkler",
      info: "Güneş ışığında 7 temel renk gizlidir. Gökkusanda görülebilir.",
      fact: "Kırmızı, mavi ve sarı ana renklerdir."
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "Hava Durumu",
      info: "Günleri güneşli, yağmurlu, karlı ya da bulutlu olabilir.",
      fact: "Sıcaklık ölçmek için termometre kullanılır."
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "Mıknatıs",
      info: "Mıknatıslar demir nesneleri çekerler. Kuzey ve Güney kutbu var.",
      fact: "Dünya'nın kendisi de büyük bir mıknatıstır!"
    }
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "Fotosentez",
      info: "Bitkiler güneş ışığını kullanarak karbondioksit ve suyu besin ve oksijene dönüştürür.",
      fact: "Fotosentez olmadan Dünya'da oksijen olmazdı."
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "Maddenin Halleri",
      info: "Madde katı, sıvı ve gaz halinde bulunur. Isı ile hal değiştirme olur.",
      fact: "Demir yüksek sıcaklıkta sıvılaşır."
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "İşık",
      info: "İşık gözle görülebilen enerji şeklidir. Düz yolda ilerler.",
      fact: "İşık saniyede 300.000 km hızla ilerler."
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "Ses",
      info: "Ses, titreşimlerle oluşur ve hava ile taşınır. Farklı frekanslarda çıkar.",
      fact: "Uzayda ses taşınacak ortam olmadığından ses duyulmaz."
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "Ekosistem",
      info: "Bir bölgede yaşayan tüm canlılar ve cansız öğeler birlikte bir ekosistem oluşturur.",
      fact: "Ormanlar dünyanın akciğerleri olarak bilinir."
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "Kuvvet",
      info: "Kuvvet cisimlerin hareket etmesini sağlar. Çekme, itme, sürtünme kuvveti örnekleri.",
      fact: "Yer çekimi kuvveti bizi yere bastırır."
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "Toprak",
      info: "Toprak, kayaların parçalanmasıyla oluşur ve bitkilerin yaşaması için gereklidir.",
      fact: "1 cm toprak oluşması yüzlerce yıl alır."
    }
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Atom ve Molekül",
      info: "Her madde atomlardan oluşur. Atomlar birleşerek molekülleri oluşturur.",
      fact: "Bir insan içinde yaklaşık 7 oktilyon atom var!"
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "DNA",
      info: "DNA canlıların genetik bilgisini taşır. Her insanın DNAsı benzersizdir.",
      fact: "Bir hücreden çıkarılıp uzatılsa DNA 2 metre olur."
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "Evrim",
      info: "Canlılar milyonlarca yıl boyunca ortama uyum sağlayarak değişmiştir.",
      fact: "Darwin 1859'da evrim teorisini yayımladı."
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Kimyasal Tepkimeler",
      info: "Maddeler birleşerek ya da ayrışarak yeni maddeler oluşturabilir.",
      fact: "Demir ve oksijenin birleşmesi pas oluşturur."
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "Elektrik",
      info: "Elektronların hareketi elektrik akımını oluşturur. Devreler elektriği taşır.",
      fact: "şimşek, atmosferdeki statik elektrik boşalmasıdır."
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "Uzay",
      info: "Evren; yıldızlar, gezegenler, galaksiler ve karanlık maddeden oluşur.",
      fact: "Güneş sistemi 4.6 milyar yaşındadır."
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Newton Yasaları",
      info: "Newton'un 3 hareket yasası cisimlerin nasıl hareket ettiğini açıklar.",
      fact: "Newton elmanin düşmesinden yerçekimini keşfetti."
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "Optik",
      info: "Merçekler ışığı kırarak görüntü oluşturur. Gözlük, mikrop ve teleskop bunu kullanır.",
      fact: "Teleskop 1608'de Hollandalı Hans Lippershey tarafından icat edildi."
    }
  ]
};
const scienceDataEn = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Plants",
      info: "Plants grow using water and sunlight from the ground.",
      fact: "Plants produce oxygen for us!"
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Animals",
      info: "Animals are living things. Some are tame, some live in the wild.",
      fact: "There are more than 8 million animal species on Earth!"
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "Water",
      info: "Water is very important for life. 60% of the human body is made of water.",
      fact: "Water can exist as solid, liquid and gas."
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "Sky",
      info: "In the sky there are the sun, moon, stars and clouds.",
      fact: "The Moon is Earth's only natural satellite."
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Seasons",
      info: "There are 4 seasons in a year: Spring, Summer, Autumn and Winter.",
      fact: "Seasons are caused by Earth's tilted orbit."
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Colors",
      info: "Sunlight contains 7 colors hidden within it. They can be seen in a rainbow.",
      fact: "Red, blue and yellow are the primary colors."
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "Weather",
      info: "Days can be sunny, rainy, snowy or cloudy.",
      fact: "A thermometer is used to measure temperature."
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "Magnet",
      info: "Magnets attract iron objects. They have a North and South pole.",
      fact: "Earth itself is one big magnet!"
    }
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "Photosynthesis",
      info: "Plants use sunlight to convert carbon dioxide and water into food and oxygen.",
      fact: "Without photosynthesis there would be no oxygen on Earth."
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "States of Matter",
      info: "Matter exists in solid, liquid and gas states. Heat causes changes of state.",
      fact: "Iron melts into liquid at very high temperatures."
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "Light",
      info: "Light is a form of energy visible to the eye. It travels in a straight line.",
      fact: "Light travels at 300,000 km per second."
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "Sound",
      info: "Sound is produced by vibrations and is carried through the air at different frequencies.",
      fact: "There is no sound in space because there is no medium to carry it."
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "Ecosystem",
      info: "All living and non-living things in an area together form an ecosystem.",
      fact: "Forests are known as the lungs of the Earth."
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "Force",
      info: "Force makes objects move. Pull, push and friction are examples of forces.",
      fact: "Gravity keeps us on the ground."
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "Soil",
      info: "Soil forms from the breakdown of rocks and is essential for plant life.",
      fact: "Forming 1 cm of soil takes hundreds of years."
    }
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Atoms & Molecules",
      info: "All matter is made of atoms. Atoms join together to form molecules.",
      fact: "The human body contains about 7 octillion atoms!"
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "DNA",
      info: "DNA carries the genetic information of living things. Every person's DNA is unique.",
      fact: "If stretched out, the DNA in one cell would be 2 meters long."
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "Evolution",
      info: "Living things have changed over millions of years by adapting to their environment.",
      fact: "Darwin published the theory of evolution in 1859."
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Chemical Reactions",
      info: "Substances can combine or break apart to form new substances.",
      fact: "Iron and oxygen combining creates rust."
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "Electricity",
      info: "The movement of electrons creates electric current. Circuits carry electricity.",
      fact: "Lightning is a discharge of static electricity in the atmosphere."
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "Space",
      info: "The universe consists of stars, planets, galaxies and dark matter.",
      fact: "The solar system is 4.6 billion years old."
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Newton's Laws",
      info: "Newton's 3 laws of motion explain how objects move.",
      fact: "Newton discovered gravity from watching an apple fall."
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "Optics",
      info: "Lenses refract light to form images. Glasses, microscopes and telescopes use this.",
      fact: "The telescope was invented by Dutch Hans Lippershey in 1608."
    }
  ]
};
const levelTabsTr = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
const levelTabsEn = [
  { key: "okul_oncesi", label: "🌈 Preschool" },
  { key: "ilkokul", label: "📗 Primary" },
  { key: "ortaokul", label: "📘 Middle School" }
];
function SciencePage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "science");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [speakingId, setSpeakingId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  const scienceData = isEn ? scienceDataEn : scienceDataTr;
  const levelTabs = isEn ? levelTabsEn : levelTabsTr;
  const handleSpeak = (id, text) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = isEn ? "en-US" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const filtered = scienceData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.info.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = scienceData[level].length;
  const done = scienceData[level].filter(
    (p) => readTopics.includes(p.key)
  ).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-emerald-600 to-teal-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4 font-bold text-sm",
        children: [
          "← ",
          isEn ? "Back" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🔬 ",
      isEn ? "Science" : "Fen Bilimleri"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-emerald-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔬" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: isEn ? "Progress at this level" : "Bu seviyedeki ilerleme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black", children: [
            done,
            "/",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-green-300 rounded-full transition-all duration-500",
            style: { width: `${pct}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-sm", children: [
        pct,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: isEn ? "No results found 🔍" : "Sonuç bulunamadı 🔍" }) : filtered.map((item) => {
      const isRead = readTopics.includes(item.key);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: item.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base", children: item.title }),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-green-300 text-xl", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-sm leading-relaxed mb-2", children: item.info }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-sm leading-relaxed mb-4", children: [
              "💡 ",
              item.fact
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleSpeak(item.key, item.info),
                className: "bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2",
                children: speakingId === item.key ? isEn ? "⏹ Stop" : "⏹ Durdur" : isEn ? "🔊 Listen" : "🔊 Dinle"
              }
            ),
            !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => handleRead(item.key),
                className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                children: [
                  "✅ ",
                  t("learned"),
                  " +10 ",
                  isEn ? "pts" : "puan"
                ]
              }
            ),
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-300 text-xs font-bold", children: [
              "✅",
              " ",
              isEn ? "Learned (+10 pts earned)" : "Öğrenildi (+10 puan kazanıldı)"
            ] })
          ]
        },
        item.key
      );
    }) })
  ] }) });
}
export {
  SciencePage as default
};
