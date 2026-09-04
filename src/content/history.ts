import type { Locale } from '@/lib/i18n';
import { lockingHistoryFi } from './fi.generated';
import { lockingHistoryKo } from './ko.generated';

type HistoryStory = {
  intro: string;
  originTitle: string;
  origin: string[];
  sections: Array<{
    period: string;
    title: string;
    paragraphs: string[];
    video?: {
      src: string;
      title: string;
      caption: string;
    };
  }>;
  worldTitle: string;
  world: string[];
  distinctionTitle: string;
  distinction: string[];
  sourceNoteTitle: string;
  sourceNote: string;
  sourcesTitle: string;
  sources: Array<{ label: string; url: string }>;
};

export const lockingHistory: Record<Locale, HistoryStory> = {
  sv: {
    intro:
      'Locking växte fram ur afroamerikanska sociala dansmiljöer och funkkulturen i Los Angeles kring skiftet mellan 1960- och 1970-talet. Det här är inte historien om ett färdigt rörelsespråk som uppstod på en dag, utan om en personlig stil som mötte ett levande dansgolv och utvecklades genom många människors kreativitet.',
    originTitle: 'Don Campbell och The Campbellock',
    origin: [
      'Don Campbell skapade det uttryck som först kallades The Campbellock vid Los Angeles Trade-Technical College. The Lockers egen historiesida daterar början till slutet av 1969, medan andra deltagarnära tidslinjer anger 1970. Hans plötsliga stopp, rytmiska pauser, blickar, pekningar och stora gester blev ett eget sätt att svara på musiken och publiken. Där börjar berättelsen om Locking.',
      'Stilen formades inte i ett vakuum. Den bar med sig tidens sociala partydanser, soul, funk, improvisation, humor och den stolthet som präglade många afroamerikanska mötesplatser i Los Angeles. Don var upphovspersonen, medan mötena med andra dansare gjorde uttrycket större, rikare och möjligt att föra vidare.',
    ],
    sections: [
      {
        period: '1969–1971',
        title: 'Klubbarna och den ursprungliga scenen',
        paragraphs: [
          'På platser som The Citadel, The Summit on the Hill och Maverick’s Flat möttes dansare från bland annat Watts, South Central, Compton och Inglewood. Där delades idéer, steg, attityd och musikalitet. Varje dansare hade sin karaktär, och improvisationen var central.',
          'Bland de tidiga namnen finns Don Campbell, Damita Jo Freeman, Greg “Campbellock Jr.” Pope, Jimmy “Scoo B Doo” Foster, Fred “Mr. Penguin” Berry, Leo “Fluky Luke” Williamson, Tony och Buddy GoGo, Kevin “YoYo” Lombard, James “O.G. Skeeter Rabbit” Higgins, Arnetta “Netta Bug” Johnson och flera andra. Listan är större än de personer som senare blev mest synliga i media.',
        ],
      },
      {
        period: 'Från 2 oktober 1971',
        title: 'Ett lokalt uttryck blir synligt',
        paragraphs: [
          'Den 2 oktober 1971 började Soul Train sändas nationellt från Los Angeles. Programmet gav dansarna och musiken en scen inför en mycket större publik. Locks, points, hand slaps, splits och starka individuella karaktärer blev synliga långt utanför de klubbar där stilen hade vuxit fram.',
          'TV-exponeringen spred inspiration, men en bild på en skärm kunde inte bära hela den sociala kunskapen. Därför behöver stegen alltid förstås tillsammans med människorna, platserna, musiken och den kultur som gav dem mening.',
        ],
        video: {
          src: '/media/history/don-campbell-damita-jo-don-cornelius.mp4',
          title: 'Intervju med Don Campbell och Damita Jo Freeman',
          caption: 'Don “Campbellock” Campbell och Damita Jo Freeman intervjuas av Don Cornelius, 1971.',
        },
      },
      {
        period: '1972–1973',
        title: 'Från individuella stilar till grupper',
        paragraphs: [
          'GoGo Brothers och den större GoGo/YoYo-familjen utvecklade synkroniserade steg, handskakningar, sketcher och rutiner. Under 1972 och in i 1973 samlade Creative Generation kvinnliga och manliga dansare genom Watts Writers Workshop och förde samman undervisning, scenarbete och gemenskap.',
          'Enligt The Lockers egen historiesida framträdde gruppen som blev The Lockers i en ABC-special med Roberta Flack den 19 juni 1973. Den annonserades först som The Campbellockers medan uppsättningen fortfarande förändrades. Samma källa daterar det officiella namnbytet till den 23 oktober, de sju originalmedlemmarnas gemensamma framträdande under namnet The Lockers till den 23 november och CMA-kontraktet till den 14 december 1973.',
        ],
      },
      {
        period: 'Mitten av 1970-talet',
        title: 'Fler grupper, fler röster',
        paragraphs: [
          'The Lockers var aldrig hela Locking-scenen. Grupper som 33RPM, The Ghetto Dancers och Something Special, liksom många fristående klubb- och streetdansare, bar utvecklingen vidare. De skapade egna kombinationer och höll kontakten mellan social dans, scen och tävling levande.',
          'När Locking spreds från stadsdelar i South Los Angeles till andra delar av södra Kalifornien och vidare över USA uppstod både nya möten och missförstånd. Kunskap som förmedlades genom personliga möten kunde bära med sig mer av dansens sammanhang än rörelser som enbart återskapades från TV eller film.',
        ],
      },
      {
        period: '1980-talet och framåt',
        title: 'Film, resor och en global dans',
        paragraphs: [
          'Filmer som Breakin’ och Breakin’ 2 gav västkustens streetdanser en enorm internationell synlighet. Samtidigt blandades benämningar och olika dansformer ofta ihop, vilket är en del av förklaringen till att orden locking, popping, breaking och “poplocking” fortfarande kan användas otydligt.',
          'Direkta möten fick stor betydelse. Something Special, med Jimmy “Scoo B Doo” Foster, visade Locking i Japan under 1970-talet. Tony GoGo flyttade senare till Japan och undervisade under årtionden. På liknande sätt har resor, workshops, VHS-band, filmer och senare internet byggt broar mellan Los Angeles och scener över hela världen.',
        ],
      },
    ],
    worldTitle: 'Locking får lokala historier',
    world: [
      'I dag finns starka Locking-kulturer i bland annat Japan, Storbritannien, Frankrike, Danmark, Sverige, Korea, Brasilien, Tyskland, Nederländerna, Kina och många andra länder. Varje plats har sin egen berättelse: vem som först visade dansen, vilka som sökte kunskap vid källan, vilka crews och klubbar som byggde en scen och vilka events som samlade nästa generation.',
      'De lokala berättelserna är också värda att dokumentera. De visar hur en kultur färdas, tolkas och får nya uttryck, samtidigt som kopplingen till ursprunget kan bevaras. Sveriges historia är därför en del av Lockingens fortsatta resa, inte en ersättning för historien från Los Angeles.',
    ],
    distinctionTitle: 'Pionjär – men i vilket sammanhang?',
    distinction: [
      'På den här sidan skiljer vi mellan pionjärerna från Lockingens ursprungsera i Los Angeles – de personer som skapade eller tidigt utvecklade dansen – och pionjärer som senare etablerade Locking i ett visst land eller på en lokal scen. Den som var först med att bygga upp Locking i exempelvis Sverige kan med rätta beskrivas som en svensk Locking-pionjär, utan att därför tillskrivas rollen som upphovsperson till dansen.',
      'Båda insatserna förtjänar erkännande. Genom att beskriva sammanhanget tydligt kan vi hedra både dansens källa och dem som har undervisat, organiserat och byggt nya scener för kommande generationer.',
    ],
    sourceNoteTitle: 'En levande historia',
    sourceNote:
      'Historien bygger på dokumentation, förstahandsberättelser och minnen som ibland skiljer sig åt. Pionjär-, grupp- och familjedrivna webbplatser är värdefulla deltagarnära källor men kan också representera ett särskilt perspektiv; exakta datum och upphovsuppgifter behöver därför jämföras med fler oberoende dokument. Sidan fortsätter att utvecklas när fler röster och källor tillkommer.',
    sourcesTitle: 'Källor och vidare läsning',
    sources: [
      { label: 'LockerLegends – Our Story of the History of Locking', url: 'https://www.lockerlegends.net/history-of-locking/' },
      { label: 'LockerLegends – The Time Line of Locking', url: 'https://www.lockerlegends.net/the-time-line-of-locking/' },
      { label: 'The Lockers – About', url: 'https://www.thelockersdance.com/about' },
      { label: 'Campbellock.dance', url: 'https://campbellock.dance/' },
    ],
  },
  en: {
    intro:
      'Locking grew from African American social dance spaces and the funk culture of Los Angeles around the turn of the 1970s. It was not a finished vocabulary invented in one day, but a personal style meeting a living dance floor and expanding through the creativity of many people.',
    originTitle: 'Don Campbell and The Campbellock',
    origin: [
      'Don Campbell created the expression first called The Campbellock at Los Angeles Trade-Technical College. The Lockers’ own history dates its beginning to late 1969, while other participant-adjacent timelines give 1970. His sudden stops, rhythmic pauses, looks, points and large gestures became a distinct way of answering the music and the audience. This is where the story of Locking begins.',
      'The style carried the social party dances, soul, funk, improvisation, humour and pride found in many African American gathering places in Los Angeles. Don was the originator; encounters with other dancers made the form larger, richer and possible to pass on.',
    ],
    sections: [
      {
        period: '1969–1971',
        title: 'The clubs and the original scene',
        paragraphs: [
          'At places including The Citadel, The Summit on the Hill and Maverick’s Flat, dancers from Watts, South Central, Compton, Inglewood and beyond exchanged ideas, steps, attitude and musicality. Each dancer had a character of their own, and improvisation was central.',
          'The early names include Don Campbell, Damita Jo Freeman, Greg “Campbellock Jr.” Pope, Jimmy “Scoo B Doo” Foster, Fred “Mr. Penguin” Berry, Leo “Fluky Luke” Williamson, Tony and Buddy GoGo, Kevin “YoYo” Lombard, James “O.G. Skeeter Rabbit” Higgins, Arnetta “Netta Bug” Johnson and many more. The scene was larger than the group of people who later became most visible in media.',
        ],
      },
      {
        period: 'From October 2, 1971',
        title: 'A local expression becomes visible',
        paragraphs: [
          'On October 2, 1971, Soul Train began its national run from Los Angeles. The program gave the dancers and the music a much larger stage. Locks, points, hand slaps, splits and strong individual characters became visible far beyond the clubs where the style had grown.',
          'Television spread inspiration, but an image on a screen could not carry all of the social knowledge. The steps therefore belong together with the people, places, music and culture that gave them meaning.',
        ],
        video: {
          src: '/media/history/don-campbell-damita-jo-don-cornelius.mp4',
          title: 'Interview with Don Campbell and Damita Jo Freeman',
          caption: 'Don “Campbellock” Campbell and Damita Jo Freeman interviewed by Don Cornelius, 1971.',
        },
      },
      {
        period: '1972–1973',
        title: 'From individual styles to groups',
        paragraphs: [
          'The GoGo Brothers and the wider GoGo/YoYo family developed synchronized steps, handshakes, skits and routines. During 1972 and into 1973, Creative Generation brought women and men together through the Watts Writers Workshop, joining teaching, performance and community.',
          'According to The Lockers’ own history, the group that became The Lockers appeared in an ABC special featuring Roberta Flack on June 19, 1973. It was first announced as The Campbellockers while the lineup was still changing. The same source dates the official name change to October 23, the seven original members’ joint performance under The Lockers name to November 23, and the CMA contract to December 14, 1973.',
        ],
      },
      {
        period: 'Mid-1970s',
        title: 'More groups, more voices',
        paragraphs: [
          'The Lockers were never the whole Locking scene. Groups such as 33RPM, The Ghetto Dancers and Something Special, along with independent club and street dancers, carried the development forward.',
          'As Locking spread from neighbourhoods in South Los Angeles to other parts of Southern California and across the United States, it produced both new encounters and misunderstandings. Knowledge shared through personal exchange could carry more of the dance’s context than movement recreated only from television or film.',
        ],
      },
      {
        period: '1980s onward',
        title: 'Film, travel and a global dance',
        paragraphs: [
          'Breakin’ and Breakin’ 2 gave West Coast street dance enormous international visibility. They also contributed to different forms and names being mixed together, one reason locking, popping, breaking and “poplocking” are still sometimes used imprecisely.',
          'Direct exchange mattered. Something Special, featuring Jimmy “Scoo B Doo” Foster, showed Locking in Japan during the 1970s. Tony GoGo later moved to Japan and taught for decades. Travel, workshops, VHS tapes, films and eventually the internet built bridges from Los Angeles to scenes around the world.',
        ],
      },
    ],
    worldTitle: 'Locking develops local histories',
    world: [
      'Today there are strong Locking cultures in Japan, the United Kingdom, France, Denmark, Sweden, Korea, Brazil, Germany, the Netherlands, China and many other countries. Each place has its own story: who first showed the dance, who sought knowledge at the source, which crews and clubs built a scene and which events gathered the next generation.',
      'These local stories also deserve documentation. They show how a culture travels, is interpreted and finds new expressions while its connection to the origin can be preserved. Sweden’s history is therefore part of Locking’s continuing journey, not a replacement for its Los Angeles origin story.',
    ],
    distinctionTitle: 'A pioneer—but in which context?',
    distinction: [
      'On this site, we distinguish between pioneers from Locking’s original Los Angeles era—the people who created or developed the dance early on—and pioneers who later established Locking in a particular country or local scene. Someone who helped build Locking in Sweden can rightly be described as a Swedish Locking pioneer without being presented as an originator of the dance itself.',
      'Both contributions deserve recognition. Clear context allows us to honour the dance’s source as well as those who taught, organised and built new scenes for later generations.',
    ],
    sourceNoteTitle: 'A living history',
    sourceNote:
      'This history draws on documentation, first-hand accounts and memories that do not always agree. Pioneer-, group- and family-run websites are valuable participant-adjacent sources, but they may also represent a particular perspective; exact dates and creator claims should therefore be compared with further independent records. This page will keep developing as more voices and sources are added.',
    sourcesTitle: 'Sources and further reading',
    sources: [
      { label: 'LockerLegends – Our Story of the History of Locking', url: 'https://www.lockerlegends.net/history-of-locking/' },
      { label: 'LockerLegends – The Time Line of Locking', url: 'https://www.lockerlegends.net/the-time-line-of-locking/' },
      { label: 'The Lockers – About', url: 'https://www.thelockersdance.com/about' },
      { label: 'Campbellock.dance', url: 'https://campbellock.dance/' },
    ],
  },
  fr: {
    intro:
      'Le Locking est né dans les espaces de danse sociale afro-américains et la culture funk de Los Angeles au tournant des années 1970. Il ne s’agissait pas d’un vocabulaire achevé inventé en un jour, mais d’un style personnel qui a rencontré une piste de danse vivante et s’est développé grâce à la créativité de nombreuses personnes.',
    originTitle: 'Don Campbell et The Campbellock',
    origin: [
      'Don Campbell a créé l’expression d’abord appelée The Campbellock au Los Angeles Trade-Technical College. L’histoire racontée par The Lockers situe ses débuts à la fin de 1969, tandis que d’autres chronologies proches des participants indiquent 1970. Ses arrêts soudains, ses pauses rythmiques, ses regards, ses points et ses gestes amples sont devenus une manière singulière de répondre à la musique et au public. C’est ici que commence l’histoire du Locking.',
      'Ce style portait en lui les social party dances, la soul, le funk, l’improvisation, l’humour et la fierté présents dans de nombreux lieux de rencontre afro-américains de Los Angeles. Don en fut l’initiateur ; les échanges avec d’autres danseurs ont rendu cette forme plus vaste, plus riche et transmissible.',
    ],
    sections: [
      {
        period: '1969–1971',
        title: 'Les clubs et la scène originelle',
        paragraphs: [
          'Dans des lieux comme The Citadel, The Summit on the Hill et Maverick’s Flat, des danseurs de Watts, South Central, Compton, Inglewood et d’ailleurs échangeaient idées, pas, attitude et musicalité. Chacun possédait son propre personnage, et l’improvisation occupait une place centrale.',
          'Parmi les premiers noms figurent Don Campbell, Damita Jo Freeman, Greg « Campbellock Jr. » Pope, Jimmy « Scoo B Doo » Foster, Fred « Mr. Penguin » Berry, Leo « Fluky Luke » Williamson, Tony et Buddy GoGo, Kevin « YoYo » Lombard, James « O.G. Skeeter Rabbit » Higgins, Arnetta « Netta Bug » Johnson et bien d’autres. La scène dépassait largement le groupe de personnes qui allait plus tard devenir le plus visible dans les médias.',
        ],
      },
      {
        period: 'À partir du 2 octobre 1971',
        title: 'Une expression locale devient visible',
        paragraphs: [
          'Le 2 octobre 1971, Soul Train a commencé sa diffusion nationale depuis Los Angeles. L’émission a offert aux danseurs et à la musique une scène bien plus vaste. Locks, points, hand slaps, splits et personnages très affirmés sont devenus visibles bien au-delà des clubs où le style s’était développé.',
          'La télévision a diffusé l’inspiration, mais une image à l’écran ne pouvait transmettre tout le savoir social. Les pas sont donc indissociables des personnes, des lieux, de la musique et de la culture qui leur ont donné leur sens.',
        ],
        video: {
          src: '/media/history/don-campbell-damita-jo-don-cornelius.mp4',
          title: 'Entretien avec Don Campbell et Damita Jo Freeman',
          caption: 'Don « Campbellock » Campbell et Damita Jo Freeman, interviewés par Don Cornelius en 1971.',
        },
      },
      {
        period: '1972–1973',
        title: 'Des styles individuels aux groupes',
        paragraphs: [
          'Les GoGo Brothers et la famille élargie GoGo/YoYo ont développé des pas synchronisés, des poignées de main, des sketches et des routines. De 1972 à 1973, Creative Generation a réuni femmes et hommes par l’intermédiaire du Watts Writers Workshop, en associant enseignement, scène et communauté.',
          'D’après l’histoire de The Lockers, le groupe qui allait devenir The Lockers est apparu le 19 juin 1973 dans une émission spéciale d’ABC avec Roberta Flack. Il fut d’abord annoncé sous le nom de The Campbellockers, alors que la composition évoluait encore. La même source date le changement officiel de nom au 23 octobre, la prestation commune des sept membres originaux sous le nom The Lockers au 23 novembre, et la signature du contrat avec CMA au 14 décembre 1973.',
        ],
      },
      {
        period: 'Milieu des années 1970',
        title: 'Davantage de groupes, davantage de voix',
        paragraphs: [
          'The Lockers n’ont jamais représenté toute la scène Locking. Des groupes comme 33RPM, The Ghetto Dancers et Something Special, ainsi que des danseurs indépendants issus des clubs et de la rue, ont poursuivi son développement.',
          'À mesure que le Locking se diffusait des quartiers du sud de Los Angeles vers d’autres parties de la Californie du Sud et des États-Unis, il suscitait de nouvelles rencontres, mais aussi des malentendus. Un savoir transmis directement de personne à personne pouvait préserver davantage du contexte de la danse qu’un mouvement reproduit uniquement à partir de la télévision ou du cinéma.',
        ],
      },
      {
        period: 'À partir des années 1980',
        title: 'Le cinéma, les voyages et une danse mondiale',
        paragraphs: [
          'Breakin’ et Breakin’ 2 ont donné une immense visibilité internationale aux street dances de la côte Ouest. Ils ont également contribué au mélange de différentes formes et appellations, ce qui explique en partie pourquoi locking, popping, breaking et « poplocking » sont encore parfois employés de manière imprécise.',
          'Les échanges directs ont compté. Something Special, avec Jimmy « Scoo B Doo » Foster, a présenté le Locking au Japon dans les années 1970. Tony GoGo s’y est ensuite installé et y a enseigné pendant des décennies. Voyages, workshops, cassettes VHS, films puis Internet ont créé des ponts entre Los Angeles et les scènes du monde entier.',
        ],
      },
    ],
    worldTitle: 'Le Locking développe des histoires locales',
    world: [
      'Il existe aujourd’hui de fortes cultures Locking au Japon, au Royaume-Uni, en France, au Danemark, en Suède, en Corée, au Brésil, en Allemagne, aux Pays-Bas, en Chine et dans bien d’autres pays. Chaque lieu possède sa propre histoire : qui a montré la danse en premier, qui est allé chercher le savoir à la source, quels crews et clubs ont bâti une scène et quels événements ont rassemblé la génération suivante.',
      'Ces histoires locales méritent elles aussi d’être documentées. Elles montrent comment une culture voyage, est interprétée et trouve de nouvelles expressions tout en préservant son lien avec ses origines. L’histoire suédoise fait donc partie du parcours continu du Locking ; elle ne remplace pas son histoire fondatrice à Los Angeles.',
    ],
    distinctionTitle: 'Pionnier — mais dans quel contexte ?',
    distinction: [
      'Sur ce site, nous distinguons les pionniers de la période fondatrice du Locking à Los Angeles — celles et ceux qui ont créé ou développé la danse à ses débuts — des pionniers qui ont ensuite établi le Locking dans un pays ou une scène locale donnée. Une personne ayant contribué à bâtir le Locking en Suède peut à juste titre être qualifiée de pionnière suédoise du Locking, sans être présentée comme étant à l’origine de la danse elle-même.',
      'Ces deux types de contribution méritent d’être reconnus. Un contexte clair permet d’honorer à la fois la source de la danse et celles et ceux qui ont enseigné, organisé et construit de nouvelles scènes pour les générations suivantes.',
    ],
    sourceNoteTitle: 'Une histoire vivante',
    sourceNote:
      'Cette histoire s’appuie sur des documents, des témoignages directs et des souvenirs qui ne concordent pas toujours. Les sites gérés par des pionniers, des groupes ou leurs familles constituent de précieuses sources proches des participants, mais peuvent aussi refléter un point de vue particulier ; les dates précises et les attributions doivent donc être comparées à d’autres archives indépendantes. Cette page continuera d’évoluer à mesure que de nouvelles voix et sources seront ajoutées.',
    sourcesTitle: 'Sources et lectures complémentaires',
    sources: [
      { label: 'LockerLegends – Our Story of the History of Locking', url: 'https://www.lockerlegends.net/history-of-locking/' },
      { label: 'LockerLegends – The Time Line of Locking', url: 'https://www.lockerlegends.net/the-time-line-of-locking/' },
      { label: 'The Lockers – About', url: 'https://www.thelockersdance.com/about' },
      { label: 'Campbellock.dance', url: 'https://campbellock.dance/' },
    ],
  },
  fi: lockingHistoryFi,
  ko: lockingHistoryKo,
};
