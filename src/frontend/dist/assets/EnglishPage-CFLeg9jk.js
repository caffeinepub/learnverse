import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-CGT7mtIO.js";
const englishDataTr = {
  okul_oncesi: [
    {
      key: "eng_colors",
      emoji: "🌈",
      title: "Renkler / Colors",
      description: "Kırmızı, Mavi, Sarı, Yeşil — Red, Blue, Yellow, Green",
      example: "The apple is red. (Elma kırmızıdır.)"
    },
    {
      key: "eng_numbers",
      emoji: "🔢",
      title: "Sayılar / Numbers",
      description: "Bir, İki, Üç, Dört, Beş — One, Two, Three, Four, Five",
      example: "I have two cats. (İki kedim var.)"
    },
    {
      key: "eng_animals",
      emoji: "🐶",
      title: "Hayvanlar / Animals",
      description: "Köpek, Kedi, Kuş, Balık — Dog, Cat, Bird, Fish",
      example: "The dog is happy. (Köpek mutlu.)"
    },
    {
      key: "eng_family",
      emoji: "👨‍👩‍👧",
      title: "Aile / Family",
      description: "Anne, Baba, Kardeş — Mother, Father, Brother, Sister",
      example: "My mother is kind. (Annem nazik.)"
    },
    {
      key: "eng_food",
      emoji: "🥗",
      title: "Yiyecekler / Food",
      description: "Elma, Ekmek, Süt, Yumurta — Apple, Bread, Milk, Egg",
      example: "I like apples. (Elmaları severim.)"
    },
    {
      key: "eng_greetings",
      emoji: "👋",
      title: "Selamlaşma / Greetings",
      description: "Merhaba, Güle güle, Teşekkürler — Hello, Goodbye, Thank you",
      example: "Hello! How are you? (Merhaba! Nasılsın?)"
    },
    {
      key: "eng_shapes",
      emoji: "🔷",
      title: "Şekiller / Shapes",
      description: "Daire, Kare, Üçgen — Circle, Square, Triangle",
      example: "The sun is a circle. (Güneş bir dairedir.)"
    },
    {
      key: "eng_body",
      emoji: "👀",
      title: "Vücut / Body Parts",
      description: "Göz, Kulak, Burun, El, Ayak — Eye, Ear, Nose, Hand, Foot",
      example: "I have two eyes. (İki gözüm var.)"
    },
    {
      key: "eng_toys",
      emoji: "🧸",
      title: "Oyuncaklar / Toys",
      description: "Top, Bebek, Araba, Uçurtma — Ball, Doll, Car, Kite",
      example: "I play with my ball. (Topumla oynuyorum.)"
    },
    {
      key: "eng_fruits",
      emoji: "🍓",
      title: "Meyveler / Fruits",
      description: "Elma, Muz, Çilek, Üzüm — Apple, Banana, Strawberry, Grape",
      example: "I like bananas. (Muz severim.)"
    },
    {
      key: "eng_nature",
      emoji: "🌸",
      title: "Doğa / Nature",
      description: "Çiçek, Ağaç, Güneş, Yıldız — Flower, Tree, Sun, Star",
      example: "The flower is pretty. (Çiçek güzel.)"
    },
    {
      key: "eng_sizes",
      emoji: "📏",
      title: "Büyüklük / Sizes",
      description: "Büyük, Küçük, Uzun, Kısa — Big, Small, Tall, Short",
      example: "The elephant is big. (Fil büyük.)"
    },
    {
      key: "eng_feelings",
      emoji: "😊",
      title: "Duygular / Feelings",
      description: "Mutlu, Üzgün, Kızgın, Korkmuş — Happy, Sad, Angry, Scared",
      example: "I am happy today. (Bugün mutluyum.)"
    },
    {
      key: "eng_transport",
      emoji: "🚌",
      title: "Taşıtlar / Transport",
      description: "Otobüs, Araba, Uçak, Bisiklet — Bus, Car, Airplane, Bicycle",
      example: "I ride the bus. (Otobüse biniyorum.)"
    }
  ],
  ilkokul: [
    {
      key: "eng_school",
      emoji: "🏫",
      title: "Okul / School",
      description: "Okul, Öğretmen, Kitap, Kalem — School, Teacher, Book, Pencil",
      example: "My teacher is nice. (Öğretmenim güzel.)"
    },
    {
      key: "eng_weather",
      emoji: "☀️",
      title: "Hava / Weather",
      description: "Güneşli, Yağmurlu, Kar — Sunny, Rainy, Snowy, Cloudy",
      example: "Today is sunny. (Bugün güneşli.)"
    },
    {
      key: "eng_days",
      emoji: "🗓️",
      title: "Günler / Days",
      description: "Pazartesi...Pazar — Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
      example: "Today is Monday. (Bugün Pazartesi.)"
    },
    {
      key: "eng_months",
      emoji: "📅",
      title: "Aylar / Months",
      description: "Ocak, Şubat, Mart... — January, February, March, April, May, June",
      example: "My birthday is in May. (Doğum günüm Mayıs'ta.)"
    },
    {
      key: "eng_hobbies",
      emoji: "⚽",
      title: "Hobiler / Hobbies",
      description: "Okumak, Oynamak, Yüzmek — Reading, Playing, Swimming, Drawing",
      example: "I like swimming. (Yüzmeyi severim.)"
    },
    {
      key: "eng_home",
      emoji: "🏠",
      title: "Ev / Home",
      description: "Mutfak, Salon, Banyo, Yatak Odası — Kitchen, Living room, Bathroom, Bedroom",
      example: "I sleep in my bedroom. (Yatak odamda uyurum.)"
    },
    {
      key: "eng_clothes",
      emoji: "👕",
      title: "Giysiler / Clothes",
      description: "Gömlek, Pantolon, Ayakkabı — Shirt, Pants, Shoes, Hat",
      example: "I wear a hat. (Şapka takıyorum.)"
    },
    {
      key: "eng_verbs",
      emoji: "🏋️",
      title: "Eylemler / Verbs",
      description: "Koşmak, Oturmak, Yemek — Run, Sit, Eat, Sleep, Walk",
      example: "I run every day. (Her gün koşuyorum.)"
    },
    {
      key: "eng_adjectives",
      emoji: "✨",
      title: "Sıfatlar / Adjectives",
      description: "Büyük, Küçük, Hızlı, Yaşlı — Big, Small, Fast, Old, New",
      example: "The elephant is big. (Fil büyük.)"
    },
    {
      key: "eng_sports",
      emoji: "🏆",
      title: "Spor / Sports",
      description: "Futbol, Yüzme, Koşu, Tenis — Football, Swimming, Running, Tennis",
      example: "I play football on Saturdays. (Cumartesi günleri futbol oynuyorum.)"
    },
    {
      key: "eng_prepositions",
      emoji: "📍",
      title: "Edatlar / Prepositions",
      description: "Üzerinde, Altında, İçinde, Yanında — On, Under, In, Next to, Behind",
      example: "The book is on the table. (Kitap masanın üzerinde.)"
    },
    {
      key: "eng_time",
      emoji: "⏰",
      title: "Saat / Time",
      description: "Sabah, Öğle, Akşam, Gece — Morning, Noon, Evening, Night",
      example: "I wake up in the morning. (Sabahları uyanırım.)"
    },
    {
      key: "eng_jobs",
      emoji: "👨‍⚕️",
      title: "Meslekler / Jobs",
      description: "Doktor, Öğretmen, Polis, Mühendis — Doctor, Teacher, Police Officer, Engineer",
      example: "My father is a doctor. (Babam doktordur.)"
    },
    {
      key: "eng_places",
      emoji: "🏪",
      title: "Yerler / Places",
      description: "Market, Hastane, Okul, Park — Supermarket, Hospital, School, Park",
      example: "We go to the park on Sundays. (Pazar günleri parka gideriz.)"
    },
    {
      key: "eng_numbers2",
      emoji: "🔢",
      title: "Büyük Sayılar / Big Numbers",
      description: "On, Yirmi, Elli, Yüz — Ten, Twenty, Fifty, Hundred",
      example: "There are twenty students in my class. (Sınıfımda yirmi öğrenci var.)"
    }
  ],
  ortaokul: [
    {
      key: "eng_past",
      emoji: "⏰",
      title: "Geçmiş Zaman / Past Tense",
      description: "Geçmiş zaman '-di/-ti' eki — I played / She went / They saw",
      example: "I went to school yesterday. (Dün okula gittim.)"
    },
    {
      key: "eng_present",
      emoji: "▶️",
      title: "Şimdiki Zaman / Present Tense",
      description: "Süregelen eylemler için kullanılır — I am playing / She is reading",
      example: "She is reading a book. (Kitap okuyor.)"
    },
    {
      key: "eng_future",
      emoji: "🔮",
      title: "Gelecek Zaman / Future Tense",
      description: "Gelecekteki eylemler için 'will' kullanılır — I will go / They will see",
      example: "I will travel next year. (Gelecek yıl seyahat edeceğim.)"
    },
    {
      key: "eng_conditionals",
      emoji: "🤔",
      title: "Koşullu Cümleler / Conditionals",
      description: "'Eğer... olsaydı' anlamında — If I study, I will pass.",
      example: "If it rains, I will stay home. (Yağmur yağarsa evde kalırım.)"
    },
    {
      key: "eng_environment",
      emoji: "🌎",
      title: "Çevre / Environment",
      description: "Çevre, iklim, kirlilik, geri dönüşüm — Pollution, Recycling, Climate, Nature",
      example: "We must protect nature. (Doğayı korumak gerekir.)"
    },
    {
      key: "eng_technology",
      emoji: "💻",
      title: "Teknoloji / Technology",
      description: "Bilgisayar, internet, uygulama — Computer, Internet, Application, Smartphone",
      example: "I use the internet for homework. (Ev ödevi için internet kullanırım.)"
    },
    {
      key: "eng_health",
      emoji: "🏥",
      title: "Sağlık / Health",
      description: "Hasta, Doktor, İlaç, Ameliyat — Sick, Doctor, Medicine, Surgery",
      example: "I see a doctor when I am sick. (Hasta olunca doktora giderim.)"
    },
    {
      key: "eng_compare",
      emoji: "📊",
      title: "Karşılaştırma / Comparisons",
      description: "Daha büyük, en büyük — Bigger, Biggest / More interesting, Most interesting",
      example: "She is taller than me. (O benden uzun.)"
    },
    {
      key: "eng_phrases",
      emoji: "💬",
      title: "Günlük İfadeler / Daily Phrases",
      description: "Özür dilerim, Lütfen, Rica ederim — I'm sorry, Please, You're welcome, Excuse me",
      example: "Excuse me, where is the library? (Affedersiniz, kütüphane nerede?)"
    },
    {
      key: "eng_modal",
      emoji: "🔧",
      title: "Modal Fiiller / Modal Verbs",
      description: "Yapabilmek, Yapmak zorunda, Yapmalı — Can, Must, Should, Would, Could",
      example: "You should study every day. (Her gün çalışmalısın.)"
    },
    {
      key: "eng_question",
      emoji: "❓",
      title: "Soru Kelimeleri / Question Words",
      description: "Kim, Ne, Nerede, Ne zaman, Neden, Nasıl — Who, What, Where, When, Why, How",
      example: "Where do you live? (Nerede yaşıyorsun?)"
    },
    {
      key: "eng_conversation",
      emoji: "🗣️",
      title: "Kısa Diyalog / Short Conversation",
      description: "Tanışma, Alışveriş, Yol Sorma — Nice to meet you. How much is it? Turn left.",
      example: "A: How are you? B: I'm fine, thank you. (Nasılsın? İyiyim, teşekkürler.)"
    },
    {
      key: "eng_passive",
      emoji: "🔄",
      title: "Edilgen Cümle / Passive Voice",
      description: "Yapılmak, Yıkanmak, Yazılmak — is made, was written, will be done",
      example: "This book was written in 1900. (Bu kitap 1900'de yazıldı.)"
    },
    {
      key: "eng_linking",
      emoji: "🔗",
      title: "Bağlaçlar / Linking Words",
      description: "Ve, Ama, Çünkü, Dolayısıyla — And, But, Because, However, Therefore",
      example: "I studied hard, therefore I passed the exam. (Çok çalıştım, bu yüzden sınavı geçtim.)"
    }
  ]
};
const englishDataEn = {
  okul_oncesi: [
    {
      key: "eng_colors",
      emoji: "🌈",
      title: "Colors",
      description: "Learn your first colors: Red, Blue, Yellow, Green, Purple, Orange",
      example: "The apple is red. Point to something blue!"
    },
    {
      key: "eng_numbers",
      emoji: "🔢",
      title: "Numbers",
      description: "Count from one to ten: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
      example: "I have two cats. How many fingers do you have?"
    },
    {
      key: "eng_animals",
      emoji: "🐶",
      title: "Animals",
      description: "Common animals: Dog, Cat, Bird, Fish, Rabbit, Lion, Elephant",
      example: "The dog says 'woof'. The cat says 'meow'."
    },
    {
      key: "eng_family",
      emoji: "👨‍👩‍👧",
      title: "Family",
      description: "Family words: Mother, Father, Brother, Sister, Grandmother, Grandfather",
      example: "My mother is kind. I love my family!"
    },
    {
      key: "eng_food",
      emoji: "🥗",
      title: "Food",
      description: "Yummy foods: Apple, Bread, Milk, Egg, Rice, Soup, Cookie",
      example: "I like apples. What is your favourite food?"
    },
    {
      key: "eng_greetings",
      emoji: "👋",
      title: "Greetings",
      description: "Say hello: Hello, Hi, Good morning, Goodbye, Thank you, Please",
      example: "Hello! How are you? I am fine, thank you!"
    },
    {
      key: "eng_shapes",
      emoji: "🔷",
      title: "Shapes",
      description: "Basic shapes: Circle, Square, Triangle, Rectangle, Star, Heart",
      example: "The sun is a circle. A box is a square."
    },
    {
      key: "eng_body",
      emoji: "👀",
      title: "Body Parts",
      description: "Parts of the body: Eye, Ear, Nose, Hand, Foot, Head, Mouth",
      example: "I have two eyes. Touch your nose!"
    },
    {
      key: "eng_toys",
      emoji: "🧸",
      title: "Toys",
      description: "Favourite toys: Ball, Doll, Car, Kite, Teddy bear, Blocks",
      example: "I play with my ball every day!"
    },
    {
      key: "eng_fruits",
      emoji: "🍓",
      title: "Fruits",
      description: "Colourful fruits: Apple, Banana, Strawberry, Grape, Orange, Mango",
      example: "I like bananas. Bananas are yellow!"
    },
    {
      key: "eng_nature",
      emoji: "🌸",
      title: "Nature",
      description: "Outside world: Flower, Tree, Sun, Star, Moon, River, Mountain",
      example: "The flower is pretty. The sun is bright!"
    },
    {
      key: "eng_sizes",
      emoji: "📏",
      title: "Sizes",
      description: "Describing size: Big, Small, Tall, Short, Long, Tiny, Huge",
      example: "The elephant is big. The mouse is small."
    },
    {
      key: "eng_feelings",
      emoji: "😊",
      title: "Feelings",
      description: "How do you feel? Happy, Sad, Angry, Scared, Excited, Tired",
      example: "I am happy today! Are you happy too?"
    },
    {
      key: "eng_transport",
      emoji: "🚌",
      title: "Transport",
      description: "Ways to travel: Bus, Car, Airplane, Bicycle, Train, Boat",
      example: "I ride the bus to school every day."
    }
  ],
  ilkokul: [
    {
      key: "eng_school",
      emoji: "🏫",
      title: "School",
      description: "At school you find: Teacher, Book, Pencil, Desk, Classroom, Homework",
      example: "My teacher is nice. I love going to school!"
    },
    {
      key: "eng_weather",
      emoji: "☀️",
      title: "Weather",
      description: "Describe the weather: Sunny, Rainy, Snowy, Cloudy, Windy, Foggy",
      example: "Today is sunny. Yesterday it was rainy."
    },
    {
      key: "eng_days",
      emoji: "🗓️",
      title: "Days of the Week",
      description: "Seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
      example: "Today is Monday. School starts on Monday."
    },
    {
      key: "eng_months",
      emoji: "📅",
      title: "Months",
      description: "Twelve months: January, February, March, April, May, June, July, August...",
      example: "My birthday is in May. What month is yours?"
    },
    {
      key: "eng_hobbies",
      emoji: "⚽",
      title: "Hobbies",
      description: "Fun activities: Reading, Playing, Swimming, Drawing, Singing, Dancing",
      example: "I like swimming in summer. I love drawing too!"
    },
    {
      key: "eng_home",
      emoji: "🏠",
      title: "At Home",
      description: "Rooms at home: Kitchen, Living room, Bathroom, Bedroom, Garden, Hallway",
      example: "I sleep in my bedroom. We cook in the kitchen."
    },
    {
      key: "eng_clothes",
      emoji: "👕",
      title: "Clothes",
      description: "What to wear: Shirt, Pants, Shoes, Hat, Dress, Jacket, Socks",
      example: "I wear a hat in the sun. I wear a jacket in winter."
    },
    {
      key: "eng_verbs",
      emoji: "🏋️",
      title: "Action Verbs",
      description: "Action words: Run, Sit, Eat, Sleep, Walk, Jump, Read, Write, Swim",
      example: "I run every day. She reads before bed."
    },
    {
      key: "eng_adjectives",
      emoji: "✨",
      title: "Adjectives",
      description: "Describing words: Big, Small, Fast, Old, New, Beautiful, Funny, Brave",
      example: "The elephant is big. My dog is funny!"
    },
    {
      key: "eng_sports",
      emoji: "🏆",
      title: "Sports",
      description: "Popular sports: Football, Swimming, Running, Tennis, Basketball, Volleyball",
      example: "I play football on Saturdays. I love basketball too!"
    },
    {
      key: "eng_prepositions",
      emoji: "📍",
      title: "Prepositions",
      description: "Position words: On, Under, In, Next to, Behind, In front of, Between",
      example: "The book is on the table. The cat is under the chair."
    },
    {
      key: "eng_time",
      emoji: "⏰",
      title: "Time",
      description: "Parts of the day: Morning, Noon, Afternoon, Evening, Night, Midnight",
      example: "I wake up in the morning. I go to bed at night."
    },
    {
      key: "eng_jobs",
      emoji: "👨‍⚕️",
      title: "Jobs",
      description: "Different jobs: Doctor, Teacher, Police Officer, Engineer, Farmer, Chef",
      example: "My father is a doctor. My mother is a teacher."
    },
    {
      key: "eng_places",
      emoji: "🏪",
      title: "Places",
      description: "Places in a city: Supermarket, Hospital, School, Park, Library, Museum",
      example: "We go to the park on Sundays. The library has many books."
    },
    {
      key: "eng_numbers2",
      emoji: "🔢",
      title: "Big Numbers",
      description: "Count higher: Ten, Twenty, Fifty, Hundred, Thousand, Million",
      example: "There are twenty students in my class."
    }
  ],
  ortaokul: [
    {
      key: "eng_past",
      emoji: "⏰",
      title: "Past Tense",
      description: "Talk about the past: I played, She went, They saw, We ate, He ran",
      example: "I went to school yesterday. She played tennis last week."
    },
    {
      key: "eng_present",
      emoji: "▶️",
      title: "Present Continuous",
      description: "Actions happening now: I am playing, She is reading, They are eating",
      example: "She is reading a book right now. We are studying."
    },
    {
      key: "eng_future",
      emoji: "🔮",
      title: "Future Tense",
      description: "Talk about future with 'will': I will go, They will see, She will come",
      example: "I will travel next year. They will visit us tomorrow."
    },
    {
      key: "eng_conditionals",
      emoji: "🤔",
      title: "Conditionals",
      description: "If/then sentences: If I study, I will pass. If it rains, we stay inside.",
      example: "If it rains, I will stay home. If you try, you will succeed!"
    },
    {
      key: "eng_environment",
      emoji: "🌎",
      title: "Environment",
      description: "Our planet: Pollution, Recycling, Climate Change, Nature, Ecosystem",
      example: "We must protect nature. Recycle to save the Earth!"
    },
    {
      key: "eng_technology",
      emoji: "💻",
      title: "Technology",
      description: "Tech words: Computer, Internet, Application, Smartphone, Software, Robot",
      example: "I use the internet for homework. Technology helps us learn."
    },
    {
      key: "eng_health",
      emoji: "🏥",
      title: "Health",
      description: "Staying healthy: Sick, Doctor, Medicine, Surgery, Exercise, Nutrition",
      example: "I see a doctor when I am sick. Exercise keeps you healthy."
    },
    {
      key: "eng_compare",
      emoji: "📊",
      title: "Comparisons",
      description: "Compare things: Bigger/Biggest, Faster/Fastest, More interesting/Most interesting",
      example: "She is taller than me. This is the most interesting book."
    },
    {
      key: "eng_phrases",
      emoji: "💬",
      title: "Daily Phrases",
      description: "Polite phrases: I'm sorry, Please, You're welcome, Excuse me, Could you help me?",
      example: "Excuse me, where is the library? I'm sorry for being late."
    },
    {
      key: "eng_modal",
      emoji: "🔧",
      title: "Modal Verbs",
      description: "Modals for ability/obligation: Can, Must, Should, Would, Could, Might, May",
      example: "You should study every day. You can do it!"
    },
    {
      key: "eng_question",
      emoji: "❓",
      title: "Question Words",
      description: "Ask questions with: Who, What, Where, When, Why, How, Which, Whose",
      example: "Where do you live? Why are you late? How was your day?"
    },
    {
      key: "eng_conversation",
      emoji: "🗣️",
      title: "Short Conversations",
      description: "Real dialogues: Introducing yourself, Shopping, Asking directions, Making plans",
      example: "A: How are you? B: I'm fine, thank you. Nice to meet you!"
    },
    {
      key: "eng_passive",
      emoji: "🔄",
      title: "Passive Voice",
      description: "Passive form: is made, was written, will be done, has been built",
      example: "This book was written in 1900. The bridge was built last year."
    },
    {
      key: "eng_linking",
      emoji: "🔗",
      title: "Linking Words",
      description: "Connect ideas: And, But, Because, However, Therefore, Although, Moreover",
      example: "I studied hard, therefore I passed. I was tired, but I finished."
    }
  ]
};
const englishDataEs = {
  okul_oncesi: [
    {
      key: "eng_colors",
      emoji: "🌈",
      title: "Los Colores / Colors",
      description: "Aprende tus primeros colores en inglés: Red (rojo), Blue (azul), Yellow (amarillo), Green (verde)",
      example: "The apple is red. ¡Señala algo azul!"
    },
    {
      key: "eng_numbers",
      emoji: "🔢",
      title: "Los Números / Numbers",
      description: "Cuenta del uno al diez en inglés: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
      example: "I have two cats. ¿Cuántos dedos tienes?"
    },
    {
      key: "eng_animals",
      emoji: "🐶",
      title: "Los Animales / Animals",
      description: "Animales en inglés: Dog (perro), Cat (gato), Bird (pájaro), Fish (pez), Rabbit (conejo)",
      example: "The dog says 'woof'. ¿Qué dice el gato?"
    },
    {
      key: "eng_family",
      emoji: "👨‍👩‍👧",
      title: "La Familia / Family",
      description: "Palabras de familia en inglés: Mother (mamá), Father (papá), Brother (hermano), Sister (hermana)",
      example: "My mother is kind. ¡Amo a mi familia!"
    },
    {
      key: "eng_food",
      emoji: "🥗",
      title: "La Comida / Food",
      description: "Comidas en inglés: Apple (manzana), Bread (pan), Milk (leche), Egg (huevo), Rice (arroz)",
      example: "I like apples. ¿Cuál es tu comida favorita?"
    },
    {
      key: "eng_greetings",
      emoji: "👋",
      title: "Los Saludos / Greetings",
      description: "Saludar en inglés: Hello (hola), Good morning (buenos días), Goodbye (adiós), Thank you (gracias)",
      example: "Hello! How are you? I am fine, thank you!"
    },
    {
      key: "eng_shapes",
      emoji: "🔷",
      title: "Las Figuras / Shapes",
      description: "Figuras geométricas en inglés: Circle (círculo), Square (cuadrado), Triangle (triángulo), Star (estrella)",
      example: "The sun is a circle. ¡Una caja es un cuadrado!"
    },
    {
      key: "eng_body",
      emoji: "👀",
      title: "El Cuerpo / Body Parts",
      description: "Partes del cuerpo en inglés: Eye (ojo), Ear (oreja), Nose (nariz), Hand (mano), Foot (pie)",
      example: "I have two eyes. ¡Toca tu nariz!"
    },
    {
      key: "eng_toys",
      emoji: "🧸",
      title: "Los Juguetes / Toys",
      description: "Juguetes en inglés: Ball (pelota), Doll (muñeca), Car (coche), Kite (cometa), Teddy bear (osito)",
      example: "I play with my ball every day!"
    },
    {
      key: "eng_fruits",
      emoji: "🍓",
      title: "Las Frutas / Fruits",
      description: "Frutas en inglés: Apple (manzana), Banana (plátano), Strawberry (fresa), Grape (uva), Orange (naranja)",
      example: "I like bananas. ¡Los plátanos son amarillos!"
    },
    {
      key: "eng_nature",
      emoji: "🌸",
      title: "La Naturaleza / Nature",
      description: "La naturaleza en inglés: Flower (flor), Tree (árbol), Sun (sol), Star (estrella), Moon (luna)",
      example: "The flower is pretty. ¡El sol brilla!"
    },
    {
      key: "eng_sizes",
      emoji: "📏",
      title: "Los Tamaños / Sizes",
      description: "Describir tamaños en inglés: Big (grande), Small (pequeño), Tall (alto), Short (bajo), Long (largo)",
      example: "The elephant is big. The mouse is small."
    },
    {
      key: "eng_feelings",
      emoji: "😊",
      title: "Los Sentimientos / Feelings",
      description: "¿Cómo te sientes? Happy (feliz), Sad (triste), Angry (enojado), Scared (asustado), Excited (emocionado)",
      example: "I am happy today! ¿Estás feliz tú también?"
    },
    {
      key: "eng_transport",
      emoji: "🚌",
      title: "El Transporte / Transport",
      description: "Medios de transporte en inglés: Bus (autobús), Car (coche), Airplane (avión), Bicycle (bicicleta), Train (tren)",
      example: "I ride the bus to school every day."
    }
  ],
  ilkokul: [
    {
      key: "eng_school",
      emoji: "🏫",
      title: "La Escuela / School",
      description: "En la escuela encontrarás: Teacher (maestro), Book (libro), Pencil (lápiz), Desk (escritorio), Classroom (aula)",
      example: "My teacher is nice. ¡Amo ir a la escuela!"
    },
    {
      key: "eng_weather",
      emoji: "☀️",
      title: "El Tiempo / Weather",
      description: "Describir el tiempo en inglés: Sunny (soleado), Rainy (lluvioso), Snowy (nevado), Cloudy (nublado), Windy (ventoso)",
      example: "Today is sunny. Yesterday it was rainy."
    },
    {
      key: "eng_days",
      emoji: "🗓️",
      title: "Los Días / Days of the Week",
      description: "Los siete días en inglés: Monday (lunes), Tuesday (martes), Wednesday (miércoles), Thursday (jueves), Friday (viernes)",
      example: "Today is Monday. School starts on Monday."
    },
    {
      key: "eng_months",
      emoji: "📅",
      title: "Los Meses / Months",
      description: "Los doce meses en inglés: January (enero), February (febrero), March (marzo), April (abril), May (mayo), June (junio)",
      example: "My birthday is in May. ¿En qué mes es el tuyo?"
    },
    {
      key: "eng_hobbies",
      emoji: "⚽",
      title: "Los Pasatiempos / Hobbies",
      description: "Actividades divertidas en inglés: Reading (leer), Playing (jugar), Swimming (nadar), Drawing (dibujar), Singing (cantar)",
      example: "I like swimming in summer. I love drawing too!"
    },
    {
      key: "eng_home",
      emoji: "🏠",
      title: "En Casa / At Home",
      description: "Habitaciones de la casa en inglés: Kitchen (cocina), Living room (sala), Bathroom (baño), Bedroom (dormitorio)",
      example: "I sleep in my bedroom. We cook in the kitchen."
    },
    {
      key: "eng_clothes",
      emoji: "👕",
      title: "La Ropa / Clothes",
      description: "Prendas de vestir en inglés: Shirt (camisa), Pants (pantalón), Shoes (zapatos), Hat (sombrero), Jacket (chaqueta)",
      example: "I wear a hat in the sun. I wear a jacket in winter."
    },
    {
      key: "eng_verbs",
      emoji: "🏋️",
      title: "Los Verbos / Action Verbs",
      description: "Verbos de acción en inglés: Run (correr), Sit (sentarse), Eat (comer), Sleep (dormir), Walk (caminar), Jump (saltar)",
      example: "I run every day. She reads before bed."
    },
    {
      key: "eng_adjectives",
      emoji: "✨",
      title: "Los Adjetivos / Adjectives",
      description: "Palabras descriptivas en inglés: Big (grande), Small (pequeño), Fast (rápido), Old (viejo), New (nuevo), Beautiful (hermoso)",
      example: "The elephant is big. My dog is funny!"
    },
    {
      key: "eng_sports",
      emoji: "🏆",
      title: "Los Deportes / Sports",
      description: "Deportes populares en inglés: Football (fútbol), Swimming (natación), Running (carrera), Tennis (tenis), Basketball (baloncesto)",
      example: "I play football on Saturdays. I love basketball too!"
    },
    {
      key: "eng_prepositions",
      emoji: "📍",
      title: "Las Preposiciones / Prepositions",
      description: "Palabras de posición en inglés: On (sobre), Under (debajo), In (dentro), Next to (al lado de), Behind (detrás)",
      example: "The book is on the table. The cat is under the chair."
    },
    {
      key: "eng_time",
      emoji: "⏰",
      title: "El Tiempo / Time of Day",
      description: "Partes del día en inglés: Morning (mañana), Noon (mediodía), Afternoon (tarde), Evening (noche), Night (noche)",
      example: "I wake up in the morning. I go to bed at night."
    },
    {
      key: "eng_jobs",
      emoji: "👨‍⚕️",
      title: "Los Trabajos / Jobs",
      description: "Profesiones en inglés: Doctor (médico), Teacher (maestro), Police Officer (policía), Engineer (ingeniero), Farmer (agricultor)",
      example: "My father is a doctor. My mother is a teacher."
    },
    {
      key: "eng_places",
      emoji: "🏪",
      title: "Los Lugares / Places",
      description: "Lugares en la ciudad en inglés: Supermarket (supermercado), Hospital (hospital), School (escuela), Park (parque), Library (biblioteca)",
      example: "We go to the park on Sundays. The library has many books."
    },
    {
      key: "eng_numbers2",
      emoji: "🔢",
      title: "Números Grandes / Big Numbers",
      description: "Cuenta más alto en inglés: Ten (diez), Twenty (veinte), Fifty (cincuenta), Hundred (cien), Thousand (mil), Million (millón)",
      example: "There are twenty students in my class."
    }
  ],
  ortaokul: [
    {
      key: "eng_past",
      emoji: "⏰",
      title: "Pasado Simple / Past Tense",
      description: "Habla del pasado en inglés: I played (jugué), She went (ella fue), They saw (ellos vieron), We ate (comimos)",
      example: "I went to school yesterday. She played tennis last week."
    },
    {
      key: "eng_present",
      emoji: "▶️",
      title: "Presente Continuo / Present Continuous",
      description: "Acciones que ocurren ahora en inglés: I am playing (estoy jugando), She is reading (ella está leyendo)",
      example: "She is reading a book right now. We are studying."
    },
    {
      key: "eng_future",
      emoji: "🔮",
      title: "Futuro / Future Tense",
      description: "Habla del futuro con 'will' en inglés: I will go (iré), They will see (verán), She will come (vendrá)",
      example: "I will travel next year. They will visit us tomorrow."
    },
    {
      key: "eng_conditionals",
      emoji: "🤔",
      title: "Condicionales / Conditionals",
      description: "Oraciones con 'si' en inglés: If I study, I will pass. If it rains, we stay inside.",
      example: "If it rains, I will stay home. If you try, you will succeed!"
    },
    {
      key: "eng_environment",
      emoji: "🌎",
      title: "El Medio Ambiente / Environment",
      description: "Vocabulario ambiental en inglés: Pollution (contaminación), Recycling (reciclaje), Climate Change (cambio climático)",
      example: "We must protect nature. Recycle to save the Earth!"
    },
    {
      key: "eng_technology",
      emoji: "💻",
      title: "La Tecnología / Technology",
      description: "Términos tecnológicos en inglés: Computer (computadora), Internet, Application (aplicación), Smartphone, Software, Robot",
      example: "I use the internet for homework. Technology helps us learn."
    },
    {
      key: "eng_health",
      emoji: "🏥",
      title: "La Salud / Health",
      description: "Vocabulario de salud en inglés: Sick (enfermo), Doctor (médico), Medicine (medicina), Surgery (cirugía), Exercise (ejercicio)",
      example: "I see a doctor when I am sick. Exercise keeps you healthy."
    },
    {
      key: "eng_compare",
      emoji: "📊",
      title: "Comparaciones / Comparisons",
      description: "Comparar en inglés: Bigger/Biggest (más grande/el más grande), Faster/Fastest (más rápido), More interesting/Most interesting",
      example: "She is taller than me. This is the most interesting book."
    },
    {
      key: "eng_phrases",
      emoji: "💬",
      title: "Frases Cotidianas / Daily Phrases",
      description: "Frases de cortesía en inglés: I'm sorry (lo siento), Please (por favor), You're welcome (de nada), Excuse me (con permiso)",
      example: "Excuse me, where is the library? I'm sorry for being late."
    },
    {
      key: "eng_modal",
      emoji: "🔧",
      title: "Verbos Modales / Modal Verbs",
      description: "Modales en inglés: Can (poder), Must (deber), Should (debería), Would (condicional), Could (podría), May (puede que)",
      example: "You should study every day. You can do it!"
    },
    {
      key: "eng_question",
      emoji: "❓",
      title: "Palabras Interrogativas / Question Words",
      description: "Hacer preguntas en inglés: Who (quién), What (qué), Where (dónde), When (cuándo), Why (por qué), How (cómo)",
      example: "Where do you live? Why are you late? How was your day?"
    },
    {
      key: "eng_conversation",
      emoji: "🗣️",
      title: "Conversaciones Cortas / Short Conversations",
      description: "Diálogos reales en inglés: Presentarse, Ir de compras, Pedir direcciones, Hacer planes",
      example: "A: How are you? B: I'm fine, thank you. Nice to meet you!"
    },
    {
      key: "eng_passive",
      emoji: "🔄",
      title: "Voz Pasiva / Passive Voice",
      description: "La forma pasiva en inglés: is made (es hecho), was written (fue escrito), will be done (será hecho)",
      example: "This book was written in 1900. The bridge was built last year."
    },
    {
      key: "eng_linking",
      emoji: "🔗",
      title: "Conectores / Linking Words",
      description: "Conectar ideas en inglés: And (y), But (pero), Because (porque), However (sin embargo), Therefore (por lo tanto)",
      example: "I studied hard, therefore I passed. I was tired, but I finished."
    }
  ]
};
const englishDataFr = {
  okul_oncesi: [
    {
      key: "eng_colors",
      emoji: "🌈",
      title: "Les Couleurs / Colors",
      description: "Apprends tes premières couleurs en anglais : Red (rouge), Blue (bleu), Yellow (jaune), Green (vert)",
      example: "The apple is red. Montre quelque chose de bleu !"
    },
    {
      key: "eng_numbers",
      emoji: "🔢",
      title: "Les Chiffres / Numbers",
      description: "Compte de un à dix en anglais : One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
      example: "I have two cats. Combien de doigts as-tu ?"
    },
    {
      key: "eng_animals",
      emoji: "🐶",
      title: "Les Animaux / Animals",
      description: "Animaux en anglais : Dog (chien), Cat (chat), Bird (oiseau), Fish (poisson), Rabbit (lapin)",
      example: "The dog says 'woof'. Que dit le chat ?"
    },
    {
      key: "eng_family",
      emoji: "👨‍👩‍👧",
      title: "La Famille / Family",
      description: "Mots de famille en anglais : Mother (maman), Father (papa), Brother (frère), Sister (sœur)",
      example: "My mother is kind. J'aime ma famille !"
    },
    {
      key: "eng_food",
      emoji: "🥗",
      title: "La Nourriture / Food",
      description: "Aliments en anglais : Apple (pomme), Bread (pain), Milk (lait), Egg (œuf), Rice (riz)",
      example: "I like apples. Quelle est ta nourriture préférée ?"
    },
    {
      key: "eng_greetings",
      emoji: "👋",
      title: "Les Salutations / Greetings",
      description: "Saluer en anglais : Hello (bonjour), Good morning (bonjour matin), Goodbye (au revoir), Thank you (merci)",
      example: "Hello! How are you? I am fine, thank you!"
    }
  ],
  ilkokul: [
    {
      key: "eng_school",
      emoji: "🏫",
      title: "L'École / School",
      description: "Mots scolaires en anglais : Teacher (professeur), Book (livre), Pencil (crayon), Desk (bureau), Classroom (salle de classe)",
      example: "The teacher is kind. Open your book, please."
    },
    {
      key: "eng_weather",
      emoji: "☀️",
      title: "La Météo / Weather",
      description: "Météo en anglais : Sunny (ensoleillé), Rainy (pluvieux), Cloudy (nuageux), Windy (venteux), Snowy (neigeux)",
      example: "It is sunny today. What is the weather like?"
    },
    {
      key: "eng_body",
      emoji: "🧍",
      title: "Le Corps / Body",
      description: "Parties du corps en anglais : Head (tête), Eyes (yeux), Nose (nez), Mouth (bouche), Hands (mains), Feet (pieds)",
      example: "Touch your nose! Show me your hands."
    },
    {
      key: "eng_colors_adv",
      emoji: "🎨",
      title: "Les Adjectifs / Adjectives",
      description: "Adjectifs courants en anglais : Big (grand), Small (petit), Fast (rapide), Slow (lent), Happy (heureux), Sad (triste)",
      example: "The elephant is big. The mouse is small."
    },
    {
      key: "eng_days",
      emoji: "📅",
      title: "Les Jours / Days",
      description: "Jours de la semaine en anglais : Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
      example: "Today is Monday. School starts on Monday."
    },
    {
      key: "eng_time",
      emoji: "⏰",
      title: "L'Heure / Time",
      description: "Dire l'heure en anglais : What time is it? It is three o'clock. Half past two. Quarter to five.",
      example: "What time do you wake up? I wake up at seven o'clock."
    }
  ],
  ortaokul: [
    {
      key: "eng_grammar_tenses",
      emoji: "📖",
      title: "Les Temps Verbaux / Verb Tenses",
      description: "Temps principaux en anglais : Present Simple (habitudes), Past Simple (passé), Future with 'will' (futur)",
      example: "I study every day. I studied yesterday. I will study tomorrow."
    },
    {
      key: "eng_conditionals",
      emoji: "🔀",
      title: "Les Conditionnels / Conditionals",
      description: "Phrases conditionnelles en anglais : If + present → future (conditionnel réel), If + past → would (conditionnel hypothétique)",
      example: "If it rains, I will stay home. If I had money, I would travel."
    },
    {
      key: "eng_passive",
      emoji: "🔄",
      title: "La Voix Passive / Passive Voice",
      description: "La voix passive en anglais : Subject + to be + past participle. Utilisée quand l'agent n'est pas important.",
      example: "The book was written by Shakespeare. The cake is eaten."
    },
    {
      key: "eng_modal",
      emoji: "🎭",
      title: "Les Modaux / Modal Verbs",
      description: "Verbes modaux en anglais : Can (pouvoir), Must (devoir), Should (devrais), May (peut-être), Would (conditionnel)",
      example: "You should study more. She can speak French. You must not smoke."
    },
    {
      key: "eng_essay",
      emoji: "✍️",
      title: "Rédaction / Essay Writing",
      description: "Structure d'une rédaction en anglais : Introduction, Body paragraphs (arguments), Conclusion.",
      example: "First, ... Furthermore, ... In conclusion, ... Therefore, ..."
    },
    {
      key: "eng_conjunctions",
      emoji: "🔗",
      title: "Les Conjonctions / Conjunctions",
      description: "Conjonctions de coordination et subordination : And, But, Or, So, Because, Although, However, Therefore",
      example: "I studied hard, therefore I passed. I was tired, but I finished."
    }
  ]
};
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
function EnglishPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const profile = getCurrentUser();
  const englishData = isFr ? englishDataFr : isEs ? englishDataEs : isEn ? englishDataEn : englishDataTr;
  const levelTabs = isFr ? levelTabsFr : isEs ? levelTabsEs : isEn ? levelTabsEn : levelTabsTr;
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
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()) || p.example.toLowerCase().includes(searchTerm.toLowerCase())
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
          isFr ? "Retour" : isEs ? "Atrás" : isEn ? "Back" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🇬🇧",
      " ",
      isFr ? "Anglais de Base" : isEs ? "Inglés Básico" : isEn ? "Basic English" : "Temel İngilizce"
    ] }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: isFr ? "Aucun résultat trouvé 🔍" : isEs ? "No se encontraron resultados 🔍" : isEn ? "No results found 🔍" : "Sonuç bulunamadı 🔍" }) : filtered.map((item) => {
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-bold text-sm leading-relaxed mb-3", children: item.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-sm leading-relaxed mb-4 italic", children: [
              '💬 "',
              item.example,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => handleSpeak(item.key, item.example),
                className: "bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2",
                children: speakingId === item.key ? isFr ? "⏹ Arrêter" : isEs ? "⏹ Parar" : isEn ? "⏹ Stop" : "⏹ Durdur" : isFr ? "🔊 Écouter (EN)" : isEs ? "🔊 Escuchar (EN)" : isEn ? "🔊 Listen (EN)" : "🔊 Dinle (EN)"
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
                  " +10",
                  " ",
                  isFr ? "pts" : isEs ? "pts" : isEn ? "pts" : "puan"
                ]
              }
            ),
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-300 text-xs font-bold", children: [
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
  EnglishPage as default
};
