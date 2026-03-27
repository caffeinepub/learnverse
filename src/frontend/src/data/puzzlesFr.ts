export type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export interface Puzzle {
  key: string;
  question: string;
  emoji: string;
  choices: string[];
  correct: number;
}

export const puzzlesFr: Record<Level, Puzzle[]> = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "De quelle couleur est le soleil ?",
      emoji: "☀️",
      choices: ["Bleu", "Rouge", "Jaune", "Vert"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_1",
      question: "Lequel peut voler ?",
      emoji: "🐦",
      choices: ["Chat", "Oiseau", "Poisson", "Chien"],
      correct: 1,
    },
    {
      key: "puzzle_sayi_1",
      question: "Combien font 2 + 3 ?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_1",
      question: "Lequel n'est PAS un fruit ?",
      emoji: "🍎",
      choices: ["Pomme", "Banane", "Carotte", "Raisin"],
      correct: 2,
    },
    {
      key: "puzzle_sekil_1",
      question: "Quelle forme ressemble à une roue ?",
      emoji: "⭕",
      choices: ["Carré", "Cercle", "Triangle", "Rectangle"],
      correct: 1,
    },
    {
      key: "puzzle_renk_2",
      question: "De quelle couleur est le ciel ?",
      emoji: "🌤️",
      choices: ["Vert", "Bleu", "Jaune", "Rouge"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_2",
      question: "Quel animal pond des œufs ?",
      emoji: "🐔",
      choices: ["Chat", "Chien", "Poule", "Cheval"],
      correct: 2,
    },
    {
      key: "puzzle_sayi_2",
      question: "Combien font 10 - 4 ?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o1",
      question:
        "Je me lève chaque matin et me couche chaque soir. Qui suis-je ?",
      emoji: "☀️",
      choices: ["Lune", "Soleil", "Étoile", "Nuage"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o2",
      question: "J'ai des dents mais je ne peux pas mordre. Qui suis-je ?",
      emoji: "⚙️",
      choices: ["Scie", "Peigne", "Fourchette", "Cuillère"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new1",
      question:
        "J'arrive après le coucher du soleil et j'apporte les étoiles. Qui suis-je ?",
      emoji: "🌙",
      choices: ["Matin", "Nuit", "Midi", "Soir"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new5",
      question: "Quelle chose blanche tombe en hiver ?",
      emoji: "❄️",
      choices: ["Pluie", "Neige", "Grêle", "Brouillard"],
      correct: 1,
    },
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "Combien font 7 × 8 ?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_1",
      question: "Quelle est la capitale de la Turquie ?",
      emoji: "🏛️",
      choices: ["Istanbul", "Ankara", "Izmir", "Bursa"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_1",
      question: "Quelle planète est la plus proche du Soleil ?",
      emoji: "🪐",
      choices: ["Vénus", "Terre", "Mercure", "Mars"],
      correct: 2,
    },
    {
      key: "puzzle_dil_1",
      question: "Combien de lettres y a-t-il dans l'alphabet français ?",
      emoji: "🔤",
      choices: ["24", "26", "28", "30"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_3",
      question: "Quel est l'animal terrestre le plus rapide ?",
      emoji: "🐆",
      choices: ["Lion", "Guépard", "Léopard", "Tigre"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_1",
      question: "Qui a découvert l'Amérique ?",
      emoji: "⛵",
      choices: ["Marco Polo", "Magellan", "Colomb", "Vespucci"],
      correct: 2,
    },
    {
      key: "puzzle_matematik_2",
      question: "Combien de côtés a un hexagone ?",
      emoji: "🔷",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_2",
      question:
        "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      emoji: "💨",
      choices: ["Oxygène", "CO₂", "Azote", "Argon"],
      correct: 2,
    },
    {
      key: "puzzle_cografi_2",
      question: "Quel est le plus grand océan du monde ?",
      emoji: "🌊",
      choices: ["Atlantique", "Indien", "Pacifique", "Arctique"],
      correct: 2,
    },
    {
      key: "puzzle_sanat_1",
      question: "Qui a peint la Joconde ?",
      emoji: "🎨",
      choices: ["Michel-Ange", "Raphaël", "Da Vinci", "Botticelli"],
      correct: 2,
    },
  ],
  ortaokul: [
    {
      key: "puzzle_o_math_1",
      question: "Quelle est la racine carrée de 144 ?",
      emoji: "🔢",
      choices: ["11", "12", "13", "14"],
      correct: 1,
    },
    {
      key: "puzzle_o_science_1",
      question: "Quelle est la formule chimique de l'eau ?",
      emoji: "💧",
      choices: ["HO", "H₂O", "H₂O₂", "OH"],
      correct: 1,
    },
    {
      key: "puzzle_o_geo_1",
      question: "Quel est le plus long fleuve du monde ?",
      emoji: "🌍",
      choices: ["Amazone", "Yangtsé", "Mississippi", "Nil"],
      correct: 3,
    },
    {
      key: "puzzle_o_hist_1",
      question: "En quelle année a commencé la Première Guerre mondiale ?",
      emoji: "📅",
      choices: ["1912", "1914", "1916", "1918"],
      correct: 1,
    },
    {
      key: "puzzle_o_lit_1",
      question: "Qui a écrit Don Quichotte ?",
      emoji: "📚",
      choices: ["Lope de Vega", "Calderón", "Cervantes", "Quevedo"],
      correct: 2,
    },
    {
      key: "puzzle_o_phys_1",
      question: "Quelle est la vitesse de la lumière en km/s ?",
      emoji: "💡",
      choices: ["100 000", "200 000", "300 000", "400 000"],
      correct: 2,
    },
    {
      key: "puzzle_o_bio_1",
      question: "Combien de chromosomes a une cellule humaine normale ?",
      emoji: "🧬",
      choices: ["23", "44", "46", "48"],
      correct: 2,
    },
    {
      key: "puzzle_o_chem_1",
      question: "Quel est l'élément le plus léger du tableau périodique ?",
      emoji: "⚗️",
      choices: ["Hélium", "Lithium", "Hydrogène", "Béryllium"],
      correct: 2,
    },
  ],
};
