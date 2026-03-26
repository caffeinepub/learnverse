import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-B0Kplu0k.js";
const englishData = {
  okul_oncesi: [
    {
      key: "eng_colors",
      emoji: "🌈",
      title: "Renkler / Colors",
      turkish: "Kırmızı, Mavi, Sarı, Yeşil",
      english: "Red, Blue, Yellow, Green",
      example: "The apple is red. (Elma kırmızıdır.)"
    },
    {
      key: "eng_numbers",
      emoji: "🔢",
      title: "Sayılar / Numbers",
      turkish: "Bir, İki, Üç, Dört, Beş",
      english: "One, Two, Three, Four, Five",
      example: "I have two cats. (İki kedim var.)"
    },
    {
      key: "eng_animals",
      emoji: "🐶",
      title: "Hayvanlar / Animals",
      turkish: "Köpek, Kedi, Kuş, Balık",
      english: "Dog, Cat, Bird, Fish",
      example: "The dog is happy. (Köpek mutlu.)"
    },
    {
      key: "eng_family",
      emoji: "👨‍👩‍👧",
      title: "Aile / Family",
      turkish: "Anne, Baba, Kardeş",
      english: "Mother, Father, Brother, Sister",
      example: "My mother is kind. (Annem nazik.)"
    },
    {
      key: "eng_food",
      emoji: "🥗",
      title: "Yiyecekler / Food",
      turkish: "Elma, Ekmek, Süt, Yumurta",
      english: "Apple, Bread, Milk, Egg",
      example: "I like apples. (Elmaları severim.)"
    },
    {
      key: "eng_greetings",
      emoji: "👋",
      title: "Selamlaşma / Greetings",
      turkish: "Merhaba, Güle güle, Teşekkürler",
      english: "Hello, Goodbye, Thank you",
      example: "Hello! How are you? (Merhaba! Nasılsın?)"
    },
    {
      key: "eng_shapes",
      emoji: "🔷",
      title: "Şekiller / Shapes",
      turkish: "Daire, Kare, Ügen",
      english: "Circle, Square, Triangle",
      example: "The sun is a circle. (Güneş bir dairedir.)"
    },
    {
      key: "eng_body",
      emoji: "👀",
      title: "Vücut / Body Parts",
      turkish: "Göz, Kulak, Burun, El, Ayak",
      english: "Eye, Ear, Nose, Hand, Foot",
      example: "I have two eyes. (İki gözüm var.)"
    },
    {
      key: "eng_toys",
      emoji: "🧸",
      title: "Oyuncaklar / Toys",
      turkish: "Top, Bebek, Araba, Uçurtma",
      english: "Ball, Doll, Car, Kite",
      example: "I play with my ball. (Topumla oynuyorum.)"
    },
    {
      key: "eng_fruits",
      emoji: "🍓",
      title: "Meyveler / Fruits",
      turkish: "Elma, Muz, Çilek, Üzüm",
      english: "Apple, Banana, Strawberry, Grape",
      example: "I like bananas. (Muz severim.)"
    },
    {
      key: "eng_nature",
      emoji: "🌸",
      title: "Doğa / Nature",
      turkish: "Çiçek, Ağaç, Güneş, Yıldız",
      english: "Flower, Tree, Sun, Star",
      example: "The flower is pretty. (Çiçek güzel.)"
    },
    {
      key: "eng_sizes",
      emoji: "📏",
      title: "Büyüklük / Sizes",
      turkish: "Büyük, Küçük, Uzun, Kısa",
      english: "Big, Small, Tall, Short",
      example: "The elephant is big. (Fil büyük.)"
    },
    {
      key: "eng_feelings",
      emoji: "😊",
      title: "Duygular / Feelings",
      turkish: "Mutlu, Üzgün, Kızgın, Korkmuş",
      english: "Happy, Sad, Angry, Scared",
      example: "I am happy today. (Bugün mutluyum.)"
    },
    {
      key: "eng_transport",
      emoji: "🚌",
      title: "Taşıtlar / Transport",
      turkish: "Otobüs, Araba, Uçak, Bisiklet",
      english: "Bus, Car, Airplane, Bicycle",
      example: "I ride the bus. (Otobüse biniyorum.)"
    }
  ],
  ilkokul: [
    {
      key: "eng_school",
      emoji: "🏫",
      title: "Okul / School",
      turkish: "Okul, Öğretmen, Kitap, Kalem",
      english: "School, Teacher, Book, Pencil",
      example: "My teacher is nice. (Öğretmenim güzel.)"
    },
    {
      key: "eng_weather",
      emoji: "☀️",
      title: "Hava / Weather",
      turkish: "Güneşli, Yağmurlu, Kar",
      english: "Sunny, Rainy, Snowy, Cloudy",
      example: "Today is sunny. (Bugün güneşli.)"
    },
    {
      key: "eng_days",
      emoji: "🗓️",
      title: "Günler / Days",
      turkish: "Pazartesi...Pazar",
      english: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
      example: "Today is Monday. (Bugün Pazartesi.)"
    },
    {
      key: "eng_months",
      emoji: "📅",
      title: "Aylar / Months",
      turkish: "Ocak, Şubat, Mart...",
      english: "January, February, March, April, May, June",
      example: "My birthday is in May. (Doğum günüm Mayıs'ta.)"
    },
    {
      key: "eng_hobbies",
      emoji: "⚽",
      title: "Hobiler / Hobbies",
      turkish: "Okumak, Oynamak, Yrenme",
      english: "Reading, Playing, Swimming, Drawing",
      example: "I like swimming. (Yüzmeyi severim.)"
    },
    {
      key: "eng_home",
      emoji: "🏠",
      title: "Ev / Home",
      turkish: "Mutfak, Salon, Banyo, Yatak Odası",
      english: "Kitchen, Living room, Bathroom, Bedroom",
      example: "I sleep in my bedroom. (Yatak odamda uyurum.)"
    },
    {
      key: "eng_clothes",
      emoji: "👕",
      title: "Giysiler / Clothes",
      turkish: "Gömlek, Pantolon, Ayakkabı",
      english: "Shirt, Pants, Shoes, Hat",
      example: "I wear a hat. (Şapka takiyorum.)"
    },
    {
      key: "eng_verbs",
      emoji: "🏋️",
      title: "Eylemler / Verbs",
      turkish: "Koşmak, Oturmak, Yemek",
      english: "Run, Sit, Eat, Sleep, Walk",
      example: "I run every day. (Her gün koşuyorum.)"
    },
    {
      key: "eng_adjectives",
      emoji: "✨",
      title: "Sıfatlar / Adjectives",
      turkish: "Büyük, Küçük, Hızlı, Yaşlı",
      english: "Big, Small, Fast, Old, New",
      example: "The elephant is big. (Fil büyük.)"
    },
    {
      key: "eng_sports",
      emoji: "🏆",
      title: "Spor / Sports",
      turkish: "Futbol, Yüzme, Koşu, Tenis",
      english: "Football, Swimming, Running, Tennis",
      example: "I play football on Saturdays. (Cumartesi günleri futbol oynuyorum.)"
    },
    {
      key: "eng_prepositions",
      emoji: "📍",
      title: "Edatlar / Prepositions",
      turkish: "Üzerinde, Altında, İçinde, Yanında",
      english: "On, Under, In, Next to, Behind",
      example: "The book is on the table. (Kitap masanın üzerinde.)"
    },
    {
      key: "eng_time",
      emoji: "⏰",
      title: "Saat / Time",
      turkish: "Sabah, Öğle, Akşam, Gece",
      english: "Morning, Noon, Evening, Night",
      example: "I wake up in the morning. (Sabahları uyanırım.)"
    },
    {
      key: "eng_jobs",
      emoji: "👨‍⚕️",
      title: "Meslekler / Jobs",
      turkish: "Doktor, Öğretmen, Polis, Mühendis",
      english: "Doctor, Teacher, Police Officer, Engineer",
      example: "My father is a doctor. (Babam doktordur.)"
    },
    {
      key: "eng_places",
      emoji: "🏪",
      title: "Yerler / Places",
      turkish: "Market, Hastane, Okul, Park",
      english: "Supermarket, Hospital, School, Park",
      example: "We go to the park on Sundays. (Pazar günleri parka gideriz.)"
    },
    {
      key: "eng_numbers2",
      emoji: "🔢",
      title: "Büyük Sayılar / Big Numbers",
      turkish: "On, Yirmi, Elli, Yüz",
      english: "Ten, Twenty, Fifty, Hundred",
      example: "There are twenty students in my class. (Sınıfımda yirmi öğrenci var.)"
    }
  ],
  ortaokul: [
    {
      key: "eng_past",
      emoji: "⏰",
      title: "Geçmiş Zaman / Past Tense",
      turkish: "Geçmiş zaman '-di/-ti' eki",
      english: "I played / She went / They saw",
      example: "I went to school yesterday. (Dün okula gittim.)"
    },
    {
      key: "eng_present",
      emoji: "▶️",
      title: "Şimdiki Zaman / Present Tense",
      turkish: "Süregelen eylemler için kullanılır.",
      english: "I am playing / She is reading",
      example: "She is reading a book. (Kitap okuyor.)"
    },
    {
      key: "eng_future",
      emoji: "🔮",
      title: "Gelecek Zaman / Future Tense",
      turkish: "Gelecekteki eylemler için 'will' kullanılır.",
      english: "I will go / They will see",
      example: "I will travel next year. (Gelecek yıl seyahat edeceğim.)"
    },
    {
      key: "eng_conditionals",
      emoji: "🤔",
      title: "Koşull Cumleler / Conditionals",
      turkish: "'Eğer... olsaydı' anlamında.",
      english: "If I study, I will pass.",
      example: "If it rains, I will stay home. (Yağmur yağarsa evde kalırım.)"
    },
    {
      key: "eng_environment",
      emoji: "🌎",
      title: "Çevre / Environment",
      turkish: "Çevre, iklim, kirlilik, geri dönüşüm",
      english: "Pollution, Recycling, Climate, Nature",
      example: "We must protect nature. (Doğayı korumak gerekir.)"
    },
    {
      key: "eng_technology",
      emoji: "💻",
      title: "Teknoloji / Technology",
      turkish: "Bilgisayar, internet, uygulama",
      english: "Computer, Internet, Application, Smartphone",
      example: "I use the internet for homework. (Ev ödevi için internet kullanırım.)"
    },
    {
      key: "eng_health",
      emoji: "🏥",
      title: "Sağlık / Health",
      turkish: "Hasta, Doktor, İlaç, Ameliyat",
      english: "Sick, Doctor, Medicine, Surgery",
      example: "I see a doctor when I am sick. (Hasta olunca doktora giderim.)"
    },
    {
      key: "eng_compare",
      emoji: "📊",
      title: "Karşılaştırma / Comparisons",
      turkish: "Daha büyük, en büyük",
      english: "Bigger, Biggest / More interesting, Most interesting",
      example: "She is taller than me. (O benden uzun.)"
    },
    {
      key: "eng_phrases",
      emoji: "💬",
      title: "Günlük İfadeler / Daily Phrases",
      turkish: "Özür dilerim, Lütfen, Rica ederim",
      english: "I'm sorry, Please, You're welcome, Excuse me",
      example: "Excuse me, where is the library? (Affedersiniz, kütüphane nerede?)"
    },
    {
      key: "eng_modal",
      emoji: "🔧",
      title: "Modal Fiiller / Modal Verbs",
      turkish: "Yapabilmek, Yapmak zorunda, Yapmalı",
      english: "Can, Must, Should, Would, Could",
      example: "You should study every day. (Her gün çalışmalısın.)"
    },
    {
      key: "eng_question",
      emoji: "❓",
      title: "Soru Kelimeleri / Question Words",
      turkish: "Kim, Ne, Nerede, Ne zaman, Neden, Nasıl",
      english: "Who, What, Where, When, Why, How",
      example: "Where do you live? (Nerede yaşıyorsun?)"
    },
    {
      key: "eng_conversation",
      emoji: "🗣️",
      title: "Kısa Diyalog / Short Conversation",
      turkish: "Tanışma, Alışveriş, Yol Sorma",
      english: "Nice to meet you. How much is it? Turn left.",
      example: "A: How are you? B: I'm fine, thank you. (Nasılsın? İyiyim, teşekkürler.)"
    },
    {
      key: "eng_passive",
      emoji: "🔄",
      title: "Edilgen Cümle / Passive Voice",
      turkish: "Yapılmak, Yıkanmak, Yazılmak",
      english: "is made, was written, will be done",
      example: "This book was written in 1900. (Bu kitap 1900'de yazıldı.)"
    },
    {
      key: "eng_linking",
      emoji: "🔗",
      title: "Bağlaçlar / Linking Words",
      turkish: "Ve, Ama, Çünkü, Dolayısıyla",
      english: "And, But, Because, However, Therefore",
      example: "I studied hard, therefore I passed the exam. (Çok çalıştım, bu yüzden sınavı geçtim.)"
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
function EnglishPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const levelTabs = isEn ? levelTabsEn : levelTabsTr;
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "english");
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
  const handleSpeak = (id, text) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "en-US";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const filtered = englishData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.english.toLowerCase().includes(searchTerm.toLowerCase()) || p.turkish.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = englishData[level].length;
  const done = englishData[level].filter(
    (p) => readTopics.includes(p.key)
  ).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-red-500 to-orange-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black text-white mb-4", children: "🇬🇧 Temel İngilizce" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-red-500" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🇬🇧" }),
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
            className: "h-full bg-yellow-300 rounded-full transition-all duration-500",
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
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-yellow-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: item.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base", children: item.title }),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-yellow-300 text-xl", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/70 text-xs font-semibold uppercase", children: [
                "Türkçe:",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-bold", children: item.turkish })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-200 text-xs font-semibold uppercase", children: [
                "English:",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-100 text-sm font-black", children: item.english })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-sm leading-relaxed mb-4 italic", children: [
              '"',
              item.example,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleSpeak(item.key, item.english),
                className: "bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2",
                children: speakingId === item.key ? "⏹ Stop" : isEn ? "🔊 Listen (EN)" : "🔊 Dinle (EN)"
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
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-300 text-xs font-bold", children: [
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
  EnglishPage as default
};
