type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

interface Experiment {
  key: string;
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  science: string;
}

export const experimentsFr: Record<Level, Experiment[]> = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Mélange de couleurs",
      emoji: "🎨",
      materials: [
        "Peinture rouge",
        "Peinture bleue",
        "Peinture jaune",
        "3 verres d'eau",
      ],
      steps: [
        "Remplis les verres avec de l'eau.",
        "Ajoute de la peinture rouge dans le premier verre.",
        "Ajoute de la peinture bleue dans le deuxième verre.",
        "Mélange les deux verres dans un troisième verre vide.",
        "Observe la couleur violette qui se forme !",
      ],
      science:
        "Les couleurs primaires (rouge, bleu, jaune) créent des couleurs secondaires quand on les mélange. Rouge + Bleu = Violet !",
    },
    {
      key: "exp_buz_erimesi",
      title: "Que se passe-t-il quand la glace fond ?",
      emoji: "🧊",
      materials: ["Un glaçon", "Un bol", "Du sel"],
      steps: [
        "Place le glaçon dans le bol.",
        "Saupoudre du sel par-dessus.",
        "Observe la glace fondre.",
        "Compare avec un glaçon sans sel.",
        "Lequel a fondu le plus vite ?",
      ],
      science:
        "Le sel abaisse le point de fusion de la glace. C'est pourquoi on met du sel sur les routes en hiver !",
    },
    {
      key: "exp_balon_sisirme",
      title: "Gonfler un ballon avec du bicarbonate",
      emoji: "🎈",
      materials: [
        "1 ballon",
        "1 bouteille",
        "Du vinaigre",
        "Du bicarbonate de soude",
      ],
      steps: [
        "Verse un peu de vinaigre dans la bouteille.",
        "Mets une cuillère à café de bicarbonate dans le ballon.",
        "Étire le ballon sur l'embouchure de la bouteille.",
        "Verse le bicarbonate du ballon dans la bouteille.",
        "Observe le ballon se gonfler !",
      ],
      science:
        "Quand le vinaigre et le bicarbonate réagissent, ils libèrent du dioxyde de carbone. Ce gaz gonfle le ballon !",
    },
    {
      key: "exp_yeni_o1",
      title: "Lait et citron",
      emoji: "🥛",
      materials: [
        "1 verre de lait",
        "1 cuillère à soupe de jus de citron",
        "1 récipient",
      ],
      steps: [
        "Verse le lait dans le récipient.",
        "Ajoute le jus de citron au lait.",
        "Remue et attends.",
        "Observe le lait cailler.",
        "Qu'est-ce qui a changé ?",
      ],
      science:
        "Le jus de citron est acide et provoque la coagulation des protéines du lait. C'est ainsi que le fromage est fabriqué !",
    },
    {
      key: "exp_yeni_o2",
      title: "Raisins dansants",
      emoji: "🍇",
      materials: ["Eau gazeuse", "Raisins secs", "Un verre"],
      steps: [
        "Remplis le verre d'eau gazeuse.",
        "Jette quelques raisins secs dedans.",
        "Observe ce qui se passe.",
        "Les raisins coulent-ils ou flottent-ils ?",
        "Attends quelques minutes et observe.",
      ],
      science:
        "Les bulles de dioxyde de carbone s'accrochent aux raisins et les soulèvent. Quand les bulles éclatent, les raisins coulent à nouveau !",
    },
    {
      key: "exp_yeni_o3",
      title: "Bateau propulsé au savon",
      emoji: "🚢",
      materials: [
        "Un petit morceau de carton",
        "Un bac d'eau",
        "Du liquide vaisselle",
      ],
      steps: [
        "Découpe le carton en forme de petit bateau.",
        "Fais une petite encoche à l'arrière.",
        "Pose-le sur l'eau.",
        "Mets une goutte de savon dans l'encoche.",
        "Regarde le bateau avancer !",
      ],
      science:
        "Le savon réduit la tension superficielle de l'eau. L'eau derrière le bateau tire moins que l'eau devant, poussant ainsi le bateau vers l'avant !",
    },
  ],
  ilkokul: [
    {
      key: "exp_bitki_buyumesi",
      title: "Expérience de croissance des plantes",
      emoji: "🌱",
      materials: ["2 graines de haricot", "2 pots de terre", "De l'eau"],
      steps: [
        "Plante une graine dans chaque pot.",
        "Mets un pot au soleil et l'autre dans l'obscurité.",
        "Arrose les deux également chaque jour.",
        "Observe pendant une semaine.",
        "Quelle plante a poussé le plus vite ?",
      ],
      science:
        "Les plantes ont besoin de lumière solaire pour la photosynthèse afin de fabriquer leur nourriture. Sans lumière, elles ne peuvent pas bien pousser.",
    },
    {
      key: "exp_manyetizma",
      title: "Expérience avec un aimant",
      emoji: "🧲",
      materials: [
        "Un aimant",
        "Des trombones",
        "Des pièces de monnaie",
        "Un crayon",
        "Un morceau de bois",
      ],
      steps: [
        "Place chaque objet près de l'aimant un par un.",
        "Note lesquels collent et lesquels ne collent pas.",
        "Regroupe-les en magnétiques et non magnétiques.",
        "Qu'ont en commun les objets magnétiques ?",
      ],
      science:
        "Les aimants attirent les métaux contenant du fer, du nickel ou du cobalt. Les autres matériaux ne sont pas magnétiques.",
    },
    {
      key: "exp_filtre_su",
      title: "Filtration de l'eau",
      emoji: "💧",
      materials: [
        "Une bouteille en plastique",
        "Du sable",
        "Des cailloux",
        "De la terre",
        "Du coton",
        "De l'eau sale",
      ],
      steps: [
        "Coupe la bouteille en deux.",
        "Place du coton en bas, puis du sable, puis des cailloux.",
        "Verse lentement de l'eau sale dessus.",
        "Recueille l'eau filtrée en bas.",
        "Compare avec l'eau non filtrée.",
      ],
      science:
        "Les couches de sable et de gravier capturent les particules de saleté quand l'eau les traverse. C'est ainsi que fonctionnent les filtres à eau basiques !",
    },
    {
      key: "exp_ses_dalgalari",
      title: "Les ondes sonores",
      emoji: "🔊",
      materials: ["2 gobelets en papier", "Une ficelle", "Une aiguille"],
      steps: [
        "Fais un petit trou dans le fond de chaque gobelet.",
        "Passe la ficelle à travers les deux trous et fais des nœuds.",
        "Chaque personne tient un gobelet.",
        "Tends bien la ficelle et parle dans le gobelet.",
        "Entends-tu à travers le téléphone en ficelle ?",
      ],
      science:
        "Le son voyage en vibrations. Parler fait vibrer le gobelet, la ficelle transmet ces vibrations, et l'autre gobelet les retransmet en son.",
    },
    {
      key: "exp_yanardaǧ",
      title: "Volcan au bicarbonate",
      emoji: "🌋",
      materials: [
        "Du bicarbonate de soude",
        "Du vinaigre",
        "Colorant alimentaire rouge",
        "Un verre",
      ],
      steps: [
        "Mets 3 cuillères à soupe de bicarbonate dans le verre.",
        "Ajoute du colorant alimentaire rouge.",
        "Verse du vinaigre dans le verre.",
        "Recule et regarde la lave couler !",
        "Qu'est-ce qui a créé la mousse ?",
      ],
      science:
        "Le bicarbonate et le vinaigre réagissent pour produire du dioxyde de carbone. Ce gaz s'échappe rapidement et crée l'effet d'éruption !",
    },
    {
      key: "exp_yeni_i1",
      title: "Œuf dans le vinaigre",
      emoji: "🥚",
      materials: ["1 œuf cru", "Un verre de vinaigre", "3 jours de patience"],
      steps: [
        "Place l'œuf cru dans le verre.",
        "Verse du vinaigre dessus.",
        "Observe les bulles sur la coquille.",
        "Laisse reposer 3 jours.",
        "Sors délicatement l'œuf. Que s'est-il passé avec la coquille ?",
      ],
      science:
        "L'acide acétique du vinaigre dissout le calcium de la coquille. Après 3 jours, la coquille a disparu, ne laissant que la membrane caoutchouteuse !",
    },
    {
      key: "exp_yeni_i2",
      title: "Arc-en-ciel dans un verre",
      emoji: "🌈",
      materials: [
        "Du miel",
        "Du liquide vaisselle",
        "De l'eau",
        "De l'huile végétale",
        "De l'alcool à 70°",
        "Un grand verre",
      ],
      steps: [
        "Verse lentement le miel dans le verre en premier.",
        "Ajoute délicatement le liquide vaisselle par-dessus.",
        "Ajoute lentement de l'eau colorée.",
        "Ajoute de l'huile végétale.",
        "Ajoute enfin l'alcool. Observe les couches !",
      ],
      science:
        "Les liquides de différentes densités ne se mélangent pas et forment des couches séparées. Le liquide le plus dense coule en bas !",
    },
    {
      key: "exp_yeni_i3",
      title: "Pile au citron",
      emoji: "🍋",
      materials: [
        "Un citron",
        "Une pièce en cuivre",
        "Un clou en zinc",
        "Des fils pour LED",
      ],
      steps: [
        "Enfonce la pièce et le clou dans le citron.",
        "Connecte les fils de la LED à la pièce et au clou.",
        "La LED s'allume-t-elle ?",
        "Essaie avec plusieurs citrons connectés en série.",
      ],
      science:
        "L'acide citrique du citron réagit avec les métaux (cuivre et zinc) pour produire un petit courant électrique. Suffisant pour allumer une minuscule LED !",
    },
  ],
  ortaokul: [
    {
      key: "exp_dna_izolasyon",
      title: "Extraction d'ADN d'une fraise",
      emoji: "🍓",
      materials: [
        "Une fraise",
        "Du sel",
        "Du liquide vaisselle",
        "De l'alcool (froid)",
        "Un sac plastique",
      ],
      steps: [
        "Écrase la fraise dans le sac.",
        "Ajoute une pincée de sel et une goutte de liquide vaisselle, mélange doucement.",
        "Filtre le liquide à travers un tissu.",
        "Verse lentement de l'alcool froid par-dessus.",
        "Observe les fils blancs d'ADN apparaître !",
      ],
      science:
        "Le savon décompose les membranes cellulaires, libérant l'ADN. L'alcool provoque l'agglomération de l'ADN, le rendant visible. Tu peux voir de l'ADN réel à l'œil nu !",
    },
    {
      key: "exp_elektrik_devre",
      title: "Circuit électrique simple",
      emoji: "⚡",
      materials: ["Pile", "Fils électriques", "Ampoule LED", "Interrupteur"],
      steps: [
        "Connecte la pile à la LED avec des fils.",
        "Ajoute un interrupteur dans le circuit.",
        "Ferme l'interrupteur et vérifie si l'ampoule s'allume.",
        "Ouvre l'interrupteur et observe.",
        "Qu'est-ce qui contrôle le flux d'électricité ?",
      ],
      science:
        "L'électricité circule dans une boucle fermée appelée circuit. Un interrupteur complète ou coupe le circuit, allumant ou éteignant l'ampoule.",
    },
    {
      key: "exp_asit_baz",
      title: "Indicateur acide-base",
      emoji: "🧪",
      materials: [
        "Du chou rouge",
        "De l'eau",
        "Divers liquides (citron, vinaigre, eau bicarbonatée, lait)",
      ],
      steps: [
        "Fais bouillir du chou rouge et recueille le liquide violet.",
        "Verse un peu dans des verres séparés.",
        "Ajoute un liquide de test différent dans chaque verre.",
        "Observe les changements de couleur.",
        "Lesquels sont des acides et lesquels sont des bases ?",
      ],
      science:
        "Le chou rouge contient un pigment appelé anthocyanine. Il vire au rouge dans les acides et au vert dans les bases. C'est un indicateur de pH naturel !",
    },
    {
      key: "exp_gunes_enerjisi",
      title: "L'énergie solaire",
      emoji: "☀️",
      materials: [
        "Deux verres identiques",
        "De l'eau",
        "Papier noir et papier blanc",
      ],
      steps: [
        "Remplis les deux verres avec la même quantité d'eau froide.",
        "Enveloppe un verre de papier noir et un autre de papier blanc.",
        "Place les deux en plein soleil pendant 30 minutes.",
        "Mesure la température de chaque verre.",
        "Quelle eau est la plus chaude ?",
      ],
      science:
        "Les couleurs sombres absorbent davantage la lumière et l'énergie thermique. Les couleurs claires réfléchissent davantage la lumière. Voilà pourquoi on porte des vêtements clairs en été !",
    },
    {
      key: "exp_fotosntez",
      title: "Expérience de photosynthèse",
      emoji: "🌿",
      materials: [
        "Une feuille saine",
        "De l'alcool à 70°",
        "De l'eau chaude",
        "Solution d'iode",
      ],
      steps: [
        "Laisse la plante au soleil pendant quelques heures.",
        "Cueille une feuille et fais-la bouillir brièvement dans de l'eau.",
        "Place la feuille dans de l'alcool pour enlever la chlorophylle.",
        "Rince à l'eau et ajoute de l'iode.",
        "De quelle couleur vire-t-elle ? Pourquoi ?",
      ],
      science:
        "L'iode devient bleu-noir foncé en présence d'amidon. Si la feuille était au soleil, elle a fabriqué de l'amidon par photosynthèse. La couleur sombre le prouve !",
    },
    {
      key: "exp_yeni_o_1",
      title: "Osmose avec une pomme de terre",
      emoji: "🥔",
      materials: [
        "2 tranches de pomme de terre",
        "Eau salée",
        "Eau ordinaire",
        "2 bols",
      ],
      steps: [
        "Remplis un bol d'eau ordinaire et l'autre d'eau très salée.",
        "Mets une tranche de pomme de terre dans chaque bol.",
        "Attends 30 minutes.",
        "Sors les tranches et compare leur fermeté.",
        "Laquelle est devenue plus molle ? Pourquoi ?",
      ],
      science:
        "L'osmose est le déplacement de l'eau à travers une membrane du faible au fort taux de sel. L'eau salée extrait l'eau des cellules de la pomme de terre, faisant rétrécir et ramollir la tranche.",
    },
    {
      key: "exp_yeni_o_2",
      title: "Fluide non-newtonien",
      emoji: "🌀",
      materials: ["De la maïzena", "De l'eau", "Un bol"],
      steps: [
        "Mélange 2 parts de maïzena avec 1 part d'eau dans le bol.",
        "Appuie rapidement sur le mélange avec ta main.",
        "Maintenant touche-le très lentement.",
        "Quelle est la différence ?",
        "Essaie de le frapper et de le toucher doucement.",
      ],
      science:
        "Ce mélange est appelé fluide non-newtonien. Il se comporte comme un solide quand une force est appliquée rapidement et comme un liquide quand on le touche lentement. Sa viscosité change selon la force appliquée !",
    },
  ],
};
