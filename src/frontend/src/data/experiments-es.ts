type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

interface Experiment {
  key: string;
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  science: string;
}

export const experimentsEs: Record<Level, Experiment[]> = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Mezcla de Colores",
      emoji: "🎨",
      materials: [
        "Pintura roja",
        "Pintura azul",
        "Pintura amarilla",
        "3 vasos de agua",
      ],
      steps: [
        "Llena los vasos con agua.",
        "Añade pintura roja al primer vaso.",
        "Añade pintura azul al segundo vaso.",
        "Mezcla ambos vasos en un tercer vaso vacío.",
        "¡Observa cómo se forma el color morado!",
      ],
      science:
        "Los colores primarios (rojo, azul, amarillo) crean colores secundarios al mezclarse. ¡Rojo + Azul = Morado!",
    },
    {
      key: "exp_buz_erimesi",
      title: "¿Qué Pasa Cuando se Derrite el Hielo?",
      emoji: "🧊",
      materials: ["Un cubo de hielo", "Un tazón", "Sal"],
      steps: [
        "Coloca el cubo de hielo en el tazón.",
        "Espolvorea sal encima.",
        "Observa cómo se derrite el hielo.",
        "Compara con un cubo de hielo sin sal.",
        "¿Cuál se derritió más rápido?",
      ],
      science:
        "La sal baja el punto de fusión del hielo. ¡Por eso se pone sal en las carreteras en invierno!",
    },
    {
      key: "exp_balon_sisirme",
      title: "Infla un Globo con Bicarbonato",
      emoji: "🎈",
      materials: ["1 globo", "1 botella", "Vinagre", "Bicarbonato de sodio"],
      steps: [
        "Vierte un poco de vinagre en la botella.",
        "Pon una cucharadita de bicarbonato dentro del globo.",
        "Estira el globo sobre la boca de la botella.",
        "Vierte el bicarbonato del globo en la botella.",
        "¡Observa cómo se infla el globo!",
      ],
      science:
        "Cuando el vinagre y el bicarbonato reaccionan, liberan dióxido de carbono. ¡Ese gas infla el globo!",
    },
    {
      key: "exp_yeni_o1",
      title: "Leche y Limón",
      emoji: "🥛",
      materials: [
        "1 vaso de leche",
        "1 cucharada de jugo de limón",
        "1 recipiente",
      ],
      steps: [
        "Vierte la leche en el recipiente.",
        "Añade el jugo de limón a la leche.",
        "Revuelve y espera.",
        "Observa cómo se corta la leche.",
        "¿Qué cambió?",
      ],
      science:
        "El jugo de limón es ácido y hace que las proteínas de la leche se agrupen. ¡Así es como se hace el queso!",
    },
    {
      key: "exp_yeni_o2",
      title: "Pasas Bailarinas",
      emoji: "🍇",
      materials: ["Agua con gas", "Pasas", "Un vaso transparente"],
      steps: [
        "Llena el vaso con agua con gas.",
        "Añade unas cuantas pasas al vaso.",
        "Observa lo que pasa.",
        "Las pasas suben y bajan continuamente.",
        "¿Por qué crees que ocurre esto?",
      ],
      science:
        "Las burbujas de dióxido de carbono se adhieren a las pasas y las elevan. Cuando llegan a la superficie las burbujas estallan y las pasas vuelven a bajar.",
    },
  ],
  ilkokul: [
    {
      key: "exp_mum_yanma",
      title: "¿Qué Necesita Para Arder?",
      emoji: "🕯️",
      materials: ["1 vela", "1 vaso", "Cerillas (con ayuda de adulto)"],
      steps: [
        "Enciende la vela con cuidado.",
        "Coloca el vaso boca abajo sobre la vela.",
        "Observa cuánto tiempo sigue ardiendo la vela.",
        "¿Qué ocurrió?",
        "Saca el vaso y vuelve a encender la vela.",
      ],
      science:
        "El fuego necesita oxígeno para arder. Cuando el vaso bloquea el oxígeno, la vela se apaga.",
    },
    {
      key: "exp_agir_hafif",
      title: "¿Cuál es Más Pesado?",
      emoji: "⚖️",
      materials: [
        "Objetos diferentes",
        "Una balanza simple",
        "Hojas de papel para anotar",
      ],
      steps: [
        "Recoge 5 objetos diferentes.",
        "Predice cuál es más pesado.",
        "Pésalos en la balanza.",
        "Anota los resultados.",
        "Compara tus predicciones con los resultados reales.",
      ],
      science:
        "El peso depende de la masa y la gravedad. Objetos de diferente tamaño pueden tener pesos distintos.",
    },
    {
      key: "exp_bitki_transpiration",
      title: "Las Plantas Transpiran",
      emoji: "🌱",
      materials: [
        "Una planta con hojas",
        "1 bolsa de plástico",
        "1 goma elástica",
      ],
      steps: [
        "Envuelve algunas hojas de la planta en la bolsa.",
        "Sujétala con la goma elástica.",
        "Deja la planta al sol durante unas horas.",
        "Observa el interior de la bolsa.",
        "¿Qué ves?",
      ],
      science:
        "Las plantas liberan agua a través de sus hojas en un proceso llamado transpiración. Esa agua aparece como gotitas en la bolsa.",
    },
    {
      key: "exp_yeni_i1",
      title: "Puente de Papel",
      emoji: "🌉",
      materials: ["2 hojas de papel", "Monedas", "2 libros de la misma altura"],
      steps: [
        "Coloca los libros con separación entre ellos.",
        "Extiende una hoja de papel plana sobre los libros.",
        "Coloca monedas encima y observa cuántas aguanta.",
        "Dobla la otra hoja en acordeón.",
        "Colócala entre los libros y carga con monedas. ¿Cuántas aguanta ahora?",
      ],
      science:
        "Doblar el papel en acordeón distribuye el peso de manera más uniforme. Por eso los puentes se construyen con estructuras plegadas.",
    },
    {
      key: "exp_yeni_i2",
      title: "¿El Agua Tiene Piel?",
      emoji: "💧",
      materials: ["1 vaso de agua", "Papel de aluminio", "Monedas"],
      steps: [
        "Llena el vaso hasta el borde.",
        "Añade monedas una a una con cuidado.",
        "Observa cómo se abomba el agua.",
        "¿Cuántas monedas caben antes de derramarse?",
        "Intenta colocar un clip en la superficie del agua.",
      ],
      science:
        "La tensión superficial hace que las moléculas de agua en la superficie se atraigan entre sí como una película fina. ¡Eso es la 'piel' del agua!",
    },
  ],
  ortaokul: [
    {
      key: "exp_elektrik_devre",
      title: "Circuito Eléctrico Simple",
      emoji: "💡",
      materials: [
        "1 pila AA",
        "Cable de cobre",
        "1 bombilla pequeña",
        "Cinta aislante",
      ],
      steps: [
        "Conecta un extremo del cable al polo positivo de la pila.",
        "Conecta el otro extremo a la bombilla.",
        "Conecta el otro extremo de la bombilla al polo negativo de la pila.",
        "Observa si se enciende la bombilla.",
        "Prueba a cortar el circuito y verifica lo que sucede.",
      ],
      science:
        "La electricidad fluye en circuito cerrado. Cuando el circuito está completo, la corriente fluye y enciende la bombilla.",
    },
    {
      key: "exp_asit_baz",
      title: "Ácidos y Bases",
      emoji: "🧪",
      materials: [
        "Jugo de col morada",
        "Vinagre",
        "Bicarbonato",
        "Agua",
        "Vasos",
      ],
      steps: [
        "Prepara el indicador hirviendo col morada y filtrando el jugo.",
        "Llena varios vasos con diferentes líquidos.",
        "Añade unas gotas del jugo de col a cada vaso.",
        "Observa el cambio de color.",
        "Rojo = ácido, verde = base, morado = neutro.",
      ],
      science:
        "El jugo de col morada contiene un pigmento que cambia de color según el pH. Nos permite identificar ácidos y bases.",
    },
    {
      key: "exp_yoğunluk",
      title: "Torre de Densidades",
      emoji: "🌈",
      materials: [
        "Miel",
        "Aceite vegetal",
        "Agua",
        "Alcohol",
        "Un vaso alto y transparente",
      ],
      steps: [
        "Vierte la miel lentamente en el vaso.",
        "Añade el agua poco a poco por el borde.",
        "Añade el aceite del mismo modo.",
        "Finalmente añade el alcohol.",
        "Observa cómo se forman capas de colores distintos.",
      ],
      science:
        "Cada líquido tiene una densidad diferente. Los líquidos más densos se hunden al fondo y los menos densos flotan arriba.",
    },
    {
      key: "exp_yeni_o1",
      title: "Construcción de un Volcán",
      emoji: "🌋",
      materials: [
        "Bicarbonato",
        "Vinagre",
        "Colorante rojo",
        "Plastilina",
        "Bandeja",
      ],
      steps: [
        "Modela un volcán con plastilina sobre la bandeja.",
        "Pon bicarbonato en el cráter del volcán.",
        "Añade unas gotas de colorante rojo.",
        "Vierte vinagre en el cráter.",
        "¡Observa la erupción!",
      ],
      science:
        "La reacción entre el bicarbonato y el vinagre libera dióxido de carbono. Esta reacción química imita los volcanes reales.",
    },
    {
      key: "exp_yeni_o2",
      title: "Espectroscopio Casero",
      emoji: "🔭",
      materials: [
        "Un CD o DVD viejo",
        "Caja de cartón",
        "Tijeras",
        "Cinta adhesiva",
      ],
      steps: [
        "Recorta una ranura estrecha en un lado de la caja.",
        "Fija el CD en el interior de la caja frente a la ranura.",
        "Apunta la ranura hacia una fuente de luz.",
        "Mira dentro de la caja.",
        "Observa el espectro de colores.",
      ],
      science:
        "La luz blanca está compuesta por todos los colores del arco iris. El CD la dispersa en sus componentes de la misma forma que un prisma.",
    },
  ],
};
