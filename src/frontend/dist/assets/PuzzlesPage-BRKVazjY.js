import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, B as Button, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-CcOZ68mj.js";
const puzzlesEn = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "What color is the sun?",
      emoji: "☀️",
      choices: ["Blue", "Red", "Yellow", "Green"],
      correct: 2
    },
    {
      key: "puzzle_hayvan_1",
      question: "Which one can fly?",
      emoji: "🐦",
      choices: ["Cat", "Bird", "Fish", "Dog"],
      correct: 1
    },
    {
      key: "puzzle_sayi_1",
      question: "What is 2 + 3?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2
    },
    {
      key: "puzzle_meyve_1",
      question: "Which one is NOT a fruit?",
      emoji: "🍎",
      choices: ["Apple", "Banana", "Carrot", "Grape"],
      correct: 2
    },
    {
      key: "puzzle_sekil_1",
      question: "What shape does a wheel look like?",
      emoji: "⭕",
      choices: ["Square", "Circle", "Triangle", "Rectangle"],
      correct: 1
    },
    {
      key: "puzzle_renk_2",
      question: "What color is the sky?",
      emoji: "🌤️",
      choices: ["Green", "Blue", "Yellow", "Red"],
      correct: 1
    },
    {
      key: "puzzle_hayvan_2",
      question: "Which animal lays eggs?",
      emoji: "🐔",
      choices: ["Cat", "Dog", "Chicken", "Horse"],
      correct: 2
    },
    {
      key: "puzzle_sayi_2",
      question: "What is 10 - 4?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      key: "puzzle_sekil_2",
      question: "Which shape has three sides?",
      emoji: "🔺",
      choices: ["Square", "Circle", "Triangle", "Rectangle"],
      correct: 2
    },
    {
      key: "puzzle_meyve_2",
      question: "Which fruit is yellow?",
      emoji: "🍌",
      choices: ["Apple", "Strawberry", "Banana", "Grape"],
      correct: 2
    },
    {
      key: "puzzle_hayvan_3",
      question: "Which animal lives in the sea?",
      emoji: "🐟",
      choices: ["Cat", "Fish", "Bird", "Dog"],
      correct: 1
    },
    {
      key: "puzzle_renk_3",
      question: "What color is an apple usually?",
      emoji: "🍎",
      choices: ["Blue", "Yellow", "Purple", "Red"],
      correct: 3
    },
    {
      key: "puzzle_sayi_3",
      question: "What is 1 + 1?",
      emoji: "✌️",
      choices: ["3", "1", "2", "4"],
      correct: 2
    },
    {
      key: "puzzle_t9_o1",
      question: "I rise every morning and set every evening. What am I?",
      emoji: "☀️",
      choices: ["Moon", "Sun", "Star", "Cloud"],
      correct: 1
    },
    {
      key: "puzzle_t9_o2",
      question: "I have teeth but cannot bite. What am I?",
      emoji: "⚙️",
      choices: ["Saw", "Comb", "Fork", "Spoon"],
      correct: 1
    },
    {
      key: "puzzle_t9_o3",
      question: "I carry my house on my back. What am I?",
      emoji: "🐌",
      choices: ["Turtle", "Snail", "Crab", "Lobster"],
      correct: 1
    },
    {
      key: "puzzle_t9_o4",
      question: "I run but have no legs. What am I?",
      emoji: "⏰",
      choices: ["Wind", "Time", "River", "Light"],
      correct: 1
    },
    {
      key: "puzzle_t9_o5",
      question: "How many seasons are there?",
      emoji: "🍂",
      choices: ["2", "3", "4", "5"],
      correct: 2
    },
    {
      key: "puzzle_t9_o6",
      question: "1, 3, 5, 7, ... What comes next?",
      emoji: "🔢",
      choices: ["8", "9", "10", "11"],
      correct: 1
    },
    {
      key: "puzzle_oo_new1",
      question: "I come after sunset and bring the stars. What am I?",
      emoji: "🌙",
      choices: ["Morning", "Night", "Noon", "Evening"],
      correct: 3
    },
    {
      key: "puzzle_oo_new2",
      question: "I have four legs but cannot walk. What am I?",
      emoji: "🪑",
      choices: ["Dog", "Table", "Horse", "Chair"],
      correct: 3
    },
    {
      key: "puzzle_oo_new3",
      question: "I am white and drunk every morning. What am I?",
      emoji: "🥛",
      choices: ["Water", "Milk", "Tea", "Juice"],
      correct: 1
    },
    {
      key: "puzzle_oo_new4",
      question: "I fly in the air, I have wings. I love flowers. What am I?",
      emoji: "🦋",
      choices: ["Bird", "Bee", "Butterfly", "Fly"],
      correct: 2
    },
    {
      key: "puzzle_oo_new5",
      question: "What white thing falls in winter?",
      emoji: "❄️",
      choices: ["Rain", "Snow", "Hail", "Fog"],
      correct: 1
    },
    {
      key: "puzzle_oo_new6",
      question: "Which animal has horns?",
      emoji: "🐂",
      choices: ["Cat", "Dog", "Cow", "Chicken"],
      correct: 2
    }
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "What is 7 × 8?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1
    },
    {
      key: "puzzle_cografi_1",
      question: "What is the capital of Turkey?",
      emoji: "🏛️",
      choices: ["Istanbul", "Izmir", "Ankara", "Bursa"],
      correct: 2
    },
    {
      key: "puzzle_mantik_1",
      question: "How many days are in a week?",
      emoji: "📅",
      choices: ["5", "6", "8", "7"],
      correct: 3
    },
    {
      key: "puzzle_bilim_1",
      question: "What do plants use sunlight for?",
      emoji: "🌿",
      choices: ["Breathing", "Growing", "Photosynthesis", "Sleeping"],
      correct: 2
    },
    {
      key: "puzzle_dilbilgisi_1",
      question: "What type of word is 'run'?",
      emoji: "📝",
      choices: ["Noun", "Adjective", "Adverb", "Verb"],
      correct: 3
    },
    {
      key: "puzzle_matematik_2",
      question: "What is 9 × 6?",
      emoji: "🔢",
      choices: ["54", "48", "56", "63"],
      correct: 0
    },
    {
      key: "puzzle_matematik_3",
      question: "What is 48 ÷ 6?",
      emoji: "➗",
      choices: ["7", "8", "9", "6"],
      correct: 1
    },
    {
      key: "puzzle_cografi_2",
      question: "What is the longest river in Turkey?",
      emoji: "🏞️",
      choices: ["Sakarya", "Kızılırmak", "Euphrates", "Tigris"],
      correct: 1
    },
    {
      key: "puzzle_bilim_2",
      question: "Which planet is closest to the Sun?",
      emoji: "🪐",
      choices: ["Venus", "Mars", "Mercury", "Earth"],
      correct: 2
    },
    {
      key: "puzzle_dilbilgisi_2",
      question: "What does the subject of a sentence do?",
      emoji: "📝",
      choices: [
        "Performs the action",
        "Describes quality",
        "Shows location",
        "Defines the object"
      ],
      correct: 0
    },
    {
      key: "puzzle_matematik_4",
      question: "What is half of 125?",
      emoji: "🔢",
      choices: ["60", "62", "62.5", "65"],
      correct: 2
    },
    {
      key: "puzzle_bilim_3",
      question: "How many bones does the human body have?",
      emoji: "🦴",
      choices: ["186", "206", "226", "246"],
      correct: 1
    },
    {
      key: "puzzle_cografi_3",
      question: "What is the highest mountain in the world?",
      emoji: "⛰️",
      choices: ["K2", "Everest", "Kilimanjaro", "Elbrus"],
      correct: 1
    },
    {
      key: "puzzle_t9_i1",
      question: "A farmer has 17 sheep. All but one run away. How many are left?",
      emoji: "🐑",
      choices: ["0", "1", "16", "17"],
      correct: 1
    },
    {
      key: "puzzle_t9_i2",
      question: "What is the driver of a train called?",
      emoji: "🚂",
      choices: ["Driver", "Captain", "Engineer/Conductor", "Pilot"],
      correct: 2
    },
    {
      key: "puzzle_t9_i3",
      question: "What is the largest lake in Turkey?",
      emoji: "🌊",
      choices: ["Salt Lake", "Lake Van", "Eğirdir Lake", "Burdur Lake"],
      correct: 1
    },
    {
      key: "puzzle_t9_i4",
      question: "If 3 cats catch 3 mice in 3 minutes, how long for 100 cats to catch 100 mice?",
      emoji: "🐱",
      choices: ["100", "33", "3", "300"],
      correct: 2
    },
    {
      key: "puzzle_t9_i5",
      question: "How many letters are in the Turkish alphabet?",
      emoji: "🔤",
      choices: ["26", "28", "29", "31"],
      correct: 2
    },
    {
      key: "puzzle_t9_i6",
      question: "Which number is both even and prime?",
      emoji: "🔢",
      choices: ["1", "2", "4", "6"],
      correct: 1
    },
    {
      key: "puzzle_il_new1",
      question: "The more you take, the more you leave behind. What am I?",
      emoji: "🕳️",
      choices: ["Earth", "Hole", "Stone", "Water"],
      correct: 1
    },
    {
      key: "puzzle_il_new2",
      question: "I have a voice but no tongue. What am I?",
      emoji: "🥁",
      choices: ["Sea", "Bell", "Drum", "Canal"],
      correct: 2
    },
    {
      key: "puzzle_il_new3",
      question: "Which month has 28 or 29 days?",
      emoji: "📅",
      choices: ["January", "February", "March", "April"],
      correct: 1
    },
    {
      key: "puzzle_il_new4",
      question: "The more you share it, the less you have. What am I?",
      emoji: "🤫",
      choices: ["Secret", "Dream", "Wish", "Knowledge"],
      correct: 0
    },
    {
      key: "puzzle_matematik_ilk_new1",
      question: "What is 12 × 12?",
      emoji: "🔢",
      choices: ["132", "144", "156", "124"],
      correct: 1
    },
    {
      key: "puzzle_tarih_ilk_new1",
      question: "When is Republic Day celebrated in Turkey?",
      emoji: "🎉",
      choices: ["April 23", "May 19", "October 29", "August 30"],
      correct: 2
    },
    {
      key: "puzzle_bilim_ilk_new1",
      question: "How many planets are in the solar system?",
      emoji: "🪐",
      choices: ["7", "8", "9", "10"],
      correct: 1
    }
  ],
  ortaokul: [
    {
      key: "puzzle_fizik_1",
      question: "What is the approximate speed of light in vacuum (km/s)?",
      emoji: "💡",
      choices: ["100,000", "300,000", "500,000", "1,000,000"],
      correct: 1
    },
    {
      key: "puzzle_tarih_1",
      question: "In what year was the Republic of Turkey founded?",
      emoji: "🏛️",
      choices: ["1919", "1920", "1923", "1925"],
      correct: 2
    },
    {
      key: "puzzle_kimya_1",
      question: "What is the chemical formula for water?",
      emoji: "💧",
      choices: ["H3O", "H2O", "HO2", "H2O2"],
      correct: 1
    },
    {
      key: "puzzle_mantik_2",
      question: "What is the sum of interior angles of a triangle?",
      emoji: "📐",
      choices: ["90°", "270°", "360°", "180°"],
      correct: 3
    },
    {
      key: "puzzle_biyoloji_1",
      question: "Where is DNA found in a cell?",
      emoji: "🔬",
      choices: ["Mitochondria", "Ribosome", "Nucleus", "Lysosome"],
      correct: 2
    },
    {
      key: "puzzle_fizik_2",
      question: "How many laws of motion did Newton have?",
      emoji: "⚙️",
      choices: ["2", "3", "4", "5"],
      correct: 1
    },
    {
      key: "puzzle_kimya_2",
      question: "What is the symbol for Oxygen?",
      emoji: "🧪",
      choices: ["Os", "Ox", "O", "On"],
      correct: 2
    },
    {
      key: "puzzle_biyoloji_2",
      question: "Where does photosynthesis take place?",
      emoji: "🌿",
      choices: ["Mitochondria", "Ribosome", "Chloroplast", "Nucleus"],
      correct: 2
    },
    {
      key: "puzzle_matematik_5",
      question: "What is the approximate value of π (pi)?",
      emoji: "📐",
      choices: ["2.71", "3.14", "1.41", "1.73"],
      correct: 1
    },
    {
      key: "puzzle_tarih_2",
      question: "When did the Turkish War of Independence begin?",
      emoji: "🏛️",
      choices: ["1918", "1919", "1921", "1922"],
      correct: 1
    },
    {
      key: "puzzle_fizik_3",
      question: "Which material conducts both electricity and heat well?",
      emoji: "⚡",
      choices: ["Wood", "Plastic", "Copper", "Glass"],
      correct: 2
    },
    {
      key: "puzzle_kimya_3",
      question: "How many naturally occurring elements are there?",
      emoji: "🧬",
      choices: ["82", "92", "102", "112"],
      correct: 1
    },
    {
      key: "puzzle_tarih_3",
      question: "In what year did the Ottoman Empire fall?",
      emoji: "🏯",
      choices: ["1919", "1920", "1922", "1923"],
      correct: 2
    },
    {
      key: "puzzle_t9_m1",
      question: "A clock loses 2 minutes per day. How much will it lose in 2 weeks?",
      emoji: "⏱️",
      choices: ["14", "24", "28", "30"],
      correct: 2
    },
    {
      key: "puzzle_t9_m2",
      question: "Which element has the symbol 'Fe'?",
      emoji: "⚗️",
      choices: ["Phosphorus", "Fluorine", "Iron", "Fermium"],
      correct: 2
    },
    {
      key: "puzzle_t9_m3",
      question: "What is the minimum number of words in a noun phrase?",
      emoji: "📝",
      choices: ["1", "2", "3", "4"],
      correct: 1
    },
    {
      key: "puzzle_t9_m4",
      question: "What is the sum of interior angles of a triangle?",
      emoji: "📐",
      choices: ["90°", "180°", "270°", "360°"],
      correct: 1
    },
    {
      key: "puzzle_t9_m5",
      question: "Which organ affects both digestion and blood production?",
      emoji: "🫀",
      choices: ["Heart", "Kidney", "Liver", "Spleen"],
      correct: 2
    },
    {
      key: "puzzle_t9_m6",
      question: "What happens when light changes speed between mediums?",
      emoji: "💡",
      choices: [
        "Color changes",
        "Intensity decreases",
        "Refraction occurs",
        "Reflection occurs"
      ],
      correct: 2
    },
    {
      key: "puzzle_fizik_ort_new1",
      question: "What is the approximate speed of sound in air (m/s)?",
      emoji: "🔊",
      choices: ["144", "340", "500", "1000"],
      correct: 1
    },
    {
      key: "puzzle_tarih_ort_new1",
      question: "How many years did the Ottoman Empire rule?",
      emoji: "🏰",
      choices: ["400 years", "600 years", "800 years", "1000 years"],
      correct: 1
    },
    {
      key: "puzzle_matematik_ort_new1",
      question: "What is 2^10 (2 to the power of 10)?",
      emoji: "📐",
      choices: ["512", "1024", "2048", "256"],
      correct: 1
    }
  ]
};
const puzzlesEs = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "¿De qué color es el sol?",
      emoji: "☀️",
      choices: ["Azul", "Rojo", "Amarillo", "Verde"],
      correct: 2
    },
    {
      key: "puzzle_hayvan_1",
      question: "¿Cuál puede volar?",
      emoji: "🐦",
      choices: ["Gato", "Pájaro", "Pez", "Perro"],
      correct: 1
    },
    {
      key: "puzzle_sayi_1",
      question: "¿Cuánto es 2 + 3?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2
    },
    {
      key: "puzzle_meyve_1",
      question: "¿Cuál NO es una fruta?",
      emoji: "🍎",
      choices: ["Manzana", "Plátano", "Zanahoria", "Uva"],
      correct: 2
    },
    {
      key: "puzzle_sekil_1",
      question: "¿A qué forma se parece una rueda?",
      emoji: "⭕",
      choices: ["Cuadrado", "Círculo", "Triángulo", "Rectángulo"],
      correct: 1
    },
    {
      key: "puzzle_renk_2",
      question: "¿De qué color es el cielo?",
      emoji: "🌤️",
      choices: ["Verde", "Azul", "Amarillo", "Rojo"],
      correct: 1
    },
    {
      key: "puzzle_hayvan_2",
      question: "¿Qué animal pone huevos?",
      emoji: "🐔",
      choices: ["Gato", "Perro", "Gallina", "Caballo"],
      correct: 2
    },
    {
      key: "puzzle_sayi_2",
      question: "¿Cuánto es 10 - 4?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      key: "puzzle_t9_o1",
      question: "Salgo cada mañana y me pongo cada tarde. ¿Qué soy?",
      emoji: "☀️",
      choices: ["Luna", "Sol", "Estrella", "Nube"],
      correct: 1
    },
    {
      key: "puzzle_t9_o2",
      question: "Tengo dientes pero no puedo morder. ¿Qué soy?",
      emoji: "⚙️",
      choices: ["Sierra", "Peine", "Tenedor", "Cuchara"],
      correct: 1
    },
    {
      key: "puzzle_oo_new1",
      question: "Llego después del atardecer y traigo las estrellas. ¿Qué soy?",
      emoji: "🌙",
      choices: ["Mañana", "Noche", "Mediodía", "Tarde"],
      correct: 3
    },
    {
      key: "puzzle_oo_new5",
      question: "¿Qué cosa blanca cae en invierno?",
      emoji: "❄️",
      choices: ["Lluvia", "Nieve", "Granizo", "Niebla"],
      correct: 1
    }
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "¿Cuánto es 7 × 8?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1
    },
    {
      key: "puzzle_cografi_1",
      question: "¿Cuál es la capital de Turquía?",
      emoji: "🏛️",
      choices: ["Estambul", "Ankara", "Esmirna", "Bursa"],
      correct: 1
    },
    {
      key: "puzzle_bilim_1",
      question: "¿Qué planeta es el más cercano al Sol?",
      emoji: "🪐",
      choices: ["Venus", "Tierra", "Mercurio", "Marte"],
      correct: 2
    },
    {
      key: "puzzle_dil_1",
      question: "¿Cuántas letras tiene el alfabeto español?",
      emoji: "🔤",
      choices: ["25", "26", "27", "28"],
      correct: 1
    },
    {
      key: "puzzle_hayvan_3",
      question: "¿Cuál es el animal terrestre más rápido?",
      emoji: "🐆",
      choices: ["León", "Guepardo", "Leopardo", "Tigre"],
      correct: 1
    },
    {
      key: "puzzle_tarih_1",
      question: "¿Quién descubrió América?",
      emoji: "⛵",
      choices: ["Marco Polo", "Magallanes", "Colón", "Vespucio"],
      correct: 2
    },
    {
      key: "puzzle_matematik_2",
      question: "¿Cuántos lados tiene un hexágono?",
      emoji: "🔷",
      choices: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      key: "puzzle_bilim_2",
      question: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
      emoji: "💨",
      choices: ["Oxígeno", "CO₂", "Nitrógeno", "Argón"],
      correct: 2
    },
    {
      key: "puzzle_cografi_2",
      question: "¿Cuál es el océano más grande del mundo?",
      emoji: "🌊",
      choices: ["Atlántico", "Índico", "Pacífico", "Ártico"],
      correct: 2
    },
    {
      key: "puzzle_sanat_1",
      question: "¿Quién pintó la Mona Lisa?",
      emoji: "🎨",
      choices: ["Miguel Ángel", "Rafael", "Da Vinci", "Botticelli"],
      correct: 2
    }
  ],
  ortaokul: [
    {
      key: "puzzle_o_math_1",
      question: "¿Cuánto es la raíz cuadrada de 144?",
      emoji: "🔢",
      choices: ["11", "12", "13", "14"],
      correct: 1
    },
    {
      key: "puzzle_o_science_1",
      question: "¿Cuál es la fórmula del agua?",
      emoji: "💧",
      choices: ["HO", "H₂O", "H₂O₂", "OH"],
      correct: 1
    },
    {
      key: "puzzle_o_geo_1",
      question: "¿Cuál es el río más largo del mundo?",
      emoji: "🌍",
      choices: ["Amazonas", "Yangtsé", "Misisipi", "Nilo"],
      correct: 3
    },
    {
      key: "puzzle_o_hist_1",
      question: "¿En qué año comenzó la Primera Guerra Mundial?",
      emoji: "📅",
      choices: ["1912", "1914", "1916", "1918"],
      correct: 1
    },
    {
      key: "puzzle_o_lit_1",
      question: "¿Quién escribió Don Quijote?",
      emoji: "📚",
      choices: ["Lope de Vega", "Calderón", "Cervantes", "Quevedo"],
      correct: 2
    },
    {
      key: "puzzle_o_phys_1",
      question: "¿Cuál es la velocidad de la luz en km/s?",
      emoji: "💡",
      choices: ["100.000", "200.000", "300.000", "400.000"],
      correct: 2
    },
    {
      key: "puzzle_o_bio_1",
      question: "¿Cuántos cromosomas tiene una célula humana normal?",
      emoji: "🧬",
      choices: ["23", "44", "46", "48"],
      correct: 2
    },
    {
      key: "puzzle_o_chem_1",
      question: "¿Cuál es el elemento más ligero de la tabla periódica?",
      emoji: "⚗️",
      choices: ["Helio", "Litio", "Hidrógeno", "Berilio"],
      correct: 2
    }
  ]
};
const puzzles = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "Güneş hangi renktir?",
      emoji: "☀️",
      choices: ["Mavi", "Kırmızı", "Sarı", "Yeşil"],
      correct: 2
    },
    {
      key: "puzzle_hayvan_1",
      question: "Hangisi uçar?",
      emoji: "🐦",
      choices: ["Kedi", "Kuş", "Balık", "Köpek"],
      correct: 1
    },
    {
      key: "puzzle_sayi_1",
      question: "2 + 3 kaçtır?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2
    },
    {
      key: "puzzle_meyve_1",
      question: "Hangisi bir meyve değil?",
      emoji: "🍎",
      choices: ["Elma", "Muz", "Havuç", "Üzüm"],
      correct: 2
    },
    {
      key: "puzzle_sekil_1",
      question: "Tekerlek hangi şekle benzer?",
      emoji: "⭕",
      choices: ["Kare", "Daire", "Üçgen", "Dikdörtgen"],
      correct: 1
    },
    {
      key: "puzzle_renk_2",
      question: "Gökyüzü hangi renktir?",
      emoji: "🌤️",
      choices: ["Yeşil", "Mavi", "Sarı", "Kırmızı"],
      correct: 1
    },
    {
      key: "puzzle_hayvan_2",
      question: "Hangi hayvan yumurta yumurtlar?",
      emoji: "🐔",
      choices: ["Kedi", "Köpek", "Tavuk", "At"],
      correct: 2
    },
    {
      key: "puzzle_sayi_2",
      question: "10 - 4 kaçtır?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1
    },
    {
      key: "puzzle_sekil_2",
      question: "Üç kenarı olan şekil hangisidir?",
      emoji: "🔺",
      choices: ["Kare", "Daire", "Üçgen", "Dikdörtgen"],
      correct: 2
    },
    {
      key: "puzzle_meyve_2",
      question: "Sarı renkli hangi meyvedir?",
      emoji: "🍌",
      choices: ["Elma", "Çilek", "Muz", "Üzüm"],
      correct: 2
    },
    {
      key: "puzzle_hayvan_3",
      question: "Hangisi denizde yaşar?",
      emoji: "🐟",
      choices: ["Kedi", "Balık", "Kuş", "Köpek"],
      correct: 1
    },
    {
      key: "puzzle_renk_3",
      question: "Elma genellikle hangi renktedir?",
      emoji: "🍎",
      choices: ["Mavi", "Sarı", "Mor", "Kırmızı"],
      correct: 3
    },
    {
      key: "puzzle_sayi_3",
      question: "1 + 1 kaçtır?",
      emoji: "✌️",
      choices: ["3", "1", "2", "4"],
      correct: 2
    },
    {
      key: "puzzle_t9_o1",
      question: "Ben her sabah doğarım, her akşam batarım. Ben kimim?",
      emoji: "☀️",
      choices: ["Ay", "Güneş", "Yıldız", "Bulut"],
      correct: 1
    },
    {
      key: "puzzle_t9_o2",
      question: "Dişleri var ama ısırmaz, ağzı var ama konuşmaz. Bu nedir?",
      emoji: "⚙️",
      choices: ["Testere", "Tarak", "Çatal", "Kaşık"],
      correct: 1
    },
    {
      key: "puzzle_t9_o3",
      question: "Evi var ama kapısı yok. Her zaman içinde taşır. Bu nedir?",
      emoji: "🐌",
      choices: ["Kaplumbağa", "Salyangoz", "Yengeç", "İstakoz"],
      correct: 1
    },
    {
      key: "puzzle_t9_o4",
      question: "Koşarım ama bacağım yok, akarım ama suyum değilim. Ben kimim?",
      emoji: "⏰",
      choices: ["Rüzgar", "Zaman", "Nehir", "Işık"],
      correct: 1
    },
    {
      key: "puzzle_t9_o5",
      question: "Kaç tane mevsim vardır?",
      emoji: "🍂",
      choices: ["2", "3", "4", "5"],
      correct: 2
    },
    {
      key: "puzzle_t9_o6",
      question: "1, 3, 5, 7, ... Sıradaki sayı nedir?",
      emoji: "🔢",
      choices: ["8", "9", "10", "11"],
      correct: 1
    },
    {
      key: "puzzle_oo_new1",
      question: "Ben güneşten sonra gelir, yıldızları getiririm. Ben kimim?",
      emoji: "🌙",
      choices: ["Sabah", "Gece", "Öğle", "Akşam"],
      correct: 3
    },
    {
      key: "puzzle_oo_new2",
      question: "Dört bacağım var ama yürüyemem. Ben neyim?",
      emoji: "🪑",
      choices: ["Köpek", "Masa", "At", "Sandalye"],
      correct: 3
    },
    {
      key: "puzzle_oo_new3",
      question: "Her sabah kahvaltıda içilir, beyaz renktedir. Ben neyim?",
      emoji: "🥛",
      choices: ["Su", "Süt", "Çay", "Meyve suyu"],
      correct: 1
    },
    {
      key: "puzzle_oo_new4",
      question: "Havada uçarım, kanatlarım var. Çiçekleri severim. Ben kimim?",
      emoji: "🦋",
      choices: ["Kuş", "Arı", "Kelebek", "Sinek"],
      correct: 2
    },
    {
      key: "puzzle_oo_new5",
      question: "Kışın yağan beyaz şey nedir?",
      emoji: "❄️",
      choices: ["Yağmur", "Kar", "Dolu", "Sis"],
      correct: 1
    },
    {
      key: "puzzle_oo_new6",
      question: "Hangi hayvanın boynuzları vardır?",
      emoji: "🐂",
      choices: ["Kedi", "Köpek", "İnek", "Tavuk"],
      correct: 2
    }
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "7 × 8 kaçtır?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1
    },
    {
      key: "puzzle_cografi_1",
      question: "Türkiye'nin başkenti neresidir?",
      emoji: "🏛️",
      choices: ["İstanbul", "İzmir", "Ankara", "Bursa"],
      correct: 2
    },
    {
      key: "puzzle_mantik_1",
      question: "Bir haftada kaç gün vardır?",
      emoji: "📅",
      choices: ["5", "6", "8", "7"],
      correct: 3
    },
    {
      key: "puzzle_bilim_1",
      question: "Bitkilerin güneş ışığını besin üretmek için kullanmasına ne denir?",
      emoji: "🌿",
      choices: ["Solunum", "Büyüme", "Fotosentez", "Uyku"],
      correct: 2
    },
    {
      key: "puzzle_dilbilgisi_1",
      question: "'Koşmak' hangi sözcük türüdür?",
      emoji: "📝",
      choices: ["İsim", "Sıfat", "Zarf", "Fiil"],
      correct: 3
    },
    {
      key: "puzzle_matematik_2",
      question: "9 × 6 kaçtır?",
      emoji: "🔢",
      choices: ["54", "48", "56", "63"],
      correct: 0
    },
    {
      key: "puzzle_matematik_3",
      question: "48 ÷ 6 kaçtır?",
      emoji: "➗",
      choices: ["7", "8", "9", "6"],
      correct: 1
    },
    {
      key: "puzzle_cografi_2",
      question: "Türkiye'nin en uzun nehri hangisidir?",
      emoji: "🏞️",
      choices: ["Sakarya", "Kızılırmak", "Fırat", "Dicle"],
      correct: 1
    },
    {
      key: "puzzle_bilim_2",
      question: "Hangi gezegen Güneş'e en yakındır?",
      emoji: "🪐",
      choices: ["Venüs", "Mars", "Merkür", "Dünya"],
      correct: 2
    },
    {
      key: "puzzle_dilbilgisi_2",
      question: "Cümledeki özne ne görevdedir?",
      emoji: "📝",
      choices: [
        "İşi yapar",
        "Niteliği anlatır",
        "Yeri belirtir",
        "Nesneyi tanımlar"
      ],
      correct: 0
    },
    {
      key: "puzzle_matematik_4",
      question: "125'in yarısı kaçtır?",
      emoji: "🔢",
      choices: ["60", "62", "62.5", "65"],
      correct: 2
    },
    {
      key: "puzzle_bilim_3",
      question: "İnsan vücudunda kaç kemik vardır?",
      emoji: "🦴",
      choices: ["186", "206", "226", "246"],
      correct: 1
    },
    {
      key: "puzzle_cografi_3",
      question: "Dünyanın en yüksek dağı hangisidir?",
      emoji: "⛰️",
      choices: ["K2", "Everest", "Kilimanjaro", "Elbrus"],
      correct: 1
    },
    {
      key: "puzzle_t9_i1",
      question: "Bir çobanın 17 koyunu var. Biri hariç hepsi kaçtı. Kaç koyun kaldı?",
      emoji: "🐑",
      choices: ["0", "1", "16", "17"],
      correct: 1
    },
    {
      key: "puzzle_t9_i2",
      question: "Ankara'dan İstanbul'a giden trenin şoförünün adı nedir?",
      emoji: "🚂",
      choices: [
        "Ahmet",
        "Mehmet",
        "Trenin şoförü olmaz, makinisti var",
        "Bilinmez"
      ],
      correct: 2
    },
    {
      key: "puzzle_t9_i3",
      question: "Türkiye'nin en büyük gölü hangisidir?",
      emoji: "🌊",
      choices: ["Tuz Gölü", "Van Gölü", "Eğirdir Gölü", "Burdur Gölü"],
      correct: 1
    },
    {
      key: "puzzle_t9_i4",
      question: "3 kedinin 3 fareyi yakalamak için 3 dakikaya ihtiyacı var. 100 kedi, 100 fareyi kaç dakikada yakalar?",
      emoji: "🐱",
      choices: ["100", "33", "3", "300"],
      correct: 2
    },
    {
      key: "puzzle_t9_i5",
      question: "Türk alfabesinde kaç harf vardır?",
      emoji: "🔤",
      choices: ["26", "28", "29", "31"],
      correct: 2
    },
    {
      key: "puzzle_t9_i6",
      question: "Hangi sayı hem çift hem de asal sayıdır?",
      emoji: "🔢",
      choices: ["1", "2", "4", "6"],
      correct: 1
    },
    {
      key: "puzzle_il_new1",
      question: "Ne kadar çok alırsan, geride o kadar çok kalır. Ben neyim?",
      emoji: "🕳️",
      choices: ["Toprak", "Çukur", "Taş", "Su"],
      correct: 1
    },
    {
      key: "puzzle_il_new2",
      question: "Taşırsın ama suyu yoktur, sesin vardır ama dili yoktur. Ben neyim?",
      emoji: "🥁",
      choices: ["Deniz", "Çan", "Davul", "Kanal"],
      correct: 2
    },
    {
      key: "puzzle_il_new3",
      question: "Hangi ay 28 veya 29 gün çeker?",
      emoji: "📅",
      choices: ["Ocak", "Şubat", "Mart", "Nisan"],
      correct: 1
    },
    {
      key: "puzzle_il_new4",
      question: "Düşündükçe büyür, söyledikçe küçülür. Ben neyim?",
      emoji: "🤫",
      choices: ["Sır", "Hayal", "Düş", "Bilgi"],
      correct: 0
    },
    {
      key: "puzzle_matematik_ilk_new1",
      question: "12 × 12 kaçtır?",
      emoji: "🔢",
      choices: ["132", "144", "156", "124"],
      correct: 1
    },
    {
      key: "puzzle_tarih_ilk_new1",
      question: "Cumhuriyet Bayramı hangi tarihte kutlanır?",
      emoji: "🎉",
      choices: ["23 Nisan", "19 Mayıs", "29 Ekim", "30 Ağustos"],
      correct: 2
    },
    {
      key: "puzzle_bilim_ilk_new1",
      question: "Güneş sistemi kaç gezegenden oluşur?",
      emoji: "🪐",
      choices: ["7", "8", "9", "10"],
      correct: 1
    }
  ],
  ortaokul: [
    {
      key: "puzzle_fizik_1",
      question: "İşığın boşlukta hızı yaklaşık kaç km/s'dir?",
      emoji: "💡",
      choices: ["100.000", "300.000", "500.000", "1.000.000"],
      correct: 1
    },
    {
      key: "puzzle_tarih_1",
      question: "Türkiye Cumhuriyeti hangi yılda kuruldu?",
      emoji: "🏛️",
      choices: ["1919", "1920", "1923", "1925"],
      correct: 2
    },
    {
      key: "puzzle_kimya_1",
      question: "Su molekülünün kimyasal formülü nedir?",
      emoji: "💧",
      choices: ["H3O", "H2O", "HO2", "H2O2"],
      correct: 1
    },
    {
      key: "puzzle_mantik_2",
      question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
      emoji: "📐",
      choices: ["90°", "270°", "360°", "180°"],
      correct: 3
    },
    {
      key: "puzzle_biyoloji_1",
      question: "DNA hangi organelde bulunur?",
      emoji: "🔬",
      choices: ["Mitokondri", "Ribozom", "Çekirdek", "Lizozom"],
      correct: 2
    },
    {
      key: "puzzle_fizik_2",
      question: "Newton'un kaç hareket yasası vardır?",
      emoji: "⚙️",
      choices: ["2", "3", "4", "5"],
      correct: 1
    },
    {
      key: "puzzle_kimya_2",
      question: "Oksijen elementinin sembolü nedir?",
      emoji: "🧪",
      choices: ["Os", "Ox", "O", "On"],
      correct: 2
    },
    {
      key: "puzzle_biyoloji_2",
      question: "Fotosentez hangi organelde gerçekleşir?",
      emoji: "🌿",
      choices: ["Mitokondri", "Ribozom", "Kloroplast", "Çekirdek"],
      correct: 2
    },
    {
      key: "puzzle_matematik_5",
      question: "π (pi) sayısının yaklaşık değeri kaçtır?",
      emoji: "📐",
      choices: ["2.71", "3.14", "1.41", "1.73"],
      correct: 1
    },
    {
      key: "puzzle_tarih_2",
      question: "Kurtuluş Savaşı hangi yıl başladı?",
      emoji: "🏛️",
      choices: ["1918", "1919", "1921", "1922"],
      correct: 1
    },
    {
      key: "puzzle_fizik_3",
      question: "Hangi madde hem elektriği hem de ısıyı iyi iletir?",
      emoji: "⚡",
      choices: ["Ahşap", "Plastik", "Bakır", "Cam"],
      correct: 2
    },
    {
      key: "puzzle_kimya_3",
      question: "Kaç tane doğal element vardır?",
      emoji: "🧬",
      choices: ["82", "92", "102", "112"],
      correct: 1
    },
    {
      key: "puzzle_tarih_3",
      question: "Osmanlı İmparatorluğu hangi yıl yıkıldı?",
      emoji: "🏯",
      choices: ["1919", "1920", "1922", "1923"],
      correct: 2
    },
    {
      key: "puzzle_t9_m1",
      question: "Bir saat günde 2 dakika geri kalıyorsa, 2 haftada kaç dakika geri kalır?",
      emoji: "⏱️",
      choices: ["14", "24", "28", "30"],
      correct: 2
    },
    {
      key: "puzzle_t9_m2",
      question: "Hangi kimyasal element simgesi 'Fe' ile gösterilir?",
      emoji: "⚗️",
      choices: ["Fosfor", "Flor", "Demir", "Feriyum"],
      correct: 2
    },
    {
      key: "puzzle_t9_m3",
      question: "Türkçede 'isim tamlaması' en az kaç sözcükten oluşur?",
      emoji: "📝",
      choices: ["1", "2", "3", "4"],
      correct: 1
    },
    {
      key: "puzzle_t9_m4",
      question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
      emoji: "📐",
      choices: ["90°", "180°", "270°", "360°"],
      correct: 1
    },
    {
      key: "puzzle_t9_m5",
      question: "Hangi organ hem sindirimi hem de kan üretimini etkiler?",
      emoji: "🫀",
      choices: ["Kalp", "Böbrek", "Karaciğer", "Dalak"],
      correct: 2
    },
    {
      key: "puzzle_t9_m6",
      question: "Işık bir ortamdan diğerine geçerken hızı değişirse ne olur?",
      emoji: "💡",
      choices: [
        "Rengi değişir",
        "Şiddeti azalır",
        "Kırılma olur",
        "Yansıma olur"
      ],
      correct: 2
    },
    {
      key: "puzzle_fizik_ort_new1",
      question: "Sesin havadaki hızı yaklaşık kaç m/s'dir?",
      emoji: "🔊",
      choices: ["144", "340", "500", "1000"],
      correct: 1
    },
    {
      key: "puzzle_tarih_ort_new1",
      question: "Osmanlı Devleti kaç yıl hüküm sürdü?",
      emoji: "🏰",
      choices: ["400 yıl", "600 yıl", "800 yıl", "1000 yıl"],
      correct: 1
    },
    {
      key: "puzzle_matematik_ort_new1",
      question: "2^10 (2 üssü 10) kaçtır?",
      emoji: "📐",
      choices: ["512", "1024", "2048", "256"],
      correct: 1
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
const levelTabsEn = [
  { key: "okul_oncesi", label: "🌈 Preschool" },
  { key: "ilkokul", label: "📗 Primary" },
  { key: "ortaokul", label: "📘 Middle" }
];
function PuzzlesPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const profile = getCurrentUser();
  const displayPuzzles = lang === "es" ? puzzlesEs : isEn ? puzzlesEn : puzzles;
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "puzzles");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [answers, setAnswers] = reactExports.useState({});
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const filteredPuzzles = displayPuzzles[level].filter(
    (p) => p.question.toLowerCase().includes(searchTerm.toLowerCase()) || p.choices.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAnswer = (puzzleKey, choiceIndex, correctIndex) => {
    if (answers[puzzleKey] !== void 0) return;
    setAnswers((prev) => ({ ...prev, [puzzleKey]: choiceIndex }));
    if (choiceIndex === correctIndex && profile && !readTopics.includes(puzzleKey)) {
      markTopicRead(profile.studentNumber, puzzleKey);
      updatePoints(profile.studentNumber, 5);
      incrementDailyContentRead(profile.studentNumber);
      setReadTopics((prev) => [...prev, puzzleKey]);
    }
  };
  const tabs = isEn ? levelTabsEn : levelTabs;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-amber-500 to-orange-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "puzzles.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          isEn ? "Back" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🧩 ",
      t("puzzles_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "puzzles.tab",
        onClick: () => {
          setLevel(tab.key);
          setAnswers({});
        },
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-amber-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    (() => {
      const total = displayPuzzles[level].length;
      const done = displayPuzzles[level].filter(
        (p) => readTopics.includes(p.key)
      ).length;
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🧩" }),
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
              className: "h-full bg-orange-300 rounded-full transition-all duration-500",
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
        "data-ocid": "puzzles.search_input",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: filteredPuzzles.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: isEn ? "No results found 🔍" : "Sonuç bulunamadı 🔍" }) : filteredPuzzles.map((puzzle, pIdx) => {
      const selected = answers[puzzle.key];
      const answered = selected !== void 0 && selected !== null;
      const isCorrect = answered && selected === puzzle.correct;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${answered ? isCorrect ? "border-2 border-green-300" : "border-2 border-red-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: puzzle.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/60 text-xs mb-1", children: [
                  isEn ? "Question" : "Soru",
                  " ",
                  pIdx + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: puzzle.question })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: puzzle.choices.map((choice, cIdx) => {
              let btnClass = "bg-white/20 text-white hover:bg-white/30";
              if (answered) {
                if (cIdx === puzzle.correct)
                  btnClass = "bg-green-500 text-white";
                else if (cIdx === selected)
                  btnClass = "bg-red-500 text-white";
                else btnClass = "bg-white/10 text-white/50";
              }
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": `puzzles.answer_button.${cIdx + 1}`,
                  disabled: answered,
                  onClick: () => handleAnswer(puzzle.key, cIdx, puzzle.correct),
                  className: `rounded-xl py-3 px-4 text-sm font-bold transition-all ${btnClass} disabled:cursor-not-allowed`,
                  children: choice
                },
                choice
              );
            }) }),
            answered && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `mt-3 text-sm font-bold ${isCorrect ? "text-green-300" : "text-red-300"}`,
                children: isCorrect ? isEn ? "✅ Correct! +5 points!" : "✅ Doğru! +5 puan kazandın!" : isEn ? `❌ Wrong. Correct answer: ${puzzle.choices[puzzle.correct]}` : `❌ Yanlış. Doğru cevap: ${puzzle.choices[puzzle.correct]}`
              }
            )
          ]
        },
        puzzle.key
      );
    }) })
  ] }) });
}
export {
  PuzzlesPage as default
};
