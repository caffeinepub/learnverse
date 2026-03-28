import { u as useNavigate, a as useLanguage, D as useTheme, r as reactExports, d as getCurrentUser, j as jsxRuntimeExports } from "./index-DJxeeYpK.js";
const ALL_LEVELS = ["okul_oncesi", "ilkokul", "ortaokul"];
const PRIMARY_MIDDLE = ["ilkokul", "ortaokul"];
const MIDDLE_ONLY = ["ortaokul"];
const SEARCH_INDEX = [
  // --- Stories ---
  {
    id: "st_1",
    title: "Küçük Kedi Minnoş",
    emoji: "🐱",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ALL_LEVELS,
    tags: ["kedi", "hayvan", "bahçe"]
  },
  {
    id: "st_2",
    title: "Tavşan ile Kaplumbağa",
    emoji: "🐢",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ALL_LEVELS,
    tags: ["yarış", "sabır", "hayvan"]
  },
  {
    id: "st_3",
    title: "Cesur Fare Piko",
    emoji: "🐭",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ALL_LEVELS,
    tags: ["cesaret", "fare", "arkadaş"]
  },
  {
    id: "st_4",
    title: "Üç Küçük Domuz",
    emoji: "🐷",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ALL_LEVELS,
    tags: ["ev", "saman", "tuğla"]
  },
  {
    id: "st_5",
    title: "Kırmızı Başlıklı Kız",
    emoji: "🧺",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ALL_LEVELS,
    tags: ["kurt", "büyükanne", "orman"]
  },
  {
    id: "st_6",
    title: "Ormandaki Sır",
    emoji: "🌳",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ["ilkokul", "ortaokul"],
    tags: ["orman", "macera", "keşif"]
  },
  {
    id: "st_7",
    title: "Uzay Yolculuğu",
    emoji: "🚀",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ["ilkokul", "ortaokul"],
    tags: ["uzay", "astronot", "gezegenler"]
  },
  {
    id: "st_8",
    title: "Büyük Keşif",
    emoji: "🔭",
    category: "Hikayeler",
    categoryKey: "stories",
    route: "/stories",
    levels: ["ortaokul"],
    tags: ["bilim", "araştırma", "buluş"]
  },
  // --- Poems ---
  {
    id: "po_1",
    title: "Bahar Şiiri",
    emoji: "🌸",
    category: "Şiirler",
    categoryKey: "poems",
    route: "/poems",
    levels: ALL_LEVELS,
    tags: ["bahar", "çiçek", "mevsim"]
  },
  {
    id: "po_2",
    title: "Yağmur",
    emoji: "🌧️",
    category: "Şiirler",
    categoryKey: "poems",
    route: "/poems",
    levels: ALL_LEVELS,
    tags: ["yağmur", "bulut", "hava"]
  },
  {
    id: "po_3",
    title: "Atatürk'e Saygı",
    emoji: "🇹🇷",
    category: "Şiirler",
    categoryKey: "poems",
    route: "/poems",
    levels: ALL_LEVELS,
    tags: ["vatan", "bayrak", "şehit"]
  },
  {
    id: "po_4",
    title: "Okul Sevinci",
    emoji: "🎒",
    category: "Şiirler",
    categoryKey: "poems",
    route: "/poems",
    levels: ALL_LEVELS,
    tags: ["okul", "öğretmen", "kitap"]
  },
  {
    id: "po_5",
    title: "Sonbahar Yaprakları",
    emoji: "🍂",
    category: "Şiirler",
    categoryKey: "poems",
    route: "/poems",
    levels: PRIMARY_MIDDLE,
    tags: ["sonbahar", "yaprak", "mevsim"]
  },
  {
    id: "po_6",
    title: "Dostluk",
    emoji: "🤝",
    category: "Şiirler",
    categoryKey: "poems",
    route: "/poems",
    levels: PRIMARY_MIDDLE,
    tags: ["arkadaşlık", "sevgi", "paylaşım"]
  },
  // --- Experiments ---
  {
    id: "ex_1",
    title: "Su Döngüsü Deneyi",
    emoji: "💧",
    category: "Deneyler",
    categoryKey: "experiments",
    route: "/experiments",
    levels: ALL_LEVELS,
    tags: ["su", "buharlaşma", "yağmur"]
  },
  {
    id: "ex_2",
    title: "Renk Karıştırma",
    emoji: "🎨",
    category: "Deneyler",
    categoryKey: "experiments",
    route: "/experiments",
    levels: ALL_LEVELS,
    tags: ["renk", "karıştırma", "sanat"]
  },
  {
    id: "ex_3",
    title: "Mıknatıs Deneyi",
    emoji: "🧲",
    category: "Deneyler",
    categoryKey: "experiments",
    route: "/experiments",
    levels: PRIMARY_MIDDLE,
    tags: ["mıknatıs", "metal", "çekim"]
  },
  {
    id: "ex_4",
    title: "Bitki Büyümesi",
    emoji: "🌱",
    category: "Deneyler",
    categoryKey: "experiments",
    route: "/experiments",
    levels: ALL_LEVELS,
    tags: ["tohum", "büyüme", "toprak"]
  },
  {
    id: "ex_5",
    title: "Asit-Baz Deneyi",
    emoji: "🧪",
    category: "Deneyler",
    categoryKey: "experiments",
    route: "/experiments",
    levels: MIDDLE_ONLY,
    tags: ["kimya", "asit", "baz"]
  },
  // --- Proverbs ---
  {
    id: "pr_1",
    title: "Damlaya damlaya göl olur",
    emoji: "💧",
    category: "Atasözleri",
    categoryKey: "proverbs",
    route: "/proverbs",
    levels: ALL_LEVELS,
    tags: ["sabır", "birikim", "çalışma"]
  },
  {
    id: "pr_2",
    title: "Erken kalkan yol alır",
    emoji: "🌅",
    category: "Atasözleri",
    categoryKey: "proverbs",
    route: "/proverbs",
    levels: ALL_LEVELS,
    tags: ["çalışkan", "sabah", "başarı"]
  },
  {
    id: "pr_3",
    title: "Ağaç yaşken eğilir",
    emoji: "🌳",
    category: "Atasözleri",
    categoryKey: "proverbs",
    route: "/proverbs",
    levels: ALL_LEVELS,
    tags: ["eğitim", "küçüklük", "öğrenme"]
  },
  {
    id: "pr_4",
    title: "İt ürür kervan yürür",
    emoji: "🐕",
    category: "Atasözleri",
    categoryKey: "proverbs",
    route: "/proverbs",
    levels: PRIMARY_MIDDLE,
    tags: ["engel", "kararlılık", "devam"]
  },
  {
    id: "pr_5",
    title: "Sabreden derviş muradına ermiş",
    emoji: "🧘",
    category: "Atasözleri",
    categoryKey: "proverbs",
    route: "/proverbs",
    levels: PRIMARY_MIDDLE,
    tags: ["sabır", "başarı", "beklemek"]
  },
  // --- Grammar ---
  {
    id: "gr_1",
    title: "Sesli Harfler",
    emoji: "🔊",
    category: "Dilbilgisi",
    categoryKey: "grammar",
    route: "/grammar",
    levels: ALL_LEVELS,
    tags: ["harf", "sesli", "alfabe"]
  },
  {
    id: "gr_2",
    title: "Şimdiki Zaman",
    emoji: "⏱️",
    category: "Dilbilgisi",
    categoryKey: "grammar",
    route: "/grammar",
    levels: PRIMARY_MIDDLE,
    tags: ["fiil", "zaman", "eylem"]
  },
  {
    id: "gr_3",
    title: "Sıfat Nedir?",
    emoji: "🌈",
    category: "Dilbilgisi",
    categoryKey: "grammar",
    route: "/grammar",
    levels: PRIMARY_MIDDLE,
    tags: ["sıfat", "isim", "niteleyen"]
  },
  {
    id: "gr_4",
    title: "Cümle Türleri",
    emoji: "📝",
    category: "Dilbilgisi",
    categoryKey: "grammar",
    route: "/grammar",
    levels: MIDDLE_ONLY,
    tags: ["cümle", "olumlu", "soru"]
  },
  {
    id: "gr_5",
    title: "Noktalama İşaretleri",
    emoji: "✏️",
    category: "Dilbilgisi",
    categoryKey: "grammar",
    route: "/grammar",
    levels: ALL_LEVELS,
    tags: ["nokta", "virgül", "yazım"]
  },
  // --- Vocabulary ---
  {
    id: "vo_1",
    title: "Mutlu",
    emoji: "😊",
    category: "Kelime Haznesi",
    categoryKey: "vocabulary",
    route: "/vocabulary",
    levels: ALL_LEVELS,
    tags: ["duygu", "sevinç", "neşe"]
  },
  {
    id: "vo_2",
    title: "Cesur",
    emoji: "🦁",
    category: "Kelime Haznesi",
    categoryKey: "vocabulary",
    route: "/vocabulary",
    levels: PRIMARY_MIDDLE,
    tags: ["karakter", "yiğit", "güçlü"]
  },
  {
    id: "vo_3",
    title: "Analiz",
    emoji: "🔬",
    category: "Kelime Haznesi",
    categoryKey: "vocabulary",
    route: "/vocabulary",
    levels: MIDDLE_ONLY,
    tags: ["inceleme", "bilim", "mantık"]
  },
  {
    id: "vo_4",
    title: "Büyük & Küçük",
    emoji: "🐘",
    category: "Kelime Haznesi",
    categoryKey: "vocabulary",
    route: "/vocabulary",
    levels: ALL_LEVELS,
    tags: ["zıt", "boyut", "karşıt"]
  },
  // --- Math Practice ---
  {
    id: "mp_1",
    title: "Toplama Alıştırması",
    emoji: "➕",
    category: "Matematik",
    categoryKey: "math_practice",
    route: "/math-practice",
    levels: ALL_LEVELS,
    tags: ["toplama", "sayı", "hesap"]
  },
  {
    id: "mp_2",
    title: "Çarpma Tablosu",
    emoji: "✖️",
    category: "Matematik",
    categoryKey: "math_practice",
    route: "/multiplication",
    levels: PRIMARY_MIDDLE,
    tags: ["çarpma", "tablo", "hesap"]
  },
  {
    id: "mp_3",
    title: "Kesirler",
    emoji: "🍕",
    category: "Matematik",
    categoryKey: "math_practice",
    route: "/math-practice",
    levels: MIDDLE_ONLY,
    tags: ["kesir", "pay", "payda"]
  },
  {
    id: "mp_4",
    title: "Matematik Hikaye Problemleri",
    emoji: "📖",
    category: "Matematik",
    categoryKey: "math_story",
    route: "/math-story",
    levels: PRIMARY_MIDDLE,
    tags: ["problem", "çözüm", "mantık"]
  },
  // --- Geography ---
  {
    id: "ge_1",
    title: "Dünya'nın Kıtaları",
    emoji: "🌍",
    category: "Coğrafya",
    categoryKey: "geography",
    route: "/geography",
    levels: PRIMARY_MIDDLE,
    tags: ["kıta", "atlas", "harita"]
  },
  {
    id: "ge_2",
    title: "Türkiye'nin Bölgeleri",
    emoji: "🗺️",
    category: "Coğrafya",
    categoryKey: "geography",
    route: "/turkey-map",
    levels: ALL_LEVELS,
    tags: ["türkiye", "bölge", "şehir"]
  },
  {
    id: "ge_3",
    title: "Başkentler",
    emoji: "🏛️",
    category: "Coğrafya",
    categoryKey: "geography",
    route: "/geography",
    levels: PRIMARY_MIDDLE,
    tags: ["ülke", "başkent", "dünya"]
  },
  {
    id: "ge_4",
    title: "Okyanuslar ve Denizler",
    emoji: "🌊",
    category: "Coğrafya",
    categoryKey: "geography",
    route: "/geography",
    levels: PRIMARY_MIDDLE,
    tags: ["okyanus", "deniz", "su"]
  },
  // --- History ---
  {
    id: "hi_1",
    title: "Atatürk ve Kurtuluş Savaşı",
    emoji: "🎖️",
    category: "Tarih",
    categoryKey: "history",
    route: "/history",
    levels: ALL_LEVELS,
    tags: ["atatürk", "cumhuriyet", "kurtuluş"]
  },
  {
    id: "hi_2",
    title: "Osmanlı Tarihi",
    emoji: "👑",
    category: "Tarih",
    categoryKey: "history",
    route: "/history",
    levels: PRIMARY_MIDDLE,
    tags: ["osmanlı", "imparatorluk", "sultan"]
  },
  {
    id: "hi_3",
    title: "İlkçağ Medeniyetleri",
    emoji: "🏛️",
    category: "Tarih",
    categoryKey: "history",
    route: "/history",
    levels: MIDDLE_ONLY,
    tags: ["mısır", "roma", "yunan"]
  },
  {
    id: "hi_4",
    title: "Dünya Savaşları",
    emoji: "🌐",
    category: "Tarih",
    categoryKey: "history",
    route: "/history",
    levels: MIDDLE_ONLY,
    tags: ["savaş", "barış", "dünya"]
  },
  // --- Science ---
  {
    id: "sc_1",
    title: "İnsan Vücudu",
    emoji: "🫀",
    category: "Fen Bilimleri",
    categoryKey: "science",
    route: "/science",
    levels: ALL_LEVELS,
    tags: ["kalp", "kemik", "organ"]
  },
  {
    id: "sc_2",
    title: "Canlılar Dünyası",
    emoji: "🦋",
    category: "Fen Bilimleri",
    categoryKey: "science",
    route: "/science",
    levels: ALL_LEVELS,
    tags: ["hayvan", "bitki", "ekosistem"]
  },
  {
    id: "sc_3",
    title: "Güneş Sistemi",
    emoji: "🌞",
    category: "Fen Bilimleri",
    categoryKey: "science",
    route: "/science",
    levels: PRIMARY_MIDDLE,
    tags: ["güneş", "gezegen", "uzay"]
  },
  {
    id: "sc_4",
    title: "Madde ve Enerji",
    emoji: "⚡",
    category: "Fen Bilimleri",
    categoryKey: "science",
    route: "/science",
    levels: MIDDLE_ONLY,
    tags: ["elektrik", "enerji", "fizik"]
  },
  // --- Basic English ---
  {
    id: "en_1",
    title: "Renkler (Colors)",
    emoji: "🎨",
    category: "Temel İngilizce",
    categoryKey: "english",
    route: "/english",
    levels: ALL_LEVELS,
    tags: ["renk", "kırmızı", "mavi"]
  },
  {
    id: "en_2",
    title: "Hayvanlar (Animals)",
    emoji: "🐾",
    category: "Temel İngilizce",
    categoryKey: "english",
    route: "/english",
    levels: ALL_LEVELS,
    tags: ["hayvan", "cat", "dog"]
  },
  {
    id: "en_3",
    title: "Sayılar (Numbers)",
    emoji: "🔢",
    category: "Temel İngilizce",
    categoryKey: "english",
    route: "/english",
    levels: ALL_LEVELS,
    tags: ["sayı", "one", "two"]
  },
  {
    id: "en_4",
    title: "Günlük Cümleler",
    emoji: "💬",
    category: "Temel İngilizce",
    categoryKey: "english",
    route: "/english",
    levels: PRIMARY_MIDDLE,
    tags: ["cümle", "konuşma", "İngilizce"]
  },
  // --- Coding & Logic ---
  {
    id: "co_1",
    title: "Algoritma Nedir?",
    emoji: "🤖",
    category: "Kodlama & Mantık",
    categoryKey: "coding",
    route: "/coding",
    levels: ALL_LEVELS,
    tags: ["algoritma", "adım", "sıra"]
  },
  {
    id: "co_2",
    title: "Döngüler",
    emoji: "🔄",
    category: "Kodlama & Mantık",
    categoryKey: "coding",
    route: "/coding",
    levels: PRIMARY_MIDDLE,
    tags: ["döngü", "tekrar", "kod"]
  },
  {
    id: "co_3",
    title: "Koşullar (if-else)",
    emoji: "🔀",
    category: "Kodlama & Mantık",
    categoryKey: "coding",
    route: "/coding",
    levels: PRIMARY_MIDDLE,
    tags: ["koşul", "karar", "programlama"]
  },
  {
    id: "co_4",
    title: "Mantık Soruları",
    emoji: "💡",
    category: "Kodlama & Mantık",
    categoryKey: "coding",
    route: "/coding",
    levels: ALL_LEVELS,
    tags: ["mantık", "bulmaca", "problem"]
  },
  // --- Health ---
  {
    id: "he_1",
    title: "Sağlıklı Beslenme",
    emoji: "🥗",
    category: "Beden Eğitimi & Sağlık",
    categoryKey: "health",
    route: "/health",
    levels: ALL_LEVELS,
    tags: ["yemek", "vitamin", "diyet"]
  },
  {
    id: "he_2",
    title: "Egzersiz ve Spor",
    emoji: "🏃",
    category: "Beden Eğitimi & Sağlık",
    categoryKey: "health",
    route: "/health",
    levels: ALL_LEVELS,
    tags: ["spor", "koşu", "sağlık"]
  },
  {
    id: "he_3",
    title: "Kişisel Hijyen",
    emoji: "🧼",
    category: "Beden Eğitimi & Sağlık",
    categoryKey: "health",
    route: "/health",
    levels: ALL_LEVELS,
    tags: ["temizlik", "yıkanma", "diş"]
  },
  // --- General Culture ---
  {
    id: "cu_1",
    title: "Türk Müziği",
    emoji: "🎵",
    category: "Müzik & Sanat",
    categoryKey: "art_music",
    route: "/art-music",
    levels: ALL_LEVELS,
    tags: ["müzik", "türkü", "halk"]
  },
  {
    id: "cu_2",
    title: "Ünlü Ressamlar",
    emoji: "🖼️",
    category: "Müzik & Sanat",
    categoryKey: "art_music",
    route: "/art-music",
    levels: PRIMARY_MIDDLE,
    tags: ["ressam", "tablo", "sanat"]
  },
  {
    id: "cu_3",
    title: "Türk Kültürü",
    emoji: "🏺",
    category: "Genel Kültür",
    categoryKey: "general_culture",
    route: "/culture",
    levels: ALL_LEVELS,
    tags: ["gelenek", "görenek", "bayram"]
  },
  // --- Puzzles ---
  {
    id: "pu_1",
    title: "Bilmeceler",
    emoji: "🧩",
    category: "Bulmacalar",
    categoryKey: "puzzles",
    route: "/puzzles",
    levels: ALL_LEVELS,
    tags: ["bulmaca", "zeka", "düşünme"]
  },
  {
    id: "pu_2",
    title: "Zeka Soruları",
    emoji: "🧠",
    category: "Bulmacalar",
    categoryKey: "puzzles",
    route: "/puzzles",
    levels: PRIMARY_MIDDLE,
    tags: ["mantık", "zeka", "çözme"]
  },
  // --- Quiz ---
  {
    id: "qu_1",
    title: "Günlük Quiz",
    emoji: "📋",
    category: "Quiz",
    categoryKey: "daily_quiz",
    route: "/quiz",
    levels: ALL_LEVELS,
    tags: ["soru", "test", "bilgi"]
  },
  {
    id: "qu_2",
    title: "Fen Bilimleri Quizi",
    emoji: "🔬",
    category: "Quiz",
    categoryKey: "daily_quiz",
    route: "/quiz",
    levels: PRIMARY_MIDDLE,
    tags: ["fen", "bilim", "deney"]
  },
  {
    id: "qu_3",
    title: "Tarih Quizi",
    emoji: "📜",
    category: "Quiz",
    categoryKey: "daily_quiz",
    route: "/quiz",
    levels: PRIMARY_MIDDLE,
    tags: ["tarih", "geçmiş", "olay"]
  },
  {
    id: "qu_4",
    title: "Coğrafya Quizi",
    emoji: "🗺️",
    category: "Quiz",
    categoryKey: "daily_quiz",
    route: "/quiz",
    levels: PRIMARY_MIDDLE,
    tags: ["coğrafya", "dünya", "harita"]
  }
];
const LEVEL_NAMES = {
  okul_oncesi: "Okul Öncesi",
  ilkokul: "İlkokul",
  ortaokul: "Ortaokul"
};
const LEVEL_COLORS = {
  okul_oncesi: "bg-pink-500",
  ilkokul: "bg-green-500",
  ortaokul: "bg-blue-500"
};
function SearchPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { isDark } = useTheme();
  const [query, setQuery] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  const profile = getCurrentUser();
  const studentLevel = (profile == null ? void 0 : profile.level) || null;
  reactExports.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const getLabel = (key) => {
    var _a, _b;
    const labels = {
      stories: {
        tr: "Hikayeler",
        en: "Stories",
        es: "Cuentos",
        zh: "故事",
        hi: "कहानियाँ",
        fr: "Histoires",
        ar: "قصص",
        bn: "গল্প",
        ru: "Истории",
        pt: "Histórias"
      },
      poems: {
        tr: "Şiirler",
        en: "Poems",
        es: "Poemas",
        zh: "诗歌",
        hi: "कविताएँ",
        fr: "Poèmes",
        ar: "قصائد",
        bn: "কবিতা",
        ru: "Стихи",
        pt: "Poemas"
      },
      experiments: {
        tr: "Deneyler",
        en: "Experiments",
        es: "Experimentos",
        zh: "实验",
        hi: "प्रयोग",
        fr: "Expériences",
        ar: "تجارب",
        bn: "পরীক্ষা",
        ru: "Эксперименты",
        pt: "Experiências"
      },
      proverbs: {
        tr: "Atasözleri",
        en: "Proverbs",
        es: "Proverbios",
        zh: "谚语",
        hi: "कहावतें",
        fr: "Proverbes",
        ar: "أمثال",
        bn: "প্রবাদ",
        ru: "Пословицы",
        pt: "Provérbios"
      },
      grammar: {
        tr: "Dilbilgisi",
        en: "Grammar",
        es: "Gramática",
        zh: "语法",
        hi: "व्याकरण",
        fr: "Grammaire",
        ar: "قواعد",
        bn: "ব্যাকরণ",
        ru: "Грамматика",
        pt: "Gramática"
      },
      vocabulary: {
        tr: "Kelime Haznesi",
        en: "Vocabulary",
        es: "Vocabulario",
        zh: "词汇",
        hi: "शब्द भंडार",
        fr: "Vocabulaire",
        ar: "المفردات",
        bn: "শব্দভাণ্ডার",
        ru: "Словарный запас",
        pt: "Vocabulário"
      },
      math_practice: {
        tr: "Matematik",
        en: "Math",
        es: "Matemáticas",
        zh: "数学",
        hi: "गणित",
        fr: "Mathématiques",
        ar: "رياضيات",
        bn: "গণিত",
        ru: "Математика",
        pt: "Matemática"
      },
      math_story: {
        tr: "Matematik",
        en: "Math",
        es: "Matemáticas",
        zh: "数学",
        hi: "गणित",
        fr: "Mathématiques",
        ar: "رياضيات",
        bn: "গণিত",
        ru: "Математика",
        pt: "Matemática"
      },
      geography: {
        tr: "Coğrafya",
        en: "Geography",
        es: "Geografía",
        zh: "地理",
        hi: "भूगोल",
        fr: "Géographie",
        ar: "الجغرافيا",
        bn: "ভূগোল",
        ru: "География",
        pt: "Geografia"
      },
      history: {
        tr: "Tarih",
        en: "History",
        es: "Historia",
        zh: "历史",
        hi: "इतिहास",
        fr: "Histoire",
        ar: "التاريخ",
        bn: "ইতিহাস",
        ru: "История",
        pt: "História"
      },
      science: {
        tr: "Fen Bilimleri",
        en: "Science",
        es: "Ciencias",
        zh: "科学",
        hi: "विज्ञान",
        fr: "Sciences",
        ar: "العلوم",
        bn: "বিজ্ঞান",
        ru: "Наука",
        pt: "Ciências"
      },
      english: {
        tr: "Temel İngilizce",
        en: "Basic English",
        es: "Inglés básico",
        zh: "基础英语",
        hi: "बुनियादी अंग्रेजी",
        fr: "Anglais de base",
        ar: "الإنجليزية الأساسية",
        bn: "মৌলিক ইংরেজি",
        ru: "Базовый английский",
        pt: "Inglês Básico"
      },
      coding: {
        tr: "Kodlama",
        en: "Coding",
        es: "Programación",
        zh: "编程",
        hi: "कोडिंग",
        fr: "Codage",
        ar: "البرمجة",
        bn: "কোডিং",
        ru: "Программирование",
        pt: "Programação"
      },
      health: {
        tr: "Sağlık",
        en: "Health",
        es: "Salud",
        zh: "健康",
        hi: "स्वास्थ्य",
        fr: "Santé",
        ar: "الصحة",
        bn: "স্বাস্থ্য",
        ru: "Здоровье",
        pt: "Saúde"
      },
      art_music: {
        tr: "Müzik & Sanat",
        en: "Music & Art",
        es: "Música y Arte",
        zh: "音乐艺术",
        hi: "संगीत और कला",
        fr: "Musique & Art",
        ar: "الموسيقى والفن",
        bn: "সংগীত ও শিল্প",
        ru: "Музыка и искусство",
        pt: "Música e Arte"
      },
      general_culture: {
        tr: "Genel Kültür",
        en: "General Culture",
        es: "Cultura General",
        zh: "常识",
        hi: "सामान्य ज्ञान",
        fr: "Culture générale",
        ar: "ثقافة عامة",
        bn: "সাধারণ জ্ঞান",
        ru: "Общая культура",
        pt: "Cultura Geral"
      },
      puzzles: {
        tr: "Bulmacalar",
        en: "Puzzles",
        es: "Puzzles",
        zh: "谜题",
        hi: "पहेलियाँ",
        fr: "Puzzles",
        ar: "ألغاز",
        bn: "ধাঁধা",
        ru: "Загадки",
        pt: "Quebra-cabeças"
      },
      daily_quiz: {
        tr: "Quiz",
        en: "Quiz",
        es: "Quiz",
        zh: "测验",
        hi: "क्विज़",
        fr: "Quiz",
        ar: "اختبار",
        bn: "কুইজ",
        ru: "Викторина",
        pt: "Quiz"
      }
    };
    return ((_a = labels[key]) == null ? void 0 : _a[lang]) || ((_b = labels[key]) == null ? void 0 : _b.tr) || key;
  };
  const uiText = {
    title: {
      tr: "Genel Arama",
      en: "Global Search",
      es: "Búsqueda Global",
      zh: "全局搜索",
      hi: "वैश्विक खोज",
      fr: "Recherche Globale",
      ar: "البحث الشامل",
      bn: "বৈশ্বিক অনুসন্ধান",
      ru: "Глобальный поиск",
      pt: "Pesquisa Global"
    },
    placeholder: {
      tr: "Tüm içeriklerde ara...",
      en: "Search all content...",
      es: "Buscar en todo el contenido...",
      zh: "搜索所有内容...",
      hi: "सभी सामग्री में खोजें...",
      fr: "Rechercher dans tout le contenu...",
      ar: "البحث في جميع المحتوى...",
      bn: "সকল বিষয়বস্তু খুঁজুন...",
      ru: "Искать во всём контенте...",
      pt: "Pesquisar em todo o conteúdo..."
    },
    empty: {
      tr: "Sonuç bulunamadı",
      en: "No results found",
      es: "Sin resultados",
      zh: "未找到结果",
      hi: "कोई परिणाम नहीं",
      fr: "Aucun résultat",
      ar: "لا توجد نتائج",
      bn: "কোনো ফলাফল নেই",
      ru: "Результаты не найдены",
      pt: "Nenhum resultado"
    },
    hint: {
      tr: "Hikaye, şiir, konu veya kelime arayın",
      en: "Search for stories, poems, topics, or words",
      es: "Busca cuentos, poemas, temas o palabras",
      zh: "搜索故事、诗歌、主题或词语",
      hi: "कहानी, कविता, विषय या शब्द खोजें",
      fr: "Recherchez des histoires, poèmes, sujets",
      ar: "ابحث عن قصص، قصائد، مواضيع",
      bn: "গল্প, কবিতা, বিষয় বা শব্দ খুঁজুন",
      ru: "Ищите истории, стихи, темы или слова",
      pt: "Busque histórias, poemas, tópicos"
    },
    go: {
      tr: "Git",
      en: "Go",
      es: "Ir",
      zh: "前往",
      hi: "जाएं",
      fr: "Aller",
      ar: "اذهب",
      bn: "যান",
      ru: "Перейти",
      pt: "Ir"
    }
  };
  const get = (obj) => obj[lang] || obj.tr;
  const trimmedQuery = query.trim().toLowerCase();
  const filteredItems = trimmedQuery.length < 2 ? [] : SEARCH_INDEX.filter((item) => {
    if (studentLevel && !item.levels.includes(studentLevel)) return false;
    const haystack = [item.title, item.category, ...item.tags || []].join(" ").toLowerCase();
    return haystack.includes(trimmedQuery);
  });
  const grouped = filteredItems.reduce(
    (acc, item) => {
      const key = item.categoryKey;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {}
  );
  const groupEntries = Object.entries(grouped);
  const bg = isDark ? "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50";
  const cardBg = isDark ? "bg-white/5 border border-white/10 hover:bg-white/10" : "bg-white border border-slate-100 hover:bg-indigo-50 shadow-sm";
  const textPrimary = isDark ? "text-white" : "text-slate-800";
  const textSecondary = isDark ? "text-white/60" : "text-slate-500";
  const inputBg = isDark ? "bg-white/10 border border-white/20 text-white placeholder-white/40 focus:bg-white/15 focus:border-purple-400" : "bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-purple-400 shadow-sm";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: bg, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "search.back_button",
          onClick: () => navigate({ to: "/home" }),
          className: `text-sm font-bold ${textSecondary} hover:${textPrimary} transition-colors`,
          children: "←"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: `text-2xl font-black ${textPrimary}`, children: [
        "🔍 ",
        get(uiText.title)
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          ref: inputRef,
          type: "text",
          "data-ocid": "search.search_input",
          placeholder: get(uiText.placeholder),
          value: query,
          onChange: (e) => setQuery(e.target.value),
          className: `w-full pl-11 pr-4 py-4 rounded-2xl text-base font-medium outline-none transition-all ${inputBg}`
        }
      ),
      query && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "search.close_button",
          onClick: () => setQuery(""),
          className: `absolute right-4 top-1/2 -translate-y-1/2 text-xl ${textSecondary} hover:${textPrimary}`,
          children: "✕"
        }
      )
    ] }),
    trimmedQuery.length < 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-12 ${textSecondary}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🔎" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium", children: get(uiText.hint) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-2 opacity-70", children: [
        "2+ ",
        lang === "tr" ? "karakter" : "characters"
      ] })
    ] }),
    trimmedQuery.length >= 2 && groupEntries.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "search.empty_state",
        className: `text-center py-12 ${textSecondary}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "😔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold", children: get(uiText.empty) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm mt-2 opacity-70", children: [
            '"',
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: textPrimary, children: query }),
            '"'
          ] })
        ]
      }
    ),
    groupEntries.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: groupEntries.map(([catKey, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: `text-sm font-black uppercase tracking-wider ${textSecondary}`,
            children: getLabel(catKey)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `text-xs font-bold px-2 py-0.5 rounded-full ${isDark ? "bg-purple-500/30 text-purple-300" : "bg-purple-100 text-purple-600"}`,
            children: items.length
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: items.slice(0, 6).map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `search.item.${idx + 1}`,
          className: `flex items-center gap-4 p-4 rounded-2xl transition-all ${cardBg}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl flex-shrink-0", children: item.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `font-bold text-sm leading-tight ${textPrimary}`,
                  children: item.title
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: item.levels.map((lv) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-xs font-bold px-2 py-0.5 rounded-full text-white ${LEVEL_COLORS[lv]}`,
                  children: LEVEL_NAMES[lv]
                },
                lv
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "search.primary_button",
                onClick: () => navigate({ to: item.route }),
                className: "flex-shrink-0 bg-purple-600 hover:bg-purple-700 text-white text-xs font-black px-3 py-2 rounded-xl transition-colors",
                children: [
                  get(uiText.go),
                  " →"
                ]
              }
            )
          ]
        },
        item.id
      )) })
    ] }, catKey)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-10 text-center text-xs ${textSecondary}`, children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with ❤️ using",
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
    ] })
  ] }) });
}
export {
  SearchPage as default
};
