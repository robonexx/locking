import type { Locale } from '@/lib/i18n';

type LockersSection = {
  period: string;
  title: string;
  paragraphs: string[];
};

type Source = {
  label: string;
  url: string;
};

type LockersStory = {
  intro: string;
  donTitle: string;
  donEyebrow: string;
  don: string[];
  sections: LockersSection[];
  membersTitle: string;
  membersIntro: string;
  members: string[];
  fabulousTitle: string;
  fabulous: string[];
  sourceNoteTitle: string;
  sourceNote: string;
  legacyTitle: string;
  legacy: string;
  sourcesTitle: string;
  sources: Source[];
};

const sources: Source[] = [
  {
    label: 'The Lockers — History',
    url: 'https://www.thelockersdance.com/about',
  },
  {
    label: 'Don “Campbellock” Campbell — The Campbellock Timeline',
    url: 'https://campbellock.dance/about-locking/the-campbellock-timeline/',
  },
  {
    label: 'Los Angeles Times — A hoofer’s place in history',
    url: 'https://www.latimes.com/archives/la-xpm-1995-07-23-tm-26818-story.html',
  },
  {
    label: 'LockerLegends — 1970s Old School Groups of Locking',
    url: 'https://www.lockerlegends.net/dancers-groups-and-crews/old-school-acknowledgement-room/',
  },
];

export const theLockersStory: Record<Locale, LockersStory> = {
  sv: {
    intro:
      'The Lockers tog en dans som vuxit fram i Los Angeles sociala miljöer och gjorde den synlig på tv, scener och i populärkulturen. Gruppen var inte början på hela berättelsen om Locking, men den blev en avgörande kraft i hur dansen presenterades för en större publik.',
    donEyebrow: 'Skaparen / Grundaren',
    donTitle: 'Don “Campbellock” Campbell',
    don: [
      'Don Campbell skapade The Campbellock – dansen som senare blev känd över hela världen som Locking. Den växte fram ur hans eget sätt att röra sig, hans musikalitet och de stopp eller “locks” som blev grunden för stilen.',
      'Don var initiativtagaren och den skapande kraften bakom gruppen. Han började samla dansare omkring sin stil och lade grunden till The Campbellockers. Tillsammans med Toni Basil utvecklades gruppen 1973 till en professionell scenensemble, innan namnet kortades till The Lockers.',
      'Gruppens historia går därför inte att skilja från Don: först kom hans personliga dans, därefter människorna som utvecklade, formade och bar den vidare tillsammans.',
    ],
    sections: [
      {
        period: '1969–1972',
        title: 'Vägen fram till The Campbellockers',
        paragraphs: [
          'Don Campbell utvecklade sin säregna dans i slutet av 1969 vid Los Angeles Trade-Technical College. Rörelsen och stilen kom att kallas The Campbellock. När Don blev en del av Soul Train-scenen och spelade in låten “The Campbellock” 1972 växte också möjligheten att presentera dansen genom en grupp.',
          'Don Campbells egen tidslinje berättar också om turnéer med olika dansare kring låten. Dessa tidiga framträdanden var en föregångare till den grupp som snart skulle ta form som The Campbellockers.',
        ],
      },
      {
        period: 'Juni 1973',
        title: 'The Campbellockers bildas',
        paragraphs: [
          'Tillsammans med koreografen och managern Toni Basil samlades dansare till en tv-special med Roberta Flack på ABC. Gruppen presenterades först som The Campbell-Lockers i tryckt material och annonserades vid framträdanden som The Campbellockers.',
          'Uppsättningen förändrades under de första framträdandena. The Lockers egen historiesida betonar att den senare fastslagna gruppen på sju personer ännu inte stod komplett tillsammans under de första programmen som The Campbellockers.',
        ],
      },
      {
        period: 'Oktober 1973',
        title: 'The Campbellockers blir The Lockers',
        paragraphs: [
          'Efter en rättighetskonflikt kring ordet Campbellock kortades gruppnamnet från The Campbellockers till The Lockers. Namnbytet behöll kopplingen till Don Campbell och dansens ursprung, samtidigt som gruppen kunde fortsätta sitt professionella arbete.',
          'The Lockers egen historiesida daterar den officiella namnändringen till den 23 oktober 1973. Den 23 november uppträdde de sju originalmedlemmarna tillsammans under namnet The Lockers i ABC-programmet In Concert.',
        ],
      },
      {
        period: '1970-talet',
        title: 'Från gatan till världens scener',
        paragraphs: [
          'The Lockers kombinerade starka individuella karaktärer och improvisation med en genomarbetad scenshow. Deras kläder, humor, musikaliska timing, poser, gester och explosiva rörelser skapade en presentation som publiken kunde känna igen direkt.',
          'Gruppen syntes återkommande i amerikansk tv och uppträdde på stora scener. Los Angeles Times beskrev dem senare som den första streetdancegruppen som nådde bred framgång. The Lockers egen dokumentation uppger fler än hundra tv- och liveframträdanden under gruppens tre första år.',
        ],
      },
      {
        period: '1976 och framåt',
        title: 'Nya konstellationer, samma arv',
        paragraphs: [
          'När Fred Berry och Toni Basil lämnade gruppen förändrades uppsättningen. Anthony “Tony GoGo” Lewis anslöt i slutet av 1976 och uppträdde med de fem kvarvarande medlemmarna i Van Dyke and Company. Under slutet av 1970-talet och in på 1980-talet förekom fler uppsättningar under namnet The Lockers.',
          'Därför är det viktigt att skilja mellan de sju personer som gruppens egen historiesida benämner originalmedlemmar, senare kontrakterade medlemmar och de många andra pionjärer som bidrog till Locking före, bredvid och efter den professionella gruppen.',
        ],
      },
    ],
    membersTitle: 'De sju originalmedlemmarna',
    membersIntro:
      'Enligt The Lockers egen historiesida och det uttalande som de ursprungliga medlemmarna och Fred Berrys dödsbo ställde sig bakom 2009:',
    members: [
      'Don “Campbellock” Campbell',
      'Toni Basil',
      'Dave “Greg Campbellock Jr.” Pope',
      'Fred “Mr. Penguin / Rerun” Berry',
      'Leo “Fluky Luke” Williamson',
      'Bill “Slim the Robot” Williams',
      'Adolfo “Shabba-Doo” Quinones',
    ],
    fabulousTitle: 'The Fabulous Lockers',
    fabulous: [
      'Gruppens namn var The Lockers, efter att först ha varit The Campbellockers. I vissa presentationer och senare sammanhang förekommer även benämningen “The Fabulous Lockers”.',
      'LockerLegends beskriver hur olika uppsättningar och återföreningar genom åren också har presenterats som The Original Lockers eller The Fabulous Lockers. På den här sidan används alltid The Lockers som gruppens huvudnamn.',
    ],
    sourceNoteTitle: 'Namn och olika uppsättningar',
    sourceNote:
      'The Campbellockers och The Lockers beskriver två namnperioder för samma grupp under dess formering. Tidigare turnerande dansare kring Don Campbell hör till bakgrunden, medan senare uppsättningar under The Lockers-namnet behöver skiljas från de sju originalmedlemmarna.',
    legacyTitle: 'En grupp – och en större rörelse',
    legacy:
      'The Lockers gjorde ett avgörande arbete för att föra Locking ut på den professionella scenen. Samtidigt skapades dansens språk av ett större nätverk av sociala dansare, Soul Train-dansare, grupper och lokala pionjärer. Att berätta gruppens historia handlar därför både om att ge The Lockers deras rättmätiga plats och att fortsätta synliggöra hela kulturen omkring dem.',
    sourcesTitle: 'Källor och vidare läsning',
    sources,
  },
  en: {
    intro:
      'The Lockers took a dance that had grown in the social spaces of Los Angeles and made it visible on television, stages and throughout popular culture. The group was not the beginning of the entire story of Locking, but it became a decisive force in how the dance was presented to a wider audience.',
    donEyebrow: 'Creator / Founder',
    donTitle: 'Don “Campbellock” Campbell',
    don: [
      'Don Campbell created The Campbellock – the dance that later became known around the world as Locking. It grew from his individual movement, musicality and the stops or “locks” that became the foundation of the style.',
      'Don initiated the group and was its central creative force. He began gathering dancers around his style and laid the foundation for The Campbellockers. Together with Toni Basil, the group developed into a professional stage ensemble in 1973 before its name was shortened to The Lockers.',
      'The group’s history therefore cannot be separated from Don: first came his personal dance, followed by the people who developed, shaped and carried it forward together.',
    ],
    sections: [
      {
        period: '1969–1972',
        title: 'The road to The Campbellockers',
        paragraphs: [
          'Don Campbell developed his distinctive dance at Los Angeles Trade-Technical College in late 1969. The movement and style became known as The Campbellock. As Don joined the Soul Train scene and recorded “The Campbellock” in 1972, the possibility of presenting the dance through a group also grew.',
          'Don Campbell’s own timeline also records tours with different dancers around the release of the song. These early performances were a precursor to the group that would soon take shape as The Campbellockers.',
        ],
      },
      {
        period: 'June 1973',
        title: 'The Campbellockers are formed',
        paragraphs: [
          'Together with choreographer and manager Toni Basil, dancers were assembled for an ABC television special featuring Roberta Flack. The group first appeared as The Campbell-Lockers in printed material and was announced in performances as The Campbellockers.',
          'The lineup changed during the first performances. The Lockers’ own history emphasizes that the later established group of seven did not yet appear together in full during the first programs as The Campbellockers.',
        ],
      },
      {
        period: 'October 1973',
        title: 'The Campbellockers become The Lockers',
        paragraphs: [
          'Following a rights dispute concerning the word Campbellock, the group name was shortened from The Campbellockers to The Lockers. The new name retained a connection to Don Campbell and the dance’s origin while allowing the group to continue its professional work.',
          'The Lockers’ own history dates the official name change to October 23, 1973. On November 23, the seven original members performed together under the name The Lockers on ABC’s In Concert.',
        ],
      },
      {
        period: 'The 1970s',
        title: 'From the street to the world stage',
        paragraphs: [
          'The Lockers combined powerful individual characters and improvisation with a carefully shaped stage act. Their clothing, humor, musical timing, poses, gestures and explosive movement created an immediately recognizable presentation.',
          'The group appeared repeatedly on American television and performed on major stages. The Los Angeles Times later described them as the first street-dance troupe to achieve broad success. The group’s own documentation records more than one hundred television and live appearances during its first three years.',
        ],
      },
      {
        period: '1976 onward',
        title: 'New lineups, the same legacy',
        paragraphs: [
          'The lineup changed after Fred Berry and Toni Basil left the group. Anthony “Tony GoGo” Lewis joined at the end of 1976 and performed with the five remaining members on Van Dyke and Company. Further configurations appeared under The Lockers name through the late 1970s and into the 1980s.',
          'It is therefore important to distinguish between the seven people identified as original members by the group’s own history, later contracted members and the many other pioneers who contributed to Locking before, alongside and after the professional group.',
        ],
      },
    ],
    membersTitle: 'The seven original members',
    membersIntro:
      'According to The Lockers’ own history and the statement endorsed by the original members and the Fred Berry estate in 2009:',
    members: [
      'Don “Campbellock” Campbell',
      'Toni Basil',
      'Dave “Greg Campbellock Jr.” Pope',
      'Fred “Mr. Penguin / Rerun” Berry',
      'Leo “Fluky Luke” Williamson',
      'Bill “Slim the Robot” Williams',
      'Adolfo “Shabba-Doo” Quinones',
    ],
    fabulousTitle: 'The Fabulous Lockers',
    fabulous: [
      'The group’s name was The Lockers, after first being known as The Campbellockers. The name “The Fabulous Lockers” also appears in some presentations and later contexts.',
      'LockerLegends describes different lineups and reunions over the years being presented as The Original Lockers or The Fabulous Lockers. This page always uses The Lockers as the group’s primary name.',
    ],
    sourceNoteTitle: 'Names and changing lineups',
    sourceNote:
      'The Campbellockers and The Lockers describe two naming periods for the same group during its formation. Earlier touring dancers around Don Campbell belong to the background, while later lineups using The Lockers name must be distinguished from the seven original members.',
    legacyTitle: 'One group – and a larger movement',
    legacy:
      'The Lockers played a decisive role in bringing Locking to the professional stage. At the same time, the language of the dance was created by a wider network of social dancers, Soul Train dancers, groups and local pioneers. Telling the group’s story means both giving The Lockers their rightful place and continuing to make the wider culture around them visible.',
    sourcesTitle: 'Sources and further reading',
    sources,
  },
};
