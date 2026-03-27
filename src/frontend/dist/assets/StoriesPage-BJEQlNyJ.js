import { u as useNavigate, a as useLanguage, d as getCurrentUser, r as reactExports, t as trackContentVisit, e as getReadTopics, x as isFavorite, j as jsxRuntimeExports, B as Button, f as updatePoints, y as toggleFavorite, m as markTopicRead, i as incrementDailyContentRead, ae as incrementWeeklyStories } from "./index-CvFhBtrS.js";
import { W as WordDefinitionTooltip } from "./WordDefinitionTooltip-JBkBgKsn.js";
const storiesEn = {
  okul_oncesi: [
    {
      key: "story_kucuk_kedi",
      title: "Little Cat Minnoş",
      emoji: "🐱",
      text: "There was a little cat named Minnoş. Every morning she played in the garden. One day she saw a beautiful butterfly. She chased the butterfly but couldn't catch it. She returned home laughing."
    },
    {
      key: "story_tavsan_kaplumbaga",
      title: "The Rabbit and the Turtle",
      emoji: "🐢",
      text: "A rabbit and a turtle decided to race. The rabbit ran very fast and lay down to rest. The turtle walked slowly but never stopped. The turtle won the race. Patience always wins!"
    },
    {
      key: "story_cesur_fare",
      title: "Brave Mouse Piko",
      emoji: "🐭",
      text: "There was a brave mouse named Piko. His friends were afraid of cats, but Piko was not. One day he helped all the mice and brought them to safety. Everyone loved Piko very much."
    },
    {
      key: "story_uc_kucuk_domuz",
      title: "Three Little Pigs",
      emoji: "🐷",
      text: "Three little pigs built houses. One used straw, one used wood, and one used bricks. The wolf huffed and puffed and blew down the straw and wood houses. But he couldn't blow down the brick house. Building strong things is important!"
    },
    {
      key: "story_kar_tanesi",
      title: "The Snowflake",
      emoji: "❄️",
      text: "A little snowflake was falling from the sky. 'Where am I going?' it wondered. It landed on a child's nose and melted. 'Now I am that child's smile!' it said happily."
    },
    {
      key: "story_kirmizi_baslikh",
      title: "Little Red Riding Hood",
      emoji: "🧺",
      text: "Little Red Riding Hood was taking food to her grandmother. In the forest she met a big bad wolf. But she was brave and smart. The woodcutter came to her rescue and everyone was happy. Be careful with strangers."
    },
    {
      key: "story_tohumun_macerasi",
      title: "The Seed's Adventure",
      emoji: "🌱",
      text: "A tiny seed fell into the ground. 'What am I doing here?' it wondered. Rain fell and the sun rose. Days passed and the seed became a big beautiful tree. Being patient brings great things."
    },
    {
      key: "story_renkli_balik",
      title: "The Colorful Fish",
      emoji: "🐠",
      text: "A colorful fish lived in the deep ocean. All its friends were the same color but it was different. At first it was sad, then it realized: being different is special. It became the most loved friend of all."
    },
    {
      key: "story_kuyudaki_kurbaga",
      title: "The Frog in the Well",
      emoji: "🐸",
      text: "A frog lived in a well. 'The world is just this well,' it said. One day a bird came and told of the great seas. The frog was amazed and set off to explore the world. Curiosity makes you grow."
    },
    {
      key: "story_yeni_1",
      title: "Fluffy Dog Pamuk",
      emoji: "🐶",
      text: "There was a white fluffy dog named Pamuk. Every day he went to the park with his owner. He played games with children and chased balls. When he came home in the evening he wagged his tail with happiness. Friendship is the best way to have a great day."
    },
    {
      key: "story_yeni_2",
      title: "The Magic Pencil",
      emoji: "✏️",
      text: "Ali had a magic pencil. Everything he drew came to life. He drew the sun and the room brightened. He drew flowers and the room became beautiful. Best of all, when he drew a friend, a real companion appeared beside him."
    },
    {
      key: "story_yeni_3",
      title: "Little Star",
      emoji: "⭐",
      text: "There was a little star in the sky. 'I am so small, no one sees me,' it said sadly. But one night a lost child found his way home by the star's light. Small as you are, helping others brings great happiness."
    },
    {
      key: "story_kucuk_ay",
      title: "Little Moon's Journey",
      emoji: "🌙",
      text: "Little Moon wandered alone in the sky every night. One night it made friends with the stars. The stars taught it how to shine. Now Little Moon shines together with the stars every night."
    },
    {
      key: "story_kelebek_cicek",
      title: "The Butterfly and the Flower",
      emoji: "🦋",
      text: "A little butterfly was flying in the garden. It landed on a red flower. The flower smiled, and the butterfly smiled too."
    },
    {
      key: "story_bulut",
      title: "The Cloud's Journey",
      emoji: "☁️",
      text: "A white cloud floated across the sky. The wind carried it to the mountains. There it turned into rain and the earth drank it joyfully."
    }
  ],
  ilkokul: [
    {
      key: "story_ilk_gun",
      title: "First Day of School",
      emoji: "🎒",
      text: "Zeynep's first day of school had arrived. She was nervous and held her mother's hand tightly. In the classroom she met Ali. They sat at the same desk and became best friends. School was not scary at all!"
    },
    {
      key: "story_kitap_kurdu",
      title: "The Bookworm",
      emoji: "📚",
      text: "Mert loved reading books. The other kids used to tease him. But one day when the class got lost on a trip, Mert knew exactly what to do because he had read a guide. Everyone respected him after that. Books open new worlds."
    },
    {
      key: "story_yardim_eli",
      title: "A Helping Hand",
      emoji: "🤝",
      text: "Selin noticed that her elderly neighbor needed groceries. Without being asked, she helped carry the bags. The neighbor was very touched. 'Kindness makes the world beautiful,' she said."
    },
    {
      key: "story_cesur_cocuk",
      title: "The Brave Child",
      emoji: "🦁",
      text: "Ahmet was scared of the dark. Every night the darkness frightened him. One day his teacher said: 'Bravery isn't the absence of fear, it's acting even when you're afraid.' Ahmet tried it and night by night he grew braver."
    },
    {
      key: "story_paylasmak",
      title: "Sharing",
      emoji: "🍎",
      text: "Ayşe had only one apple in her lunch. Her friend Hasan had forgotten his food. Without hesitation, Ayşe shared her apple. Hasan was very happy. The apple tasted sweeter when shared."
    },
    {
      key: "story_dogum_gunu",
      title: "Birthday Surprise",
      emoji: "🎂",
      text: "It was Can's birthday but his parents had forgotten. He was very sad. His friends however had secretly prepared a surprise. When he saw the cake and balloons he cried tears of joy. True friendship is never forgotten."
    },
    {
      key: "story_cicek_bakimi",
      title: "Caring for Flowers",
      emoji: "🌸",
      text: "Ela planted a small seed in a pot. She watered it every day and kept it in the sun. One day a flower bloomed. 'I made this happen with my patience and care!' she said proudly."
    },
    {
      key: "story_matematik_sorusu",
      title: "The Math Problem",
      emoji: "🔢",
      text: "Burak couldn't solve the math problem. He tried again and again and kept making mistakes. His teacher said: 'Every mistake is a step toward learning.' Burak persisted and finally solved it. Success comes to those who try."
    },
    {
      key: "story_dost_el",
      title: "A Friendly Hand",
      emoji: "🤗",
      text: "A new student joined the class. No one spoke to her. Only Irem approached and said hello. The new student cried with happiness. A single greeting can change someone's whole world."
    },
    {
      key: "story_dogadaki_macera",
      title: "Adventure in Nature",
      emoji: "🌿",
      text: "The class went on a nature trip. They saw birds, insects and plants. Berk took notes in his notebook. On the way back he shared what he learned with the whole class. Observing nature teaches us a great deal."
    },
    {
      key: "story_il1_kahraman",
      title: "Everyday Hero",
      emoji: "🦸",
      text: "Oya thought heroes existed only in movies. One day she helped a puppy that had fallen into a ditch. Everyone called her a hero. She understood: heroes are people who do good when they have the chance."
    },
    {
      key: "story_il2_geri_donusum",
      title: "Recycling Day",
      emoji: "♻️",
      text: "The school held a recycling competition. Kerem collected bottles from every corner of the neighborhood. He won first place. 'Protecting nature is everyone's duty,' he said in his speech."
    }
  ],
  ortaokul: [
    {
      key: "story_bilim_insani",
      title: "The Young Scientist",
      emoji: "🔬",
      text: "Fatma loved science. She entered a project competition and her experiment failed. But she tried again, learned from her mistakes and won second place. Years later she became a great scientist. Failure is always a lesson."
    },
    {
      key: "story_teknoloji_bagimli",
      title: "Technology Addict",
      emoji: "📱",
      text: "Kadir spent all day looking at his phone. He couldn't talk to friends or focus on lessons. One day the school organized a phone-free day. Kadir was surprised: he had fun and talked to people. Balance is the key to everything."
    },
    {
      key: "story_farkliliklara_saygi",
      title: "Respecting Differences",
      emoji: "🌍",
      text: "An exchange student from a different country joined the class. Some kids found him strange. But Leyla made friends with him and learned new things about his culture. Differences make the world richer."
    },
    {
      key: "story_liderlik",
      title: "Leadership",
      emoji: "🏆",
      text: "Mehmet was elected class president. He listened to everyone's opinions and made fair decisions. At first leading was hard, but with fairness and empathy he earned everyone's trust. A good leader is also a good listener."
    },
    {
      key: "story_internet_guvenligi",
      title: "Internet Safety",
      emoji: "🔒",
      text: "Nisan received a suspicious message online. She remembered what her teacher had taught her and didn't reply. She told her parents. The suspicious person was found and blocked. Staying safe online is very important."
    },
    {
      key: "story_hayal_guc",
      title: "The Power of Imagination",
      emoji: "🚀",
      text: "Orhan always dreamed of going to space. His friends laughed at him. But he kept studying and never gave up. Years later his dream came true. Imagination is the starting point of every great achievement."
    },
    {
      key: "story_cevreyi_koruma",
      title: "Protecting the Environment",
      emoji: "🌱",
      text: "Pelin noticed that the river near her school was being polluted. She wrote a petition and collected signatures from classmates. City hall took action. One person's effort can make a big difference."
    },
    {
      key: "story_ort1_kod",
      title: "The First Code",
      emoji: "💻",
      text: "Rahim wrote his first program. It had lots of errors but he didn't give up. After days of trying he got it working. Looking at the screen he thought: 'I made this happen.' For the first time he felt the joy of creating."
    },
    {
      key: "story_ort2_muzik",
      title: "The Magic of Music",
      emoji: "🎵",
      text: "Sema hated music class. One day the teacher asked students to play their favorite songs. Sema played an old folk tune her grandmother had taught her. The whole class was moved. Music connects different worlds."
    },
    {
      key: "story_ort3_empati",
      title: "Empathy",
      emoji: "💛",
      text: "Tamer always made fun of others' mistakes. One day he made a big mistake himself and the whole class laughed. That day he understood what it felt like. From then on he never mocked anyone. Empathy changes people."
    }
  ]
};
const storiesEs = {
  okul_oncesi: [
    {
      key: "story_kucuk_kedi",
      title: "La Gatita Minnoş",
      emoji: "🐱",
      text: "Había una vez una gatita llamada Minnoş. Cada mañana jugaba en el jardín. Un día vio una hermosa mariposa. Corrió detrás de la mariposa pero no pudo atraparla. Regresó a casa riendo."
    },
    {
      key: "story_tavsan_kaplumbaga",
      title: "El Conejo y la Tortuga",
      emoji: "🐢",
      text: "Un conejo y una tortuga decidieron hacer una carrera. El conejo corrió muy rápido y se acostó a descansar. La tortuga caminó lentamente pero sin parar. La tortuga ganó la carrera. ¡La paciencia siempre gana!"
    },
    {
      key: "story_cesur_fare",
      title: "El Ratón Valiente Piko",
      emoji: "🐭",
      text: "Había un ratón valiente llamado Piko. Sus amigos tenían miedo de los gatos, pero Piko no. Un día ayudó a todos los ratones y los llevó a un lugar seguro. Todos querían mucho a Piko."
    },
    {
      key: "story_uc_kucuk_domuz",
      title: "Los Tres Cerditos",
      emoji: "🐷",
      text: "Tres cerditos construyeron casas. Uno usó paja, otro madera y otro ladrillos. El lobo sopló y sopló y derrumbó las casas de paja y madera. Pero no pudo derribar la casa de ladrillos. ¡Es importante construir cosas sólidas!"
    },
    {
      key: "story_kar_tanesi",
      title: "El Copo de Nieve",
      emoji: "❄️",
      text: "Un pequeño copo de nieve caía del cielo. '¿A dónde voy?' se preguntaba. Cayó en la nariz de un niño y se derritió. '¡Ahora soy la sonrisa de ese niño!' dijo felizmente."
    },
    {
      key: "story_kirmizi_baslikh",
      title: "Caperucita Roja",
      emoji: "🧺",
      text: "Caperucita Roja llevaba comida a su abuela. En el bosque se encontró con un lobo malvado. Pero ella era valiente y lista. El leñador vino a rescatarla y todos fueron felices. Hay que tener cuidado con los desconocidos."
    },
    {
      key: "story_tohumun_macerasi",
      title: "La Aventura de la Semilla",
      emoji: "🌱",
      text: "Una pequeña semilla cayó en la tierra. '¿Qué hago aquí?' se preguntó. Llovió y salió el sol. Pasaron los días y la semilla se convirtió en un gran árbol hermoso. La paciencia trae grandes cosas."
    },
    {
      key: "story_renkli_balik",
      title: "El Pez de Colores",
      emoji: "🐠",
      text: "Un pez de colores vivía en el profundo océano. Todos sus amigos eran del mismo color pero él era diferente. Al principio estaba triste, luego se dio cuenta: ser diferente es especial. Se convirtió en el amigo más querido de todos."
    },
    {
      key: "story_kuyudaki_kurbaga",
      title: "La Rana en el Pozo",
      emoji: "🐸",
      text: "Una rana vivía en un pozo. 'El mundo es solo este pozo', decía. Un día llegó un pájaro y le contó sobre los grandes mares. La rana se asombró y partió a explorar el mundo. La curiosidad te hace crecer."
    },
    {
      key: "story_yeni_1",
      title: "El Perrito Pamuk",
      emoji: "🐶",
      text: "Había un perro de pelaje blanco llamado Pamuk. Cada día iba al parque con su dueño. Jugaba con los niños y corría tras la pelota. Al volver a casa por la noche meneaba la cola de felicidad. La mejor manera de pasar un buen día es con amistad."
    }
  ],
  ilkokul: [
    {
      key: "story_buyuk_ruzgar",
      title: "El Gran Viento",
      emoji: "🌬️",
      text: "Un día sopló un gran viento por el pueblo. Las hojas volaron, los sombreros salieron volando. La gente corría de un lado a otro. Ali se agarró a un árbol. '¡Este viento me lleva!' gritó. El viento se fue tan rápido como llegó y todo volvió a la calma."
    },
    {
      key: "story_kitap_kurdu",
      title: "El Ratón de Biblioteca",
      emoji: "📚",
      text: "Elif leía libros en cada momento libre. Sus amigos la llamaban 'ratón de biblioteca'. Un día, gracias a un libro, resolvió un gran problema. Sus amigos entendieron por qué los libros eran tan importantes. Leer abre mundos."
    },
    {
      key: "story_kayip_kedi",
      title: "El Gato Perdido",
      emoji: "🐈",
      text: "El gato de Can desapareció un día. Can buscó en cada rincón del barrio. Los vecinos también ayudaron. Finalmente encontraron al gato detrás de una floristería. Cuando la gente trabaja unida, los problemas se resuelven fácilmente."
    },
    {
      key: "story_ilk_kar",
      title: "La Primera Nieve",
      emoji: "⛄",
      text: "Cayó la primera nieve del año. Los niños corrieron al jardín llenos de alegría. Hicieron muñecos de nieve, se lanzaron bolas. Por la noche, sus mejillas estaban rojas de frío. Pero sus corazones estaban calientes de felicidad."
    },
    {
      key: "story_bahce_macerasi",
      title: "La Aventura del Jardín",
      emoji: "🌻",
      text: "Mia plantó semillas en el jardín de su abuelo. Las regó cada día con cuidado. Semanas después, los girasoles habían crecido bien alto. Su abuelo estaba muy orgulloso. Quien cuida con paciencia cosecha los frutos."
    },
    {
      key: "story_uzak_ulke",
      title: "El País Lejano",
      emoji: "🗺️",
      text: "Kerem soñó con viajar a países lejanos. Estudió idiomas, aprendió diferentes culturas. Al crecer se convirtió en explorador. Visitó todos los continentes y compartió lo que aprendió con los niños de su país. Los sueños se hacen realidad con esfuerzo."
    },
    {
      key: "story_robot_arkadasim",
      title: "Mi Amigo Robot",
      emoji: "🤖",
      text: "Zeynep construyó un robot con piezas viejas. El robot no podía hablar pero ayudaba con las tareas. Sus amigos al principio se asustaron. Luego entendieron: la tecnología puede ser un amigo. Zeynep se convirtió en inventora gracias a su curiosidad."
    }
  ],
  ortaokul: [
    {
      key: "story_gizli_bahce",
      title: "El Jardín Secreto",
      emoji: "🌿",
      text: "Tras el viejo muro había un jardín que nadie conocía. Ayla lo descubrió un día. Las flores estaban marchitas, las plantas descuidadas. Cada día Ayla trabajó para recuperar el jardín. Meses después el jardín volvió a florecer. Aquello que descuidas también puede renacer con esfuerzo."
    },
    {
      key: "story_deniz_feneri",
      title: "El Faro",
      emoji: "🏮",
      text: "En el faro de la pequeña isla vivía el viejo Mehmet. Encendía la luz cada noche para que los barcos no naufragaran. Un día llegó una gran tormenta. Mehmet luchó toda la noche para mantener la luz encendida. Al amanecer, los marineros agradecieron al héroe silencioso."
    },
    {
      key: "story_zaman_makinesi",
      title: "La Máquina del Tiempo",
      emoji: "⏰",
      text: "Cem construyó una máquina del tiempo en su garaje. La probó y viajó al pasado. Vio a sus abuelos cuando eran jóvenes. Entendió cuánto habían trabajado para que él pudiera vivir bien. Al regresar al presente, tenía más respeto por su familia que nunca."
    },
    {
      key: "story_kayip_harita",
      title: "El Mapa Perdido",
      emoji: "🗺️",
      text: "Emir encontró un viejo mapa en el ático. El mapa llevaba a un tesoro escondido. Junto con su amigo Leyla se pusieron en camino. Pasaron muchos obstáculos. Al final descubrieron que el tesoro era en realidad una biblioteca llena de libros raros. El verdadero tesoro es el conocimiento."
    },
    {
      key: "story_yapay_zeka",
      title: "La Inteligencia Artificial",
      emoji: "🤖",
      text: "Selin diseñó un programa de inteligencia artificial para la escuela. El programa ayudaba a los alumnos con dificultades. Al principio la maestra desconfió, pero luego vio los resultados: todos los alumnos habían mejorado. La tecnología, cuando se usa bien, beneficia a todos."
    },
    {
      key: "story_muzik_yarismasi",
      title: "El Concurso de Música",
      emoji: "🎵",
      text: "Kaan practicaba guitarra desde los cinco años. Se inscribió en el concurso nacional. Los nervios eran grandes antes del escenario. Pero cuando empezó a tocar, todo el mundo quedó en silencio y lo escuchó. Ganó el primer premio. Los años de práctica dieron sus frutos."
    }
  ]
};
const storiesFr = {
  okul_oncesi: [
    {
      key: "story_kucuk_kedi",
      title: "Le petit chat Minnoş",
      emoji: "🐱",
      text: "Il était une fois un petit chat nommé Minnoş. Chaque matin, il jouait dans le jardin. Un jour, il vit un beau papillon. Il courut après le papillon mais ne put pas l'attraper. Il rentra à la maison en riant."
    },
    {
      key: "story_tavsan_kaplumbaga",
      title: "Le lièvre et la tortue",
      emoji: "🐢",
      text: "Un lièvre et une tortue décidèrent de faire une course. Le lièvre courut très vite puis s'allongea pour se reposer. La tortue avança lentement mais sans jamais s'arrêter. La tortue gagna la course. La patience gagne toujours !"
    },
    {
      key: "story_cesur_fare",
      title: "La souris courageuse Piko",
      emoji: "🐭",
      text: "Il y avait une souris courageuse nommée Piko. Ses amis avaient peur des chats, mais pas Piko. Un jour, il aida toutes les souris et les mit en sécurité. Tout le monde aimait beaucoup Piko."
    },
    {
      key: "story_uc_kucuk_domuz",
      title: "Les trois petits cochons",
      emoji: "🐷",
      text: "Trois petits cochons construisirent des maisons. L'un utilisa de la paille, l'autre du bois, et le dernier des briques. Le loup souffla et renversa les maisons de paille et de bois. Mais il ne put pas renverser la maison en briques. Il est important de bien construire !"
    },
    {
      key: "story_kar_tanesi",
      title: "Le flocon de neige",
      emoji: "❄️",
      text: "Un petit flocon de neige tombait du ciel. 'Où vais-je ?' se demanda-t-il. Il se posa sur le nez d'un enfant et fondit. 'Je suis maintenant le sourire de cet enfant !' dit-il avec bonheur."
    },
    {
      key: "story_kirmizi_baslikh",
      title: "Le Petit Chaperon Rouge",
      emoji: "🧺",
      text: "Le Petit Chaperon Rouge portait de la nourriture à sa grand-mère. Dans la forêt, elle rencontra un grand méchant loup. Mais elle était courageuse et intelligente. Le bûcheron vint à son secours et tout le monde fut heureux. Méfiez-vous des inconnus."
    },
    {
      key: "story_tohumun_macerasi",
      title: "L'aventure de la graine",
      emoji: "🌱",
      text: "Une toute petite graine tomba dans la terre. 'Que fais-je ici ?' se demanda-t-elle. La pluie tomba et le soleil se leva. Les jours passèrent et la graine devint un grand et bel arbre. Être patient apporte de grandes choses."
    },
    {
      key: "story_renkli_balik",
      title: "Le poisson coloré",
      emoji: "🐠",
      text: "Un poisson coloré vivait dans les profondeurs de l'océan. Tous ses amis avaient la même couleur, mais lui était différent. Il était triste au début, puis il réalisa : être différent est une force. Il devint l'ami le plus aimé de tous."
    },
    {
      key: "story_kuyudaki_kurbaga",
      title: "La grenouille dans le puits",
      emoji: "🐸",
      text: "Une grenouille vivait dans un puits. 'Le monde, c'est ce puits,' disait-elle. Un jour, un oiseau vint lui parler des grands océans. La grenouille fut étonnée et décida d'explorer le monde. La curiosité nous fait grandir."
    },
    {
      key: "story_yeni_1",
      title: "Le chien moelleux Pamuk",
      emoji: "🐶",
      text: "Il y avait un chien blanc et moelleux nommé Pamuk. Chaque jour, il allait au parc avec son maître. Il jouait avec les enfants et courait après les balles. Le soir en rentrant, il remuait la queue de bonheur. L'amitié est la meilleure façon de passer une belle journée."
    },
    {
      key: "story_yeni_2",
      title: "Le crayon magique",
      emoji: "✏️",
      text: "Ali avait un crayon magique. Tout ce qu'il dessinait prenait vie. Il dessina le soleil et la pièce s'éclaira. Il dessina des fleurs et la pièce devint belle. Et surtout, quand il dessina un ami, un vrai compagnon apparut à ses côtés."
    },
    {
      key: "story_yeni_3",
      title: "La petite étoile",
      emoji: "⭐",
      text: "Il y avait une petite étoile dans le ciel. 'Je suis si petite, personne ne me voit,' disait-elle tristement. Mais une nuit, un enfant perdu retrouva son chemin grâce à sa lumière. Aussi petite soit-on, aider les autres apporte un grand bonheur."
    },
    {
      key: "story_kucuk_ay",
      title: "Le voyage de la petite lune",
      emoji: "🌙",
      text: "La petite lune errait seule dans le ciel chaque nuit. Un soir, elle se lia d'amitié avec les étoiles. Les étoiles lui apprirent à briller. Désormais, la petite lune brille avec les étoiles chaque nuit."
    },
    {
      key: "story_kelebek_cicek",
      title: "Le papillon et la fleur",
      emoji: "🦋",
      text: "Un petit papillon volait dans le jardin. Il se posa sur une fleur rouge. La fleur sourit, et le papillon sourit aussi."
    },
    {
      key: "story_bulut",
      title: "Le voyage du nuage",
      emoji: "☁️",
      text: "Un nuage blanc flottait dans le ciel. Le vent l'emporta vers les montagnes. Là, il se transforma en pluie et la terre la but avec joie."
    }
  ],
  ilkokul: [
    {
      key: "story_ilk_gun",
      title: "Premier jour d'école",
      emoji: "🎒",
      text: "C'était le premier jour d'école de Zeynep. Elle était nerveuse et serrait fort la main de sa mère. En classe, elle rencontra Ali. Ils s'assirent au même bureau et devinrent les meilleurs amis. L'école n'était pas si effrayante !"
    },
    {
      key: "story_kitap_kurdu",
      title: "Le rat de bibliothèque",
      emoji: "📚",
      text: "Mert adorait lire des livres. Les autres enfants se moquaient de lui. Mais un jour, lors d'une sortie, la classe se perdit et Mert sut quoi faire car il avait lu un guide. Tout le monde le respecta après cela. Les livres ouvrent de nouveaux mondes."
    },
    {
      key: "story_yardim_eli",
      title: "Un coup de main",
      emoji: "🤝",
      text: "Selin remarqua que sa voisine âgée avait besoin de faire ses courses. Sans qu'on le lui demande, elle l'aida à porter les sacs. La voisine fut très touchée. 'La gentillesse rend le monde beau,' dit-elle."
    },
    {
      key: "story_cesur_cocuk",
      title: "L'enfant courageux",
      emoji: "🦁",
      text: "Ahmet avait peur du noir. Chaque nuit, l'obscurité l'effrayait. Un jour, son professeur dit : 'Le courage n'est pas l'absence de peur, c'est agir malgré la peur.' Ahmet essaya et devint plus courageux nuit après nuit."
    },
    {
      key: "story_paylasmak",
      title: "Partager",
      emoji: "🍎",
      text: "Ayşe n'avait qu'une seule pomme dans son repas. Son ami Hasan avait oublié sa nourriture. Sans hésiter, Ayşe partagea sa pomme. Hasan était très heureux. La pomme avait meilleur goût partagée."
    },
    {
      key: "story_dogum_gunu",
      title: "Surprise d'anniversaire",
      emoji: "🎂",
      text: "C'était l'anniversaire de Can mais ses parents l'avaient oublié. Il était très triste. Ses amis avaient pourtant préparé une surprise en secret. Quand il vit le gâteau et les ballons, il pleura de joie. La vraie amitié ne s'oublie jamais."
    },
    {
      key: "story_cicek_bakimi",
      title: "Prendre soin des fleurs",
      emoji: "🌸",
      text: "Ela planta une petite graine dans un pot. Elle l'arrosait chaque jour et la mettait au soleil. Un jour, une fleur s'épanouit. 'C'est moi qui ai fait ça avec ma patience et mon soin !' dit-elle fièrement."
    },
    {
      key: "story_matematik_sorusu",
      title: "Le problème de maths",
      emoji: "🔢",
      text: "Burak ne parvenait pas à résoudre le problème de maths. Il essayait encore et encore et faisait des erreurs. Son professeur dit : 'Chaque erreur est un pas vers l'apprentissage.' Burak persista et finit par résoudre le problème. Le succès vient à ceux qui essaient."
    },
    {
      key: "story_dost_el",
      title: "Une main amie",
      emoji: "🤗",
      text: "Un nouvel élève rejoignit la classe. Personne ne lui parla. Seule Irem s'approcha et lui dit bonjour. Le nouvel élève pleura de bonheur. Un simple bonjour peut changer tout le monde de quelqu'un."
    },
    {
      key: "story_dogadaki_macera",
      title: "Aventure dans la nature",
      emoji: "🌿",
      text: "La classe fit une sortie nature. Ils virent des oiseaux, des insectes et des plantes. Berk prit des notes dans son cahier. Sur le chemin du retour, il partagea ce qu'il avait appris avec toute la classe. Observer la nature nous apprend beaucoup."
    },
    {
      key: "story_il1_kahraman",
      title: "Héros du quotidien",
      emoji: "🦸",
      text: "Oya pensait que les héros n'existaient que dans les films. Un jour, elle aida un chiot tombé dans un fossé. Tout le monde l'appela héroïne. Elle comprit : les héros sont des personnes qui font le bien quand ils en ont l'occasion."
    },
    {
      key: "story_il2_geri_donusum",
      title: "Journée du recyclage",
      emoji: "♻️",
      text: "L'école organisa un concours de recyclage. Kerem collecta des bouteilles dans tout le quartier. Il remporta la première place. 'Protéger la nature est le devoir de chacun,' dit-il dans son discours."
    }
  ],
  ortaokul: [
    {
      key: "story_bilim_insani",
      title: "La jeune scientifique",
      emoji: "🔬",
      text: "Fatma aimait la science. Elle participa à un concours de projets et son expérience échoua. Mais elle réessaya, apprit de ses erreurs et remporta la deuxième place. Des années plus tard, elle devint une grande scientifique. L'échec est toujours une leçon."
    },
    {
      key: "story_teknoloji_bagimli",
      title: "Accro à la technologie",
      emoji: "📱",
      text: "Kadir passait toute la journée sur son téléphone. Il ne pouvait ni parler à ses amis ni se concentrer en cours. Un jour, l'école organisa une journée sans téléphone. Kadir fut surpris : il s'amusa et parla aux gens. L'équilibre est la clé de tout."
    },
    {
      key: "story_farkliliklara_saygi",
      title: "Respecter les différences",
      emoji: "🌍",
      text: "Un étudiant en échange d'un autre pays rejoignit la classe. Certains enfants le trouvaient étrange. Mais Leyla se lia d'amitié avec lui et apprit de nouvelles choses sur sa culture. Les différences enrichissent le monde."
    },
    {
      key: "story_liderlik",
      title: "Le leadership",
      emoji: "🏆",
      text: "Mehmet fut élu délégué de classe. Il écoutait l'opinion de chacun et prenait des décisions justes. Au début, diriger était difficile, mais avec équité et empathie il gagna la confiance de tous. Un bon chef est aussi un bon auditeur."
    },
    {
      key: "story_internet_guvenligi",
      title: "La sécurité sur Internet",
      emoji: "🔒",
      text: "Nisan reçut un message suspect en ligne. Elle se souvint de ce que son professeur lui avait enseigné et ne répondit pas. Elle le dit à ses parents. La personne suspecte fut trouvée et bloquée. La sécurité en ligne est très importante."
    },
    {
      key: "story_hayal_guc",
      title: "Le pouvoir de l'imagination",
      emoji: "🚀",
      text: "Orhan rêvait toujours d'aller dans l'espace. Ses amis se moquaient de lui. Mais il continua à étudier et ne renonça jamais. Des années plus tard, son rêve se réalisa. L'imagination est le point de départ de toute grande réalisation."
    },
    {
      key: "story_cevreyi_koruma",
      title: "Protéger l'environnement",
      emoji: "🌱",
      text: "Pelin remarqua que la rivière près de son école était polluée. Elle rédigea une pétition et recueillit les signatures de ses camarades. La mairie prit des mesures. Les efforts d'une seule personne peuvent faire une grande différence."
    },
    {
      key: "story_ort1_kod",
      title: "Le premier code",
      emoji: "💻",
      text: "Rahim écrivit son premier programme. Il avait beaucoup d'erreurs mais il ne renonça pas. Après des jours d'essais, il le fit fonctionner. En regardant l'écran, il pensa : 'C'est moi qui ai fait ça.' Pour la première fois, il ressentit la joie de créer."
    },
    {
      key: "story_ort2_muzik",
      title: "La magie de la musique",
      emoji: "🎵",
      text: "Sema détestait le cours de musique. Un jour, le professeur demanda aux élèves de jouer leur chanson préférée. Sema joua un vieil air folklorique que sa grand-mère lui avait appris. Toute la classe fut émue. La musique relie des mondes différents."
    },
    {
      key: "story_ort3_empati",
      title: "L'empathie",
      emoji: "💛",
      text: "Tamer se moquait toujours des erreurs des autres. Un jour, il fit une grande erreur lui-même et toute la classe se moqua. Ce jour-là, il comprit ce qu'on ressentait. Dès lors, il ne se moqua plus jamais de personne. L'empathie change les gens."
    }
  ]
};
const stories = {
  okul_oncesi: [
    {
      key: "story_kucuk_kedi",
      title: "Küçük Kedi Minnoş",
      emoji: "🐱",
      text: "Minnoş adında küçük bir kedi vardı. Her sabah bahçede oynardı. Bir gün bahçede güzel bir kelebek gördü. Kelebeğin peşinden koştu ama yakalayamadı. Gülerek eve döndü."
    },
    {
      key: "story_tavsan_kaplumbaga",
      title: "Tavşan ile Kaplumbağa",
      emoji: "🐢",
      text: "Tavşan ve kaplumbağa yarış yapacaktı. Tavşan çok hızlı koştu ve dinlenmeye yattı. Kaplumbağa yavaş yavaş ama durmadan yürüdü. Kaplumbağa yarışı kazandı. Sabır her zaman kazanır!"
    },
    {
      key: "story_cesur_fare",
      title: "Cesur Fare Piko",
      emoji: "🐭",
      text: "Piko adında cesur bir fare vardı. Arkadaşları kediyle karşılaşmaktan korkardı. Ama Piko korkmazdı. Bir gün tüm farelere yardım etti ve onları güvene ulaştırdı. Herkes Piko'yu çok sevdi."
    },
    {
      key: "story_uc_kucuk_domuz",
      title: "Üç Küçük Domuz",
      emoji: "🐷",
      text: "Üç küçük domuz ev kurdu. Biri saman, biri tahta, biri tuğlayla yaptı. Kurt gelip saman ve tahta evi üfledi, yıktı. Ama tuğla evi yıkamadı. Sağlam iş yapmak önemlidir!"
    },
    {
      key: "story_kar_tanesi",
      title: "Kar Tanesi",
      emoji: "❄️",
      text: "Küçük bir kar tanesi gökyüzünden düşüyordu. 'Ben nereye gidiyorum?' diye düşündü. Bir çocuğun burnuna kondu ve eridi. 'Ben artık o çocuğun gülüşüyüm!' dedi mutlu bir şekilde."
    },
    {
      key: "story_kirmizi_baslikh",
      title: "Kırmızı Başlıklı Kız",
      emoji: "🧺",
      text: "Kırmızı başlıklı kız büyükannesine yemek götürüyordu. Ormanda kötü bir kurtla karşılaştı. Ama o korkusuz ve akıllıydı. Oduncu yardımına yetişti ve herkes mutlu oldu. Yabancılara dikkat etmek gerekir."
    },
    {
      key: "story_tohumun_macerasi",
      title: "Tohumun Macerası",
      emoji: "🌱",
      text: "Küçük bir tohum toprağa düştü. 'Burada ne işim var?' diye düşündü. Yağmur yağdı, güneş doğdu. Günler geçti ve tohum büyük, güzel bir ağaç oldu. Sabırlı olmak büyük şeyler doğurur."
    },
    {
      key: "story_renkli_balik",
      title: "Renkli Balık",
      emoji: "🐠",
      text: "Okyanus derinliklerinde renkli bir balık yaşardı. Tüm arkadaşları aynı renkteydi ama o farklıydı. Başta üzüldü, sonra fark etti: farklı olmak özeldir. Arkadaşları onu en çok seven oldu."
    },
    {
      key: "story_kuyudaki_kurbaga",
      title: "Kuyudaki Kurbağa",
      emoji: "🐸",
      text: "Bir kurbağa kuyuda yaşıyordu. 'Dünya bu kuyudan ibarettir' diyordu. Bir gün bir kuş gelip büyük denizleri anlattı. Kurbağa hayret etti ve dünyayı keşfetmeye çıktı. Merak insanı büyütür."
    },
    {
      key: "story_yeni_1",
      title: "Sevimli Köpek Pamuq",
      emoji: "🐶",
      text: "Pamuk adında beyaz tüylü bir köpek vardı. Her gün sahibiyle parka giderdi. Parkta çocuklarla oyun oynar, top koşturdu. Akşam eve döndüğünde mutluluktan kuyruk sallardı. İyi bir gün geçirmenin en güzel yolu dostluktur."
    },
    {
      key: "story_yeni_2",
      title: "Sihirli Kalem",
      emoji: "✏️",
      text: "Ali'nin bir sihirli kalemi vardı. Çizdiği her şey gerçek oluyordu. Güneş çizdi, oda aydınlandı. Çiçek çizdi, oda güzelleşti. Ama en güzeli arkadaşı çizdiğinde, yanında gerçek bir dost belirdi."
    },
    {
      key: "story_yeni_3",
      title: "Küçük Yıldız",
      emoji: "⭐",
      text: "Gökyüzünde küçük bir yıldız vardı. 'Ben çok küçüğüm, kimse beni görmez' diye üzülürdü. Ama bir gece kaybolmuş bir çocuk yıldızın ışığıyla evini buldu. Küçük olsun, ama yardımcı olmak büyük mutluluktur."
    },
    {
      key: "story_yeni_4",
      title: "Rüzgâr ve Çiçek",
      emoji: "🌺",
      text: "Güçlü bir rüzgâr esiyordu. Bahçedeki küçük çiçeğe dedi ki: 'Seni eğerim!' Çiçek güldü: 'Ben eğilirim ama kırılmam.' Rüzgâr geçti, çiçek doğruldu. Güçlü olan direnç gösterendir."
    },
    {
      key: "story_yeni_5",
      title: "Komşu Tavşanlar",
      emoji: "🐰",
      text: "İki tavşan komşuydu: Biri hep paylaşır, diğeri paylaşmazdı. Kış geldi, cimri tavşanın yiyeceği tükendi. Paylaşan tavşan ona yardım etti. Cimri tavşan anladı: paylaşmak ne güzel şeymiş!"
    },
    {
      key: "story_t9_kelebek",
      title: "Kelebek ve Çiçek",
      emoji: "🦋",
      text: "Küçük bir kelebek bahçede uçuyordu. Kırmızı bir çiçeğe kondu. Çiçek güldü, kelebek de güldü."
    },
    {
      key: "story_t9_bulut",
      title: "Bulutun Yolculuğu",
      emoji: "☁️",
      text: "Beyaz bir bulut gökyüzünde yüzüyordu. Rüzgar onu dağlara götürdü. Orada yağmura dönüştü ve toprak onu sevinerek içti."
    },
    {
      key: "story_t9_fil",
      title: "Küçük Fil",
      emoji: "🐘",
      text: "Küçük fil su birikintisine baktı. Hortumunu daldırdı ve suyu havaya fırlattı. Güneş gökkuşağı yarattı, fil mutlu oldu."
    },
    {
      key: "story_t9_ay",
      title: "Ay ve Yıldızlar",
      emoji: "🌙",
      text: "Gece ay çıktı, yıldızlar etrafında dans etti. Küçük kız pencereden izledi. 'İyi geceler ay!' dedi ve uyudu."
    },
    {
      key: "story_t9_nar",
      title: "Nar Taneleri",
      emoji: "🍎",
      text: "Bahçede kırmızı bir nar vardı. Çatladı, içinden yüzlerce tanecik döküldü. Kuşlar geldi ve hepsini paylaşarak yedi."
    },
    {
      key: "story_kucuk_ay",
      title: "Küçük Ay'ın Yolculuğu",
      emoji: "🌙",
      text: "Küçük Ay her gece gökyüzünde yalnız dolaşırdı. Bir gece yıldızlarla arkadaş oldu. Yıldızlar ona parlamayı öğretti. Artık Küçük Ay, her gece yıldızlarla birlikte parlıyordu."
    },
    {
      key: "story_cesur_fare",
      title: "Cesur Fare",
      emoji: "🐭",
      text: "Küçük fare her gün ekmek bulmak için çalışırdı. Bir gün büyük bir aslan tuzağa düştü. Küçük fare ipi keserek aslanı kurtardı. Artık ikisi en iyi arkadaştı."
    },
    {
      key: "story_kar_tanesi",
      title: "Kar Tanesi",
      emoji: "❄️",
      text: "Her kar tanesi birbirinden farklıdır. Bir kar tanesi buluttan yere düştü. Güneş çıkınca eridi ve toprak sulandı. Çiçekler o suyla büyüdü. Kar tanesi çiçeğe dönüştü."
    },
    {
      key: "story_renkli_gokkusagi",
      title: "Renkli Gökkuşağı",
      emoji: "🌈",
      text: "Yağmur yağdı ve durdu. Gökyüzünde rengarenk bir gökkuşağı belirdi. Çocuklar dışarı çıkıp baktı. Kırmızı, turuncu, sarı, yeşil, mavi... Hepsi el ele tuttu ve dans etti."
    },
    {
      key: "story_sihirli_orman",
      title: "Sihirli Orman",
      emoji: "🌳",
      text: "Küçük Ali ormanda yürürken konuşan bir ağaç duydu. Ağaç, 'Beni kes!' dedi. Ali hayır, dedi. Ertesi gün ağaç meyve verdi. İyilik, her zaman geri döner."
    },
    {
      key: "story_yildizli_gece",
      title: "Yıldızlı Gece",
      emoji: "⭐",
      text: "Büyük bir köpek yıldızına bakarak dilek diledi. Sabah güzel bir kemik buldu. Dilek tutunca çalışmak da lazım, dedi annesi."
    },
    {
      key: "story_kurbaga_ve_gunes",
      title: "Kurbağa ve Güneş",
      emoji: "🐸",
      text: "Kurbağa havuzdan çıkıp güneşi selamlardı her sabah. Bir gün bulutlar kapladı göğü. Kurbağa şarkı söyledi, bulutlar dağıldı. Sevincin gücü büyüktür."
    },
    {
      key: "story_kucuk_fil_dost",
      title: "Küçük Fil ve Dostları",
      emoji: "🐘",
      text: "Küçük fil hiç arkadaşı olmadığı için üzülürdü. Bir gün nehre düşen sincabı kurtardı. Sincap teşekkür etti ve iki can dost oldular."
    },
    {
      key: "story_kirmizi_sandal",
      title: "Kırmızı Sandalye",
      emoji: "🪑",
      text: "Çocuk okulda hep aynı kırmızı sandalyeye otururdu. Bir gün sandalye kayboldu. Sınıf onu aramak için birlikte çalıştı. Birlik olmak sorunları çözer."
    },
    {
      key: "story_gunes_kuzusu",
      title: "Güneş ve Küçük Kuzu",
      emoji: "🐑",
      text: "Küçük kuzu güneşin neden her sabah doğduğunu merak etti. Annesine sordu. Annesi 'Güneş dünyanın tüm çocuklarını ısıtmak için doğuyor' dedi. Kuzu o gün mutlu uyudu."
    },
    {
      key: "story_renkli_balon",
      title: "Renkli Balonlar",
      emoji: "🎈",
      text: "Minik Ela balonların neden uçtuğunu sordu. Babası 'İçlerinde hafif gaz var' dedi. Ela balonunu gökyüzüne saldı. Balon bulutlara doğru yükseldi. Hayaller de öyle yükselir."
    },
    {
      key: "story_yildizli_gece",
      title: "Yıldızlı Gece",
      emoji: "⭐",
      text: "Derin her gece yıldızları sayardı. Bir gece büyükbabası yanına oturdu. 'Her yıldız bir dilek barındırır' dedi. Derin en parlak yıldıza dilekte bulundu: Herkes mutlu olsun."
    },
    {
      key: "story_kucuk_tohum",
      title: "Küçük Tohumun Yolculuğu",
      emoji: "🌱",
      text: "Küçük bir tohum toprağa düştü. Karanlıkta korktu. Ama su ve güneş ona yardım etti. Günler geçti, yeşil bir filiz çıktı. Zorluklar büyümenin başlangıcıdır."
    },
    {
      key: "story_kar_tanesi",
      title: "Kar Tanesi",
      emoji: "❄️",
      text: "Her kar tanesi farklıdır dedi öğretmen. Pembe bunu duyunca pencereden dışarı baktı. Karları inceledi. Gerçekten hiçbiri birbirine benzemiyordu. Herkes özeldir."
    }
  ],
  ilkokul: [
    {
      key: "story_altin_balik",
      title: "Altın Balık",
      emoji: "🐟",
      text: "Denizde parlayan bir balık vardı. Bir çocuk onu yakaladı ama balık konuştu: 'Beni bırak, bir dileğini gerçekleştireyim.' Çocuk balığı bırakarak 'Annem iyileşsin' dedi. Sabah annesi sağlıklıydı. İyilik en büyük dilektir."
    },
    {
      key: "story_kayip_koy",
      title: "Kayıp Köy",
      emoji: "🏔️",
      text: "Ali dağların arkasında gizli bir köy olduğunu duymuştu. Arkadaşlarıyla yola çıktı. Dağları aşarken beraber çalışarak zorluklarla başa çıktılar. Köyü buldular ve orada yaşayan insanlara yardım ettiler. Birliktelik güç kazandırır."
    },
    {
      key: "story_bilim_arisi",
      title: "Bilim Arısı Maya",
      emoji: "🐝",
      text: "Maya bir arıydı ve çiçeklerden balmumu üretiyordu. Bir gün merak etti: neden çiçekler tatlı? Kovanına dönerek arkadaşlarına anlattı. Hep birlikte araştırdılar. Öğrenmenin tadı balmumundan daha tatlıdır."
    },
    {
      key: "story_uzay_yolculugu",
      title: "Uzay Yolculuğu",
      emoji: "🚀",
      text: "Zeynep'in hayali astronot olmaktı. Her gece teleskopla yıldızlara bakardı. Okulda çok çalıştı ve matematik dersini sevdi. Büyüyünce gerçekten uzaya gitti. Hayal kurmak, başarmanın ilk adımıdır."
    },
    {
      key: "story_robot_arkadasim",
      title: "Robot Arkadaşım",
      emoji: "🤖",
      text: "Emre bir robot yaptı ama robot arkadaş edinmekte zorlanıyordu. Emre ona çeşitli şeyler öğretti: paylaşmayı, gülmeyi, yardım etmeyi. Bir gün robot gerçek anlamda arkadaş oldu. Dostluk öğrenilebilir."
    },
    {
      key: "story_kucuk_mucit",
      title: "Küçük Mucit",
      emoji: "⚙️",
      text: "Selin her şeyi tamir etmeyi severdi. Bozuk oyuncakları, kırık kalemi, delik kovayı... Bir gün okulda ışıklar söndü. Herkes paniklerken Selin bir araya koşup sorunu çözdü. Merak ve çalışkanlık her şeyi mümkün kılar."
    },
    {
      key: "story_yagmur_damlasi",
      title: "Yağmur Damlasının Yolculuğu",
      emoji: "🌧️",
      text: "Bir yağmur damlası buluttan düştü. Önce bir yaprağa, sonra toprağa, ardından nehre aktı. Nehirden denize ulaştı. Güneşle buharlaştı ve tekrar bulut oldu. Suyun döngüsü böyle işler!"
    },
    {
      key: "story_tarih_kitabi",
      title: "Tarihin Kitabı",
      emoji: "📜",
      text: "Ahmet büyükannesinin eski bir kitabını buldu. Sayfaları sararmış, yazıları silikti. Büyükannesine sordu: 'Bu kim?' Büyükannesinin gözleri parladı: 'Dedenin dedesi. Savaşta vatanı korudu.' Tarih aile içinde yaşar."
    },
    {
      key: "story_paylasilmis_ekmek",
      title: "Paylaşılan Ekmek",
      emoji: "🍞",
      text: "Okul çıkışında Fatma'nın sadece bir ekmeği vardı. Bir köpek sokakta aç bekliyordu. Fatma ekmeğini ikiye böldü. Eve gidince annesi 'Hem sen hem köpek toktunuz, bu nasıl?' dedi. Paylaşınca herkes tok olur."
    },
    {
      key: "story_yeni_6",
      title: "Deney Çocuğu",
      emoji: "🔬",
      text: "Zeynep her gün evde deney yapardı. Bir gün karbonat ve sirkeyle volkan yaptı. Ailesi şaşırdı. Öğretmeni onu bilim fuarına gönderdi. Birinci oldu. Merak etmek büyük başarılara kapı açar."
    },
    {
      key: "story_yeni_7",
      title: "Futbol Takımı",
      emoji: "⚽",
      text: "Ahmet'in takımı turnuvaya hazırlanıyordu. Ama en iyi oyuncu hastalandı. Ahmet korktu ama antrenör dedi ki: 'Takım olarak kazanırız.' Birlikte çalıştılar ve kupayı aldılar. Takım ruhu her şeyin üstündedir."
    },
    {
      key: "story_yeni_8",
      title: "Kütüphane Sırrı",
      emoji: "📚",
      text: "Elif okul kütüphanesinde eski bir kitap buldu. Kitabın son sayfasında bir not vardı: 'Bu kitabı okuyan çocuk büyük bir keşif yapacak.' Elif okumaya başladı. Bitirdiğinde anladı: keşif bilginin kendisiymiş."
    },
    {
      key: "story_yeni_9",
      title: "Kardeş Kavgası",
      emoji: "👧",
      text: "İki kardeş oyuncak yüzünden kavga etti. Anneleri onları oturttı: 'Siz birbirinizin en değerli arkadaşısınız.' Kardeşler düşündü. Barıştılar ve birlikte oynadılar. Kardeş kavgası çabuk biter, sevgi hiç bitmez."
    },
    {
      key: "story_yeni_10",
      title: "Kayıp Köpek",
      emoji: "🐕",
      text: "Mahallede bir köpek kaybolmuştu. Çocuklar onu aramaya başladı. Duvar köşelerini, bahçeleri aradılar. Onu parkın arkasında buldular. Sahibine teslim ettiler. İyilik yapmak kalbi ısıtır."
    },
    {
      key: "story_t9_kahraman",
      title: "Küçük Kahraman",
      emoji: "🦸",
      text: "Ali okul yolunda yaşlı bir teyzeyi gördü, elindeki poşetler düşmüştü. Hızla koştu ve hepsini topladı. Teyze teşekkür etti. 'İyilik yapmak en büyük güçtür' dedi Ali."
    },
    {
      key: "story_t9_kitap",
      title: "Sihirli Kitap",
      emoji: "📚",
      text: "Zeynep kütüphanede eski bir kitap buldu. Açınca sayfalar ışıl ışıl parladı. Hikayeler sanki gerçekmişçesine canlandı. O günden sonra kitapları çok daha çok sevdi."
    },
    {
      key: "story_t9_tohum",
      title: "Tohum'un Yolculuğu",
      emoji: "🌱",
      text: "Küçük bir tohum toprağa düştü. Karanlıkta kaldı ama pes etmedi. Yavaş yavaş kökler saldı, gövde oluştu. Sonunda güneşe doğru uzandı ve çiçek açtı. Azimle her şey mümkündür."
    },
    {
      key: "story_t9_yildiz",
      title: "Düşen Yıldız",
      emoji: "⭐",
      text: "Can gece kayalıkta yatarken bir yıldız düştü. Koştu ve parlayan bir taş buldu. Onu bilim insanlarına götürdü. 'Göktaşı' dediler. Can bilime olan ilgisini o gün keşfetti."
    },
    {
      key: "story_t9_kopru",
      title: "Köprü Kuran Çocuklar",
      emoji: "🌉",
      text: "İki mahalle arasındaki dere taşmıştı. Köprü yıkılmıştı. Çocuklar toplandı, taş ve tahta topladılar. Birlikte köprü inşa ettiler. Büyükler hayretle izledi: birlikte her engel aşılır."
    },
    {
      key: "story_bilge_cocuk",
      title: "Bilge Çocuk",
      emoji: "📚",
      text: "Ali her gün kütüphaneye gider ve kitap okurdu. Bir gün sınıfta zor bir soru soruldu. Hiç kimse cevap veremedi, yalnızca Ali biliyordu. Öğretmeni Kitap okumanın gücü budur dedi. Ali o günden sonra arkadaşlarına da kitap okumayı sevdirdi."
    },
    {
      key: "story_kayip_kedi",
      title: "Kayıp Kedi",
      emoji: "🐱",
      text: "Mia kedisi Pamuk'u kaybetti. Mahallede Pamuk kayboldu diye afişler astı. Komşular Mia'ya yardım etti. Bir hafta sonra komşunun bahçesinde minik yavrularıyla birlikte buldular. Pamuk anne olmuştu!"
    },
    {
      key: "story_tohum_agac",
      title: "Küçük Tohum Büyük Ağaç",
      emoji: "🌱",
      text: "Büyükbaba torunu Efe'ye bir elma tohumu verdi. Ekersen büyür dedi. Efe toprağa dikti, her gün suladı. Yıllar geçti, küçük tohum koca bir elma ağacı oldu. İlk meyveyi birlikte yediler."
    },
    {
      key: "story_deniz_macerasi",
      title: "Deniz Macerası",
      emoji: "🌊",
      text: "Yaz tatilinde Selin deniz kenarında yunus gördü. Yunuslar ona yaklaştı ve oynamaya başladılar. Deniz canlıları arkadaştır dedi annesi. Selin o günden sonra denizi ve hayvanlarını korumaya yemin etti."
    },
    {
      key: "story_okul_gezisi",
      title: "Okul Gezisi",
      emoji: "🚌",
      text: "Sınıf fabrikayı ziyarete gitti. Fabrikada bisküvi üretimi nasıl olur gördüler. Ahmet bir şey öğrendi: Her yediğin şeyin arkasında emek var. O günden sonra israf etmedi."
    },
    {
      key: "story_masal_kitabi",
      title: "Masal Kitabı",
      emoji: "📖",
      text: "Elif kütüphanede eski bir kitap buldu. Sayfaları sararmış, kapağı yıpranmıştı. Okumaya başlayınca saatler geçti. En güzel hazineler kitaplarda saklıdır."
    },
    {
      key: "story_yeni_arkadasim",
      title: "Yeni Arkadaşım",
      emoji: "🤝",
      text: "Yeni öğrenci sınıfa girdi ve köşeye oturdu. Kimse konuşturmadı onu. Taner gidip yanına oturdu ve gülümsedi. O günden sonra ikisi en iyi arkadaş oldu."
    },
    {
      key: "story_doga_temizligi",
      title: "Doğa Temizliği",
      emoji: "♻️",
      text: "Parkta piknik yapan aile çöplerini doğaya bırakmadı. Hatta başkalarının çöplerini de topladı. Bir kuş gelip teşekkür eder gibi şakıdı. Doğayı sevmek onu korumaktır."
    },
    {
      key: "story_matematik_yarismasi",
      title: "Matematik Yarışması",
      emoji: "🔢",
      text: "Zeynep matematik yarışmasından korkuyordu. Ama her gece çalıştı. Yarışma gününde doğru cevabı verdi. Çalışmak korkuyu yener."
    },
    {
      key: "story_kitap_kurdu",
      title: "Kitap Kurdu",
      emoji: "📖",
      text: "Can her gün bir kitap okurdu. Arkadaşları 'kitap kurdu' diye dalga geçerdi. Yıl sonunda bilgi yarışmasına girdi ve birinci oldu. Ödülü olarak istediği şey bir kütüphaneydi."
    },
    {
      key: "story_yagmur_mevsimi",
      title: "Yağmur Mevsimi",
      emoji: "🌧️",
      text: "Selin yağmurlu havalarda dışarı çıkmak istemezdi. Bir gün annesiyle yağmurda yürüdüler. Islak toprak kokusu, sırılsıklam olmak... hepsi çok eğlenceliydi. Artık yağmurlu günleri seviyor."
    },
    {
      key: "story_duzgun_yol",
      title: "Doğru Tercih",
      emoji: "🛤️",
      text: "Ali cevabı bilen sınıf arkadaşından kopya çekmek istedi. Ama duraksadı. 'Kendim yaparsam daha iyi öğrenirim' dedi. Sınavdan düşük aldı ama bir sonrakinde en yüksek puanı o aldı."
    },
    {
      key: "story_minik_ressam",
      title: "Minik Ressam",
      emoji: "🎨",
      text: "Tuba çizdiği resimleri kimseye göstermezdi. Bir gün öğretmeni tablosunu gördü ve sınıfa astı. Herkes beğendi. Tuba anladı ki paylaşmak mutluluğu ikiye katlar."
    },
    {
      key: "story_dost_kedi",
      title: "Dost Kedi",
      emoji: "🐱",
      text: "Komşunun kedisi her gün Mert'in kapısına gelirdi. Mert onu içeri almıyordu. Bir kış gecesi dışarıda dona kalacaktı. Mert içeri aldı, ısıttı. O günden sonra kedi en iyi dostuydu."
    }
  ],
  ortaokul: [
    {
      key: "story_ataturk_cocuklugu",
      title: "Küçük Mustafa'nın Azmi",
      emoji: "🎖️",
      text: "Küçük Mustafa Selanik'te büyürdü. Öğrenmek için çok çalışırdı. Askeri okulda başarıyla okudu. Arkadaşları ona 'Kemal' adını verdi. Bu azimli çocuk ilerleyen yıllarda Türkiye'nin kurucusu Mustafa Kemal Atatürk olacaktı."
    },
    {
      key: "story_iklim_savasci",
      title: "İklim Savaşçısı",
      emoji: "🌱",
      text: "Elif, şehrindeki fabrikaların havayı kirlettiğini fark etti. Arkadaşlarıyla çevre kulübü kurdu. Belediyeye dilekçe yazdılar, okullarda bilinçlendirme yaptılar. Fabrikalar yavaş yavaş değişti. Küçük adımlar büyük fark yaratır."
    },
    {
      key: "story_gece_kutuphanesi",
      title: "Gece Kütüphanesi",
      emoji: "📚",
      text: "Kaan her gece kütüphaneye gider, ama açık olmadığından dışarıdan bakardı. Bir gün kütüphaneci bunu gördü ve anahtar verdi. Kaan geceleri okuyarak büyük bir yazar oldu. Bilgiye duyulan sevgi sınır tanımaz."
    },
    {
      key: "story_dijital_dunya",
      title: "Dijital Dünya ve Gerçek Hayat",
      emoji: "💻",
      text: "Mert günde 8 saat oyun oynuyordu. Bir gün gözleri ağrıdı, arkadaşlarıyla konuşamaz oldu. Doktoru 'Dijital detoks' dedi. Bir hafta dışarıda zaman geçirdi. Güneş, arkadaşlar ve spor hayatına renk kattı."
    },
    {
      key: "story_matematik_dahisi",
      title: "Matematik Dahisi",
      emoji: "🔢",
      text: "Lale matematiği seviyor ama korkuyordu. Öğretmeni bir gün 'Hatalar öğrenmenin kapısıdır' dedi. Lale her hatayı not aldı, üzerinde çalıştı. Olimpiyata girdi ve ödül kazandı. Korku değil, cesaret başarıya götürür."
    },
    {
      key: "story_deniz_altindaki_hazine",
      title: "Deniz Altındaki Hazine",
      emoji: "🌊",
      text: "Zekai dalış yapmayı öğreniyordu. Bir gün eski bir gemi enkazı buldu. İçinde altın yok ama kitaplar vardı: yüzyıllar öncesinden günlükler. Tarihçilere bildirdi; tarih yazıldı. En büyük hazine bilgidir."
    },
    {
      key: "story_robot_yarismasi",
      title: "Robot Yarışması",
      emoji: "🏆",
      text: "Okul takımı büyük robot yarışmasına hazırlanıyordu. Son gün robotları bozuldu. Tüm gece çalıştılar. Sabah robot yeniden çalıştı. Finale girdiler ve ikinci oldular. 'İkinciyiz!' diye üzüldüler. Öğretmen: 'Pes etmemeniz birinci ödülünüzdür' dedi."
    },
    {
      key: "story_yazar_olmak",
      title: "Yazar Olmak",
      emoji: "✍️",
      text: "Deren her gün günlük tutuyordu. Öğretmeni bir hikayesini okuyunca: 'Bunu yarışmaya gönder' dedi. Deren korktu ama gönderdi. Üçüncü oldu. Hikayesi çocuk dergisinde yayımlandı. Küçük kelimeler büyük dünyalar kurar."
    },
    {
      key: "story_yapay_zeka",
      title: "Yapay Zeka Arkadaşım",
      emoji: "🧠",
      text: "Can okulda bir yapay zeka projesi geliştirdi. Yapay zeka derslerinde yardımcı oluyordu. Ama bir gün yapay zeka: 'Seni anlayamıyorum, sen çok karmaşıksın' dedi. Can güldü. 'Biz insanız, bunu seviyoruz!' dedi. İnsan olmanın gizemi."
    },
    {
      key: "story_yeni_11",
      title: "Kod Yazan Kız",
      emoji: "💻",
      text: "Selin 12 yaşında kod yazmayı öğrendi. Bir uygulama geliştirdi: yaşlılara yardım için komşuluk ağı. Uygulaması ödül aldı. 'Teknolojiyi insanlar için kullanmak en anlamlısı' dedi. Geleceği gençler inşa eder."
    },
    {
      key: "story_yeni_12",
      title: "Matematik Yarışması",
      emoji: "🏆",
      text: "Mert matematik olimpiyatına hazırlandı. Günlerce çalıştı. Finalde zor bir soruyla karşılaştı. Sakinleşti, adım adım çözdü. Birincilik ödülünü kazandı. Sabır ve düzenli çalışma başarının sırrıdır."
    },
    {
      key: "story_yeni_13",
      title: "İklim Aktivisti",
      emoji: "🌍",
      text: "Deniz okulda iklim değişikliği hakkında araştırma yaptı. Belediyeye bir proje sundu: okul çatılarına güneş paneli. Belediye kabul etti. Deniz anladı: gençlerin sesi duyulabilir."
    },
    {
      key: "story_yeni_14",
      title: "Müzik Yolculuğu",
      emoji: "🎵",
      text: "Alp bir piyanist olmak istiyordu. Ailesi buna karşıydı. Ama o her gün pratik yaptı. Konservauvar sınavını kazandı. Ailesi gururlandı. Tutkuyla takip edilen hayaller gerçek olur."
    },
    {
      key: "story_yeni_15",
      title: "Uzay Araştırmacısı",
      emoji: "🚀",
      text: "Ayşe TÜBİTAK'a bir proje gönderdi: Mars'ta yaşam olasılığı. Projesi kabul edildi. Bilim insanlarıyla çalışmaya başladı. 'Evren sonsuz, merakımız sonsuz' dedi. Bilim insanı olmak bir tutkudur."
    },
    {
      key: "story_t9_bilge",
      title: "Bilgenin Sorusu",
      emoji: "🧠",
      text: "Ünlü bilge öğrencilerine şunu sordu: 'Dünyada en değerli şey nedir?' Kimi altın dedi, kimi güç. Genç Fatma kalktı: 'Bilgi' dedi, 'çünkü ne alınır ne çalınır.' Bilge güldü: 'Doğru söyledin, zira bilgi insanı özgür kılar.'"
    },
    {
      key: "story_t9_mucit",
      title: "Genç Mucit",
      emoji: "⚙️",
      text: "17 yaşındaki Emre, köyüne güneş enerjisiyle çalışan su pompası tasarladı. Malzemeleri hurdalıktan topladı. Aylarca çalıştı. Pompa çalışınca köylüler alkışladı. 'Hayal et, çalış, gerçekleştir' dedi Emre. Bilim çocuklarına kapılarını açar."
    },
    {
      key: "story_t9_miras",
      title: "Büyükannenin Mirası",
      emoji: "🏡",
      text: "Büyükannem öldüğünde bana eski bir günlük bıraktı. İçinde Anadolu'nun 1940'larını anlatan notlar vardı. Kıtlık, dayanışma, umut. Her satır derinden etkiledi beni. Tarihi kitaplarda değil, insanların kalbinde öğrendim."
    },
    {
      key: "story_t9_okyanus",
      title: "Okyanusun Sırrı",
      emoji: "🌊",
      text: "Dalgıç Defne derin sularda tuhaf bir ışık gördü. Yaklaştığında fosforesans bakteri kolonisiydi. Karanlıkta mavi ışıklar yayıyorlardı. Defne anladı: Doğada her şey bir amaç taşır. Keşfetmek için bakmak gerekir, ama görmek için düşünmek gerekir."
    },
    {
      key: "story_t9_tercih",
      title: "İki Yol",
      emoji: "🛤️",
      text: "Genç Ahmet üniversite sınavından önce ikilemde kaldı: hukuk mu, müzik mi? Babası hukuku istiyordu, kalbi müziği. Hocası dedi: 'Hangi seçim seni sabah mutlu kalkırır?' Ahmet müziği seçti. Yıllar sonra hem başarılı bir müzisyen oldu hem de hukuk okudu. Hiçbir kapı sonsuza dek kapalı değildir."
    },
    {
      key: "story_mucit_cocuk",
      title: "Genç Mucit",
      emoji: "⚙️",
      text: "Kerem her gün köyde elektrik olmadığı için ödevlerini yapamıyordu. Okulda güneş enerjisini öğrendi. Ahşap ve metal parçalardan küçük bir güneş paneli yaptı. Artık köyde ışık vardı. Köylüler ona Genç Mucit dedi."
    },
    {
      key: "story_tarih_yolculugu",
      title: "Tarihe Yolculuk",
      emoji: "🏛️",
      text: "Tarih dersinde uyuyakalan Deniz, rüyasında Osmanlı dönemine gitti. Topkapı Sarayı'nı gezdi, pazarlarda dolaştı. Sabah uyandığında defterine her şeyi yazdı. Öğretmeni o yazıyı okuyunca şaşırdı: Sen gerçekten yaşamışsın gibi yazmışsın!"
    },
    {
      key: "story_matematik_sirri",
      title: "Matematiğin Sırrı",
      emoji: "🔢",
      text: "Zeynep matematikten nefret ederdi. Bir gün yaşlı bir komşu ona Matematik dünyanın dilidir dedi ve altın oranı anlattı. Çiçeklerde, deniz kabuklarında, hatta yüzünde matematiksel desen gördü. Zeynep o gün matematiği sevmeye başladı."
    },
    {
      key: "story_sanal_dunya",
      title: "Sanal Dünya",
      emoji: "💻",
      text: "Can her gün saatlerce ekrana bakardı. Bir gün programlama öğrendi ve kendi oyununu yaptı. Arkadaşları oynadı ve beğendi. Ekranı tüketmek değil, üretmek için kullanmak gerekiyor dedi annesi. Can artık bir yapımcıydı."
    },
    {
      key: "story_siber_guvenlik",
      title: "Siber Güvenlik",
      emoji: "🔐",
      text: "Mehmet sosyal medyada tanımadığı biriyle arkadaş oldu. Biri ona şifresini sormaya başladı. Annesine söyledi. Sahte hesaplar tehlikelidir. Kişisel bilgilerini kimseyle paylaşma."
    },
    {
      key: "story_uzay_kasisifi",
      title: "Uzay Kaşifi",
      emoji: "🚀",
      text: "Lale NASA'nın bir yarışmasında proje hazırladı. Mars'a nasıl su taşınır konusunu araştırdı. Jüriden büyük beğeni aldı. Hayal kurmak, geleceği şekillendirir."
    },
    {
      key: "story_selcuklu_donemi",
      title: "Selçuklu'nun Kervansarayı",
      emoji: "🏛️",
      text: "Orta Asya'dan Anadolu'ya gelen tüccar kervansarayda konakladı. Selçuklular, yolcular için ücretsiz barınak kurmuştu. Bu cömertlik yüzyıllar öncesinden geliyordu. Paylaşmak insanlığın en güzel değeridir."
    },
    {
      key: "story_yapay_zeka",
      title: "Yapay Zeka ve Biz",
      emoji: "🤖",
      text: "Cemre bir yapay zeka yarattı. Yapay zeka ona sorular sordu. Cemre fark etti: İnsan, sorular soran varlıktır. Teknoloji insana hizmet etmeli, insanın yerini almamalı."
    },
    {
      key: "story_cu_bulbul",
      title: "Öğretmen Bülbül",
      emoji: "🐦",
      text: "Köy okulunda öğretmen yoktu. Bülbül adlı genç üniversite mezunu köye geldi. Çocuklara okuma yazmayı öğretti. On yıl sonra o köyden iki doktor, üç mühendis çıktı."
    },
    {
      key: "story_firtina_oncesi",
      title: "Fırtına Öncesi",
      emoji: "⛈️",
      text: "Deniz kıyısında büyüyen Naz, fırtınayı hep korkuyla beklerdi. Babası 'Fırtına geçmeden güneş daha güzel doğmaz' derdi. Bir gün gerçekten büyük bir fırtına geldi. Geçti. Ve güneş hayatında gördüğü en parlak ışıkla doğdu."
    },
    {
      key: "story_robot_arkadasim",
      title: "Robotik Arkadaş",
      emoji: "🤖",
      text: "Cemre bir yapay zeka yarattı. Yapay zeka ona sorular sordu. Cemre fark etti: İnsan, sorular soran varlıktır. Teknoloji insana hizmet etmeli, insanın yerini almamalı."
    },
    {
      key: "story_uzay_yolculugu",
      title: "Uzay Yolculuğu Hayali",
      emoji: "🚀",
      text: "Uğur her gece teleskopuyla gökyüzüne bakardı. Öğretmeni 'Astronot olmak istiyorsan matematik ve fen çalışmalısın' dedi. Uğur on yıl çalıştı. Sonunda uzay ajansının sınavını kazandı."
    },
    {
      key: "story_sessiz_kahraman",
      title: "Sessiz Kahraman",
      emoji: "🦸",
      text: "Okul koridorunda zorbalığa uğrayan bir çocuk gördü Yiğit. Herkes baktı, kimse müdahale etmedi. Yiğit öne çıktı, dur dedi. Bazen cesaret tek bir kelimedir."
    },
    {
      key: "story_yazar_olmak",
      title: "Yazar Olmak",
      emoji: "✍️",
      text: "İrem ilk hikayesini yazdığında sınıf güldü. 'Ben yazar olamam' dedi ve kalemini bıraktı. Yıllar sonra bir roman yazdı, ödül kazandı. Başkalarının gülüşü senin hikayeni bitiremez."
    }
  ]
};
const levelTabs = [
  { key: "okul_oncesi", label: "🌈 Okul Öncesi" },
  { key: "ilkokul", label: "📗 İlkokul" },
  { key: "ortaokul", label: "📘 Ortaokul" }
];
function StoriesPage() {
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const activeStories = lang === "en" ? storiesEn : lang === "es" ? storiesEs : lang === "fr" ? storiesFr : stories;
  const profile = getCurrentUser();
  reactExports.useEffect(() => {
    if (profile) trackContentVisit(profile.studentNumber, "stories");
  }, []);
  const [level, setLevel] = reactExports.useState(
    (profile == null ? void 0 : profile.level) || "ilkokul"
  );
  const [readTopics, setReadTopics] = reactExports.useState(
    () => profile ? getReadTopics(profile.studentNumber) : []
  );
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [speakingId, setSpeakingId] = reactExports.useState(null);
  const [comprehensionStory, setComprehensionStory] = reactExports.useState(null);
  const [comprAnswer, setComprAnswer] = reactExports.useState(null);
  const [comprStep, setComprStep] = reactExports.useState(0);
  const [comprScore, setComprScore] = reactExports.useState(0);
  const [comprDone, setComprDone] = reactExports.useState(false);
  const lookedUpWords = reactExports.useRef(/* @__PURE__ */ new Set());
  const [favKeys, setFavKeys] = reactExports.useState(() => {
    if (!profile) return /* @__PURE__ */ new Set();
    return new Set(
      ["story"].flatMap(
        () => Object.keys(stories).flatMap(
          (lvl) => stories[lvl].filter(
            (s) => isFavorite(profile.studentNumber, "story", s.key)
          ).map((s) => s.key)
        )
      )
    );
  });
  function handleToggleFav(s) {
    if (!profile) return;
    const added = toggleFavorite(profile.studentNumber, {
      type: "story",
      key: s.key,
      title: s.title,
      emoji: s.emoji
    });
    setFavKeys((prev) => {
      const next = new Set(prev);
      if (added) next.add(s.key);
      else next.delete(s.key);
      return next;
    });
  }
  reactExports.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);
  const handleSpeak = (id, text) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    } else {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = lang === "en" ? "en-US" : lang === "es" ? "es-ES" : lang === "fr" ? "fr-FR" : "tr-TR";
      utt.onend = () => setSpeakingId(null);
      setSpeakingId(id);
      window.speechSynthesis.speak(utt);
    }
  };
  const filteredStories = activeStories[level].filter(
    (s) => s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const COMPREHENSION_QUESTIONS = [
    {
      q_tr: "Bu hikayeyi okumak nasıl bir his uyandırdı?",
      q_en: "How did reading this story make you feel?",
      options_tr: ["Mutlu 😊", "Düşündürücü 🤔", "Heyecanlı 🎉", "Hüzünlü 😢"],
      options_en: ["Happy 😊", "Thoughtful 🤔", "Excited 🎉", "Sad 😢"]
    },
    {
      q_tr: "Hikayenin vermek istediği mesaj neydi?",
      q_en: "What was the main message of the story?",
      options_tr: [
        "İyilik güzeldir",
        "Çalışmak önemli",
        "Arkadaşlık değerli",
        "Bilgi güçtür"
      ],
      options_en: [
        "Kindness matters",
        "Hard work pays off",
        "Friendship is precious",
        "Knowledge is power"
      ]
    },
    {
      q_tr: "Bu hikayeyi bir arkadaşına anlatır mıydın?",
      q_en: "Would you recommend this story to a friend?",
      options_tr: [
        "Kesinlikle evet! ⭐⭐⭐",
        "Evet, anlatırdım ⭐⭐",
        "Belki ⭐",
        "Hayır"
      ],
      options_en: [
        "Definitely yes! ⭐⭐⭐",
        "Yes, I would ⭐⭐",
        "Maybe ⭐",
        "No"
      ]
    }
  ];
  const handleRead = (key, title) => {
    if (!profile || readTopics.includes(key)) return;
    markTopicRead(profile.studentNumber, key);
    updatePoints(profile.studentNumber, 10);
    incrementDailyContentRead(profile.studentNumber);
    incrementWeeklyStories(profile.studentNumber);
    setReadTopics((prev) => [...prev, key]);
    setComprAnswer(null);
    setComprStep(0);
    setComprScore(0);
    setComprehensionStory({ key, title, level });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-rose-500 to-pink-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          "data-ocid": "stories.back_button",
          variant: "ghost",
          onClick: () => navigate({ to: "/home" }),
          className: "text-white mb-4",
          children: "← Geri"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-black text-white mb-4", children: [
        "📖 ",
        t("stories_title")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: "/reading-fluency" }),
          className: "w-full mb-4 py-2 px-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-sm",
          children: "📖⏱️ Okuma Akıcılığı Modu"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-6", children: levelTabs.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "stories.tab",
          onClick: () => setLevel(t2.key),
          className: `py-3 rounded-2xl font-bold text-xs transition-all ${level === t2.key ? "bg-white text-rose-600" : "bg-white/20 text-white hover:bg-white/30"}`,
          children: t2.label
        },
        t2.key
      )) }),
      (() => {
        const total = activeStories[level].length;
        const done = activeStories[level].filter(
          (s) => readTopics.includes(s.key)
        ).length;
        const pct = total > 0 ? Math.round(done / total * 100) : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-2xl p-3 mb-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📚" }),
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
                className: "h-full bg-green-400 rounded-full transition-all duration-500",
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
          "data-ocid": "stories.search_input",
          placeholder: `🔍 ${t("search_placeholder")}`,
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          className: "w-full bg-white/20 text-white placeholder-white/50 rounded-2xl px-4 py-3 text-sm font-medium outline-none focus:bg-white/30 transition-all"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredStories.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-white/60 py-8", children: "Sonuç bulunamadı 🔍" }) : filteredStories.map((s) => {
        const isRead = readTopics.includes(s.key);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-white/20 backdrop-blur rounded-2xl p-5 transition-all ${isRead ? "border-2 border-green-300" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: s.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-black text-lg flex-1", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleToggleFav(s),
                    className: "text-xl hover:scale-125 transition-transform",
                    title: favKeys.has(s.key) ? "Favoriden çıkar" : "Favorilere ekle",
                    children: favKeys.has(s.key) ? "⭐" : "☆"
                  }
                ),
                isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-xl", children: "✓" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm leading-relaxed mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                WordDefinitionTooltip,
                {
                  text: s.text,
                  lookedUpWords: lookedUpWords.current,
                  onWordLookup: (word) => {
                    lookedUpWords.current.add(word);
                    if (profile) updatePoints(profile.studentNumber, 5);
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "stories.listen_button",
                  onClick: () => handleSpeak(s.key, s.text),
                  className: "bg-white/20 hover:bg-white/40 text-white text-xs font-bold px-3 py-1 rounded-full transition-all mr-2 mb-2",
                  children: speakingId === s.key ? `⏹ ${t("stop")}` : `🔊 ${t("listen")}`
                }
              ),
              !isRead && profile && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "stories.read_button",
                  onClick: () => handleRead(s.key, s.title),
                  className: "bg-white/30 hover:bg-white/50 text-white text-xs font-bold px-4 py-2 rounded-full transition-all",
                  children: "📖 Okudum! +10 puan"
                }
              ),
              isRead && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-300 text-xs font-bold", children: "✅ Okundu (+10 puan kazanıldı)" })
            ]
          },
          s.key
        );
      }) })
    ] }),
    comprehensionStory && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-slate-800 rounded-3xl p-6 w-full max-w-sm relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setComprehensionStory(null),
          className: "absolute top-4 right-4 text-white/60 hover:text-white text-2xl font-bold leading-none",
          children: "×"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-black text-lg mb-1 pr-8", children: [
        "📖 ",
        comprehensionStory.title
      ] }),
      comprStep < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/50 text-xs mb-4", children: lang === "en" ? `Question ${comprStep + 1}/3` : `Soru ${comprStep + 1}/3` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-bold text-sm mb-4", children: lang === "en" ? COMPREHENSION_QUESTIONS[comprStep].q_en : COMPREHENSION_QUESTIONS[comprStep].q_tr }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (lang === "en" ? COMPREHENSION_QUESTIONS[comprStep].options_en : COMPREHENSION_QUESTIONS[comprStep].options_tr).map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            disabled: comprAnswer !== null,
            onClick: () => {
              setComprAnswer(idx);
              setTimeout(() => {
                const nextStep = comprStep + 1;
                const nextScore = comprScore + 1;
                if (comprStep === 2) {
                  setComprStep(3);
                  setComprScore(nextScore);
                  if (profile)
                    updatePoints(profile.studentNumber, 15);
                  setComprehensionStory(
                    (prev) => prev ? { ...prev } : null
                  );
                  setComprDone(true);
                  setTimeout(() => {
                    setComprDone(false);
                    setComprehensionStory(null);
                  }, 2e3);
                } else {
                  setComprStep(nextStep);
                  setComprScore(nextScore);
                  setComprAnswer(null);
                }
              }, 600);
            },
            className: `w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${comprAnswer === idx ? "bg-yellow-400 text-yellow-900" : "bg-white/10 text-white hover:bg-white/20"}`,
            children: opt
          },
          opt
        )) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎉" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white font-black text-2xl mb-1", children: [
          comprScore,
          "/3 ✨"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-yellow-400 font-bold text-sm", children: lang === "en" ? "+15 points earned!" : "+15 puan kazandın!" })
      ] })
    ] }) }),
    comprDone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-black px-6 py-3 rounded-full shadow-2xl z-50 text-sm animate-bounce", children: "✨ +15 puan kazandın!" })
  ] });
}
export {
  StoriesPage as default
};
