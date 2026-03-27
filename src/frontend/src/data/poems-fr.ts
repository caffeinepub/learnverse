type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export const poemsFr: Record<
  Level,
  {
    key: string;
    title: string;
    emoji: string;
    lines: string[];
    author?: string;
  }[]
> = {
  okul_oncesi: [
    {
      key: "poem_yagmur",
      title: "La pluie",
      emoji: "🌧️",
      lines: [
        "Plic ploc, gouttes de pluie,",
        "Tombent sur la fenêtre la nuit.",
        "Les fleurs boivent, les arbres grandissent,",
        "La pluie est bonne pour tout ce qui vit !",
      ],
    },
    {
      key: "poem_kelebek",
      title: "Le papillon",
      emoji: "🦋",
      lines: [
        "Un papillon passe en volant,",
        "Ses ailes colorées dans le vent.",
        "Il se pose doucement sur les fleurs,",
        "Puis repart, léger et joyeux au cœur !",
      ],
    },
    {
      key: "poem_ay",
      title: "La lune",
      emoji: "🌙",
      lines: [
        "Lune, ô lune dans la nuit,",
        "Comme tu brilles de lumière d'argent.",
        "Les étoiles autour de toi jouent et dansent,",
        "Dors bien jusqu'à l'aube qui s'avance.",
      ],
    },
    {
      key: "poem_bahce",
      title: "Notre jardin",
      emoji: "🌷",
      lines: [
        "Les roses fleurissent dans notre jardin,",
        "Les tournesols montent vers le ciel lointain.",
        "Les abeilles bourdonnent, les oiseaux chantent,",
        "Tandis que les jours heureux s'enchaînent.",
      ],
    },
    {
      key: "poem_gunes",
      title: "Le soleil",
      emoji: "☀️",
      lines: [
        "Soleil, soleil, descends sur nous,",
        "Éclaire les rues, éclaire partout.",
        "Brille sur les fleurs, brille sur moi,",
        "Comme le monde est chaud et beau !",
      ],
    },
    {
      key: "poem_kedi",
      title: "Mon petit chat",
      emoji: "🐱",
      lines: [
        "Mon petit chat, doux et blanc,",
        "Dort près de moi chaque nuit doucement.",
        "Il ronronne, bien au chaud,",
        "Me gardant à l'abri de tout fardeau.",
      ],
    },
    {
      key: "poem_renk",
      title: "Les couleurs",
      emoji: "🌈",
      lines: [
        "Le rouge, c'est la rose, le bleu, le ciel,",
        "Le jaune, c'est le soleil si bel.",
        "Le vert, ce sont les feuilles, l'orange le fruit,",
        "Les couleurs sont belles, c'est ainsi !",
      ],
    },
    {
      key: "poem_sayi",
      title: "Chanson des chiffres",
      emoji: "🔢",
      lines: [
        "Un, deux, trois et quatre,",
        "Comptons les pommes sur le plancher.",
        "Cinq et six et sept aussi,",
        "Compter, c'est si amusant, voici !",
      ],
    },
    {
      key: "poem_deniz",
      title: "La mer",
      emoji: "🌊",
      lines: [
        "Les vagues roulent sur le rivage,",
        "M'appellent pour explorer leur passage.",
        "Le sable entre mes petits orteils,",
        "Où va la mer ? Nul ne le connaît !",
      ],
    },
    {
      key: "poem_yildiz",
      title: "Les étoiles",
      emoji: "⭐",
      lines: [
        "Les étoiles parsèment la nuit,",
        "Chacune brillant de sa propre lumière.",
        "Peut-être qu'un jour je volerai,",
        "Et toucherai les étoiles là-haut dans le ciel !",
      ],
    },
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
        "La plus belle terre que j'ai vue de près.",
      ],
    },
    {
      key: "poem_ogretmen",
      title: "Mon professeur",
      emoji: "👩‍🏫",
      lines: [
        "Mon professeur est un guide lumineux,",
        "Il m'aide à lire et à écrire avec sérieux.",
        "Patient, gentil, toujours présent,",
        "Me montrant combien il s'intéresse vraiment.",
      ],
    },
    {
      key: "poem_kitap",
      title: "Le livre",
      emoji: "📖",
      lines: [
        "Ouvre un livre et tu trouveras,",
        "Des mondes et des merveilles là-bas.",
        "Des villes, des jungles, des océans,",
        "Tout t'attend à l'intérieur, en t'avançant !",
      ],
    },
    {
      key: "poem_dost",
      title: "Un ami",
      emoji: "🤝",
      lines: [
        "Un ami, c'est quelqu'un qui prend soin de toi,",
        "Toujours loyal et fidèle à sa foi.",
        "Dans les bons et les mauvais moments,",
        "Les amis rendent tout plus beau et émouvant.",
      ],
    },
    {
      key: "poem_ilkbahar",
      title: "Le printemps",
      emoji: "🌷",
      lines: [
        "Les fleurs éclosent et les oiseaux chantent,",
        "Bienvenue, bienvenue, belle saison qui s'entend !",
        "Le vert revient sur chaque arbre,",
        "Le printemps est là pour toi et moi, sans fable.",
      ],
    },
    {
      key: "poem_okul",
      title: "L'école",
      emoji: "🏫",
      lines: [
        "L'école est là où j'apprends chaque jour,",
        "Mêlant travail et moments de jours.",
        "Amis et professeurs tout autour,",
        "Le meilleur savoir à découvrir toujours.",
      ],
    },
    {
      key: "poem_ataturk",
      title: "Un grand chef",
      emoji: "🌟",
      lines: [
        "Un grand chef courageux et vrai,",
        "Qui montra à la nation la voie.",
        "Liberté, paix et lumière du savoir,",
        "Son héritage brille à jamais dans l'espoir.",
      ],
    },
    {
      key: "poem_kuslar",
      title: "Les oiseaux",
      emoji: "🐦",
      lines: [
        "Des oiseaux sur les branches, des oiseaux en vol,",
        "Chantant de l'aube jusqu'au soir dans le ciel.",
        "Plumes douces et couleurs brillantes,",
        "Les oiseaux sont le pur délice de la nature chantante.",
      ],
    },
    {
      key: "poem_anne",
      title: "Maman",
      emoji: "💕",
      lines: [
        "Les bras de maman, si chauds et sûrs,",
        "Son amour, nul autre ne peut le faire mûr.",
        "Elle veille sur moi chaque jour,",
        "Un amour qui ne s'efface jamais, toujours.",
      ],
    },
    {
      key: "poem_doga",
      title: "La nature",
      emoji: "🌿",
      lines: [
        "La forêt respire, la rivière chante,",
        "La nature recèle mille choses fascinantes.",
        "Écoute bien et tu trouveras,",
        "La sagesse qui apaise l'esprit en toi.",
      ],
    },
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
        "Apprendre ce que je ne sais pas encore, sans fléchir.",
      ],
    },
    {
      key: "poem_zaman",
      title: "Le temps",
      emoji: "⏰",
      lines: [
        "Le temps coule comme la marée d'un fleuve,",
        "Il ne ralentit pas, il ne se déçoit pas en épreuve.",
        "Utilise chaque heure tant que tu le peux,",
        "Car le temps perdu ne revient plus, mieux vaut en faire le mieux.",
      ],
    },
    {
      key: "poem_umut",
      title: "L'espoir",
      emoji: "🌅",
      lines: [
        "L'espoir est la lumière quand tombe la nuit,",
        "Une voix tranquille qui doucement nous dit.",
        "Garde-le près dans la tempête et la pluie,",
        "Car après la nuit, le soleil brille encore ici.",
      ],
    },
    {
      key: "poem_bilgi",
      title: "La connaissance",
      emoji: "🎓",
      lines: [
        "La connaissance ouvre toutes les portes,",
        "Te donne le courage d'explorer d'autres sortes.",
        "Nul trésor ne brille autant que le savoir,",
        "Garde ton esprit en quête, chaque soir.",
      ],
    },
    {
      key: "poem_vatan",
      title: "La patrie",
      emoji: "🏔️",
      lines: [
        "Ces montagnes et ces larges rivières,",
        "Cette terre où nos racines sont entières.",
        "Notre patrie appelle dans le vent et la pluie,",
        "Un amour qui résonne comme une mélodie.",
      ],
    },
    {
      key: "poem_genclik",
      title: "La jeunesse",
      emoji: "🌱",
      lines: [
        "La jeunesse est force et la jeunesse est feu,",
        "Élève-toi haut et vise encore mieux.",
        "L'avenir attend ceux qui osent rêver,",
        "Construis tes rêves avec amour et courage affirmé.",
      ],
    },
    {
      key: "poem_adalet",
      title: "La justice",
      emoji: "⚖️",
      lines: [
        "La justice repose sur des bases solides,",
        "Là où la vérité et l'équité résident.",
        "Parle pour ceux qui n'ont pas de voix,",
        "Rester droit est toujours un choix.",
      ],
    },
    {
      key: "poem_insanlik",
      title: "L'humanité",
      emoji: "🌍",
      lines: [
        "Nous sommes nombreux, nous sommes un,",
        "Partageant la terre sous un même soleil commun.",
        "Quand nous aidons et quand nous prenons soin,",
        "L'humanité est partout, à portée de main.",
      ],
    },
    {
      key: "poem_sessizlik",
      title: "Le silence",
      emoji: "🌌",
      lines: [
        "Dans le calme de la nuit,",
        "Brillant d'une douce lumière infinie,",
        "Le silence dit ce que les mots ne peuvent dire,",
        "Écoute bien -- ne te laisse pas fuir.",
      ],
    },
    {
      key: "poem_gelecek",
      title: "L'avenir",
      emoji: "🚀",
      lines: [
        "L'avenir brille au-delà de la colline,",
        "Un monde de merveilles qui s'illumine.",
        "Prends le flambeau, réponds à l'appel,",
        "L'avenir a besoin du meilleur en toi, tel quel.",
      ],
    },
  ],
};
