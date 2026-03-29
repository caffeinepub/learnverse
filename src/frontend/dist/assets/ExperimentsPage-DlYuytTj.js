import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, x as isFavorite, j as jsxRuntimeExports, B as Button, y as toggleFavorite, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-B83eSkg_.js";
const experimentsEn = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Color Mixing",
      emoji: "🎨",
      materials: ["Red paint", "Blue paint", "Yellow paint", "3 cups of water"],
      steps: [
        "Fill the cups with water.",
        "Add red paint to the first cup.",
        "Add blue paint to the second cup.",
        "Mix both cups into a third empty cup.",
        "Watch the purple color form!"
      ],
      science: "Primary colors (red, blue, yellow) make secondary colors when mixed. Red + Blue = Purple!"
    },
    {
      key: "exp_buz_erimesi",
      title: "What Happens When Ice Melts?",
      emoji: "🧊",
      materials: ["An ice cube", "A bowl", "Salt"],
      steps: [
        "Place the ice cube in the bowl.",
        "Sprinkle salt on top.",
        "Watch the ice melt.",
        "Compare with an ice cube without salt.",
        "Which melted faster?"
      ],
      science: "Salt lowers the melting point of ice. That is why salt is put on roads in winter!"
    },
    {
      key: "exp_balon_sisirme",
      title: "Inflate a Balloon with Baking Soda",
      emoji: "🎈",
      materials: ["1 balloon", "1 bottle", "Vinegar", "Baking soda"],
      steps: [
        "Pour a little vinegar into the bottle.",
        "Put a teaspoon of baking soda inside the balloon.",
        "Stretch the balloon over the mouth of the bottle.",
        "Pour the baking soda from the balloon into the bottle.",
        "Watch the balloon inflate!"
      ],
      science: "When vinegar and baking soda react, they release carbon dioxide gas. That gas inflates the balloon!"
    },
    {
      key: "exp_yeni_o1",
      title: "Milk and Lemon",
      emoji: "🥛",
      materials: [
        "1 glass of milk",
        "1 tablespoon of lemon juice",
        "1 container"
      ],
      steps: [
        "Pour the milk into the container.",
        "Add lemon juice to the milk.",
        "Stir and wait.",
        "Watch the milk curdle.",
        "What changed?"
      ],
      science: "Lemon juice is acidic and causes the proteins in milk to clump together. This is how cheese is made!"
    },
    {
      key: "exp_yeni_o2",
      title: "Dancing Raisins",
      emoji: "🍇",
      materials: ["Soda water or sparkling water", "Raisins", "A glass"],
      steps: [
        "Fill the glass with sparkling water.",
        "Drop a few raisins in.",
        "Watch what happens.",
        "Do the raisins sink or float?",
        "Wait a few minutes and observe."
      ],
      science: "Carbon dioxide bubbles cling to the raisins and lift them up. When the bubbles pop, the raisins sink again!"
    },
    {
      key: "exp_yeni_o3",
      title: "Soap Powered Boat",
      emoji: "🚢",
      materials: ["A small piece of cardboard", "A tub of water", "Dish soap"],
      steps: [
        "Cut the cardboard into a small boat shape.",
        "Cut a small notch at the back.",
        "Place it on the water.",
        "Put one drop of soap in the notch.",
        "Watch the boat move forward!"
      ],
      science: "Soap reduces the surface tension of water. The water behind the boat pulls less than the water in front, pushing the boat forward!"
    },
    {
      key: "exp_yeni_o4",
      title: "Magic Celery",
      emoji: "🥬",
      materials: [
        "A stalk of celery with leaves",
        "A glass of water",
        "Food coloring"
      ],
      steps: [
        "Fill the glass with water.",
        "Add several drops of food coloring.",
        "Place the celery stalk in the glass.",
        "Wait a few hours.",
        "Look at the leaves -- what color are they now?"
      ],
      science: "Plants absorb water through their stems using capillary action. The colored water travels up and tints the leaves!"
    }
  ],
  ilkokul: [
    {
      key: "exp_bitki_buyumesi",
      title: "Plant Growth Experiment",
      emoji: "🌱",
      materials: ["2 bean seeds", "2 cups of soil", "Water"],
      steps: [
        "Plant one seed in each cup.",
        "Keep one cup in sunlight and the other in the dark.",
        "Water both equally every day.",
        "Observe for one week.",
        "Which plant grew faster?"
      ],
      science: "Plants need sunlight for photosynthesis to make food. Without light they cannot grow properly."
    },
    {
      key: "exp_manyetizma",
      title: "Magnet Experiment",
      emoji: "🧲",
      materials: [
        "A magnet",
        "Paperclips",
        "Coins",
        "A pencil",
        "A piece of wood"
      ],
      steps: [
        "Place each object near the magnet one at a time.",
        "Record which objects stick and which don't.",
        "Group them as magnetic and non-magnetic.",
        "What do the magnetic objects have in common?"
      ],
      science: "Magnets attract metals containing iron, nickel, or cobalt. Other materials are not magnetic."
    },
    {
      key: "exp_filtre_su",
      title: "Water Filtration",
      emoji: "💧",
      materials: [
        "A plastic bottle",
        "Sand",
        "Pebbles",
        "Soil",
        "Cotton",
        "Dirty water"
      ],
      steps: [
        "Cut the bottle in half.",
        "Place cotton at the bottom, then sand, then pebbles.",
        "Slowly pour dirty water through.",
        "Collect the filtered water at the bottom.",
        "Compare with unfiltered water."
      ],
      science: "Layers of sand and gravel trap dirt particles as water passes through. This is how basic water filters work!"
    },
    {
      key: "exp_ses_dalgalari",
      title: "Sound Waves",
      emoji: "🔊",
      materials: ["2 paper cups", "String", "A needle"],
      steps: [
        "Poke a small hole in the bottom of each cup.",
        "Thread the string through both holes and tie knots to hold it.",
        "Each person holds one cup.",
        "Stretch the string tight and speak into the cup.",
        "Can you hear through the string telephone?"
      ],
      science: "Sound travels as vibrations. Speaking makes the cup vibrate, the string carries those vibrations, and the other cup turns them back into sound."
    },
    {
      key: "exp_yanardaǧ",
      title: "Baking Soda Volcano",
      emoji: "🌋",
      materials: ["Baking soda", "Vinegar", "Red food coloring", "A cup"],
      steps: [
        "Put 3 tablespoons of baking soda in the cup.",
        "Add red food coloring.",
        "Pour vinegar into the cup.",
        "Step back and watch the lava flow!",
        "What created the foam?"
      ],
      science: "Baking soda and vinegar react to produce carbon dioxide gas. The gas escapes quickly and creates the eruption effect!"
    },
    {
      key: "exp_yeni_i1",
      title: "Egg in Vinegar",
      emoji: "🥚",
      materials: ["1 raw egg", "A glass of vinegar", "3 days of patience"],
      steps: [
        "Place the raw egg in the glass.",
        "Pour vinegar over it.",
        "Watch for bubbles on the shell.",
        "Leave for 3 days.",
        "Carefully take the egg out. What happened to the shell?"
      ],
      science: "The acetic acid in vinegar dissolves the calcium in the eggshell. After 3 days the shell is gone, leaving only the rubbery membrane!"
    },
    {
      key: "exp_yeni_i2",
      title: "Rainbow in a Glass",
      emoji: "🌈",
      materials: [
        "Honey",
        "Dish soap",
        "Water",
        "Vegetable oil",
        "Rubbing alcohol",
        "A tall glass"
      ],
      steps: [
        "Slowly pour honey into the glass first.",
        "Gently add dish soap on top.",
        "Slowly add colored water.",
        "Add vegetable oil.",
        "Finally add alcohol. Watch the layers!"
      ],
      science: "Liquids with different densities don't mix and form separate layers. The densest liquid sinks to the bottom!"
    },
    {
      key: "exp_yeni_i3",
      title: "Lemon Battery",
      emoji: "🍋",
      materials: ["A lemon", "A copper coin", "A zinc nail", "LED light wires"],
      steps: [
        "Push the coin and nail into the lemon.",
        "Connect the LED wires to the coin and nail.",
        "Does the LED light up?",
        "Try with multiple lemons connected in series."
      ],
      science: "Citric acid in the lemon reacts with the metals (copper and zinc) to produce a small electric current. Enough to light a tiny LED!"
    },
    {
      key: "exp_yeni_i4",
      title: "Spinning Colors",
      emoji: "🎡",
      materials: ["White cardboard", "Scissors", "A pencil", "Colored markers"],
      steps: [
        "Cut a circle from the cardboard.",
        "Divide it into 7 equal sections.",
        "Color each section with the colors of the rainbow.",
        "Push a pencil through the center.",
        "Spin it fast. What color do you see?"
      ],
      science: "When the disc spins quickly, your eyes blend all the colors together. The brain perceives them as white or light gray -- just like sunlight contains all colors!"
    }
  ],
  ortaokul: [
    {
      key: "exp_dna_izolasyon",
      title: "DNA Extraction from a Strawberry",
      emoji: "🍓",
      materials: [
        "A strawberry",
        "Salt",
        "Dish soap",
        "Alcohol (cold)",
        "Plastic bag"
      ],
      steps: [
        "Crush the strawberry in the bag.",
        "Add a pinch of salt and a drop of dish soap, mix gently.",
        "Strain the liquid through a cloth.",
        "Slowly pour cold alcohol on top.",
        "Watch the white DNA strands appear!"
      ],
      science: "Soap breaks down cell membranes, releasing DNA. Alcohol causes DNA to clump together and become visible. You can see real DNA with the naked eye!"
    },
    {
      key: "exp_elektrik_devre",
      title: "Simple Electric Circuit",
      emoji: "⚡",
      materials: ["Battery", "Wires", "LED bulb", "Switch"],
      steps: [
        "Connect the battery to the LED with wires.",
        "Add a switch in the circuit.",
        "Close the switch and check if the bulb lights.",
        "Open the switch and observe.",
        "What controls the flow of electricity?"
      ],
      science: "Electricity flows in a closed loop called a circuit. A switch either completes or breaks the circuit, turning the bulb on or off."
    },
    {
      key: "exp_asit_baz",
      title: "Acid-Base Indicator",
      emoji: "🧪",
      materials: [
        "Red cabbage",
        "Water",
        "Various liquids (lemon, vinegar, baking soda water, milk)"
      ],
      steps: [
        "Boil red cabbage and collect the purple liquid.",
        "Pour a small amount into separate cups.",
        "Add a different test liquid to each cup.",
        "Observe the color changes.",
        "Which are acids and which are bases?"
      ],
      science: "Red cabbage contains a pigment called anthocyanin. It turns red in acids and green in bases. It is a natural pH indicator!"
    },
    {
      key: "exp_gunes_enerjisi",
      title: "Solar Energy",
      emoji: "☀️",
      materials: ["Two identical glasses", "Water", "Black and white paper"],
      steps: [
        "Fill both glasses with equal amounts of cold water.",
        "Wrap one glass in black paper and one in white.",
        "Place both in direct sunlight for 30 minutes.",
        "Measure the temperature of each glass.",
        "Which water is warmer?"
      ],
      science: "Dark colors absorb more light and heat energy. Light colors reflect more light. This explains why we wear light clothes in summer!"
    },
    {
      key: "exp_fotosntez",
      title: "Photosynthesis Experiment",
      emoji: "🌿",
      materials: [
        "A healthy leaf",
        "Rubbing alcohol",
        "Hot water",
        "Iodine solution"
      ],
      steps: [
        "Leave the plant in sunlight for a few hours.",
        "Pick a leaf and boil it briefly in water.",
        "Place the leaf in alcohol to remove chlorophyll.",
        "Rinse with water and add iodine.",
        "What color does it turn? Why?"
      ],
      science: "Iodine turns dark blue-black in the presence of starch. If the leaf was in sunlight, it made starch through photosynthesis. The dark color proves it!"
    },
    {
      key: "exp_yeni_o_1",
      title: "Osmosis with Potato",
      emoji: "🥔",
      materials: ["2 potato slices", "Salt water", "Plain water", "2 bowls"],
      steps: [
        "Fill one bowl with plain water and the other with very salty water.",
        "Put one potato slice in each bowl.",
        "Wait 30 minutes.",
        "Take the slices out and compare their firmness.",
        "Which slice became softer? Why?"
      ],
      science: "Osmosis is the movement of water across a membrane from low to high salt concentration. Salt water draws water out of the potato cells, making the slice shrink and soften."
    },
    {
      key: "exp_yeni_o_2",
      title: "Non-Newtonian Fluid",
      emoji: "🌀",
      materials: ["Cornstarch", "Water", "A bowl"],
      steps: [
        "Mix 2 parts cornstarch with 1 part water in the bowl.",
        "Press the mixture quickly with your hand.",
        "Now touch it very slowly.",
        "What's different?",
        "Try punching it and touching it gently."
      ],
      science: "This mixture is called a non-Newtonian fluid. It acts like a solid when force is applied quickly and like a liquid when touched slowly. Its viscosity changes with applied force!"
    },
    {
      key: "exp_yeni_o_3",
      title: "Build a Compass",
      emoji: "🧭",
      materials: [
        "A sewing needle",
        "A magnet",
        "A small piece of cork",
        "A bowl of water"
      ],
      steps: [
        "Stroke the needle with the magnet 50 times in one direction.",
        "Push the needle through the cork.",
        "Float the cork in the bowl of water.",
        "Watch the needle settle.",
        "Which direction does it point?"
      ],
      science: "Stroking the needle with a magnet aligns its iron atoms, making it a temporary magnet. Earth has a magnetic field and the needle aligns with it, always pointing north-south."
    }
  ]
};
const experimentsEs = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Mezcla de Colores",
      emoji: "🎨",
      materials: [
        "Pintura roja",
        "Pintura azul",
        "Pintura amarilla",
        "3 vasos de agua"
      ],
      steps: [
        "Llena los vasos con agua.",
        "Añade pintura roja al primer vaso.",
        "Añade pintura azul al segundo vaso.",
        "Mezcla ambos vasos en un tercer vaso vacío.",
        "¡Observa cómo se forma el color morado!"
      ],
      science: "Los colores primarios (rojo, azul, amarillo) crean colores secundarios al mezclarse. ¡Rojo + Azul = Morado!"
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
        "¿Cuál se derritió más rápido?"
      ],
      science: "La sal baja el punto de fusión del hielo. ¡Por eso se pone sal en las carreteras en invierno!"
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
        "¡Observa cómo se infla el globo!"
      ],
      science: "Cuando el vinagre y el bicarbonato reaccionan, liberan dióxido de carbono. ¡Ese gas infla el globo!"
    },
    {
      key: "exp_yeni_o1",
      title: "Leche y Limón",
      emoji: "🥛",
      materials: [
        "1 vaso de leche",
        "1 cucharada de jugo de limón",
        "1 recipiente"
      ],
      steps: [
        "Vierte la leche en el recipiente.",
        "Añade el jugo de limón a la leche.",
        "Revuelve y espera.",
        "Observa cómo se corta la leche.",
        "¿Qué cambió?"
      ],
      science: "El jugo de limón es ácido y hace que las proteínas de la leche se agrupen. ¡Así es como se hace el queso!"
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
        "¿Por qué crees que ocurre esto?"
      ],
      science: "Las burbujas de dióxido de carbono se adhieren a las pasas y las elevan. Cuando llegan a la superficie las burbujas estallan y las pasas vuelven a bajar."
    }
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
        "Saca el vaso y vuelve a encender la vela."
      ],
      science: "El fuego necesita oxígeno para arder. Cuando el vaso bloquea el oxígeno, la vela se apaga."
    },
    {
      key: "exp_agir_hafif",
      title: "¿Cuál es Más Pesado?",
      emoji: "⚖️",
      materials: [
        "Objetos diferentes",
        "Una balanza simple",
        "Hojas de papel para anotar"
      ],
      steps: [
        "Recoge 5 objetos diferentes.",
        "Predice cuál es más pesado.",
        "Pésalos en la balanza.",
        "Anota los resultados.",
        "Compara tus predicciones con los resultados reales."
      ],
      science: "El peso depende de la masa y la gravedad. Objetos de diferente tamaño pueden tener pesos distintos."
    },
    {
      key: "exp_bitki_transpiration",
      title: "Las Plantas Transpiran",
      emoji: "🌱",
      materials: [
        "Una planta con hojas",
        "1 bolsa de plástico",
        "1 goma elástica"
      ],
      steps: [
        "Envuelve algunas hojas de la planta en la bolsa.",
        "Sujétala con la goma elástica.",
        "Deja la planta al sol durante unas horas.",
        "Observa el interior de la bolsa.",
        "¿Qué ves?"
      ],
      science: "Las plantas liberan agua a través de sus hojas en un proceso llamado transpiración. Esa agua aparece como gotitas en la bolsa."
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
        "Colócala entre los libros y carga con monedas. ¿Cuántas aguanta ahora?"
      ],
      science: "Doblar el papel en acordeón distribuye el peso de manera más uniforme. Por eso los puentes se construyen con estructuras plegadas."
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
        "Intenta colocar un clip en la superficie del agua."
      ],
      science: "La tensión superficial hace que las moléculas de agua en la superficie se atraigan entre sí como una película fina. ¡Eso es la 'piel' del agua!"
    }
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
        "Cinta aislante"
      ],
      steps: [
        "Conecta un extremo del cable al polo positivo de la pila.",
        "Conecta el otro extremo a la bombilla.",
        "Conecta el otro extremo de la bombilla al polo negativo de la pila.",
        "Observa si se enciende la bombilla.",
        "Prueba a cortar el circuito y verifica lo que sucede."
      ],
      science: "La electricidad fluye en circuito cerrado. Cuando el circuito está completo, la corriente fluye y enciende la bombilla."
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
        "Vasos"
      ],
      steps: [
        "Prepara el indicador hirviendo col morada y filtrando el jugo.",
        "Llena varios vasos con diferentes líquidos.",
        "Añade unas gotas del jugo de col a cada vaso.",
        "Observa el cambio de color.",
        "Rojo = ácido, verde = base, morado = neutro."
      ],
      science: "El jugo de col morada contiene un pigmento que cambia de color según el pH. Nos permite identificar ácidos y bases."
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
        "Un vaso alto y transparente"
      ],
      steps: [
        "Vierte la miel lentamente en el vaso.",
        "Añade el agua poco a poco por el borde.",
        "Añade el aceite del mismo modo.",
        "Finalmente añade el alcohol.",
        "Observa cómo se forman capas de colores distintos."
      ],
      science: "Cada líquido tiene una densidad diferente. Los líquidos más densos se hunden al fondo y los menos densos flotan arriba."
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
        "Bandeja"
      ],
      steps: [
        "Modela un volcán con plastilina sobre la bandeja.",
        "Pon bicarbonato en el cráter del volcán.",
        "Añade unas gotas de colorante rojo.",
        "Vierte vinagre en el cráter.",
        "¡Observa la erupción!"
      ],
      science: "La reacción entre el bicarbonato y el vinagre libera dióxido de carbono. Esta reacción química imita los volcanes reales."
    },
    {
      key: "exp_yeni_o2",
      title: "Espectroscopio Casero",
      emoji: "🔭",
      materials: [
        "Un CD o DVD viejo",
        "Caja de cartón",
        "Tijeras",
        "Cinta adhesiva"
      ],
      steps: [
        "Recorta una ranura estrecha en un lado de la caja.",
        "Fija el CD en el interior de la caja frente a la ranura.",
        "Apunta la ranura hacia una fuente de luz.",
        "Mira dentro de la caja.",
        "Observa el espectro de colores."
      ],
      science: "La luz blanca está compuesta por todos los colores del arco iris. El CD la dispersa en sus componentes de la misma forma que un prisma."
    }
  ]
};
const experimentsFr = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Mélange de couleurs",
      emoji: "🎨",
      materials: [
        "Peinture rouge",
        "Peinture bleue",
        "Peinture jaune",
        "3 verres d'eau"
      ],
      steps: [
        "Remplis les verres avec de l'eau.",
        "Ajoute de la peinture rouge dans le premier verre.",
        "Ajoute de la peinture bleue dans le deuxième verre.",
        "Mélange les deux verres dans un troisième verre vide.",
        "Observe la couleur violette qui se forme !"
      ],
      science: "Les couleurs primaires (rouge, bleu, jaune) créent des couleurs secondaires quand on les mélange. Rouge + Bleu = Violet !"
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
        "Lequel a fondu le plus vite ?"
      ],
      science: "Le sel abaisse le point de fusion de la glace. C'est pourquoi on met du sel sur les routes en hiver !"
    },
    {
      key: "exp_balon_sisirme",
      title: "Gonfler un ballon avec du bicarbonate",
      emoji: "🎈",
      materials: [
        "1 ballon",
        "1 bouteille",
        "Du vinaigre",
        "Du bicarbonate de soude"
      ],
      steps: [
        "Verse un peu de vinaigre dans la bouteille.",
        "Mets une cuillère à café de bicarbonate dans le ballon.",
        "Étire le ballon sur l'embouchure de la bouteille.",
        "Verse le bicarbonate du ballon dans la bouteille.",
        "Observe le ballon se gonfler !"
      ],
      science: "Quand le vinaigre et le bicarbonate réagissent, ils libèrent du dioxyde de carbone. Ce gaz gonfle le ballon !"
    },
    {
      key: "exp_yeni_o1",
      title: "Lait et citron",
      emoji: "🥛",
      materials: [
        "1 verre de lait",
        "1 cuillère à soupe de jus de citron",
        "1 récipient"
      ],
      steps: [
        "Verse le lait dans le récipient.",
        "Ajoute le jus de citron au lait.",
        "Remue et attends.",
        "Observe le lait cailler.",
        "Qu'est-ce qui a changé ?"
      ],
      science: "Le jus de citron est acide et provoque la coagulation des protéines du lait. C'est ainsi que le fromage est fabriqué !"
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
        "Attends quelques minutes et observe."
      ],
      science: "Les bulles de dioxyde de carbone s'accrochent aux raisins et les soulèvent. Quand les bulles éclatent, les raisins coulent à nouveau !"
    },
    {
      key: "exp_yeni_o3",
      title: "Bateau propulsé au savon",
      emoji: "🚢",
      materials: [
        "Un petit morceau de carton",
        "Un bac d'eau",
        "Du liquide vaisselle"
      ],
      steps: [
        "Découpe le carton en forme de petit bateau.",
        "Fais une petite encoche à l'arrière.",
        "Pose-le sur l'eau.",
        "Mets une goutte de savon dans l'encoche.",
        "Regarde le bateau avancer !"
      ],
      science: "Le savon réduit la tension superficielle de l'eau. L'eau derrière le bateau tire moins que l'eau devant, poussant ainsi le bateau vers l'avant !"
    }
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
        "Quelle plante a poussé le plus vite ?"
      ],
      science: "Les plantes ont besoin de lumière solaire pour la photosynthèse afin de fabriquer leur nourriture. Sans lumière, elles ne peuvent pas bien pousser."
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
        "Un morceau de bois"
      ],
      steps: [
        "Place chaque objet près de l'aimant un par un.",
        "Note lesquels collent et lesquels ne collent pas.",
        "Regroupe-les en magnétiques et non magnétiques.",
        "Qu'ont en commun les objets magnétiques ?"
      ],
      science: "Les aimants attirent les métaux contenant du fer, du nickel ou du cobalt. Les autres matériaux ne sont pas magnétiques."
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
        "De l'eau sale"
      ],
      steps: [
        "Coupe la bouteille en deux.",
        "Place du coton en bas, puis du sable, puis des cailloux.",
        "Verse lentement de l'eau sale dessus.",
        "Recueille l'eau filtrée en bas.",
        "Compare avec l'eau non filtrée."
      ],
      science: "Les couches de sable et de gravier capturent les particules de saleté quand l'eau les traverse. C'est ainsi que fonctionnent les filtres à eau basiques !"
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
        "Entends-tu à travers le téléphone en ficelle ?"
      ],
      science: "Le son voyage en vibrations. Parler fait vibrer le gobelet, la ficelle transmet ces vibrations, et l'autre gobelet les retransmet en son."
    },
    {
      key: "exp_yanardaǧ",
      title: "Volcan au bicarbonate",
      emoji: "🌋",
      materials: [
        "Du bicarbonate de soude",
        "Du vinaigre",
        "Colorant alimentaire rouge",
        "Un verre"
      ],
      steps: [
        "Mets 3 cuillères à soupe de bicarbonate dans le verre.",
        "Ajoute du colorant alimentaire rouge.",
        "Verse du vinaigre dans le verre.",
        "Recule et regarde la lave couler !",
        "Qu'est-ce qui a créé la mousse ?"
      ],
      science: "Le bicarbonate et le vinaigre réagissent pour produire du dioxyde de carbone. Ce gaz s'échappe rapidement et crée l'effet d'éruption !"
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
        "Sors délicatement l'œuf. Que s'est-il passé avec la coquille ?"
      ],
      science: "L'acide acétique du vinaigre dissout le calcium de la coquille. Après 3 jours, la coquille a disparu, ne laissant que la membrane caoutchouteuse !"
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
        "Un grand verre"
      ],
      steps: [
        "Verse lentement le miel dans le verre en premier.",
        "Ajoute délicatement le liquide vaisselle par-dessus.",
        "Ajoute lentement de l'eau colorée.",
        "Ajoute de l'huile végétale.",
        "Ajoute enfin l'alcool. Observe les couches !"
      ],
      science: "Les liquides de différentes densités ne se mélangent pas et forment des couches séparées. Le liquide le plus dense coule en bas !"
    },
    {
      key: "exp_yeni_i3",
      title: "Pile au citron",
      emoji: "🍋",
      materials: [
        "Un citron",
        "Une pièce en cuivre",
        "Un clou en zinc",
        "Des fils pour LED"
      ],
      steps: [
        "Enfonce la pièce et le clou dans le citron.",
        "Connecte les fils de la LED à la pièce et au clou.",
        "La LED s'allume-t-elle ?",
        "Essaie avec plusieurs citrons connectés en série."
      ],
      science: "L'acide citrique du citron réagit avec les métaux (cuivre et zinc) pour produire un petit courant électrique. Suffisant pour allumer une minuscule LED !"
    }
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
        "Un sac plastique"
      ],
      steps: [
        "Écrase la fraise dans le sac.",
        "Ajoute une pincée de sel et une goutte de liquide vaisselle, mélange doucement.",
        "Filtre le liquide à travers un tissu.",
        "Verse lentement de l'alcool froid par-dessus.",
        "Observe les fils blancs d'ADN apparaître !"
      ],
      science: "Le savon décompose les membranes cellulaires, libérant l'ADN. L'alcool provoque l'agglomération de l'ADN, le rendant visible. Tu peux voir de l'ADN réel à l'œil nu !"
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
        "Qu'est-ce qui contrôle le flux d'électricité ?"
      ],
      science: "L'électricité circule dans une boucle fermée appelée circuit. Un interrupteur complète ou coupe le circuit, allumant ou éteignant l'ampoule."
    },
    {
      key: "exp_asit_baz",
      title: "Indicateur acide-base",
      emoji: "🧪",
      materials: [
        "Du chou rouge",
        "De l'eau",
        "Divers liquides (citron, vinaigre, eau bicarbonatée, lait)"
      ],
      steps: [
        "Fais bouillir du chou rouge et recueille le liquide violet.",
        "Verse un peu dans des verres séparés.",
        "Ajoute un liquide de test différent dans chaque verre.",
        "Observe les changements de couleur.",
        "Lesquels sont des acides et lesquels sont des bases ?"
      ],
      science: "Le chou rouge contient un pigment appelé anthocyanine. Il vire au rouge dans les acides et au vert dans les bases. C'est un indicateur de pH naturel !"
    },
    {
      key: "exp_gunes_enerjisi",
      title: "L'énergie solaire",
      emoji: "☀️",
      materials: [
        "Deux verres identiques",
        "De l'eau",
        "Papier noir et papier blanc"
      ],
      steps: [
        "Remplis les deux verres avec la même quantité d'eau froide.",
        "Enveloppe un verre de papier noir et un autre de papier blanc.",
        "Place les deux en plein soleil pendant 30 minutes.",
        "Mesure la température de chaque verre.",
        "Quelle eau est la plus chaude ?"
      ],
      science: "Les couleurs sombres absorbent davantage la lumière et l'énergie thermique. Les couleurs claires réfléchissent davantage la lumière. Voilà pourquoi on porte des vêtements clairs en été !"
    },
    {
      key: "exp_fotosntez",
      title: "Expérience de photosynthèse",
      emoji: "🌿",
      materials: [
        "Une feuille saine",
        "De l'alcool à 70°",
        "De l'eau chaude",
        "Solution d'iode"
      ],
      steps: [
        "Laisse la plante au soleil pendant quelques heures.",
        "Cueille une feuille et fais-la bouillir brièvement dans de l'eau.",
        "Place la feuille dans de l'alcool pour enlever la chlorophylle.",
        "Rince à l'eau et ajoute de l'iode.",
        "De quelle couleur vire-t-elle ? Pourquoi ?"
      ],
      science: "L'iode devient bleu-noir foncé en présence d'amidon. Si la feuille était au soleil, elle a fabriqué de l'amidon par photosynthèse. La couleur sombre le prouve !"
    },
    {
      key: "exp_yeni_o_1",
      title: "Osmose avec une pomme de terre",
      emoji: "🥔",
      materials: [
        "2 tranches de pomme de terre",
        "Eau salée",
        "Eau ordinaire",
        "2 bols"
      ],
      steps: [
        "Remplis un bol d'eau ordinaire et l'autre d'eau très salée.",
        "Mets une tranche de pomme de terre dans chaque bol.",
        "Attends 30 minutes.",
        "Sors les tranches et compare leur fermeté.",
        "Laquelle est devenue plus molle ? Pourquoi ?"
      ],
      science: "L'osmose est le déplacement de l'eau à travers une membrane du faible au fort taux de sel. L'eau salée extrait l'eau des cellules de la pomme de terre, faisant rétrécir et ramollir la tranche."
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
        "Essaie de le frapper et de le toucher doucement."
      ],
      science: "Ce mélange est appelé fluide non-newtonien. Il se comporte comme un solide quand une force est appliquée rapidement et comme un liquide quand on le touche lentement. Sa viscosité change selon la force appliquée !"
    }
  ]
};
const experimentsHi = {
  okul_oncesi: [
    {
      key: "exp_rang_milana",
      title: "रंग मिलाना",
      emoji: "🎨",
      materials: ["लाल रंग", "नीला रंग", "पीला रंग", "3 गिलास पानी"],
      steps: [
        "तीनों गिलासों में पानी भरो।",
        "पहले गिलास में लाल रंग डालो।",
        "दूसरे गिलास में नीला रंग डालो।",
        "दोनों को तीसरे गिलास में मिलाओ।",
        "देखो क्या नया रंग बना!"
      ],
      science: "लाल और नीला रंग मिलाने से बैंगनी रंग बनता है। इसे रंगों का मिश्रण कहते हैं!"
    },
    {
      key: "exp_baraf_pighalana",
      title: "बर्फ पिघलाना",
      emoji: "🧊",
      materials: ["बर्फ के टुकड़े", "एक कटोरी", "नमक"],
      steps: [
        "कटोरी में बर्फ का टुकड़ा रखो।",
        "उसपर थोड़ा नमक छिड़को।",
        "दूसरी कटोरी में बिना नमक की बर्फ रखो।",
        "देखो कौन सी बर्फ जल्दी पिघलती है।",
        "क्यों ऐसा हुआ?"
      ],
      science: "नमक बर्फ के पिघलने का तापमान कम कर देता है। इसीलिए ठंड में सड़कों पर नमक डाला जाता है!"
    },
    {
      key: "exp_gubbare_phulana",
      title: "गुब्बारा फुलाना",
      emoji: "🎈",
      materials: ["1 गुब्बारा", "1 बोतल", "सिरका", "खाने का सोडा"],
      steps: [
        "बोतल में थोड़ा सिरका डालो।",
        "गुब्बारे में एक चम्मच सोडा डालो।",
        "गुब्बारे को बोतल के मुंह पर लगाओ।",
        "गुब्बारे का सोडा बोतल में गिराओ।",
        "देखो गुब्बारा अपने आप फूल गया!"
      ],
      science: "सिरका और सोडा मिलने से कार्बन डाइऑक्साइड गैस बनती है। यह गैस गुब्बारे को फुला देती है!"
    },
    {
      key: "exp_doodh_nimbu",
      title: "दूध और नींबू",
      emoji: "🥛",
      materials: ["1 गिलास दूध", "1 चम्मच नींबू का रस", "1 कटोरी"],
      steps: [
        "कटोरी में दूध डालो।",
        "नींबू का रस मिलाओ।",
        "हिलाओ और थोड़ी देर इंतज़ार करो।",
        "देखो दूध में क्या बदलाव आया।",
        "क्या हुआ दूध को?"
      ],
      science: "नींबू का रस अम्लीय होता है जो दूध के प्रोटीन को जमा देता है। पनीर इसी तरह बनता है!"
    },
    {
      key: "exp_nachatey_kishmish",
      title: "नाचती किशमिश",
      emoji: "🍇",
      materials: ["सोडा पानी", "किशमिश", "एक गिलास"],
      steps: [
        "गिलास में सोडा पानी भरो।",
        "कुछ किशमिश डालो।",
        "ध्यान से देखो क्या होता है।",
        "क्या किशमिश डूब रही है या तैर रही है?",
        "कुछ मिनट बाद फिर देखो।"
      ],
      science: "कार्बन डाइऑक्साइड के बुलबुले किशमिश पर चिपकते हैं और उन्हें ऊपर उठाते हैं। बुलबुले फूटने पर किशमिश फिर नीचे आ जाती है!"
    },
    {
      key: "exp_sabun_ki_kashti",
      title: "साबुन की कश्ती",
      emoji: "🚢",
      materials: ["गत्ते का टुकड़ा", "पानी का बर्तन", "साबुन"],
      steps: [
        "गत्ते को छोटी नाव के आकार में काटो।",
        "पीछे एक छोटा कटाव करो।",
        "नाव को पानी पर रखो।",
        "कटाव पर साबुन का एक बूँद लगाओ।",
        "देखो नाव आगे बढ़ गई!"
      ],
      science: "साबुन पानी के सतह-तनाव को कम करता है। पीछे का पानी कमज़ोर होने से नाव आगे खिंचती है!"
    },
    {
      key: "exp_aakash_neela",
      title: "आसमान नीला क्यों?",
      emoji: "🌤️",
      materials: ["पानी से भरा बर्तन", "टॉर्च", "दूध"],
      steps: [
        "बर्तन में पानी भरो।",
        "एक चम्मच दूध डालो और हिलाओ।",
        "कमरे को अंधेरा करो।",
        "टॉर्च को बर्तन के बगल से चमकाओ।",
        "पानी किस रंग का दिखता है?"
      ],
      science: "दूध के छोटे कण नीले प्रकाश को बिखेर देते हैं, ठीक जैसे वायुमंडल में होता है। इसीलिए आसमान नीला दिखता है!"
    },
    {
      key: "exp_phoolna_phana",
      title: "फूलना-फूलना",
      emoji: "🌺",
      materials: ["रंगीन कागज़", "कैंची", "पानी का बर्तन"],
      steps: [
        "कागज़ से एक फूल बनाओ।",
        "पंखुड़ियाँ बीच में मोड़ दो।",
        "फूल को धीरे से पानी पर रखो।",
        "ध्यान से देखो।",
        "क्या फूल खिल रहा है?"
      ],
      science: "कागज़ पानी सोखता है और फूल जाता है। यही कारण है कि मुड़ी हुई पंखुड़ियाँ खुल जाती हैं!"
    }
  ],
  ilkokul: [
    {
      key: "exp_podhe_ka_vikas",
      title: "पौधे का विकास",
      emoji: "🌱",
      materials: ["2 बीज", "2 गमले", "मिट्टी", "पानी"],
      steps: [
        "दोनों गमलों में बीज बोओ।",
        "एक गमला धूप में रखो, दूसरा अंधेरे में।",
        "दोनों को रोज़ पानी दो।",
        "एक हफ्ते तक देखते रहो।",
        "कौन सा पौधा तेज़ बढ़ा?"
      ],
      science: "पौधों को भोजन बनाने के लिए सूर्य की रोशनी चाहिए। बिना रोशनी के वे अच्छे से नहीं बढ़ सकते!"
    },
    {
      key: "exp_chumbak",
      title: "चुंबक का कमाल",
      emoji: "🧲",
      materials: ["चुंबक", "पेपरक्लिप", "सिक्के", "पेंसिल", "लकड़ी का टुकड़ा"],
      steps: [
        "हर वस्तु को चुंबक के पास लाओ।",
        "देखो कौन सी वस्तु खिंचती है।",
        "दो समूहों में बाँटो: चुंबकीय और गैर-चुंबकीय।",
        "चुंबकीय चीज़ों में क्या समान है?"
      ],
      science: "चुंबक लोहे, निकेल या कोबाल्ट वाली धातुओं को आकर्षित करता है। प्लास्टिक, लकड़ी और कागज़ पर इसका असर नहीं होता!"
    },
    {
      key: "exp_pani_saaf",
      title: "पानी साफ करना",
      emoji: "💧",
      materials: ["प्लास्टिक बोतल", "रेत", "बजरी", "मिट्टी", "रूई", "गंदा पानी"],
      steps: [
        "बोतल को आधा काटो।",
        "नीचे रूई, फिर रेत, फिर बजरी डालो।",
        "ऊपर से धीरे-धीरे गंदा पानी डालो।",
        "नीचे निकला पानी इकट्ठा करो।",
        "गंदे और साफ पानी की तुलना करो।"
      ],
      science: "रेत और बजरी पानी में से गंदगी के कण छान लेती है। यही प्राकृतिक जल-शोधन का सिद्धांत है!"
    },
    {
      key: "exp_awaz_ki_lehar",
      title: "आवाज़ की लहर",
      emoji: "🔊",
      materials: ["2 कागज़ के कप", "धागा", "सूई"],
      steps: [
        "हर कप की तली में सूई से छेद करो।",
        "धागे को दोनों छेदों में डालकर गाँठ लगाओ।",
        "एक-एक कप दोनों हाथ में लो।",
        "धागा खिंचाकर एक कप में बोलो।",
        "क्या दूसरे छोर पर आवाज़ सुनाई दी?"
      ],
      science: "बोलने से कप कंपन करता है। धागा यह कंपन दूसरे कप तक पहुँचाता है और वह भी कंपित होकर आवाज़ बनाता है!"
    },
    {
      key: "exp_kagaz_jwalamuKhi",
      title: "ज्वालामुखी बनाना",
      emoji: "🌋",
      materials: ["खाने का सोडा", "सिरका", "लाल रंग", "एक कप"],
      steps: [
        "कप में 3 चम्मच सोडा डालो।",
        "लाल रंग मिलाओ।",
        "कप में सिरका डालो।",
        "पीछे हट जाओ और देखो!\n",
        "क्या निकल रहा है?"
      ],
      science: "सोडा और सिरका मिलने से कार्बन डाइऑक्साइड गैस बनती है। यह गैस तेज़ी से निकलकर ज्वालामुखी जैसा दृश्य बनाती है!"
    },
    {
      key: "exp_ande_mein_sirka",
      title: "अंडे में सिरका",
      emoji: "🥚",
      materials: ["1 कच्चा अंडा", "सिरका", "1 गिलास", "3 दिन"],
      steps: [
        "गिलास में अंडा रखो।",
        "सिरका इतना डालो कि अंडा डूब जाए।",
        "बुलबुले देखो।",
        "3 दिन प्रतीक्षा करो।",
        "अंडे के छिलके का क्या हुआ?"
      ],
      science: "सिरके में एसिटिक एसिड होता है जो अंडे के कैल्शियम छिलके को घोल देता है। 3 दिन बाद छिलका गायब हो जाता है!"
    },
    {
      key: "exp_rang_biranga_pani",
      title: "घनत्व का इंद्रधनुष",
      emoji: "🌈",
      materials: ["शहद", "डिशवाशिंग लिक्विड", "रंगीन पानी", "तेल", "एक बड़ा गिलास"],
      steps: [
        "गिलास में धीरे-धीरे शहद डालो।",
        "ऊपर से लिक्विड साबुन डालो।",
        "धीरे-धीरे रंगीन पानी मिलाओ।",
        "तेल डालो।",
        "देखो कैसे अलग-अलग परतें बनती हैं!"
      ],
      science: "अलग-अलग घनत्व वाले तरल पदार्थ आपस में नहीं मिलते। सबसे भारी तरल नीचे और सबसे हल्का ऊपर रहता है!"
    },
    {
      key: "exp_nimbu_battery",
      title: "नींबू की बैटरी",
      emoji: "🍋",
      materials: ["1 नींबू", "तांबे का सिक्का", "जस्ते की कील", "LED बल्ब तार"],
      steps: [
        "नींबू में सिक्का और कील डालो।",
        "LED के तारों को सिक्के और कील से जोड़ो।",
        "क्या LED जला?",
        "2-3 नींबू को श्रेणी में जोड़कर देखो।"
      ],
      science: "नींबू का साइट्रिक एसिड धातुओं से क्रिया करके बिजली बनाता है। यह एक प्राकृतिक बैटरी है!"
    }
  ],
  ortaokul: [
    {
      key: "exp_dna_nikalana",
      title: "स्ट्रॉबेरी से DNA निकालना",
      emoji: "🍓",
      materials: ["स्ट्रॉबेरी", "नमक", "डिटर्जेंट", "ठंडी अल्कोहल", "प्लास्टिक बैग"],
      steps: [
        "बैग में स्ट्रॉबेरी को मसलो।",
        "एक चुटकी नमक और एक बूँद डिटर्जेंट मिलाओ।",
        "कपड़े से छानकर तरल निकालो।",
        "ऊपर से ठंडी अल्कोहल धीरे डालो।",
        "सफ़ेद धागे जैसी DNA देखो!"
      ],
      science: "साबुन कोशिका की दीवार तोड़ता है और DNA बाहर आता है। अल्कोहल DNA को अवक्षेपित करती है जिससे वह दिखाई देती है!"
    },
    {
      key: "exp_vidyut_parikrit",
      title: "विद्युत परिपथ",
      emoji: "⚡",
      materials: ["बैटरी", "तार", "LED बल्ब", "स्विच"],
      steps: [
        "तार से बैटरी और LED जोड़ो।",
        "परिपथ में स्विच लगाओ।",
        "स्विच चालू करो, बल्ब देखो।",
        "स्विच बंद करो और देखो।",
        "क्या नियंत्रण करता है बिजली को?"
      ],
      science: "बिजली बंद परिपथ में बहती है। स्विच परिपथ को पूरा या तोड़ता है जिससे बल्ब जलता या बुझता है!"
    },
    {
      key: "exp_aml_kshar",
      title: "अम्ल और क्षार",
      emoji: "🧪",
      materials: ["बैंगनी गोभी", "पानी", "नींबू", "सिरका", "बेकिंग सोडा", "दूध"],
      steps: [
        "बैंगनी गोभी उबालकर बैंगनी रस निकालो।",
        "रस को कई गिलासों में बाँटो।",
        "हर गिलास में अलग-अलग तरल डालो।",
        "रंग बदलाव देखो।",
        "कौन से अम्लीय हैं, कौन से क्षारीय?"
      ],
      science: "गोभी का रस प्राकृतिक pH संकेतक है। अम्ल में लाल और क्षार में हरा रंग देता है!"
    },
    {
      key: "exp_surya_urja",
      title: "सौर ऊर्जा प्रयोग",
      emoji: "☀️",
      materials: ["2 समान गिलास", "पानी", "काला कागज़", "सफ़ेद कागज़"],
      steps: [
        "दोनों गिलासों में बराबर पानी भरो।",
        "एक को काले और दूसरे को सफ़ेद कागज़ में लपेटो।",
        "दोनों को 30 मिनट धूप में रखो।",
        "दोनों का तापमान नापो।",
        "कौन सा ज़्यादा गर्म हुआ?"
      ],
      science: "काला रंग अधिक प्रकाश और ऊष्मा अवशोषित करता है। इसीलिए गर्मियों में हल्के रंग के कपड़े पहनते हैं!"
    },
    {
      key: "exp_prakasSynthesis",
      title: "प्रकाश संश्लेषण",
      emoji: "🌿",
      materials: ["एक ताज़ा पत्ता", "अल्कोहल", "गर्म पानी", "आयोडीन घोल"],
      steps: [
        "पौधे को कुछ घंटे धूप में रखो।",
        "पत्ता तोड़कर गर्म पानी में उबालो।",
        "पत्ते को अल्कोहल में रखकर हरा रंग हटाओ।",
        "पानी से धोकर आयोडीन डालो।",
        "क्या रंग बदला? क्यों?"
      ],
      science: "आयोडीन स्टार्च के संपर्क में नीला-काला हो जाता है। धूप में पत्ते ने प्रकाश संश्लेषण से स्टार्च बनाई, यह प्रमाण है!"
    },
    {
      key: "exp_osmosis_aalu",
      title: "आलू में परासरण",
      emoji: "🥔",
      materials: ["2 आलू के टुकड़े", "नमक का पानी", "साधारण पानी", "2 कटोरी"],
      steps: [
        "एक कटोरी में साधारण पानी और दूसरे में नमकीन पानी डालो।",
        "हर कटोरी में एक-एक आलू टुकड़ा डालो।",
        "30 मिनट प्रतीक्षा करो।",
        "दोनों टुकड़े निकालकर तुलना करो।",
        "कौन सा मुलायम हो गया?"
      ],
      science: "परासरण में पानी कम नमक से ज़्यादा नमक की तरफ जाता है। नमकीन पानी में आलू से पानी निकल जाता है और वह मुलायम हो जाता है!"
    },
    {
      key: "exp_non_newton",
      title: "नॉन-न्यूटोनियन द्रव",
      emoji: "🌀",
      materials: ["कॉर्नफ्लोर", "पानी", "एक कटोरी"],
      steps: [
        "2 भाग कॉर्नफ्लोर और 1 भाग पानी मिलाओ।",
        "मिश्रण को तेज़ी से दबाओ।",
        "अब बहुत धीरे छुओ।",
        "क्या फर्क है?",
        "मुट्ठी से मारो फिर धीरे छुओ।"
      ],
      science: "यह नॉन-न्यूटोनियन द्रव है। तेज़ दबाने पर यह ठोस जैसा और धीरे छूने पर तरल जैसा व्यवहार करता है!"
    }
  ]
};
const experimentsZh = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "混合颜色",
      emoji: "🎨",
      materials: ["红色颜料", "蓝色颜料", "黄色颜料", "3杯水"],
      steps: [
        "在杯子里装满水。",
        "在第一个杯子里加红色颜料。",
        "在第二个杯子里加蓝色颜料。",
        "把两个杯子混合倒入第三个空杯子。",
        "观察形成的紫色！"
      ],
      science: "三原色（红、蓝、黄）混合后会产生二次色。红色 + 蓝色 = 紫色！"
    },
    {
      key: "exp_buz_erimesi",
      title: "冰块融化实验",
      emoji: "🧊",
      materials: ["一块冰", "一个碗", "盐"],
      steps: [
        "把冰块放入碗中。",
        "在上面撒些盐。",
        "观察冰的融化。",
        "与没有盐的冰块比较。",
        "哪个融化得更快？"
      ],
      science: "盐降低了冰的融点。这就是为什么冬天会在道路上撒盐！"
    },
    {
      key: "exp_balon_sisirme",
      title: "用小苏打吹气球",
      emoji: "🎈",
      materials: ["1个气球", "1个瓶子", "醋", "小苏打"],
      steps: [
        "在瓶子里倒一些醋。",
        "把一茶匙小苏打放入气球。",
        "把气球套在瓶口上。",
        "把气球里的小苏打倒入瓶中。",
        "观察气球充气！"
      ],
      science: "醋和小苏打反应会释放二氧化碳。这种气体把气球吹大了！"
    },
    {
      key: "exp_yeni_o1",
      title: "牛奶和柠檬",
      emoji: "🥛",
      materials: ["1杯牛奶", "1汤匙柠檬汁", "1个容器"],
      steps: [
        "把牛奶倒入容器。",
        "加入柠檬汁。",
        "搅拌并等待。",
        "观察牛奶凝固。",
        "发生了什么变化？"
      ],
      science: "柠檬汁是酸性的，会使牛奶中的蛋白质凝固。奶酪就是这样制作的！"
    },
    {
      key: "exp_yeni_o2",
      title: "跳舞的葡萄干",
      emoji: "🍇",
      materials: ["苏打水", "葡萄干", "一个杯子"],
      steps: [
        "在杯子里倒入苏打水。",
        "放入几粒葡萄干。",
        "观察发生了什么。",
        "葡萄干是沉底还是漂浮？",
        "等几分钟再观察。"
      ],
      science: "二氧化碳气泡附着在葡萄干上把它们举起来。气泡破裂后，葡萄干又沉下去！"
    },
    {
      key: "exp_yeni_o3",
      title: "肥皂驱动的小船",
      emoji: "🚢",
      materials: ["一小块纸板", "一盆水", "洗洁精"],
      steps: [
        "把纸板剪成小船形状。",
        "在后面剪一个小缺口。",
        "把船放在水面上。",
        "在缺口处滴一滴肥皂水。",
        "看船向前移动！"
      ],
      science: "肥皂降低了水的表面张力。船后面的水比前面的水拉力小，于是把船向前推！"
    }
  ],
  ilkokul: [
    {
      key: "exp_bitki_buyumesi",
      title: "植物生长实验",
      emoji: "🌱",
      materials: ["2粒豆种子", "2盆土", "水"],
      steps: [
        "在每盆里种一粒种子。",
        "把一盆放在阳光下，另一盆放在黑暗中。",
        "每天同等浇水。",
        "观察一周。",
        "哪棵植物长得更快？"
      ],
      science: "植物需要阳光进行光合作用来制造食物。没有光，它们就无法良好生长。"
    },
    {
      key: "exp_manyetizma",
      title: "磁铁实验",
      emoji: "🧲",
      materials: ["磁铁", "回形针", "硬币", "铅笔", "一块木头"],
      steps: [
        "把每件物品逐一靠近磁铁。",
        "记录哪些被吸住，哪些没有。",
        "分成磁性和非磁性两组。",
        "磁性物品有什么共同点？"
      ],
      science: "磁铁吸引含有铁、镍或钴的金属。其他材料没有磁性。"
    },
    {
      key: "exp_filtre_su",
      title: "过滤水",
      emoji: "💧",
      materials: ["塑料瓶", "沙子", "小石子", "泥土", "棉花", "脏水"],
      steps: [
        "把瓶子切成两半。",
        "底部放棉花，再放沙子，再放小石子。",
        "缓慢地从上面倒入脏水。",
        "在底部收集过滤后的水。",
        "与未过滤的水比较。"
      ],
      science: "水通过砂子和砾石层时，污垢颗粒被捕获。这就是基本水过滤器的工作原理！"
    },
    {
      key: "exp_ses_dalgalari",
      title: "声波实验",
      emoji: "🔊",
      materials: ["2个纸杯", "一根绳子", "一根针"],
      steps: [
        "在每个杯底戳一个小洞。",
        "把绳子穿过两个洞并打结。",
        "每人拿一个杯子。",
        "绷紧绳子，对着杯子说话。",
        "你能通过绳子电话听到吗？"
      ],
      science: "声音通过振动传播。说话使杯子振动，绳子传递这些振动，另一个杯子再把它们转换回声音。"
    },
    {
      key: "exp_yanardaǧ",
      title: "小苏打火山",
      emoji: "🌋",
      materials: ["小苏打", "醋", "红色食用色素", "一个杯子"],
      steps: [
        "在杯子里放3汤匙小苏打。",
        "加入红色食用色素。",
        "往杯子里倒醋。",
        "退后，看'熔岩'流出！",
        "是什么产生了泡沫？"
      ],
      science: "小苏打和醋反应产生二氧化碳。这种气体迅速逸出，产生喷发效果！"
    },
    {
      key: "exp_yeni_i1",
      title: "醋中的鸡蛋",
      emoji: "🥚",
      materials: ["1个生鸡蛋", "一杯醋", "3天时间"],
      steps: [
        "把生鸡蛋放入杯中。",
        "倒醋盖过鸡蛋。",
        "观察蛋壳上的气泡。",
        "静置3天。",
        "小心取出鸡蛋。蛋壳发生了什么？"
      ],
      science: "醋中的乙酸溶解了蛋壳中的钙。3天后，蛋壳消失，只剩下橡胶状的薄膜！"
    },
    {
      key: "exp_yeni_i2",
      title: "杯中彩虹",
      emoji: "🌈",
      materials: ["蜂蜜", "洗洁精", "水", "植物油", "酒精", "一个大玻璃杯"],
      steps: [
        "先缓慢地把蜂蜜倒入杯中。",
        "轻轻地在上面加洗洁精。",
        "缓慢加入彩色水。",
        "加入植物油。",
        "最后加入酒精。观察各层！"
      ],
      science: "不同密度的液体不会混合，形成分层。密度最大的液体沉在底部！"
    },
    {
      key: "exp_yeni_i3",
      title: "柠檬电池",
      emoji: "🍋",
      materials: ["一个柠檬", "一枚铜币", "一颗锌钉", "LED灯连接线"],
      steps: [
        "把铜币和锌钉插入柠檬。",
        "把LED的导线连接到铜币和锌钉上。",
        "LED灯亮了吗？",
        "试试用几个柠檬串联起来。"
      ],
      science: "柠檬中的柠檬酸与金属（铜和锌）发生反应，产生少量电流。足以点亮一个微型LED！"
    }
  ],
  ortaokul: [
    {
      key: "exp_dna_izolasyon",
      title: "从草莓中提取DNA",
      emoji: "🍓",
      materials: ["草莓", "盐", "洗洁精", "酒精（冷）", "塑料袋"],
      steps: [
        "在袋子里把草莓压碎。",
        "加一撮盐和一滴洗洁精，轻轻混合。",
        "用布过滤液体。",
        "缓慢地倒入冷酒精。",
        "观察出现的白色DNA丝！"
      ],
      science: "肥皂分解细胞膜，释放DNA。酒精使DNA聚集，使其可见。你用肉眼就能看到真正的DNA！"
    },
    {
      key: "exp_elektrik_devre",
      title: "简单电路",
      emoji: "⚡",
      materials: ["电池", "电线", "LED灯泡", "开关"],
      steps: [
        "用电线把电池连接到LED。",
        "在电路中加入开关。",
        "合上开关，检查灯泡是否亮起。",
        "断开开关并观察。",
        "是什么控制了电流？"
      ],
      science: "电流在称为电路的封闭回路中流动。开关使电路完整或断开，从而点亮或熄灭灯泡。"
    },
    {
      key: "exp_asit_baz",
      title: "酸碱指示剂",
      emoji: "🧪",
      materials: ["紫甘蓝", "水", "各种液体（柠檬汁、醋、苏打水、牛奶）"],
      steps: [
        "煮紫甘蓝，收集紫色液体。",
        "分别倒入几个杯子中。",
        "在每个杯子中加入不同的测试液体。",
        "观察颜色变化。",
        "哪些是酸性，哪些是碱性？"
      ],
      science: "紫甘蓝含有一种叫花青素的色素。在酸中变红，在碱中变绿。这是一种天然pH指示剂！"
    },
    {
      key: "exp_gunes_enerjisi",
      title: "太阳能实验",
      emoji: "☀️",
      materials: ["两个相同的玻璃杯", "水", "黑纸和白纸"],
      steps: [
        "在两个杯子里装同量的冷水。",
        "用黑纸包一个杯子，用白纸包另一个。",
        "把两个都放在阳光下30分钟。",
        "测量每个杯子的温度。",
        "哪个水更热？"
      ],
      science: "深色吸收更多光和热能。浅色反射更多光。这就是为什么夏天要穿浅色衣服！"
    },
    {
      key: "exp_fotosntez",
      title: "光合作用实验",
      emoji: "🌿",
      materials: ["一片健康的叶子", "酒精", "热水", "碘液"],
      steps: [
        "让植物在阳光下放几小时。",
        "摘下叶子，在热水中短暂煮沸。",
        "把叶子放入酒精中去除叶绿素。",
        "用水冲洗后加碘液。",
        "它变成了什么颜色？为什么？"
      ],
      science: "碘遇淀粉变成深蓝黑色。如果叶子在阳光下，它通过光合作用制造了淀粉。深色证明了这一点！"
    },
    {
      key: "exp_yeni_o_1",
      title: "马铃薯渗透实验",
      emoji: "🥔",
      materials: ["2片马铃薯", "盐水", "普通水", "2个碗"],
      steps: [
        "一碗装普通水，另一碗装高浓度盐水。",
        "在每碗中放一片马铃薯。",
        "等待30分钟。",
        "取出马铃薯，比较硬度。",
        "哪片变软了？为什么？"
      ],
      science: "渗透是水通过膜从低盐浓度向高盐浓度移动的过程。盐水从马铃薯细胞中抽走水分，使薄片收缩变软。"
    },
    {
      key: "exp_yeni_o_2",
      title: "非牛顿流体",
      emoji: "🌀",
      materials: ["玉米淀粉", "水", "一个碗"],
      steps: [
        "在碗中混合2份玉米淀粉和1份水。",
        "用手快速按压混合物。",
        "现在非常缓慢地触摸它。",
        "有什么不同？",
        "试着击打它，再轻轻触摸它。"
      ],
      science: "这种混合物被称为非牛顿流体。当快速施力时它像固体，缓慢触摸时它像液体。它的粘度随施加的力而变化！"
    }
  ]
};
const experiments = {
  okul_oncesi: [
    {
      key: "exp_renk_karistir",
      title: "Renkleri Karıştıralım",
      emoji: "🎨",
      materials: ["Kırmızı boya", "Mavi boya", "Sarı boya", "3 bardak su"],
      steps: [
        "Bardaklara su doldur.",
        "İlk bardağa kırmızı boya koy.",
        "İkinci bardağa mavi boya koy.",
        "İki bardağı üçüncü boş bardakta karıştır.",
        "Mor renk oluştuğunu gözlemle!"
      ],
      science: "Birincil renkler (kırmızı, mavi, sarı) karışınca ikincil renkler oluşur. Kırmızı + mavi = mor!"
    },
    {
      key: "exp_buz_erimesi",
      title: "Buz Eriyince Ne Olur?",
      emoji: "🧊",
      materials: ["Bir buz kübü", "Bir kase", "Tuz"],
      steps: [
        "Buz kübünü kaseye koy.",
        "Üzerine tuz serp.",
        "Buzun erimesini gözlemle.",
        "Tuzsuz bir buz kübüyle karşılaştır.",
        "Hangi buz daha hızlı eridi?"
      ],
      science: "Tuz buzun erime noktasını düşürür. Bu yüzden kışın yollara tuz atılır!"
    },
    {
      key: "exp_balon_sisirme",
      title: "Karbonatla Balon Şişirme",
      emoji: "🎈",
      materials: ["1 balon", "1 şişe", "Sirke", "Kabartma tozu"],
      steps: [
        "Şişeye biraz sirke koy.",
        "Balonun içine bir tatlı kaşığı kabartma tozu koy.",
        "Balonu şişenin ağzına geçir.",
        "Balonun içindeki kabartma tozunu şişeye boşalt.",
        "Balonu şişer misin? Bak!"
      ],
      science: "Sirke ve kabartma tozu tepkimeye girince karbondioksit gazı çıkar. Bu gaz balonu şişirir!"
    },
    {
      key: "exp_yeni_o1",
      title: "Süt ve Limon",
      emoji: "🥛",
      materials: ["1 bardak süt", "1 yemek kaşığı limon suyu", "1 kap"],
      steps: [
        "Sütü kaba dök.",
        "Limon suyunu sütün üzerine ekle.",
        "Karıştır ve bekle.",
        "Sütün pıhtılaştığını gözlemle."
      ],
      science: "Limon asittir. Asit sütün proteinlerini (kazein) birleştirir. Bu yüzden süt pıhtılaşır. Peynir bu yöntemle yapılır!"
    },
    {
      key: "exp_yeni_o2",
      title: "Su ve Yağ",
      emoji: "💧",
      materials: ["1 bardak su", "Biraz yemek yağı", "Gıda boyası"],
      steps: [
        "Bardağa su doldur.",
        "Üzerine yağ ekle.",
        "Boya ekleyip karıştır.",
        "Yağın hep üstte kaldığını gözlemle."
      ],
      science: "Su ve yağ karışmaz çünkü moleküler yapıları farklıdır. Yağ daha hafif olduğu için üste çıkar."
    },
    {
      key: "exp_yeni_o3",
      title: "Nefes Balonumuz",
      emoji: "💨",
      materials: ["1 balon", "1 kağıt tüp ya da pipet"],
      steps: [
        "Balonu ağzına tak.",
        "Derin bir nefes al.",
        "Balona üfle.",
        "Balonu serbest bırak ve uçuşunu izle."
      ],
      science: "Nefes verdiğimizde karbondioksit gazı çıkar. Bu gaz balonu şişirir. Balonun içindeki hava dışarı çıkınca balon uçar."
    },
    {
      key: "exp_yeni_o4",
      title: "Çiçek Boyama",
      emoji: "🌸",
      materials: [
        "Beyaz çiçek (karanfil)",
        "Renkli su",
        "Gıda boyası",
        "Bardak"
      ],
      steps: [
        "Bardağa su doldur.",
        "Gıda boyası ekle.",
        "Çiçeğin sapını suya daldır.",
        "Birkaç saat bekle.",
        "Çiçeğin renk değiştirdiğini gözlemle."
      ],
      science: "Bitkiler su ve mineral taşımak için kök ve saplarındaki borucukları (ksilem) kullanır. Renkli su da aynı yoldan geçerek çiçeği boyar."
    },
    {
      key: "exp_t9_renk_karistirma",
      title: "Renk Karıştırma",
      emoji: "🎨",
      materials: ["Kırmızı boya", "Sarı boya", "Mavi boya", "Beyaz kağıt"],
      steps: [
        "1. Kırmızı ve sarıyı karıştırın.",
        "2. Turuncu rengi görün.",
        "3. Mavi ve sarıyı karıştırın.",
        "4. Yeşil rengi görün."
      ],
      science: "Işık üç temel renkten oluşur. Boyalar ise ışığı yansıtır; karıştırıldığında yeni renkler ortaya çıkar. Bu olaya renk sentezi denir."
    },
    {
      key: "exp_t9_mum_alev",
      title: "Mum Işığı",
      emoji: "🕯️",
      materials: ["Mum", "Çakmak (yetişkin ile)", "Kavanoz"],
      steps: [
        "1. Mumu yak (yetişkinle).",
        "2. Kavanozu üzerine koy.",
        "3. Alevin söndüğünü izle."
      ],
      science: "Yanma için oksijen gerekir. Kavanoz içindeki oksijen bitince alev söner. Bu yanma kimyasının temelidir."
    },
    {
      key: "exp_t9_nefes_testi",
      title: "Nefes Testi",
      emoji: "🫁",
      materials: ["Bir bardak su", "Pipet"],
      steps: [
        "1. Bardağa su doldurun.",
        "2. Pipet koyun.",
        "3. İçine üfleyin, baloncukları sayın."
      ],
      science: "Akciğerlerimiz havadan oksijen alır ve karbondioksit geri verir. Suya üflediğimizde karbondioksit baloncuklar oluşturur."
    },
    {
      key: "exp_t9_tuz_buz",
      title: "Tuzlu Buz",
      emoji: "🧊",
      materials: ["Buz küpü", "Tuz", "İp"],
      steps: [
        "1. Buz üzerine ipi koyun.",
        "2. Tuz serpin.",
        "3. Birkaç saniye bekleyin, ipi kaldırın."
      ],
      science: "Tuz buzun erime noktasını düşürür. Yüzey önce erir sonra tekrar donar ve ipi sıkıştırır. Bu yüzden kışın yollara tuz atılır."
    },
    {
      key: "exp_gomlek_boya",
      title: "Doğal Boyalarla Boyama",
      emoji: "🎨",
      materials: [
        "Beyaz bez parçası",
        "Pancar suyu",
        "Zerdeçal",
        "Ispanak suyu"
      ],
      steps: [
        "Beyaz bezi düz bir yüzeye yay.",
        "Farklı doğal boyaları beze damlatın.",
        "Parmak uçlarıyla yayın.",
        "Kurumaya bırakın."
      ],
      science: "Doğal bitkiler içlerindeki pigmentler sayesinde renk verirler. Bu, boyaların kimyası hakkında ilk keşfinizdir!"
    },
    {
      key: "exp_sel_etkisi",
      title: "Toprak ve Yağmur Deneyi",
      emoji: "🌧️",
      materials: ["İki tepsi", "Toprak", "Taşlar ve çakıllar", "Su şişesi"],
      steps: [
        "Bir tepsiye sadece toprak, diğerine taş ve toprak koy.",
        "Her iki tepsiye eşit miktarda su dök.",
        "Hangi tepsideki su daha hızlı aktı gözlemle."
      ],
      science: "Taşlar ve bitkiler toprağın erozyonunu engeller. Bu yüzden ormanlarda sel daha az olur!"
    },
    {
      key: "exp_seker_kristal",
      title: "Şeker Kristali",
      emoji: "🍬",
      materials: ["2 su bardağı şeker", "1 su bardağı sıcak su", "İp", "Kalem"],
      steps: [
        "Sıcak suya şekeri ekle ve karıştır.",
        "İpi kaleme bağla ve şişeye daldır.",
        "Birkaç gün bekle.",
        "İpin üzerinde oluşan kristalleri gözlemle!"
      ],
      science: "Soğuyan suda şeker çözünemez ve kristaller oluşur. Bu, kristalizasyon sürecidir."
    },
    {
      key: "exp_p13_mum_sondurme",
      title: "Mumun Sönmesi",
      emoji: "🕯️",
      materials: ["Mum", "Kavanoz", "Çakmak (yetişkin ile)"],
      steps: [
        "1. Mumu yak ve bir süre yanmasını izle.",
        "2. Kavanozla mumun üstünü kapat.",
        "3. Mumun söndüğünü gözlemle."
      ],
      science: "Yanma için oksijen gereklidir. Kavanoz hava girişini kestiğinde oksijen tükenir ve mum söner."
    },
    {
      key: "exp_p14_renk_sihri",
      title: "Sihirli Renk Süzgeci",
      emoji: "🌈",
      materials: ["Beyaz kahve filtresi", "Siyah keçeli kalem", "Su", "Bardak"],
      steps: [
        "1. Filtre kağıdının altını siyah keçeli kalemle boya.",
        "2. Kağıdı suya değecek şekilde bardağa daldır.",
        "3. Renklerin yükselişini izle."
      ],
      science: "Siyah mürekkep farklı renklerin karışımıdır. Su emilirken renkler ayrışır ve gökkuşağı gibi görünür."
    },
    {
      key: "exp_manyetizma",
      title: "Mıknatıs Büyüsü",
      emoji: "🧲",
      materials: ["1 mıknatıs", "Ataç", "Kaşık", "Silgi", "Kağıt parçaları"],
      steps: [
        "Masaya farklı nesneler koy.",
        "Mıknatısı her nesnenin yakınına tut.",
        "Hangi nesnelerin çekildiğini gözlemle.",
        "Çekilen ve çekilmeyen nesneleri listele."
      ],
      science: "Mıknatıslar demir içeren metalleri çeker. Bu olaya manyetizma denir. Her madde manyetizmaya aynı tepkiyi vermez."
    },
    {
      key: "exp_golgeler",
      title: "Gölge Oyunu",
      emoji: "🔦",
      materials: ["El feneri", "Beyaz kağıt", "Çeşitli oyuncaklar"],
      steps: [
        "Odayı karart.",
        "Feneri yak ve kağıda tut.",
        "Oyuncakları fener ile kağıt arasına koy.",
        "Oluşan gölgeleri incele.",
        "Oyuncağı uzaklaştırınca ne olduğunu gözlemle."
      ],
      science: "Işık düz ilerler. Bir nesne ışığı engellediğinde arkasında gölge oluşur. Nesne ışığa yaklaştıkça gölge büyür."
    },
    {
      key: "exp_hava_baskisi",
      title: "Ters Bardak Deneyi",
      emoji: "🥛",
      materials: ["Bir bardak", "Su", "Karton parçası"],
      steps: [
        "Bardağı suyla doldur.",
        "Kartonu bardağın üstüne koy.",
        "Bir elinle kartonu tut, bardağı ters çevir.",
        "Elini yavaşça çek.",
        "Su dökülmez! Gözlemle."
      ],
      science: "Havanın basıncı suyu yukarı iter. Hava basıncı suyun ağırlığından fazla olduğu için su dökülmez."
    }
  ],
  ilkokul: [
    {
      key: "exp_gokkusagi",
      title: "Bardakta Gökkusağı",
      emoji: "🌈",
      materials: [
        "5 bardak",
        "Şeker",
        "Su",
        "Farklı renkli boyalar",
        "Şırınga veya kaşık"
      ],
      steps: [
        "Her bardağa farklı miktarda şeker koy (1, 2, 3, 4, 5 kaşık).",
        "Eşit miktarda su ekle ve şekeri çöz.",
        "Her bardağa farklı renk boya ekle.",
        "En çok şekerli olanı alta koy, şırıngayla üstüne yavaşça diğerlerini ekle.",
        "Gökkusağı oluştuğunu gör!"
      ],
      science: "Şeker miktarı suyun yoğunluğunu artırır. Yoğun sıvılar altta, hafif sıvılar üstte kalır."
    },
    {
      key: "exp_volcano",
      title: "Karbonat Volkanı",
      emoji: "🌋",
      materials: [
        "Kil veya karton",
        "Kabartma tozu",
        "Sirke",
        "Kırmızı boya",
        "Tepsi"
      ],
      steps: [
        "Kartondan veya kilden volkan şekli yap.",
        "Ortasına küçük bir kap yerleştir.",
        "Kaba 2 yemek kaşığı kabartma tozu koy.",
        "Birkaç damla kırmızı boya ekle.",
        "Üzerine sirke dök ve patlamayı izle!"
      ],
      science: "Asit (sirke) ve baz (kabartma tozu) tepkimesi karbondioksit gazı üretir. Bu gaz köpük oluşturur!"
    },
    {
      key: "exp_magnet_pusulasi",
      title: "Manyetik Pusula Yap",
      emoji: "🧭",
      materials: [
        "Bir iğne",
        "Mıknatıs",
        "Plastik kap",
        "Su",
        "Köpük veya mantar"
      ],
      steps: [
        "İğneyi mıknatısla 50 kez tek yönde sür.",
        "Kaba su doldur.",
        "İğneyi mantar veya köpüğün üzerine koy.",
        "Mantarı suya bırak.",
        "İğnenin Kuzey'i gösterdiğini izle!"
      ],
      science: "Mıknatısla sürtülünce iğne manyetikleşir. Dünya'nın manyetik alanıyla etkileşerek Kuzey'i gösterir."
    },
    {
      key: "exp_yeni_i1",
      title: "Suyun Isınması",
      emoji: "🌡️",
      materials: ["Su", "Tencere", "Termometre", "Ocak"],
      steps: [
        "Tencereye su doldur.",
        "Termometre ile sıcaklığı ölç.",
        "Ocağı açarak suyu ısıt.",
        "Her dakika sıcaklığı kaydet.",
        "Su kaynayınca gözlemle."
      ],
      science: "Su 100°C'de kaynar. Isı eklendikçe su molekülleri hızlanır ve sonunda gaz fazına (buhar) geçer. Bu hal değişimidir."
    },
    {
      key: "exp_yeni_i2",
      title: "Güneş Saati",
      emoji: "☀️",
      materials: ["Düz bir kağıt", "Kalem", "Cisim (kalem gibi)"],
      steps: [
        "Kağıdı düz bir yere koy.",
        "Ortasına kalem dik koy.",
        "Gölgenin ucunu her saat işaretle.",
        "Günün sonunda işaretlere bak.",
        "Güneşin hareketini gözlemle."
      ],
      science: "Dünya kendi ekseni etrafında döndükçe güneş farklı açılardan gelir. Gölge uzunluğu ve yönü bize saati söyler."
    },
    {
      key: "exp_yeni_i3",
      title: "Mıknatıs ve Demir",
      emoji: "🧲",
      materials: ["Bir mıknatıs", "Demir tozu ya da iğne", "Kağıt", "Kum"],
      steps: [
        "Kağıdın üzerine biraz demir tozu koy.",
        "Kağıdın altına mıknatısı tut.",
        "Mıknatısı hareket ettir.",
        "Demir tozunun hareket ettiğini gözlemle."
      ],
      science: "Mıknatıslar manyetik alan oluşturur. Demir gibi ferromanyetik maddeler bu alandan etkilenerek mıknatısa çekilir."
    },
    {
      key: "exp_yeni_i4",
      title: "Hava Basıncı Deneyi",
      emoji: "🌬️",
      materials: ["Plastik şişe", "Balonlu duman çıkışı ya da sıcak su"],
      steps: [
        "Plastik şişeyi sıcak suyla doldur.",
        "Hemen kapağını kapat.",
        "Soğuk suya daldır.",
        "Şişenin ezildiğini gözlemle."
      ],
      science: "Sıcak hava ısındıkça genişler ve dışarı çıkar. Soğuyunca hava sıkışır ve dış basınç şişeyi ezer. Bu hava basıncının gücüdür."
    },
    {
      key: "exp_t9_kristal",
      title: "Kristal Yetiştirme",
      emoji: "💎",
      materials: ["Tuz", "Sıcak su", "Kap", "İp"],
      steps: [
        "1. Suyu ısıtın.",
        "2. Tuz ekleyip eritin.",
        "3. İpi kaba sarkıtın.",
        "4. Birkaç gün bekleyin."
      ],
      science: "Doymuş çözelti soğuyunca çözünmüş madde çözünmez hale gelir ve katı kristal oluşturur. Bu kristalizasyon sürecidir."
    },
    {
      key: "exp_t9_kol_kuvvet",
      title: "Kol Kuvveti",
      emoji: "💪",
      materials: ["Cetvel", "Ağırlık", "Kalem"],
      steps: [
        "1. Cetvelin altına kalem koyun.",
        "2. Bir uca ağırlık koyun.",
        "3. Diğer ucu bastırın.",
        "4. Kaldıraç etkisini gözlemleyin."
      ],
      science: "Bu basit bir kaldıraçtır. Kalem dayanak noktasıdır. Uzak noktaya bastırarak yakın taraftaki yükü daha az kuvvetle kaldırırsınız."
    },
    {
      key: "exp_t9_hava_balon",
      title: "Şişen Balon",
      emoji: "🎈",
      materials: ["Şişe", "Balon", "Karbonat", "Sirke"],
      steps: [
        "1. Şişeye sirke dökün.",
        "2. Balona karbonat koyun.",
        "3. Balonu şişenin ağzına takın.",
        "4. Karbonatı içine dökün, balonu izleyin."
      ],
      science: "Asit (sirke) ve baz (karbonat) reaksiyona girince karbondioksit gazı açığa çıkar. Bu gaz balonu şişirir."
    },
    {
      key: "exp_t9_ses_frekans",
      title: "Ses Tonu",
      emoji: "🎵",
      materials: ["Bardaklar", "Su", "Kaşık"],
      steps: [
        "1. Bardaklara farklı miktarda su doldurun.",
        "2. Kaşıkla vurarak ses çıkarın.",
        "3. Sesleri karşılaştırın."
      ],
      science: "Az su: uzun titreşim dalgası, düşük ses. Çok su: kısa titreşim dalgası, yüksek ses. Ses frekansı titreşim hızıyla belirlenir."
    },
    {
      key: "exp_manyetik_alan",
      title: "Mıknatısın Gücü",
      emoji: "🧲",
      materials: [
        "Güçlü mıknatıs",
        "Küçük metal nesneler",
        "Plastik ve ahşap nesneler",
        "Kağıt"
      ],
      steps: [
        "Mıknatısı metal nesnelere yaklaştır.",
        "Plastik ve ahşaba da dene.",
        "Kağıt arkasından metal çekmeyi dene.",
        "Hangileri çekildi not al."
      ],
      science: "Mıknatıslar demir ve çelik gibi ferromanyetik maddeleri çeker. Plastik veya ahşap çekilmez çünkü manyetik özellikleri yoktur."
    },
    {
      key: "exp_hava_basinci",
      title: "Hava Basıncı Deneyi",
      emoji: "🌀",
      materials: ["Boş plastik şişe", "Sıcak su", "Buz"],
      steps: [
        "Şişeye çok az sıcak su koy ve salla.",
        "Sıcak suyu dök ve kapağı hızlıca kapat.",
        "Şişeyi buz dolu kaba koy.",
        "Şişenin içine çökmesini gözlemle!"
      ],
      science: "Soğuma hava basıncını düşürür. Dış hava basıncı daha yüksek olduğundan şişeyi içeriden iter ve çöker."
    },
    {
      key: "exp_renk_ayirma",
      title: "Kromotografi ile Renk Ayrıştırma",
      emoji: "🖊️",
      materials: [
        "Beyaz kağıt havlu",
        "Siyah kalemler (farklı markalar)",
        "Su bardağı",
        "Su"
      ],
      steps: [
        "Kağıt havlunun altına kalemle leke yap.",
        "Kağıdı suya değecek şekilde bardağa daldır.",
        "Suyun yükselmesini ve renklerin ayrışmasını gözlemle."
      ],
      science: "Siyah mürekkep aslında birçok rengin karışımıdır. Kromotografi bu renkleri ayırır çünkü her pigment suya farklı hızda çözünür."
    },
    {
      key: "exp_i13_kursun_kalem",
      title: "Kurşun Kalem Devresi",
      emoji: "✏️",
      materials: ["Kurşun kalem", "Pil", "Kablo", "LED"],
      steps: [
        "1. Kurşun kalem grafit içerir ve elektrik iletir.",
        "2. Kabloları kalemin iki ucuna bağla.",
        "3. LED'i devreye ekle ve gözlemle."
      ],
      science: "Grafit, bir karbon türüdür ve elektriği iletir. Bu yüzden kurşun kalemler devre elemanı olarak kullanılabilir."
    },
    {
      key: "exp_i14_kil_elektrik",
      title: "Kil ile Elektrik",
      emoji: "🎨",
      materials: ["Oyun hamuru", "Pil", "LED", "Kablo"],
      steps: [
        "1. Oyun hamurundan iki ayrı şekil yap.",
        "2. Kablo ve LED ile devreyi kur.",
        "3. İki hamuru birleştir ve LED'i izle."
      ],
      science: "Tuzlu oyun hamuru elektriği iletir. Tuz içindeki iyonlar akım taşır."
    },
    {
      key: "exp_kristal_kar",
      title: "Kristal Kar Tanesi",
      emoji: "❄️",
      materials: ["Boraks tozu", "Sicim", "Sıcak su", "Kavanoz", "Boya"],
      steps: [
        "Kavanoza sıcak su doldur.",
        "Bol miktarda boraks ekle ve karıştır.",
        "Birkaç parça sicimi kar tanesi şeklinde büküp bağla.",
        "Kavanoza sal ve bir geceyi bekle.",
        "Sabah kristalleşmiş kar tanesini çıkar."
      ],
      science: "Boraks soğuyunca kristallere dönüşür. Sıcak suda çözünen fazla boraks soğurken sicime yapışarak kristal oluşturur."
    },
    {
      key: "exp_su_filtresi",
      title: "Basit Su Filtresi",
      emoji: "💧",
      materials: ["2 şişe", "Kum", "Çakıl taşları", "Pamuk", "Kirli su"],
      steps: [
        "Şişenin dibine pamuk koy.",
        "Üzerine kum, sonra çakıl ekle.",
        "Kirli suyu yavaşça üstten dök.",
        "Altta toplanan suyu gözlemle."
      ],
      science: "Su katmanlardan geçerken kirlilik tutulur. Gerçek su arıtma sistemleri de benzer prensipler kullanır."
    },
    {
      key: "exp_renk_ayrimi",
      title: "Mürekkep Renk Ayrımı",
      emoji: "🖊️",
      materials: ["Kahve filtre kağıdı", "Siyah keçeli kalem", "Su", "Bardak"],
      steps: [
        "Filtre kağıdına siyah kalemle bir çizgi çiz.",
        "Kağıdı suya değecek şekilde bardağa daldır.",
        "Renklerin yükselişini izle."
      ],
      science: "Siyah mürekkep farklı renklerin karışımıdır. Su emilirken renkler ayrışır ve gökkuşağı gibi görünür."
    }
  ],
  ortaokul: [
    {
      key: "exp_dna",
      title: "Muz DNA'sı Çıkarma",
      emoji: "🧬",
      materials: [
        "Bir muz",
        "Tuz",
        "Bulaşık deterjanı",
        "Soğuk alkol (ispirto)",
        "Süzgeç",
        "Şişe"
      ],
      steps: [
        "Muzu ez ve yarım bardak suda çöz.",
        "Bir çay kaşığı tuz ve birkaç damla deterjan ekle.",
        "10 dakika bekle, ara ara karıştır.",
        "Karışımı süzgeçten geçir.",
        "Süzülen sıvının üzerine yavaşça soğuk alkol ekle. İki katman oluştuğunu gör!"
      ],
      science: "DNA hücre zarından deterjanla ayrılır. Tuz DNA'nın bir arada kalmasını sağlar. Alkol DNA'yı çökeltir."
    },
    {
      key: "exp_optik_illusion",
      title: "İşık Kırılması Deneyi",
      emoji: "🔦",
      materials: ["Bir bardak su", "Kalem veya kaşık", "Karton"],
      steps: [
        "Bardağa su doldur.",
        "Kalem veya kaşığı su içine dik koy.",
        "Bir kenara geç ve bakınca kalemi kesik görmeye çalış.",
        "Kartona bir ok çiz, bardağın arkasına koy.",
        "Bardağın önünden bakınca okun yönünün değiştiğini gözlemle."
      ],
      science: "İşık bir maddeden diğerine geçerken kırılır (refraksiyon). Su havadan daha yoğundur; bu yüzden nümeler farklı görünür."
    },
    {
      key: "exp_elektrik_devre",
      title: "Basit Elektrik Devresi",
      emoji: "⚡",
      materials: ["1 pil (AA)", "2 kablo", "1 küçük ampül veya LED", "Bant"],
      steps: [
        "Kabloların uçlarını soy.",
        "Bir kabloyu pilin artı (+) ucuna bağla.",
        "Diğer ucu ampülün bir tarafına bağla.",
        "İkinci kabloyu ampülün diğer tarafından pilin eksi (-) ucuna bağla.",
        "Devre tamamlandığında ampül yanar!"
      ],
      science: "Elektrik akımının akabilmesi için devrenin kapalı olması gerekir. Elektronlar pil negatifinden çıkar, ampülü yakar ve pozitife döner."
    },
    {
      key: "exp_yeni_m1",
      title: "Elektroliz Deneyi",
      emoji: "⚡",
      materials: ["Su", "Tuz", "2 demir tel/kalem", "Pil", "Kablo"],
      steps: [
        "Kaba su doldur ve tuz ekle.",
        "İki demir teli kablolarla pile bağla.",
        "Telleri suya daldır.",
        "Kabarcık oluşumunu gözlemle."
      ],
      science: "Elektroliz ile su, oksijen ve hidrojene ayrışır. Artı elektrotta oksijen, eksi elektrotta hidrojen gaz kabarcıkları oluşur."
    },
    {
      key: "exp_yeni_m2",
      title: "pH İndikatör",
      emoji: "🔴",
      materials: [
        "Kırmızı lahana",
        "Su",
        "Çeşitli sıvılar (sirke, sabun, limon)"
      ],
      steps: [
        "Kırmızı lahanayı suda kaynat.",
        "Mor renkli suyu süz ve kaplara koy.",
        "Her kaba farklı sıvı ekle.",
        "Renk değişimlerini gözlemle."
      ],
      science: "Kırmızı lahana, asit ve baz karşısında farklı renkler verir. Asit kırmızıya, baz yeşile-sarıya döner. Doğal pH indikatörüdür."
    },
    {
      key: "exp_yeni_m3",
      title: "Yoğunluk Kulesi",
      emoji: "🏗️",
      materials: ["Bal", "Yağ", "Su", "Alkol", "Uzun bir bardak", "Boya"],
      steps: [
        "Bardağa önce bal dök.",
        "Yavaşça renkli su ekle.",
        "Yağı yavaşça ekle.",
        "Alkolü son olarak ekle.",
        "Katmanları gözlemle."
      ],
      science: "Her sıvının farklı yoğunluğu vardır. Yoğunluğu fazla olan alta çöker. Karışmayan sıvılar ayrı katmanlar oluşturur."
    },
    {
      key: "exp_yeni_m4",
      title: "Ses Dalgaları",
      emoji: "🔊",
      materials: ["Tuz", "Plastik folyo", "Kase", "Hoparlör ya da müzik aleti"],
      steps: [
        "Kaseye plastik folyo gerdirin.",
        "Üzerine tuz serpin.",
        "Hoparlörü yaklaştırın.",
        "Müzik çalın ve tuzu gözlemleyin."
      ],
      science: "Ses dalgaları titreşimdir. Bu titreşimler havayı ve plastik folyoyu titreştirerek tuzu hareket ettirir. Frekans arttıkça desen değişir."
    },
    {
      key: "exp_t9_elektroliz",
      title: "Suyun Elektrolizi",
      emoji: "⚡",
      materials: ["Su", "Tuz", "Pil", "Tel", "Kaşık"],
      steps: [
        "1. Suya tuz ekleyin.",
        "2. İki tel ucunu kaşıklara bağlayın.",
        "3. Diğer uçları pil kutuplarına bağlayın.",
        "4. Kaşıklarda baloncukları gözlemleyin."
      ],
      science: "Elektrik akımı suyu ayrıştırır: pozitif uçta oksijen, negatif uçta hidrojen gazı çıkar. Bu elektroliz reaksiyonudur ve H₂O → H₂ + O₂ denklemiyle gösterilir."
    },
    {
      key: "exp_t9_asit_baz",
      title: "Kırmızı Lahana pH Testi",
      emoji: "🧪",
      materials: [
        "Kırmızı lahana",
        "Su",
        "Bardaklar",
        "Sirke",
        "Karbonat",
        "Limon"
      ],
      steps: [
        "1. Lahanayı suda kaynatın.",
        "2. Mavi-mor sıvıyı süzün.",
        "3. Her bardağa farklı madde ekleyin.",
        "4. Renk değişimlerini gözlemleyin."
      ],
      science: "Kırmızı lahana doğal bir pH indikatörüdür. Asit ortamda kırmızı, bazik ortamda sarı-yeşil renk alır. Bu renk değişimi antosiyaninler sayesinde olur."
    },
    {
      key: "exp_t9_manyetik_alan",
      title: "Manyetik Alan Haritası",
      emoji: "🧲",
      materials: ["Güçlü mıknatıs", "Demir tozu", "Kağıt"],
      steps: [
        "1. Kağıdı mıknatısın üzerine koyun.",
        "2. Demir tozunu kağıda serpin.",
        "3. Kağıdı hafifçe sallayın.",
        "4. Manyetik alan çizgilerini görün."
      ],
      science: "Demir tozları manyetik alan yönünde dizilir ve alan çizgilerini görünür kılar. Kutuplar arasındaki güçlü alan daha sık çizgilerle temsil edilir."
    },
    {
      key: "exp_t9_osmoz",
      title: "Osmoz Deneyi",
      emoji: "🥒",
      materials: ["Salatalık", "Tuz", "İki kap", "Su"],
      steps: [
        "1. Birinci kaba tatlı su, ikinciye tuzlu su koyun.",
        "2. Her iki kaba birer dilim salatalık koyun.",
        "3. 30 dakika bekleyin.",
        "4. Salatalıkların sertliğini karşılaştırın."
      ],
      science: "Osmoz, yarı geçirgen zardan düşük derişimli taraftan yüksek derişimli tarafa su geçişidir. Tuzlu suda salatalık yumuşar çünkü hücrelerden su çekilir."
    },
    {
      key: "exp_o10_asit_baz",
      title: "Asit-Baz Göstergesi",
      emoji: "🧴",
      materials: [
        "Mor lahana",
        "Bardaklar",
        "Limon suyu",
        "Kabartma tozu",
        "Su"
      ],
      steps: [
        "1. Mor lahanayı suda kaynat ve suyunu süz.",
        "2. Farklı bardaklara limon suyu ve kabartma tozu çözeltisi koy.",
        "3. Her bardağa lahana suyu ekle ve renk değişimini gözlemle."
      ],
      science: "Mor lahana antosyanin içerir. Asitli ortamda kırmızı, bazik ortamda yeşil/sarı olur. Bu doğal bir pH göstergesidir."
    },
    {
      key: "exp_o11_sabun_film",
      title: "Sabun Filmi ile Optik",
      emoji: "🫧",
      materials: ["Bulaşık deterjanı", "Su", "Gliserin", "Tel halka"],
      steps: [
        "1. Su, deterjan ve gliserin karıştır.",
        "2. Tel halkayı daldır ve çek.",
        "3. Film üzerindeki renkleri gözlemle."
      ],
      science: "Sabun filmi ince bir tabakadır. Işık hem dışından hem içinden yansır; bu iki dalganın interferansı renkli görüntü oluşturur."
    },
    {
      key: "exp_o12_fotosentez",
      title: "Fotosentez Gözlemi",
      emoji: "🌿",
      materials: ["Suluboya, ışık kaynağı, bitki yaprağı, su dolu kap"],
      steps: [
        "1. Yaprağı suya daldır.",
        "2. Işık kaynağını yaprağa tut.",
        "3. Yaprak yüzeyinde kabarcık oluşumunu gözlemle."
      ],
      science: "Fotosentezde CO2 ve su kullanılarak oksijen ve glikoz üretilir. Kabarcıklar oluşan oksijendir."
    },
    {
      key: "exp_o13_elektroliz",
      title: "Suyun Elektrolizi",
      emoji: "⚡",
      materials: ["Su", "Tuz", "9V pil", "İki kalem ucu (grafit)", "Kablo"],
      steps: [
        "1. Suya tuz ekle ve karıştır.",
        "2. Grafit uçları suya daldır ve pile bağla.",
        "3. Her elektrot etrafındaki kabarcıkları gözlemle."
      ],
      science: "Elektroliz ile su H2 ve O2'ye ayrışır. Negatif elektrot (katot) hidrojen, pozitif elektrot (anot) oksijen üretir."
    },
    {
      key: "exp_elektroliz",
      title: "Suyun Elektrolizi",
      emoji: "⚡",
      materials: [
        "9V pil",
        "İki kalem ucu (grafit)",
        "Tuzlu su",
        "Kablo",
        "Kap"
      ],
      steps: [
        "Kaba tuzlu su doldur.",
        "Her kalem ucunu bir kabloya bağla.",
        "Kabloları pilin + ve - kutuplarına bağla.",
        "Kalem uçlarını suya sok.",
        "Her elektrot etrafındaki kabarcıkları gözlemle."
      ],
      science: "Elektroliz ile su H2 ve O2'ye ayrışır. Negatif elektrot (katot) hidrojen, pozitif elektrot (anot) oksijen üretir."
    },
    {
      key: "exp_toprak_ph",
      title: "Toprağın pH'ını Ölç",
      emoji: "🌱",
      materials: [
        "Toprak örneği",
        "Distile su",
        "Kırmızı lahana suyu",
        "Bardaklar"
      ],
      steps: [
        "Kırmızı lahanayı suda kaynat, suyunu süz.",
        "Bir bardağa toprak ve distile su karıştır.",
        "Lahana suyundan birkaç damla ekle.",
        "Renk değişimini gözlemle.",
        "Mor: nötr, kırmızı: asit, yeşil: baz."
      ],
      science: "Kırmızı lahana doğal bir pH indikatörüdür. Asitli ortamda kırmızı, bazik ortamda yeşil-sarı renk alır."
    },
    {
      key: "exp_optik_yanilsama",
      title: "Optik Yanılsama Çarkı",
      emoji: "👁️",
      materials: [
        "Karton daire",
        "Siyah-beyaz spiral desen",
        "Kalem",
        "Motor veya ip"
      ],
      steps: [
        "Kartona siyah-beyaz spiral çiz.",
        "Ortasına kalem geçir.",
        "Kalemi ellerin arasında hızlıca döndür.",
        "Spirale bakarak etrafındaki nesnelere bak.",
        "Nesneler büyüyor ya da küçülüyor gibi görünecek."
      ],
      science: "Dönen spiral göz-beyin sistemini yanıltır. Retina alışkanlık kazanır ve ardışık görüntü yanılsaması oluşur."
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
function ExperimentsPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const activeExperiments = lang === "en" ? experimentsEn : lang === "es" ? experimentsEs : lang === "fr" ? experimentsFr : lang === "zh" ? experimentsZh : lang === "hi" ? experimentsHi : experiments;
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "experiments");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [expanded, setExpanded] = reactExports.useState(null);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [favKeys, setFavKeys] = reactExports.useState(() => {
    if (!profile) return /* @__PURE__ */ new Set();
    const all = Object.values(experiments).flat();
    return new Set(
      all.filter((e) => isFavorite(profile.studentNumber, "experiment", e.key)).map((e) => e.key)
    );
  });
  function handleToggleFav(e) {
    if (!profile) return;
    const added = toggleFavorite(profile.studentNumber, {
      type: "experiment",
      key: e.key,
      title: e.title,
      emoji: e.emoji
    });
    setFavKeys((prev) => {
      const next = new Set(prev);
      if (added) next.add(e.key);
      else next.delete(e.key);
      return next;
    });
  }
  const filteredExperiments = activeExperiments[level].filter(
    (e) => e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.science.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDone = (key) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 15);
    incrementDailyContentRead(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-green-500 to-teal-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        "data-ocid": "experiments.back_button",
        variant: "ghost",
        onClick: () => navigate({ to: "/home" }),
        className: "text-white mb-4",
        children: "← Geri"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
      "🔬 ",
      t("experiments_title")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": "experiments.tab",
        onClick: () => setLevel(t2.key),
        className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === t2.key ? "bg-white text-green-600" : "bg-white/20 text-white hover:bg-white/30"}`,
        children: t2.label
      },
      t2.key
    )) }),
    (() => {
      const total = activeExperiments[level].length;
      const done = activeExperiments[level].filter(
        (e) => readTopics.includes(e.key)
      ).length;
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🔬" }),
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
              className: "h-full bg-cyan-300 rounded-full transition-all duration-500",
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
        "data-ocid": "experiments.search_input",
        placeholder: `🔍 ${t("search_placeholder")}`,
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredExperiments.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: "Sonuç bulunamadı 🔍" }) : filteredExperiments.map((exp) => {
      const isDone = readTopics.includes(exp.key);
      const isOpen = expanded === exp.key;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white/20 backdrop-blur rounded-2xl overflow-hidden transition-all ${isDone ? "border-2 border-yellow-300" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "w-full p-4 text-left flex items-center gap-3",
                onClick: () => setExpanded(isOpen ? null : exp.key),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: exp.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black", children: exp.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/70 text-xs", children: [
                      exp.materials.length,
                      " malzeme • ",
                      exp.steps.length,
                      " adım"
                    ] })
                  ] }),
                  isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300", children: "✓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (ev) => {
                        ev.stopPropagation();
                        handleToggleFav(exp);
                      },
                      className: "text-xl hover:scale-125 transition-transform",
                      children: favKeys.has(exp.key) ? "⭐" : "☆"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60", children: isOpen ? "▲" : "▼" })
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-1 text-sm", children: "🧪 Malzemeler:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: exp.materials.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "text-white/80 text-xs flex gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300", children: "•" }),
                      " ",
                      m
                    ]
                  },
                  m
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold mb-1 text-sm", children: "📋 Adımlar:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: exp.steps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-white/80 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-yellow-300 font-bold", children: [
                    idx + 1,
                    ".",
                    " "
                  ] }),
                  step
                ] }, step)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-xs mb-1", children: "🔭 Bilim Açıklaması:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs", children: exp.science })
              ] }),
              !isDone && profile && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "experiments.done_button",
                  onClick: () => handleDone(exp.key),
                  className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                  children: "✅ Yaptım! +15 puan"
                }
              ),
              isDone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-300 text-xs font-bold", children: "✅ Tamamlandı (+15 puan kazanıldı)" })
            ] })
          ]
        },
        exp.key
      );
    }) })
  ] }) });
}
export {
  ExperimentsPage as default
};
