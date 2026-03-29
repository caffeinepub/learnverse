import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, f as updatePoints, i as incrementDailyContentRead, m as markTopicRead } from "./index-C6v58384.js";
import { F as FlashcardMode } from "./FlashcardMode-CQGBhO48.js";
import "./proxy-CMx8EAB_.js";
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
const geoDataFr = {
  okul_oncesi: [
    {
      key: "geo_dunya_fr",
      emoji: "🌍",
      title: "La Terre",
      info: "La Terre est la planète sur laquelle nous vivons. Elle est bleue et verte.",
      fact: "71% de la surface de la Terre est recouverte d'eau !"
    },
    {
      key: "geo_france_fr",
      emoji: "🇫🇷",
      title: "La France",
      info: "La France est un beau pays d'Europe occidentale. Sa capitale est Paris.",
      fact: "La France est le pays le plus visité du monde !"
    },
    {
      key: "geo_soleil_fr",
      emoji: "☀️",
      title: "Le Soleil",
      info: "Le Soleil est l'étoile qui donne lumière et chaleur à la Terre.",
      fact: "Le Soleil est à 150 millions de km de la Terre."
    },
    {
      key: "geo_mer_fr",
      emoji: "🌊",
      title: "La Mer",
      info: "Les mers sont de grands espaces remplis d'eau salée.",
      fact: "L'océan le plus profond est l'océan Pacifique."
    },
    {
      key: "geo_montagne_fr",
      emoji: "⛰️",
      title: "La Montagne",
      info: "Les montagnes sont de très hauts reliefs. Elles peuvent être enneigées.",
      fact: "La plus haute montagne du monde est l'Everest (8848 m)."
    },
    {
      key: "geo_foret_fr",
      emoji: "🌲",
      title: "La Forêt",
      info: "Les forêts sont des endroits où vivent de nombreux animaux et plantes.",
      fact: "La forêt amazonienne est la plus grande forêt du monde."
    },
    {
      key: "geo_desert_fr",
      emoji: "🏜️",
      title: "Le Désert",
      info: "Les déserts sont des endroits secs et chauds avec très peu de pluie.",
      fact: "Le Sahara est le plus grand désert chaud du monde."
    },
    {
      key: "geo_riviere_fr",
      emoji: "🏞️",
      title: "La Rivière",
      info: "Les rivières sont de grands cours d'eau qui traversent les terres.",
      fact: "Le Nil est le fleuve le plus long du monde."
    }
  ],
  ilkokul: [
    {
      key: "geo_continents_fr",
      emoji: "🗺️",
      title: "Les Continents",
      info: "Le monde est divisé en 7 continents : Asie, Europe, Afrique, Amérique du Nord, Amérique du Sud, Australie, Antarctique.",
      fact: "L'Asie est le plus grand continent, l'Australie le plus petit."
    },
    {
      key: "geo_capitales_fr",
      emoji: "🏛️",
      title: "Les Capitales",
      info: "Chaque pays a une capitale. La capitale de la France est Paris, celle de l'Espagne est Madrid.",
      fact: "Il y a 195 pays indépendants dans le monde."
    },
    {
      key: "geo_europe_fr",
      emoji: "🇪🇺",
      title: "L'Europe",
      info: "L'Europe est un continent avec 44 pays. La France, l'Allemagne et l'Italie en font partie.",
      fact: "L'Union Européenne regroupe 27 pays membres."
    },
    {
      key: "geo_afrique_fr",
      emoji: "🌍",
      title: "L'Afrique",
      info: "L'Afrique est le deuxième plus grand continent. Elle compte 54 pays.",
      fact: "Le Nil, le plus long fleuve du monde, traverse l'Afrique."
    },
    {
      key: "geo_oceans_fr",
      emoji: "🌊",
      title: "Les Océans",
      info: "Il y a 5 océans sur Terre : Pacifique, Atlantique, Indien, Arctique et Antarctique.",
      fact: "L'océan Pacifique est plus grand que toutes les terres réunies !"
    },
    {
      key: "geo_climat_fr",
      emoji: "🌡️",
      title: "Le Climat",
      info: "Le climat décrit les conditions météo typiques d'une région. Il existe des zones tropicales, tempérées et polaires.",
      fact: "Les zones équatoriales reçoivent le plus de pluie."
    },
    {
      key: "geo_asie_fr",
      emoji: "🏯",
      title: "L'Asie",
      info: "L'Asie est le plus grand et le plus peuplé des continents. La Chine et l'Inde y sont situées.",
      fact: "Plus de 4 milliards de personnes vivent en Asie."
    },
    {
      key: "geo_amériques_fr",
      emoji: "🌎",
      title: "Les Amériques",
      info: "Les Amériques comprennent l'Amérique du Nord et du Sud. Le Brésil et les États-Unis y sont.",
      fact: "L'Amazone est le fleuve au débit le plus puissant du monde."
    }
  ],
  ortaokul: [
    {
      key: "geo_ecosystemes_fr",
      emoji: "🦁",
      title: "Les Écosystèmes",
      info: "Les forêts, les coraux, les déserts et les toundras sont des écosystèmes. Chacun abrite des espèces uniques.",
      fact: "Les récifs coralliens abritent 25% des espèces marines."
    },
    {
      key: "geo_plaques_fr",
      emoji: "🌋",
      title: "Les Plaques Tectoniques",
      info: "La croûte terrestre est divisée en plaques qui se déplacent lentement. Leur mouvement provoque séismes et éruptions.",
      fact: "Il existe 15 grandes plaques tectoniques sur Terre."
    },
    {
      key: "geo_latitude_fr",
      emoji: "🧭",
      title: "Latitude et Longitude",
      info: "La latitude mesure la distance à l'équateur, la longitude la distance au méridien de Greenwich.",
      fact: "L'équateur est à 0° de latitude et divise la Terre en deux hémisphères."
    },
    {
      key: "geo_changements_fr",
      emoji: "🌡️",
      title: "Changements Climatiques",
      info: "Le réchauffement climatique modifie les températures mondiales. La fonte des glaces fait monter le niveau des mers.",
      fact: "La température moyenne de la Terre a augmenté de 1°C depuis 1900."
    },
    {
      key: "geo_ressources_fr",
      emoji: "⛏️",
      title: "Ressources Naturelles",
      info: "Les ressources naturelles comprennent l'eau, les forêts, les minéraux et le pétrole. Elles doivent être protégées.",
      fact: "Seulement 3% de l'eau sur Terre est de l'eau douce."
    },
    {
      key: "geo_mondialisation_fr",
      emoji: "🌐",
      title: "Mondialisation",
      info: "La mondialisation est l'interdépendance économique et culturelle entre les pays du monde entier.",
      fact: "Internet a accéléré la mondialisation à une vitesse sans précédent."
    },
    {
      key: "geo_urbanisation_fr",
      emoji: "🏙️",
      title: "Urbanisation",
      info: "Plus de la moitié de la population mondiale vit en ville. Les mégalopoles comptent plus de 10 millions d'habitants.",
      fact: "Tokyo est la plus grande ville du monde avec 37 millions d'habitants."
    },
    {
      key: "geo_cartes_fr",
      emoji: "🗺️",
      title: "Lecture de Cartes",
      info: "Les cartes représentent le monde réel à une échelle réduite. L'échelle et les directions sont très importantes.",
      fact: "La première carte connue a été faite par les Babyloniens vers 600 avant J.-C."
    }
  ]
};
const levelTabsFr = [
  { key: "okul_oncesi", label: "🌈 Maternelle" },
  { key: "ilkokul", label: "📗 Primaire" },
  { key: "ortaokul", label: "📘 Collège" }
];
const geoDataZh = {
  okul_oncesi: [
    {
      key: "geo_dunya_zh",
      emoji: "🌍",
      title: "地球",
      info: "地球是我们居住的星球，从太空看是蓝色和绿色的。",
      fact: "地球表面71%被水覆盖！"
    },
    {
      key: "geo_zhongguo_zh",
      emoji: "🇨🇳",
      title: "中国",
      info: "中国是亚洲最大的国家之一，有着悠久的历史和文化。",
      fact: "中国的首都是北京。"
    },
    {
      key: "geo_taiyang_zh",
      emoji: "☀️",
      title: "太阳",
      info: "太阳是给地球提供光和热的恒星。",
      fact: "太阳距地球约1.5亿公里。"
    },
    {
      key: "geo_hai_zh",
      emoji: "🌊",
      title: "海洋",
      info: "海洋是充满咸水的巨大水域。",
      fact: "地球上最深的海洋是太平洋。"
    },
    {
      key: "geo_shan_zh",
      emoji: "⛰️",
      title: "山脉",
      info: "山脉是非常高的地形，可能被雪覆盖。",
      fact: "世界最高峰是珠穆朗玛峰（8848米）。"
    },
    {
      key: "geo_senlin_zh",
      emoji: "🌲",
      title: "森林",
      info: "森林是许多动物和植物生活的地方。",
      fact: "亚马逊雨林是世界上最大的森林。"
    },
    {
      key: "geo_shamo_zh",
      emoji: "🏜️",
      title: "沙漠",
      info: "沙漠是降雨很少的干燥炎热地区。",
      fact: "撒哈拉沙漠是世界上最大的热带沙漠。"
    },
    {
      key: "geo_he_zh",
      emoji: "🏞️",
      title: "河流",
      info: "河流是在陆地上流动的大型水道。",
      fact: "尼罗河是世界上最长的河流。"
    }
  ],
  ilkokul: [
    {
      key: "geo_zhou_zh",
      emoji: "🗺️",
      title: "七大洲",
      info: "世界分为七大洲：亚洲、欧洲、非洲、北美洲、南美洲、大洋洲、南极洲。",
      fact: "亚洲是最大的洲，大洋洲是最小的洲。"
    },
    {
      key: "geo_shoudu_zh",
      emoji: "🏛️",
      title: "首都",
      info: "每个国家都有一个首都。中国的首都是北京，法国的首都是巴黎。",
      fact: "世界上有195个独立国家。"
    },
    {
      key: "geo_yazhou_zh",
      emoji: "🏯",
      title: "亚洲",
      info: "亚洲是世界上最大、人口最多的洲，中国和印度都位于亚洲。",
      fact: "亚洲有40多亿人口。"
    },
    {
      key: "geo_ouzhou_zh",
      emoji: "🇪🇺",
      title: "欧洲",
      info: "欧洲有44个国家，法国、德国和意大利都在欧洲。",
      fact: "欧盟共有27个成员国。"
    },
    {
      key: "geo_haiyang_zh",
      emoji: "🌊",
      title: "五大洋",
      info: "地球上有五大洋：太平洋、大西洋、印度洋、北冰洋和南冰洋。",
      fact: "太平洋比所有陆地面积加起来还要大！"
    },
    {
      key: "geo_qihou_zh",
      emoji: "🌡️",
      title: "气候",
      info: "气候描述一个地区典型的天气状况，有热带、温带和极地气候区。",
      fact: "赤道地区接收的降雨量最多。"
    },
    {
      key: "geo_feizhou_zh",
      emoji: "🌍",
      title: "非洲",
      info: "非洲是第二大洲，共有54个国家，尼罗河穿越非洲。",
      fact: "非洲拥有世界最大的热带草原。"
    },
    {
      key: "geo_meizi_zh",
      emoji: "🌎",
      title: "美洲",
      info: "美洲包括北美洲和南美洲，巴西和美国都在美洲。",
      fact: "亚马逊河是世界上流量最大的河流。"
    }
  ],
  ortaokul: [
    {
      key: "geo_shengtai_zh",
      emoji: "🦁",
      title: "生态系统",
      info: "森林、珊瑚礁、沙漠和冻原都是生态系统，每个生态系统都有独特的物种。",
      fact: "珊瑚礁为25%的海洋物种提供栖息地。"
    },
    {
      key: "geo_ban_zh",
      emoji: "🌋",
      title: "板块构造",
      info: "地壳被分成缓慢移动的板块，它们的运动会引起地震和火山爆发。",
      fact: "地球上有15个主要板块。"
    },
    {
      key: "geo_jingwei_zh",
      emoji: "🧭",
      title: "经纬度",
      info: "纬度衡量距赤道的距离，经度衡量距格林威治子午线的距离。",
      fact: "赤道在纬度0°处，将地球分为南北两个半球。"
    },
    {
      key: "geo_bianhua_zh",
      emoji: "🌡️",
      title: "气候变化",
      info: "全球变暖改变了全球气温，冰川融化导致海平面上升。",
      fact: "自1900年以来，地球平均气温已上升1°C。"
    },
    {
      key: "geo_ziyuan_zh",
      emoji: "⛏️",
      title: "自然资源",
      info: "自然资源包括水、森林、矿物和石油，必须加以保护。",
      fact: "地球上只有3%的水是淡水。"
    },
    {
      key: "geo_quanqiu_zh",
      emoji: "🌐",
      title: "全球化",
      info: "全球化是世界各国之间经济和文化的相互依存与联系。",
      fact: "互联网以前所未有的速度加速了全球化进程。"
    },
    {
      key: "geo_chengshi_zh",
      emoji: "🏙️",
      title: "城市化",
      info: "世界上超过一半的人口生活在城市，超级大城市人口超过1000万。",
      fact: "东京是世界上最大的城市，有3700万居民。"
    },
    {
      key: "geo_ditu_zh",
      emoji: "🗺️",
      title: "地图阅读",
      info: "地图以缩小的比例表示真实世界，比例尺和方向非常重要。",
      fact: "已知最早的地图是巴比伦人约在公元前600年制作的。"
    }
  ]
};
const levelTabsZh = [
  { key: "okul_oncesi", label: "🌈 学前班" },
  { key: "ilkokul", label: "📗 小学" },
  { key: "ortaokul", label: "📘 初中" }
];
const geoDataHi = {
  okul_oncesi: [
    {
      key: "geo_prithvi_hi",
      emoji: "🌍",
      title: "पृथ्वी",
      info: "पृथ्वी वह ग्रह है जहाँ हम रहते हैं। अंतरिक्ष से यह नीले और हरे रंग की दिखती है।",
      fact: "पृथ्वी की सतह का 71% भाग पानी से ढका है!"
    },
    {
      key: "geo_mahasagar_hi",
      emoji: "🌊",
      title: "महासागर",
      info: "महासागर बहुत बड़े खारे पानी के क्षेत्र होते हैं। पृथ्वी पर पाँच महासागर हैं।",
      fact: "प्रशांत महासागर सबसे बड़ा महासागर है।"
    },
    {
      key: "geo_parvat_hi",
      emoji: "⛰️",
      title: "पहाड़",
      info: "पहाड़ बहुत ऊँचे होते हैं और उनकी चोटियाँ बर्फ से ढकी होती हैं।",
      fact: "माउंट एवरेस्ट दुनिया का सबसे ऊँचा पहाड़ है (8848 मीटर)।"
    },
    {
      key: "geo_nadi_hi",
      emoji: "🏞️",
      title: "नदी",
      info: "नदियाँ जमीन पर बहने वाली बड़ी जलधाराएँ होती हैं।",
      fact: "नील नदी दुनिया की सबसे लंबी नदी है।"
    },
    {
      key: "geo_jangal_hi",
      emoji: "🌲",
      title: "जंगल",
      info: "जंगल में बहुत सारे पेड़ होते हैं और वहाँ अनेक जीव-जंतु रहते हैं।",
      fact: "अमेज़न वर्षावन दुनिया का सबसे बड़ा जंगल है।"
    },
    {
      key: "geo_marudyan_hi",
      emoji: "🏜️",
      title: "रेगिस्तान",
      info: "रेगिस्तान बहुत शुष्क और गर्म होता है, यहाँ बहुत कम बारिश होती है।",
      fact: "सहारा रेगिस्तान दुनिया का सबसे बड़ा गर्म रेगिस्तान है।"
    },
    {
      key: "geo_bharat_hi",
      emoji: "🇮🇳",
      title: "भारत",
      info: "भारत एशिया का एक बड़ा देश है, जो अपनी संस्कृति और इतिहास के लिए प्रसिद्ध है।",
      fact: "भारत की राजधानी नई दिल्ली है।"
    },
    {
      key: "geo_suraj_hi",
      emoji: "☀️",
      title: "सूर्य",
      info: "सूर्य वह तारा है जो पृथ्वी को प्रकाश और ऊर्जा देता है।",
      fact: "सूर्य पृथ्वी से लगभग 15 करोड़ किलोमीटर दूर है।"
    }
  ],
  ilkokul: [
    {
      key: "geo_mahadvip_hi",
      emoji: "🗺️",
      title: "सात महाद्वीप",
      info: "दुनिया को सात महाद्वीपों में बाँटा गया है: एशिया, यूरोप, अफ्रीका, उत्तरी अमेरिका, दक्षिण अमेरिका, ऑस्ट्रेलिया और अंटार्कटिका।",
      fact: "एशिया सबसे बड़ा महाद्वीप है और ऑस्ट्रेलिया सबसे छोटा।"
    },
    {
      key: "geo_asia_hi",
      emoji: "🏯",
      title: "एशिया",
      info: "एशिया दुनिया का सबसे बड़ा और सबसे अधिक आबादी वाला महाद्वीप है।",
      fact: "एशिया में 4 अरब से अधिक लोग रहते हैं।"
    },
    {
      key: "geo_europe_hi",
      emoji: "🇪🇺",
      title: "यूरोप",
      info: "यूरोप में 44 देश हैं। फ्रांस, जर्मनी और इटली यूरोप में हैं।",
      fact: "यूरोपीय संघ में 27 सदस्य देश हैं।"
    },
    {
      key: "geo_rajdhani_hi",
      emoji: "🏛️",
      title: "राजधानियाँ",
      info: "हर देश की एक राजधानी होती है। भारत की राजधानी नई दिल्ली, फ्रांस की पेरिस और अमेरिका की वाशिंगटन डी.सी. है।",
      fact: "दुनिया में 195 स्वतंत्र देश हैं।"
    },
    {
      key: "geo_africa_hi",
      emoji: "🌍",
      title: "अफ्रीका",
      info: "अफ्रीका दूसरा सबसे बड़ा महाद्वीप है जिसमें 54 देश हैं।",
      fact: "अफ्रीका में दुनिया की सबसे बड़ी घास के मैदान है।"
    },
    {
      key: "geo_jalvayu_hi",
      emoji: "🌡️",
      title: "जलवायु",
      info: "जलवायु किसी क्षेत्र के सामान्य मौसम को बताती है। उष्णकटिबंधीय, समशीतोष्ण और ध्रुवीय जलवायु क्षेत्र होते हैं।",
      fact: "भूमध्य रेखा के पास सबसे अधिक वर्षा होती है।"
    },
    {
      key: "geo_america_hi",
      emoji: "🌎",
      title: "अमेरिका",
      info: "उत्तरी और दक्षिणी अमेरिका मिलकर अमेरिका बनाते हैं। ब्राज़ील और अमेरिका यहाँ हैं।",
      fact: "अमेज़न नदी दुनिया में सबसे अधिक पानी बहाती है।"
    },
    {
      key: "geo_jhanda_hi",
      emoji: "🚩",
      title: "झंडे",
      info: "हर देश का अपना झंडा होता है। झंडा देश की पहचान और इतिहास को दर्शाता है।",
      fact: "नेपाल दुनिया का एकमात्र देश है जिसका झंडा आयताकार नहीं है।"
    }
  ],
  ortaokul: [
    {
      key: "geo_paristi_hi",
      emoji: "🦁",
      title: "पारिस्थितिकी तंत्र",
      info: "जंगल, प्रवाल भित्ति, रेगिस्तान और टुंड्रा सभी पारिस्थितिकी तंत्र हैं जिनकी अपनी अनोखी प्रजातियाँ होती हैं।",
      fact: "प्रवाल भित्तियाँ 25% समुद्री प्रजातियों का घर हैं।"
    },
    {
      key: "geo_bhupat_hi",
      emoji: "🌋",
      title: "भूगर्भीय प्लेटें",
      info: "पृथ्वी की ऊपरी परत धीरे-धीरे खिसकने वाली प्लेटों में बँटी है जो भूकंप और ज्वालामुखी का कारण बनती हैं।",
      fact: "पृथ्वी पर 15 मुख्य प्लेटें हैं।"
    },
    {
      key: "geo_akshansh_hi",
      emoji: "🧭",
      title: "अक्षांश और देशांतर",
      info: "अक्षांश भूमध्य रेखा से दूरी मापता है और देशांतर ग्रीनविच रेखा से। इससे किसी भी स्थान की सटीक स्थिति पता चलती है।",
      fact: "भूमध्य रेखा 0° पर है और पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में बाँटती है।"
    },
    {
      key: "geo_jalvayu_parivartan_hi",
      emoji: "🌡️",
      title: "जलवायु परिवर्तन",
      info: "वैश्विक ताप से दुनिया का तापमान बढ़ रहा है, हिमनद पिघल रहे हैं और समुद्र का स्तर ऊँचा हो रहा है।",
      fact: "1900 से अब तक पृथ्वी का औसत तापमान 1°C बढ़ चुका है।"
    },
    {
      key: "geo_prakritik_sansadhan_hi",
      emoji: "⛏️",
      title: "प्राकृतिक संसाधन",
      info: "जल, वन, खनिज और पेट्रोलियम प्राकृतिक संसाधन हैं जिन्हें संरक्षित करना जरूरी है।",
      fact: "पृथ्वी पर केवल 3% पानी ही मीठा पानी है।"
    },
    {
      key: "geo_nagrikaran_hi",
      emoji: "🏙️",
      title: "नगरीकरण",
      info: "दुनिया की आधे से अधिक आबादी शहरों में रहती है। महानगरों में 1 करोड़ से अधिक लोग रहते हैं।",
      fact: "टोक्यो दुनिया का सबसे बड़ा शहर है जिसमें 3.7 करोड़ लोग रहते हैं।"
    },
    {
      key: "geo_vaikikarana_hi",
      emoji: "🌐",
      title: "वैश्वीकरण",
      info: "वैश्वीकरण से देशों के बीच आर्थिक और सांस्कृतिक संबंध बढ़े हैं।",
      fact: "इंटरनेट ने वैश्वीकरण को अभूतपूर्व गति दी है।"
    },
    {
      key: "geo_naksha_hi",
      emoji: "🗺️",
      title: "नक्शा पढ़ना",
      info: "नक्शा असली दुनिया को छोटे पैमाने पर दिखाता है। पैमाना और दिशा महत्वपूर्ण होती हैं।",
      fact: "सबसे पुराने ज्ञात नक्शे बेबीलोन के लोगों ने लगभग 600 ईसा पूर्व बनाए थे।"
    }
  ]
};
const levelTabsHi = [
  { key: "okul_oncesi", label: "🌈 प्री-स्कूल" },
  { key: "ilkokul", label: "📗 प्राथमिक" },
  { key: "ortaokul", label: "📘 मिडिल स्कूल" }
];
function GeographyPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const isZh = lang === "zh";
  const isHi = lang === "hi";
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
      utt.lang = isZh ? "zh-CN" : isHi ? "hi-IN" : isEn ? "en-US" : isEs ? "es-ES" : isFr ? "fr-FR" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const geoData = isZh ? geoDataZh : isHi ? geoDataHi : isEn ? geoDataEn : isEs ? geoDataEs : isFr ? geoDataFr : geoDataTr;
  const levelTabs = isZh ? levelTabsZh : isHi ? levelTabsHi : isEn ? levelTabsEn : isEs ? levelTabsEs : isFr ? levelTabsFr : levelTabsTr;
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
          isEn ? "Back" : isEs ? "Atrás" : isFr ? "Retour" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white", children: [
        "🌍",
        " ",
        isEn ? "Geography & World" : isEs ? "Geografía & Mundo" : isFr ? "Géographie & Monde" : "Coğrafya & Dünya"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "geography.open_modal_button",
          onClick: () => setShowFlashcards(true),
          className: "bg-white/20 hover:bg-white/40 text-white font-bold text-sm px-4 py-2 rounded-2xl transition-all",
          children: [
            "🃏",
            " ",
            isEn ? "Flashcards" : isEs ? "Tarjetas" : isFr ? "Flashcards" : "Flaş Kart"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: isEn ? "Progress at this level" : isEs ? "Progreso en este nivel" : isFr ? "Progrès à ce niveau" : "Bu seviyedeki ilerleme" }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: isEn ? "No results found 🔍" : isEs ? "No se encontraron resultados 🔍" : isFr ? "Aucun résultat trouvé 🔍" : "Sonuç bulunamadı 🔍" }) : filtered.map((item) => {
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
                children: speakingId === item.key ? isEn ? "⏹ Stop" : isFr ? "⏹ Stop" : "⏹ Durdur" : isEn ? "🔊 Listen" : isFr ? "🔊 Écouter" : "🔊 Dinle"
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
                  isEn ? "pts" : isEs ? "pts" : isFr ? "pts" : "puan"
                ]
              }
            ),
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-300 text-xs font-bold", children: [
              "✅",
              " ",
              isEn ? "Learned (+10 pts earned)" : isFr ? "Appris (+10 pts gagnés)" : "Öğrenildi (+10 puan kazanıldı)"
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
