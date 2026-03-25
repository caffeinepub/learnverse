type ContentTranslationEs = {
  title?: string;
  text?: string;
  meaning?: string;
  rule?: string;
  example?: string;
  word?: string;
  definition?: string;
  synonym?: string;
  antonym?: string;
};

export const contentTranslationsEs: Record<string, ContentTranslationEs> = {
  // PROVERBS
  pr_damla: {
    title: "Gota a gota se llena el lago",
    text: "Gota a gota se llena el lago.",
    meaning: "Las cosas pequeñas se acumulan para volverse grandes.",
  },
  pr_erken: {
    title: "Al que madruga, Dios le ayuda",
    text: "Al que madruga, Dios le ayuda.",
    meaning: "Empezar temprano facilita las cosas.",
  },
  pr_karpuz: {
    title: "No se puede tener todo",
    text: "No se puede abarcar todo con una mano.",
    meaning: "No puedes hacer todo a la vez.",
  },
  pr_komsu: {
    title: "Hoy por ti, mañana por mí",
    text: "Los vecinos se ayudan mutuamente.",
    meaning: "Los vecinos se apoyan el uno al otro.",
  },
  pr_kervan: {
    title: "Los perros ladran pero la caravana avanza",
    text: "Los perros ladran pero la caravana avanza.",
    meaning: "Los obstáculos no nos pueden detener.",
  },
  pr_bugun: {
    title: "No dejes para mañana lo que puedas hacer hoy",
    text: "No dejes para mañana lo que puedas hacer hoy.",
    meaning: "Haz las cosas a tiempo.",
  },
  pr_agac: {
    title: "Árbol que crece torcido nunca se endereza",
    text: "Al árbol se le dobla desde pequeño.",
    meaning: "Es más fácil aprender de joven.",
  },
  pr_sabir: {
    title: "La paciencia es la madre de la ciencia",
    text: "La paciencia trae el éxito.",
    meaning: "Ser paciente lleva al éxito.",
  },
  pr_degirmen: {
    title: "Sin esfuerzo constante no hay resultado",
    text: "Sin agua constante el molino no gira.",
    meaning: "El esfuerzo inconsistente no da resultados.",
  },
  pr_dost: {
    title: "En las malas se conocen los buenos amigos",
    text: "En las malas se conocen los buenos amigos.",
    meaning: "Los verdaderos amigos aparecen en momentos difíciles.",
  },
  pr_saglik: {
    title: "La salud es el mayor tesoro",
    text: "La salud es el mayor tesoro.",
    meaning: "La salud es el valor más importante.",
  },
  pr_emek: {
    title: "Sin trabajo no hay recompensa",
    text: "Sin trabajo no hay recompensa.",
    meaning: "El éxito requiere trabajo.",
  },
  pr_sukut: {
    title: "En boca cerrada no entran moscas",
    text: "En boca cerrada no entran moscas.",
    meaning: "A veces el silencio es mejor que hablar.",
  },
  pr_kalkar: {
    title: "No hay mal que por bien no venga",
    text: "El que cae se levanta.",
    meaning: "Aprende del fracaso y empieza de nuevo.",
  },
  pr_akil: {
    title: "La sabiduría no tiene edad",
    text: "La sabiduría no depende de la edad.",
    meaning: "La inteligencia no está relacionada con la edad.",
  },
  // GRAMMAR
  gr_harf_a: {
    title: "La letra A",
    rule: "La letra A se escribe como mayúscula 'A' y minúscula 'a'.",
    example: "Árbol, Agua, Avión",
  },
  gr_hece: {
    title: "¿Qué es una sílaba?",
    rule: "Las palabras se forman de sílabas. Cada sílaba tiene una vocal.",
    example: "me-sa, ca-sa, sol",
  },
  gr_sesli: {
    title: "Las vocales",
    rule: "Las vocales son: a, e, i, o, u",
    example: "Árbol, elefante, isla, oso, uva",
  },
  gr_sessiz: {
    title: "Las consonantes",
    rule: "Las letras que no son vocales son consonantes.",
    example: "b, c, d, f, g, h, j, k, l, m...",
  },
  gr_nokta: {
    title: "El punto (.)",
    rule: "Se pone un punto al final de una oración.",
    example: "Hoy hace buen tiempo.",
  },
  gr_buyuk: {
    title: "Letras mayúsculas",
    rule: "Las oraciones empiezan con mayúscula. Los nombres propios se escriben en mayúscula.",
    example: "Juan fue a la escuela. Madrid es una ciudad bonita.",
  },
  gr_isim: {
    title: "¿Qué es un sustantivo?",
    rule: "Un sustantivo es el nombre de una persona, lugar o cosa.",
    example: "Lápiz, libro, escuela, María",
  },
  gr_fiil_okul: {
    title: "Verbo (palabra de acción)",
    rule: "Las palabras que describen acciones son verbos.",
    example: "correr, escribir, reír",
  },
  gr_fiil_zaman: {
    title: "Presente",
    rule: "Describe algo que está pasando ahora.",
    example: "Juan corre. Yo escribo.",
  },
  gr_gecmis: {
    title: "Pasado",
    rule: "Describe cosas que ya ocurrieron.",
    example: "Ayer fui a la escuela. Ella leyó un libro.",
  },
  gr_gelecek: {
    title: "Futuro",
    rule: "Describe cosas que van a pasar.",
    example: "Mañana iré a la escuela.",
  },
  gr_sifat: {
    title: "¿Qué es un adjetivo?",
    rule: "Palabras que describen o modifican sustantivos.",
    example: "manzana roja, casa grande, flor hermosa",
  },
  gr_zarf: {
    title: "¿Qué es un adverbio?",
    rule: "Palabras que modifican verbos.",
    example: "corrió rápido, cantó bien, trabajó duro",
  },
  gr_soru: {
    title: "Oración interrogativa",
    rule: "Las preguntas terminan con signo de interrogación.",
    example: "¿Vienes también? ¿Hace buen tiempo?",
  },
  gr_baglac: {
    title: "Conjunción",
    rule: "Palabras que unen oraciones o palabras.",
    example: "y, pero, o, porque, aunque",
  },
  gr_noktalama: {
    title: "La coma (,)",
    rule: "Las comas se usan en listas y oraciones largas.",
    example: "Compré manzanas, peras y cerezas.",
  },
  gr_edilgen: {
    title: "Voz pasiva",
    rule: "El que realiza la acción es desconocido o no se menciona.",
    example: "El libro fue leído. La ventana fue rota.",
  },
  gr_etken: {
    title: "Voz activa",
    rule: "Se conoce quién realiza la acción.",
    example: "Juan leyó el libro. El niño lanzó la pelota.",
  },
  gr_paragraf: {
    title: "Párrafo",
    rule: "Unidad de texto con varias oraciones sobre una idea.",
    example:
      "Cada párrafo tiene una idea principal. La primera oración introduce el tema.",
  },
  // VOCABULARY
  v_mutlu: {
    word: "Feliz",
    definition: "Sentir alegría y satisfacción",
    synonym: "Alegre, contento",
    antonym: "Triste, infeliz",
    example: "Hoy estoy muy feliz.",
  },
  v_guzel: {
    word: "Hermoso",
    definition: "Agradable en apariencia",
    synonym: "Bonito, lindo",
    antonym: "Feo, desagradable",
    example: "¡Qué flor tan hermosa!",
  },
  v_buyuk: {
    word: "Grande",
    definition: "De tamaño o cantidad grande",
    synonym: "Enorme, vasto",
    antonym: "Pequeño, diminuto",
    example: "Vi un elefante grande.",
  },
  v_hizli: {
    word: "Rápido",
    definition: "Que se mueve muy deprisa",
    synonym: "Veloz, ágil",
    antonym: "Lento, despacio",
    example: "El corredor corrió muy rápido.",
  },
  v_sicak: {
    word: "Caliente",
    definition: "Con alta temperatura",
    synonym: "Cálido, ardiente",
    antonym: "Frío, fresco",
    example: "Los días de verano son muy calientes.",
  },
  v_sert: {
    word: "Duro",
    definition: "Que no se dobla fácilmente, sólido",
    synonym: "Sólido, rígido",
    antonym: "Suave, blando",
    example: "La piedra es muy dura.",
  },
  v_temiz: {
    word: "Limpio",
    definition: "Sin suciedad, ordenado",
    synonym: "Puro, impecable",
    antonym: "Sucio, mugriento",
    example: "Mantén las manos limpias.",
  },
  v_sessiz: {
    word: "Silencioso",
    definition: "Que no hace ruido",
    synonym: "Callado, tranquilo",
    antonym: "Ruidoso, bullicioso",
    example: "La biblioteca es muy silenciosa.",
  },
  v_cesur: {
    word: "Valiente",
    definition: "Que no tiene miedo al peligro",
    synonym: "Audaz, valeroso",
    antonym: "Cobarde, temeroso",
    example: "El valiente héroe derrotó al monstruo.",
  },
  v_sabir: {
    word: "Paciencia",
    definition: "Capacidad de soportar dificultades con calma",
    synonym: "Tolerancia, perseverancia",
    antonym: "Impaciencia, prisa",
    example: "Si trabajas con paciencia, tendrás éxito.",
  },
  v_merak: {
    word: "Curiosidad",
    definition: "Deseo de aprender o saber",
    synonym: "Interés, inquietud",
    antonym: "Indiferencia, apatía",
    example: "Las personas curiosas aprenden mucho.",
  },
  v_basari: {
    word: "Éxito",
    definition: "Lograr una meta",
    synonym: "Logro, victoria",
    antonym: "Fracaso, derrota",
    example: "El trabajo duro lleva al éxito.",
  },
  v_fedakar: {
    word: "Generoso",
    definition: "Que se sacrifica por los demás",
    synonym: "Desprendido, dadivoso",
    antonym: "Egoísta, avaricioso",
    example: "Las madres son muy generosas.",
  },
  v_akilli: {
    word: "Inteligente",
    definition: "Listo, pensativo",
    synonym: "Listo, sabio",
    antonym: "Tonto, necio",
    example: "El estudiante inteligente resolvió el problema difícil.",
  },
  v_dürüst: {
    word: "Honesto",
    definition: "Que siempre dice la verdad",
    synonym: "Sincero, confiable",
    antonym: "Deshonesto, tramposo",
    example: "Ser honesto es importante.",
  },
  v_mesgul: {
    word: "Ocupado",
    definition: "Trabajando, no libre",
    synonym: "Atareado, activo",
    antonym: "Libre, desocupado",
    example: "El profesor está muy ocupado ahora.",
  },
  v_empati: {
    word: "Empatía",
    definition: "Capacidad de entender los sentimientos ajenos",
    synonym: "Comprensión, compasión",
    antonym: "Egoísmo, indiferencia",
    example: "La empatía fortalece las relaciones.",
  },
  v_analiz: {
    word: "Análisis",
    definition: "Examinar un todo dividiéndolo en partes",
    synonym: "Estudio, examen",
    antonym: "Síntesis, combinación",
    example: "El científico analizó las muestras.",
  },
  v_hipotez: {
    word: "Hipótesis",
    definition: "Explicación temporal no demostrada",
    synonym: "Suposición, conjetura",
    antonym: "Evidencia, certeza",
    example: "El científico probó su hipótesis.",
  },
  v_paradoks: {
    word: "Paradoja",
    definition: "Afirmación aparentemente contradictoria pero verdadera",
    synonym: "Contradicción, dilema",
    antonym: "Consistencia, armonía",
    example: "'Menos es más' es una paradoja.",
  },
};
