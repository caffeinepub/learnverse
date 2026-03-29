import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, x as isFavorite, j as jsxRuntimeExports, B as Button, f as updatePoints, y as toggleFavorite, m as markTopicRead, i as incrementDailyContentRead } from "./index-B83eSkg_.js";
import { W as WordDefinitionTooltip } from "./WordDefinitionTooltip-CrrGg8i0.js";
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
    },
    {
      key: "poem_kar",
      title: "The Snow",
      emoji: "❄️",
      lines: [
        "Snowflakes falling, white and bright,",
        "Covering the world in light.",
        "I catch one on my little hand,",
        "The most beautiful thing in the land!"
      ]
    },
    {
      key: "poem_ari",
      title: "Little Bee",
      emoji: "🐝",
      lines: [
        "Little bee, little bee, buzz buzz buzz,",
        "Gathering honey, that's what it does.",
        "Flower to flower it hops along,",
        "All day long with a happy song."
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
    },
    {
      key: "poem_sonbahar",
      title: "Autumn",
      emoji: "🍂",
      lines: [
        "Leaves of gold and red and brown,",
        "Spinning, twirling, floating down.",
        "Autumn paints the world with care,",
        "Color, color everywhere!"
      ]
    },
    {
      key: "poem_deniz_il",
      title: "The Sea Calls",
      emoji: "🌊",
      lines: [
        "The sea calls out with a salty roar,",
        "Come and walk along my shore.",
        "Shells and pebbles, waves so blue,",
        "The sea has many gifts for you."
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
    },
    {
      key: "poem_degisim",
      title: "Change",
      emoji: "🌀",
      lines: [
        "Nothing stays forever the same,",
        "Even the river is not the same flame.",
        "Change is the engine that drives us on,",
        "Embrace it boldly from dusk until dawn."
      ]
    },
    {
      key: "poem_merhamet",
      title: "Compassion",
      emoji: "💙",
      lines: [
        "Look into another's eyes and see,",
        "A world as real and full as yours or me.",
        "Reach a hand across the divide,",
        "Compassion is the truest guide."
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
const poemsFr = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "La pluie",
      emoji: "🌧️",
      lines: [
        "Plic ploc, gouttes de pluie,",
        "Tombent sur la fenêtre la nuit.",
        "Les fleurs boivent, les arbres grandissent,",
        "La pluie est bonne pour tout ce qui vit !"
      ]
    },
    {
      key: "poem_kelebek",
      title: "Le papillon",
      emoji: "🦋",
      lines: [
        "Un papillon passe en volant,",
        "Ses ailes colorées dans le vent.",
        "Il se pose doucement sur les fleurs,",
        "Puis repart, léger et joyeux au cœur !"
      ]
    },
    {
      key: "poem_ay",
      title: "La lune",
      emoji: "🌙",
      lines: [
        "Lune, ô lune dans la nuit,",
        "Comme tu brilles de lumière d'argent.",
        "Les étoiles autour de toi jouent et dansent,",
        "Dors bien jusqu'à l'aube qui s'avance."
      ]
    },
    {
      key: "poem_bahce",
      title: "Notre jardin",
      emoji: "🌷",
      lines: [
        "Les roses fleurissent dans notre jardin,",
        "Les tournesols montent vers le ciel lointain.",
        "Les abeilles bourdonnent, les oiseaux chantent,",
        "Tandis que les jours heureux s'enchaînent."
      ]
    },
    {
      key: "poem_gunes",
      title: "Le soleil",
      emoji: "☀️",
      lines: [
        "Soleil, soleil, descends sur nous,",
        "Éclaire les rues, éclaire partout.",
        "Brille sur les fleurs, brille sur moi,",
        "Comme le monde est chaud et beau !"
      ]
    },
    {
      key: "poem_kedi",
      title: "Mon petit chat",
      emoji: "🐱",
      lines: [
        "Mon petit chat, doux et blanc,",
        "Dort près de moi chaque nuit doucement.",
        "Il ronronne, bien au chaud,",
        "Me gardant à l'abri de tout fardeau."
      ]
    },
    {
      key: "poem_renk",
      title: "Les couleurs",
      emoji: "🌈",
      lines: [
        "Le rouge, c'est la rose, le bleu, le ciel,",
        "Le jaune, c'est le soleil si bel.",
        "Le vert, ce sont les feuilles, l'orange le fruit,",
        "Les couleurs sont belles, c'est ainsi !"
      ]
    },
    {
      key: "poem_sayi",
      title: "Chanson des chiffres",
      emoji: "🔢",
      lines: [
        "Un, deux, trois et quatre,",
        "Comptons les pommes sur le plancher.",
        "Cinq et six et sept aussi,",
        "Compter, c'est si amusant, voici !"
      ]
    },
    {
      key: "poem_deniz",
      title: "La mer",
      emoji: "🌊",
      lines: [
        "Les vagues roulent sur le rivage,",
        "M'appellent pour explorer leur passage.",
        "Le sable entre mes petits orteils,",
        "Où va la mer ? Nul ne le connaît !"
      ]
    },
    {
      key: "poem_yildiz",
      title: "Les étoiles",
      emoji: "⭐",
      lines: [
        "Les étoiles parsèment la nuit,",
        "Chacune brillant de sa propre lumière.",
        "Peut-être qu'un jour je volerai,",
        "Et toucherai les étoiles là-haut dans le ciel !"
      ]
    }
  ],
  ilkokul: [
    {
      key: "poem_turkiye",
      title: "Mon pays",
      emoji: "🇹🇷",
      lines: [
        "Mon pays s'étend loin et large,",
        "Ses montagnes touchent chaque étoile en marge.",
        "Ses mers sont bleues, ses champs sont verts,",
        "La plus belle terre que j'ai vue de près."
      ]
    },
    {
      key: "poem_ogretmen",
      title: "Mon professeur",
      emoji: "👩‍🏫",
      lines: [
        "Mon professeur est un guide lumineux,",
        "Il m'aide à lire et à écrire avec sérieux.",
        "Patient, gentil, toujours présent,",
        "Me montrant combien il s'intéresse vraiment."
      ]
    },
    {
      key: "poem_kitap",
      title: "Le livre",
      emoji: "📖",
      lines: [
        "Ouvre un livre et tu trouveras,",
        "Des mondes et des merveilles là-bas.",
        "Des villes, des jungles, des océans,",
        "Tout t'attend à l'intérieur, en t'avançant !"
      ]
    },
    {
      key: "poem_dost",
      title: "Un ami",
      emoji: "🤝",
      lines: [
        "Un ami, c'est quelqu'un qui prend soin de toi,",
        "Toujours loyal et fidèle à sa foi.",
        "Dans les bons et les mauvais moments,",
        "Les amis rendent tout plus beau et émouvant."
      ]
    },
    {
      key: "poem_ilkbahar",
      title: "Le printemps",
      emoji: "🌷",
      lines: [
        "Les fleurs éclosent et les oiseaux chantent,",
        "Bienvenue, bienvenue, belle saison qui s'entend !",
        "Le vert revient sur chaque arbre,",
        "Le printemps est là pour toi et moi, sans fable."
      ]
    },
    {
      key: "poem_okul",
      title: "L'école",
      emoji: "🏫",
      lines: [
        "L'école est là où j'apprends chaque jour,",
        "Mêlant travail et moments de jours.",
        "Amis et professeurs tout autour,",
        "Le meilleur savoir à découvrir toujours."
      ]
    },
    {
      key: "poem_ataturk",
      title: "Un grand chef",
      emoji: "🌟",
      lines: [
        "Un grand chef courageux et vrai,",
        "Qui montra à la nation la voie.",
        "Liberté, paix et lumière du savoir,",
        "Son héritage brille à jamais dans l'espoir."
      ]
    },
    {
      key: "poem_kuslar",
      title: "Les oiseaux",
      emoji: "🐦",
      lines: [
        "Des oiseaux sur les branches, des oiseaux en vol,",
        "Chantant de l'aube jusqu'au soir dans le ciel.",
        "Plumes douces et couleurs brillantes,",
        "Les oiseaux sont le pur délice de la nature chantante."
      ]
    },
    {
      key: "poem_anne",
      title: "Maman",
      emoji: "💕",
      lines: [
        "Les bras de maman, si chauds et sûrs,",
        "Son amour, nul autre ne peut le faire mûr.",
        "Elle veille sur moi chaque jour,",
        "Un amour qui ne s'efface jamais, toujours."
      ]
    },
    {
      key: "poem_doga",
      title: "La nature",
      emoji: "🌿",
      lines: [
        "La forêt respire, la rivière chante,",
        "La nature recèle mille choses fascinantes.",
        "Écoute bien et tu trouveras,",
        "La sagesse qui apaise l'esprit en toi."
      ]
    }
  ],
  ortaokul: [
    {
      key: "poem_ozgur_ruh",
      title: "Esprit libre",
      emoji: "🕊️",
      lines: [
        "Au-delà des collines et de la mer,",
        "Mon âme aspire à errer et à se libérer.",
        "Questionner, rêver et oser grandir,",
        "Apprendre ce que je ne sais pas encore, sans fléchir."
      ]
    },
    {
      key: "poem_zaman",
      title: "Le temps",
      emoji: "⏰",
      lines: [
        "Le temps coule comme la marée d'un fleuve,",
        "Il ne ralentit pas, il ne se déçoit pas en épreuve.",
        "Utilise chaque heure tant que tu le peux,",
        "Car le temps perdu ne revient plus, mieux vaut en faire le mieux."
      ]
    },
    {
      key: "poem_umut",
      title: "L'espoir",
      emoji: "🌅",
      lines: [
        "L'espoir est la lumière quand tombe la nuit,",
        "Une voix tranquille qui doucement nous dit.",
        "Garde-le près dans la tempête et la pluie,",
        "Car après la nuit, le soleil brille encore ici."
      ]
    },
    {
      key: "poem_bilgi",
      title: "La connaissance",
      emoji: "🎓",
      lines: [
        "La connaissance ouvre toutes les portes,",
        "Te donne le courage d'explorer d'autres sortes.",
        "Nul trésor ne brille autant que le savoir,",
        "Garde ton esprit en quête, chaque soir."
      ]
    },
    {
      key: "poem_vatan",
      title: "La patrie",
      emoji: "🏔️",
      lines: [
        "Ces montagnes et ces larges rivières,",
        "Cette terre où nos racines sont entières.",
        "Notre patrie appelle dans le vent et la pluie,",
        "Un amour qui résonne comme une mélodie."
      ]
    },
    {
      key: "poem_genclik",
      title: "La jeunesse",
      emoji: "🌱",
      lines: [
        "La jeunesse est force et la jeunesse est feu,",
        "Élève-toi haut et vise encore mieux.",
        "L'avenir attend ceux qui osent rêver,",
        "Construis tes rêves avec amour et courage affirmé."
      ]
    },
    {
      key: "poem_adalet",
      title: "La justice",
      emoji: "⚖️",
      lines: [
        "La justice repose sur des bases solides,",
        "Là où la vérité et l'équité résident.",
        "Parle pour ceux qui n'ont pas de voix,",
        "Rester droit est toujours un choix."
      ]
    },
    {
      key: "poem_insanlik",
      title: "L'humanité",
      emoji: "🌍",
      lines: [
        "Nous sommes nombreux, nous sommes un,",
        "Partageant la terre sous un même soleil commun.",
        "Quand nous aidons et quand nous prenons soin,",
        "L'humanité est partout, à portée de main."
      ]
    },
    {
      key: "poem_sessizlik",
      title: "Le silence",
      emoji: "🌌",
      lines: [
        "Dans le calme de la nuit,",
        "Brillant d'une douce lumière infinie,",
        "Le silence dit ce que les mots ne peuvent dire,",
        "Écoute bien -- ne te laisse pas fuir."
      ]
    },
    {
      key: "poem_gelecek",
      title: "L'avenir",
      emoji: "🚀",
      lines: [
        "L'avenir brille au-delà de la colline,",
        "Un monde de merveilles qui s'illumine.",
        "Prends le flambeau, réponds à l'appel,",
        "L'avenir a besoin du meilleur en toi, tel quel."
      ]
    }
  ]
};
const poemsHi = {
  okul_oncesi: [
    {
      key: "poem_baarish",
      title: "बारिश",
      emoji: "🌧️",
      lines: [
        "रिमझिम रिमझिम बारिश आई,",
        "धरती ने खुशियाँ मनाई।",
        "फूल खिले, पत्ते हरे,",
        "बच्चे खेलें, मन भरे!"
      ]
    },
    {
      key: "poem_titli",
      title: "तितली",
      emoji: "🦋",
      lines: [
        "रंग-बिरंगी तितली आई,",
        "बागों में उसने सैर कराई।",
        "फूलों पर जा बैठ गई,",
        "सबके मन को लुभा गई!"
      ]
    },
    {
      key: "poem_chand",
      title: "चाँद",
      emoji: "🌙",
      lines: [
        "चाँदा मामा दूर के,",
        "पकवान पकाएं बूर के।",
        "आप खाएं, थाली में लाएं,",
        "हमको भी कुछ दे जाएं!"
      ]
    },
    {
      key: "poem_phool",
      title: "फूल",
      emoji: "🌸",
      lines: [
        "फूल खिले हैं बाग में,",
        "महक उठे हर राग में।",
        "लाल गुलाब और गेंदा पीला,",
        "प्रकृति ने यह रंग खेला!"
      ]
    },
    {
      key: "poem_suraj",
      title: "सूरज",
      emoji: "☀️",
      lines: [
        "सुबह-सुबह सूरज आया,",
        "सबको उसने जगाया।",
        "किरणें फैलीं चारों ओर,",
        "उजाला हुआ भोर!"
      ]
    },
    {
      key: "poem_billi",
      title: "बिल्ली",
      emoji: "🐱",
      lines: [
        "म्याऊँ म्याऊँ बिल्ली बोले,",
        "घर-घर जाकर कुछ खोले।",
        "मुलायम बाल और आँखें गोल,",
        "सबका दिल करे डोल!"
      ]
    },
    {
      key: "poem_rang",
      title: "रंगों का खेल",
      emoji: "🌈",
      lines: [
        "लाल नीला हरा पीला,",
        "रंगों का यह खेल रसीला।",
        "इंद्रधनुष बन जाए आसमान,",
        "रंगों की दुनिया महान!"
      ]
    },
    {
      key: "poem_ginti",
      title: "गिनती",
      emoji: "🔢",
      lines: [
        "एक दो तीन चार,",
        "खेलें सब मिलकर यार।",
        "पाँच छह सात आठ,",
        "मिलकर पढ़ें एक साथ!"
      ]
    },
    {
      key: "poem_samudra",
      title: "समुद्र",
      emoji: "🌊",
      lines: [
        "नीला-नीला समुद्र विशाल,",
        "लहरें उठें बड़ी कमाल।",
        "रेत पर चले मेरे पाँव,",
        "कितना सुंदर यह ठाँव!"
      ]
    },
    {
      key: "poem_tare",
      title: "तारे",
      emoji: "⭐",
      lines: [
        "टिमटिम करते छोटे तारे,",
        "रात के आकाश के प्यारे।",
        "गिनूँ मैं इन्हें कैसे,",
        "इतने हैं ये बिखरे-बिखरे!"
      ]
    }
  ],
  ilkokul: [
    {
      key: "poem_mera_bharat",
      title: "मेरा भारत",
      emoji: "🌏",
      lines: [
        "मेरा भारत महान देश,",
        "अनेक रंगों का सुंदर वेश।",
        "नदियाँ, पर्वत, मैदान अपार,",
        "इसकी महिमा है अतुलनीय यार!"
      ]
    },
    {
      key: "poem_guruji",
      title: "गुरुजी",
      emoji: "👩‍🏫",
      lines: [
        "गुरु का स्थान सबसे ऊँचा,",
        "ज्ञान का रास्ता सीधा और सच्चा।",
        "माता-पिता से भी महान,",
        "गुरु देते हैं सच्ची पहचान!"
      ]
    },
    {
      key: "poem_kitab",
      title: "किताब",
      emoji: "📖",
      lines: [
        "किताबें हैं ज्ञान की खान,",
        "पढ़ो और बनो महान।",
        "दुनिया की सैर करा दे,",
        "नई राहें यह दिखा दे!"
      ]
    },
    {
      key: "poem_dost",
      title: "दोस्त",
      emoji: "🤝",
      lines: [
        "सच्चा दोस्त होता है एक,",
        "दुख-सुख में साथ देता है नेक।",
        "मुश्किल घड़ी में हाथ बढ़ाए,",
        "जिंदगी को खुशगवार बनाए!"
      ]
    },
    {
      key: "poem_vasant",
      title: "वसंत",
      emoji: "🌷",
      lines: [
        "वसंत आया फूल खिले,",
        "पेड़-पौधे हरे-भरे मिले।",
        "कोयल गाए कूहू-कूहू,",
        "प्रकृति लगे मधुर-मधु!"
      ]
    },
    {
      key: "poem_pathshala",
      title: "पाठशाला",
      emoji: "🏫",
      lines: [
        "रोज जाते हम पाठशाला,",
        "ज्ञान का लेते हम उजाला।",
        "दोस्त मिलते, खेल खेलते,",
        "नई बातें सीखते-सीखते!"
      ]
    },
    {
      key: "poem_pakshi",
      title: "पक्षी",
      emoji: "🐦",
      lines: [
        "पंख फैलाकर उड़ता पक्षी,",
        "आकाश में करता मनमानी रक्षी।",
        "चहचहाकर गाए गीत,",
        "प्रकृति की यही रीत!"
      ]
    },
    {
      key: "poem_maa",
      title: "माँ",
      emoji: "💕",
      lines: [
        "माँ की ममता अनमोल,",
        "उसका प्यार अतुल-तोल।",
        "थपकी से सुलाए वो,",
        "सुबह-शाम जगाए वो!"
      ]
    },
    {
      key: "poem_prakriti",
      title: "प्रकृति",
      emoji: "🌿",
      lines: [
        "जंगल, नदी और पहाड़,",
        "प्रकृति का अद्भुत आकार।",
        "इसे बचाना है हमारा काम,",
        "तभी होगा पृथ्वी का नाम!"
      ]
    },
    {
      key: "poem_tiranga",
      title: "तिरंगा",
      emoji: "🏳️",
      lines: [
        "तीन रंगों का तिरंगा प्यारा,",
        "देश का है यह सबसे न्यारा।",
        "केसरिया, सफ़ेद और हरा,",
        "अशोक चक्र इसे करे खरा!"
      ]
    }
  ],
  ortaokul: [
    {
      key: "poem_swatantra_atma",
      title: "स्वतंत्र आत्मा",
      emoji: "🕊️",
      lines: [
        "उड़ना चाहे मेरी आत्मा,",
        "खुले आकाश में बेरोक।",
        "सपने देखना, सच करना,",
        "यही है जीवन का मतलब खास!"
      ]
    },
    {
      key: "poem_samay",
      title: "समय",
      emoji: "⏰",
      lines: [
        "समय की नदी बहती चली,",
        "न रुकती न मुड़ती पली।",
        "जो इसे समझ लेता है,",
        "सफलता को पा लेता है!"
      ]
    },
    {
      key: "poem_asha",
      title: "आशा",
      emoji: "🌅",
      lines: [
        "अंधकार में एक दीप है आशा,",
        "जीवन की यही सच्ची भाषा।",
        "तूफान में भी मत घबरा,",
        "सूरज फिर उगेगा सवेरा!"
      ]
    },
    {
      key: "poem_gyan",
      title: "ज्ञान",
      emoji: "🎓",
      lines: [
        "ज्ञान है सबसे बड़ा धन,",
        "इससे खिलता मन और तन।",
        "पढ़ो, सोचो, समझो और जानो,",
        "जीवन का सही अर्थ पहचानो!"
      ]
    },
    {
      key: "poem_swadesh",
      title: "स्वदेश",
      emoji: "🏔️",
      lines: [
        "यह धरती मेरी जन्मभूमि,",
        "इस पर मेरा अटूट प्रेम छूमि।",
        "हिमालय से लेकर सागर तक,",
        "भारत माता जय जय तक!"
      ]
    },
    {
      key: "poem_yuva",
      title: "युवा शक्ति",
      emoji: "🌱",
      lines: [
        "युवा हैं हम, शक्ति अपार,",
        "बदल सकते हम संसार।",
        "सपने बड़े, हौसले बुलंद,",
        "मंजिल हमारी न होगी बंद!"
      ]
    },
    {
      key: "poem_nyay",
      title: "न्याय",
      emoji: "⚖️",
      lines: [
        "न्याय की राह पर चलना है,",
        "सच के साथ हमें रहना है।",
        "कमज़ोर की आवाज़ बनो,",
        "सत्य के साथी और पहचान बनो!"
      ]
    },
    {
      key: "poem_manvata",
      title: "मानवता",
      emoji: "🌍",
      lines: [
        "हम सब एक, रंग अनेक,",
        "एक ही धरती, एक ही नेक।",
        "प्रेम और सेवा से जीना सीखो,",
        "इंसानियत को जीवित रखो!"
      ]
    },
    {
      key: "poem_nishbdha",
      title: "नि:शब्दता",
      emoji: "🌌",
      lines: [
        "रात की शांति में एक बात है,",
        "तारों से सजी यह जहाँ-ए-रात है।",
        "चुप्पी में जो आवाज़ सुनाई दे,",
        "वही सबसे गहरी सच्चाई बताती है!"
      ]
    },
    {
      key: "poem_bhavishya",
      title: "भविष्य",
      emoji: "🚀",
      lines: [
        "भविष्य की राहें हमें बुलाती हैं,",
        "नई उम्मीदें मन में जगाती हैं।",
        "मेहनत और लगन से आगे बढ़ो,",
        "सफलता की सीढ़ियाँ चढ़ते रहो!"
      ]
    }
  ]
};
const poemsZh = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "下雨了",
      emoji: "🌧️",
      lines: [
        "滴答滴答，雨声响，",
        "打在窗上闹洋洋。",
        "花儿喝水树儿长，",
        "雨是世界好营养！"
      ]
    },
    {
      key: "poem_kelebek",
      title: "蝴蝶",
      emoji: "🦋",
      lines: [
        "蝴蝶飞来花园里，",
        "翅膀颜色多美丽。",
        "轻轻落在花瓣上，",
        "带来快乐和欢喜！"
      ]
    },
    {
      key: "poem_ay",
      title: "月亮",
      emoji: "🌙",
      lines: [
        "月亮月亮挂天上，",
        "银色光芒多明亮。",
        "星星围着你跳舞，",
        "陪我入梦到天亮。"
      ]
    },
    {
      key: "poem_bahce",
      title: "我们的花园",
      emoji: "🌷",
      lines: [
        "花园里的玫瑰开，",
        "向日葵朝天伸出来。",
        "蜜蜂嗡嗡鸟儿唱，",
        "快乐的日子一天天来！"
      ]
    },
    {
      key: "poem_gunes",
      title: "太阳",
      emoji: "☀️",
      lines: [
        "太阳太阳照下来，",
        "照亮街道照进来。",
        "照着花儿照着我，",
        "世界多温暖多精彩！"
      ]
    },
    {
      key: "poem_kedi",
      title: "我的小猫",
      emoji: "🐱",
      lines: [
        "我的小猫白又软，",
        "每晚陪我睡甜甜。",
        "呼噜呼噜暖和和，",
        "有你陪伴多安全！"
      ]
    },
    {
      key: "poem_renk",
      title: "颜色歌",
      emoji: "🌈",
      lines: [
        "红是玫瑰蓝是天，",
        "黄色太阳多灿烂。",
        "绿是叶子橙是果，",
        "颜色世界多美好！"
      ]
    },
    {
      key: "poem_sayi",
      title: "数数歌",
      emoji: "🔢",
      lines: [
        "一二三四来数数，",
        "数数苹果多又多。",
        "五六七八九十到，",
        "数数真是好有趣！"
      ]
    },
    {
      key: "poem_deniz",
      title: "大海",
      emoji: "🌊",
      lines: [
        "海浪拍打沙滩边，",
        "邀我去探索无边。",
        "沙子钻进小脚趾，",
        "大海去哪谁知晓？"
      ]
    },
    {
      key: "poem_yildiz",
      title: "星星",
      emoji: "⭐",
      lines: [
        "星星点点满夜空，",
        "每颗都有自己的光。",
        "也许有一天我能飞，",
        "去摘天上的星一颗！"
      ]
    }
  ],
  ilkokul: [
    {
      key: "poem_turkiye",
      title: "我的祖国",
      emoji: "🌏",
      lines: [
        "我的祖国广阔又美，",
        "高山触碰每颗星。",
        "大海蔚蓝田野绿，",
        "这是我见过最美的地方。"
      ]
    },
    {
      key: "poem_ogretmen",
      title: "我的老师",
      emoji: "👩‍🏫",
      lines: [
        "老师是明亮的向导，",
        "教我读书和写字。",
        "耐心善良总在身旁，",
        "给我最真诚的关怀。"
      ]
    },
    {
      key: "poem_kitap",
      title: "书本",
      emoji: "📖",
      lines: [
        "打开一本书你会发现，",
        "里面有世界和奇迹。",
        "城市丛林和海洋，",
        "一切都在等你去探索！"
      ]
    },
    {
      key: "poem_dost",
      title: "朋友",
      emoji: "🤝",
      lines: [
        "朋友是关心你的人，",
        "忠诚真实守信义。",
        "无论好时还是难，",
        "朋友让一切都美好！"
      ]
    },
    {
      key: "poem_ilkbahar",
      title: "春天",
      emoji: "🌷",
      lines: [
        "花儿开放鸟儿唱，",
        "欢迎春天美好时光！",
        "每棵树又绿起来，",
        "春天来了真美好！"
      ]
    },
    {
      key: "poem_okul",
      title: "学校",
      emoji: "🏫",
      lines: [
        "学校是我学习的地方，",
        "学习和玩耍在一起。",
        "朋友老师在身旁，",
        "最好的知识在这里！"
      ]
    },
    {
      key: "poem_ataturk",
      title: "伟大的领袖",
      emoji: "🌟",
      lines: [
        "一位勇敢而真实的领袖，",
        "为国家指引了方向。",
        "自由和平与知识光，",
        "他的遗产永远闪光。"
      ]
    },
    {
      key: "poem_kuslar",
      title: "鸟儿",
      emoji: "🐦",
      lines: [
        "鸟儿在枝头在天空飞，",
        "从早到晚歌声美。",
        "羽毛柔软色彩亮，",
        "鸟儿是大自然的喜悦！"
      ]
    },
    {
      key: "poem_anne",
      title: "妈妈",
      emoji: "💕",
      lines: [
        "妈妈的怀抱温暖又安全，",
        "她的爱无人能比。",
        "每天守护着我，",
        "永远不会消失的爱。"
      ]
    },
    {
      key: "poem_doga",
      title: "大自然",
      emoji: "🌿",
      lines: [
        "森林呼吸河流唱，",
        "大自然有千种奇。",
        "认真听你会发现，",
        "心灵平静的智慧在这里。"
      ]
    }
  ],
  ortaokul: [
    {
      key: "poem_ozgur_ruh",
      title: "自由的灵魂",
      emoji: "🕊️",
      lines: [
        "越过山丘和大海，",
        "我的灵魂渴望自由飞翔。",
        "质疑、梦想、勇于成长，",
        "学习未知不退缩。"
      ]
    },
    {
      key: "poem_zaman",
      title: "时间",
      emoji: "⏰",
      lines: [
        "时间像河水般流淌，",
        "它不放慢也不迷茫。",
        "趁你还能好好珍惜，",
        "失去的时间不再来。"
      ]
    },
    {
      key: "poem_umut",
      title: "希望",
      emoji: "🌅",
      lines: [
        "希望是黑夜中的光，",
        "轻声说话不慌张。",
        "风雨中紧紧把它抱，",
        "黑夜之后阳光来。"
      ]
    },
    {
      key: "poem_bilgi",
      title: "知识",
      emoji: "🎓",
      lines: [
        "知识打开所有的门，",
        "给你探索的勇气和根。",
        "没有宝藏比知识更亮，",
        "每个夜晚保持求知心。"
      ]
    },
    {
      key: "poem_vatan",
      title: "祖国",
      emoji: "🏔️",
      lines: [
        "这些山脉和宽广的河，",
        "这片土地是我们的根。",
        "祖国在风雨中呼唤，",
        "像旋律般回响心间。"
      ]
    },
    {
      key: "poem_genclik",
      title: "青春",
      emoji: "🌱",
      lines: [
        "青春是力量青春是火，",
        "高高飞翔瞄准更好。",
        "未来等待敢于梦想的人，",
        "用爱和勇气建造你的梦。"
      ]
    },
    {
      key: "poem_adalet",
      title: "公正",
      emoji: "⚖️",
      lines: [
        "公正建立在坚实的基础上，",
        "真理和公平在那里住。",
        "为没有声音的人发声，",
        "坚守正直永远是选择。"
      ]
    },
    {
      key: "poem_insanlik",
      title: "人类",
      emoji: "🌍",
      lines: [
        "我们人数众多，我们是一，",
        "共享大地在同一个太阳下。",
        "当我们帮助和关爱，",
        "人性就在我们身边。"
      ]
    },
    {
      key: "poem_sessizlik",
      title: "寂静",
      emoji: "🌌",
      lines: [
        "在夜晚的宁静中，",
        "闪烁着柔和无限的光。",
        "寂静说出语言无法表达的，",
        "好好倾听，别让它溜走。"
      ]
    },
    {
      key: "poem_gelecek",
      title: "未来",
      emoji: "🚀",
      lines: [
        "未来在山丘那边闪光，",
        "奇迹的世界等待开放。",
        "接过火炬，响应召唤，",
        "未来需要你最好的样子。"
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
    },
    {
      key: "poem_kar_yagdi",
      title: "Kar Yağdı",
      emoji: "❄️",
      lines: [
        "Beyaz beyaz kar yağdı,",
        "Bahçe oldu pamuk gibi.",
        "Çocuklar koştu dışarı,",
        "Kardan adam yaptı hepsi."
      ]
    },
    {
      key: "poem_cicek_bahcesi",
      title: "Çiçek Bahçesi",
      emoji: "🌸",
      lines: [
        "Sarı çiçek, mor çiçek,",
        "Bahçede açar her biri.",
        "Kelebek konar üstlerine,",
        "Bahar geldi işte bu!"
      ]
    },
    {
      key: "poem_denizde",
      title: "Denizde",
      emoji: "🌊",
      lines: [
        "Dalgalar kıyıya koşar,",
        "Kumsalda oynar çocuklar.",
        "Deniz mavisi gökyüzü,",
        "Ne güzel bir yaz günü!"
      ]
    },
    {
      key: "poem_bebek_kedi",
      title: "Bebek Kedi",
      emoji: "🐱",
      lines: [
        "Minicik bir kedi yavrusu,",
        "Yumak gibi yuvarlak.",
        "Miyav miyav ses çıkarır,",
        "Uyuyor şimdi yavaşça."
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
    },
    {
      key: "poem_okul_zili",
      title: "Okul Zili",
      emoji: "🔔",
      lines: [
        "Zil çaldı sabahleyin,",
        "Koştu çocuklar sınıfa.",
        "Kalemler, defterler hazır,",
        "Yeni bir gün başladı yine."
      ]
    },
    {
      key: "poem_nehir",
      title: "Nehir",
      emoji: "🏞️",
      lines: [
        "Nehir akar durur susar,",
        "Taşları yuvarlayarak.",
        "Balıklar sevinçle yüzer,",
        "Hayat akar hep ileri."
      ]
    },
    {
      key: "poem_dost",
      title: "Dost",
      emoji: "🤝",
      lines: [
        "Dostun elini tut sıkı,",
        "Zorlu günlerde yanında.",
        "Gülüşünü paylaş onunla,",
        "Dost kıymetlidir dünyada."
      ]
    },
    {
      key: "poem_bilim",
      title: "Bilim Sevgisi",
      emoji: "🔭",
      lines: [
        "Merak et, ara, bul,",
        "Bilim kapılarını aç.",
        "Her sorunun bir cevabı var,",
        "Düşün ve yol bul."
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
    },
    {
      key: "poem_ozgurluk",
      title: "Özgürlük",
      emoji: "🕊️",
      lines: [
        "Özgürlük bir kuş gibi uçar,",
        "Sınırları tanımaz göklerde.",
        "İnsan da öyle isteler,",
        "Açık ufuklara koşar.",
        "Zincirler kınar düşünen akıl,",
        "Özgür düşünce hiç yıkılmaz."
      ]
    },
    {
      key: "poem_zaman",
      title: "Zaman",
      emoji: "⏳",
      lines: [
        "Zaman nehir gibi akar,",
        "Durdurulamaz hiçbir güçle.",
        "Geçmiş iz bırakır izlerde,",
        "Gelecek ufukta bekler.",
        "Her an bir cevher gibidir,",
        "Kaybetme, yaşa, değerlen."
      ]
    },
    {
      key: "poem_bilgi",
      title: "Bilginin Işığı",
      emoji: "💡",
      lines: [
        "Kitap açılır, ışık dolar içeri,",
        "Karanlık düşünceler kaçar.",
        "Bilgi taşır insanı ileriye,",
        "Cehalet sisinde boğulmaz artık.",
        "Her satır bir adım öne,",
        "Her sayfa yeni bir ufuk."
      ]
    },
    {
      key: "poem_umut",
      title: "Umut",
      emoji: "🌅",
      lines: [
        "Umut tohumları eker yüreğe,",
        "Karanlık gecelerde bile parlar.",
        "Yarına inanmak kuvvet verir,",
        "Zorluklar eğer bükerse seni,",
        "Umutla dik dur, yeniden başla."
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
  const activePoems = lang === "en" ? poemsEn : lang === "es" ? poemsEs : lang === "fr" ? poemsFr : lang === "zh" ? poemsZh : lang === "hi" ? poemsHi : poems;
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
      utt.lang = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : lang === "fr" ? "fr-FR" : lang === "zh" ? "zh-CN" : "tr-TR";
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
