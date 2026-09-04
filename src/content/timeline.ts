import type { Locale } from '@/lib/i18n';
import { timelineFi } from './fi.generated';
import { timelineKo } from './ko.generated';
import { timelineJa } from './ja.generated';
import { timelineZh } from './zh.generated';

export type TimelineEvent = {
  period: string;
  title: string;
  description: string;
  names?: string[];
  keyEvent?: boolean;
};

export type TimelineEra = {
  range: string;
  title: string;
  intro: string;
  events: TimelineEvent[];
};

type TimelineContent = {
  introTitle: string;
  intro: string[];
  keyEventLabel: string;
  branchLabel: string;
  peopleLabel: string;
  sourceTitle: string;
  sourceText: string[];
  openImage: string;
  downloadPdf: string;
  chartAlt: [string, string];
  chartCaption: [string, string];
  sourcesTitle: string;
  eras: TimelineEra[];
};

export const timelineContent: Record<Locale, TimelineContent> = {
  sv: {
    introTitle: 'En karta över människor, platser och överföring',
    intro: [
      'Den här tidslinjen är en redaktionell bearbetning av Locking History Chart, krediterad till Steven Notario i PDF-filens metadata. Diagrammet bygger inte bara en rak följd av årtal: det visar hur dansen fördes vidare mellan klubbar, TV-produktioner, workshops, ensembler och personliga möten.',
      'För läsbarhet har de många pilarna samlats i tre perioder. Händelserna följer diagrammets dateringar och benämningar, men formuleringarna här är varsamt sammanfattade och placerade i sitt afroamerikanska Los Angeles-sammanhang.',
    ],
    keyEventLabel: 'Nyckelhändelse',
    branchLabel: 'Gren i diagrammet',
    peopleLabel: 'Namn i diagrammet',
    sourceTitle: 'Om originaldiagrammet',
    sourceText: [
      'Originalet innehåller specifika datum, namnlistor och undervisningslinjer. Det är en viktig deltagarnära källa, men en sådan karta är inte samma sak som en slutgiltig historisk facitlista. Exempelvis anger diagrammet juli 1970 för The Campbellocks början, medan The Lockers dokumentbaserade historiesida anger slutet av 1969. Minnesbilder, stavningar och dateringar kan skilja sig mellan källor.',
      'Nedan kan du öppna båda diagramsidorna i full storlek eller ladda ned PDF-originalet. På så sätt går det alltid att jämföra webbversionens sammanfattningar med källmaterialet.',
    ],
    openImage: 'Öppna sidan i full storlek',
    downloadPdf: 'Ladda ned originaldiagrammet som PDF',
    chartAlt: [
      'Första sidan av Locking History Chart med händelser från 1970 till 1972.',
      'Andra sidan av Locking History Chart med grupper och undervisningslinjer från 1973 till 2007.',
    ],
    chartCaption: [
      'Sida 1 - skapandet, klubbarna, Soul Train, Wattstax och de första grupperna, 1970-1972.',
      'Sida 2 - The Lockers, parallella grupper och internationell överföring, 1973-2007.',
    ],
    sourcesTitle: 'Källor och vidare läsning',
    eras: [
      {
        range: '1970-1972',
        title: 'Från Campbellock till en växande scen',
        intro: 'De första åren knyter samman Don Campbells personliga uttryck med klubbarna, dansarna och de afroamerikanska kulturmiljöer där Locking blev en gemensam rörelse.',
        events: [
          {
            period: 'Juli 1970',
            title: 'The Campbellock tar form',
            description: 'Diagrammet placerar början vid Trade Tech College. Don Campbell stannar mitt i dåtidens sociala danser och uppmuntras att upprepa det ovanliga stoppet. Rörelsen får namnet ”the Lock”, och hans improviserade stil blir grunden för Campbellocking.',
            names: ['Don Campbell', 'Sam Washington', 'Elroy Skifford'],
            keyEvent: true,
          },
          {
            period: 'November 1970',
            title: 'De första dansarna lär sig på The Citadel',
            description: 'Don möter andra dansare på tävlingar flera kvällar i veckan. De byter nya steg och utvecklar snabba locks, points, hand slaps och splits. Diagrammet listar 22 tidiga dansare och markerar flera som upphovspersoner till steg som fortfarande används.',
            names: ['Arnetta Johnson', 'Damita Jo Freeman', 'Charles “Robot” Washington', 'Fred “Mr. Penguin” Berry', 'Greg “Campbellock Jr.” Pope', 'Jimmy “Scooby-Doo” Foster'],
            keyEvent: true,
          },
          {
            period: 'Mars 1971',
            title: 'Scenen växer mellan fler klubbar',
            description: 'När den underjordiska dansscenen växer söker sig fler dansare mellan klubbar för att mötas och lära. Diagrammets andra grupp visar hur kunskapen spreds bredare än den krets som senare blev mest synlig i medier.',
            names: ['Alpha “Omega” Anderson', 'Greg “Captain Crunch” Daindridge', 'Haywood “Tito” Collins', 'John “Okie Doke” Wilson', 'Pat “Madam Butterfly” Davis'],
          },
          {
            period: 'Juni-augusti 1971',
            title: 'Go Go och Yo Yo Brothers organiserar och undervisar',
            description: 'Go Go Brothers och Yo Yo Brothers framträder i skolor och vid lokala arrangemang, lär ut Locking och utvecklar unison koreografi. Diagrammet beskriver dem som de första grupperna som organiserades kring denna överföring.',
            names: ['James “Skeeter Rabbit” Higgins', 'Edwin “Buddy Go Go” Lombard', 'Kevin “Yo Yo” Higgins', 'Tony “Go Go” Lewis', 'Jimmy “Scooby-Doo” Foster'],
          },
          {
            period: '2 oktober 1971',
            title: 'Soul Train börjar spelas in i Los Angeles',
            description: 'När Soul Train flyttar sin inspelning till Los Angeles bjuder Don Campbell in vänner från bland annat The Summit on the Hill, The Citadel, Maverick’s Flat och Blueberry Hill. Locking blir återkommande synligt för en nationell TV-publik, och en större Soul Train-krets tar form.',
            keyEvent: true,
          },
          {
            period: 'Mars 1972',
            title: 'Watts Writers Workshop och Creative Generation',
            description: 'Dansare bjuds in som instruktörer till Watts Writers Workshop och möter skrivande, koreografi, dans, musik, ljus och scenarbete. Där bildas Creative Generation, som enligt diagrammet för samman solo- och unison koreografi i en gemensam grupp.',
            names: ['Edwin “Buddy Go Go” Lombard', 'James “Skeeter Rabbit” Higgins', 'Jimmy “Scooby-Doo” Foster', 'Arnetta Johnson', 'Shelly Cepeda', 'Lorna Dune'],
          },
          {
            period: 'Juni-augusti 1972',
            title: 'Turné, Soul Train och Wattstax',
            description: 'Soul Train-gänget turnerar i juni. Den 20 augusti blir Wattstax ännu en stor offentlig scen för Campbellocking/Locking. Diagrammet placerar dansen tydligt i 1972 års musikaliska och kulturella rörelse.',
            keyEvent: true,
          },
          {
            period: 'September 1972',
            title: 'The Campbellockers börjar bokas som grupp',
            description: 'Don Campbells manager Sonny Craver bokar The Campbellockers, som fortfarande presenteras som starka solodansare snarare än en rutinbaserad ensemble. Under samma period möter Don Toni Basil på The Citadel; diagrammet beskriver hur hon senare blir manager, utvecklar scenmöjligheter och bidrar till gruppen som får namnet The Lockers.',
            names: ['Don Campbell', 'Johnnie “Sambo-Lock” McCloud', 'Bill “Slim the Robot” Williams', 'Charles “Robot” Washington', 'Fred “Mr. Penguin” Berry', 'Toni Basil'],
            keyEvent: true,
          },
        ],
      },
      {
        range: '1973-1979',
        title: 'Grupper, tävlingar och direkta lärandelinjer',
        intro: 'Diagrammets andra del förgrenar historien. The Lockers är en central linje, men flera ensembler, lärare och scener utvecklas samtidigt.',
        events: [
          {
            period: 'Februari 1973',
            title: 'Mötet med Orange County-scenen',
            description: 'En danstävling på Cal State Fullerton skapar kontakt mellan afroamerikanska pionjärer från South Central Los Angeles och dansare i Orange County. Diagrammet lyfter fram personliga möten och direkt undervisning som avgörande för hur Locking tog sig över geografiska och sociala gränser.',
            names: ['James “Skeeter Rabbit” Higgins', 'Edwin “Buddy Go Go” Lombard', 'Kevin “Yo Yo” Higgins', 'Tony “Go Go” Lewis', 'Leo “Fluky Luke” Williamson', 'Greg “Campbellock Jr.” Pope'],
            keyEvent: true,
          },
          {
            period: 'Februari 1973-1977',
            title: 'The Lockers med Toni Basil',
            description: 'Diagrammet följer den välkända uppsättningen av The Lockers under Toni Basils ledning. Gruppen förenar individuella karaktärer med koreografi och får en omfattande scen- och TV-karriär.',
            names: ['Don Campbell', 'Greg “Campbellock Jr.” Pope', 'Leo “Fluky Luke” Williamson', 'Adolfo “Shabba-Doo” Quiñones', 'Fred “Mr. Penguin” Berry', 'Bill “Slim the Robot” Williams', 'Toni Basil'],
          },
          {
            period: '1972-1979',
            title: 'Nya professionella ensembler förgrenar scenen',
            description: 'Jeff Kutashs produktionslinje kopplas i diagrammet till The Greasy Kids och Dancin Machine A, B och C. Runt The Citadel och Grand Hotel växer samtidigt The Funky Bunch fram. Dessa grenar visar hur Locking rör sig mellan klubb, undervisning och professionell scen.',
            names: ['Jeff Kutash', 'Tony “Crackerjack” Pierce', 'Steve “Sugarfoot” Notario', 'Vince “Sherlock” Harper', 'Steve “Shooka Boo” Wallace', 'Nanette “No No” Martin'],
          },
          {
            period: 'Februari 1974-1979',
            title: 'The Ghetto Dancers och The Lockers undervisar The Funky Bunch',
            description: 'Diagrammet dokumenterar flera namngivna lärar-elev-relationer mellan pionjärer och medlemmar i The Funky Bunch. Här blir den muntliga och kroppsliga överföringen - vem som faktiskt lärde vem - en central del av tidslinjen.',
            names: ['James “Skeeter Rabbit” Higgins', 'Greg “Campbellock Jr.” Pope', 'Greg “Captain Crunch” Daindridge', 'Don Campbell', 'Jimmy “Scooby-Doo” Foster'],
          },
          {
            period: '1975-1979',
            title: 'Something Special turnerar i Japan',
            description: 'Something Special för vidare Locking genom internationella framträdanden. Diagrammet pekar särskilt ut Jimmy “Scooby-Doo” Foster och Pat “Madam Butterfly” Davis och kopplar denna turnélinje till den senare japanska utvecklingen.',
            names: ['Jimmy “Scooby-Doo” Foster', 'Pat “Madam Butterfly” Davis', 'Eddie Cole', 'Wanda Fuller'],
          },
        ],
      },
      {
        range: '1976-2007',
        title: 'Fortsatta linjer och internationell spridning',
        intro: 'De senare rutorna följer grupper som bygger vidare på den amerikanska scenen och personer som undervisar utanför USA. Årtalen överlappar eftersom flera linjer pågår parallellt.',
        events: [
          {
            period: '1976-1995',
            title: 'Las Vegas Lockers',
            description: 'Las Vegas Lockers blir en långvarig scenisk gren. Diagrammet länkar gruppen till både Dancin Machine-linjen och flera dansare som fortsätter i andra ensembler.',
            names: ['Frank “Sundance” Sams', 'Robbie “Smokey Jr.” LaBlanc', 'Robert “Shoebox” Huffman', 'Martin “Ric-O-Shay Rabbit” Mancuso', 'Steve “Sugarpop” Bernier'],
          },
          {
            period: '1978',
            title: 'Dance Class samlar fler utövare',
            description: 'Den kort daterade Dance Class-grenen samlar dansare från flera av diagrammets andra linjer. Den illustrerar hur undervisning och nya ensembler fortsätter att överlappa.',
            names: ['Nanette “No No” Martin', 'Steve “Sugarfoot” Notario', 'Adolfo “Shabba-Doo” Quiñones', 'Anna “Lollipop” Sanchez', 'Dallas Winkler'],
          },
          {
            period: '1979-1995',
            title: 'Flera grupper bär stilen vidare',
            description: 'Locking, The Ecoto Lockers, The Untouchables och Dancin Machine C representerar parallella nätverk under 1980- och 1990-talen. Diagrammet visar dem som sammanlänkade genom återkommande dansare snarare än som en enda rak succession.',
            names: ['Steve “SugarPop” DeSilva', 'Steve “Sugarfoot” Notario', 'Steve “Sugarpop” Bernier', 'Robert “Shoebox” Huffman', 'Martin “Ric-A-Shay Rabbit” Mancuso'],
          },
          {
            period: '1980-2007',
            title: 'Tony Go Go bygger en undervisningslinje i Japan',
            description: 'Diagrammet anger att Tony “Go Go” Lewis öppnar en Locking-skola i Japan. Tillsammans med tidigare turnéer och undervisningsmöten blir detta en viktig, långvarig länk mellan Los Angeles-eran och den japanska Locking-scenen.',
            names: ['Tony “Go Go” Lewis'],
            keyEvent: true,
          },
          {
            period: '1995-2007',
            title: 'En dokumenterad linje vidare till Europa',
            description: 'Den sista daterade rutan följer Steve “SugarPop” Berniers undervisning av en fransk dansare för gruppen The Untouchables. Det är en av diagrammets tydligt markerade europeiska överföringslinjer, inte en fullständig historia över Locking i Europa.',
            names: ['Steve “SugarPop” Bernier'],
          },
        ],
      },
    ],
  },
  en: {
    introTitle: 'A map of people, places and transmission',
    intro: [
      'This timeline is an editorial adaptation of the Locking History Chart, credited to Steven Notario in the PDF metadata. The chart does more than arrange dates: it traces how the dance moved through clubs, television productions, workshops, ensembles and personal encounters.',
      'For readability, its many arrows have been organized into three periods. Events follow the chart’s dates and labels, while the wording has been carefully summarized and placed in its African American Los Angeles context.',
    ],
    keyEventLabel: 'Key event',
    branchLabel: 'Chart branch',
    peopleLabel: 'Names in the chart',
    sourceTitle: 'About the original chart',
    sourceText: [
      'The original contains specific dates, name lists and teaching lineages. It is an important participant-adjacent source, but no single chart is a final historical record. For example, the chart dates the beginning of The Campbellock to July 1970, while The Lockers’ document-based history gives late 1969. Memories, spellings and dates can differ across sources.',
      'You can open both chart pages at full size or download the original PDF below, making it possible to compare this editorial version with the source material.',
    ],
    openImage: 'Open page at full size',
    downloadPdf: 'Download the original chart as a PDF',
    chartAlt: [
      'First page of the Locking History Chart, showing events from 1970 to 1972.',
      'Second page of the Locking History Chart, showing groups and teaching lineages from 1973 to 2007.',
    ],
    chartCaption: [
      'Page 1 - the creation, clubs, Soul Train, Wattstax and the first groups, 1970-1972.',
      'Page 2 - The Lockers, parallel groups and international transmission, 1973-2007.',
    ],
    sourcesTitle: 'Sources and further reading',
    eras: [
      {
        range: '1970-1972',
        title: 'From the Campbellock to a growing scene',
        intro: 'The opening years connect Don Campbell’s personal expression with the clubs, dancers and African American cultural spaces in which Locking became a shared movement.',
        events: [
          {
            period: 'July 1970',
            title: 'The Campbellock takes shape',
            description: 'The chart places the beginning at Trade Tech College. Don Campbell stops while attempting the social dances of the time and is encouraged to repeat the unusual pause. The movement is called “the Lock”, and his improvised style becomes the basis of Campbellocking.',
            names: ['Don Campbell', 'Sam Washington', 'Elroy Skifford'],
            keyEvent: true,
          },
          {
            period: 'November 1970',
            title: 'The first dancers learn at The Citadel',
            description: 'Don meets other dancers at contests several nights a week. They exchange new steps and develop quick locks, points, hand slaps and splits. The chart names 22 early dancers and marks several as creators of steps that remain in use.',
            names: ['Arnetta Johnson', 'Damita Jo Freeman', 'Charles “Robot” Washington', 'Fred “Mr. Penguin” Berry', 'Greg “Campbellock Jr.” Pope', 'Jimmy “Scooby-Doo” Foster'],
            keyEvent: true,
          },
          {
            period: 'March 1971',
            title: 'The scene grows across more clubs',
            description: 'As the underground dance scene expands, more dancers travel between clubs to meet and learn. The chart’s second group shows knowledge spreading beyond the circle that would later become most visible in the media.',
            names: ['Alpha “Omega” Anderson', 'Greg “Captain Crunch” Daindridge', 'Haywood “Tito” Collins', 'John “Okie Doke” Wilson', 'Pat “Madam Butterfly” Davis'],
          },
          {
            period: 'June-August 1971',
            title: 'Go Go and Yo Yo Brothers organize and teach',
            description: 'The Go Go Brothers and Yo Yo Brothers perform at schools and community events, teach Locking and develop unison choreography. The chart describes them as the first groups organized around this transmission.',
            names: ['James “Skeeter Rabbit” Higgins', 'Edwin “Buddy Go Go” Lombard', 'Kevin “Yo Yo” Higgins', 'Tony “Go Go” Lewis', 'Jimmy “Scooby-Doo” Foster'],
          },
          {
            period: 'October 2, 1971',
            title: 'Soul Train begins taping in Los Angeles',
            description: 'When Soul Train moves production to Los Angeles, Don Campbell invites friends from venues including The Summit on the Hill, The Citadel, Maverick’s Flat and Blueberry Hill. Locking gains recurring national television visibility, and a wider Soul Train circle takes shape.',
            keyEvent: true,
          },
          {
            period: 'March 1972',
            title: 'Watts Writers Workshop and Creative Generation',
            description: 'Dancers are invited to teach at the Watts Writers Workshop and encounter writing, choreography, dance, music, lighting and stagecraft. Creative Generation forms there, bringing solo and unison choreography into one group according to the chart.',
            names: ['Edwin “Buddy Go Go” Lombard', 'James “Skeeter Rabbit” Higgins', 'Jimmy “Scooby-Doo” Foster', 'Arnetta Johnson', 'Shelly Cepeda', 'Lorna Dune'],
          },
          {
            period: 'June-August 1972',
            title: 'Touring, Soul Train and Wattstax',
            description: 'The Soul Train Gang tours in June. On August 20, Wattstax provides another major public stage for Campbellocking/Locking. The chart locates the dance squarely within the musical and cultural movement of 1972.',
            keyEvent: true,
          },
          {
            period: 'September 1972',
            title: 'The Campbellockers begin booking as a group',
            description: 'Don Campbell’s manager Sonny Craver books The Campbellockers, still presented as powerful solo dancers rather than a routine-based ensemble. During this period Don meets Toni Basil at The Citadel; the chart describes how she later becomes manager, develops performance opportunities and helps shape the group named The Lockers.',
            names: ['Don Campbell', 'Johnnie “Sambo-Lock” McCloud', 'Bill “Slim the Robot” Williams', 'Charles “Robot” Washington', 'Fred “Mr. Penguin” Berry', 'Toni Basil'],
            keyEvent: true,
          },
        ],
      },
      {
        range: '1973-1979',
        title: 'Groups, contests and direct lines of learning',
        intro: 'The second part of the chart branches outward. The Lockers are a central line, but several ensembles, teachers and scenes develop at the same time.',
        events: [
          {
            period: 'February 1973',
            title: 'The Orange County encounter',
            description: 'A dance contest at Cal State Fullerton creates contact between African American pioneers from South Central Los Angeles and dancers in Orange County. The chart emphasizes personal exchange and direct teaching in the dance’s movement across geographic and social boundaries.',
            names: ['James “Skeeter Rabbit” Higgins', 'Edwin “Buddy Go Go” Lombard', 'Kevin “Yo Yo” Higgins', 'Tony “Go Go” Lewis', 'Leo “Fluky Luke” Williamson', 'Greg “Campbellock Jr.” Pope'],
            keyEvent: true,
          },
          {
            period: 'February 1973-1977',
            title: 'The Lockers with Toni Basil',
            description: 'The chart follows the well-known lineup of The Lockers under Toni Basil’s direction. The group combines distinct individual characters with choreography and develops a wide-ranging stage and television career.',
            names: ['Don Campbell', 'Greg “Campbellock Jr.” Pope', 'Leo “Fluky Luke” Williamson', 'Adolfo “Shabba-Doo” Quiñones', 'Fred “Mr. Penguin” Berry', 'Bill “Slim the Robot” Williams', 'Toni Basil'],
          },
          {
            period: '1972-1979',
            title: 'New professional ensembles branch from the scene',
            description: 'Jeff Kutash’s production line is connected in the chart with The Greasy Kids and Dancin Machine A, B and C. The Funky Bunch grows around The Citadel and Grand Hotel. These branches show Locking moving between club, teaching and professional stage.',
            names: ['Jeff Kutash', 'Tony “Crackerjack” Pierce', 'Steve “Sugarfoot” Notario', 'Vince “Sherlock” Harper', 'Steve “Shooka Boo” Wallace', 'Nanette “No No” Martin'],
          },
          {
            period: 'February 1974-1979',
            title: 'The Ghetto Dancers and The Lockers teach The Funky Bunch',
            description: 'The chart documents several named teacher-student relationships between pioneers and members of The Funky Bunch. Embodied, person-to-person transmission - who actually taught whom - becomes central to this part of the timeline.',
            names: ['James “Skeeter Rabbit” Higgins', 'Greg “Campbellock Jr.” Pope', 'Greg “Captain Crunch” Daindridge', 'Don Campbell', 'Jimmy “Scooby-Doo” Foster'],
          },
          {
            period: '1975-1979',
            title: 'Something Special tours Japan',
            description: 'Something Special carries Locking through international performances. The chart especially identifies Jimmy “Scooby-Doo” Foster and Pat “Madam Butterfly” Davis, linking this touring branch to later developments in Japan.',
            names: ['Jimmy “Scooby-Doo” Foster', 'Pat “Madam Butterfly” Davis', 'Eddie Cole', 'Wanda Fuller'],
          },
        ],
      },
      {
        range: '1976-2007',
        title: 'Continuing lines and international transmission',
        intro: 'The later boxes trace groups that carry the dance forward in the United States and people who teach beyond it. Dates overlap because several lines continue in parallel.',
        events: [
          {
            period: '1976-1995',
            title: 'Las Vegas Lockers',
            description: 'Las Vegas Lockers becomes a long-running performance branch. The chart links the group to the Dancin Machine line and to dancers who continue through several other ensembles.',
            names: ['Frank “Sundance” Sams', 'Robbie “Smokey Jr.” LaBlanc', 'Robert “Shoebox” Huffman', 'Martin “Ric-O-Shay Rabbit” Mancuso', 'Steve “Sugarpop” Bernier'],
          },
          {
            period: '1978',
            title: 'Dance Class gathers more performers',
            description: 'The briefly dated Dance Class branch brings together dancers from several other chart lines. It illustrates the continuing overlap between teaching and new ensembles.',
            names: ['Nanette “No No” Martin', 'Steve “Sugarfoot” Notario', 'Adolfo “Shabba-Doo” Quiñones', 'Anna “Lollipop” Sanchez', 'Dallas Winkler'],
          },
          {
            period: '1979-1995',
            title: 'Multiple groups carry the form forward',
            description: 'Locking, The Ecoto Lockers, The Untouchables and Dancin Machine C represent parallel networks through the 1980s and 1990s. The chart presents them as connected by recurring dancers rather than as one simple succession.',
            names: ['Steve “SugarPop” DeSilva', 'Steve “Sugarfoot” Notario', 'Steve “Sugarpop” Bernier', 'Robert “Shoebox” Huffman', 'Martin “Ric-A-Shay Rabbit” Mancuso'],
          },
          {
            period: '1980-2007',
            title: 'Tony Go Go builds a teaching line in Japan',
            description: 'The chart states that Tony “Go Go” Lewis opens a Locking school in Japan. Together with earlier tours and teaching encounters, this becomes an important long-term link between the Los Angeles era and the Japanese Locking scene.',
            names: ['Tony “Go Go” Lewis'],
            keyEvent: true,
          },
          {
            period: '1995-2007',
            title: 'One documented line continues into Europe',
            description: 'The final dated box follows Steve “SugarPop” Bernier teaching a French dancer to lock for The Untouchables. It is one clearly marked European transmission line in the chart, not a complete history of Locking in Europe.',
            names: ['Steve “SugarPop” Bernier'],
          },
        ],
      },
    ],
  },
  fr: {
    introTitle: 'Une carte des personnes, des lieux et de la transmission',
    intro: [
      'Cette chronologie est une adaptation éditoriale du Locking History Chart, attribué à Steven Notario dans les métadonnées du PDF. Le diagramme ne se contente pas d’ordonner des dates : il retrace la circulation de la danse à travers les clubs, les productions télévisées, les workshops, les ensembles et les rencontres personnelles.',
      'Pour faciliter la lecture, ses nombreuses flèches ont été organisées en trois périodes. Les événements suivent les dates et les intitulés du diagramme, tandis que le texte a été soigneusement résumé et replacé dans son contexte afro-américain à Los Angeles.',
    ],
    keyEventLabel: 'Événement clé',
    branchLabel: 'Branche du diagramme',
    peopleLabel: 'Noms dans le diagramme',
    sourceTitle: 'À propos du diagramme original',
    sourceText: [
      'L’original contient des dates précises, des listes de noms et des lignées d’enseignement. Il s’agit d’une source importante, proche des participants, mais aucun diagramme ne constitue à lui seul un récit historique définitif. Par exemple, celui-ci situe le début de The Campbellock en juillet 1970, tandis que l’histoire documentaire de The Lockers indique la fin de 1969. Les souvenirs, les orthographes et les dates peuvent varier selon les sources.',
      'Vous pouvez ouvrir les deux pages du diagramme en plein format ou télécharger le PDF original ci-dessous afin de comparer cette version éditoriale au document source.',
    ],
    openImage: 'Ouvrir la page en plein format',
    downloadPdf: 'Télécharger le diagramme original au format PDF',
    chartAlt: [
      'Première page du Locking History Chart, présentant les événements de 1970 à 1972.',
      'Deuxième page du Locking History Chart, présentant les groupes et lignées d’enseignement de 1973 à 2007.',
    ],
    chartCaption: [
      'Page 1 — la création, les clubs, Soul Train, Wattstax et les premiers groupes, 1970–1972.',
      'Page 2 — The Lockers, les groupes parallèles et la transmission internationale, 1973–2007.',
    ],
    sourcesTitle: 'Sources et lectures complémentaires',
    eras: [
      {
        range: '1970–1972',
        title: 'De The Campbellock à une scène en plein essor',
        intro: 'Ces premières années relient l’expression personnelle de Don Campbell aux clubs, aux danseurs et aux espaces culturels afro-américains dans lesquels le Locking est devenu un mouvement partagé.',
        events: [
          {
            period: 'Juillet 1970',
            title: 'The Campbellock prend forme',
            description: 'Le diagramme situe le début au Trade Tech College. Don Campbell s’arrête en essayant les danses sociales de l’époque et on l’encourage à répéter cette pause inhabituelle. Le mouvement reçoit le nom de « the Lock » et son style improvisé devient la base du Campbellocking.',
            names: ['Don Campbell', 'Sam Washington', 'Elroy Skifford'],
            keyEvent: true,
          },
          {
            period: 'Novembre 1970',
            title: 'Les premiers danseurs apprennent à The Citadel',
            description: 'Don rencontre d’autres danseurs lors de concours organisés plusieurs soirs par semaine. Ils échangent de nouveaux pas et développent des locks rapides, des points, des hand slaps et des splits. Le diagramme nomme 22 danseurs de la première heure et en identifie plusieurs comme créateurs de pas encore utilisés aujourd’hui.',
            names: ['Arnetta Johnson', 'Damita Jo Freeman', 'Charles « Robot » Washington', 'Fred « Mr. Penguin » Berry', 'Greg « Campbellock Jr. » Pope', 'Jimmy « Scooby-Doo » Foster'],
            keyEvent: true,
          },
          {
            period: 'Mars 1971',
            title: 'La scène s’étend à d’autres clubs',
            description: 'À mesure que la scène underground se développe, davantage de danseurs circulent entre les clubs pour se rencontrer et apprendre. Le deuxième groupe du diagramme montre que le savoir se diffuse au-delà du cercle qui deviendra ensuite le plus visible dans les médias.',
            names: ['Alpha « Omega » Anderson', 'Greg « Captain Crunch » Daindridge', 'Haywood « Tito » Collins', 'John « Okie Doke » Wilson', 'Pat « Madam Butterfly » Davis'],
          },
          {
            period: 'Juin–août 1971',
            title: 'Go Go et Yo Yo Brothers s’organisent et enseignent',
            description: 'Les Go Go Brothers et Yo Yo Brothers se produisent dans des écoles et lors d’événements communautaires, enseignent le Locking et développent des chorégraphies à l’unisson. Le diagramme les décrit comme les premiers groupes organisés autour de cette transmission.',
            names: ['James « Skeeter Rabbit » Higgins', 'Edwin « Buddy Go Go » Lombard', 'Kevin « Yo Yo » Higgins', 'Tony « Go Go » Lewis', 'Jimmy « Scooby-Doo » Foster'],
          },
          {
            period: '2 octobre 1971',
            title: 'Soul Train commence ses enregistrements à Los Angeles',
            description: 'Lorsque la production de Soul Train s’installe à Los Angeles, Don Campbell invite des amis rencontrés dans des lieux comme The Summit on the Hill, The Citadel, Maverick’s Flat et Blueberry Hill. Le Locking bénéficie régulièrement d’une visibilité nationale à la télévision, et un cercle Soul Train plus large se forme.',
            keyEvent: true,
          },
          {
            period: 'Mars 1972',
            title: 'Watts Writers Workshop et Creative Generation',
            description: 'Des danseurs sont invités à enseigner au Watts Writers Workshop et y découvrent écriture, chorégraphie, danse, musique, éclairage et travail scénique. Selon le diagramme, Creative Generation s’y forme en réunissant chorégraphies solo et à l’unisson au sein d’un même groupe.',
            names: ['Edwin « Buddy Go Go » Lombard', 'James « Skeeter Rabbit » Higgins', 'Jimmy « Scooby-Doo » Foster', 'Arnetta Johnson', 'Shelly Cepeda', 'Lorna Dune'],
          },
          {
            period: 'Juin–août 1972',
            title: 'Tournée, Soul Train et Wattstax',
            description: 'The Soul Train Gang part en tournée en juin. Le 20 août, Wattstax offre une autre grande scène publique au Campbellocking/Locking. Le diagramme situe clairement la danse au cœur du mouvement musical et culturel de 1972.',
            keyEvent: true,
          },
          {
            period: 'Septembre 1972',
            title: 'The Campbellockers commencent à être engagés comme groupe',
            description: 'Sonny Craver, le manager de Don Campbell, engage The Campbellockers, encore présentés comme de puissants danseurs solistes plutôt que comme un ensemble fondé sur des routines. Durant cette période, Don rencontre Toni Basil à The Citadel ; le diagramme explique qu’elle devient ensuite manager, développe les possibilités de spectacle et contribue à façonner le groupe nommé The Lockers.',
            names: ['Don Campbell', 'Johnnie « Sambo-Lock » McCloud', 'Bill « Slim the Robot » Williams', 'Charles « Robot » Washington', 'Fred « Mr. Penguin » Berry', 'Toni Basil'],
            keyEvent: true,
          },
        ],
      },
      {
        range: '1973–1979',
        title: 'Groupes, concours et transmission directe',
        intro: 'La deuxième partie du diagramme se ramifie. The Lockers en constitue une ligne centrale, mais plusieurs ensembles, enseignants et scènes se développent simultanément.',
        events: [
          {
            period: 'Février 1973',
            title: 'La rencontre d’Orange County',
            description: 'Un concours de danse à Cal State Fullerton crée un contact entre des pionniers afro-américains de South Central Los Angeles et des danseurs d’Orange County. Le diagramme souligne l’importance des échanges personnels et de l’enseignement direct dans le passage de la danse au-delà des frontières géographiques et sociales.',
            names: ['James « Skeeter Rabbit » Higgins', 'Edwin « Buddy Go Go » Lombard', 'Kevin « Yo Yo » Higgins', 'Tony « Go Go » Lewis', 'Leo « Fluky Luke » Williamson', 'Greg « Campbellock Jr. » Pope'],
            keyEvent: true,
          },
          {
            period: 'Février 1973–1977',
            title: 'The Lockers avec Toni Basil',
            description: 'Le diagramme suit la formation bien connue de The Lockers sous la direction de Toni Basil. Le groupe associe des personnages individuels distincts à la chorégraphie et développe une importante carrière scénique et télévisuelle.',
            names: ['Don Campbell', 'Greg « Campbellock Jr. » Pope', 'Leo « Fluky Luke » Williamson', 'Adolfo « Shabba-Doo » Quiñones', 'Fred « Mr. Penguin » Berry', 'Bill « Slim the Robot » Williams', 'Toni Basil'],
          },
          {
            period: '1972–1979',
            title: 'De nouveaux ensembles professionnels émergent de la scène',
            description: 'La filière de production de Jeff Kutash est reliée dans le diagramme à The Greasy Kids et à Dancin Machine A, B et C. The Funky Bunch se développe autour de The Citadel et du Grand Hotel. Ces branches montrent le passage du Locking entre club, enseignement et scène professionnelle.',
            names: ['Jeff Kutash', 'Tony « Crackerjack » Pierce', 'Steve « Sugarfoot » Notario', 'Vince « Sherlock » Harper', 'Steve « Shooka Boo » Wallace', 'Nanette « No No » Martin'],
          },
          {
            period: 'Février 1974–1979',
            title: 'The Ghetto Dancers et The Lockers enseignent à The Funky Bunch',
            description: 'Le diagramme documente plusieurs relations nommées entre enseignants pionniers et membres de The Funky Bunch. La transmission incarnée, de personne à personne — qui a réellement enseigné à qui — devient centrale dans cette partie de la chronologie.',
            names: ['James « Skeeter Rabbit » Higgins', 'Greg « Campbellock Jr. » Pope', 'Greg « Captain Crunch » Daindridge', 'Don Campbell', 'Jimmy « Scooby-Doo » Foster'],
          },
          {
            period: '1975–1979',
            title: 'Something Special part en tournée au Japon',
            description: 'Something Special transmet le Locking par ses spectacles internationaux. Le diagramme cite notamment Jimmy « Scooby-Doo » Foster et Pat « Madam Butterfly » Davis, reliant cette branche de tournée aux développements ultérieurs au Japon.',
            names: ['Jimmy « Scooby-Doo » Foster', 'Pat « Madam Butterfly » Davis', 'Eddie Cole', 'Wanda Fuller'],
          },
        ],
      },
      {
        range: '1976–2007',
        title: 'Des lignées durables et une transmission internationale',
        intro: 'Les dernières cases retracent les groupes qui ont poursuivi la danse aux États-Unis et les personnes qui l’ont enseignée au-delà. Les dates se chevauchent, car plusieurs lignées avancent en parallèle.',
        events: [
          {
            period: '1976–1995',
            title: 'Las Vegas Lockers',
            description: 'Las Vegas Lockers devient une branche scénique durable. Le diagramme relie le groupe à la lignée Dancin Machine et à des danseurs qui poursuivent leur parcours dans plusieurs autres ensembles.',
            names: ['Frank « Sundance » Sams', 'Robbie « Smokey Jr. » LaBlanc', 'Robert « Shoebox » Huffman', 'Martin « Ric-O-Shay Rabbit » Mancuso', 'Steve « Sugarpop » Bernier'],
          },
          {
            period: '1978',
            title: 'Dance Class réunit davantage d’artistes',
            description: 'La branche brièvement datée Dance Class réunit des danseurs issus de plusieurs autres lignées du diagramme. Elle illustre le chevauchement continu entre enseignement et nouveaux ensembles.',
            names: ['Nanette « No No » Martin', 'Steve « Sugarfoot » Notario', 'Adolfo « Shabba-Doo » Quiñones', 'Anna « Lollipop » Sanchez', 'Dallas Winkler'],
          },
          {
            period: '1979–1995',
            title: 'Plusieurs groupes portent la forme vers l’avenir',
            description: 'Locking, The Ecoto Lockers, The Untouchables et Dancin Machine C représentent des réseaux parallèles dans les années 1980 et 1990. Le diagramme les présente comme reliés par des danseurs récurrents, plutôt que comme une simple succession.',
            names: ['Steve « SugarPop » DeSilva', 'Steve « Sugarfoot » Notario', 'Steve « Sugarpop » Bernier', 'Robert « Shoebox » Huffman', 'Martin « Ric-A-Shay Rabbit » Mancuso'],
          },
          {
            period: '1980–2007',
            title: 'Tony Go Go construit une lignée d’enseignement au Japon',
            description: 'Le diagramme indique que Tony « Go Go » Lewis ouvre une école de Locking au Japon. Avec les tournées antérieures et les rencontres pédagogiques, cela devient un lien durable et important entre la période de Los Angeles et la scène Locking japonaise.',
            names: ['Tony « Go Go » Lewis'],
            keyEvent: true,
          },
          {
            period: '1995–2007',
            title: 'Une lignée documentée se poursuit en Europe',
            description: 'La dernière case datée montre Steve « SugarPop » Bernier enseignant le Locking à un danseur français pour The Untouchables. Il s’agit d’une lignée européenne clairement indiquée dans le diagramme, et non d’une histoire complète du Locking en Europe.',
            names: ['Steve « SugarPop » Bernier'],
          },
        ],
      },
    ],
  },
  fi: timelineFi as TimelineContent,
  ko: timelineKo as TimelineContent,
  ja: timelineJa as TimelineContent,
  zh: timelineZh as TimelineContent,
};

export const timelineSources = [
  { label: 'LockerLegends - The Time Line of Locking', url: 'https://www.lockerlegends.net/the-time-line-of-locking/' },
  { label: 'LockerLegends - Our Story of the History of Locking', url: 'https://www.lockerlegends.net/history-of-locking/' },
  { label: 'The Lockers - About', url: 'https://www.thelockersdance.com/about' },
];
