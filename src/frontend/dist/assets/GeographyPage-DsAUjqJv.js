import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, f as updatePoints, i as incrementDailyContentRead, m as markTopicRead } from "./index-CvFhBtrS.js";
import { F as FlashcardMode } from "./FlashcardMode-CeZb-Tjm.js";
import "./proxy-CuAHWZnt.js";
const geoDataTr = {
  okul_oncesi: [
    {
      key: "geo_dunya",
      emoji: "🌍",
      title: "Dünya",
      info: "Dünya üzerinde yaşadığımız gezegendir. Mavi ve yeşil renklerdedir.",
      fact: "Dünya'nın %71'i su ile kaplıdır!"
    },
    {
      key: "geo_turkiye",
      emoji: "🇹🇷",
      title: "Türkiye",
      info: "Türkiye, Asya ve Avrupa'da yer alan güzel bir ülkedir.",
      fact: "Türkiye'nin başkenti Ankara'dır."
    },
    {
      key: "geo_gunes",
      emoji: "☀️",
      title: "Güneş",
      info: "Güneş, Dünya'ya ışık ve sıcaklık veren yıldızdır.",
      fact: "Güneş, Dünya'dan 150 milyon km uzaktadır."
    },
    {
      key: "geo_deniz",
      emoji: "🌊",
      title: "Deniz",
      info: "Denizler tuzlu suyla dolu büyük alanlardır.",
      fact: "Dünya'nın en derin denizi Pasifik Okyanusu'dur."
    },
    {
      key: "geo_dag",
      emoji: "⛰️",
      title: "Dağ",
      info: "Dağlar, çok yüksek arazi şekilleridir. Karla kaplı olabilirler.",
      fact: "Dünyanın en yüksek dağı Everest'tir (8848 m)."
    },
    {
      key: "geo_orman",
      emoji: "🌲",
      title: "Orman",
      info: "Ormanlar, birçok hayvanın ve bitkinin yaşadığı yerlerdir.",
      fact: "Amazon ormanı dünyanın en büyük ormanıdır."
    },
    {
      key: "geo_cöl",
      emoji: "🏜️",
      title: "Çöl",
      info: "Çöller, çok az yağmur alan kuru ve sıcak yerlerdir.",
      fact: "Sahra Çölü, dünyanın en büyük sıcak çölüdür."
    },
    {
      key: "geo_nehir",
      emoji: "🏞️",
      title: "Nehir",
      info: "Nehirler, karada akan büyük su yollarıdır.",
      fact: "Nil Nehri, dünyanın en uzun nehridir."
    }
  ],
  ilkokul: [
    {
      key: "geo_kitalar",
      emoji: "🗺️",
      title: "Kıtalar",
      info: "Dünya 7 kıtaya ayrılır: Asya, Avrupa, Afrika, Amerika (K-G), Avustralya, Antarktika.",
      fact: "En büyük kıta Asya, en küçüğü Avustralya'dır."
    },
    {
      key: "geo_baskentler",
      emoji: "🏛️",
      title: "Başkentler",
      info: "Her ülkenin bir başkenti vardır. Türkiye'nin başkenti Ankara, Fransa'nınki Paris'tir.",
      fact: "Dünyada 195 bağımsız ülke vardır."
    },
    {
      key: "geo_avrupa",
      emoji: "🇪🇺",
      title: "Avrupa",
      info: "Avrupa, birçok ülkeden oluşan küçük ama kalabalık bir kıtadır.",
      fact: "Avrupa'nın en büyük ülkesi Rusya'dır."
    },
    {
      key: "geo_asya",
      emoji: "🌏",
      title: "Asya",
      info: "Asya, dünyanın en büyük kıtasıdır. Türkiye de Asya'dadır.",
      fact: "Asya'da dünya nüfusunun %60'ı yaşar."
    },
    {
      key: "geo_afrika",
      emoji: "🌍",
      title: "Afrika",
      info: "Afrika, sıcak iklimi ve zengin yaban hayatıyla bilinir.",
      fact: "Afrika'da 54 ülke bulunmaktadır."
    },
    {
      key: "geo_okyanus",
      emoji: "🌊",
      title: "Okyanuslar",
      info: "Dünyada 5 büyük okyanus vardır: Pasifik, Atlantik, Hint, Arktik ve Antarktika.",
      fact: "Pasifik Okyanusu, tüm kıtaları sığdırabilecek kadar büyüktür."
    },
    {
      key: "geo_iklim",
      emoji: "🌡️",
      title: "İklim Kuşakları",
      info: "Dünya tropikal, ılıman ve kutup olmak üzere iklim kuşaklarına ayrılır.",
      fact: "Türkiye ılıman iklim kuşağında yer alır."
    },
    {
      key: "geo_nüfus",
      emoji: "👥",
      title: "Dünya Nüfusu",
      info: "Dünyada 8 milyardan fazla insan yaşamaktadır.",
      fact: "En kalabalık ülke Hindistan'dır."
    },
    {
      key: "geo_dil",
      emoji: "🗣️",
      title: "Dünya Dilleri",
      info: "Dünyada 7000'den fazla dil konuşulmaktadır.",
      fact: "En çok konuşulan dil Mandarin Çincesidir."
    }
  ],
  ortaokul: [
    {
      key: "geo_tektoni",
      emoji: "🔄",
      title: "Levha Tektoniği",
      info: "Yeryüzü levhalar üzerinde durmadan hareket eder. Bu hareket depremlere ve volkanlara neden olur.",
      fact: "Hint-Avrasya levhası çarpışması Himalayaları oluşturdu."
    },
    {
      key: "geo_jeografi",
      emoji: "📐",
      title: "Enlem ve Boylam",
      info: "Herhangi bir yerin konumunu belirlemek için enlem ve boylam kullanılır.",
      fact: "0° enlem çizgisine Ekvator denir."
    },
    {
      key: "geo_iklimbölge",
      emoji: "🌿",
      title: "İklim Bölgeleri",
      info: "Dünya; tropikal, kurak, ılıman, karasal ve kutup iklim bölgelerine ayrılır.",
      fact: "Çöller sadece sıcak değil, soğuk da olabilir."
    },
    {
      key: "geo_nüfusyoğ",
      emoji: "🏙️",
      title: "Nüfus Yoğunluğu",
      info: "Bazı bölgelerde insanlar yoğun yaşarken bazı yerlerde seyrek yaşar.",
      fact: "Monaco dünyanın en yoğun nüfuslu ülkesidir."
    },
    {
      key: "geo_dogalkayn",
      emoji: "⛏️",
      title: "Doğal Kaynaklar",
      info: "Petrol, su, orman ve madenler birer doğal kaynaktır. Bunları korumak önemlidir.",
      fact: "Türkiye bor madeni rezervinde dünya lideridir."
    },
    {
      key: "geo_kureselis",
      emoji: "🌡️",
      title: "Küresel Isınma",
      info: "Sanayi ve araçlardan çıkan gazlar atmosferi ısıtmakta, iklimi değiştirmektedir.",
      fact: "Son 100 yılda dünya sıcaklığı ortalama 1.1°C arttı."
    },
    {
      key: "geo_göç",
      emoji: "✈️",
      title: "Göç",
      info: "İnsanlar iş, güvenlik veya iklim nedenlerle başka yerlere göç ederler.",
      fact: "Türkiye, dünyanın en fazla mülteci barındıran ülkesidir."
    },
    {
      key: "geo_şehir",
      emoji: "🌆",
      title: "Megakentler",
      info: "Nüfusu 10 milyonu aşan şehirlere megakent denir.",
      fact: "Tokyo, dünyada yaklaşık 37 milyon nüfusuyla en büyük megakenttir."
    },
    {
      key: "geo_ekosisteml",
      emoji: "🦁",
      title: "Ekosistemler",
      info: "Ormanlar, mercanlar, çöller ve tundralar birer ekosistemdir.",
      fact: "Mercan resifleri okyanus canlılarının %25'ine ev sahipliği yapar."
    },
    {
      key: "geo_harita",
      emoji: "🗺️",
      title: "Harita Okuması",
      info: "Haritalar gerçek dünyayı küçülterek gösterir. Ölçek ve yönler çok önemlidir.",
      fact: "İlk bilinen harita M.Ö. 600'de Babilliler tarafından yapıldı."
    }
  ]
};
const geoDataEn = {
  okul_oncesi: [
    {
      key: "geo_dunya",
      emoji: "🌍",
      title: "Earth",
      info: "Earth is the planet we live on. It appears blue and green from space.",
      fact: "71% of Earth is covered by water!"
    },
    {
      key: "geo_turkiye",
      emoji: "🇹🇷",
      title: "Turkey",
      info: "Turkey is a beautiful country located in both Asia and Europe.",
      fact: "The capital of Turkey is Ankara."
    },
    {
      key: "geo_gunes",
      emoji: "☀️",
      title: "Sun",
      info: "The Sun is the star that gives light and warmth to Earth.",
      fact: "The Sun is 150 million km away from Earth."
    },
    {
      key: "geo_deniz",
      emoji: "🌊",
      title: "Sea",
      info: "Seas are large areas filled with salty water.",
      fact: "The deepest sea in the world is the Pacific Ocean."
    },
    {
      key: "geo_dag",
      emoji: "⛰️",
      title: "Mountain",
      info: "Mountains are very high landforms. They can be covered with snow.",
      fact: "The highest mountain in the world is Everest (8848 m)."
    },
    {
      key: "geo_orman",
      emoji: "🌲",
      title: "Forest",
      info: "Forests are places where many animals and plants live.",
      fact: "The Amazon rainforest is the largest forest in the world."
    },
    {
      key: "geo_cöl",
      emoji: "🏜️",
      title: "Desert",
      info: "Deserts are dry and hot places that receive very little rain.",
      fact: "The Sahara Desert is the largest hot desert in the world."
    },
    {
      key: "geo_nehir",
      emoji: "🏞️",
      title: "River",
      info: "Rivers are large waterways that flow across land.",
      fact: "The Nile River is the longest river in the world."
    }
  ],
  ilkokul: [
    {
      key: "geo_kitalar",
      emoji: "🗺️",
      title: "Continents",
      info: "The world is divided into 7 continents: Asia, Europe, Africa, Americas (N-S), Australia, Antarctica.",
      fact: "The largest continent is Asia, the smallest is Australia."
    },
    {
      key: "geo_baskentler",
      emoji: "🏛️",
      title: "Capitals",
      info: "Every country has a capital city. Turkey's capital is Ankara, France's is Paris.",
      fact: "There are 195 independent countries in the world."
    },
    {
      key: "geo_avrupa",
      emoji: "🇪🇺",
      title: "Europe",
      info: "Europe is a small but densely populated continent made up of many countries.",
      fact: "The largest country in Europe is Russia."
    },
    {
      key: "geo_asya",
      emoji: "🌏",
      title: "Asia",
      info: "Asia is the largest continent in the world. Turkey is also in Asia.",
      fact: "60% of the world's population lives in Asia."
    },
    {
      key: "geo_afrika",
      emoji: "🌍",
      title: "Africa",
      info: "Africa is known for its hot climate and rich wildlife.",
      fact: "There are 54 countries in Africa."
    },
    {
      key: "geo_okyanus",
      emoji: "🌊",
      title: "Oceans",
      info: "There are 5 major oceans in the world: Pacific, Atlantic, Indian, Arctic, and Antarctic.",
      fact: "The Pacific Ocean is large enough to fit all the continents inside it."
    },
    {
      key: "geo_iklim",
      emoji: "🌡️",
      title: "Climate Zones",
      info: "The world is divided into tropical, temperate, and polar climate zones.",
      fact: "Turkey is located in the temperate climate zone."
    },
    {
      key: "geo_nüfus",
      emoji: "👥",
      title: "World Population",
      info: "More than 8 billion people live in the world.",
      fact: "The most populous country is India."
    },
    {
      key: "geo_dil",
      emoji: "🗣️",
      title: "World Languages",
      info: "More than 7,000 languages are spoken in the world.",
      fact: "The most spoken language is Mandarin Chinese."
    }
  ],
  ortaokul: [
    {
      key: "geo_tektoni",
      emoji: "🔄",
      title: "Plate Tectonics",
      info: "Earth's surface constantly moves on plates. This movement causes earthquakes and volcanoes.",
      fact: "The collision of the Indo-Eurasian plate formed the Himalayas."
    },
    {
      key: "geo_jeografi",
      emoji: "📐",
      title: "Latitude & Longitude",
      info: "Latitude and longitude are used to determine the location of any place.",
      fact: "The 0° latitude line is called the Equator."
    },
    {
      key: "geo_iklimbölge",
      emoji: "🌿",
      title: "Climate Regions",
      info: "The world is divided into tropical, arid, temperate, continental, and polar climate regions.",
      fact: "Deserts can be not only hot, but also cold."
    },
    {
      key: "geo_nüfusyoğ",
      emoji: "🏙️",
      title: "Population Density",
      info: "Some areas are densely populated while others are sparsely populated.",
      fact: "Monaco is the most densely populated country in the world."
    },
    {
      key: "geo_dogalkayn",
      emoji: "⛏️",
      title: "Natural Resources",
      info: "Oil, water, forests, and minerals are natural resources. Protecting them is important.",
      fact: "Turkey is the world leader in boron mineral reserves."
    },
    {
      key: "geo_kureselis",
      emoji: "🌡️",
      title: "Global Warming",
      info: "Gases from industry and vehicles are heating the atmosphere and changing the climate.",
      fact: "In the last 100 years, the world temperature has increased by an average of 1.1°C."
    },
    {
      key: "geo_göç",
      emoji: "✈️",
      title: "Migration",
      info: "People migrate to other places for work, security, or climate reasons.",
      fact: "Turkey hosts the largest number of refugees in the world."
    },
    {
      key: "geo_şehir",
      emoji: "🌆",
      title: "Megacities",
      info: "Cities with a population exceeding 10 million are called megacities.",
      fact: "Tokyo is the largest megacity in the world with approximately 37 million people."
    },
    {
      key: "geo_ekosisteml",
      emoji: "🦁",
      title: "Ecosystems",
      info: "Forests, corals, deserts, and tundras are ecosystems.",
      fact: "Coral reefs are home to 25% of ocean species."
    },
    {
      key: "geo_harita",
      emoji: "🗺️",
      title: "Map Reading",
      info: "Maps show the real world in a smaller scale. Scale and directions are very important.",
      fact: "The first known map was made by the Babylonians around 600 BC."
    }
  ]
};
const geoDataEs = {
  okul_oncesi: [
    {
      key: "geo_dunya",
      emoji: "🌍",
      title: "La Tierra",
      info: "La Tierra es el planeta en el que vivimos. Se ve azul y verde desde el espacio.",
      fact: "¡El 71% de la Tierra está cubierto de agua!"
    },
    {
      key: "geo_turkiye",
      emoji: "🇹🇷",
      title: "Turquía",
      info: "Turquía es un hermoso país ubicado tanto en Asia como en Europa.",
      fact: "La capital de Turquía es Ankara."
    },
    {
      key: "geo_gunes",
      emoji: "☀️",
      title: "El Sol",
      info: "El Sol es la estrella que da luz y calor a la Tierra.",
      fact: "El Sol está a 150 millones de km de la Tierra."
    },
    {
      key: "geo_deniz",
      emoji: "🌊",
      title: "El Mar",
      info: "Los mares son grandes extensiones de agua salada.",
      fact: "El océano más profundo del mundo es el Océano Pacífico."
    },
    {
      key: "geo_dag",
      emoji: "⛰️",
      title: "Montaña",
      info: "Las montañas son formas del terreno muy elevadas. Pueden estar cubiertas de nieve.",
      fact: "La montaña más alta del mundo es el Everest (8848 m)."
    },
    {
      key: "geo_orman",
      emoji: "🌲",
      title: "Bosque",
      info: "Los bosques son lugares donde viven muchos animales y plantas.",
      fact: "La selva amazónica es el bosque más grande del mundo."
    },
    {
      key: "geo_cöl",
      emoji: "🏜️",
      title: "Desierto",
      info: "Los desiertos son lugares secos y calurosos que reciben muy poca lluvia.",
      fact: "El Desierto del Sahara es el desierto caliente más grande del mundo."
    },
    {
      key: "geo_nehir",
      emoji: "🏞️",
      title: "Río",
      info: "Los ríos son grandes vías fluviales que fluyen por la tierra.",
      fact: "El Río Nilo es el río más largo del mundo."
    }
  ],
  ilkokul: [
    {
      key: "geo_kitalar",
      emoji: "🗺️",
      title: "Continentes",
      info: "El mundo está dividido en 7 continentes: Asia, Europa, África, América (N-S), Australia, Antártida.",
      fact: "El continente más grande es Asia, el más pequeño es Australia."
    },
    {
      key: "geo_baskentler",
      emoji: "🏛️",
      title: "Capitales",
      info: "Cada país tiene una capital. La capital de Turquía es Ankara, la de Francia es París.",
      fact: "Hay 195 países independientes en el mundo."
    },
    {
      key: "geo_avrupa",
      emoji: "🇪🇺",
      title: "Europa",
      info: "Europa es un continente pequeño pero densamente poblado formado por muchos países.",
      fact: "El país más grande de Europa es Rusia."
    },
    {
      key: "geo_asya",
      emoji: "🌏",
      title: "Asia",
      info: "Asia es el continente más grande del mundo. Turquía también está en Asia.",
      fact: "El 60% de la población mundial vive en Asia."
    },
    {
      key: "geo_afrika",
      emoji: "🌍",
      title: "África",
      info: "África es conocida por su clima cálido y su rica vida silvestre.",
      fact: "En África hay 54 países."
    },
    {
      key: "geo_okyanus",
      emoji: "🌊",
      title: "Océanos",
      info: "Hay 5 océanos principales: Pacífico, Atlántico, Índico, Ártico y Antártico.",
      fact: "El Océano Pacífico es lo suficientemente grande como para contener todos los continentes."
    },
    {
      key: "geo_iklim",
      emoji: "🌡️",
      title: "Zonas Climáticas",
      info: "El mundo se divide en zonas climáticas tropical, templada y polar.",
      fact: "Turquía se encuentra en la zona climática templada."
    },
    {
      key: "geo_nüfus",
      emoji: "👥",
      title: "Población Mundial",
      info: "Más de 8 mil millones de personas viven en el mundo.",
      fact: "El país más poblado es India."
    },
    {
      key: "geo_dil",
      emoji: "🗣️",
      title: "Idiomas del Mundo",
      info: "Se hablan más de 7.000 idiomas en el mundo.",
      fact: "El idioma más hablado es el chino mandarín."
    }
  ],
  ortaokul: [
    {
      key: "geo_tektoni",
      emoji: "🔄",
      title: "Tectónica de Placas",
      info: "La superficie de la Tierra se mueve constantemente sobre placas. Este movimiento causa terremotos y volcanes.",
      fact: "La colisión de las placas Indo-Euroasiáticas formó el Himalaya."
    },
    {
      key: "geo_jeografi",
      emoji: "📐",
      title: "Latitud y Longitud",
      info: "La latitud y la longitud se usan para determinar la ubicación de cualquier lugar.",
      fact: "La línea de 0° de latitud se llama Ecuador."
    },
    {
      key: "geo_iklimbölge",
      emoji: "🌿",
      title: "Regiones Climáticas",
      info: "El mundo se divide en regiones climáticas tropical, árida, templada, continental y polar.",
      fact: "Los desiertos pueden ser no solo calientes, sino también fríos."
    },
    {
      key: "geo_nüfusyoğ",
      emoji: "🏙️",
      title: "Densidad de Población",
      info: "Algunas zonas están densamente pobladas mientras que otras están escasamente pobladas.",
      fact: "Mónaco es el país más densamente poblado del mundo."
    },
    {
      key: "geo_dogalkayn",
      emoji: "⛏️",
      title: "Recursos Naturales",
      info: "El petróleo, el agua, los bosques y los minerales son recursos naturales. Es importante protegerlos.",
      fact: "Turquía es líder mundial en reservas de boro."
    },
    {
      key: "geo_kureselis",
      emoji: "🌡️",
      title: "Calentamiento Global",
      info: "Los gases de la industria y los vehículos están calentando la atmósfera y cambiando el clima.",
      fact: "En los últimos 100 años, la temperatura mundial ha aumentado en promedio 1,1°C."
    },
    {
      key: "geo_göç",
      emoji: "✈️",
      title: "Migración",
      info: "Las personas migran a otros lugares por razones de trabajo, seguridad o clima.",
      fact: "Turquía alberga el mayor número de refugiados del mundo."
    },
    {
      key: "geo_şehir",
      emoji: "🌆",
      title: "Megaciudades",
      info: "Las ciudades con una población superior a 10 millones se llaman megaciudades.",
      fact: "Tokio es la megaciudad más grande del mundo con aproximadamente 37 millones de personas."
    },
    {
      key: "geo_ekosisteml",
      emoji: "🦁",
      title: "Ecosistemas",
      info: "Los bosques, los corales, los desiertos y las tundras son ecosistemas.",
      fact: "Los arrecifes de coral albergan el 25% de las especies oceánicas."
    },
    {
      key: "geo_harita",
      emoji: "🗺️",
      title: "Lectura de Mapas",
      info: "Los mapas muestran el mundo real en una escala más pequeña. La escala y las direcciones son muy importantes.",
      fact: "El primer mapa conocido fue hecho por los babilonios alrededor del 600 a.C."
    }
  ]
};
const levelTabsEs = [
  { key: "okul_oncesi", label: "🌈 Preescolar" },
  { key: "ilkokul", label: "📗 Primaria" },
  { key: "ortaokul", label: "📘 Secundaria" }
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
function GeographyPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  const isEs = lang === "es";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "geography");
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
  const handleSpeak = (id, text) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = isEn ? "en-US" : isEs ? "es-ES" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const geoData = isEn ? geoDataEn : isEs ? geoDataEs : geoDataTr;
  const levelTabs = isEn ? levelTabsEn : isEs ? levelTabsEs : levelTabsTr;
  const filtered = geoData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.info.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const flashCards = geoData[level].map((item) => ({
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
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = geoData[level].length;
  const done = geoData[level].filter((p) => readTopics.includes(p.key)).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-600 to-cyan-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4 font-bold text-sm",
        children: [
          "← ",
          isEn ? "Back" : isEs ? "Atrás" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white", children: [
        "🌍",
        " ",
        isEn ? "Geography & World" : isEs ? "Geografía & Mundo" : "Coğrafya & Dünya"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "geography.open_modal_button",
          onClick: () => setShowFlashcards(true),
          className: "bg-white/20 hover:bg-white/40 text-white font-bold text-sm px-4 py-2 rounded-2xl transition-all",
          children: [
            "🃏 ",
            isEn ? "Flashcards" : isEs ? "Tarjetas" : "Flaş Kart"
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
        accentColor: "from-emerald-600 to-teal-600"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-blue-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🌍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: isEn ? "Progress at this level" : isEs ? "Progreso en este nivel" : "Bu seviyedeki ilerleme" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: isEn ? "No results found 🔍" : isEs ? "No se encontraron resultados 🔍" : "Sonuç bulunamadı 🔍" }) : filtered.map((item) => {
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
                  " +10",
                  " ",
                  isEn ? "pts" : isEs ? "pts" : "puan"
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
  GeographyPage as default
};
