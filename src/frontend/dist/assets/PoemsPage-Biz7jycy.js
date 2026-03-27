import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, x as isFavorite, j as jsxRuntimeExports, B as Button, f as updatePoints, y as toggleFavorite, m as markTopicRead, i as incrementDailyContentRead } from "./index-DP39OZ5Y.js";
import { W as WordDefinitionTooltip } from "./WordDefinitionTooltip-Doi5czcz.js";
const poemsEn = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "The Rain",
      emoji: "🌧️",
      lines: [
        "Pitter patter, drops of rain,",
        "Falling on the windowpane.",
        "Flowers drink and trees grow tall,",
        "Rain is good for one and all!"
      ]
    },
    {
      key: "poem_kelebek",
      title: "The Butterfly",
      emoji: "🦋",
      lines: [
        "A butterfly flutters by,",
        "Colorful wings against the sky.",
        "Landing soft on flower tops,",
        "Then up again and never stops!"
      ]
    },
    {
      key: "poem_ay",
      title: "The Moon",
      emoji: "🌙",
      lines: [
        "Moon, oh moon up in the night,",
        "How you shine with silver light.",
        "Stars around you dance and play,",
        "Sleep tight till the break of day."
      ]
    },
    {
      key: "poem_bahce",
      title: "Our Garden",
      emoji: "🌷",
      lines: [
        "Roses bloom in our garden,",
        "Sunflowers reach for the sky.",
        "Bees hum and birds are singing,",
        "As happy days go by."
      ]
    },
    {
      key: "poem_gunes",
      title: "The Sun",
      emoji: "☀️",
      lines: [
        "Sun, sun, come on down,",
        "Light up yard and every town.",
        "Shine on flowers, shine on me,",
        "How warm and bright the world can be!"
      ]
    },
    {
      key: "poem_kedi",
      title: "My Little Cat",
      emoji: "🐱",
      lines: [
        "My little cat, soft and white,",
        "Sleeps beside me every night.",
        "Purring softly, cozy and warm,",
        "Keeping me safe from every storm."
      ]
    },
    {
      key: "poem_renk",
      title: "Colors",
      emoji: "🌈",
      lines: [
        "Red is roses, blue is sky,",
        "Yellow's the sun that's always high.",
        "Green are leaves and orange the fruit,",
        "Colors are beautiful, that's no doubt!"
      ]
    },
    {
      key: "poem_sayi",
      title: "Counting Song",
      emoji: "🔢",
      lines: [
        "One, two, three and four,",
        "Count the apples on the floor.",
        "Five and six and seven too,",
        "Counting is so fun to do!"
      ]
    },
    {
      key: "poem_deniz",
      title: "The Sea",
      emoji: "🌊",
      lines: [
        "Rolling waves upon the shore,",
        "Calling me to come explore.",
        "Sand between my little toes,",
        "Where the sea goes, no one knows!"
      ]
    },
    {
      key: "poem_yildiz",
      title: "Stars",
      emoji: "⭐",
      lines: [
        "Stars are scattered through the night,",
        "Each one shining with its light.",
        "Maybe someday I will fly,",
        "And touch the stars up in the sky!"
      ]
    }
  ],
  ilkokul: [
    {
      key: "poem_turkiye",
      title: "My Country",
      emoji: "🇹🇷",
      lines: [
        "My country stretches wide and far,",
        "Its mountains reach to every star.",
        "Its seas are blue, its fields are green,",
        "The most beautiful land I've ever seen."
      ]
    },
    {
      key: "poem_ogretmen",
      title: "My Teacher",
      emoji: "👩‍🏫",
      lines: [
        "My teacher is a guiding light,",
        "Helping me to read and write.",
        "Patient, kind, and always there,",
        "Showing me how much they care."
      ]
    },
    {
      key: "poem_kitap",
      title: "The Book",
      emoji: "📖",
      lines: [
        "Open a book and you will find,",
        "Worlds and wonders of every kind.",
        "Cities, jungles, oceans wide,",
        "All of them wait just inside!"
      ]
    },
    {
      key: "poem_dost",
      title: "A Friend",
      emoji: "🤝",
      lines: [
        "A friend is someone who cares for you,",
        "Someone who's always loyal and true.",
        "Through good times and hard ones too,",
        "Friends make everything feel brand new."
      ]
    },
    {
      key: "poem_ilkbahar",
      title: "Spring",
      emoji: "🌷",
      lines: [
        "Flowers bloom and birds all sing,",
        "Welcome, welcome, lovely spring!",
        "Green returns to every tree,",
        "Spring is here for you and me."
      ]
    },
    {
      key: "poem_okul",
      title: "School",
      emoji: "🏫",
      lines: [
        "School is where I learn each day,",
        "Mix hard work with time to play.",
        "Friends and teachers all around,",
        "The best of knowledge to be found."
      ]
    },
    {
      key: "poem_ataturk",
      title: "A Great Leader",
      emoji: "🌟",
      lines: [
        "A great leader brave and true,",
        "Who showed the nation what to do.",
        "Freedom, peace, and learning's light,",
        "His legacy shines forever bright."
      ]
    },
    {
      key: "poem_kuslar",
      title: "Birds",
      emoji: "🐦",
      lines: [
        "Birds in branches, birds in flight,",
        "Singing from dawn until the night.",
        "Feathers soft and colors bright,",
        "Birds are nature's pure delight."
      ]
    },
    {
      key: "poem_anne",
      title: "Mother",
      emoji: "💕",
      lines: [
        "Mother's arms so warm and safe,",
        "Her love no other can replace.",
        "She sees me through my every day,",
        "A love that never fades away."
      ]
    },
    {
      key: "poem_doga",
      title: "Nature",
      emoji: "🌿",
      lines: [
        "The forest breathes, the river sings,",
        "Nature holds a thousand things.",
        "Listen well and you will find,",
        "Wisdom that soothes the restless mind."
      ]
    }
  ],
  ortaokul: [
    {
      key: "poem_ozgur_ruh",
      title: "Free Spirit",
      emoji: "🕊️",
      lines: [
        "Beyond the hills and past the sea,",
        "My spirit longs to wander free.",
        "To question, dream, and dare to grow,",
        "To learn the things I do not know."
      ]
    },
    {
      key: "poem_zaman",
      title: "Time",
      emoji: "⏰",
      lines: [
        "Time flows on like a river's tide,",
        "It does not slow, it will not hide.",
        "Use each hour while you may,",
        "For time once lost won't come back your way."
      ]
    },
    {
      key: "poem_umut",
      title: "Hope",
      emoji: "🌅",
      lines: [
        "Hope is the light when darkness falls,",
        "A quiet voice that gently calls.",
        "Hold it close through storm and rain,",
        "For after night the sun shines again."
      ]
    },
    {
      key: "poem_bilgi",
      title: "Knowledge",
      emoji: "🎓",
      lines: [
        "Knowledge opens every door,",
        "Gives you courage to explore.",
        "No treasure shines as bright as learning,",
        "Keep your mind forever yearning."
      ]
    },
    {
      key: "poem_vatan",
      title: "Homeland",
      emoji: "🏔️",
      lines: [
        "These mountains and these rivers wide,",
        "This soil in which our roots reside.",
        "Our homeland calls through wind and rain,",
        "A love that echoes like a refrain."
      ]
    },
    {
      key: "poem_genclik",
      title: "Youth",
      emoji: "🌱",
      lines: [
        "Youth is strength and youth is fire,",
        "Reach up high and set your aim higher.",
        "The future waits for those who dare,",
        "Build your dreams with love and care."
      ]
    },
    {
      key: "poem_adalet",
      title: "Justice",
      emoji: "⚖️",
      lines: [
        "Justice stands on steady ground,",
        "Where truth and fairness both are found.",
        "Speak for those who have no voice,",
        "Standing right is always a choice."
      ]
    },
    {
      key: "poem_insanlik",
      title: "Humanity",
      emoji: "🌍",
      lines: [
        "We are many, we are one,",
        "Sharing earth beneath one sun.",
        "When we help and when we care,",
        "Humanity is everywhere."
      ]
    },
    {
      key: "poem_sessizlik",
      title: "Silence",
      emoji: "🌌",
      lines: [
        "In the quiet of the night,",
        "Shining with a gentle light,",
        "Silence speaks what words can't say,",
        "Listen close -- don't turn away."
      ]
    },
    {
      key: "poem_gelecek",
      title: "The Future",
      emoji: "🚀",
      lines: [
        "The future shines beyond the hill,",
        "A world of wonder, waiting still.",
        "Take up the torch, take up the call,",
        "The future needs the best of all."
      ]
    }
  ]
};
const poemsEs = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "La Lluvia",
      emoji: "🌧️",
      lines: [
        "Gotitas de lluvia van cayendo,",
        "sobre mi ventana repicando.",
        "Las flores beben y los árboles crecen,",
        "¡La lluvia es buena para todos los que la reciben!"
      ]
    },
    {
      key: "poem_kelebek",
      title: "La Mariposa",
      emoji: "🦋",
      lines: [
        "Una mariposa pasa volando,",
        "alas de colores van brillando.",
        "Sobre las flores posa suave,",
        "¡y vuelve a volar, libre y grande!"
      ]
    },
    {
      key: "poem_ay",
      title: "La Luna",
      emoji: "🌙",
      lines: [
        "Luna, lunita en la noche clara,",
        "brillas con luz plateada y rara.",
        "Las estrellas a tu lado bailan,",
        "¡hasta que el nuevo día salga!"
      ]
    },
    {
      key: "poem_bahce",
      title: "Nuestro Jardín",
      emoji: "🌷",
      lines: [
        "Rosas rojas en el jardín,",
        "girasoles hacia el cielo sin fin.",
        "Las abejas zumban felices,",
        "¡y los días pasan con sus voces!"
      ]
    },
    {
      key: "poem_gunes",
      title: "El Sol",
      emoji: "☀️",
      lines: [
        "Sol brillante en el cielo azul,",
        "calientas el mundo con tu luz.",
        "Por las mañanas nos despiertas,",
        "¡y abres las flores más abiertas!"
      ]
    },
    {
      key: "poem_yildiz",
      title: "Las Estrellas",
      emoji: "⭐",
      lines: [
        "Estrellas, estrellas en el cielo,",
        "iluminan la noche con su vuelo.",
        "Pequeñas luces que brillan tanto,",
        "¡llenan la noche de encanto!"
      ]
    }
  ],
  ilkokul: [
    {
      key: "poem_mevsimler",
      title: "Las Estaciones",
      emoji: "🍂",
      lines: [
        "Primavera trae flores nuevas,",
        "verano calienta y brinda sus pruebas.",
        "Otoño pinta de rojo el suelo,",
        "¡invierno cubre todo de hielo!"
      ]
    },
    {
      key: "poem_deniz",
      title: "El Mar",
      emoji: "🌊",
      lines: [
        "Mar azul, mar profundo y grande,",
        "tus olas en la orilla no se cansan.",
        "Peces nadan en tu interior,",
        "¡y llenas el mundo de color!"
      ]
    },
    {
      key: "poem_dost",
      title: "El Amigo",
      emoji: "🤝",
      lines: [
        "Un amigo es un tesoro precioso,",
        "que hace el camino menos dificultoso.",
        "Comparte alegrías y también penas,",
        "¡los amigos son cadenas que encadenan!"
      ]
    },
    {
      key: "poem_kitap",
      title: "El Libro",
      emoji: "📖",
      lines: [
        "Libro abierto, mundo sin fin,",
        "viajes y sueños de principio a fin.",
        "Palabras que vuelan, historias que enseñan,",
        "¡los libros son puertas que siempre se abren!"
      ]
    },
    {
      key: "poem_kar",
      title: "La Nieve",
      emoji: "❄️",
      lines: [
        "Cae la nieve blanca y suave,",
        "cubre los campos con su clave.",
        "Los niños salen a jugar,",
        "¡invierno feliz ha de llegar!"
      ]
    }
  ],
  ortaokul: [
    {
      key: "poem_umut",
      title: "La Esperanza",
      emoji: "🌅",
      lines: [
        "La esperanza es la luz del alma,",
        "que en la oscuridad mantiene la calma.",
        "Aunque el camino sea largo y duro,",
        "la esperanza ilumina el futuro."
      ]
    },
    {
      key: "poem_zaman",
      title: "El Tiempo",
      emoji: "⏳",
      lines: [
        "El tiempo pasa sin detenerse,",
        "cada segundo puede perderse.",
        "Úsalo bien con sabiduría,",
        "¡pues el tiempo da la alegría!"
      ]
    },
    {
      key: "poem_bilim",
      title: "La Ciencia",
      emoji: "🔬",
      lines: [
        "La ciencia abre puertas al mañana,",
        "descubre secretos de la ventana.",
        "Preguntas y respuestas en cadena,",
        "¡la ciencia el mundo entero llena!"
      ]
    },
    {
      key: "poem_adalet",
      title: "La Justicia",
      emoji: "⚖️",
      lines: [
        "La justicia es el pilar del mundo,",
        "sin ella el camino es más profundo.",
        "Trata a todos con equidad,",
        "¡pues la justicia es libertad!"
      ]
    },
    {
      key: "poem_dogа",
      title: "La Naturaleza",
      emoji: "🌳",
      lines: [
        "La naturaleza es nuestro hogar,",
        "debemos cuidarla sin dudar.",
        "Árboles, ríos, montañas y mares,",
        "¡son nuestros más valiosos pilares!"
      ]
    }
  ]
};
const poems = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "Yağmur",
      emoji: "🌧️",
      lines: [
        "Damla damla yağmur,",
        "Düşer toprağa şimdi.",
        "Çiçekler güler,",
        "Kuşlar söyler şarki."
      ]
    },
    {
      key: "poem_kelebek",
      title: "Kelebek",
      emoji: "🦸",
      lines: [
        "Renkli renkli kelebek,",
        "Uçar çiçekten çiçeğe.",
        "Ne güzel kanatları var,",
        "Hepsi farklı renklerde."
      ]
    },
    {
      key: "poem_ay",
      title: "Ay",
      emoji: "🌙",
      lines: [
        "Ay doğdu gökyüzünde,",
        "Parlıyor geceleri.",
        "Yıldızlar etrafında,",
        "Dans eder sevinçle."
      ]
    },
    {
      key: "poem_bahce",
      title: "Bahçemiz",
      emoji: "🌷",
      lines: [
        "Bahçemizde güller açmış,",
        "Pembeler ve kırmızılar.",
        "Anne suluyor her gün,",
        "Ben de yardım ediyorum."
      ]
    },
    {
      key: "poem_kar",
      title: "Kar Yağdı",
      emoji: "❄️",
      lines: [
        "Kar yağdı beyaz beyaz,",
        "Toprakları örttü.",
        "Kuşlar kondu damlarıma,",
        "Tohumlar uyku kurdu."
      ]
    },
    {
      key: "poem_gunes",
      title: "Güneş",
      emoji: "☀️",
      lines: [
        "Güneş doğdu ufuktan,",
        "Altın ışıklar saçtı.",
        "Sabahı mırgıldıyorum ben,",
        "Her gün yeni bir armağan."
      ]
    },
    {
      key: "poem_hayvanlar",
      title: "Hayvanlar",
      emoji: "🐾",
      lines: [
        "Köpek havlar, kedi miyavlar,",
        "İnek möö diye bağırır.",
        "Tavuk gıdıklak gıdaklar,",
        "Her biri bir Şarkı söyler."
      ]
    },
    {
      key: "poem_tatil",
      title: "Tatil Sevinci",
      emoji: "🏖️",
      lines: [
        "Tatil geldi, ne güzel!",
        "Deniz, kum ve güneş.",
        "Arkadaşlarla oyun,",
        "Gülüş dolu günler."
      ]
    },
    {
      key: "poem_renkler",
      title: "Renkler",
      emoji: "🌈",
      lines: [
        "Kırmızı, mavi, sarı,",
        "Yeşilin tüm tonları.",
        "Gökyüzünde gökkusagi,",
        "Rengarenk dünyâmız."
      ]
    },
    {
      key: "poem_gunes",
      title: "Güneş",
      emoji: "☀️",
      lines: [
        "Güneş doğdu sabahleyin,",
        "Işıklandı her yer.",
        "Çiçekler güldü ona,",
        "Çocuklar oynadı neşeyle."
      ]
    },
    {
      key: "poem_deniz",
      title: "Deniz",
      emoji: "🌊",
      lines: [
        "Denizin dalgaları gelir,",
        "Kumları öper hafifçe.",
        "Balıklar yüzer derinde,",
        "Ben de yüzmek isterim."
      ]
    },
    {
      key: "poem_arı",
      title: "Arı",
      emoji: "🐝",
      lines: [
        "Küçük arı vızıldıyor,",
        "Çiçekten bal topluyor.",
        "Çalışkan, sabırlı arı,",
        "Bize bal yapıyor."
      ]
    },
    {
      key: "poem_kar",
      title: "Kar",
      emoji: "❄️",
      lines: [
        "Kar yağıyor, kar yağıyor,",
        "Her yer beyaza boyandı.",
        "Çocuklar koştu dışarı,",
        "Kardan adam yaptılar."
      ]
    },
    {
      key: "poem_anne",
      title: "Annem",
      emoji: "💝",
      lines: [
        "Annem beni çok sever,",
        "Her gece öper alından.",
        "Ben de onu severim,",
        "Dünyadan çok, kalpten."
      ]
    },
    {
      key: "poem_t9_kus",
      title: "Küçük Kuş",
      emoji: "🐦",
      lines: [
        "Küçük kuş dala kondu,",
        "Ötüyor neşeyle.",
        "Sabah güneş doğunca,",
        "Hepimiz uyanır sevinçle."
      ]
    },
    {
      key: "poem_t9_balik",
      title: "Balık",
      emoji: "🐠",
      lines: [
        "Balık yüzer suda,",
        "Pulları parlar durur.",
        "Derinlere dalar,",
        "Sonra yukarı çıkar."
      ]
    },
    {
      key: "poem_t9_yagmur",
      title: "Yağmur Damlası",
      emoji: "🌧️",
      lines: [
        "Yağmur düşer damla damla,",
        "Toprak içer hepsini.",
        "Çiçekler açar sonra,",
        "Doğa güler yeniden."
      ]
    },
    {
      key: "poem_t9_kar",
      title: "Kar Tanesi",
      emoji: "❄️",
      lines: [
        "Kar tanesi düşer usul,",
        "Beyaz örter her yeri.",
        "Çocuklar koşar dışarı,",
        "Kar topu yapar sevinerek."
      ]
    },
    {
      key: "poem_t9_ates",
      title: "Ateş Böceği",
      emoji: "✨",
      lines: [
        "Ateş böceği gece uçar,",
        "Işığını saçar etrafa.",
        "Karanlıkta umut olur,",
        "Küçük ama parlak yanar."
      ]
    },
    {
      key: "poem_kucuk_el",
      title: "Küçük El",
      emoji: "🤚",
      lines: [
        "Küçük elim var benim,",
        "Oynarım onunla ben.",
        "Çizirim, yapıştırırım,",
        "Her şeyi yaparım sen."
      ]
    },
    {
      key: "poem_balik",
      title: "Balık",
      emoji: "🐟",
      lines: [
        "Balık yüzer suda,",
        "Kuyruğu kıpır kıpır.",
        "Renkli pulları var,",
        "Güzel görünür pır pır."
      ]
    },
    {
      key: "poem_gunes",
      title: "Güneş",
      emoji: "☀️",
      lines: [
        "Güneş doğdu sabahtan,",
        "Işınlar saçıyor,",
        "Çiçekler açıyor,",
        "Kuşlar şarkı söylüyor."
      ]
    },
    {
      key: "poem_uyku",
      title: "Uyku Vakti",
      emoji: "😴",
      lines: [
        "Akşam oldu gece de,",
        "Göz kapakları kapandı,",
        "Yıldızlar saydım birer birer,",
        "Uykum geldi dallandı."
      ]
    },
    {
      key: "poem_marti",
      title: "Martı",
      emoji: "🕊️",
      lines: [
        "Martı uçar gökyüzünde,",
        "Dalgalar oynar suyun üstünde,",
        "Ben de uçmak istiyorum,",
        "Rüzgârla dans etmek istiyorum."
      ]
    },
    {
      key: "poem_cicek_bahcesi",
      title: "Çiçek Bahçesi",
      emoji: "🌸",
      lines: [
        "Bahçemizde renk renk çiçek,",
        "Pembe, mor, sarı, beyaz,",
        "Arılar gelir petek,",
        "Sabah açar hepsi bir yaz."
      ]
    },
    {
      key: "poem_tavsan",
      title: "Sevimli Tavşan",
      emoji: "🐰",
      lines: [
        "Uzun kulakları var tavşanın,",
        "Havuç sever her zaman,",
        "Zıplar, hoplar, oynar,",
        "En sevimli dostumdan."
      ]
    },
    {
      key: "poem_gece",
      title: "İyi Geceler",
      emoji: "🌙",
      lines: [
        "Gece geldi karanlık,",
        "Yıldızlar yakar ışık,",
        "Yatağıma giriyorum,",
        "İyi geceler diyorum."
      ]
    },
    {
      key: "poem_parmak",
      title: "On Parmağım",
      emoji: "✋",
      lines: [
        "Bir, iki, üç, dört, beş,",
        "Parmaklar sayar, yapar iş,",
        "Altı, yedi, sekiz, dokuz, on,",
        "On parmak hizmetinde benim."
      ]
    }
  ],
  ilkokul: [
    {
      key: "poem_okul",
      title: "Okul Sevinci",
      emoji: "🏢",
      lines: [
        "Sabah erken kalkarım,",
        "Çantamı hazırlarım.",
        "Okula koşa koşa giderim,",
        "Arkadaşlarımı özledim.",
        "Kitaplar benim dostum,",
        "Öğrenmek en büyük mutluluk."
      ]
    },
    {
      key: "poem_mevsimler",
      title: "Dört Mevsim",
      emoji: "🍂",
      lines: [
        "İlkbaharda çiçekler açar,",
        "Yazın güneş kavurur.",
        "Sonbaharda yapraklar döker,",
        "Kışın kar yağar suskunca.",
        "Dört mevsim, dört güzellik,",
        "Doğanın armağanı bizlere."
      ]
    },
    {
      key: "poem_anadolu",
      title: "Anadolu",
      emoji: "🇹🇷",
      lines: [
        "Anadolu güzel toprak,",
        "Tarih kokar her taşında.",
        "Ata mirası değerli,",
        "Korurüm yürekten.",
        "Dağlar, ovalar, denizler,",
        "Hepsi bizim vatanımız."
      ]
    },
    {
      key: "poem_hedef",
      title: "Hedefim Var",
      emoji: "🎯",
      lines: [
        "Bir hedefim var,",
        "Her gün çalışırım.",
        "Bazen zor olur yol,",
        "Ama vazgeçmem hiç.",
        "Adım adım ilerlerim,",
        "Başaracağım, biliyorum."
      ]
    },
    {
      key: "poem_teknoloji",
      title: "Teknoloji Dostu",
      emoji: "📱",
      lines: [
        "Ekranlara baktım çok,",
        "Ama güneş çağrıyor.",
        "Kitap sayfa sayfa açılır,",
        "Teknoloji bakış açısı sunar.",
        "Aklımı kullansam eğer,",
        "Geleceğim parıldıyor."
      ]
    },
    {
      key: "poem_arkadas",
      title: "Arkadaşlık",
      emoji: "🤝",
      lines: [
        "Arkadaş günler paylaşır,",
        "Zor günde yanımda durur.",
        "Gülüeğim, ağlasam da,",
        "Elini tutar gelir.",
        "Dünyada en büyük servet,",
        "Samimi bir arkadaştır."
      ]
    },
    {
      key: "poem_su",
      title: "Su Gibi",
      emoji: "💧",
      lines: [
        "Su hayatın kaynağıdır,",
        "Her şeyi yeniler.",
        "Dağı delen bir damla,",
        "Sabrın sırrını bilir.",
        "Koru suyu, koru doğayı,",
        "Gelecek nesle emanet."
      ]
    },
    {
      key: "poem_kitap",
      title: "Kitabın Sesi",
      emoji: "📚",
      lines: [
        "Bir kitap açtım bir gece,",
        "Sayfaları konuşmaya başladı.",
        "Tarih anlattı, bilim gösterdi,",
        "Hayal kurmayı öğretti.",
        "Kitap her evin işiği,",
        "Aydınlatan en güzel arkadaş."
      ]
    },
    {
      key: "poem_okul",
      title: "Okul",
      emoji: "🏫",
      lines: [
        "Okul kapısı açıldı,",
        "Sınıfa koştum hemen.",
        "Öğretmenim güldü bana,",
        "Öğrenmek ne güzel şeymiş!"
      ]
    },
    {
      key: "poem_ataturk",
      title: "Atatürk",
      emoji: "🇹🇷",
      lines: [
        "Atatürk kurdu yurdumuzu,",
        "Özgürlük verdi bize.",
        "Bayrağımız dalgalanır,",
        "O'nun anısına her daim."
      ]
    },
    {
      key: "poem_bahar",
      title: "Bahar",
      emoji: "🌸",
      lines: [
        "Bahar geldi, karlar eridi,",
        "Çiçekler açtı her yerde.",
        "Kuşlar döndü yuvaya,",
        "Doğa uyandı yeniden."
      ]
    },
    {
      key: "poem_dost",
      title: "Dostluk",
      emoji: "🤝",
      lines: [
        "Dost olan paylaşır,",
        "Zor günde yanında durur.",
        "Gülen yüz, sıcak el,",
        "Dostluk en büyük hazinedir."
      ]
    },
    {
      key: "poem_nehir",
      title: "Nehir",
      emoji: "🏞️",
      lines: [
        "Nehir akar durur,",
        "Taşları aşar yolunda.",
        "Engel tanımaz hiçbir,",
        "Denize varır er ya da geç."
      ]
    },
    {
      key: "poem_t9_mevsim",
      title: "Mevsimler",
      emoji: "🌸",
      lines: [
        "İlkbaharda çiçek açar,",
        "Yazın güneş kavurur.",
        "Sonbaharda yaprak döker,",
        "Kışın kar sustururur."
      ]
    },
    {
      key: "poem_t9_okuma",
      title: "Okuma Sevinci",
      emoji: "📖",
      lines: [
        "Kitap açtım sayfasını,",
        "Kelimeler dans eder.",
        "Her satırda yeni dünya,",
        "Hayal gücüm kanatlanır."
      ]
    },
    {
      key: "poem_t9_toprak",
      title: "Toprak",
      emoji: "🌍",
      lines: [
        "Toprak verir meyve bize,",
        "Eker biçeriz onu.",
        "Onun sahibi değiliz,",
        "O bizim annemizdir."
      ]
    },
    {
      key: "poem_t9_kalem",
      title: "Kalemim",
      emoji: "✏️",
      lines: [
        "Kalemim küçük bir sihir,",
        "Kağıda düşünce yazar.",
        "Bir çizgiyle dünya doğar,",
        "Bir kelimeyle rüya yaşar."
      ]
    },
    {
      key: "poem_t9_mavi",
      title: "Mavi Okyanus",
      emoji: "🌊",
      lines: [
        "Okyanusun mavi suları,",
        "Uzak diyarlara uzanır.",
        "Dalgalar söyler şarkılar,",
        "Kulaklarımda hâlâ çınlar."
      ]
    },
    {
      key: "poem_mevsimler",
      title: "Mevsimler",
      emoji: "🍁",
      lines: [
        "İlkbaharda çiçekler açar,",
        "Yazın güneş yakar,",
        "Sonbaharda yaprak döker,",
        "Kışın kar yağar."
      ]
    },
    {
      key: "poem_okul",
      title: "Okul Sevinci",
      emoji: "🏫",
      lines: [
        "Sabah erkenden kalkarım,",
        "Çantamı omzuma takarım.",
        "Koşarak okula giderim,",
        "Arkadaşlarla gülerim."
      ]
    },
    {
      key: "poem_aile",
      title: "Ailem",
      emoji: "👨‍👩‍👧",
      lines: [
        "Annem benim güneşim,",
        "Babam kaya gibi sağlam.",
        "Kardeşim can arkadaşım,",
        "Ailem her şeyim tamam."
      ]
    },
    {
      key: "poem_doga",
      title: "Doğa",
      emoji: "🌿",
      lines: [
        "Yeşil ormanlar, mavi göl,",
        "Kuşların şarkısı eşlik eder yola.",
        "Çiçekler açar, böcekler uçar,",
        "Doğa en güzel rüya."
      ]
    },
    {
      key: "poem_kutuphanede",
      title: "Kütüphanede",
      emoji: "📚",
      lines: [
        "Kütüphaneye girdim sessizce,",
        "Satırlar konuştu bana,",
        "Yazar yaşadı yüz yıl önce,",
        "Ama sesi geldi buraya."
      ]
    },
    {
      key: "poem_turkiye",
      title: "Türkiye'm",
      emoji: "🇹🇷",
      lines: [
        "Dağlarında kar, ovalarında buğday,",
        "Denizlerinde balık, tarihinde canlı,",
        "Her köşesinde bir masal var,",
        "Türkiye'm, seni çok seviyorum."
      ]
    },
    {
      key: "poem_karinca",
      title: "Karınca",
      emoji: "🐜",
      lines: [
        "Küçücük karınca çalışır durmaz,",
        "Yorulmaz, şikâyet etmez, susmaz,",
        "En ağır yükü taşır,",
        "Çünkü bilir: emek karşılıksız kalmaz."
      ]
    },
    {
      key: "poem_sabah",
      title: "Sabah Oldu",
      emoji: "🌅",
      lines: [
        "Sabah güneş doğdu dağdan,",
        "Kuşlar uyandı daldan,",
        "Ben de kalktım sevinçle,",
        "Yeni bir güne yeni hevesle."
      ]
    },
    {
      key: "poem_matematik",
      title: "Sayıların Dansı",
      emoji: "🔢",
      lines: [
        "Bir artı bir iki,",
        "İki artı iki dört,",
        "Sayılar dans eder,",
        "Matematiğe doydum kört."
      ]
    }
  ],
  ortaokul: [
    {
      key: "poem_vatan",
      title: "Vatan Sevgisi",
      emoji: "🏔️",
      lines: [
        "Bu topraklar atalardan kalma,",
        "Her karışı kandan geçilmiş.",
        "Dağlar şahit olmuş tarihe,",
        "Nehirler taşımış acıları.",
        "Biz bu mirasın sahipleri,",
        "Sonsuza dek koruyacağız.",
        "Vatan sevgisi gönüldedir,",
        "Canımızdan değerlidir."
      ]
    },
    {
      key: "poem_bilim",
      title: "Bilimin Işığı",
      emoji: "🔬",
      lines: [
        "Karanlıkta bir ışık yakılır,",
        "Merakla sorulan bir soru.",
        "Deney yapılır, düşünülür,",
        "Cevap bulunur yavaş yavaş.",
        "Bilim budur: aramak, bulmak,",
        "Dünyayı daha iyi anlamak.",
        "Einstein de böyle başladı,",
        "Sen de yapabilirsin!"
      ]
    },
    {
      key: "poem_gelecek",
      title: "Geleceğe Mektup",
      emoji: "✉️",
      lines: [
        "Sevgili gelecekteki ben,",
        "Bugün güzel hayaller kuruyorum.",
        "Doğayı seviyorum, insanları da,",
        "Daha iyi bir dünya istiyorum.",
        "Çalış, üret, sev, paylaş,",
        "Mutlu olmayı unutma sakın.",
        "Geçmişteki sen seni izliyor,",
        "Gurur duyacak bir hayat yaşa."
      ]
    },
    {
      key: "poem_ozgurluk",
      title: "Özgürlük",
      emoji: "🕊️",
      lines: [
        "Özgürlük bir kuş gibidir,",
        "Kanatlanmak ister gökyüzüne.",
        "Zincirlenmez, hapsolmaz,",
        "Açık alanlarda koşar.",
        "İnsanlar da böyle olmalı,",
        "Düşünmek, konuşmak, var olmak.",
        "Özgürlük en büyük hediyedir,",
        "Korumak gerekir her daim."
      ]
    },
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman bir ırmak gibi akar,",
        "Geri dönmez hiçbir damlası.",
        "Her an bir hediyedir sana,",
        "Boşa harcama şimdişerden.",
        "Sevdiklerinle geçir günleri,",
        "İyi işler yap, iz bırak.",
        "Zaman geçer, anılar kalır,",
        "Kalbinçe ne ekersen biçersin."
      ]
    },
    {
      key: "poem_doga",
      title: "Doğanın Sesi",
      emoji: "🌿",
      lines: [
        "Orman konuşur yapraklarla,",
        "Rüzgar taşır gizli sırları.",
        "Nehir anlatır taşlara,",
        "Güneş boyar ufukları.",
        "Biz de doğanın parçasıyız,",
        "Onu kirletmek kendimizi kirletmek.",
        "Koru, sev, yaşat doğayı,",
        "Gelecek nesle bırak safızı."
      ]
    },
    {
      key: "poem_adalet",
      title: "Adalet",
      emoji: "⚖️",
      lines: [
        "Adalet gözleri kapalı tartışır,",
        "Zülfé düşmez hiçbir tarafına.",
        "Güçlü değil, haklı olan kazanır,",
        "Bu dünyanın en büyük temeli.",
        "Savun mazlumu, dik dur zulme,",
        "Susma gördüğünde haksızlığı.",
        "Bir toplumun şeref taşı adalettir,",
        "Onsuz yıkılır her yapı."
      ]
    },
    {
      key: "poem_umut",
      title: "Umut",
      emoji: "🌟",
      lines: [
        "En karanlık gecede bile,",
        "Bir yıldız ışlığavık çıkar.",
        "Umut budur: vazgeçmemek,",
        "Fırtınaya göğüs germek.",
        "En derin çukurdan çıkılır,",
        "Güneşe dönülür yeniden.",
        "Umut kalbüe yakıt ol,",
        "Söndürme hiçbir zaman."
      ]
    },
    {
      key: "poem_yeni_o1",
      title: "Bilim",
      emoji: "🔬",
      lines: [
        "Bilim ışığı söndürülmez,",
        "Karanlığa meydan okur.",
        "Her soru bir kapı açar,",
        "Her cevap yeni sorular doğurur.",
        "Meraklı zihinde sonsuz evren,",
        "Keşfedilmeyi bekler sessizce."
      ]
    },
    {
      key: "poem_yeni_o2",
      title: "Gençlik",
      emoji: "🌟",
      lines: [
        "Gençlik ateş, gençlik güç,",
        "Geleceği inşa eder bu gençler.",
        "Hayal kurmaktan korkmayın,",
        "Hayaller gerçeğin tohumudur.",
        "Kendinize inanın her zaman,",
        "Çünkü dünya sizinle değişir."
      ]
    },
    {
      key: "poem_yeni_o3",
      title: "Türkiye",
      emoji: "🗺️",
      lines: [
        "Anadolu'nun kalbinden geçer,",
        "Binlerce yıllık tarih sesi.",
        "Her taşında bir destan,",
        "Her nehirde bir şiir.",
        "Bu topraklar bizim mirasımız,",
        "Sevgiyle korumalıyız."
      ]
    },
    {
      key: "poem_yeni_o4",
      title: "Teknoloji",
      emoji: "💻",
      lines: [
        "Dijital çağda koşuyoruz,",
        "Veriler akar nehir gibi.",
        "Ama insan kalbi,",
        "Hiçbir kodla yazılmaz.",
        "Teknolojiyi insan için kullan,",
        "Anlam verir her piksele."
      ]
    },
    {
      key: "poem_yeni_o5",
      title: "Çevre",
      emoji: "🌍",
      lines: [
        "Dünya bizim evimiz,",
        "Kirletmeyelim bu güzelliği.",
        "Her ağaç bir nefes,",
        "Her damla bir hayat.",
        "Gelecek nesillere bırakalım,",
        "Temiz, yeşil, güzel bir dünya."
      ]
    },
    {
      key: "poem_t9_sehir",
      title: "Şehrin Sesi",
      emoji: "🏙️",
      lines: [
        "Şehir uyumaz geceleri,",
        "Işıklar yanar sönmeden.",
        "Her pencerede bir hikaye,",
        "Her kalpte bir özlem gizli.",
        "Ben de bu kalabalıkta,",
        "Sessizce düşünürüm."
      ]
    },
    {
      key: "poem_t9_hafiza",
      title: "Hafıza",
      emoji: "🧩",
      lines: [
        "Geçmiş bir sis perdesidir,",
        "Kimi şeffaf, kimi koyu.",
        "Hatırlamak acı verir bazen,",
        "Ama unutmak daha zor.",
        "Hafıza kalkanımız,",
        "Ve en kırılgan yerimiz."
      ]
    },
    {
      key: "poem_t9_insan",
      title: "İnsan Olmak",
      emoji: "🌟",
      lines: [
        "İnsan olmak güç işi,",
        "Hem güçlü hem kırılgan.",
        "Aşk, öfke, sevinç, acı,",
        "Hepsi bir arada yaşar.",
        "Bu çelişkiler içinde,",
        "Anlam ararız durmadan."
      ]
    },
    {
      key: "poem_t9_degisim",
      title: "Değişim",
      emoji: "🔄",
      lines: [
        "Her şey değişir zamanla,",
        "Nehir akar, taş yıpranır.",
        "Biz de değişiriz sessizce,",
        "Fark etmeden, içten içe.",
        "Değişim hayatın kendisidir,",
        "Direnmek su götürmez."
      ]
    },
    {
      key: "poem_t9_bilim2",
      title: "Bilimin Işığı",
      emoji: "🔭",
      lines: [
        "Bir deney masasında oturur,",
        "Bilim insanı sabırsız.",
        "Soruların peşinde koşar,",
        "Cevaplar ışığa kavuşur.",
        "Her keşif yeni kapı açar,",
        "Evren sonsuz, merak da öyle."
      ]
    },
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman akar durdurulamaz,",
        "Her an geçip gider,",
        "Yarın dünden güzel olmak için,",
        "Bugün en iyi ol!"
      ]
    },
    {
      key: "poem_umut",
      title: "Umut",
      emoji: "🌟",
      lines: [
        "Karanlıkta bile bir ışık var,",
        "Umut asla sönmez,",
        "Düşsen de kalk, bak ileriye,",
        "Güzel günler bitmez."
      ]
    },
    {
      key: "poem_vatan",
      title: "Vatan",
      emoji: "🇹🇷",
      lines: [
        "Bu topraklar atalardan emanet,",
        "Koru, sahip çık ona,",
        "Bayrak dalgalanır özgürce,",
        "Vatan sevgisi en büyük dua."
      ]
    },
    {
      key: "poem_bilim",
      title: "Bilim",
      emoji: "🔬",
      lines: [
        "Merak et, sor, araştır,",
        "Dünya sırlarla dolu,",
        "Bilim kapıyı açar sana,",
        "Geleceğin en büyük yolu."
      ]
    },
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman nehir gibi akar,",
        "Geçmişi tutar değil, bırakır,",
        "Her sabah yeni bir sayfa açar,",
        "Ama geçmişi yazan biri kalır."
      ]
    },
    {
      key: "poem_ozgurluk",
      title: "Özgürlük",
      emoji: "🕊️",
      lines: [
        "Özgürlük rüzgâr gibidir,",
        "Görülmez ama hissedilir,",
        "Zincirler kırılır bir gün,",
        "Yürekler umutla beslenir."
      ]
    },
    {
      key: "poem_anadolu",
      title: "Anadolu Toprakları",
      emoji: "🌾",
      lines: [
        "Anadolu binlerce yıldır yaşar,",
        "Her taşında bir uygarlık saklı,",
        "Hitit'ten Selçuklu'ya uzanır,",
        "Bu toprak tarihe tanıklık eder."
      ]
    },
    {
      key: "poem_dugme",
      title: "Işığı Yak",
      emoji: "💡",
      lines: [
        "Bir fikir doğar karanlıkta,",
        "Sönük bir mum gibi titrer,",
        "Düşünen eller kavrar onu,",
        "Aydınlık bütün dünyaya yeter."
      ]
    },
    {
      key: "poem_deniz_cagrisii",
      title: "Denizin Çağrısı",
      emoji: "🌊",
      lines: [
        "Deniz çağırır uzaktan beni,",
        "Dalgalar yıkar eski derdi,",
        "Ufukta kaybolur gemi,",
        "Ama rüzgâr taşır özgürlüğü."
      ]
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
function PoemsPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const activePoems = lang === "en" ? poemsEn : lang === "es" ? poemsEs : poems;
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "poems");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [speakingId, setSpeakingId] = reactExports.useState(null);
  const lookedUpWords = reactExports.useRef(/* @__PURE__ */ new Set());
  const [favKeys, setFavKeys] = reactExports.useState(() => {
    if (!profile) return /* @__PURE__ */ new Set();
    const all = Object.values(poems).flat();
    return new Set(
      all.filter((p) => isFavorite(profile.studentNumber, "poem", p.key)).map((p) => p.key)
    );
  });
  function handleToggleFav(p) {
    if (!profile) return;
    const added = toggleFavorite(profile.studentNumber, {
      type: "poem",
      key: p.key,
      title: p.title,
      emoji: p.emoji
    });
    setFavKeys((prev) => {
      const next = new Set(prev);
      if (added) next.add(p.key);
      else next.delete(p.key);
      return next;
    });
  }
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
      utt.lang = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const filteredPoems = activePoems[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.lines.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleMemorized = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 8);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-violet-500 to-purple-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "poems.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: "← Geri"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🎭 ",
      t("poems_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "poems.tab",
        onClick: () => setLevel(t2.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === t2.key ? "bg-white text-violet-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: t2.label
      },
      t2.key
    )) }),
    (() => {
      const total = activePoems[level].length;
      const done = activePoems[level].filter(
        (p) => readTopics.includes(p.key)
      ).length;
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🎭" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "Bu seviyedeki ilerleme" }),
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
      ] });
    })(),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        "data-ocid": "poems.search_input",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredPoems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: "Sonuç bulunamadı 🔍" }) : filteredPoems.map((p) => {
      const isDone = readTopics.includes(p.key);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isDone ? "border-2 border-yellow-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: p.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg flex-1", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleToggleFav(p),
                  className: "text-xl hover:scale-125 transition-transform",
                  title: favKeys.has(p.key) ? "Favoriden çıkar" : "Favorilere ekle",
                  children: favKeys.has(p.key) ? "⭐" : "☆"
                }
              ),
              isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 text-xl", children: "✓" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: p.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-white/90 text-sm italic leading-relaxed",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  WordDefinitionTooltip,
                  {
                    text: line,
                    lookedUpWords: lookedUpWords.current,
                    onWordLookup: (word) => {
                      lookedUpWords.current.add(word);
                      if (profile) updatePoints(profile.studentNumber, 5);
                    }
                  }
                )
              },
              line
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "poems.listen_button",
                onClick: () => handleSpeak(p.key, p.lines.join(" ")),
                className: "bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2",
                children: speakingId === p.key ? `⏹ ${t("stop")}` : `🔊 ${t("listen")}`
              }
            ),
            !isDone && profile && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "poems.read_button",
                onClick: () => handleMemorized(p.key),
                className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                children: "🎤 Ezberledim! +8 puan"
              }
            ),
            isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 text-xs font-bold", children: "⭐ Ezberlendi (+8 puan kazanıldı)" })
          ]
        },
        p.key
      );
    }) })
  ] }) });
}
export {
  PoemsPage as default
};
