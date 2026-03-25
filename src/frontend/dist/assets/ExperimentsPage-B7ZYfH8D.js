import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, j as jsxRuntimeExports, B as Button, m as markTopicRead, f as updatePoints, i as incrementDailyContentRead } from "./index-dncktxyT.js";
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
  const activeExperiments = lang === "en" ? experimentsEn : experiments;
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
