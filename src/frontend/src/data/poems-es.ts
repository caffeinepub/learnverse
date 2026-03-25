type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

export const poemsEs: Record<
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
      title: "La Lluvia",
      emoji: "🌧️",
      lines: [
        "Gotitas de lluvia van cayendo,",
        "sobre mi ventana repicando.",
        "Las flores beben y los árboles crecen,",
        "¡La lluvia es buena para todos los que la reciben!",
      ],
    },
    {
      key: "poem_kelebek",
      title: "La Mariposa",
      emoji: "🦋",
      lines: [
        "Una mariposa pasa volando,",
        "alas de colores van brillando.",
        "Sobre las flores posa suave,",
        "¡y vuelve a volar, libre y grande!",
      ],
    },
    {
      key: "poem_ay",
      title: "La Luna",
      emoji: "🌙",
      lines: [
        "Luna, lunita en la noche clara,",
        "brillas con luz plateada y rara.",
        "Las estrellas a tu lado bailan,",
        "¡hasta que el nuevo día salga!",
      ],
    },
    {
      key: "poem_bahce",
      title: "Nuestro Jardín",
      emoji: "🌷",
      lines: [
        "Rosas rojas en el jardín,",
        "girasoles hacia el cielo sin fin.",
        "Las abejas zumban felices,",
        "¡y los días pasan con sus voces!",
      ],
    },
    {
      key: "poem_gunes",
      title: "El Sol",
      emoji: "☀️",
      lines: [
        "Sol brillante en el cielo azul,",
        "calientas el mundo con tu luz.",
        "Por las mañanas nos despiertas,",
        "¡y abres las flores más abiertas!",
      ],
    },
    {
      key: "poem_yildiz",
      title: "Las Estrellas",
      emoji: "⭐",
      lines: [
        "Estrellas, estrellas en el cielo,",
        "iluminan la noche con su vuelo.",
        "Pequeñas luces que brillan tanto,",
        "¡llenan la noche de encanto!",
      ],
    },
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
        "¡invierno cubre todo de hielo!",
      ],
    },
    {
      key: "poem_deniz",
      title: "El Mar",
      emoji: "🌊",
      lines: [
        "Mar azul, mar profundo y grande,",
        "tus olas en la orilla no se cansan.",
        "Peces nadan en tu interior,",
        "¡y llenas el mundo de color!",
      ],
    },
    {
      key: "poem_dost",
      title: "El Amigo",
      emoji: "🤝",
      lines: [
        "Un amigo es un tesoro precioso,",
        "que hace el camino menos dificultoso.",
        "Comparte alegrías y también penas,",
        "¡los amigos son cadenas que encadenan!",
      ],
    },
    {
      key: "poem_kitap",
      title: "El Libro",
      emoji: "📖",
      lines: [
        "Libro abierto, mundo sin fin,",
        "viajes y sueños de principio a fin.",
        "Palabras que vuelan, historias que enseñan,",
        "¡los libros son puertas que siempre se abren!",
      ],
    },
    {
      key: "poem_kar",
      title: "La Nieve",
      emoji: "❄️",
      lines: [
        "Cae la nieve blanca y suave,",
        "cubre los campos con su clave.",
        "Los niños salen a jugar,",
        "¡invierno feliz ha de llegar!",
      ],
    },
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
        "la esperanza ilumina el futuro.",
      ],
    },
    {
      key: "poem_zaman",
      title: "El Tiempo",
      emoji: "⏳",
      lines: [
        "El tiempo pasa sin detenerse,",
        "cada segundo puede perderse.",
        "Úsalo bien con sabiduría,",
        "¡pues el tiempo da la alegría!",
      ],
    },
    {
      key: "poem_bilim",
      title: "La Ciencia",
      emoji: "🔬",
      lines: [
        "La ciencia abre puertas al mañana,",
        "descubre secretos de la ventana.",
        "Preguntas y respuestas en cadena,",
        "¡la ciencia el mundo entero llena!",
      ],
    },
    {
      key: "poem_adalet",
      title: "La Justicia",
      emoji: "⚖️",
      lines: [
        "La justicia es el pilar del mundo,",
        "sin ella el camino es más profundo.",
        "Trata a todos con equidad,",
        "¡pues la justicia es libertad!",
      ],
    },
    {
      key: "poem_dogа",
      title: "La Naturaleza",
      emoji: "🌳",
      lines: [
        "La naturaleza es nuestro hogar,",
        "debemos cuidarla sin dudar.",
        "Árboles, ríos, montañas y mares,",
        "¡son nuestros más valiosos pilares!",
      ],
    },
  ],
};
