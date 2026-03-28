import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, B as Button, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-CGT7mtIO.js";
const regions = [
  {
    key: "map_marmara",
    name: "Marmara Bölgesi",
    nameEn: "Marmara Region",
    emoji: "🏙️",
    color: "from-blue-500 to-blue-700",
    provinces: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ", "Balıkesir"],
    provincesEn: ["Istanbul", "Bursa", "Kocaeli", "Tekirdag", "Balikesir"],
    features: "Türkiye'nin en kalabalık bölgesi. İstanbul ülkenin en büyük şehri. Sanayi ve ticaret merkezi. Marmara Denizi ile çevrili.",
    featuresEn: "Turkey's most populous region. Istanbul is the largest city. Industrial and commercial hub. Surrounded by the Sea of Marmara.",
    nameEs: "Región de Mármara",
    provincesEs: ["Estambul", "Bursa", "Kocaeli", "Tekirdag", "Balikesir"],
    featuresEs: "La región más poblada de Turquía. Estambul es la ciudad más grande. Centro industrial y comercial. Rodeada por el Mar de Mármara.",
    nameFr: "Region de Marmara",
    provincesFr: ["Istanbul", "Bursa", "Kocaeli", "Tekirdag", "Balikesir"],
    featuresFr: "La region la plus peuplee de Turquie. Istanbul est la plus grande ville. Centre industriel et commercial."
  },
  {
    key: "map_ege",
    name: "Ege Bölgesi",
    nameEn: "Aegean Region",
    emoji: "🌊",
    color: "from-cyan-500 to-teal-600",
    provinces: ["İzmir", "Manisa", "Denizli", "Aydın", "Muğla"],
    provincesEn: ["Izmir", "Manisa", "Denizli", "Aydin", "Mugla"],
    features: "Zeytinlikleri ve bağlarıyla ünlü. İzmir Türkiye'nin 3. büyük şehri. Efes ve Bergama antik kentleri burada.",
    featuresEn: "Famous for olive groves and vineyards. Izmir is Turkey's 3rd largest city. Ancient cities of Ephesus and Pergamon are here.",
    nameEs: "Región del Egeo",
    provincesEs: ["Esmirna", "Manisa", "Denizli", "Aydın", "Muğla"],
    featuresEs: "Famosa por sus olivares y viñedos. Esmirna es la 3ª ciudad más grande de Turquía. Las ciudades antiguas de Éfeso y Pérgamo están aquí.",
    nameFr: "Region de l'Egee",
    provincesFr: ["Izmir", "Manisa", "Denizli", "Aydin", "Mugla"],
    featuresFr: "Celebre pour ses oliveraies. Izmir est la 3eme plus grande ville de Turquie. Les cites antiques d'Ephese sont ici."
  },
  {
    key: "map_akdeniz",
    name: "Akdeniz Bölgesi",
    nameEn: "Mediterranean Region",
    emoji: "☀️",
    color: "from-orange-500 to-red-500",
    provinces: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    provincesEn: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    features: "Turizm açısından çok önemli. Akdeniz iklimi hâkim. Toros Dağları bölgede bulunur. Narenciye üretiminde önde.",
    featuresEn: "Very important for tourism. Mediterranean climate. The Taurus Mountains are here. Leading citrus fruit production.",
    nameEs: "Región Mediterránea",
    provincesEs: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    featuresEs: "Muy importante para el turismo. Clima mediterráneo. Las montañas Tauro están aquí. Líder en producción de cítricos.",
    nameFr: "Region Mediterraneenne",
    provincesFr: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    featuresFr: "Tres importante pour le tourisme. Climat mediterraneen. Les monts Taurus sont ici. Leader en production d'agrumes."
  },
  {
    key: "map_ic_anadolu",
    name: "İç Anadolu Bölgesi",
    nameEn: "Central Anatolia Region",
    emoji: "🏛️",
    color: "from-amber-500 to-yellow-600",
    provinces: ["Ankara", "Konya", "Kayseri", "Eskişehir", "Sivas"],
    provincesEn: ["Ankara", "Konya", "Kayseri", "Eskisehir", "Sivas"],
    features: "Türkiye'nin başkenti Ankara burada. Step iklimi ve geniş ovalar. Kapadokya'nın peri bacaları burada. Buğday üretiminde öncü.",
    featuresEn: "Turkey's capital Ankara is here. Steppe climate and vast plains. Cappadocia's fairy chimneys are here. Leading wheat production.",
    nameEs: "Región de Anatolia Central",
    provincesEs: ["Ankara", "Konya", "Kayseri", "Eskisehir", "Sivas"],
    featuresEs: "La capital de Turquía, Ankara, está aquí. Clima estepario y vastas llanuras. Las chimeneas de hadas de Capadocia están aquí.",
    nameFr: "Region d'Anatolie Centrale",
    provincesFr: ["Ankara", "Konya", "Kayseri", "Eskisehir", "Sivas"],
    featuresFr: "La capitale Ankara est ici. Climat steppique et vastes plaines. Les cheminees de fees de Cappadoce sont ici."
  },
  {
    key: "map_karadeniz",
    name: "Karadeniz Bölgesi",
    nameEn: "Black Sea Region",
    emoji: "🌿",
    color: "from-green-600 to-emerald-700",
    provinces: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    provincesEn: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    features: "Yağışlı iklim ve yemyeşil doğa. Çay ve fındık üretiminde dünya lideri. Karadeniz kıyısında konumlu.",
    featuresEn: "Rainy climate and lush green nature. World leader in tea and hazelnut production. Located along the Black Sea coast.",
    nameEs: "Región del Mar Negro",
    provincesEs: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    featuresEs: "Clima lluvioso y naturaleza exuberante. Líder mundial en producción de té y avellanas. Ubicada a lo largo de la costa del Mar Negro.",
    nameFr: "Region de la Mer Noire",
    provincesFr: ["Samsun", "Trabzon", "Rize", "Zonguldak", "Ordu"],
    featuresFr: "Climat pluvieux et nature verdoyante. Leader mondial en the et noisettes. Sur la cote de la mer Noire."
  },
  {
    key: "map_dogu_anadolu",
    name: "Doğu Anadolu Bölgesi",
    nameEn: "Eastern Anatolia Region",
    emoji: "🏔️",
    color: "from-slate-500 to-slate-700",
    provinces: ["Erzurum", "Van", "Malatya", "Elazığ", "Ağrı"],
    provincesEn: ["Erzurum", "Van", "Malatya", "Elazig", "Agri"],
    features: "En yüksek ve soğuk bölge. Ağrı Dağı Türkiye'nin en yüksek noktası (5165m). Van Gölü Türkiye'nin en büyük gölü.",
    featuresEn: "Highest and coldest region. Mount Ararat is Turkey's highest point (5165m). Lake Van is Turkey's largest lake.",
    nameEs: "Región de Anatolia Oriental",
    provincesEs: ["Erzurum", "Van", "Malatya", "Elazig", "Agri"],
    featuresEs: "Región más alta y fría. El monte Ararat es el punto más alto de Turquía (5165m). El lago Van es el lago más grande de Turquía.",
    nameFr: "Region d'Anatolie Orientale",
    provincesFr: ["Erzurum", "Van", "Malatya", "Elazig", "Agri"],
    featuresFr: "Region la plus haute et froide. Le mont Ararat est le point culminant (5165m). Le lac de Van est le plus grand."
  },
  {
    key: "map_guneydogu_anadolu",
    name: "Güney Doğu Anadolu Bölgesi",
    nameEn: "Southeastern Anatolia Region",
    emoji: "🏜️",
    color: "from-yellow-600 to-amber-700",
    provinces: ["Gaziantep", "Şanlıurfa", "Diyarbakır", "Mardin", "Adıyaman"],
    provincesEn: ["Gaziantep", "Sanliurfa", "Diyarbakir", "Mardin", "Adiyaman"],
    features: "Güneydoğu Anadolu Projesi (GAP) burada hayata geçirilmiştir. Fırat ve Dicle nehirleri bu bölgeden akar.",
    featuresEn: "The GAP project was implemented here. The Euphrates and Tigris rivers flow through this region.",
    nameEs: "Región de Anatolia Suroriental",
    provincesEs: ["Gaziantep", "Sanliurfa", "Diyarbakir", "Mardin", "Adiyaman"],
    featuresEs: "El proyecto GAP se implementó aquí. Los ríos Éufrates y Tigris fluyen por esta región.",
    nameFr: "Region d'Anatolie du Sud-Est",
    provincesFr: ["Gaziantep", "Sanliurfa", "Diyarbakir", "Mardin", "Adiyaman"],
    featuresFr: "Le projet GAP a ete mis en oeuvre ici. Les fleuves Euphrate et Tigre traversent cette region."
  },
  {
    key: "map_samsun",
    name: "Samsun",
    nameEn: "Samsun",
    emoji: "⚓",
    color: "from-teal-500 to-cyan-600",
    provinces: ["Samsun", "İlkadım", "Canik", "Atakum", "Bafra"],
    provincesEn: ["Samsun", "Ilkadim", "Canik", "Atakum", "Bafra"],
    features: "Karadeniz'in kapısı olarak bilinir. Atatürk'ün 19 Mayıs 1919'da Kurtuluş Savaşı'nı başlatmak için çıktığı tarihi şehirdir. Tütün ve fındık üretimi önemlidir.",
    featuresEn: "Known as the gateway to the Black Sea. Historic city where Atatürk started the War of Independence on May 19, 1919.",
    nameEs: "Samsun",
    provincesEs: ["Samsun", "Ilkadim", "Canik", "Atakum", "Bafra"],
    featuresEs: "Conocida como la puerta del Mar Negro. Ciudad histórica donde Atatürk inició la Guerra de Independencia el 19 de mayo de 1919.",
    nameFr: "Samsun",
    provincesFr: ["Samsun", "Ilkadim", "Canik", "Atakum", "Bafra"],
    featuresFr: "Connue comme la porte de la mer Noire. Ville historique ou Ataturk lanca la guerre d'independance le 19 mai 1919."
  },
  {
    key: "map_trabzon",
    name: "Trabzon",
    nameEn: "Trabzon",
    emoji: "🍵",
    color: "from-green-600 to-lime-600",
    provinces: ["Trabzon", "Ortahisar", "Akçaabat", "Of", "Araklı"],
    provincesEn: ["Trabzon", "Ortahisar", "Akcaabat", "Of", "Arakli"],
    features: "Dünyaca ünlü çay bahçeleri ve fındık bahçeleriyle kaplıdır. Trabzon Kalesi ve Ayasofya Müzesi önemli tarihi mekânlardır. Karadeniz mutfağının merkezi.",
    featuresEn: "Covered with world-famous tea gardens and hazelnut orchards. Trabzon Castle and Hagia Sophia Museum are important historical sites.",
    nameEs: "Trabzon",
    provincesEs: ["Trabzon", "Ortahisar", "Akcaabat", "Of", "Arakli"],
    featuresEs: "Cubierta de jardines de té y huertos de avellanas de fama mundial. El Castillo de Trabzon y el Museo de Santa Sofía son sitios históricos importantes.",
    nameFr: "Trabzon",
    provincesFr: ["Trabzon", "Ortahisar", "Akcaabat", "Of", "Arakli"],
    featuresFr: "Couverte de jardins de the et noisettiers celebres. Le chateau de Trabzon et le musee Sainte-Sophie sont historiques."
  },
  {
    key: "map_erzurum",
    name: "Erzurum",
    nameEn: "Erzurum",
    emoji: "❄️",
    color: "from-blue-600 to-indigo-700",
    provinces: ["Erzurum", "Palandöken", "Yakutiye", "Oltu", "Horasan"],
    provincesEn: ["Erzurum", "Palandoken", "Yakutiye", "Oltu", "Horasan"],
    features: "Türkiye'nin en soğuk ve en yüksek şehirlerinden biridir. Palandöken Kayak Merkezi ile kış turizmi önemlidir. Atatürk'ün Erzurum Kongresi'ni yönettiği tarihi şehir.",
    featuresEn: "One of Turkey's coldest and highest cities. Winter tourism is important with the Palandoken Ski Center.",
    nameEs: "Erzurum",
    provincesEs: ["Erzurum", "Palandoken", "Yakutiye", "Oltu", "Horasan"],
    featuresEs: "Una de las ciudades más frías y altas de Turquía. El turismo de invierno es importante con el Centro de Esquí Palandöken.",
    nameFr: "Erzurum",
    provincesFr: ["Erzurum", "Palandoken", "Yakutiye", "Oltu", "Horasan"],
    featuresFr: "L'une des villes les plus froides de Turquie. Le tourisme hivernal est important avec le centre de ski Palandoken."
  },
  {
    key: "map_gaziantep",
    name: "Gaziantep",
    nameEn: "Gaziantep",
    emoji: "🧆",
    color: "from-amber-600 to-orange-700",
    provinces: ["Gaziantep", "Şahinbey", "Şehitkamil", "Nizip", "İslahiye"],
    provincesEn: ["Gaziantep", "Sahinbey", "Sehitkamil", "Nizip", "Islahiye"],
    features: "Türkiye'nin gastronomi başkenti. Baklava ve fıstıklı tatlılar dünyaca ünlüdür. Gaziantep Kalesi ve zengin tarihi dokusuyla öne çıkar. Türkiye'nin 6. büyük şehri.",
    featuresEn: "Turkey's gastronomic capital. Baklava and pistachio desserts are world-famous. Turkey's 6th largest city.",
    nameEs: "Gaziantep",
    provincesEs: ["Gaziantep", "Sahinbey", "Sehitkamil", "Nizip", "Islahiye"],
    featuresEs: "La capital gastronómica de Turquía. El baklava y los dulces de pistacho son mundialmente famosos. La 6ª ciudad más grande de Turquía.",
    nameFr: "Gaziantep",
    provincesFr: ["Gaziantep", "Sahinbey", "Sehitkamil", "Nizip", "Islahiye"],
    featuresFr: "Capitale gastronomique de la Turquie. La baklava et les patisseries a la pistache sont mondialement celebres."
  },
  {
    key: "map_diyarbakir",
    name: "Diyarbakır",
    nameEn: "Diyarbakir",
    emoji: "🏛️",
    color: "from-stone-600 to-gray-700",
    provinces: ["Diyarbakır", "Bağlar", "Kayapınar", "Sur", "Ergani"],
    provincesEn: ["Diyarbakir", "Baglar", "Kayapinar", "Sur", "Ergani"],
    features: "UNESCO Dünya Mirası listesinde yer alan siyah bazalt surlarıyla tanınır. Dicle Nehri kıyısında kurulmuştur. Karpuzuyla meşhurdur. 5000 yıllık tarihi geçmişe sahip.",
    featuresEn: "Known for its black basalt walls listed as a UNESCO World Heritage Site. Built on the banks of the Tigris River.",
    nameEs: "Diyarbakır",
    provincesEs: ["Diyarbakir", "Baglar", "Kayapinar", "Sur", "Ergani"],
    featuresEs: "Conocida por sus murallas de basalto negro incluidas en la Lista del Patrimonio Mundial de la UNESCO. Construida a orillas del río Tigris.",
    nameFr: "Diyarbakir",
    provincesFr: ["Diyarbakir", "Baglar", "Kayapinar", "Sur", "Ergani"],
    featuresFr: "Connue pour ses remparts en basalte noir inscrits au patrimoine UNESCO. Construite sur les rives du Tigre."
  }
];
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
function TurkeyMapPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "turkey-map");
  }, []);
  const [mode, setMode] = reactExports.useState("learn");
  const [selected, setSelected] = reactExports.useState(null);
  const [quizRegion, setQuizRegion] = reactExports.useState(null);
  const [quizChoices, setQuizChoices] = reactExports.useState([]);
  const [quizAnswer, setQuizAnswer] = reactExports.useState(null);
  const [score, setScore] = reactExports.useState(0);
  const [quizCount, setQuizCount] = reactExports.useState(0);
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const handleLearnRegion = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 5);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const startQuiz = () => {
    const r = regions[Math.floor(Math.random() * regions.length)];
    const others = shuffle(regions.filter((reg) => reg.key !== r.key)).slice(
      0,
      3
    );
    setQuizRegion(r);
    setQuizChoices(shuffle([r, ...others]));
    setQuizAnswer(null);
  };
  const handleQuizAnswer = (key) => {
    if (quizAnswer !== null || !quizRegion) return;
    setQuizAnswer(key);
    if (key === quizRegion.key) {
      setScore((s) => s + 5);
      if (profile) updatePoints(profile.studentNumber, 5);
    }
    setQuizCount((c) => c + 1);
  };
  const learnedCount = regions.filter((r) => readTopics.includes(r.key)).length;
  const learnPct = regions.length > 0 ? Math.round(learnedCount / regions.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-red-500 to-red-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        "data-ocid": "turkeymap.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: [
          "← ",
          isEs ? "Volver" : isFr ? "Retour" : isEn ? "Back" : "Geri"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🗺️",
      " ",
      isEs ? "Mapa de Turquía" : isFr ? "Carte de Turquie" : isEn ? "Turkey Map" : "Türkiye Haritası"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "turkeymap.tab",
          onClick: () => setMode("learn"),
          className: `py-3 rounded-2xl font-bold text-sm transition-all ${mode === "learn" ? "bg-white text-red-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: [
            "📖",
            " ",
            isEs ? "Aprender" : isFr ? "Apprendre" : isEn ? "Learn" : "Öğren"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "turkeymap.tab",
          onClick: () => {
            setMode("quiz");
            startQuiz();
          },
          className: `py-3 rounded-2xl font-bold text-sm transition-all ${mode === "quiz" ? "bg-white text-red-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: "🎯 Quiz"
        }
      )
    ] }),
    mode === "learn" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🗺️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-white text-xs mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: isEs ? "Regiones aprendidas" : isEn ? "Regions learned" : "Öğrenilen bölgeler" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black", children: [
            learnedCount,
            "/",
            regions.length
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 rounded-full h-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-green-400 rounded-full transition-all duration-500",
            style: { width: `${learnPct}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white font-black text-sm", children: [
        learnPct,
        "%"
      ] })
    ] }),
    mode === "learn" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: regions.map((r) => {
      const isLearned = readTopics.includes(r.key);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: `w-full bg-gradient-to-r ${r.color} p-4 flex items-center gap-3 text-left ${isLearned ? "opacity-80" : ""}`,
            onClick: () => setSelected(selected === r.key ? null : r.key),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: r.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: isEs ? r.nameEs : isFr ? r.nameFr : isEn ? r.nameEn : r.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/80 text-xs", children: [
                  (isEs ? r.provincesEs : isFr ? r.provincesFr : isEn ? r.provincesEn : r.provinces).slice(0, 3).join(", "),
                  "..."
                ] })
              ] }),
              isLearned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-lg mr-1", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70", children: selected === r.key ? "▲" : "▼" })
            ]
          }
        ),
        selected === r.key && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold text-xs mb-1", children: [
              "🏙️",
              " ",
              isEs ? "Provincias Clave:" : isEn ? "Key Provinces:" : "Önemli İller:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: (isEs ? r.provincesEs : isEn ? r.provincesEn : r.provinces).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "bg-white/20 text-white text-xs px-2 py-1 rounded-full",
                children: p
              },
              p
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-bold text-xs mb-1", children: [
              "ℹ️",
              " ",
              isEs ? "Características:" : isEn ? "Features:" : "Özellikler:"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs", children: isEs ? r.featuresEs : isEn ? r.featuresEn : r.features })
          ] }),
          !isLearned && profile && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "turkeymap.learn_button",
              onClick: () => handleLearnRegion(r.key),
              className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-3 py-1 rounded-full transition-all",
              children: [
                "🗺️ ",
                t("learned"),
                " +5 puan"
              ]
            }
          ),
          isLearned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-xs font-bold", children: "✅ Öğrenildi (+5 puan kazanıldı)" })
        ] })
      ] }, r.key);
    }) }),
    mode === "quiz" && quizRegion && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-4 mb-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs mb-1", children: [
          isEs ? "Puntos" : isFr ? "Points" : isEn ? "Score" : "Puan",
          ":",
          " ",
          score,
          " |",
          " ",
          isEs ? "Pregunta" : isFr ? "Question" : isEn ? "Question" : "Soru",
          ": ",
          quizCount
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg mb-2", children: isEs ? "¿Qué región es esta?" : isEn ? "Which region is this?" : "Bu bölge hangisidir?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-2", children: quizRegion.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/80 text-sm", children: [
          isEs ? "Provincias" : isFr ? "Provinces" : isEn ? "Provinces" : "İller",
          ":",
          " ",
          (isEs ? quizRegion.provincesEs : isEn ? quizRegion.provincesEn : quizRegion.provinces).slice(0, 2).join(", "),
          "..."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: quizChoices.map((choice, cIdx) => {
        let btnClass = "bg-white/20 text-white hover:bg-white/30";
        if (quizAnswer !== null) {
          if (choice.key === quizRegion.key)
            btnClass = "bg-green-500 text-white";
          else if (choice.key === quizAnswer)
            btnClass = "bg-red-500/80 text-white";
          else btnClass = "bg-white/10 text-white/50";
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": `turkeymap.answer_button.${cIdx + 1}`,
            disabled: quizAnswer !== null,
            onClick: () => handleQuizAnswer(choice.key),
            className: `rounded-xl p-3 text-sm font-bold transition-all ${btnClass} disabled:cursor-not-allowed`,
            children: isEs ? choice.nameEs : isFr ? choice.nameFr : isEn ? choice.nameEn : choice.name
          },
          choice.key
        );
      }) }),
      quizAnswer !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `text-sm font-bold mb-3 ${quizAnswer === quizRegion.key ? "text-green-300" : "text-red-200"}`,
            children: quizAnswer === quizRegion.key ? isEn ? "✅ Correct! +5 points!" : "✅ Doğru! +5 puan!" : isEn ? `❌ Wrong. Correct: ${quizRegion.nameEn}` : `❌ Yanlış. Doğru: ${quizRegion.name}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: startQuiz,
            className: "bg-white/30 hover:bg-white/50 text-white font-bold px-6 py-2 rounded-full transition-all",
            children: isEs ? "Siguiente Pregunta →" : isEn ? "Next Question →" : "Sonraki Soru →"
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  TurkeyMapPage as default
};
