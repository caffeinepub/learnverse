import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-DKzO8o3N.js";
const codingDataTr = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "Adımlar",
      info: "Bir işi yaparken adım adım ilerleriz. Önce çorba öörseriz, sonra kapak acarız, sonra yeriz.",
      example: "Diş fırçalamak: 1) Fırça al, 2) Macun koy, 3) Fırçala, 4) Dur"
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "Sıralama",
      info: "Bilgisayarlar talimatlara sırayla uyar. Adımları karıştırırsak işler hatalı olur.",
      example: "Yanlış: Önce giy, sonra uyan. Doğru: Önce uyan, sonra giy."
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "Tekrar",
      info: "Bazen aynı işlemi defalarca yaparız. Bilgisayarlar bunu otomatik yapabilir.",
      example: "10 adım at: adım, adım, adım... (10 kez)"
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "Seçim",
      info: "'Eğer yağmur yağıyorsa şemsiye al, yağmıyorsa alma.' Bu bir seçimdir.",
      example: "Eğer aç isen → ye. Değilse → oyna."
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "Robot Oyunu",
      info: "Robota komut verirsin, o da tam olarak yapar. 'İleri 3 adım, sağa dön' gibi.",
      example: "Komutlar: İleri, Geri, Sağ, Sol, Dur"
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "Gizli Kod",
      info: "Mesajları şifrelemek eğlencelidir. A=1, B=2 gibi harfleri sayılarla değiştirebiliriz.",
      example: "MERHABA → 13-5-18-8-1-2-1"
    },
    {
      key: "cod_yol",
      emoji: "🗺️",
      title: "Yol Tarifi",
      info: "Bir yerden bir yere gitmek için adım adım yol tarifi vermek de bir algoritmadır.",
      example: "Sağa dön, 3 adım yürü, kapıyı aç."
    },
    {
      key: "cod_renk",
      emoji: "🎨",
      title: "Renk Kodu",
      info: "Bilgisayarlar renkleri sayılarla ifade eder. Her rengin özel bir kodu vardır.",
      example: "Kırmızı = R:255 G:0 B:0"
    },
    {
      key: "cod_desen",
      emoji: "🔳",
      title: "Desen ve Örüntü",
      info: "Bilgisayarlar tekrar eden desenleri tanıyabilir. Sıradaki şeyi tahmin etmek mantık oyunudur.",
      example: "🔴🔵🔴🔵🔴 → Sıradaki?"
    },
    {
      key: "cod_sinifla",
      emoji: "📦",
      title: "Sınıflandırma",
      info: "Nesneleri özelliklerine göre gruplayabiliriz. Bu bilgisayar düşüncesinin temelidir.",
      example: "Hayvanlar: Uçanlar, Yüzenler, Koşanlar"
    },
    {
      key: "cod_harita",
      emoji: "📱",
      title: "Dokunmatik Ekran",
      info: "Dokunmatik ekranlar parmaklarımızın nereye dokunduğunu hesaplar ve komutları çalıştırır.",
      example: "Dokun → Uygulama açılır"
    },
    {
      key: "cod_evet_hayir",
      emoji: "✅",
      title: "Evet / Hayır",
      info: "Bilgisayarlarda her şey Evet (1) veya Hayır (0) sorusuna dayanır.",
      example: "Yağmur yağıyor mu? Evet → Şemsiye al. Hayır → Bırak."
    }
  ],
  ilkokul: [
    {
      key: "cod_algoritma",
      emoji: "📊",
      title: "Algoritma",
      info: "Algoritma, bir problemi çözmek için takip edilen adımlar dizisidir.",
      example: "Tarif: Su kaynat → makarna at → 10 dk bekle → süz → ye"
    },
    {
      key: "cod_kosul",
      emoji: "❓",
      title: "Koşul (If-Else)",
      info: "Eğer bir koşul doğruysa A yap, değilse B yap. Bu bilgisayar programlarının temelidir.",
      example: "Eğer not >= 50 → Geçti. Değilse → Kaldı."
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "Döngü (Loop)",
      info: "Aynı işlemi defalarca yapmak için döngü kullanılır.",
      example: "5 kez tekrarla: 'Merhaba' yaz"
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "Değişken",
      info: "Değişken, bilgi saklayan bir kutudur. İçine sayı, harf veya kelime koyabilirsin.",
      example: "isim = 'Ali', yas = 10, puan = 95"
    },
    {
      key: "cod_mantik",
      emoji: "🧠",
      title: "Mantık",
      info: "VE, VEYA, DEĞİL gibi mantık operatörleriyle koşulları birleştirebiliriz.",
      example: "Yağmur yağıyor VE rüzgar esiyor → Evde kal"
    },
    {
      key: "cod_blok",
      emoji: "🧱",
      title: "Blok Kodlama",
      info: "Scratch ve benzeri uygulamalarda görsel blokları sürükleyerek kod yazılır.",
      example: "'Hareket' bloğu + '10 adım git' = kedi 10 adım atar"
    },
    {
      key: "cod_hata",
      emoji: "🐛",
      title: "Hata (Bug)",
      info: "Programda hata olursa beklenmedik şeyler olur. Hata bulmaya 'debug' denir.",
      example: "Hata: 2+2=5 yazan bir hesap makinesi"
    },
    {
      key: "cod_fonk",
      emoji: "⚙️",
      title: "Fonksiyon",
      info: "Tekrar kullanabileceğimiz kod bloğuna fonksiyon denir. İsim verilir ve çağrılır.",
      example: "selamla() → 'Merhaba!' yazar"
    },
    {
      key: "cod_dizi",
      emoji: "📋",
      title: "Dizi (Array)",
      info: "Birden fazla değeri tek bir değişkende saklayabilirsin. Buna dizi denir.",
      example: "meyveler = ['elma', 'armut', 'muz']"
    },
    {
      key: "cod_girdi",
      emoji: "⌨️",
      title: "Girdi ve Çıktı",
      info: "Kullanıcı bir şey yazar (girdi), bilgisayar cevap verir (çıktı). Her program bu döngüyle çalışır.",
      example: "Adını gir → 'Merhaba Ali!' yazar"
    },
    {
      key: "cod_karsilastir",
      emoji: "⚖️",
      title: "Karşılaştırma",
      info: "Programlar iki değeri karşılaştırabilir: eşit mi, büyük mü, küçük mü?",
      example: "5 > 3 → Doğru. 2 == 5 → Yanlış."
    },
    {
      key: "cod_yorumlama",
      emoji: "📝",
      title: "Yorum Satırı",
      info: "Kodun içine açıklama yazabilirsin. Bunlara yorum satırı denir, bilgisayar onları görmez.",
      example: "# Bu satır toplama yapar  /  a = a + b"
    },
    {
      key: "cod_tasarim",
      emoji: "🎮",
      title: "Oyun Tasarımı",
      info: "Oyunlar da birer programdır. Kurallar, karakterler ve puanlar kodla oluşturulur.",
      example: "Karakter zıplarsa → puan +10"
    },
    {
      key: "cod_test",
      emoji: "🧪",
      title: "Test Etme",
      info: "Kod yazdıktan sonra test edilmelidir. Hatalar bulunur ve düzeltilir.",
      example: "Beklenen: 5+3=8. Gelen: 5+3=11 → Hata var!"
    }
  ],
  ortaokul: [
    {
      key: "cod_python",
      emoji: "🐍",
      title: "Python",
      info: "Python, kolay okunabilen popüler bir programlama dilidir. Veri bilimi ve yapay zekada kullanılır.",
      example: "print('Merhaba Dünya')"
    },
    {
      key: "cod_sifrele",
      emoji: "🔒",
      title: "Şifreleme",
      info: "Verilerimizi güvende tutmak için şifreleme kullanılır. HTTPS bunu sağlar.",
      example: "'merhaba' → şifrelenmiş: 'x7@#kl!' gibi"
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "Yapay Zeka",
      info: "Yapay zeka, bilgisayarların öğrenip karar verebilmesidir. ChatGPT ve resim oluşturucular buna örnektir.",
      example: "Fotoğraftaki köpeği tanıyan uygulama"
    },
    {
      key: "cod_nesne",
      emoji: "📦",
      title: "Nesne Yönelimli Programlama",
      info: "OOP'da nesneler özellik ve metotlara sahiptir. Gerçek dünyadaki şeyleri temsil eder.",
      example: "Araba sınıfı: renk, hız, git(), dur()"
    },
    {
      key: "cod_binary",
      emoji: "🔣",
      title: "İkili Sistem (Binary)",
      info: "Bilgisayarlar 0 ve 1 ile çalışır. Her sayı 0'lar ve 1'lerden oluşan kodla ifade edilir.",
      example: "5 = 101 (ikili), 10 = 1010 (ikili)"
    },
    {
      key: "cod_git",
      emoji: "💻",
      title: "Versiyon Kontrol",
      info: "Git gibi araçlar kod değişikliklerini takip eder. Ekip çalışmasını kolaylaştırır.",
      example: "git commit -m 'Yeni özellik eklendi'"
    },
    {
      key: "cod_web",
      emoji: "🌐",
      title: "Web Geliştirme",
      info: "HTML yapıyı, CSS görünümü, JavaScript ise davranışı oluşturur. Web'in üç temel taşı.",
      example: "<h1>Merhaba Dünya</h1>"
    },
    {
      key: "cod_api",
      emoji: "🔌",
      title: "API Nedir?",
      info: "API, uygulamaların birbiriyle konuşmasını sağlar. Hava durumu uygulaması meteoroloji API'sini kullanır.",
      example: "GET /weather?city=Istanbul → {temp: 22}"
    },
    {
      key: "cod_veri",
      emoji: "🗃️",
      title: "Veri Yapıları",
      info: "Veriler farklı yapılarla tutulabilir: liste, yığın, sıra, ağaç. Her birinin avantajları farklıdır.",
      example: "Liste: [1,2,3] / Sözlük: {ad: 'Ali', yas: 14}"
    },
    {
      key: "cod_problem",
      emoji: "🧩",
      title: "Problem Çözme",
      info: "Büyük problemleri küçük parçalara bölerek çözmek en etkili yöntemdir. Buna 'divide and conquer' denir.",
      example: "1000 sayıyı sırala → 2 gruba böl → her grubu sırala → birleştir"
    },
    {
      key: "cod_guvenlik",
      emoji: "🛡️",
      title: "Siber Güvenlik",
      info: "Güçlü şifre kullanmak, kişisel bilgileri paylaşmamak ve güvenli siteleri tercih etmek önemlidir.",
      example: "Kötü şifre: 1234 / İyi şifre: Tr@2024!xyz"
    },
    {
      key: "cod_mobil",
      emoji: "📲",
      title: "Mobil Uygulama",
      info: "Telefonundaki uygulamalar farklı programlama dilleriyle yazılır: Swift (iOS), Kotlin (Android).",
      example: "Bir uygulama: Giriş ekranı → Ana ekran → Ayarlar"
    }
  ]
};
const codingDataEn = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "Steps",
      info: "When we do something, we go step by step. First we open the can, then we heat the soup, then we eat.",
      example: "Brushing teeth: 1) Get brush, 2) Add toothpaste, 3) Brush, 4) Rinse"
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "Ordering",
      info: "Computers follow instructions in order. If we mix up the steps, things go wrong.",
      example: "Wrong: Get dressed, then wake up. Right: Wake up, then get dressed."
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "Repeat",
      info: "Sometimes we do the same action many times. Computers can do this automatically.",
      example: "Take 10 steps: step, step, step... (10 times)"
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "Choice",
      info: "'If it is raining, take an umbrella; if not, leave it.' This is a choice.",
      example: "If hungry → eat. Otherwise → play."
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "Robot Game",
      info: "You give a robot a command and it does exactly what you say. Like 'Move 3 steps forward, turn right.'",
      example: "Commands: Forward, Backward, Right, Left, Stop"
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "Secret Code",
      info: "Encoding messages is fun! We can replace letters with numbers like A=1, B=2.",
      example: "HELLO → 8-5-12-12-15"
    },
    {
      key: "cod_yol",
      emoji: "🗺️",
      title: "Giving Directions",
      info: "Giving step-by-step directions from one place to another is also an algorithm.",
      example: "Turn right, walk 3 steps, open the door."
    },
    {
      key: "cod_renk",
      emoji: "🎨",
      title: "Color Code",
      info: "Computers represent colors with numbers. Each color has a special code.",
      example: "Red = R:255 G:0 B:0"
    },
    {
      key: "cod_desen",
      emoji: "🔳",
      title: "Patterns",
      info: "Computers can recognize repeating patterns. Guessing the next element is a logic game.",
      example: "🔴🔵🔴🔵🔴 → What comes next?"
    },
    {
      key: "cod_sinifla",
      emoji: "📦",
      title: "Classification",
      info: "We can group objects by their properties. This is the basis of computational thinking.",
      example: "Animals: Flying, Swimming, Running"
    },
    {
      key: "cod_harita",
      emoji: "📱",
      title: "Touchscreen",
      info: "Touchscreens calculate where your fingers touch and execute commands.",
      example: "Touch → App opens"
    },
    {
      key: "cod_evet_hayir",
      emoji: "✅",
      title: "Yes / No",
      info: "In computers, everything is based on Yes (1) or No (0) questions.",
      example: "Is it raining? Yes → Take umbrella. No → Leave it."
    }
  ],
  ilkokul: [
    {
      key: "cod_algoritma",
      emoji: "📊",
      title: "Algorithm",
      info: "An algorithm is a set of steps followed to solve a problem.",
      example: "Recipe: Boil water → add pasta → wait 10 min → drain → eat"
    },
    {
      key: "cod_kosul",
      emoji: "❓",
      title: "Condition (If-Else)",
      info: "If a condition is true, do A; otherwise do B. This is the foundation of computer programs.",
      example: "If grade >= 50 → Pass. Otherwise → Fail."
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "Loop",
      info: "A loop is used to repeat the same action multiple times.",
      example: "Repeat 5 times: print 'Hello'"
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "Variable",
      info: "A variable is a box that stores information. You can put numbers, letters or words in it.",
      example: "name = 'Ali', age = 10, score = 95"
    },
    {
      key: "cod_mantik",
      emoji: "🧠",
      title: "Logic",
      info: "We can combine conditions using AND, OR, NOT logic operators.",
      example: "It is raining AND it is windy → Stay home"
    },
    {
      key: "cod_blok",
      emoji: "🧱",
      title: "Block Coding",
      info: "In apps like Scratch, you write code by dragging visual blocks.",
      example: "'Motion' block + 'Move 10 steps' = cat moves 10 steps"
    },
    {
      key: "cod_hata",
      emoji: "🐛",
      title: "Bug",
      info: "If there is an error in a program, unexpected things happen. Finding errors is called 'debugging'.",
      example: "Bug: A calculator that says 2+2=5"
    },
    {
      key: "cod_fonk",
      emoji: "⚙️",
      title: "Function",
      info: "A function is a reusable block of code. It is given a name and called when needed.",
      example: "greet() → prints 'Hello!'"
    },
    {
      key: "cod_dizi",
      emoji: "📋",
      title: "Array",
      info: "You can store multiple values in a single variable. This is called an array.",
      example: "fruits = ['apple', 'pear', 'banana']"
    },
    {
      key: "cod_girdi",
      emoji: "⌨️",
      title: "Input and Output",
      info: "A user types something (input), the computer responds (output). Every program works in this cycle.",
      example: "Enter name → 'Hello Ali!' is printed"
    },
    {
      key: "cod_karsilastir",
      emoji: "⚖️",
      title: "Comparison",
      info: "Programs can compare two values: are they equal, greater, or less?",
      example: "5 > 3 → True. 2 == 5 → False."
    },
    {
      key: "cod_yorumlama",
      emoji: "📝",
      title: "Comments",
      info: "You can write explanations inside code. These are called comments; the computer ignores them.",
      example: "# This line adds  /  a = a + b"
    },
    {
      key: "cod_tasarim",
      emoji: "🎮",
      title: "Game Design",
      info: "Games are programs too. Rules, characters, and scores are all created with code.",
      example: "Character jumps → score +10"
    },
    {
      key: "cod_test",
      emoji: "🧪",
      title: "Testing",
      info: "After writing code, it must be tested. Errors are found and fixed.",
      example: "Expected: 5+3=8. Got: 5+3=11 → Bug found!"
    }
  ],
  ortaokul: [
    {
      key: "cod_python",
      emoji: "🐍",
      title: "Python",
      info: "Python is a popular, easy-to-read programming language. It is used in data science and AI.",
      example: "print('Hello World')"
    },
    {
      key: "cod_sifrele",
      emoji: "🔒",
      title: "Encryption",
      info: "Encryption is used to keep our data safe. HTTPS uses encryption.",
      example: "'hello' → encrypted: 'x7@#kl!' for example"
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "Artificial Intelligence",
      info: "AI allows computers to learn and make decisions. ChatGPT and image generators are examples.",
      example: "An app that recognizes a dog in a photo"
    },
    {
      key: "cod_nesne",
      emoji: "📦",
      title: "Object-Oriented Programming",
      info: "In OOP, objects have properties and methods. They represent real-world things.",
      example: "Car class: color, speed, drive(), stop()"
    },
    {
      key: "cod_binary",
      emoji: "🔣",
      title: "Binary System",
      info: "Computers work with 0s and 1s. Every number is expressed as a code of 0s and 1s.",
      example: "5 = 101 (binary), 10 = 1010 (binary)"
    },
    {
      key: "cod_git",
      emoji: "💻",
      title: "Version Control",
      info: "Tools like Git track code changes. They make teamwork easier.",
      example: "git commit -m 'New feature added'"
    },
    {
      key: "cod_web",
      emoji: "🌐",
      title: "Web Development",
      info: "HTML creates structure, CSS handles appearance, JavaScript adds behavior. The three pillars of the web.",
      example: "<h1>Hello World</h1>"
    },
    {
      key: "cod_api",
      emoji: "🔌",
      title: "What is an API?",
      info: "An API lets apps talk to each other. A weather app uses a meteorology API.",
      example: "GET /weather?city=Istanbul → {temp: 22}"
    },
    {
      key: "cod_veri",
      emoji: "🗃️",
      title: "Data Structures",
      info: "Data can be organized in different structures: list, stack, queue, tree. Each has different advantages.",
      example: "List: [1,2,3] / Dictionary: {name: 'Ali', age: 14}"
    },
    {
      key: "cod_problem",
      emoji: "🧩",
      title: "Problem Solving",
      info: "Breaking big problems into small pieces is the most effective approach. This is called 'divide and conquer'.",
      example: "Sort 1000 numbers → split into 2 → sort each → merge"
    },
    {
      key: "cod_guvenlik",
      emoji: "🛡️",
      title: "Cybersecurity",
      info: "Using strong passwords, not sharing personal info, and choosing secure sites are important.",
      example: "Bad password: 1234 / Good password: Tr@2024!xyz"
    },
    {
      key: "cod_mobil",
      emoji: "📲",
      title: "Mobile Apps",
      info: "Apps on your phone are written in different languages: Swift (iOS), Kotlin (Android).",
      example: "An app: Login screen → Home screen → Settings"
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
function CodingPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "coding");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const codingData = isEn ? codingDataEn : codingDataTr;
  const levelTabs = isEn ? levelTabsEn : levelTabsTr;
  const filtered = codingData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.info.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = codingData[level].length;
  const done = codingData[level].filter(
    (p) => readTopics.includes(p.key)
  ).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-violet-700 to-purple-600", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
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
      "💻 ",
      isEn ? "Coding & Logic" : "Kodlama & Mantık"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-violet-700" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💻" }),
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
            className: "h-full bg-cyan-300 rounded-full transition-all duration-500",
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
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-cyan-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: item.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-base", children: item.title }),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-cyan-300 text-xl", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-sm leading-relaxed mb-2", children: item.info }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/20 rounded-xl px-3 py-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cyan-200 text-xs font-semibold", children: [
                "💻 ",
                isEn ? "Example" : "Örnek",
                ":",
                " "
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-xs font-mono", children: item.example })
            ] }),
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
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cyan-300 text-xs font-bold", children: [
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
  CodingPage as default
};
