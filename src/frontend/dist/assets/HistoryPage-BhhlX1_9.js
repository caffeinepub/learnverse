import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, f as updatePoints, i as incrementDailyContentRead, m as markTopicRead } from "./index-C6v58384.js";
import { F as FlashcardMode } from "./FlashcardMode-CQGBhO48.js";
import "./proxy-CMx8EAB_.js";
const historyDataTr = {
  okul_oncesi: [
    {
      key: "hist_ataturk1",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk, Türkiye Cumhuriyeti'nin kurucusudur. Çocukları çok severdi.",
      fact: "Atatürk 10 Kasım 1938'de vefat etmiştir."
    },
    {
      key: "hist_bayrak",
      emoji: "🇹🇷",
      title: "Türk Bayrağı",
      info: "Türk bayrağı kırmızı zemin üzerinde ay ve yıldızdan oluşur.",
      fact: "Bayrağımızdaki kırmızı renk cesareti simgeler."
    },
    {
      key: "hist_cumhuriyet",
      emoji: "🏛️",
      title: "Cumhuriyet",
      info: "Türkiye Cumhuriyeti 29 Ekim 1923'te kurulmuştur.",
      fact: "29 Ekim Cumhuriyet Bayramı olarak kutlanır."
    },
    {
      key: "hist_23nisan",
      emoji: "🌸",
      title: "23 Nisan",
      info: "23 Nisan 1920'de Türkiye Büyük Millet Meclisi açıldı. Bu gün çocuklara armağan edildi.",
      fact: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı'dır."
    },
    {
      key: "hist_mektup",
      emoji: "✉️",
      title: "Atatürk'ün Çocuklara Mektubu",
      info: "Atatürk gençliğe hitabında memleketi sevmemizi istedi.",
      fact: "Atatürk 'Gençliğe Hitabe'yi 1927'de yazdı."
    },
    {
      key: "hist_istanbul",
      emoji: "🕌",
      title: "İstanbul",
      info: "İstanbul, hem Avrupa'da hem Asya'da yer alan Türkiye'nin en büyük şehridir.",
      fact: "İstanbul eskiden Konstantinopolis olarak bilinirdi."
    }
  ],
  ilkokul: [
    {
      key: "hist_kurtulus",
      emoji: "⚔️",
      title: "Kurtuluş Savaşı",
      info: "1919-1923 yılları arasında Türk halkı vatanını kurtarmak için savaştı. Atatürk bu savaşa liderlik etti.",
      fact: "Zafer Bayramı 30 Ağustos'ta kutlanır."
    },
    {
      key: "hist_osmanlı",
      emoji: "👑",
      title: "Osmanlı İmparatorluğu",
      info: "Osmanlı İmparatorluğu yaklaşık 600 yıl hüküm sürdü. Başkenti İstanbul'du.",
      fact: "Osmanlı İmparatorluğu 1299'da kuruldu."
    },
    {
      key: "hist_selçuk",
      emoji: "🏹",
      title: "Selçuklular",
      info: "Selçuklu Türkleri, Anadolu'ya 1071'de Malazgirt Savaşı'ndan sonra yerleşti.",
      fact: "Malazgirt Savaşı 1071'de yapıldı."
    },
    {
      key: "hist_ataturk2",
      emoji: "🌟",
      title: "Atatürk'ün Reformları",
      info: "Atatürk alfabe, takvim, hukuk ve eğitimde devrimler yaptı. Kadınlara oy hakkı verdi.",
      fact: "Latin alfabesi 1928'de kabul edildi."
    },
    {
      key: "hist_fatih",
      emoji: "🏰",
      title: "Fatih Sultan Mehmet",
      info: "Fatih Sultan Mehmet 1453'te İstanbul'u fethetti ve Osmanlı'nın en büyük sultanlarından biri oldu.",
      fact: "İstanbul'un fethi 1453'te gerçekleşti."
    },
    {
      key: "hist_suleyman",
      emoji: "🌹",
      title: "Kanuni Sultan Süleyman",
      info: "Kanuni, Osmanlı'nın en uzun süre hüküm süren ve en güçlü dönemlerinden birini yönetti.",
      fact: "Kanuni 46 yıl hüküm sürdü."
    },
    {
      key: "hist_19mayis",
      emoji: "🔥",
      title: "19 Mayıs",
      info: "19 Mayıs 1919'da Atatürk Samsun'a çıktı ve Kurtuluş Savaşı'nı başlattı.",
      fact: "Bu gün Atatürk'ü Anma, Gençlik ve Spor Bayramı olarak kutlanır."
    },
    {
      key: "hist_anadolu",
      emoji: "🏺",
      title: "Anadolu Uygarlıkları",
      info: "Hititler, Frigler, Lidyalılar ve daha birçok uygarlık Anadolu'da yaşadı.",
      fact: "Hititler dünyanın ilk yazılı barış antlaşmasını yaptı."
    }
  ],
  ortaokul: [
    {
      key: "hist_ilkçag",
      emoji: "🏛️",
      title: "İlkçağ Uygarlıkları",
      info: "Mezopotamya, Mısır, Yunan ve Roma uygarlıkları tarih öncesi dönemden sonra gelişti.",
      fact: "Mezopotamya 'nehirler arası' anlamına gelir."
    },
    {
      key: "hist_ipek",
      emoji: "🧵",
      title: "İpek Yolu",
      info: "Çin'den Avrupa'ya uzanan ticaret yolu, kültürleri birbirine bağladı.",
      fact: "İpek Yolu 4000 km'den uzundur."
    },
    {
      key: "hist_haçlı",
      emoji: "⚔️",
      title: "Haçlı Seferleri",
      info: "11-13. yüzyıllarda Avrupa'dan Doğu'ya çok sayıda dini savaş düzenlendi.",
      fact: "Toplam 8 büyük Haçlı Seferi yapıldı."
    },
    {
      key: "hist_rönesans",
      emoji: "🎨",
      title: "Rönesans",
      info: "14-17. yüzyıllarda Avrupa'da sanat, bilim ve düşüncede büyük bir yeniden doğuş yaşandı.",
      fact: "Leonardo da Vinci Rönesans'ın en önemli isimlerinden biridir."
    },
    {
      key: "hist_reform",
      emoji: "⛪",
      title: "Sanayi Devrimi",
      info: "18-19. yüzyıllarda buhar makinesi ile başlayan sanayi devrimi yaşam biçimini değiştirdi.",
      fact: "İlk buhar makinesi 1769'da James Watt tarafından geliştirildi."
    },
    {
      key: "hist_1dünya",
      emoji: "🌐",
      title: "I. Dünya Savaşı",
      info: "1914-1918 yılları arasında Avrupa merkezli büyük savaş yaşandı. Osmanlı da katıldı.",
      fact: "I. Dünya Savaşı'nda yaklaşık 17 milyon kişi hayatını kaybetti."
    },
    {
      key: "hist_cumhuriyetkur",
      emoji: "🏛️",
      title: "Türkiye Cumhuriyeti'nin Kuruluşu",
      info: "1923'te kurulan Türkiye Cumhuriyeti parlamenter sistemle yönetilmeye başlandı.",
      fact: "Cumhuriyet'in ilk Cumhurbaşkanı Atatürk'tür."
    },
    {
      key: "hist_sogsavas",
      emoji: "🧊",
      title: "Soğuk Savaş",
      info: "1945-1991 yılları arasında ABD ve SSCB arasında ideolojik gerilim yaşandı.",
      fact: "Berlin Duvarı 1989'da yıkıldı."
    },
    {
      key: "hist_bm",
      emoji: "🌐",
      title: "Birleşmiş Milletler",
      info: "BM, 1945'te dünya barışını korumak amacıyla kuruldu.",
      fact: "BM'nin 193 üye devleti vardır."
    },
    {
      key: "hist_uzay",
      emoji: "🚀",
      title: "Uzay Yarışı",
      info: "1957-1969 yılları arasında ABD ve SSCB uzayda üstünlük yarışı yaptı.",
      fact: "İlk ay yürüyüşü Neil Armstrong tarafından 1969'da yapıldı."
    }
  ]
};
const historyDataEn = {
  okul_oncesi: [
    {
      key: "hist_ataturk1",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk was the founder of the Republic of Turkey. He loved children very much.",
      fact: "Atatürk passed away on November 10, 1938."
    },
    {
      key: "hist_bayrak",
      emoji: "🇹🇷",
      title: "Turkish Flag",
      info: "The Turkish flag has a red background with a crescent moon and a star.",
      fact: "The red color on our flag represents courage."
    },
    {
      key: "hist_cumhuriyet",
      emoji: "🏛️",
      title: "Republic",
      info: "The Republic of Turkey was founded on October 29, 1923.",
      fact: "October 29 is celebrated as Republic Day."
    },
    {
      key: "hist_23nisan",
      emoji: "🌸",
      title: "April 23",
      info: "On April 23, 1920, the Grand National Assembly of Turkey was opened. This day was gifted to children.",
      fact: "April 23 is National Sovereignty and Children's Day."
    },
    {
      key: "hist_istanbul",
      emoji: "🕌",
      title: "Istanbul",
      info: "Istanbul is Turkey's largest city, located on both Europe and Asia.",
      fact: "Istanbul was once known as Constantinople."
    },
    {
      key: "hist_egypt",
      emoji: "🐫",
      title: "Ancient Egypt",
      info: "Ancient Egyptians built the pyramids and developed one of the earliest civilizations.",
      fact: "The Great Pyramid of Giza was built around 2560 BC."
    }
  ],
  ilkokul: [
    {
      key: "hist_kurtulus",
      emoji: "⚔️",
      title: "War of Independence",
      info: "Between 1919-1923, the Turkish people fought to save their homeland. Atatürk led this war.",
      fact: "Victory Day is celebrated on August 30."
    },
    {
      key: "hist_osmanlı",
      emoji: "👑",
      title: "Ottoman Empire",
      info: "The Ottoman Empire ruled for about 600 years. Its capital was Istanbul.",
      fact: "The Ottoman Empire was founded in 1299."
    },
    {
      key: "hist_fatih",
      emoji: "🏰",
      title: "Mehmed the Conqueror",
      info: "Mehmed II conquered Istanbul in 1453 and became one of the greatest Ottoman sultans.",
      fact: "The conquest of Istanbul took place in 1453."
    },
    {
      key: "hist_ataturk2",
      emoji: "🌟",
      title: "Atatürk's Reforms",
      info: "Atatürk made revolutions in alphabet, calendar, law and education. He gave women the right to vote.",
      fact: "The Latin alphabet was adopted in 1928."
    },
    {
      key: "hist_anadolu",
      emoji: "🏺",
      title: "Anatolian Civilizations",
      info: "The Hittites, Phrygians, Lydians and many other civilizations lived in Anatolia.",
      fact: "The Hittites made the world's first written peace treaty."
    },
    {
      key: "hist_rome",
      emoji: "🏟️",
      title: "Ancient Rome",
      info: "The Roman Empire was one of the most powerful empires in history. It influenced law, language and architecture.",
      fact: "Rome was founded in 753 BC according to legend."
    },
    {
      key: "hist_greeks",
      emoji: "🏛️",
      title: "Ancient Greece",
      info: "Ancient Greeks gave us democracy, philosophy and the Olympic Games.",
      fact: "The first Olympic Games were held in 776 BC."
    },
    {
      key: "hist_exploration",
      emoji: "🧭",
      title: "Age of Exploration",
      info: "In the 15th–16th centuries, European explorers sailed the seas discovering new lands.",
      fact: "Christopher Columbus reached the Americas in 1492."
    }
  ],
  ortaokul: [
    {
      key: "hist_ilkçag",
      emoji: "🏛️",
      title: "Ancient Civilizations",
      info: "Mesopotamia, Egypt, Greece and Rome developed after the prehistoric era.",
      fact: "Mesopotamia means 'between the rivers'."
    },
    {
      key: "hist_ipek",
      emoji: "🧵",
      title: "Silk Road",
      info: "The trade route stretching from China to Europe connected cultures to each other.",
      fact: "The Silk Road was more than 4,000 km long."
    },
    {
      key: "hist_crusades",
      emoji: "⚔️",
      title: "The Crusades",
      info: "Between the 11th–13th centuries, many religious wars were launched from Europe to the East.",
      fact: "There were 8 major Crusades in total."
    },
    {
      key: "hist_rönesans",
      emoji: "🎨",
      title: "The Renaissance",
      info: "In the 14th–17th centuries, Europe experienced a great rebirth in art, science and thought.",
      fact: "Leonardo da Vinci is one of the most important figures of the Renaissance."
    },
    {
      key: "hist_reform",
      emoji: "⛪",
      title: "Industrial Revolution",
      info: "In the 18th–19th centuries, the steam engine started a revolution that transformed people's way of life.",
      fact: "The first steam engine was developed by James Watt in 1769."
    },
    {
      key: "hist_1dünya",
      emoji: "🌐",
      title: "World War I",
      info: "A great war centered in Europe took place between 1914–1918. The Ottoman Empire also participated.",
      fact: "About 17 million people lost their lives in WWI."
    },
    {
      key: "hist_ww2",
      emoji: "🕊️",
      title: "World War II",
      info: "World War II (1939–1945) was the deadliest conflict in human history, reshaping the modern world.",
      fact: "An estimated 70–85 million people died in WWII."
    },
    {
      key: "hist_sogsavas",
      emoji: "🧊",
      title: "Cold War",
      info: "Between 1945–1991, ideological tension existed between the USA and the USSR.",
      fact: "The Berlin Wall fell in 1989."
    },
    {
      key: "hist_bm",
      emoji: "🌐",
      title: "United Nations",
      info: "The UN was founded in 1945 to maintain world peace.",
      fact: "The UN has 193 member states."
    },
    {
      key: "hist_uzay",
      emoji: "🚀",
      title: "Space Race",
      info: "Between 1957–1969, the USA and USSR competed for dominance in space.",
      fact: "The first moon walk was performed by Neil Armstrong in 1969."
    }
  ]
};
const historyDataEs = {
  okul_oncesi: [
    {
      key: "hist_ataturk1",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk fue el fundador de la República de Turquía. Amaba mucho a los niños.",
      fact: "Atatürk falleció el 10 de noviembre de 1938."
    },
    {
      key: "hist_bayrak",
      emoji: "🇹🇷",
      title: "Bandera Turca",
      info: "La bandera turca tiene un fondo rojo con una luna creciente y una estrella.",
      fact: "El color rojo de nuestra bandera representa el coraje."
    },
    {
      key: "hist_cumhuriyet",
      emoji: "🏛️",
      title: "República",
      info: "La República de Turquía fue fundada el 29 de octubre de 1923.",
      fact: "El 29 de octubre se celebra como el Día de la República."
    },
    {
      key: "hist_23nisan",
      emoji: "🌸",
      title: "23 de Abril",
      info: "El 23 de abril de 1920 se abrió la Gran Asamblea Nacional de Turquía. Este día fue regalado a los niños.",
      fact: "El 23 de abril es el Día de la Soberanía Nacional y de los Niños."
    },
    {
      key: "hist_istanbul",
      emoji: "🕌",
      title: "Estambul",
      info: "Estambul es la ciudad más grande de Turquía, ubicada tanto en Europa como en Asia.",
      fact: "Estambul fue conocida una vez como Constantinopla."
    },
    {
      key: "hist_egypt",
      emoji: "🐫",
      title: "Egipto Antiguo",
      info: "Los antiguos egipcios construyeron las pirámides y desarrollaron una de las primeras civilizaciones.",
      fact: "La Gran Pirámide de Guiza fue construida alrededor del 2560 a.C."
    }
  ],
  ilkokul: [
    {
      key: "hist_kurtulus",
      emoji: "⚔️",
      title: "Guerra de Independencia",
      info: "Entre 1919-1923, el pueblo turco luchó para salvar su patria. Atatürk lideró esta guerra.",
      fact: "El Día de la Victoria se celebra el 30 de agosto."
    },
    {
      key: "hist_osmanlı",
      emoji: "👑",
      title: "Imperio Otomano",
      info: "El Imperio Otomano gobernó durante aproximadamente 600 años. Su capital era Estambul.",
      fact: "El Imperio Otomano fue fundado en 1299."
    },
    {
      key: "hist_fatih",
      emoji: "🏰",
      title: "Mehmed el Conquistador",
      info: "Mehmed II conquistó Estambul en 1453 y se convirtió en uno de los más grandes sultanes otomanos.",
      fact: "La conquista de Estambul tuvo lugar en 1453."
    },
    {
      key: "hist_ataturk2",
      emoji: "🌟",
      title: "Reformas de Atatürk",
      info: "Atatürk hizo revoluciones en el alfabeto, el calendario, la ley y la educación. Dio a las mujeres el derecho al voto.",
      fact: "El alfabeto latino fue adoptado en 1928."
    },
    {
      key: "hist_anadolu",
      emoji: "🏺",
      title: "Civilizaciones de Anatolia",
      info: "Los hititas, frigios, lidios y muchas otras civilizaciones vivieron en Anatolia.",
      fact: "Los hititas hicieron el primer tratado de paz escrito del mundo."
    },
    {
      key: "hist_rome",
      emoji: "🏟️",
      title: "Roma Antigua",
      info: "El Imperio Romano fue uno de los más poderosos en la historia. Influyó en la ley, el idioma y la arquitectura.",
      fact: "Roma fue fundada en el 753 a.C. según la leyenda."
    },
    {
      key: "hist_greeks",
      emoji: "🏛️",
      title: "Grecia Antigua",
      info: "Los antiguos griegos nos dieron la democracia, la filosofía y los Juegos Olímpicos.",
      fact: "Los primeros Juegos Olímpicos se celebraron en el 776 a.C."
    },
    {
      key: "hist_exploration",
      emoji: "🧭",
      title: "Era de Exploración",
      info: "En los siglos XV-XVI, los exploradores europeos navegaron los mares descubriendo nuevas tierras.",
      fact: "Cristóbal Colón llegó a las Américas en 1492."
    }
  ],
  ortaokul: [
    {
      key: "hist_ilkçag",
      emoji: "🏛️",
      title: "Civilizaciones Antiguas",
      info: "Mesopotamia, Egipto, Grecia y Roma se desarrollaron después de la era prehistórica.",
      fact: "Mesopotamia significa 'entre los ríos'."
    },
    {
      key: "hist_ipek",
      emoji: "🧵",
      title: "Ruta de la Seda",
      info: "La ruta comercial que se extendía desde China hasta Europa conectó culturas entre sí.",
      fact: "La Ruta de la Seda tenía más de 4.000 km de largo."
    },
    {
      key: "hist_crusades",
      emoji: "⚔️",
      title: "Las Cruzadas",
      info: "Entre los siglos XI-XIII, se lanzaron muchas guerras religiosas desde Europa hacia el Este.",
      fact: "Hubo 8 Cruzadas principales en total."
    },
    {
      key: "hist_rönesans",
      emoji: "🎨",
      title: "El Renacimiento",
      info: "En los siglos XIV-XVII, Europa experimentó un gran renacimiento en arte, ciencia y pensamiento.",
      fact: "Leonardo da Vinci es una de las figuras más importantes del Renacimiento."
    },
    {
      key: "hist_reform",
      emoji: "⛪",
      title: "Revolución Industrial",
      info: "En los siglos XVIII-XIX, la máquina de vapor inició una revolución que transformó el modo de vida.",
      fact: "La primera máquina de vapor fue desarrollada por James Watt en 1769."
    },
    {
      key: "hist_1dünya",
      emoji: "🌐",
      title: "Primera Guerra Mundial",
      info: "Una gran guerra centrada en Europa tuvo lugar entre 1914-1918. El Imperio Otomano también participó.",
      fact: "Aproximadamente 17 millones de personas perdieron la vida en la I GM."
    },
    {
      key: "hist_ww2",
      emoji: "🕊️",
      title: "Segunda Guerra Mundial",
      info: "La Segunda Guerra Mundial (1939-1945) fue el conflicto más mortífero en la historia humana.",
      fact: "Se estima que murieron entre 70-85 millones de personas en la II GM."
    },
    {
      key: "hist_sogsavas",
      emoji: "🧊",
      title: "Guerra Fría",
      info: "Entre 1945-1991, existió tensión ideológica entre EE.UU. y la URSS.",
      fact: "El Muro de Berlín cayó en 1989."
    },
    {
      key: "hist_bm",
      emoji: "🌐",
      title: "Naciones Unidas",
      info: "La ONU fue fundada en 1945 para mantener la paz mundial.",
      fact: "La ONU tiene 193 estados miembros."
    },
    {
      key: "hist_uzay",
      emoji: "🚀",
      title: "Carrera Espacial",
      info: "Entre 1957-1969, EE.UU. y la URSS compitieron por la dominación del espacio.",
      fact: "La primera caminata lunar fue realizada por Neil Armstrong en 1969."
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
const historyDataFr = {
  okul_oncesi: [
    {
      key: "hist_atatürk_fr",
      emoji: "🌟",
      title: "Atatürk",
      info: "Mustafa Kemal Atatürk est le fondateur de la République de Turquie. Il aimait beaucoup les enfants.",
      fact: "Atatürk est décédé le 10 novembre 1938."
    },
    {
      key: "hist_drapeau_fr",
      emoji: "🇹🇷",
      title: "Le Drapeau Turc",
      info: "Le drapeau turc est rouge avec un croissant et une étoile blancs.",
      fact: "Le rouge sur notre drapeau symbolise le courage."
    },
    {
      key: "hist_republique_fr",
      emoji: "🏛️",
      title: "La République",
      info: "La République de Turquie a été fondée le 29 octobre 1923.",
      fact: "Le 29 octobre est célébré comme la Fête de la République."
    },
    {
      key: "hist_france_fr",
      emoji: "🇫🇷",
      title: "La France",
      info: "La France est une grande nation d'Europe. Elle a une longue et riche histoire.",
      fact: "La Révolution française a eu lieu en 1789."
    },
    {
      key: "hist_pharaons_fr",
      emoji: "🏺",
      title: "Les Pharaons",
      info: "Les pharaons étaient les rois de l'ancienne Égypte. Ils construisaient de grandes pyramides.",
      fact: "La grande pyramide de Gizeh a été construite il y a plus de 4500 ans."
    },
    {
      key: "hist_istanbul_fr",
      emoji: "🕌",
      title: "Istanbul",
      info: "Istanbul est la plus grande ville de Turquie, située entre l'Europe et l'Asie.",
      fact: "Istanbul s'appelait autrefois Constantinople."
    }
  ],
  ilkokul: [
    {
      key: "hist_guerreindep_fr",
      emoji: "⚔️",
      title: "Guerre d'Indépendance",
      info: "De 1919 à 1923, le peuple turc s'est battu pour libérer sa patrie. Atatürk a dirigé cette guerre.",
      fact: "La Fête de la Victoire est célébrée le 30 août."
    },
    {
      key: "hist_romains_fr",
      emoji: "🏛️",
      title: "Les Romains",
      info: "L'Empire romain était l'un des plus grands empires du monde antique. Il a duré plus de 1000 ans.",
      fact: "Rome a été fondée selon la légende en 753 avant J.-C."
    },
    {
      key: "hist_grece_fr",
      emoji: "🏺",
      title: "La Grèce Antique",
      info: "La Grèce antique a inventé la démocratie et les Jeux olympiques. Les philosophes grecs ont influencé le monde entier.",
      fact: "Les premiers Jeux olympiques ont eu lieu en 776 avant J.-C."
    },
    {
      key: "hist_reformes_fr",
      emoji: "🌟",
      title: "Les Réformes d'Atatürk",
      info: "Atatürk a réformé l'alphabet, le calendrier, le droit et l'éducation. Il a accordé le droit de vote aux femmes.",
      fact: "L'alphabet latin a été adopté en 1928 en Turquie."
    },
    {
      key: "hist_mehmet2_fr",
      emoji: "🏰",
      title: "Mehmed II",
      info: "Mehmed II a conquis Constantinople en 1453, faisant de la ville la capitale ottomane.",
      fact: "Mehmed II avait seulement 21 ans lors de la conquête."
    },
    {
      key: "hist_renaissance_fr",
      emoji: "🎨",
      title: "La Renaissance",
      info: "La Renaissance (14e-17e siècle) a été une période de renouveau des arts et des sciences en Europe.",
      fact: "Léonard de Vinci était un génie de la Renaissance — artiste et inventeur."
    },
    {
      key: "hist_decouvertes_fr",
      emoji: "⛵",
      title: "Grandes Découvertes",
      info: "Au 15e et 16e siècle, les explorateurs européens ont découvert de nouvelles terres et tracé de nouvelles routes maritimes.",
      fact: "Christophe Colomb a atteint l'Amérique en 1492."
    },
    {
      key: "hist_ottoman_fr",
      emoji: "👑",
      title: "Empire Ottoman",
      info: "L'Empire ottoman a régné pendant environ 600 ans. Sa capitale était Istanbul.",
      fact: "L'Empire ottoman a été fondé en 1299."
    }
  ],
  ortaokul: [
    {
      key: "hist_rev_fr",
      emoji: "⚡",
      title: "Révolution Industrielle",
      info: "La Révolution industrielle a transformé la production au 18e-19e siècle. Les machines ont remplacé le travail manuel.",
      fact: "La machine à vapeur de James Watt a changé le monde en 1769."
    },
    {
      key: "hist_revfr_fr",
      emoji: "🗽",
      title: "Révolution Française",
      info: "La Révolution française (1789) a renversé la monarchie et établi les principes de liberté, égalité, fraternité.",
      fact: "La prise de la Bastille le 14 juillet est la Fête nationale française."
    },
    {
      key: "hist_napoleon_fr",
      emoji: "🎖️",
      title: "Napoléon Bonaparte",
      info: "Napoléon Bonaparte était un général et empereur français qui a conquis une grande partie de l'Europe.",
      fact: "Napoléon a créé le Code civil, encore en vigueur dans de nombreux pays."
    },
    {
      key: "hist_ww1_fr",
      emoji: "🕊️",
      title: "Première Guerre mondiale",
      info: "La Première Guerre mondiale (1914-1918) a impliqué la plupart des nations européennes et a causé des millions de morts.",
      fact: "Le traité de Versailles a mis fin à la guerre en 1919."
    },
    {
      key: "hist_ww2_fr",
      emoji: "🌍",
      title: "Deuxième Guerre mondiale",
      info: "La Deuxième Guerre mondiale (1939-1945) était le conflit le plus dévastateur de l'histoire, impliquant plus de 30 pays.",
      fact: "L'ONU a été fondée en 1945 après la Deuxième Guerre mondiale."
    },
    {
      key: "hist_droitshomme_fr",
      emoji: "✊",
      title: "Droits de l'Homme",
      info: "La Déclaration universelle des droits de l'Homme de 1948 garantit les libertés fondamentales pour tous.",
      fact: "Eleanor Roosevelt a dirigé la rédaction de cette déclaration."
    },
    {
      key: "hist_independent_fr",
      emoji: "🌟",
      title: "Indépendances Africaines",
      info: "Dans les années 1960, de nombreux pays africains ont obtenu leur indépendance des puissances coloniales.",
      fact: "1960 est appelée 'l'année de l'Afrique' avec 17 indépendances."
    },
    {
      key: "hist_lune_fr",
      emoji: "🌙",
      title: "Conquête de l'Espace",
      info: "En 1969, l'astronaute Neil Armstrong est devenu le premier homme à marcher sur la Lune.",
      fact: "La mission Apollo 11 a emmené les premiers humains sur la Lune."
    }
  ]
};
const levelTabsFr = [
  { key: "okul_oncesi", label: "🌈 Maternelle" },
  { key: "ilkokul", label: "📗 Primaire" },
  { key: "ortaokul", label: "📘 Collège" }
];
const historyDataZh = {
  okul_oncesi: [
    {
      key: "hist_zhangcheng_zh",
      emoji: "🏯",
      title: "万里长城",
      info: "万里长城是中国古代建造的伟大防御工程，蜿蜒数千公里。",
      fact: "长城是世界上最长的人工建筑之一。"
    },
    {
      key: "hist_kongzi_zh",
      emoji: "🌟",
      title: "孔子",
      info: "孔子是中国古代伟大的思想家和教育家，他非常重视学习和礼仪。",
      fact: "孔子生活在约2500年前。"
    },
    {
      key: "hist_sichoudao_zh",
      emoji: "🐫",
      title: "丝绸之路",
      info: "丝绸之路是古代连接中国与欧洲的贸易路线，通过它传递货物和文化。",
      fact: "丝绸之路因运送丝绸而得名。"
    },
    {
      key: "hist_pyramid_zh",
      emoji: "🏺",
      title: "埃及金字塔",
      info: "古埃及法老建造了巨大的金字塔作为陵墓，至今依然令人惊叹。",
      fact: "最大的金字塔是吉萨大金字塔，建于4500多年前。"
    },
    {
      key: "hist_tuluo_zh",
      emoji: "🏛️",
      title: "古希腊",
      info: "古希腊人发明了民主制度和奥林匹克运动会，对世界影响深远。",
      fact: "第一届奥林匹克运动会于公元前776年举行。"
    },
    {
      key: "hist_caidao_zh",
      emoji: "📜",
      title: "中国四大发明",
      info: "中国古代发明了造纸术、印刷术、火药和指南针，改变了世界历史。",
      fact: "造纸术是蔡伦在约公元105年发明的。"
    }
  ],
  ilkokul: [
    {
      key: "hist_qinchao_zh",
      emoji: "👑",
      title: "秦朝",
      info: "秦始皇统一中国，建立了第一个统一的封建王朝，并修建了长城。",
      fact: "秦始皇陵有著名的兵马俑。"
    },
    {
      key: "hist_tangchao_zh",
      emoji: "🎨",
      title: "唐朝",
      info: "唐朝是中国历史上最繁荣的朝代之一，诗歌、艺术和贸易都非常发达。",
      fact: "唐朝的长安是当时世界上最大的城市之一。"
    },
    {
      key: "hist_rome_zh",
      emoji: "🏛️",
      title: "罗马帝国",
      info: "罗马帝国是古代世界最强大的帝国之一，持续了1000多年。",
      fact: "罗马据传说建于公元前753年。"
    },
    {
      key: "hist_menggu_zh",
      emoji: "🐴",
      title: "蒙古帝国",
      info: "成吉思汗建立了历史上最大的陆地帝国，版图横跨亚欧大陆。",
      fact: "蒙古帝国是历史上疆域最广的连续帝国。"
    },
    {
      key: "hist_wenyi_zh",
      emoji: "🎭",
      title: "文艺复兴",
      info: "文艺复兴（14-17世纪）是欧洲艺术和科学的复兴时期。",
      fact: "达·芬奇是文艺复兴时期的天才——既是艺术家又是发明家。"
    },
    {
      key: "hist_d航海_zh",
      emoji: "⛵",
      title: "大航海时代",
      info: "15-16世纪，欧洲探险家发现了新大陆并开辟了新航路。",
      fact: "哥伦布于1492年到达美洲。"
    },
    {
      key: "hist_gongye_zh",
      emoji: "⚙️",
      title: "工业革命",
      info: "18-19世纪的工业革命用机器代替了手工劳动，改变了生产方式。",
      fact: "蒸汽机是工业革命中最重要的发明之一。"
    },
    {
      key: "hist_minguo_zh",
      emoji: "🌏",
      title: "中华民国",
      info: "1912年中华民国成立，结束了中国两千多年的封建帝制。",
      fact: "孙中山是中华民国的国父。"
    }
  ],
  ortaokul: [
    {
      key: "hist_erhan_zh",
      emoji: "🌐",
      title: "二战",
      info: "第二次世界大战（1939-1945年）是人类历史上规模最大的战争，影响了全世界。",
      fact: "联合国在二战后成立，旨在维护世界和平。"
    },
    {
      key: "hist_lengzhan_zh",
      emoji: "🚀",
      title: "冷战",
      info: "冷战（1947-1991年）是美苏两大超级大国之间的政治和军事对峙。",
      fact: "苏联于1957年发射了世界上第一颗人造卫星。"
    },
    {
      key: "hist_renquan_zh",
      emoji: "✊",
      title: "人权运动",
      info: "20世纪民权运动争取平等权利，马丁·路德·金是其中的重要领导人。",
      fact: "马丁·路德·金于1964年获得诺贝尔和平奖。"
    },
    {
      key: "hist_quanqiu_zh",
      emoji: "🌍",
      title: "全球化",
      info: "20世纪后期，全球化加速了各国之间的经济和文化交流。",
      fact: "互联网是全球化最重要的推动力之一。"
    },
    {
      key: "hist_zhongguo_xd_zh",
      emoji: "🇨🇳",
      title: "中华人民共和国",
      info: "1949年中华人民共和国成立，中国进入了新的历史时期。",
      fact: "新中国成立后实施了一系列现代化改革。"
    },
    {
      key: "hist_yuetai_zh",
      emoji: "🌙",
      title: "登月",
      info: "1969年，宇航员尼尔·阿姆斯特朗成为第一个登上月球的人。",
      fact: "阿波罗11号任务将人类首次带上了月球。"
    },
    {
      key: "hist_huanjing_zh",
      emoji: "🌱",
      title: "环保运动",
      info: "20世纪后期，全球环境保护意识兴起，人们开始关注气候变化和生态保护。",
      fact: "1972年首次联合国环境会议在斯德哥尔摩召开。"
    },
    {
      key: "hist_keji_zh",
      emoji: "💻",
      title: "信息时代",
      info: "20世纪末，计算机和互联网的普及开启了信息时代，改变了人类生活方式。",
      fact: "蒂姆·伯纳斯-李于1989年发明了万维网。"
    }
  ]
};
const levelTabsZh = [
  { key: "okul_oncesi", label: "🌈 学前班" },
  { key: "ilkokul", label: "📗 小学" },
  { key: "ortaokul", label: "📘 初中" }
];
const historyDataHi = {
  okul_oncesi: [
    {
      key: "hist_mahatma_hi",
      emoji: "🕊️",
      title: "महात्मा गांधी",
      info: "महात्मा गांधी भारत के राष्ट्रपिता हैं। उन्होंने बिना हिंसा के भारत को आजादी दिलाई।",
      fact: "गांधीजी को 'बापू' भी कहते हैं।"
    },
    {
      key: "hist_piramid_hi",
      emoji: "🏺",
      title: "मिस्र के पिरामिड",
      info: "प्राचीन मिस्र के फराओ ने विशाल पिरामिड बनवाए जो आज भी खड़े हैं।",
      fact: "गीज़ा का महान पिरामिड 4500 साल से भी पुराना है।"
    },
    {
      key: "hist_buddha_hi",
      emoji: "☸️",
      title: "बुद्ध",
      info: "गौतम बुद्ध ने बौद्ध धर्म की स्थापना की। उन्होंने शांति और करुणा का संदेश दिया।",
      fact: "बुद्ध का जन्म नेपाल के लुंबिनी में हुआ था।"
    },
    {
      key: "hist_ashoka_hi",
      emoji: "👑",
      title: "सम्राट अशोक",
      info: "सम्राट अशोक मौर्य साम्राज्य के महान राजा थे जिन्होंने बौद्ध धर्म अपनाया।",
      fact: "भारत के राष्ट्रीय चिह्न में अशोक स्तंभ का चित्र है।"
    },
    {
      key: "hist_ramayan_hi",
      emoji: "🏹",
      title: "रामायण",
      info: "रामायण एक प्राचीन भारतीय महाकाव्य है जिसमें राम, सीता और रावण की कहानी है।",
      fact: "रामायण वाल्मीकि ने लिखी थी।"
    },
    {
      key: "hist_indus_hi",
      emoji: "🏛️",
      title: "सिंधु घाटी सभ्यता",
      info: "सिंधु घाटी सभ्यता भारत और पाकिस्तान में थी। यह 5000 साल पुरानी सभ्यता है।",
      fact: "मोहनजोदड़ो और हड़प्पा इसके प्रमुख शहर थे।"
    }
  ],
  ilkokul: [
    {
      key: "hist_mughal_hi",
      emoji: "🕌",
      title: "मुगल साम्राज्य",
      info: "मुगल साम्राज्य ने भारत पर 300 साल से अधिक शासन किया। ताज महल इसी काल में बना।",
      fact: "ताज महल शाहजहाँ ने अपनी पत्नी मुमताज की याद में बनवाया था।"
    },
    {
      key: "hist_greek_hi",
      emoji: "🏛️",
      title: "प्राचीन ग्रीस",
      info: "प्राचीन ग्रीक लोगों ने लोकतंत्र और ओलंपिक खेलों का आविष्कार किया।",
      fact: "पहले ओलंपिक खेल 776 ईसा पूर्व में हुए थे।"
    },
    {
      key: "hist_rome_hi",
      emoji: "🗼",
      title: "रोमन साम्राज्य",
      info: "रोमन साम्राज्य प्राचीन दुनिया के सबसे शक्तिशाली साम्राज्यों में से एक था।",
      fact: "रोम की स्थापना 753 ईसा पूर्व में हुई थी।"
    },
    {
      key: "hist_print_hi",
      emoji: "📜",
      title: "छपाई का आविष्कार",
      info: "गुटेनबर्ग ने 1440 में छपाई मशीन का आविष्कार किया जिससे किताबें आम लोगों तक पहुँचीं।",
      fact: "छपाई मशीन ने ज्ञान के प्रसार में क्रांति ला दी।"
    },
    {
      key: "hist_discovery_hi",
      emoji: "⛵",
      title: "भौगोलिक खोजें",
      info: "15वीं-16वीं सदी में यूरोपीय खोजकर्ताओं ने नए देश खोजे और नए समुद्री मार्ग बनाए।",
      fact: "कोलंबस 1492 में अमेरिका पहुँचे।"
    },
    {
      key: "hist_industrial_hi",
      emoji: "⚙️",
      title: "औद्योगिक क्रांति",
      info: "18वीं-19वीं सदी की औद्योगिक क्रांति में मशीनों ने हाथ के काम की जगह ली।",
      fact: "भाप इंजन औद्योगिक क्रांति का सबसे महत्वपूर्ण आविष्कार था।"
    },
    {
      key: "hist_swatantrata_hi",
      emoji: "🇮🇳",
      title: "भारत की आजादी",
      info: "15 अगस्त 1947 को भारत को ब्रिटिश शासन से आजादी मिली।",
      fact: "जवाहरलाल नेहरू स्वतंत्र भारत के पहले प्रधानमंत्री बने।"
    },
    {
      key: "hist_sanvidhan_hi",
      emoji: "📖",
      title: "भारतीय संविधान",
      info: "26 जनवरी 1950 को भारतीय संविधान लागू हुआ। डॉ. भीमराव अंबेडकर ने इसे बनाया।",
      fact: "भारतीय संविधान दुनिया का सबसे बड़ा लिखित संविधान है।"
    }
  ],
  ortaokul: [
    {
      key: "hist_ww2_hi",
      emoji: "🌐",
      title: "द्वितीय विश्व युद्ध",
      info: "1939-1945 का द्वितीय विश्व युद्ध मानव इतिहास का सबसे बड़ा युद्ध था जिसने पूरी दुनिया को प्रभावित किया।",
      fact: "संयुक्त राष्ट्र की स्थापना इस युद्ध के बाद शांति बनाए रखने के लिए हुई।"
    },
    {
      key: "hist_coldwar_hi",
      emoji: "🚀",
      title: "शीत युद्ध",
      info: "शीत युद्ध (1947-1991) अमेरिका और सोवियत संघ के बीच राजनीतिक तनाव का दौर था।",
      fact: "1969 में अमेरिका ने चंद्रमा पर पहला कदम रखा।"
    },
    {
      key: "hist_renaissance_hi",
      emoji: "🎭",
      title: "पुनर्जागरण",
      info: "पुनर्जागरण (14वीं-17वीं सदी) यूरोप में कला और विज्ञान के पुनरुत्थान का काल था।",
      fact: "लियोनार्डो दा विंची पुनर्जागरण के महान कलाकार और वैज्ञानिक थे।"
    },
    {
      key: "hist_french_revolution_hi",
      emoji: "⚔️",
      title: "फ्रांसीसी क्रांति",
      info: "1789 की फ्रांसीसी क्रांति ने स्वतंत्रता, समानता और बंधुत्व के आदर्श स्थापित किए।",
      fact: "इस क्रांति ने पूरे यूरोप में राजशाही को चुनौती दी।"
    },
    {
      key: "hist_un_hi",
      emoji: "🕊️",
      title: "संयुक्त राष्ट्र",
      info: "संयुक्त राष्ट्र की स्थापना 1945 में दुनिया में शांति और सहयोग बनाए रखने के लिए हुई।",
      fact: "संयुक्त राष्ट्र में 193 सदस्य देश हैं।"
    },
    {
      key: "hist_space_hi",
      emoji: "🛸",
      title: "अंतरिक्ष युग",
      info: "1957 में सोवियत संघ ने पहला उपग्रह स्पुतनिक लॉन्च किया और अंतरिक्ष युग शुरू हुआ।",
      fact: "यूरी गागारिन 1961 में अंतरिक्ष में जाने वाले पहले इंसान थे।"
    },
    {
      key: "hist_internet_hi",
      emoji: "💻",
      title: "इंटरनेट का आविष्कार",
      info: "1969 में अमेरिकी सेना ने ARPANET बनाया जो बाद में इंटरनेट बना और दुनिया बदल गई।",
      fact: "1991 में टिम बर्नर्स-ली ने वर्ल्ड वाइड वेब बनाया।"
    },
    {
      key: "hist_isro_hi",
      emoji: "🚀",
      title: "भारत का अंतरिक्ष कार्यक्रम",
      info: "ISRO (भारतीय अंतरिक्ष अनुसंधान संगठन) ने मंगलयान और चंद्रयान जैसे अभियान भेजे।",
      fact: "भारत पहले प्रयास में मंगल ग्रह पर पहुँचने वाला पहला देश है।"
    }
  ]
};
const levelTabsHi = [
  { key: "okul_oncesi", label: "🌈 प्री-स्कूल" },
  { key: "ilkokul", label: "📗 प्राथमिक" },
  { key: "ortaokul", label: "📘 मिडिल स्कूल" }
];
function HistoryPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const isZh = lang === "zh";
  const isHi = lang === "hi";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "history");
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
  const historyData = isZh ? historyDataZh : isHi ? historyDataHi : isEn ? historyDataEn : isEs ? historyDataEs : isFr ? historyDataFr : historyDataTr;
  const levelTabs = isZh ? levelTabsZh : isHi ? levelTabsHi : isEn ? levelTabsEn : isEs ? levelTabsEs : isFr ? levelTabsFr : levelTabsTr;
  const flashCards = historyData[level].map((item) => ({
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
  const filtered = historyData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.info.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = historyData[level].length;
  const done = historyData[level].filter(
    (p) => readTopics.includes(p.key)
  ).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-amber-800 to-yellow-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
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
        "🏛️",
        " ",
        isEn ? "History Cards" : isEs ? "Tarjetas de Historia" : isFr ? "Cartes d'Histoire" : "Tarih Kartları"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "history.open_modal_button",
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
        accentColor: "from-amber-700 to-yellow-600"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-amber-800" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏛️" }),
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
  HistoryPage as default
};
