import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, f as updatePoints, i as incrementDailyContentRead, m as markTopicRead } from "./index-dncktxyT.js";
import { F as FlashcardMode } from "./FlashcardMode-C38jWnRE.js";
const historyDataTr = {
  okul_oncesi: [
    {
      key: "hist_ataturk1",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusudur. Çocukları çok severdi.",
      fact: "Atatürk 10 Kasım 1938'de vefat etmiştir."
    },
    {
      key: "hist_bayrak",
      emoji: "🇹🇷",
      title: "Türk Bayrağı",
      info: "Türk bayrağı kırmızı zemin üzerinde ay ve yıldızdan oluşur.",
      fact: "Bayrağımızdaki kırmızı renk cesareti simgeler."
    },
    {
      key: "hist_cumhuriyet",
      emoji: "🏛️",
      title: "Cumhuriyet",
      info: "Türkiye Cumhuriyeti 29 Ekim 1923'te kurulmuştur.",
      fact: "29 Ekim Cumhuriyet Bayramı olarak kutlanır."
    },
    {
      key: "hist_23nisan",
      emoji: "🌸",
      title: "23 Nisan",
      info: "23 Nisan 1920'de Türkiye Büyük Millet Meclisi açıldı. Bu gün çocuklara armağan edildi.",
      fact: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'dır."
    },
    {
      key: "hist_mektup",
      emoji: "✉️",
      title: "Atatürk'ün Çocuklara Mektubu",
      info: "Atatürk gençliğe hitabında memleketi sevmemizi istedi.",
      fact: "Atatürk 'Gençliğe Hitabe'yi 1927'de yazdı."
    },
    {
      key: "hist_istanbul",
      emoji: "🕌",
      title: "İstanbul",
      info: "İstanbul, hem Avrupa'da hem Asya'da yer alan Türkiye'nin en büyük şehridir.",
      fact: "İstanbul eskiden Konstantinopolis olarak bilinirdi."
    }
  ],
  ilkokul: [
    {
      key: "hist_kurtulus",
      emoji: "⚔️",
      title: "Kurtuluş Savaşı",
      info: "1919-1923 yılları arasında Türk halkı vatanını kurtarmak için savaştı. Atatürk bu savaşa liderlik etti.",
      fact: "Zafer Bayramı 30 Ağustos'ta kutlanır."
    },
    {
      key: "hist_osmanlı",
      emoji: "👑",
      title: "Osmanlı İmparatorluğu",
      info: "Osmanlı İmparatorluğu yaklaşık 600 yıl hüküm sürdü. Başkenti İstanbul'du.",
      fact: "Osmanlı İmparatorluğu 1299'da kuruldu."
    },
    {
      key: "hist_selçuk",
      emoji: "🏹",
      title: "Selçuklular",
      info: "Selçuklu Türkleri, Anadolu'ya 1071'de Malazgirt Savaşı'ndan sonra yerleşti.",
      fact: "Malazgirt Savaşı 1071'de yapıldı."
    },
    {
      key: "hist_ataturk2",
      emoji: "🌟",
      title: "Atatürk'ün Reformları",
      info: "Atatürk alfabe, takvim, hukuk ve eğitimde devrimler yaptı. Kadınlara oy hakkı verdi.",
      fact: "Latin alfabesi 1928'de kabul edildi."
    },
    {
      key: "hist_fatih",
      emoji: "🏰",
      title: "Fatih Sultan Mehmet",
      info: "Fatih Sultan Mehmet 1453'te İstanbul'u fethetti ve Osmanlı'nın en büyük sultanlarından biri oldu.",
      fact: "İstanbul'un fethi 1453'te gerçekleşti."
    },
    {
      key: "hist_suleyman",
      emoji: "🌹",
      title: "Kanuni Sultan Süleyman",
      info: "Kanuni, Osmanlı'nın en uzun süre hüküm süren ve en güçlü dönemlerinden birini yönetti.",
      fact: "Kanuni 46 yıl hüküm sürdü."
    },
    {
      key: "hist_19mayis",
      emoji: "🔥",
      title: "19 Mayıs",
      info: "19 Mayıs 1919'da Atatürk Samsun'a çıktı ve Kurtuluş Savaşı'nı başlattı.",
      fact: "Bu gün Atatürk'ü Anma, Gençlik ve Spor Bayramı olarak kutlanır."
    },
    {
      key: "hist_anadolu",
      emoji: "🏺",
      title: "Anadolu Uygarlıkları",
      info: "Hititler, Frigler, Lidyalılar ve daha birçok uygarlık Anadolu'da yaşadı.",
      fact: "Hititler dünyanın ilk yazılı barış antlaşmasını yaptı."
    }
  ],
  ortaokul: [
    {
      key: "hist_ilkçag",
      emoji: "🏛️",
      title: "İlkçağ Uygarlıkları",
      info: "Mezopotamya, Mısır, Yunan ve Roma uygarlıkları tarih öncesi dönemden sonra gelişti.",
      fact: "Mezopotamya 'nehirler arası' anlamına gelir."
    },
    {
      key: "hist_ipek",
      emoji: "🧵",
      title: "İpek Yolu",
      info: "Çin'den Avrupa'ya uzanan ticaret yolu, kültürleri birbirine bağladı.",
      fact: "İpek Yolu 4000 km'den uzundur."
    },
    {
      key: "hist_haçlı",
      emoji: "⚔️",
      title: "Haçlı Seferleri",
      info: "11-13. yüzyıllarda Avrupa'dan Doğu'ya çok sayıda dini savaş düzenlendi.",
      fact: "Toplam 8 büyük Haçlı Seferi yapıldı."
    },
    {
      key: "hist_rönesans",
      emoji: "🎨",
      title: "Rönesans",
      info: "14-17. yüzyıllarda Avrupa'da sanat, bilim ve düşüncede büyük bir yeniden doğuş yaşandı.",
      fact: "Leonardo da Vinci Rönesans'ın en önemli isimlerinden biridir."
    },
    {
      key: "hist_reform",
      emoji: "⛪",
      title: "Sanayi Devrimi",
      info: "18-19. yüzyıllarda buhar makinesi ile başlayan sanayi devrimi yaşam biçimini değiştirdi.",
      fact: "İlk buhar makinesi 1769'da James Watt tarafından geliştirildi."
    },
    {
      key: "hist_1dünya",
      emoji: "🌐",
      title: "I. Dünya Savaşı",
      info: "1914-1918 yılları arasında Avrupa merkezli büyük savaş yaşandı. Osmanlı da katıldı.",
      fact: "I. Dünya Savaşı'nda yaklaşık 17 milyon kişi hayatını kaybetti."
    },
    {
      key: "hist_cumhuriyetkur",
      emoji: "🏛️",
      title: "Türkiye Cumhuriyeti'nin Kuruluşu",
      info: "1923'te kurulan Türkiye Cumhuriyeti parlamenter sistemle yönetilmeye başlandı.",
      fact: "Cumhuriyet'in ilk Cumhurbaşkanı Atatürk'tür."
    },
    {
      key: "hist_sogsavas",
      emoji: "🧊",
      title: "Soğuk Savaş",
      info: "1945-1991 yılları arasında ABD ve SSCB arasında ideolojik gerilim yaşandı.",
      fact: "Berlin Duvarı 1989'da yıkıldı."
    },
    {
      key: "hist_bm",
      emoji: "🌐",
      title: "Birleşmiş Milletler",
      info: "BM, 1945'te dünya barışını korumak amacıyla kuruldu.",
      fact: "BM'nin 193 üye devleti vardır."
    },
    {
      key: "hist_uzay",
      emoji: "🚀",
      title: "Uzay Yarışı",
      info: "1957-1969 yılları arasında ABD ve SSCB uzayda üstünlük yarışı yaptı.",
      fact: "İlk ay yürüyüşü Neil Armstrong tarafından 1969'da yapıldı."
    }
  ]
};
const historyDataEn = {
  okul_oncesi: [
    {
      key: "hist_ataturk1",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk was the founder of the Republic of Turkey. He loved children very much.",
      fact: "Atatürk passed away on November 10, 1938."
    },
    {
      key: "hist_bayrak",
      emoji: "🇹🇷",
      title: "Turkish Flag",
      info: "The Turkish flag has a red background with a crescent moon and a star.",
      fact: "The red color on our flag represents courage."
    },
    {
      key: "hist_cumhuriyet",
      emoji: "🏛️",
      title: "Republic",
      info: "The Republic of Turkey was founded on October 29, 1923.",
      fact: "October 29 is celebrated as Republic Day."
    },
    {
      key: "hist_23nisan",
      emoji: "🌸",
      title: "April 23",
      info: "On April 23, 1920, the Grand National Assembly of Turkey was opened. This day was gifted to children.",
      fact: "April 23 is National Sovereignty and Children's Day."
    },
    {
      key: "hist_istanbul",
      emoji: "🕌",
      title: "Istanbul",
      info: "Istanbul is Turkey's largest city, located on both Europe and Asia.",
      fact: "Istanbul was once known as Constantinople."
    },
    {
      key: "hist_egypt",
      emoji: "🐫",
      title: "Ancient Egypt",
      info: "Ancient Egyptians built the pyramids and developed one of the earliest civilizations.",
      fact: "The Great Pyramid of Giza was built around 2560 BC."
    }
  ],
  ilkokul: [
    {
      key: "hist_kurtulus",
      emoji: "⚔️",
      title: "War of Independence",
      info: "Between 1919-1923, the Turkish people fought to save their homeland. Atatürk led this war.",
      fact: "Victory Day is celebrated on August 30."
    },
    {
      key: "hist_osmanlı",
      emoji: "👑",
      title: "Ottoman Empire",
      info: "The Ottoman Empire ruled for about 600 years. Its capital was Istanbul.",
      fact: "The Ottoman Empire was founded in 1299."
    },
    {
      key: "hist_fatih",
      emoji: "🏰",
      title: "Mehmed the Conqueror",
      info: "Mehmed II conquered Istanbul in 1453 and became one of the greatest Ottoman sultans.",
      fact: "The conquest of Istanbul took place in 1453."
    },
    {
      key: "hist_ataturk2",
      emoji: "🌟",
      title: "Atatürk's Reforms",
      info: "Atatürk made revolutions in alphabet, calendar, law and education. He gave women the right to vote.",
      fact: "The Latin alphabet was adopted in 1928."
    },
    {
      key: "hist_anadolu",
      emoji: "🏺",
      title: "Anatolian Civilizations",
      info: "The Hittites, Phrygians, Lydians and many other civilizations lived in Anatolia.",
      fact: "The Hittites made the world's first written peace treaty."
    },
    {
      key: "hist_rome",
      emoji: "🏟️",
      title: "Ancient Rome",
      info: "The Roman Empire was one of the most powerful empires in history. It influenced law, language and architecture.",
      fact: "Rome was founded in 753 BC according to legend."
    },
    {
      key: "hist_greeks",
      emoji: "🏛️",
      title: "Ancient Greece",
      info: "Ancient Greeks gave us democracy, philosophy and the Olympic Games.",
      fact: "The first Olympic Games were held in 776 BC."
    },
    {
      key: "hist_exploration",
      emoji: "🧭",
      title: "Age of Exploration",
      info: "In the 15th–16th centuries, European explorers sailed the seas discovering new lands.",
      fact: "Christopher Columbus reached the Americas in 1492."
    }
  ],
  ortaokul: [
    {
      key: "hist_ilkçag",
      emoji: "🏛️",
      title: "Ancient Civilizations",
      info: "Mesopotamia, Egypt, Greece and Rome developed after the prehistoric era.",
      fact: "Mesopotamia means 'between the rivers'."
    },
    {
      key: "hist_ipek",
      emoji: "🧵",
      title: "Silk Road",
      info: "The trade route stretching from China to Europe connected cultures to each other.",
      fact: "The Silk Road was more than 4,000 km long."
    },
    {
      key: "hist_crusades",
      emoji: "⚔️",
      title: "The Crusades",
      info: "Between the 11th–13th centuries, many religious wars were launched from Europe to the East.",
      fact: "There were 8 major Crusades in total."
    },
    {
      key: "hist_rönesans",
      emoji: "🎨",
      title: "The Renaissance",
      info: "In the 14th–17th centuries, Europe experienced a great rebirth in art, science and thought.",
      fact: "Leonardo da Vinci is one of the most important figures of the Renaissance."
    },
    {
      key: "hist_reform",
      emoji: "⛪",
      title: "Industrial Revolution",
      info: "In the 18th–19th centuries, the steam engine started a revolution that transformed people's way of life.",
      fact: "The first steam engine was developed by James Watt in 1769."
    },
    {
      key: "hist_1dünya",
      emoji: "🌐",
      title: "World War I",
      info: "A great war centered in Europe took place between 1914–1918. The Ottoman Empire also participated.",
      fact: "About 17 million people lost their lives in WWI."
    },
    {
      key: "hist_ww2",
      emoji: "🕊️",
      title: "World War II",
      info: "World War II (1939–1945) was the deadliest conflict in human history, reshaping the modern world.",
      fact: "An estimated 70–85 million people died in WWII."
    },
    {
      key: "hist_sogsavas",
      emoji: "🧊",
      title: "Cold War",
      info: "Between 1945–1991, ideological tension existed between the USA and the USSR.",
      fact: "The Berlin Wall fell in 1989."
    },
    {
      key: "hist_bm",
      emoji: "🌐",
      title: "United Nations",
      info: "The UN was founded in 1945 to maintain world peace.",
      fact: "The UN has 193 member states."
    },
    {
      key: "hist_uzay",
      emoji: "🚀",
      title: "Space Race",
      info: "Between 1957–1969, the USA and USSR competed for dominance in space.",
      fact: "The first moon walk was performed by Neil Armstrong in 1969."
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
function HistoryPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "history");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [speakingId, setSpeakingId] = reactExports.useState(null);
  const [showFlashcards, setShowFlashcards] = reactExports.useState(false);
  reactExports.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  const historyData = isEn ? historyDataEn : historyDataTr;
  const levelTabs = isEn ? levelTabsEn : levelTabsTr;
  const flashCards = historyData[level].map((item) => ({
    key: item.key,
    front: item.title,
    back: `${item.info} 💡 ${item.fact}`,
    emoji: item.emoji
  }));
  const handleFlashcardComplete = (known) => {
    if (profile) {
      updatePoints(profile.studentNumber, known * 5);
      incrementDailyContentRead(profile.studentNumber);
    }
  };
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
  const filtered = historyData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.info.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = historyData[level].length;
  const done = historyData[level].filter(
    (p) => readTopics.includes(p.key)
  ).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-amber-800 to-yellow-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white", children: [
        "🏛️ ",
        isEn ? "History Cards" : "Tarih Kartları"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "history.open_modal_button",
          onClick: () => setShowFlashcards(true),
          className: "bg-white/20 hover:bg-white/40 text-white font-bold text-sm px-4 py-2 rounded-2xl transition-all",
          children: [
            "🃏 ",
            isEn ? "Flashcards" : "Flaş Kart"
          ]
        }
      )
    ] }),
    showFlashcards && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FlashcardMode,
      {
        cards: flashCards,
        onClose: () => setShowFlashcards(false),
        onComplete: handleFlashcardComplete,
        lang,
        accentColor: "from-amber-700 to-yellow-600"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-amber-800" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏛️" }),
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
            className: "h-full bg-green-400 rounded-full transition-all duration-500",
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
  HistoryPage as default
};
