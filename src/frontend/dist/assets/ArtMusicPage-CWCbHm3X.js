import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, B as Button, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-Bubhbmh-.js";
const musicNotesTr = [
  {
    key: "music_do",
    note: "Do",
    emoji: "🎵",
    freq: "C - 261 Hz",
    desc: "Gamın ilk notası. Güçlü ve temel bir sestir. Piyano tuşlarında beyaz tuşla başlar.",
    color: "from-red-400 to-red-600"
  },
  {
    key: "music_re",
    note: "Re",
    emoji: "🎶",
    freq: "D - 294 Hz",
    desc: "İkinci nota. Daha parlak ve açık bir ses. Birçok halk müziğinde temel ses olarak kullanılır.",
    color: "from-orange-400 to-orange-600"
  },
  {
    key: "music_mi",
    note: "Mi",
    emoji: "🎼",
    freq: "E - 330 Hz",
    desc: "Üçüncü nota. Neşeli ve aydınlık bir ses. Gitar akordunda sıkça kullanılır.",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    key: "music_fa",
    note: "Fa",
    emoji: "🎹",
    freq: "F - 349 Hz",
    desc: "Dördüncü nota. Nispeten yumuşak ve dolgun bir ses karakterine sahiptir.",
    color: "from-green-400 to-green-600"
  },
  {
    key: "music_sol",
    note: "Sol",
    emoji: "🎸",
    freq: "G - 392 Hz",
    desc: "Beşinci nota. En önemli notalardan biri. Majör gamda en güçlü uyum Do ile Sol arasındadır.",
    color: "from-teal-400 to-teal-600"
  },
  {
    key: "music_la",
    note: "La",
    emoji: "🎺",
    freq: "A - 440 Hz",
    desc: "Altıncı nota. Uluslararası standart akort sesi. Orkestralarda enstrümanlar 'La' sesine göre akort edilir.",
    color: "from-blue-400 to-blue-600"
  },
  {
    key: "music_si",
    note: "Si",
    emoji: "🥁",
    freq: "B - 494 Hz",
    desc: "Yedinci ve son nota. Yüksek ve dinamik bir ses. Do-Si arasındaki yarım ton geçiş büyüleyicidir.",
    color: "from-violet-400 to-violet-600"
  }
];
const musicNotesEn = [
  {
    key: "music_do",
    note: "Do (C)",
    emoji: "🎵",
    freq: "C - 261 Hz",
    desc: "The first note of the scale. A strong and fundamental sound. Starts with a white key on the piano.",
    color: "from-red-400 to-red-600"
  },
  {
    key: "music_re",
    note: "Re (D)",
    emoji: "🎶",
    freq: "D - 294 Hz",
    desc: "The second note. A brighter and more open sound. Used as the root note in many folk music traditions.",
    color: "from-orange-400 to-orange-600"
  },
  {
    key: "music_mi",
    note: "Mi (E)",
    emoji: "🎼",
    freq: "E - 330 Hz",
    desc: "The third note. A cheerful and bright sound. Frequently used in guitar tuning.",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    key: "music_fa",
    note: "Fa (F)",
    emoji: "🎹",
    freq: "F - 349 Hz",
    desc: "The fourth note. Has a relatively soft and full tone character.",
    color: "from-green-400 to-green-600"
  },
  {
    key: "music_sol",
    note: "Sol (G)",
    emoji: "🎸",
    freq: "G - 392 Hz",
    desc: "The fifth note. One of the most important notes. In a major scale, the strongest harmony is between Do and Sol.",
    color: "from-teal-400 to-teal-600"
  },
  {
    key: "music_la",
    note: "La (A)",
    emoji: "🎺",
    freq: "A - 440 Hz",
    desc: "The sixth note. The international standard tuning pitch. Orchestras tune their instruments to the note 'A'.",
    color: "from-blue-400 to-blue-600"
  },
  {
    key: "music_si",
    note: "Si (B)",
    emoji: "🥁",
    freq: "B - 494 Hz",
    desc: "The seventh and final note. A high and dynamic sound. The half-step transition between Do and Si is fascinating.",
    color: "from-violet-400 to-violet-600"
  }
];
const artistsTr = [
  {
    key: "art_itri",
    name: "Buhurizade Mustafa Itri",
    emoji: "🎵",
    period: "17. Yüzyıl",
    style: "Klasik Türk Müziği",
    work: "Segah Tekbir, Neva Kar",
    desc: "Türk müziğinin en büyük bestekarlrdan biri. Osmanlı saray müziğini zirveye taşıdı.",
    color: "from-amber-500 to-yellow-600"
  },
  {
    key: "art_seker_ahmet",
    name: "Şeker Ahmet Paşa",
    emoji: "🎨",
    period: "19. Yüzyıl",
    style: "Gerçekçilik (Realizm)",
    work: "Ormanda Kaplan, Çiçek Natürmortu",
    desc: "Türk resim sanatının öncülerinden. Paris'te eğitim aldı, doğa ve orman tablolarıyla tanındı.",
    color: "from-green-500 to-emerald-600"
  },
  {
    key: "art_fahrelnissa",
    name: "Fahrelnissa Zeid",
    emoji: "🖌️",
    period: "20. Yüzyıl",
    style: "Soyut Dışavurumculuk",
    work: "Fight Against Abstraction, Resolved Problems",
    desc: "Türk kadın ressamların en güçlü temsilcisi. Renk cümbüşüyle dolu devasa soyut tabloları dünyaca ünlüdür.",
    color: "from-pink-500 to-rose-600"
  },
  {
    key: "art_da_vinci",
    name: "Leonardo da Vinci",
    emoji: "🎭",
    period: "15-16. Yüzyıl",
    style: "Rönesans",
    work: "Mona Lisa, Son Akşam Yemeği",
    desc: "İtalyan rönesans dehası. Ressam, heykeltaş, mühendis ve bilim insanı. 'Mona Lisa' dünyanın en ünlü tablosu.",
    color: "from-slate-500 to-slate-700"
  },
  {
    key: "art_van_gogh",
    name: "Vincent van Gogh",
    emoji: "🌻",
    period: "19. Yüzyıl",
    style: "Post-Empresyonizm",
    work: "Yıldızlı Gece, Ayçiçekleri",
    desc: "Hollandalı ressam. Sıradan insanları ve doğayı güçlü fırça darbeleri ve parlak renklerle resmetti.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    key: "art_picasso",
    name: "Pablo Picasso",
    emoji: "🔷",
    period: "20. Yüzyıl",
    style: "Kübizm",
    work: "Guernica, Les Demoiselles d'Avignon",
    desc: "İspanyol ressam. Kübizm akımının kurucusu. Nesneleri birden fazla açıdan göstererek devrim yarattı.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    key: "art_monet",
    name: "Claude Monet",
    emoji: "🌸",
    period: "19. Yüzyıl",
    style: "İzlenimcilik",
    work: "Nilüfer Havuzları, Sabah Sisi",
    desc: "Fransız ressam. İzlenimcilik akımının öncüsü. Işık ve renklerin doğada nasıl değiştiğini yakalamak için açık havada resim yaptı.",
    color: "from-purple-400 to-pink-500"
  },
  {
    key: "art_mimar_sinan",
    name: "Mimar Sinan",
    emoji: "🕌",
    period: "16. Yüzyıl",
    style: "Osmanlı Mimarisi",
    work: "Süleymaniye Camii, Selimiye Camii",
    desc: "Osmanlı'nın en büyük mimarı. 400'den fazla yapı tasarladı. Selimiye Camii, UNESCO Dünya Mirası Listesi'nde yer alır.",
    color: "from-teal-500 to-green-600"
  },
  {
    key: "art_beethoven",
    name: "Ludwig van Beethoven",
    emoji: "🎵",
    period: "18-19. Yüzyıl",
    style: "Klasizm / Romantizm",
    work: "9. Senfoni, Ay Işığı Sonatı",
    desc: "Alman besteci. İşitme yetisini kaybetmesine rağmen en güzel eserlerini bu dönemde yarattı. 9. Senfoni'nin korosu 'Sevinç Marşı' tüm dünyada bilinir.",
    color: "from-gray-600 to-slate-700"
  },
  {
    key: "art_ahmet_adnan",
    name: "Ahmet Adnan Saygun",
    emoji: "🎼",
    period: "20. Yüzyıl",
    style: "Türk Çağdaş Müziği",
    work: "Yunus Emre Oratoryosu, Kerem Operası",
    desc: "Türk müziğini Batı formlarıyla harmanlayan çağdaş besteci. Bartók ile birlikte Türk halk müziği derlemesi yaptı. Türk Beşleri'nin en önemli temsilcisi.",
    color: "from-red-600 to-rose-700"
  },
  {
    key: "art_osman_hamdi",
    name: "Osman Hamdi Bey",
    emoji: "🎨",
    period: "19. Yüzyıl",
    style: "Oryantalizm",
    work: "Kaplumbağa Terbiyecisi, Silah Taciri",
    desc: "Türk resminin öncüsü ve ilk Türk müzecisi. Paris'te eğitim aldı. 'Kaplumbağa Terbiyecisi' Türkiye'nin en pahalı tablosu. İstanbul Arkeoloji Müzesi'nin kurucusu.",
    color: "from-brown-500 to-amber-800"
  }
];
const artistsEn = [
  {
    key: "art_itri",
    name: "Buhurizade Mustafa Itri",
    emoji: "🎵",
    period: "17th Century",
    style: "Classical Turkish Music",
    work: "Segah Tekbir, Neva Kar",
    desc: "One of the greatest composers of Turkish music. He elevated Ottoman court music to its peak.",
    color: "from-amber-500 to-yellow-600"
  },
  {
    key: "art_seker_ahmet",
    name: "Şeker Ahmet Pasha",
    emoji: "🎨",
    period: "19th Century",
    style: "Realism",
    work: "Tiger in the Forest, Flower Still Life",
    desc: "One of the pioneers of Turkish painting. Trained in Paris, known for his nature and forest paintings.",
    color: "from-green-500 to-emerald-600"
  },
  {
    key: "art_fahrelnissa",
    name: "Fahrelnissa Zeid",
    emoji: "🖌️",
    period: "20th Century",
    style: "Abstract Expressionism",
    work: "Fight Against Abstraction, Resolved Problems",
    desc: "The most powerful representative of Turkish women painters. Her massive abstract paintings full of colorful splendor are world-famous.",
    color: "from-pink-500 to-rose-600"
  },
  {
    key: "art_da_vinci",
    name: "Leonardo da Vinci",
    emoji: "🎭",
    period: "15th-16th Century",
    style: "Renaissance",
    work: "Mona Lisa, The Last Supper",
    desc: "Italian Renaissance genius. Painter, sculptor, engineer, and scientist. The 'Mona Lisa' is the world's most famous painting.",
    color: "from-slate-500 to-slate-700"
  },
  {
    key: "art_van_gogh",
    name: "Vincent van Gogh",
    emoji: "🌻",
    period: "19th Century",
    style: "Post-Impressionism",
    work: "Starry Night, Sunflowers",
    desc: "Dutch painter. Depicted ordinary people and nature with powerful brushstrokes and vivid colors.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    key: "art_picasso",
    name: "Pablo Picasso",
    emoji: "🔷",
    period: "20th Century",
    style: "Cubism",
    work: "Guernica, Les Demoiselles d'Avignon",
    desc: "Spanish painter. Founder of the Cubist movement. Revolutionized art by showing objects from multiple angles.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    key: "art_monet",
    name: "Claude Monet",
    emoji: "🌸",
    period: "19th Century",
    style: "Impressionism",
    work: "Water Lilies, Morning Fog",
    desc: "French painter. Pioneer of the Impressionist movement. Painted outdoors to capture how light and colors change in nature.",
    color: "from-purple-400 to-pink-500"
  },
  {
    key: "art_mimar_sinan",
    name: "Mimar Sinan",
    emoji: "🕌",
    period: "16th Century",
    style: "Ottoman Architecture",
    work: "Süleymaniye Mosque, Selimiye Mosque",
    desc: "The greatest architect of the Ottoman Empire. Designed over 400 structures. Selimiye Mosque is on the UNESCO World Heritage List.",
    color: "from-teal-500 to-green-600"
  },
  {
    key: "art_beethoven",
    name: "Ludwig van Beethoven",
    emoji: "🎵",
    period: "18th-19th Century",
    style: "Classicism / Romanticism",
    work: "9th Symphony, Moonlight Sonata",
    desc: "German composer. Despite losing his hearing, he created his most beautiful works during this period. The chorus of his 9th Symphony, 'Ode to Joy', is known worldwide.",
    color: "from-gray-600 to-slate-700"
  },
  {
    key: "art_ahmet_adnan",
    name: "Ahmet Adnan Saygun",
    emoji: "🎼",
    period: "20th Century",
    style: "Turkish Contemporary Music",
    work: "Yunus Emre Oratorio, Kerem Opera",
    desc: "A contemporary composer who blended Turkish music with Western forms. Collaborated with Bartók to compile Turkish folk music. The most important representative of the Turkish Five.",
    color: "from-red-600 to-rose-700"
  },
  {
    key: "art_osman_hamdi",
    name: "Osman Hamdi Bey",
    emoji: "🎨",
    period: "19th Century",
    style: "Orientalism",
    work: "The Tortoise Trainer, Arms Dealer",
    desc: "Pioneer of Turkish painting and Turkey's first museologist. Trained in Paris. 'The Tortoise Trainer' is Turkey's most expensive painting. Founder of Istanbul Archaeological Museum.",
    color: "from-brown-500 to-amber-800"
  }
];
const musicNotesEs = [
  {
    key: "music_do",
    note: "Do (C)",
    emoji: "🎵",
    freq: "C - 261 Hz",
    desc: "La primera nota de la escala. Un sonido fuerte y fundamental. Empieza con una tecla blanca en el piano.",
    color: "from-red-400 to-red-600"
  },
  {
    key: "music_re",
    note: "Re (D)",
    emoji: "🎶",
    freq: "D - 294 Hz",
    desc: "La segunda nota. Un sonido más brillante y abierto. Se usa como nota raíz en muchas tradiciones de música popular.",
    color: "from-orange-400 to-orange-600"
  },
  {
    key: "music_mi",
    note: "Mi (E)",
    emoji: "🎼",
    freq: "E - 330 Hz",
    desc: "La tercera nota. Un sonido alegre y brillante. Se usa frecuentemente en la afinación de guitarra.",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    key: "music_fa",
    note: "Fa (F)",
    emoji: "🎹",
    freq: "F - 349 Hz",
    desc: "La cuarta nota. Tiene un carácter de tono relativamente suave y pleno.",
    color: "from-green-400 to-green-600"
  },
  {
    key: "music_sol",
    note: "Sol (G)",
    emoji: "🎸",
    freq: "G - 392 Hz",
    desc: "La quinta nota. Una de las más importantes. En una escala mayor, la armonía más fuerte está entre Do y Sol.",
    color: "from-teal-400 to-teal-600"
  },
  {
    key: "music_la",
    note: "La (A)",
    emoji: "🎺",
    freq: "A - 440 Hz",
    desc: "La sexta nota. El tono de afinación estándar internacional. Las orquestas afinan sus instrumentos a la nota 'La'.",
    color: "from-blue-400 to-blue-600"
  },
  {
    key: "music_si",
    note: "Si (B)",
    emoji: "🥁",
    freq: "B - 494 Hz",
    desc: "La séptima y última nota. Un sonido alto y dinámico. La transición de semitono entre Do y Si es fascinante.",
    color: "from-violet-400 to-violet-600"
  }
];
const artistsEs = [
  {
    key: "art_itri",
    name: "Buhurizade Mustafa Itri",
    emoji: "🎵",
    period: "Siglo XVII",
    style: "Música Turca Clásica",
    work: "Segah Tekbir, Neva Kar",
    desc: "Uno de los más grandes compositores de la música turca. Llevó la música de la corte otomana a su apogeo.",
    color: "from-amber-500 to-yellow-600"
  },
  {
    key: "art_da_vinci",
    name: "Leonardo da Vinci",
    emoji: "🎭",
    period: "Siglos XV-XVI",
    style: "Renacimiento",
    work: "La Mona Lisa, La Última Cena",
    desc: "Genio del Renacimiento italiano. Pintor, escultor, ingeniero y científico. 'La Mona Lisa' es la pintura más famosa del mundo.",
    color: "from-slate-500 to-slate-700"
  },
  {
    key: "art_van_gogh",
    name: "Vincent van Gogh",
    emoji: "🌻",
    period: "Siglo XIX",
    style: "Posimpresionismo",
    work: "La Noche Estrellada, Los Girasoles",
    desc: "Pintor holandés. Representó a personas comunes y a la naturaleza con potentes pinceladas y colores vivos.",
    color: "from-yellow-500 to-orange-600"
  },
  {
    key: "art_picasso",
    name: "Pablo Picasso",
    emoji: "🔷",
    period: "Siglo XX",
    style: "Cubismo",
    work: "Guernica, Las señoritas de Avignon",
    desc: "Pintor español. Fundador del movimiento cubista. Revolucionó el arte mostrando objetos desde múltiples ángulos.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    key: "art_monet",
    name: "Claude Monet",
    emoji: "🌸",
    period: "Siglo XIX",
    style: "Impresionismo",
    work: "Nenúfares, La Catedral de Ruan",
    desc: "Pintor francés. Pionero del impresionismo. Pintó al aire libre para capturar cómo cambian la luz y los colores en la naturaleza.",
    color: "from-purple-400 to-pink-500"
  },
  {
    key: "art_mimar_sinan",
    name: "Mimar Sinan",
    emoji: "🕌",
    period: "Siglo XVI",
    style: "Arquitectura Otomana",
    work: "Mezquita de Solimán, Mezquita de Selim",
    desc: "El mayor arquitecto del Imperio Otomano. Diseñó más de 400 edificios. La Mezquita de Selim está en la Lista del Patrimonio Mundial de la UNESCO.",
    color: "from-teal-500 to-green-600"
  },
  {
    key: "art_beethoven",
    name: "Ludwig van Beethoven",
    emoji: "🎵",
    period: "Siglos XVIII-XIX",
    style: "Clasicismo / Romanticismo",
    work: "9ª Sinfonía, Sonata Claro de Luna",
    desc: "Compositor alemán. A pesar de perder la audición, creó sus obras más bellas en este período. El coro de la 9ª Sinfonía 'Oda a la Alegría' es conocido en todo el mundo.",
    color: "from-gray-600 to-slate-700"
  }
];
function ArtMusicPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  const isEs = lang === "es";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "art-music");
  }, []);
  const [tab, setTab] = reactExports.useState("music");
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const handleLearn = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 5);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const musicNotes = isEs ? musicNotesEs : isEn ? musicNotesEn : musicNotesTr;
  const artists = isEs ? artistsEs : isEn ? artistsEn : artistsTr;
  const currentItems = tab === "music" ? musicNotes : artists;
  const doneCount = currentItems.filter(
    (i) => readTopics.includes(i.key)
  ).length;
  const pct = currentItems.length > 0 ? Math.round(doneCount / currentItems.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-indigo-500 to-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "artmusic.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          isEs ? "Volver" : isEn ? "Back" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🎵 ",
      isEs ? "Música & Arte" : isEn ? "Music & Art" : "Müzik & Sanat"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "artmusic.tab",
          onClick: () => setTab("music"),
          className: `py-3 rounded-2xl font-bold text-sm transition-all ${tab === "music" ? "bg-white text-indigo-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: [
            "🎵 ",
            isEs ? "Música" : isEn ? "Music" : "Müzik"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "artmusic.tab",
          onClick: () => setTab("art"),
          className: `py-3 rounded-2xl font-bold text-sm transition-all ${tab === "art" ? "bg-white text-indigo-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: [
            "🎨 ",
            isEs ? "Arte" : isEn ? "Art" : "Sanat"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: tab === "music" ? "🎵" : "🎨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: isEs ? "Progreso en esta sección" : isEn ? "Progress in this section" : "Bu bölümdeki ilerleme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black", children: [
            doneCount,
            "/",
            currentItems.length
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
    tab === "music" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mb-4", children: isEn ? "The Do-Re-Mi scale: The fundamental notes of music. Each note has a different frequency." : "Do-Re-Mi gamı: Müziğin temel notaları. Her nota farklı bir frekansa sahiptir." }),
      musicNotes.map((n) => {
        const isDone = readTopics.includes(n.key);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-gradient-to-r ${n.color} rounded-2xl p-4 transition-all ${isDone ? "opacity-80 ring-2 ring-white/50" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: n.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-2xl", children: n.note }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-xs", children: n.freq })
                ] }) }),
                isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "✓" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-xs mb-3", children: n.desc }),
              !isDone && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "artmusic.read_button",
                  onClick: () => handleLearn(n.key),
                  className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all",
                  children: [
                    "🎵 ",
                    t("learned"),
                    " +5",
                    " ",
                    isEs ? "pts" : isEn ? "pts" : "puan"
                  ]
                }
              ),
              isDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/80 text-xs font-bold", children: [
                "✅",
                " ",
                isEs ? "Aprendido (+5 pts)" : isEn ? "Learned (+5 pts)" : "Öğrenildi (+5 puan)"
              ] })
            ]
          },
          n.key
        );
      })
    ] }),
    tab === "art" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm mb-4", children: isEn ? "Important names in world and Turkish art. Each artist has a unique style." : "Dünya ve Türk sanatının önemli isimleri. Her sanatçının özgün bir stili vardır." }),
      artists.map((a) => {
        const isDone = readTopics.includes(a.key);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-gradient-to-r ${a.color} rounded-2xl p-4 transition-all ${isDone ? "opacity-80 ring-2 ring-white/50" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: a.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: a.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs", children: [
                    a.period,
                    " • ",
                    a.style
                  ] })
                ] }),
                isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: "✓" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-xs mb-1", children: a.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/70 text-xs italic mb-3", children: [
                isEs ? "Obra famosa: " : isEn ? "Famous work: " : "Ünlü eseri: ",
                a.work
              ] }),
              !isDone && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  "data-ocid": "artmusic.read_button",
                  onClick: () => handleLearn(a.key),
                  className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all",
                  children: [
                    "🎨 ",
                    t("learned"),
                    " +5",
                    " ",
                    isEs ? "pts" : isEn ? "pts" : "puan"
                  ]
                }
              ),
              isDone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white/80 text-xs font-bold", children: [
                "✅",
                " ",
                isEs ? "Aprendido (+5 pts)" : isEn ? "Learned (+5 pts)" : "Öğrenildi (+5 puan)"
              ] })
            ]
          },
          a.key
        );
      })
    ] })
  ] }) });
}
export {
  ArtMusicPage as default
};
