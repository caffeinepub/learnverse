type Level = "okul_oncesi" | "ilkokul" | "ortaokul";

interface Experiment {
  key: string;
  title: string;
  emoji: string;
  materials: string[];
  steps: string[];
  science: string;
}

export const experimentsEn: Record<Level, Experiment[]> = {
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
        "Watch the purple color form!",
      ],
      science:
        "Primary colors (red, blue, yellow) make secondary colors when mixed. Red + Blue = Purple!",
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
        "Which melted faster?",
      ],
      science:
        "Salt lowers the melting point of ice. That is why salt is put on roads in winter!",
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
        "Watch the balloon inflate!",
      ],
      science:
        "When vinegar and baking soda react, they release carbon dioxide gas. That gas inflates the balloon!",
    },
    {
      key: "exp_yeni_o1",
      title: "Milk and Lemon",
      emoji: "🥛",
      materials: [
        "1 glass of milk",
        "1 tablespoon of lemon juice",
        "1 container",
      ],
      steps: [
        "Pour the milk into the container.",
        "Add lemon juice to the milk.",
        "Stir and wait.",
        "Watch the milk curdle.",
        "What changed?",
      ],
      science:
        "Lemon juice is acidic and causes the proteins in milk to clump together. This is how cheese is made!",
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
        "Wait a few minutes and observe.",
      ],
      science:
        "Carbon dioxide bubbles cling to the raisins and lift them up. When the bubbles pop, the raisins sink again!",
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
        "Watch the boat move forward!",
      ],
      science:
        "Soap reduces the surface tension of water. The water behind the boat pulls less than the water in front, pushing the boat forward!",
    },
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
        "Which plant grew faster?",
      ],
      science:
        "Plants need sunlight for photosynthesis to make food. Without light they cannot grow properly.",
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
        "A piece of wood",
      ],
      steps: [
        "Place each object near the magnet one at a time.",
        "Record which objects stick and which don't.",
        "Group them as magnetic and non-magnetic.",
        "What do the magnetic objects have in common?",
      ],
      science:
        "Magnets attract metals containing iron, nickel, or cobalt. Other materials are not magnetic.",
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
        "Dirty water",
      ],
      steps: [
        "Cut the bottle in half.",
        "Place cotton at the bottom, then sand, then pebbles.",
        "Slowly pour dirty water through.",
        "Collect the filtered water at the bottom.",
        "Compare with unfiltered water.",
      ],
      science:
        "Layers of sand and gravel trap dirt particles as water passes through. This is how basic water filters work!",
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
        "Can you hear through the string telephone?",
      ],
      science:
        "Sound travels as vibrations. Speaking makes the cup vibrate, the string carries those vibrations, and the other cup turns them back into sound.",
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
        "What created the foam?",
      ],
      science:
        "Baking soda and vinegar react to produce carbon dioxide gas. The gas escapes quickly and creates the eruption effect!",
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
        "Carefully take the egg out. What happened to the shell?",
      ],
      science:
        "The acetic acid in vinegar dissolves the calcium in the eggshell. After 3 days the shell is gone, leaving only the rubbery membrane!",
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
        "A tall glass",
      ],
      steps: [
        "Slowly pour honey into the glass first.",
        "Gently add dish soap on top.",
        "Slowly add colored water.",
        "Add vegetable oil.",
        "Finally add alcohol. Watch the layers!",
      ],
      science:
        "Liquids with different densities don't mix and form separate layers. The densest liquid sinks to the bottom!",
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
        "Try with multiple lemons connected in series.",
      ],
      science:
        "Citric acid in the lemon reacts with the metals (copper and zinc) to produce a small electric current. Enough to light a tiny LED!",
    },
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
        "Plastic bag",
      ],
      steps: [
        "Crush the strawberry in the bag.",
        "Add a pinch of salt and a drop of dish soap, mix gently.",
        "Strain the liquid through a cloth.",
        "Slowly pour cold alcohol on top.",
        "Watch the white DNA strands appear!",
      ],
      science:
        "Soap breaks down cell membranes, releasing DNA. Alcohol causes DNA to clump together and become visible. You can see real DNA with the naked eye!",
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
        "What controls the flow of electricity?",
      ],
      science:
        "Electricity flows in a closed loop called a circuit. A switch either completes or breaks the circuit, turning the bulb on or off.",
    },
    {
      key: "exp_asit_baz",
      title: "Acid-Base Indicator",
      emoji: "🧪",
      materials: [
        "Red cabbage",
        "Water",
        "Various liquids (lemon, vinegar, baking soda water, milk)",
      ],
      steps: [
        "Boil red cabbage and collect the purple liquid.",
        "Pour a small amount into separate cups.",
        "Add a different test liquid to each cup.",
        "Observe the color changes.",
        "Which are acids and which are bases?",
      ],
      science:
        "Red cabbage contains a pigment called anthocyanin. It turns red in acids and green in bases. It is a natural pH indicator!",
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
        "Which water is warmer?",
      ],
      science:
        "Dark colors absorb more light and heat energy. Light colors reflect more light. This explains why we wear light clothes in summer!",
    },
    {
      key: "exp_fotosntez",
      title: "Photosynthesis Experiment",
      emoji: "🌿",
      materials: [
        "A healthy leaf",
        "Rubbing alcohol",
        "Hot water",
        "Iodine solution",
      ],
      steps: [
        "Leave the plant in sunlight for a few hours.",
        "Pick a leaf and boil it briefly in water.",
        "Place the leaf in alcohol to remove chlorophyll.",
        "Rinse with water and add iodine.",
        "What color does it turn? Why?",
      ],
      science:
        "Iodine turns dark blue-black in the presence of starch. If the leaf was in sunlight, it made starch through photosynthesis. The dark color proves it!",
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
        "Which slice became softer? Why?",
      ],
      science:
        "Osmosis is the movement of water across a membrane from low to high salt concentration. Salt water draws water out of the potato cells, making the slice shrink and soften.",
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
        "Try punching it and touching it gently.",
      ],
      science:
        "This mixture is called a non-Newtonian fluid. It acts like a solid when force is applied quickly and like a liquid when touched slowly. Its viscosity changes with applied force!",
    },
  ],
};
