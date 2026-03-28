import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-DmSUNioT.js";
const scienceDataTr = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Bitkiler",
      info: "Bitkiler topraktan su ve güneş ışığından yararlanarak büyür.",
      fact: "Bitkiler bizim için oksijen üretir!"
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Hayvanlar",
      info: "Hayvanlar canlılardır. Bazıları evcil, bazıları vahsi yaşar.",
      fact: "Dünyada 8 milyondan fazla hayvan türü var!"
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "Su",
      info: "Su hayat için çok önemlidir. Insan vücudunun %60'ı sudan oluşur.",
      fact: "Su katı, sıvı ve gaz halinde bulunabilir."
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "Gökyüzü",
      info: "Gökyüzünde güneş, ay, yıldızlar ve bulutlar var.",
      fact: "Ay, Dünya'nın tek doğal uydusu."
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Mevsimler",
      info: "Yılda 4 mevsim vardır: İlkbahar, Yaz, Sonbahar ve Kış.",
      fact: "Mevsimler Dünya'nın eğimli dönüşünden kaynaklanır."
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Renkler",
      info: "Güneş ışığında 7 temel renk gizlidir. Gökkusanda görülebilir.",
      fact: "Kırmızı, mavi ve sarı ana renklerdir."
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "Hava Durumu",
      info: "Günleri güneşli, yağmurlu, karlı ya da bulutlu olabilir.",
      fact: "Sıcaklık ölçmek için termometre kullanılır."
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "Mıknatıs",
      info: "Mıknatıslar demir nesneleri çekerler. Kuzey ve Güney kutbu var.",
      fact: "Dünya'nın kendisi de büyük bir mıknatıstır!"
    }
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "Fotosentez",
      info: "Bitkiler güneş ışığını kullanarak karbondioksit ve suyu besin ve oksijene dönüştürür.",
      fact: "Fotosentez olmadan Dünya'da oksijen olmazdı."
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "Maddenin Halleri",
      info: "Madde katı, sıvı ve gaz halinde bulunur. Isı ile hal değiştirme olur.",
      fact: "Demir yüksek sıcaklıkta sıvılaşır."
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "İşık",
      info: "İşık gözle görülebilen enerji şeklidir. Düz yolda ilerler.",
      fact: "İşık saniyede 300.000 km hızla ilerler."
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "Ses",
      info: "Ses, titreşimlerle oluşur ve hava ile taşınır. Farklı frekanslarda çıkar.",
      fact: "Uzayda ses taşınacak ortam olmadığından ses duyulmaz."
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "Ekosistem",
      info: "Bir bölgede yaşayan tüm canlılar ve cansız öğeler birlikte bir ekosistem oluşturur.",
      fact: "Ormanlar dünyanın akciğerleri olarak bilinir."
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "Kuvvet",
      info: "Kuvvet cisimlerin hareket etmesini sağlar. Çekme, itme, sürtünme kuvveti örnekleri.",
      fact: "Yer çekimi kuvveti bizi yere bastırır."
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "Toprak",
      info: "Toprak, kayaların parçalanmasıyla oluşur ve bitkilerin yaşaması için gereklidir.",
      fact: "1 cm toprak oluşması yüzlerce yıl alır."
    }
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Atom ve Molekül",
      info: "Her madde atomlardan oluşur. Atomlar birleşerek molekülleri oluşturur.",
      fact: "Bir insan içinde yaklaşık 7 oktilyon atom var!"
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "DNA",
      info: "DNA canlıların genetik bilgisini taşır. Her insanın DNAsı benzersizdir.",
      fact: "Bir hücreden çıkarılıp uzatılsa DNA 2 metre olur."
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "Evrim",
      info: "Canlılar milyonlarca yıl boyunca ortama uyum sağlayarak değişmiştir.",
      fact: "Darwin 1859'da evrim teorisini yayımladı."
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Kimyasal Tepkimeler",
      info: "Maddeler birleşerek ya da ayrışarak yeni maddeler oluşturabilir.",
      fact: "Demir ve oksijenin birleşmesi pas oluşturur."
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "Elektrik",
      info: "Elektronların hareketi elektrik akımını oluşturur. Devreler elektriği taşır.",
      fact: "şimşek, atmosferdeki statik elektrik boşalmasıdır."
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "Uzay",
      info: "Evren; yıldızlar, gezegenler, galaksiler ve karanlık maddeden oluşur.",
      fact: "Güneş sistemi 4.6 milyar yaşındadır."
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Newton Yasaları",
      info: "Newton'un 3 hareket yasası cisimlerin nasıl hareket ettiğini açıklar.",
      fact: "Newton elmanin düşmesinden yerçekimini keşfetti."
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "Optik",
      info: "Merçekler ışığı kırarak görüntü oluşturur. Gözlük, mikrop ve teleskop bunu kullanır.",
      fact: "Teleskop 1608'de Hollandalı Hans Lippershey tarafından icat edildi."
    }
  ]
};
const scienceDataEn = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Plants",
      info: "Plants grow using water and sunlight from the ground.",
      fact: "Plants produce oxygen for us!"
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Animals",
      info: "Animals are living things. Some are tame, some live in the wild.",
      fact: "There are more than 8 million animal species on Earth!"
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "Water",
      info: "Water is very important for life. 60% of the human body is made of water.",
      fact: "Water can exist as solid, liquid and gas."
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "Sky",
      info: "In the sky there are the sun, moon, stars and clouds.",
      fact: "The Moon is Earth's only natural satellite."
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Seasons",
      info: "There are 4 seasons in a year: Spring, Summer, Autumn and Winter.",
      fact: "Seasons are caused by Earth's tilted orbit."
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Colors",
      info: "Sunlight contains 7 colors hidden within it. They can be seen in a rainbow.",
      fact: "Red, blue and yellow are the primary colors."
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "Weather",
      info: "Days can be sunny, rainy, snowy or cloudy.",
      fact: "A thermometer is used to measure temperature."
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "Magnet",
      info: "Magnets attract iron objects. They have a North and South pole.",
      fact: "Earth itself is one big magnet!"
    }
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "Photosynthesis",
      info: "Plants use sunlight to convert carbon dioxide and water into food and oxygen.",
      fact: "Without photosynthesis there would be no oxygen on Earth."
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "States of Matter",
      info: "Matter exists in solid, liquid and gas states. Heat causes changes of state.",
      fact: "Iron melts into liquid at very high temperatures."
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "Light",
      info: "Light is a form of energy visible to the eye. It travels in a straight line.",
      fact: "Light travels at 300,000 km per second."
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "Sound",
      info: "Sound is produced by vibrations and is carried through the air at different frequencies.",
      fact: "There is no sound in space because there is no medium to carry it."
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "Ecosystem",
      info: "All living and non-living things in an area together form an ecosystem.",
      fact: "Forests are known as the lungs of the Earth."
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "Force",
      info: "Force makes objects move. Pull, push and friction are examples of forces.",
      fact: "Gravity keeps us on the ground."
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "Soil",
      info: "Soil forms from the breakdown of rocks and is essential for plant life.",
      fact: "Forming 1 cm of soil takes hundreds of years."
    }
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Atoms & Molecules",
      info: "All matter is made of atoms. Atoms join together to form molecules.",
      fact: "The human body contains about 7 octillion atoms!"
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "DNA",
      info: "DNA carries the genetic information of living things. Every person's DNA is unique.",
      fact: "If stretched out, the DNA in one cell would be 2 meters long."
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "Evolution",
      info: "Living things have changed over millions of years by adapting to their environment.",
      fact: "Darwin published the theory of evolution in 1859."
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Chemical Reactions",
      info: "Substances can combine or break apart to form new substances.",
      fact: "Iron and oxygen combining creates rust."
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "Electricity",
      info: "The movement of electrons creates electric current. Circuits carry electricity.",
      fact: "Lightning is a discharge of static electricity in the atmosphere."
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "Space",
      info: "The universe consists of stars, planets, galaxies and dark matter.",
      fact: "The solar system is 4.6 billion years old."
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Newton's Laws",
      info: "Newton's 3 laws of motion explain how objects move.",
      fact: "Newton discovered gravity from watching an apple fall."
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "Optics",
      info: "Lenses refract light to form images. Glasses, microscopes and telescopes use this.",
      fact: "The telescope was invented by Dutch Hans Lippershey in 1608."
    }
  ]
};
const scienceDataEs = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Las Plantas",
      info: "Las plantas crecen usando agua y luz solar del suelo.",
      fact: "¡Las plantas producen oxígeno para nosotros!"
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Los Animales",
      info: "Los animales son seres vivos. Algunos son domésticos, otros viven en la naturaleza.",
      fact: "¡Hay más de 8 millones de especies animales en la Tierra!"
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "El Agua",
      info: "El agua es muy importante para la vida. El 60% del cuerpo humano está formado por agua.",
      fact: "El agua puede existir como sólido, líquido y gas."
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "El Cielo",
      info: "En el cielo hay sol, luna, estrellas y nubes.",
      fact: "La Luna es el único satélite natural de la Tierra."
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Las Estaciones",
      info: "Hay 4 estaciones en un año: Primavera, Verano, Otoño e Invierno.",
      fact: "Las estaciones son causadas por la inclinación de la órbita terrestre."
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Los Colores",
      info: "La luz solar contiene 7 colores ocultos en ella. Se pueden ver en un arcoíris.",
      fact: "El rojo, el azul y el amarillo son los colores primarios."
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "El Tiempo",
      info: "Los días pueden ser soleados, lluviosos, nevados o nublados.",
      fact: "Se usa un termómetro para medir la temperatura."
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "El Imán",
      info: "Los imanes atraen objetos de hierro. Tienen un polo Norte y un polo Sur.",
      fact: "¡La propia Tierra es un gran imán!"
    }
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "La Fotosíntesis",
      info: "Las plantas usan la luz solar para convertir el dióxido de carbono y el agua en alimento y oxígeno.",
      fact: "Sin fotosíntesis no habría oxígeno en la Tierra."
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "Estados de la Materia",
      info: "La materia existe en estados sólido, líquido y gaseoso. El calor provoca cambios de estado.",
      fact: "El hierro se funde en líquido a temperaturas muy altas."
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "La Luz",
      info: "La luz es una forma de energía visible para el ojo. Viaja en línea recta.",
      fact: "La luz viaja a 300.000 km por segundo."
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "El Sonido",
      info: "El sonido es producido por vibraciones y se transmite por el aire a diferentes frecuencias.",
      fact: "No hay sonido en el espacio porque no hay medio para transportarlo."
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "El Ecosistema",
      info: "Todos los seres vivos y no vivos de una zona forman juntos un ecosistema.",
      fact: "Los bosques son conocidos como los pulmones de la Tierra."
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "La Fuerza",
      info: "La fuerza hace que los objetos se muevan. La tracción, el empuje y la fricción son ejemplos de fuerzas.",
      fact: "La gravedad nos mantiene en el suelo."
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "El Suelo",
      info: "El suelo se forma por la descomposición de las rocas y es esencial para la vida vegetal.",
      fact: "Formar 1 cm de suelo tarda cientos de años."
    }
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Átomos y Moléculas",
      info: "Toda la materia está formada por átomos. Los átomos se unen para formar moléculas.",
      fact: "¡El cuerpo humano contiene aproximadamente 7 octillones de átomos!"
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "ADN",
      info: "El ADN lleva la información genética de los seres vivos. El ADN de cada persona es único.",
      fact: "Si se estirara, el ADN de una célula mediría 2 metros."
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "La Evolución",
      info: "Los seres vivos han cambiado durante millones de años adaptándose a su entorno.",
      fact: "Darwin publicó la teoría de la evolución en 1859."
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Reacciones Químicas",
      info: "Las sustancias pueden combinarse o separarse para formar nuevas sustancias.",
      fact: "La combinación de hierro y oxígeno crea óxido."
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "La Electricidad",
      info: "El movimiento de electrones crea corriente eléctrica. Los circuitos transportan la electricidad.",
      fact: "El relámpago es una descarga de electricidad estática en la atmósfera."
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "El Espacio",
      info: "El universo consiste en estrellas, planetas, galaxias y materia oscura.",
      fact: "El sistema solar tiene 4.600 millones de años."
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Las Leyes de Newton",
      info: "Las 3 leyes del movimiento de Newton explican cómo se mueven los objetos.",
      fact: "Newton descubrió la gravedad al ver caer una manzana."
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "La Óptica",
      info: "Las lentes refractan la luz para formar imágenes. Los anteojos, microscopios y telescopios usan esto.",
      fact: "El telescopio fue inventado por el holandés Hans Lippershey en 1608."
    }
  ]
};
const scienceDataFr = {
  okul_oncesi: [
    {
      key: "sci_bitki",
      emoji: "🌱",
      title: "Les Plantes",
      info: "Les plantes grandissent en utilisant l'eau et la lumière du soleil.",
      fact: "Les plantes produisent de l'oxygène pour nous !"
    },
    {
      key: "sci_hayvan",
      emoji: "🐾",
      title: "Les Animaux",
      info: "Les animaux sont des êtres vivants. Certains sont domestiques, d'autres vivent à l'état sauvage.",
      fact: "Il y a plus de 8 millions d'espèces animales sur Terre !"
    },
    {
      key: "sci_su",
      emoji: "💧",
      title: "L'Eau",
      info: "L'eau est très importante pour la vie. Le corps humain est composé à 60% d'eau.",
      fact: "L'eau peut exister sous forme solide, liquide et gazeuse."
    },
    {
      key: "sci_gok",
      emoji: "🌟",
      title: "Le Ciel",
      info: "Dans le ciel, il y a le soleil, la lune, les étoiles et les nuages.",
      fact: "La Lune est le seul satellite naturel de la Terre."
    },
    {
      key: "sci_mevsim",
      emoji: "🍂",
      title: "Les Saisons",
      info: "Il y a 4 saisons dans une année : Printemps, Été, Automne et Hiver.",
      fact: "Les saisons sont causées par l'inclinaison de l'orbite terrestre."
    },
    {
      key: "sci_renk",
      emoji: "🌈",
      title: "Les Couleurs",
      info: "La lumière solaire contient 7 couleurs cachées. On peut les voir dans un arc-en-ciel.",
      fact: "Le rouge, le bleu et le jaune sont les couleurs primaires."
    },
    {
      key: "sci_havadurumu",
      emoji: "🌦️",
      title: "La Météo",
      info: "Les jours peuvent être ensoleillés, pluvieux, enneigés ou nuageux.",
      fact: "On utilise un thermomètre pour mesurer la température."
    },
    {
      key: "sci_magnet",
      emoji: "🧲",
      title: "L'Aimant",
      info: "Les aimants attirent les objets en fer. Ils ont un pôle Nord et un pôle Sud.",
      fact: "La Terre elle-même est un grand aimant !"
    }
  ],
  ilkokul: [
    {
      key: "sci_fotosent",
      emoji: "🌿",
      title: "La Photosynthèse",
      info: "Les plantes utilisent la lumière solaire pour transformer le CO₂ et l'eau en nourriture et oxygène.",
      fact: "Sans photosynthèse, il n'y aurait pas d'oxygène sur Terre."
    },
    {
      key: "sci_madde",
      emoji: "🔬",
      title: "Les États de la Matière",
      info: "La matière existe à l'état solide, liquide et gazeux. La chaleur provoque des changements d'état.",
      fact: "Le fer se liquéfie à très haute température."
    },
    {
      key: "sci_isik",
      emoji: "💡",
      title: "La Lumière",
      info: "La lumière est une forme d'énergie visible pour l'œil. Elle voyage en ligne droite.",
      fact: "La lumière voyage à 300 000 km par seconde."
    },
    {
      key: "sci_ses",
      emoji: "🔊",
      title: "Le Son",
      info: "Le son est produit par des vibrations et se transmet dans l'air à différentes fréquences.",
      fact: "Il n'y a pas de son dans l'espace car il n'y a pas de milieu pour le transporter."
    },
    {
      key: "sci_ekoloji",
      emoji: "🌾",
      title: "L'Écosystème",
      info: "Tous les êtres vivants et non vivants d'une zone forment ensemble un écosystème.",
      fact: "Les forêts sont appelées les poumons de la Terre."
    },
    {
      key: "sci_kuvvet",
      emoji: "💪",
      title: "La Force",
      info: "La force fait bouger les objets. La traction, la poussée et le frottement sont des exemples de forces.",
      fact: "La gravité nous maintient sur le sol."
    },
    {
      key: "sci_toprak",
      emoji: "🌻",
      title: "Le Sol",
      info: "Le sol se forme par la décomposition des roches et est essentiel pour la vie végétale.",
      fact: "Il faut des centaines d'années pour former 1 cm de sol."
    }
  ],
  ortaokul: [
    {
      key: "sci_atom",
      emoji: "⚛️",
      title: "Atomes et Molécules",
      info: "Toute la matière est composée d'atomes. Les atomes s'unissent pour former des molécules.",
      fact: "Le corps humain contient environ 7 octillions d'atomes !"
    },
    {
      key: "sci_dna",
      emoji: "🧬",
      title: "L'ADN",
      info: "L'ADN porte l'information génétique des êtres vivants. L'ADN de chaque personne est unique.",
      fact: "Si on l'étirait, l'ADN d'une cellule mesurerait 2 mètres."
    },
    {
      key: "sci_evrim",
      emoji: "🦎",
      title: "L'Évolution",
      info: "Les êtres vivants ont changé pendant des millions d'années en s'adaptant à leur environnement.",
      fact: "Darwin a publié la théorie de l'évolution en 1859."
    },
    {
      key: "sci_kimyasal",
      emoji: "🧪",
      title: "Réactions Chimiques",
      info: "Les substances peuvent se combiner ou se séparer pour former de nouvelles substances.",
      fact: "La combinaison du fer et de l'oxygène crée de la rouille."
    },
    {
      key: "sci_elektrik",
      emoji: "⚡",
      title: "L'Électricité",
      info: "Le mouvement des électrons crée un courant électrique. Les circuits transportent l'électricité.",
      fact: "L'éclair est une décharge d'électricité statique dans l'atmosphère."
    },
    {
      key: "sci_uzay",
      emoji: "🚀",
      title: "L'Espace",
      info: "L'univers est constitué d'étoiles, de planètes, de galaxies et de matière noire.",
      fact: "Le système solaire a 4,6 milliards d'années."
    },
    {
      key: "sci_newton",
      emoji: "🍎",
      title: "Les Lois de Newton",
      info: "Les 3 lois du mouvement de Newton expliquent comment les objets se déplacent.",
      fact: "Newton a découvert la gravité en voyant tomber une pomme."
    },
    {
      key: "sci_hologram",
      emoji: "🔭",
      title: "L'Optique",
      info: "Les lentilles réfractent la lumière pour former des images. Les lunettes, microscopes et télescopes l'utilisent.",
      fact: "Le télescope a été inventé par le Néerlandais Hans Lippershey en 1608."
    }
  ]
};
const levelTabsFr = [
  { key: "okul_oncesi", label: "🌈 Préscolaire" },
  { key: "ilkokul", label: "📗 Primaire" },
  { key: "ortaokul", label: "📘 Collège" }
];
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
const scienceDataZh = {
  okul_oncesi: [
    {
      key: "sci_zhiwu_zh",
      emoji: "🌱",
      title: "植物",
      info: "植物利用水和阳光生长，通过光合作用产生我们需要的氧气。",
      fact: "植物为我们产生氧气！"
    },
    {
      key: "sci_dongwu_zh",
      emoji: "🐾",
      title: "动物",
      info: "动物是有生命的生物，有些是家养的，有些生活在野外。",
      fact: "地球上有超过800万种动物！"
    },
    {
      key: "sci_shui_zh",
      emoji: "💧",
      title: "水",
      info: "水对生命非常重要，人体含有约60%的水分。",
      fact: "水可以以固体、液体和气体三种形态存在。"
    },
    {
      key: "sci_tian_zh",
      emoji: "🌟",
      title: "天空",
      info: "天空中有太阳、月亮、星星和云朵，每天都在变化。",
      fact: "月球是地球唯一的天然卫星。"
    },
    {
      key: "sci_jijie_zh",
      emoji: "🍂",
      title: "四季",
      info: "一年有四个季节：春、夏、秋、冬，每个季节都有不同的特点。",
      fact: "季节是由地球公转轨道的倾斜造成的。"
    },
    {
      key: "sci_caise_zh",
      emoji: "🌈",
      title: "颜色",
      info: "阳光中含有七种颜色，雨后可以看到彩虹展示这些颜色。",
      fact: "红、蓝、黄是三原色。"
    },
    {
      key: "sci_tianqi_zh",
      emoji: "🌦️",
      title: "天气",
      info: "天气可以是晴天、雨天、雪天或阴天，我们用温度计测量温度。",
      fact: "温度计是测量温度的工具。"
    },
    {
      key: "sci_cixie_zh",
      emoji: "🧲",
      title: "磁铁",
      info: "磁铁能吸引铁制物体，有南极和北极两个磁极。",
      fact: "地球本身就是一个巨大的磁铁！"
    }
  ],
  ilkokul: [
    {
      key: "sci_guanghe_zh",
      emoji: "🌿",
      title: "光合作用",
      info: "植物利用阳光将二氧化碳和水转化为食物和氧气的过程叫光合作用。",
      fact: "没有光合作用，地球上就不会有氧气。"
    },
    {
      key: "sci_wuzhi_zh",
      emoji: "🔬",
      title: "物质状态",
      info: "物质存在固态、液态和气态三种状态，加热会导致状态改变。",
      fact: "铁在极高温度下会变成液态。"
    },
    {
      key: "sci_guangxian_zh",
      emoji: "💡",
      title: "光",
      info: "光是一种能量，肉眼可见，沿直线传播，速度极快。",
      fact: "光的传播速度是每秒30万公里。"
    },
    {
      key: "sci_shengyin_zh",
      emoji: "🔊",
      title: "声音",
      info: "声音由振动产生，通过空气以不同频率传播。",
      fact: "太空中没有声音，因为没有传播介质。"
    },
    {
      key: "sci_shengtai_zh",
      emoji: "🌾",
      title: "生态系统",
      info: "某个地区所有生物和非生物共同构成一个生态系统。",
      fact: "森林被称为地球的肺。"
    },
    {
      key: "sci_li_zh",
      emoji: "💪",
      title: "力",
      info: "力能使物体运动，拉力、推力和摩擦力都是力的例子。",
      fact: "重力使我们保持在地面上。"
    },
    {
      key: "sci_tudi_zh",
      emoji: "🌻",
      title: "土壤",
      info: "土壤由岩石分解形成，对植物生长至关重要，是宝贵的资源。",
      fact: "形成1厘米的土壤需要数百年时间。"
    }
  ],
  ortaokul: [
    {
      key: "sci_yuanzi_zh",
      emoji: "⚛️",
      title: "原子和分子",
      info: "所有物质都由原子构成，原子结合形成分子，分子构成我们周围的一切。",
      fact: "一个原子的大小约为一纳米（十亿分之一米）。"
    },
    {
      key: "sci_dianli_zh",
      emoji: "⚡",
      title: "电",
      info: "电是电荷流动产生的能量，我们日常生活离不开电能。",
      fact: "闪电是自然界中电的表现，温度高达30000°C。"
    },
    {
      key: "sci_yichuanxue_zh",
      emoji: "🧬",
      title: "遗传学",
      info: "遗传学研究生物特征如何通过DNA从亲代传递给后代。",
      fact: "人类基因组包含约30亿个碱基对。"
    },
    {
      key: "sci_taiyang_zh",
      emoji: "🌌",
      title: "太阳系",
      info: "太阳系包括太阳和围绕其运行的八大行星，地球是其中之一。",
      fact: "太阳占太阳系总质量的99.86%。"
    },
    {
      key: "sci_huaxue_zh",
      emoji: "🧪",
      title: "化学反应",
      info: "化学反应是物质发生化学变化的过程，产生新物质。",
      fact: "铁生锈是一种缓慢的化学反应（氧化反应）。"
    },
    {
      key: "sci_huanjing_zh",
      emoji: "♻️",
      title: "环境保护",
      info: "保护环境对人类和地球上所有生物都至关重要，我们要减少污染。",
      fact: "一个塑料袋在自然界中需要450年才能分解。"
    },
    {
      key: "sci_xingnao_zh",
      emoji: "🧠",
      title: "大脑与神经系统",
      info: "大脑是人体最复杂的器官，神经系统控制全身的感觉和运动。",
      fact: "人脑包含约860亿个神经细胞（神经元）。"
    }
  ]
};
const levelTabsZh = [
  { key: "okul_oncesi", label: "🌈 学前班" },
  { key: "ilkokul", label: "📗 小学" },
  { key: "ortaokul", label: "📘 初中" }
];
function SciencePage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const profile = getCurrentUser();
  const isEn = lang === "en";
  const isEs = lang === "es";
  const isFr = lang === "fr";
  const isZh = lang === "zh";
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "science");
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
  const scienceData = isZh ? scienceDataZh : isFr ? scienceDataFr : isEs ? scienceDataEs : isEn ? scienceDataEn : scienceDataTr;
  const levelTabs = isZh ? levelTabsZh : isFr ? levelTabsFr : isEs ? levelTabsEs : isEn ? levelTabsEn : levelTabsTr;
  const handleSpeak = (id, text) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = isZh ? "zh-CN" : isFr ? "fr-FR" : isEs ? "es-ES" : isEn ? "en-US" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const filtered = scienceData[level].filter(
    (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.info.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleRead = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  const total = scienceData[level].length;
  const done = scienceData[level].filter(
    (p) => readTopics.includes(p.key)
  ).length;
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-emerald-600 to-teal-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
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
      "🔬",
      " ",
      isFr ? "Sciences" : isEs ? "Ciencias" : isEn ? "Science" : "Fen Bilimleri"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setLevel(tab.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === tab.key ? "bg-white text-emerald-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: tab.label
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔬" }),
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
            className: "h-full bg-green-300 rounded-full transition-all duration-500",
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
                children: speakingId === item.key ? isFr ? "⏹ Arrêter" : isEs ? "⏹ Parar" : isEn ? "⏹ Stop" : "⏹ Durdur" : isFr ? "🔊 Écouter" : isEs ? "🔊 Escuchar" : isEn ? "🔊 Listen" : "🔊 Dinle"
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
            isRead && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-300 text-xs font-bold", children: [
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
  SciencePage as default
};
