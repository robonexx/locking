import type { Locale } from '@/lib/i18n';

type HistoryStory = {
  intro: string;
  originTitle: string;
  origin: string[];
  sections: Array<{
    period: string;
    title: string;
    paragraphs: string[];
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
};
