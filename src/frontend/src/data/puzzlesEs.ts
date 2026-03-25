export type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export interface Puzzle {
  key: string;
  question: string;
  emoji: string;
  choices: string[];
  correct: number;
}

export const puzzlesEs: Record<Level, Puzzle[]> = {
  okul_oncesi: [
    {
      key: "puzzle_renk_1",
      question: "¿De qué color es el sol?",
      emoji: "☀️",
      choices: ["Azul", "Rojo", "Amarillo", "Verde"],
      correct: 2,
    },
    {
      key: "puzzle_hayvan_1",
      question: "¿Cuál puede volar?",
      emoji: "🐦",
      choices: ["Gato", "Pájaro", "Pez", "Perro"],
      correct: 1,
    },
    {
      key: "puzzle_sayi_1",
      question: "¿Cuánto es 2 + 3?",
      emoji: "🔢",
      choices: ["4", "6", "5", "7"],
      correct: 2,
    },
    {
      key: "puzzle_meyve_1",
      question: "¿Cuál NO es una fruta?",
      emoji: "🍎",
      choices: ["Manzana", "Plátano", "Zanahoria", "Uva"],
      correct: 2,
    },
    {
      key: "puzzle_sekil_1",
      question: "¿A qué forma se parece una rueda?",
      emoji: "⭕",
      choices: ["Cuadrado", "Círculo", "Triángulo", "Rectángulo"],
      correct: 1,
    },
    {
      key: "puzzle_renk_2",
      question: "¿De qué color es el cielo?",
      emoji: "🌤️",
      choices: ["Verde", "Azul", "Amarillo", "Rojo"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_2",
      question: "¿Qué animal pone huevos?",
      emoji: "🐔",
      choices: ["Gato", "Perro", "Gallina", "Caballo"],
      correct: 2,
    },
    {
      key: "puzzle_sayi_2",
      question: "¿Cuánto es 10 - 4?",
      emoji: "🔢",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o1",
      question: "Salgo cada mañana y me pongo cada tarde. ¿Qué soy?",
      emoji: "☀️",
      choices: ["Luna", "Sol", "Estrella", "Nube"],
      correct: 1,
    },
    {
      key: "puzzle_t9_o2",
      question: "Tengo dientes pero no puedo morder. ¿Qué soy?",
      emoji: "⚙️",
      choices: ["Sierra", "Peine", "Tenedor", "Cuchara"],
      correct: 1,
    },
    {
      key: "puzzle_oo_new1",
      question: "Llego después del atardecer y traigo las estrellas. ¿Qué soy?",
      emoji: "🌙",
      choices: ["Mañana", "Noche", "Mediodía", "Tarde"],
      correct: 3,
    },
    {
      key: "puzzle_oo_new5",
      question: "¿Qué cosa blanca cae en invierno?",
      emoji: "❄️",
      choices: ["Lluvia", "Nieve", "Granizo", "Niebla"],
      correct: 1,
    },
  ],
  ilkokul: [
    {
      key: "puzzle_matematik_1",
      question: "¿Cuánto es 7 × 8?",
      emoji: "🔢",
      choices: ["54", "56", "58", "64"],
      correct: 1,
    },
    {
      key: "puzzle_cografi_1",
      question: "¿Cuál es la capital de Turquía?",
      emoji: "🏛️",
      choices: ["Estambul", "Ankara", "Esmirna", "Bursa"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_1",
      question: "¿Qué planeta es el más cercano al Sol?",
      emoji: "🪐",
      choices: ["Venus", "Tierra", "Mercurio", "Marte"],
      correct: 2,
    },
    {
      key: "puzzle_dil_1",
      question: "¿Cuántas letras tiene el alfabeto español?",
      emoji: "🔤",
      choices: ["25", "26", "27", "28"],
      correct: 1,
    },
    {
      key: "puzzle_hayvan_3",
      question: "¿Cuál es el animal terrestre más rápido?",
      emoji: "🐆",
      choices: ["León", "Guepardo", "Leopardo", "Tigre"],
      correct: 1,
    },
    {
      key: "puzzle_tarih_1",
      question: "¿Quién descubrió América?",
      emoji: "⛵",
      choices: ["Marco Polo", "Magallanes", "Colón", "Vespucio"],
      correct: 2,
    },
    {
      key: "puzzle_matematik_2",
      question: "¿Cuántos lados tiene un hexágono?",
      emoji: "🔷",
      choices: ["5", "6", "7", "8"],
      correct: 1,
    },
    {
      key: "puzzle_bilim_2",
      question: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
      emoji: "💨",
      choices: ["Oxígeno", "CO₂", "Nitrógeno", "Argón"],
      correct: 2,
    },
    {
      key: "puzzle_cografi_2",
      question: "¿Cuál es el océano más grande del mundo?",
      emoji: "🌊",
      choices: ["Atlántico", "Índico", "Pacífico", "Ártico"],
      correct: 2,
    },
    {
      key: "puzzle_sanat_1",
      question: "¿Quién pintó la Mona Lisa?",
      emoji: "🎨",
      choices: ["Miguel Ángel", "Rafael", "Da Vinci", "Botticelli"],
      correct: 2,
    },
  ],
  ortaokul: [
    {
      key: "puzzle_o_math_1",
      question: "¿Cuánto es la raíz cuadrada de 144?",
      emoji: "🔢",
      choices: ["11", "12", "13", "14"],
      correct: 1,
    },
    {
      key: "puzzle_o_science_1",
      question: "¿Cuál es la fórmula del agua?",
      emoji: "💧",
      choices: ["HO", "H₂O", "H₂O₂", "OH"],
      correct: 1,
    },
    {
      key: "puzzle_o_geo_1",
      question: "¿Cuál es el río más largo del mundo?",
      emoji: "🌍",
      choices: ["Amazonas", "Yangtsé", "Misisipi", "Nilo"],
      correct: 3,
    },
    {
      key: "puzzle_o_hist_1",
      question: "¿En qué año comenzó la Primera Guerra Mundial?",
      emoji: "📅",
      choices: ["1912", "1914", "1916", "1918"],
      correct: 1,
    },
    {
      key: "puzzle_o_lit_1",
      question: "¿Quién escribió Don Quijote?",
      emoji: "📚",
      choices: ["Lope de Vega", "Calderón", "Cervantes", "Quevedo"],
      correct: 2,
    },
    {
      key: "puzzle_o_phys_1",
      question: "¿Cuál es la velocidad de la luz en km/s?",
      emoji: "💡",
      choices: ["100.000", "200.000", "300.000", "400.000"],
      correct: 2,
    },
    {
      key: "puzzle_o_bio_1",
      question: "¿Cuántos cromosomas tiene una célula humana normal?",
      emoji: "🧬",
      choices: ["23", "44", "46", "48"],
      correct: 2,
    },
    {
      key: "puzzle_o_chem_1",
      question: "¿Cuál es el elemento más ligero de la tabla periódica?",
      emoji: "⚗️",
      choices: ["Helio", "Litio", "Hidrógeno", "Berilio"],
      correct: 2,
    },
  ],
};
