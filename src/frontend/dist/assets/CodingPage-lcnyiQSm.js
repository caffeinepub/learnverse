import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-B83eSkg_.js";
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
const codingDataEs = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "Pasos",
      info: "Cuando hacemos algo, avanzamos paso a paso. Primero abrimos la lata, luego calentamos la sopa, luego comemos.",
      example: "Cepillarse los dientes: 1) Coger el cepillo, 2) Poner pasta, 3) Cepillar, 4) Enjuagar"
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "Orden",
      info: "Las computadoras siguen instrucciones en orden. Si mezclamos los pasos, las cosas salen mal.",
      example: "Mal: Vestirse, luego despertarse. Bien: Despertarse, luego vestirse."
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "Repetir",
      info: "A veces hacemos la misma acción muchas veces. Las computadoras pueden hacerlo automáticamente.",
      example: "Da 10 pasos: paso, paso, paso... (10 veces)"
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "Elección",
      info: "'Si llueve, coge el paraguas; si no, déjalo.' Esto es una elección.",
      example: "Si tienes hambre → come. Si no → juega."
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "Juego del Robot",
      info: "Das un comando al robot y hace exactamente lo que dices. Como 'Avanza 3 pasos, gira a la derecha.'",
      example: "Comandos: Adelante, Atrás, Derecha, Izquierda, Parar"
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "Código Secreto",
      info: "¡Codificar mensajes es divertido! Podemos reemplazar letras con números como A=1, B=2.",
      example: "HOLA → 8-15-12-1"
    },
    {
      key: "cod_yol",
      emoji: "🗺️",
      title: "Dar Indicaciones",
      info: "Dar indicaciones paso a paso de un lugar a otro también es un algoritmo.",
      example: "Gira a la derecha, camina 3 pasos, abre la puerta."
    },
    {
      key: "cod_renk",
      emoji: "🎨",
      title: "Código de Color",
      info: "Las computadoras representan colores con números. Cada color tiene un código especial.",
      example: "Rojo = R:255 G:0 B:0"
    },
    {
      key: "cod_desen",
      emoji: "🔳",
      title: "Patrones",
      info: "Las computadoras pueden reconocer patrones repetidos. Adivinar el siguiente elemento es un juego de lógica.",
      example: "🔴🔵🔴🔵🔴 → ¿Qué sigue?"
    },
    {
      key: "cod_sinifla",
      emoji: "📦",
      title: "Clasificación",
      info: "Podemos agrupar objetos por sus propiedades. Esta es la base del pensamiento computacional.",
      example: "Animales: Voladores, Nadadores, Corredores"
    },
    {
      key: "cod_harita",
      emoji: "📱",
      title: "Pantalla Táctil",
      info: "Las pantallas táctiles calculan dónde tocan tus dedos y ejecutan comandos.",
      example: "Toca → La app se abre"
    },
    {
      key: "cod_evet_hayir",
      emoji: "✅",
      title: "Sí / No",
      info: "En las computadoras, todo se basa en preguntas de Sí (1) o No (0).",
      example: "¿Está lloviendo? Sí → Coge el paraguas. No → Déjalo."
    }
  ],
  ilkokul: [
    {
      key: "cod_algoritma",
      emoji: "📊",
      title: "Algoritmo",
      info: "Un algoritmo es un conjunto de pasos para resolver un problema.",
      example: "Receta: Hervir agua → añadir pasta → esperar 10 min → colar → comer"
    },
    {
      key: "cod_kosul",
      emoji: "❓",
      title: "Condición (If-Else)",
      info: "Si una condición es verdadera, hacer A; si no, hacer B. Es la base de los programas.",
      example: "Si nota >= 50 → Aprobado. Si no → Suspenso."
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "Bucle (Loop)",
      info: "Un bucle se usa para repetir la misma acción varias veces.",
      example: "Repetir 5 veces: imprimir 'Hola'"
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "Variable",
      info: "Una variable es una caja que guarda información. Puedes poner números, letras o palabras.",
      example: "nombre = 'Ali', edad = 10, puntos = 95"
    },
    {
      key: "cod_mantik",
      emoji: "🧠",
      title: "Lógica",
      info: "Podemos combinar condiciones usando los operadores lógicos Y, O, NO.",
      example: "Está lloviendo Y hace viento → Quedarse en casa"
    },
    {
      key: "cod_blok",
      emoji: "🧱",
      title: "Programación por Bloques",
      info: "En apps como Scratch, escribes código arrastrando bloques visuales.",
      example: "Bloque 'Movimiento' + 'Mover 10 pasos' = el gato se mueve 10 pasos"
    },
    {
      key: "cod_hata",
      emoji: "🐛",
      title: "Error (Bug)",
      info: "Si hay un error en el programa, pasan cosas inesperadas. Encontrar errores se llama 'depurar'.",
      example: "Bug: Una calculadora que dice 2+2=5"
    },
    {
      key: "cod_fonk",
      emoji: "⚙️",
      title: "Función",
      info: "Una función es un bloque de código reutilizable. Se le da un nombre y se llama cuando se necesita.",
      example: "saludar() → imprime '¡Hola!'"
    },
    {
      key: "cod_dizi",
      emoji: "📋",
      title: "Array (Lista)",
      info: "Puedes guardar varios valores en una sola variable. Esto se llama array.",
      example: "frutas = ['manzana', 'pera', 'plátano']"
    },
    {
      key: "cod_girdi",
      emoji: "⌨️",
      title: "Entrada y Salida",
      info: "El usuario escribe algo (entrada), el ordenador responde (salida). Todo programa funciona en este ciclo.",
      example: "Escribe nombre → se imprime '¡Hola Ali!'"
    },
    {
      key: "cod_karsilastir",
      emoji: "⚖️",
      title: "Comparación",
      info: "Los programas pueden comparar dos valores: ¿son iguales, mayores o menores?",
      example: "5 > 3 → Verdadero. 2 == 5 → Falso."
    },
    {
      key: "cod_yorumlama",
      emoji: "📝",
      title: "Comentarios",
      info: "Puedes escribir explicaciones dentro del código. Se llaman comentarios; el ordenador los ignora.",
      example: "# Esta línea suma  /  a = a + b"
    },
    {
      key: "cod_tasarim",
      emoji: "🎮",
      title: "Diseño de Juegos",
      info: "Los juegos también son programas. Las reglas, personajes y puntuaciones se crean con código.",
      example: "El personaje salta → puntos +10"
    },
    {
      key: "cod_test",
      emoji: "🧪",
      title: "Pruebas",
      info: "Después de escribir código, hay que probarlo. Se encuentran errores y se corrigen.",
      example: "Esperado: 5+3=8. Obtenido: 5+3=11 → ¡Error encontrado!"
    }
  ],
  ortaokul: [
    {
      key: "cod_python",
      emoji: "🐍",
      title: "Python",
      info: "Python es un lenguaje de programación popular y fácil de leer. Se usa en ciencia de datos e IA.",
      example: "print('Hola Mundo')"
    },
    {
      key: "cod_sifrele",
      emoji: "🔒",
      title: "Cifrado",
      info: "El cifrado se usa para mantener nuestros datos seguros. HTTPS usa cifrado.",
      example: "'hola' → cifrado: 'x7@#kl!' por ejemplo"
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "Inteligencia Artificial",
      info: "La IA permite a las computadoras aprender y tomar decisiones. ChatGPT y los generadores de imágenes son ejemplos.",
      example: "Una app que reconoce un perro en una foto"
    },
    {
      key: "cod_nesne",
      emoji: "📦",
      title: "Programación Orientada a Objetos",
      info: "En POO, los objetos tienen propiedades y métodos. Representan cosas del mundo real.",
      example: "Clase Coche: color, velocidad, conducir(), parar()"
    },
    {
      key: "cod_binary",
      emoji: "🔣",
      title: "Sistema Binario",
      info: "Las computadoras trabajan con 0s y 1s. Cada número se expresa como un código de 0s y 1s.",
      example: "5 = 101 (binario), 10 = 1010 (binario)"
    },
    {
      key: "cod_git",
      emoji: "💻",
      title: "Control de Versiones",
      info: "Herramientas como Git rastrean cambios en el código. Facilitan el trabajo en equipo.",
      example: "git commit -m 'Nueva función añadida'"
    },
    {
      key: "cod_web",
      emoji: "🌐",
      title: "Desarrollo Web",
      info: "HTML crea la estructura, CSS maneja la apariencia, JavaScript añade comportamiento. Los tres pilares de la web.",
      example: "<h1>Hola Mundo</h1>"
    },
    {
      key: "cod_api",
      emoji: "🔌",
      title: "¿Qué es una API?",
      info: "Una API permite que las apps se comuniquen entre sí. Una app del tiempo usa una API meteorológica.",
      example: "GET /weather?city=Madrid → {temp: 22}"
    },
    {
      key: "cod_veri",
      emoji: "🗃️",
      title: "Estructuras de Datos",
      info: "Los datos se pueden organizar en diferentes estructuras: lista, pila, cola, árbol. Cada una tiene ventajas distintas.",
      example: "Lista: [1,2,3] / Diccionario: {nombre: 'Ali', edad: 14}"
    },
    {
      key: "cod_problem",
      emoji: "🧩",
      title: "Resolución de Problemas",
      info: "Dividir problemas grandes en piezas pequeñas es el enfoque más efectivo. Esto se llama 'divide y vencerás'.",
      example: "Ordenar 1000 números → dividir en 2 → ordenar cada parte → combinar"
    },
    {
      key: "cod_guvenlik",
      emoji: "🛡️",
      title: "Ciberseguridad",
      info: "Usar contraseñas fuertes, no compartir información personal y elegir sitios seguros es importante.",
      example: "Mala contraseña: 1234 / Buena contraseña: Es@2024!xyz"
    },
    {
      key: "cod_mobil",
      emoji: "📲",
      title: "Apps Móviles",
      info: "Las apps en tu teléfono están escritas en diferentes lenguajes: Swift (iOS), Kotlin (Android).",
      example: "Una app: Pantalla de inicio → Pantalla principal → Ajustes"
    }
  ]
};
const codingDataFr = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "Les Étapes",
      info: "Quand on fait quelque chose, on avance étape par étape. D'abord on ouvre la boîte, ensuite on chauffe la soupe, puis on mange.",
      example: "Se brosser les dents : 1) Prendre la brosse, 2) Mettre du dentifrice, 3) Brosser, 4) Rincer"
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "L'Ordre",
      info: "Les ordinateurs suivent les instructions dans l'ordre. Si on mélange les étapes, ça ne fonctionne pas bien.",
      example: "Mal : S'habiller, puis se lever. Bien : Se lever, puis s'habiller."
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "Répéter",
      info: "Parfois on fait la même action plusieurs fois. Les ordinateurs peuvent le faire automatiquement.",
      example: "Faire 10 pas : pas, pas, pas... (10 fois)"
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "Le Choix",
      info: "'S'il pleut, prends le parapluie ; sinon, laisse-le.' C'est un choix conditionnel.",
      example: "Si tu as faim → mange. Sinon → joue."
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "Jeu du Robot",
      info: "Tu donnes une commande au robot et il fait exactement ce que tu dis. Comme 'Avance de 3 pas, tourne à droite.'",
      example: "Commandes : Avant, Arrière, Droite, Gauche, Stop"
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "Code Secret",
      info: "Coder des messages, c'est amusant ! On peut remplacer les lettres par des chiffres comme A=1, B=2.",
      example: "BONJOUR → 2-15-14-10-15-21-18"
    },
    {
      key: "cod_yol",
      emoji: "🗺️",
      title: "Donner des Directions",
      info: "Donner des directions étape par étape d'un endroit à un autre est aussi un algorithme.",
      example: "Tourne à droite, marche 3 pas, ouvre la porte."
    },
    {
      key: "cod_renk",
      emoji: "🎨",
      title: "Code Couleur",
      info: "Les ordinateurs représentent les couleurs avec des nombres. Chaque couleur a un code spécial.",
      example: "Rouge = R:255 G:0 B:0"
    }
  ],
  ilkokul: [
    {
      key: "cod_algo",
      emoji: "📋",
      title: "L'Algorithme",
      info: "Un algorithme est une liste d'instructions pour résoudre un problème. C'est comme une recette de cuisine.",
      example: "Algorithme de lavage : Trier → Laver → Rincer → Essorer → Sécher"
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "Les Variables",
      info: "Une variable est comme une boîte où on stocke une valeur. Le nom de la boîte aide à se souvenir de son contenu.",
      example: "score = 0; score = score + 10; (score est maintenant 10)"
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "Les Boucles",
      info: "Une boucle répète une instruction plusieurs fois. Ça permet d'éviter d'écrire le même code plusieurs fois.",
      example: "Pour i de 1 à 5 : afficher i → 1 2 3 4 5"
    },
    {
      key: "cod_sart",
      emoji: "🔀",
      title: "Les Conditions",
      info: "Si quelque chose est vrai, fais ceci ; sinon, fais cela. C'est la base de la prise de décision.",
      example: "Si score > 100 : afficher 'Félicitations !' Sinon : afficher 'Continue !'"
    },
    {
      key: "cod_fonksiyon",
      emoji: "🔧",
      title: "Les Fonctions",
      info: "Une fonction est un bloc de code réutilisable. On lui donne un nom et on l'appelle quand on en a besoin.",
      example: "fonction saluer(nom) { afficher('Bonjour ' + nom) }"
    },
    {
      key: "cod_liste",
      emoji: "📝",
      title: "Les Listes",
      info: "Une liste stocke plusieurs éléments dans un seul endroit. On accède aux éléments par leur position.",
      example: "fruits = ['pomme', 'banane', 'orange']; fruits[0] = 'pomme'"
    }
  ],
  ortaokul: [
    {
      key: "cod_oop",
      emoji: "🏗️",
      title: "La Programmation Orientée Objet",
      info: "En POO, on crée des objets avec des propriétés et des comportements. Les classes sont des modèles.",
      example: "Classe Voiture { couleur, vitesse, accélérer(), freiner() }"
    },
    {
      key: "cod_veritabani",
      emoji: "🗄️",
      title: "Les Bases de Données",
      info: "Les bases de données stockent des informations de manière organisée. SQL est le langage le plus utilisé.",
      example: "SELECT * FROM étudiants WHERE note > 80"
    },
    {
      key: "cod_ag",
      emoji: "🌐",
      title: "Les Réseaux",
      info: "Les réseaux permettent aux ordinateurs de communiquer. Internet est le plus grand réseau mondial.",
      example: "Client → Requête HTTP → Serveur → Réponse HTML → Navigateur"
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "L'Intelligence Artificielle",
      info: "L'IA permet aux machines d'apprendre et de prendre des décisions. Elle utilise des données pour s'améliorer.",
      example: "Reconnaissance d'images, traduction automatique, assistants vocaux"
    },
    {
      key: "cod_siralama",
      emoji: "📊",
      title: "Les Algorithmes de Tri",
      info: "Les algorithmes de tri organisent les données dans un ordre spécifique. Il en existe de nombreux types.",
      example: "Tri à bulles : comparer deux éléments adjacents et les échanger si nécessaire"
    },
    {
      key: "cod_guvenlik",
      emoji: "🛡️",
      title: "La Cybersécurité",
      info: "Utiliser des mots de passe forts, ne pas partager ses informations personnelles et choisir des sites sécurisés.",
      example: "Mauvais mot de passe : 1234 / Bon mot de passe : Fr@2024!xyz"
    },
    {
      key: "cod_mobil",
      emoji: "📲",
      title: "Les Applications Mobiles",
      info: "Les apps sur ton téléphone sont écrites dans différents langages : Swift (iOS), Kotlin (Android).",
      example: "Une app : Écran d'accueil → Écran principal → Paramètres"
    }
  ]
};
const codingDataZh = {
  okul_oncesi: [
    {
      key: "cod_adim",
      emoji: "👣",
      title: "步骤",
      info: "做事情需要一步一步来。先打开罐头，再加热汤，最后喝汤。",
      example: "刷牙：1) 拿牙刷，2) 挤牙膏，3) 刷牙，4) 漱口"
    },
    {
      key: "cod_sirala",
      emoji: "🔢",
      title: "顺序",
      info: "电脑按照顺序执行指令。如果步骤顺序错了，就会出问题。",
      example: "错误：先穿衣服再起床。正确：先起床再穿衣服。"
    },
    {
      key: "cod_tekrar",
      emoji: "🔁",
      title: "重复",
      info: "有时我们需要做很多次同样的动作。电脑可以自动重复执行。",
      example: "走10步：走，走，走……（10次）"
    },
    {
      key: "cod_secim",
      emoji: "🤔",
      title: "选择",
      info: "'如果下雨就带伞，不下雨就不带。' 这就是一个选择。",
      example: "如果饿了 → 吃饭。否则 → 去玩。"
    },
    {
      key: "cod_robot",
      emoji: "🤖",
      title: "机器人游戏",
      info: "你给机器人一条指令，它就严格按照你说的去做，比如'向前走3步，向右转'。",
      example: "指令：前进、后退、右转、左转、停止"
    },
    {
      key: "cod_sifre",
      emoji: "🔐",
      title: "密码",
      info: "给信息编码很有趣！我们可以用数字代替字母，比如A=1，B=2。",
      example: "HELLO → 8-5-12-12-15"
    },
    {
      key: "cod_yol",
      emoji: "🗺️",
      title: "指路",
      info: "一步一步给出从一个地方到另一个地方的路线，这也是一种算法。",
      example: "向右转，走3步，打开门。"
    },
    {
      key: "cod_desen",
      emoji: "🎨",
      title: "模式",
      info: "模式就是重复出现的规律，比如红、蓝、红、蓝……下一个是什么？",
      example: "🔴🔵🔴🔵 → 下一个是 🔴"
    },
    {
      key: "cod_koşul",
      emoji: "🚦",
      title: "条件",
      info: "红灯停，绿灯行——这就是计算机里的条件判断。",
      example: "如果红灯 → 停车。如果绿灯 → 前行。"
    },
    {
      key: "cod_oyun",
      emoji: "🎮",
      title: "游戏规则",
      info: "游戏有规则，程序也有规则。规则告诉我们什么可以做，什么不可以做。",
      example: "规则：只能向前跳，不能向后跳。"
    }
  ],
  ilkokul: [
    {
      key: "cod_algo",
      emoji: "📋",
      title: "算法",
      info: "算法就是解决问题的一步一步的方法。就像食谱教你如何做菜。",
      example: "找最大数的算法：比较两个数，大的放一边，继续比较。"
    },
    {
      key: "cod_dongu",
      emoji: "🔄",
      title: "循环",
      info: "循环让我们重复执行某段代码。比如'重复10次：向前走一步'。",
      example: "for i in range(5): print('你好') → 打印5次'你好'"
    },
    {
      key: "cod_if",
      emoji: "🚦",
      title: "如果语句",
      info: "如果（if）语句让电脑根据条件做决定：如果...那么...否则...",
      example: "如果分数>=60：通过。否则：不通过。"
    },
    {
      key: "cod_degisken",
      emoji: "📦",
      title: "变量",
      info: "变量就像一个装东西的盒子，可以存储数字、文字或其他信息。",
      example: "分数 = 100，名字 = '小明'，可以随时改变。"
    },
    {
      key: "cod_fonksiyon",
      emoji: "⚙️",
      title: "函数",
      info: "函数是一段可以重复使用的代码块，有了函数就不需要一遍遍重写同样的代码。",
      example: "def 打招呼(): print('你好！') → 可以随时调用"
    },
    {
      key: "cod_liste",
      emoji: "📝",
      title: "列表",
      info: "列表可以存储多个数据，比如一个购物清单或学生名单。",
      example: "水果 = ['苹果', '香蕉', '橙子'] → 有3个元素"
    },
    {
      key: "cod_hata",
      emoji: "🐛",
      title: "调试",
      info: "调试（debug）就是找到并修复代码中的错误，就像侦探找线索。",
      example: "程序没有按预期运行 → 检查每一步 → 找到错误 → 修复"
    },
    {
      key: "cod_bilgisayar",
      emoji: "💻",
      title: "计算机组成",
      info: "计算机由CPU（处理器）、内存、硬盘和输入输出设备组成。",
      example: "CPU = 大脑，内存 = 短期记忆，硬盘 = 长期记忆"
    },
    {
      key: "cod_ikili",
      emoji: "0️⃣1️⃣",
      title: "二进制",
      info: "计算机只理解0和1。所有数据都用0和1来表示，这叫二进制。",
      example: "十进制5 = 二进制101（1×4 + 0×2 + 1×1）"
    },
    {
      key: "cod_ag",
      emoji: "🌐",
      title: "网络",
      info: "互联网是连接全球计算机的大网络，让我们能互相分享信息。",
      example: "发邮件：你的电脑 → 互联网 → 对方的电脑"
    }
  ],
  ortaokul: [
    {
      key: "cod_python",
      emoji: "🐍",
      title: "Python语言",
      info: "Python是一种简单易读的编程语言，广泛用于数据科学和人工智能。",
      example: "print('你好，世界！') → 输出：你好，世界！"
    },
    {
      key: "cod_veri",
      emoji: "📊",
      title: "数据类型",
      info: "编程中有整数、小数、字符串、布尔值等不同的数据类型。",
      example: "整数: 5，小数: 3.14，字符串: '你好'，布尔: True/False"
    },
    {
      key: "cod_nesne",
      emoji: "🏗️",
      title: "面向对象",
      info: "面向对象编程把数据和方法封装在类中，就像用模板造房子。",
      example: "类 学生: 姓名, 年龄, 学习()方法"
    },
    {
      key: "cod_web",
      emoji: "🌐",
      title: "Web开发",
      info: "网页由HTML（结构）、CSS（样式）和JavaScript（功能）组成。",
      example: "<h1>标题</h1> → 在网页上显示标题"
    },
    {
      key: "cod_veritabani",
      emoji: "🗄️",
      title: "数据库",
      info: "数据库有组织地存储信息，SQL是最常用的数据库语言。",
      example: "SELECT 姓名 FROM 学生 WHERE 成绩 > 90"
    },
    {
      key: "cod_guvenlik",
      emoji: "🔒",
      title: "网络安全",
      info: "网络安全保护我们的数据和隐私，包括密码、加密和防病毒。",
      example: "强密码：大小写字母+数字+符号，至少8位"
    },
    {
      key: "cod_yapay",
      emoji: "🤖",
      title: "人工智能",
      info: "人工智能（AI）让机器能够学习和做决策，就像人类一样思考。",
      example: "机器学习：通过大量数据训练模型，预测结果"
    },
    {
      key: "cod_mobil",
      emoji: "📱",
      title: "移动应用",
      info: "手机上的应用用不同语言开发：iOS用Swift，Android用Kotlin。",
      example: "点击按钮 → 触发事件 → 执行代码 → 更新界面"
    },
    {
      key: "cod_oyun_gelis",
      emoji: "🎮",
      title: "游戏开发",
      info: "游戏开发结合了编程、数学、物理和美术，需要多种技能。",
      example: "游戏循环：更新状态 → 检测碰撞 → 渲染画面 → 重复"
    },
    {
      key: "cod_etik",
      emoji: "⚖️",
      title: "科技伦理",
      info: "技术应该服务于人类，我们要负责任地使用技术，保护隐私和数据。",
      example: "不分享他人的个人信息。尊重知识产权。"
    },
    {
      key: "cod_problem",
      emoji: "🧩",
      title: "问题解决",
      info: "解决编程问题：理解问题 → 制定计划 → 编写代码 → 测试 → 改进",
      example: "分解大问题为小问题，逐一解决，这叫分而治之。"
    }
  ]
};
const levelTabsZh = [
  { key: "okul_oncesi", label: "🌈 幼儿园" },
  { key: "ilkokul", label: "📗 小学" },
  { key: "ortaokul", label: "📘 初中" }
];
const levelTabsFr = [
  { key: "okul_oncesi", label: "🌈 Préscolaire" },
  { key: "ilkokul", label: "📗 Primaire" },
  { key: "ortaokul", label: "📘 Collège" }
];
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
const levelTabsEs = [
  { key: "okul_oncesi", label: "🌈 Preescolar" },
  { key: "ilkokul", label: "📗 Primaria" },
  { key: "ortaokul", label: "📘 Secundaria" }
];
function CodingPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const isZh = lang === "zh";
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
  const codingData = isZh ? codingDataZh : isFr ? codingDataFr : isEn ? codingDataEn : isEs ? codingDataEs : codingDataTr;
  const levelTabs = isZh ? levelTabsZh : isFr ? levelTabsFr : isEn ? levelTabsEn : isEs ? levelTabsEs : levelTabsTr;
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
          isFr ? "Retour" : isEs ? "Volver" : isEn ? "Back" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "💻",
      " ",
      isFr ? "Codage & Logique" : isEs ? "Codificación & Lógica" : isEn ? "Coding & Logic" : "Kodlama & Mantık"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: isFr ? "Progrès à ce niveau" : isEs ? "Progreso en este nivel" : isEn ? "Progress at this level" : "Bu seviyedeki ilerleme" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: isFr ? "Aucun résultat trouvé 🔍" : isEs ? "No se encontraron resultados 🔍" : isEn ? "No results found 🔍" : "Sonuç bulunamadı 🔍" }) : filtered.map((item) => {
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
                "💻",
                " ",
                isFr ? "Exemple" : isEs ? "Ejemplo" : isEn ? "Example" : "Örnek",
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
                  " +10",
                  " ",
                  isFr ? "pts" : isEs ? "pts" : isEn ? "pts" : "puan"
                ]
              }
            ),
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cyan-300 text-xs font-bold", children: [
              "✅",
              " ",
              isFr ? "Appris (+10 pts gagnés)" : isEs ? "Aprendido (+10 pts ganados)" : isEn ? "Learned (+10 pts earned)" : "Öğrenildi (+10 puan kazanıldı)"
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
