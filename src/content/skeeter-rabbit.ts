import type { Locale } from '@/lib/i18n';

export type SkeeterRabbitSection = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

export type SkeeterRabbitStory = {
  intro: string;
  openingQuote: string;
  portraitEyebrow: string;
  portraitTitle: string;
  portraitText: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryCaptions: readonly string[];
  sections: readonly SkeeterRabbitSection[];
  closingEyebrow: string;
  closingTitle: string;
  closing: readonly string[];
  archiveLink: string;
  sourceNoteTitle: string;
  sourceNote: string;
  sourcesTitle: string;
};

export const skeeterRabbitSources = [
  { label: 'LockerLegends — About this website', url: 'https://www.lockerlegends.net/about/about-2/' },
  { label: 'LockerLegends — Old School O.G. Hall of Fame', url: 'https://www.lockerlegends.net/old-school-og-hall-of-fame/' },
  { label: 'LockerLegends — 1970s Old School Groups of Locking', url: 'https://www.lockerlegends.net/dancers-groups-and-crews/old-school-acknowledgement-room/' },
  { label: 'LockerLegends — Our Story of the History of Locking', url: 'https://www.lockerlegends.net/history-of-locking/' },
  { label: 'LockerLegends — The Steps & Moves of Locking', url: 'https://www.lockerlegends.net/the-steps-moves-of-locking/' },
  { label: 'LockerLegends — Interview with Steve “Sugarfoot” Natorio', url: 'https://www.lockerlegends.net/posts/interview-with-steve-sugarfoot-natorio/' },
  { label: 'LockerLegends — The GoGo & YoYo Brothers of Watts', url: 'https://www.lockerlegends.net/dancers-groups-and-crews/gogo-brothers-page/' },
] as const;

export const skeeterRabbitStory: Record<Locale, SkeeterRabbitStory> = {
  sv: {
    intro: 'James “OG Skeeter Rabbit” Higgins är en pionjär från Lockingens ursprungsera, men hans betydelse stannar inte vid det han själv dansade. Som mentor, lärare och drivande kraft bakom LockerLegends har han ägnat årtionden åt att bevara människorna, sammanhangen och berättelserna runt dansen.',
    openingQuote: 'Vissa bygger sitt eftermäle genom att se till att det egna namnet blir ihågkommet. Andra bygger det genom att se till att ingen annan blir bortglömd.',
    portraitEyebrow: 'Pionjär / Mentor / Historiebevarare',
    portraitTitle: 'Mer än en del av historien',
    portraitText: 'För mig är Skeeter mer än en av Lockingens pionjärer. Han är min mentor, min vän och en av dem som format hur jag förstår kulturen runt dansen. Men hans betydelse sträcker sig långt utanför min egen berättelse.',
    galleryEyebrow: 'Möten / Kunskap / Gemenskap',
    galleryTitle: 'Historien mellan människorna',
    galleryCaptions: [
      'O.G. Skeeter Rabbit på FunkCamp, 2005.',
      'Tony GoGo och O.G. Skeeter Rabbit.',
      'James “OG Skeeter Rabbit” Higgins.',
      'Alex, Yared, O.G. Skeeter Rabbit och Manne på FunkCamp 2005, när Skeeter var i Sverige och delade med sig av sin kunskap.',
      'Greg “Campbellock Jr.” Pope, Robert “Rob-One” Wägar och O.G. Skeeter Rabbit på FunkCamp, 2005.',
      'Don Campbell, O.G. Skeeter Rabbit och Robert “Rob-One” Wägar i Las Vegas, 2011.',
    ],
    sections: [
      {
        eyebrow: 'Dansaren',
        title: 'Innan historikern fanns dansaren',
        paragraphs: [
          'James Higgins var en tidig dansare på Soul Train och medlem i flera viktiga grupper under Lockingens formativa år: Original Go-Go Brothers, Creative Generation vid Watts Writers Workshop och senare Ghetto Dancers. LockerLegends dokumenterar honom också som officiell ersättare med The Lockers under Frank Sinatra-turnén 1974 och som en av dem som organiserade och turnerade med 33RPM.',
          'Han dokumenterar alltså inte historien utifrån. Han stod själv i klubbarna, skolgårdarna och repetitionslokalerna medan dansen utvecklades. Hans namn lever dessutom i steget Skeeter Rabbit, som han skapade och utvecklade i flera variationer.',
        ],
      },
      {
        eyebrow: 'Ursprung och gemenskap',
        title: 'En grundare — och en hel gemenskap',
        paragraphs: [
          'En av de viktigaste tankarna i Skeeters arbete är att två sanningar kan finnas samtidigt. Don Campbell ska ha sitt självklara erkännande som skaparen av Campbellocking. Samtidigt växte dansen genom en större gemenskap av människor som bytte steg, byggde grupper, skapade rutiner och formade kulturen tillsammans.',
          'Att lyfta Scooby Doo, Greg Pope, Tony och Buddy GoGo, Alpha Anderson, Fluky Luke, Charles Robot, Netta Bug och många andra tar ingenting från Don. Det gör berättelsen större, mänskligare och mer precis.',
        ],
      },
      {
        eyebrow: 'Educate B4U Recreate',
        title: 'Ett arkiv byggt av dem som var där',
        paragraphs: [
          'Arbetet med LockerLegends tog form omkring 2003. Skeeter har alltid beskrivit det som ett kollektivt projekt, med kunskap från bland andra Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo och flera andra.',
          'På den tiden var kunskapen om åren före The Lockers kommersiella genombrott begränsad, särskilt utanför Los Angeles. LockerLegends hjälpte till att förändra frågan från “Vem blev känd?” till “Vilka var faktiskt där?” De två frågorna ger inte alltid samma svar.',
        ],
      },
      {
        eyebrow: 'Namn / Ansikten / Sammanhang',
        title: 'Att ge de förbisedda sin plats',
        paragraphs: [
          'LockerLegends har gång på gång lyft dansare vars berättelser fått mindre uppmärksamhet än de förtjänar: Jimmy “Scooby Doo” Foster, Alpha Omega Anderson, Pat Davis, Netta Bug, Freddie Maxie, Buddy GoGo, Guy “Shocklock” Evans, Charles och Slim Robot, Tito Collins och många fler.',
          'För senare generationer, särskilt utanför Los Angeles, var det ovärderligt. Före dagens ständiga tillgång till intervjuer, poddar och videor var LockerLegends en av platserna där namnen bakom dansen blev människor — med ansikten, relationer, grupper, bidrag och egna berättelser.',
        ],
      },
      {
        eyebrow: 'Perspektiv',
        title: 'Historia är inte alltid bekväm',
        paragraphs: [
          'Att bevara en kultur betyder inte bara att hylla den. Ibland betyder det att säga emot, ställa obekväma frågor och synliggöra sådant som inte passar den enklaste eller mest säljbara berättelsen.',
          'LockerLegends rymmer Skeeters och andra pionjärers perspektiv på språk, ursprung, afroamerikanskt kulturarv, kommersialisering och vilka som deltog under olika epoker. Man behöver inte dela varje tolkning för att förstå värdet av att förstahandsrösterna finns dokumenterade och kan mötas av andra källor.',
        ],
      },
      {
        eyebrow: 'Läraren',
        title: 'Mannen bakom arkivet',
        paragraphs: [
          'Viljan att undervisa började långt före webbplatsen. Steve “Sugarfoot” Natorio har berättat hur han och Tony “Crackerjack” Pierce som unga åkte in till South Central Los Angeles, knackade på Skeeters dörr och bad honom komma ut och lära dem. De fick inte bara steg, utan också kulturen och bakgrunden.',
          'Skådespelaren Ken Sagoes har beskrivit hur Skeeter redan 1974 tog sig tid för unga artister efter föreställningar och senare blev som en storebror för honom. LockerLegends skapade inte Skeeters vilja att dela kunskap — internet gjorde det bara möjligt för honom att fortsätta samma arbete inför en mycket större krets.',
        ],
      },
      {
        eyebrow: 'Personligt',
        title: 'Min mentor',
        paragraphs: [
          'Skeeter berättade inte bara för mig om pionjärerna. Han förde mig samman med dem. Det var han som kopplade ihop mig med Greg Campbellock Jr. Pope, som också blev en avgörande mentor i mitt liv, och genom Skeeter kunde jag bygga relationer med människor jag tidigare bara kände som namn ur danshistorien.',
          'När man får tala med dem som faktiskt var där slutar historien att vara en lista av årtal och berömda namn. Man börjar förstå vänskaperna, konflikterna, kvarteren, musiken, vem som lärde av vem och hur många människor som krävdes för att skapa det senare generationer fick ärva. Det sättet att se på Locking är en av huvudorsakerna till att den här webbplatsen finns.',
        ],
      },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: 'Se vad de gjorde',
    closing: [
      'Tony GoGo tackade en gång offentligt Skeeter för att han öppnade LockerLegends, förde dansare samman och hjälpte dem att berätta vad deras rörelse handlade om. Det fångar hans bidrag bättre än nästan något annat.',
      'Skeeter hade kunnat ägna årtionden åt att säga: “Se vad jag gjorde.” I stället har en stor del av hans arbete sagt: “Se vad de gjorde.” Se människorna, klubbarna, Watts, musiken och gemenskapen bakom dansen. En kultur överlever inte bara för att människor skapar den. Den överlever också för att någon bryr sig tillräckligt mycket för att minnas.',
    ],
    archiveLink: 'Besök LockerLegends',
    sourceNoteTitle: 'Om berättelsen och källorna',
    sourceNote: 'Sidan kombinerar mina personliga erfarenheter med material som Skeeter och andra pionjärer har publicerat genom LockerLegends. Det är ett förstahandsnära communityarkiv och samtidigt ett särskilt perspektiv på historien. Uppgifter om roller, datum och bidrag bör därför läsas tillsammans med andra dokumenterade röster när sådana finns.',
    sourcesTitle: 'Källor och vidare läsning',
  },
  en: {
    intro: 'James “OG Skeeter Rabbit” Higgins is a pioneer from Locking’s original era, but his importance reaches beyond what he danced himself. As a mentor, teacher and driving force behind LockerLegends, he has spent decades preserving the people, contexts and stories surrounding the dance.',
    openingQuote: 'Some people build their legacy by making sure their own name is remembered. Others build it by making sure no one else is forgotten.',
    portraitEyebrow: 'Pioneer / Mentor / History keeper',
    portraitTitle: 'More than part of the history',
    portraitText: 'To me, Skeeter is more than one of the pioneers of Locking. He is my mentor, my friend and one of the people who shaped how I understand the culture surrounding this dance. But his importance reaches far beyond my own story.',
    galleryEyebrow: 'Encounters / Knowledge / Community',
    galleryTitle: 'The history between people',
    galleryCaptions: [
      'O.G. Skeeter Rabbit at FunkCamp, 2005.',
      'Tony GoGo and O.G. Skeeter Rabbit.',
      'James “OG Skeeter Rabbit” Higgins.',
      'Alex, Yared, O.G. Skeeter Rabbit and Manne at FunkCamp 2005, when Skeeter came to Sweden to share his knowledge.',
      'Greg “Campbellock Jr.” Pope, Robert “Rob-One” Wägar and O.G. Skeeter Rabbit at FunkCamp, 2005.',
      'Don Campbell, O.G. Skeeter Rabbit and Robert “Rob-One” Wägar in Las Vegas, 2011.',
    ],
    sections: [
      {
        eyebrow: 'The dancer',
        title: 'Before the historian, there was the dancer',
        paragraphs: [
          'James Higgins was an early Soul Train dancer and a member of several important groups from Locking’s formative years: the Original Go-Go Brothers, Creative Generation at the Watts Writers Workshop and later the Ghetto Dancers. LockerLegends also documents him as an official alternate with The Lockers on the 1974 Frank Sinatra tour and as an organizer and touring member of 33RPM.',
          'He does not document this history from the outside. He stood in the clubs, schoolyards and rehearsal spaces while the dance was still developing. His name also lives in the Skeeter Rabbit step, which he created and developed in several variations.',
        ],
      },
      {
        eyebrow: 'Origin and community',
        title: 'A founder — and a whole community',
        paragraphs: [
          'One of the central ideas in Skeeter’s work is that two truths can stand together. Don Campbell deserves full recognition as the creator of Campbellocking. At the same time, the dance grew through a wider community that exchanged steps, built groups, created routines and shaped the culture collectively.',
          'Recognizing Scooby Doo, Greg Pope, Tony and Buddy GoGo, Alpha Anderson, Fluky Luke, Charles Robot, Netta Bug and many others takes nothing away from Don. It makes the history larger, more human and more precise.',
        ],
      },
      {
        eyebrow: 'Educate B4U Recreate',
        title: 'An archive built by those who were there',
        paragraphs: [
          'The work that became LockerLegends took shape around 2003. Skeeter has always described it as a collective project, drawing on knowledge from Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo and many others.',
          'At the time, little was widely understood about the years before The Lockers became commercially famous, particularly outside Los Angeles. LockerLegends helped shift the question from “Who became famous?” to “Who was actually there?” Those questions do not always have the same answer.',
        ],
      },
      {
        eyebrow: 'Names / Faces / Context',
        title: 'Giving overlooked people their place',
        paragraphs: [
          'LockerLegends repeatedly brought attention to dancers whose stories had received less recognition than they deserved: Jimmy “Scooby Doo” Foster, Alpha Omega Anderson, Pat Davis, Netta Bug, Freddie Maxie, Buddy GoGo, Guy “Shocklock” Evans, Charles and Slim Robot, Tito Collins and many more.',
          'For later generations, especially outside Los Angeles, this was invaluable. Before today’s constant access to interviews, podcasts and video, LockerLegends was one of the places where the names behind the dance became people — with faces, relationships, groups, contributions and stories of their own.',
        ],
      },
      {
        eyebrow: 'Perspective',
        title: 'History is not always comfortable',
        paragraphs: [
          'Preserving culture does not only mean celebrating it. Sometimes it means disagreeing, asking uncomfortable questions and making visible what does not fit the simplest or most marketable version of the story.',
          'LockerLegends carries Skeeter’s and other pioneers’ perspectives on terminology, origins, African American cultural heritage, commercialization and participation across different eras. You do not have to accept every interpretation to recognize the value of documenting firsthand voices and placing them in conversation with other sources.',
        ],
      },
      {
        eyebrow: 'The teacher',
        title: 'The man behind the archive',
        paragraphs: [
          'The desire to teach began long before the website. Steve “Sugarfoot” Natorio remembers travelling into South Central Los Angeles with Tony “Crackerjack” Pierce as young dancers, knocking on Skeeter’s door and asking him to come outside and teach. They learned not only steps, but the culture and background around them.',
          'Actor Ken Sagoes describes Skeeter taking time for young performers after shows as early as 1974 and later becoming like a big brother to him. LockerLegends did not create Skeeter’s desire to share knowledge — the internet simply allowed him to continue that work with a much larger circle.',
        ],
      },
      {
        eyebrow: 'Personal',
        title: 'My mentor',
        paragraphs: [
          'Skeeter did not simply tell me about the pioneers. He connected me to them. He introduced me to Greg Campbellock Jr. Pope, who also became a defining mentor in my life, and through Skeeter I built relationships with people I had previously known only as names from dance history.',
          'Once you speak to people who were actually there, history stops being a list of dates and famous names. You begin to understand friendships, disagreements, neighborhoods, music, who learned from whom and how many people it took to create what later generations inherited. That way of seeing Locking is one of the main reasons this website exists.',
        ],
      },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: 'Look what they did',
    closing: [
      'Tony GoGo once publicly thanked Skeeter for opening LockerLegends, bringing dancers together and helping them communicate what their movement was about. That describes his contribution better than almost anything else.',
      'Skeeter could have spent decades saying, “Look what I did.” Instead, much of his work has said, “Look what they did.” Look at the people, the clubs, Watts, the music and the community behind the dance. A culture survives not only because people create it. It also survives because someone cares enough to remember.',
    ],
    archiveLink: 'Visit LockerLegends',
    sourceNoteTitle: 'About the story and its sources',
    sourceNote: 'This page combines my personal experience with material published by Skeeter and other pioneers through LockerLegends. It is a community archive close to firsthand experience, and also a particular perspective on the history. Claims about roles, dates and contributions should therefore be read alongside other documented voices where available.',
    sourcesTitle: 'Sources and further reading',
  },
  fr: {
    intro: 'James « OG Skeeter Rabbit » Higgins est un pionnier de la période fondatrice du Locking, mais son importance dépasse largement ce qu’il a lui-même dansé. Mentor, enseignant et force motrice de LockerLegends, il consacre depuis des décennies son énergie à préserver les personnes, les contextes et les récits qui entourent cette danse.',
    openingQuote: 'Certaines personnes construisent leur héritage en veillant à ce que leur propre nom reste dans les mémoires. D’autres le construisent en veillant à ce que personne ne soit oublié.',
    portraitEyebrow: 'Pionnier / Mentor / Gardien de l’histoire',
    portraitTitle: 'Plus qu’un acteur de l’histoire',
    portraitText: 'Pour moi, Skeeter est plus qu’un pionnier du Locking. Il est mon mentor, mon ami et l’une des personnes qui ont façonné ma compréhension de la culture entourant cette danse. Mais son importance dépasse largement mon histoire personnelle.',
    galleryEyebrow: 'Rencontres / Savoir / Communauté',
    galleryTitle: 'L’histoire entre les personnes',
    galleryCaptions: [
      'O.G. Skeeter Rabbit à FunkCamp, 2005.',
      'Tony GoGo et O.G. Skeeter Rabbit.',
      'James « OG Skeeter Rabbit » Higgins.',
      'Alex, Yared, O.G. Skeeter Rabbit et Manne à FunkCamp en 2005, lorsque Skeeter est venu en Suède partager son savoir.',
      'Greg « Campbellock Jr. » Pope, Robert « Rob-One » Wägar et O.G. Skeeter Rabbit à FunkCamp, 2005.',
      'Don Campbell, O.G. Skeeter Rabbit et Robert « Rob-One » Wägar à Las Vegas, 2011.',
    ],
    sections: [
      { eyebrow: 'Le danseur', title: 'Avant l’historien, il y avait le danseur', paragraphs: ['James Higgins fut l’un des premiers danseurs de Soul Train et membre de plusieurs groupes importants des années formatrices du Locking : les Original Go-Go Brothers, Creative Generation au Watts Writers Workshop, puis les Ghetto Dancers. LockerLegends le présente également comme remplaçant officiel de The Lockers pendant la tournée de Frank Sinatra en 1974, puis comme organisateur et membre en tournée de 33RPM.', 'Il ne documente donc pas cette histoire de l’extérieur. Il était présent dans les clubs, les cours d’école et les salles de répétition pendant que la danse se développait. Son nom vit aussi dans le pas Skeeter Rabbit, qu’il a créé et décliné en plusieurs variantes.'] },
      { eyebrow: 'Origine et communauté', title: 'Un fondateur — et toute une communauté', paragraphs: ['Une idée centrale du travail de Skeeter est que deux vérités peuvent coexister. Don Campbell mérite pleinement d’être reconnu comme le créateur du Campbellocking. Dans le même temps, la danse a grandi grâce à une communauté plus vaste qui échangeait des pas, formait des groupes, créait des routines et façonnait collectivement la culture.', 'Reconnaître Scooby Doo, Greg Pope, Tony et Buddy GoGo, Alpha Anderson, Fluky Luke, Charles Robot, Netta Bug et tant d’autres n’enlève rien à Don. Cela rend l’histoire plus vaste, plus humaine et plus précise.'] },
      { eyebrow: 'Educate B4U Recreate', title: 'Une archive créée par celles et ceux qui étaient là', paragraphs: ['Le travail qui allait devenir LockerLegends prit forme autour de 2003. Skeeter l’a toujours présenté comme un projet collectif, nourri notamment par Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo et beaucoup d’autres.', 'À l’époque, les années précédant la célébrité commerciale de The Lockers étaient peu connues, surtout hors de Los Angeles. LockerLegends a aidé à déplacer la question de « Qui est devenu célèbre ? » vers « Qui était réellement présent ? » Ces questions ne donnent pas toujours la même réponse.'] },
      { eyebrow: 'Noms / Visages / Contexte', title: 'Redonner leur place aux personnes oubliées', paragraphs: ['LockerLegends a régulièrement mis en lumière des danseurs dont les histoires avaient reçu trop peu de reconnaissance : Jimmy « Scooby Doo » Foster, Alpha Omega Anderson, Pat Davis, Netta Bug, Freddie Maxie, Buddy GoGo, Guy « Shocklock » Evans, Charles et Slim Robot, Tito Collins et bien d’autres.', 'Pour les générations suivantes, particulièrement hors de Los Angeles, ce travail fut inestimable. Avant l’accès permanent aux interviews, podcasts et vidéos, LockerLegends était l’un des lieux où les noms derrière la danse devenaient des personnes, avec des visages, des relations, des groupes, des contributions et leurs propres récits.'] },
      { eyebrow: 'Point de vue', title: 'L’histoire n’est pas toujours confortable', paragraphs: ['Préserver une culture ne signifie pas seulement la célébrer. Il faut parfois contredire, poser des questions inconfortables et rendre visible ce qui ne rentre pas dans la version la plus simple ou la plus facile à vendre.', 'LockerLegends porte les perspectives de Skeeter et d’autres pionniers sur la terminologie, les origines, l’héritage culturel afro-américain, la commercialisation et les différentes époques. Il n’est pas nécessaire d’accepter chaque interprétation pour reconnaître la valeur de ces voix directes, mises en dialogue avec d’autres sources.'] },
      { eyebrow: 'L’enseignant', title: 'L’homme derrière les archives', paragraphs: ['Le désir d’enseigner existait bien avant le site. Steve « Sugarfoot » Natorio raconte qu’adolescent, il se rendait à South Central Los Angeles avec Tony « Crackerjack » Pierce, frappait à la porte de Skeeter et lui demandait de venir leur apprendre. Ils recevaient des pas, mais aussi la culture et le contexte.', 'L’acteur Ken Sagoes raconte que Skeeter prenait déjà du temps pour les jeunes artistes après les spectacles en 1974, avant de devenir pour lui comme un grand frère. LockerLegends n’a pas créé ce désir de transmettre : internet lui a simplement permis de poursuivre ce travail auprès d’un cercle bien plus large.'] },
      { eyebrow: 'Personnel', title: 'Mon mentor', paragraphs: ['Skeeter ne m’a pas seulement parlé des pionniers : il m’a mis en contact avec eux. C’est lui qui m’a présenté Greg Campbellock Jr. Pope, devenu à son tour un mentor décisif dans ma vie. Grâce à Skeeter, j’ai construit des relations avec des personnes que je ne connaissais auparavant que comme des noms de l’histoire de la danse.', 'Quand on parle avec celles et ceux qui étaient réellement là, l’histoire cesse d’être une liste de dates et de célébrités. On comprend les amitiés, les désaccords, les quartiers, la musique, qui a appris de qui et combien de personnes ont construit ce dont les générations suivantes ont hérité. Cette façon de voir le Locking est l’une des raisons principales pour lesquelles ce site existe.'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: 'Regardez ce qu’ils ont fait',
    closing: ['Tony GoGo a un jour remercié publiquement Skeeter d’avoir ouvert LockerLegends, rapproché les danseurs et aidé à expliquer ce que leur mouvement représentait. Peu de choses décrivent mieux sa contribution.', 'Skeeter aurait pu passer des décennies à dire : « Regardez ce que j’ai fait. » Une grande partie de son travail dit au contraire : « Regardez ce qu’ils ont fait. » Regardez les personnes, les clubs, Watts, la musique et la communauté derrière la danse. Une culture ne survit pas seulement parce que des gens la créent, mais aussi parce que quelqu’un tient assez à elle pour s’en souvenir.'],
    archiveLink: 'Visiter LockerLegends',
    sourceNoteTitle: 'À propos du récit et des sources',
    sourceNote: 'Cette page associe mon expérience personnelle aux documents publiés par Skeeter et d’autres pionniers sur LockerLegends. Il s’agit d’une archive communautaire proche des témoignages directs, mais aussi d’un point de vue particulier sur l’histoire. Les affirmations concernant les rôles, les dates et les contributions doivent donc être lues avec d’autres voix documentées lorsqu’elles existent.',
    sourcesTitle: 'Sources et lectures complémentaires',
  },
  fi: {
    intro: 'James ”OG Skeeter Rabbit” Higgins on Lockingin alkuperäisen aikakauden pioneeri, mutta hänen merkityksensä ulottuu paljon hänen oman tanssinsa ulkopuolelle. Mentorina, opettajana ja LockerLegendsin kantavana voimana hän on käyttänyt vuosikymmeniä tanssia ympäröivien ihmisten, yhteyksien ja tarinoiden säilyttämiseen.',
    openingQuote: 'Jotkut rakentavat perintönsä varmistamalla, että heidän oma nimensä muistetaan. Toiset rakentavat sen pitämällä huolen siitä, ettei ketään muuta unohdeta.',
    portraitEyebrow: 'Pioneeri / Mentori / Historian vaalija',
    portraitTitle: 'Enemmän kuin osa historiaa',
    portraitText: 'Minulle Skeeter on enemmän kuin yksi Lockingin pioneereista. Hän on mentorini, ystäväni ja yksi niistä ihmisistä, jotka ovat muovanneet tapaani ymmärtää tanssia ympäröivää kulttuuria. Hänen merkityksensä ulottuu kuitenkin paljon omaa tarinaani laajemmalle.',
    galleryEyebrow: 'Kohtaamiset / Tieto / Yhteisö',
    galleryTitle: 'Ihmisten välinen historia',
    galleryCaptions: [
      'O.G. Skeeter Rabbit FunkCampilla vuonna 2005.',
      'Tony GoGo ja O.G. Skeeter Rabbit.',
      'James ”OG Skeeter Rabbit” Higgins.',
      'Alex, Yared, O.G. Skeeter Rabbit ja Manne FunkCampilla vuonna 2005, kun Skeeter tuli Ruotsiin jakamaan tietämystään.',
      'Greg ”Campbellock Jr.” Pope, Robert ”Rob-One” Wägar ja O.G. Skeeter Rabbit FunkCampilla vuonna 2005.',
      'Don Campbell, O.G. Skeeter Rabbit ja Robert ”Rob-One” Wägar Las Vegasissa vuonna 2011.',
    ],
    sections: [
      { eyebrow: 'Tanssija', title: 'Ennen historioitsijaa oli tanssija', paragraphs: ['James Higgins oli varhainen Soul Train -tanssija ja kuului useisiin Lockingin muotoutumisvuosien tärkeisiin ryhmiin: Original Go-Go Brothersiin, Watts Writers Workshopin Creative Generationiin ja myöhemmin Ghetto Dancersiin. LockerLegends dokumentoi hänet myös The Lockersin virallisena varajäsenenä Frank Sinatran vuoden 1974 kiertueella sekä 33RPM:n järjestäjänä ja kiertuejäsenenä.', 'Hän ei siis dokumentoi historiaa ulkopuolelta. Hän oli klubeilla, koulupihoilla ja harjoitustiloissa tanssin vielä kehittyessä. Hänen nimensä elää myös hänen luomassaan Skeeter Rabbit -askeleessa ja sen monissa variaatioissa.'] },
      { eyebrow: 'Alkuperä ja yhteisö', title: 'Yksi perustaja — ja kokonainen yhteisö', paragraphs: ['Skeeterin työn keskeisiä ajatuksia on, että kaksi totuutta voi olla voimassa yhtä aikaa. Don Campbell ansaitsee täyden tunnustuksen Campbellocking-tyylin luojana. Samalla tanssi kasvoi laajemman yhteisön kautta: ihmiset vaihtoivat askelia, perustivat ryhmiä, loivat rutiineja ja rakensivat kulttuuria yhdessä.', 'Scooby Doon, Greg Popen, Tony ja Buddy GoGon, Alpha Andersonin, Fluky Luken, Charles Robotin, Netta Bugin ja monien muiden tunnustaminen ei vie Donilta mitään. Se tekee historiasta laajemman, inhimillisemmän ja tarkemman.'] },
      { eyebrow: 'Educate B4U Recreate', title: 'Paikalla olleiden rakentama arkisto', paragraphs: ['LockerLegendsiksi kasvanut työ alkoi muotoutua noin vuonna 2003. Skeeter on aina kuvannut sitä yhteisprojektiksi, johon tietoa toivat muun muassa Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo ja monet muut.', 'Tuolloin The Lockersin kaupallista läpimurtoa edeltävistä vuosista tiedettiin laajemmin hyvin vähän, etenkin Los Angelesin ulkopuolella. LockerLegends auttoi vaihtamaan kysymyksen ”Kenestä tuli kuuluisa?” kysymykseen ”Ketkä todella olivat paikalla?” Vastaukset eivät aina ole samoja.'] },
      { eyebrow: 'Nimet / Kasvot / Yhteys', title: 'Sivuun jääneiden tuominen näkyviin', paragraphs: ['LockerLegends on nostanut esiin tanssijoita, joiden tarinat olivat saaneet liian vähän huomiota: Jimmy ”Scooby Doo” Fosterin, Alpha Omega Andersonin, Pat Davisin, Netta Bugin, Freddie Maxien, Buddy GoGon, Guy ”Shocklock” Evansin, Charles ja Slim Robotin, Tito Collinsin sekä monet muut.', 'Myöhemmille sukupolville, erityisesti Los Angelesin ulkopuolella, työ oli korvaamatonta. Ennen nykyistä haastattelujen, podcastien ja videoiden jatkuvaa saatavuutta LockerLegends oli paikka, jossa tanssin takana olevat nimet muuttuivat ihmisiksi — kasvoineen, suhteineen, ryhmineen, tekoineen ja omine tarinoineen.'] },
      { eyebrow: 'Näkökulma', title: 'Historia ei ole aina mukavaa', paragraphs: ['Kulttuurin säilyttäminen ei tarkoita vain sen juhlimista. Joskus se tarkoittaa eri mieltä olemista, vaikeiden kysymysten esittämistä ja sellaisen näkyväksi tekemistä, mikä ei sovi tarinan yksinkertaisimpaan tai helpoimmin myytävään versioon.', 'LockerLegends sisältää Skeeterin ja muiden pioneerien näkökulmia terminologiaan, alkuperään, afroamerikkalaiseen kulttuuriperintöön, kaupallistumiseen ja eri aikakausien osallistujiin. Kaikkia tulkintoja ei tarvitse hyväksyä ymmärtääkseen suorien kokemusten dokumentoinnin ja muiden lähteiden kanssa käytävän vuoropuhelun arvon.'] },
      { eyebrow: 'Opettaja', title: 'Mies arkiston takana', paragraphs: ['Halu opettaa syntyi kauan ennen verkkosivua. Steve ”Sugarfoot” Natorio muistaa matkustaneensa nuorena Tony ”Crackerjack” Piercen kanssa South Central Los Angelesiin, koputtaneensa Skeeterin oveen ja pyytäneensä häntä ulos opettamaan. He oppivat askelten lisäksi myös niitä ympäröivän kulttuurin ja taustan.', 'Näyttelijä Ken Sagoes on kertonut Skeeterin antaneen aikaa nuorille esiintyjille jo vuonna 1974 ja olleen myöhemmin hänelle kuin isoveli. LockerLegends ei synnyttänyt Skeeterin halua jakaa tietoa — internet vain antoi hänelle mahdollisuuden jatkaa samaa työtä paljon suuremmalle joukolle.'] },
      { eyebrow: 'Henkilökohtainen', title: 'Mentorini', paragraphs: ['Skeeter ei vain kertonut minulle pioneereista, vaan yhdisti minut heihin. Hän tutustutti minut Greg Campbellock Jr. Popeen, josta tuli toinen ratkaiseva mentorini. Skeeterin kautta rakensin suhteita ihmisiin, jotka olin aiemmin tuntenut vain tanssihistorian niminä.', 'Kun puhuu paikalla olleiden ihmisten kanssa, historia lakkaa olemasta luettelo vuosista ja kuuluisista nimistä. Ystävyyssuhteet, ristiriidat, kaupunginosat, musiikki, oppimisen ketjut ja perinnön rakentamiseen tarvittu ihmisten määrä tulevat näkyviin. Tämä tapa katsoa Lockingia on yksi tärkeimmistä syistä tämän sivuston olemassaoloon.'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: 'Katso, mitä he tekivät',
    closing: ['Tony GoGo kiitti kerran julkisesti Skeeteriä LockerLegendsin avaamisesta, tanssijoiden kokoamisesta ja heidän liikkeensä merkityksen välittämisestä. Harva asia kuvaa hänen panostaan paremmin.', 'Skeeter olisi voinut käyttää vuosikymmeniä sanomalla: ”Katso, mitä minä tein.” Sen sijaan suuri osa hänen työstään sanoo: ”Katso, mitä he tekivät.” Katso ihmisiä, klubeja, Wattsia, musiikkia ja tanssin takana olevaa yhteisöä. Kulttuuri ei säily vain siksi, että ihmiset luovat sitä, vaan myös siksi, että joku välittää tarpeeksi muistaakseen.'],
    archiveLink: 'Vieraile LockerLegendsissä',
    sourceNoteTitle: 'Tarinasta ja lähteistä',
    sourceNote: 'Sivu yhdistää henkilökohtaiset kokemukseni Skeeterin ja muiden pioneerien LockerLegendsissä julkaisemaan aineistoon. Se on lähellä ensikäden kokemuksia oleva yhteisöarkisto, mutta samalla tietty näkökulma historiaan. Rooleja, vuosia ja panoksia koskevia väitteitä on siksi hyvä lukea muiden dokumentoitujen äänten rinnalla.',
    sourcesTitle: 'Lähteet ja lisälukemista',
  },
  es: {
    intro: 'James “OG Skeeter Rabbit” Higgins es un pionero de la era original del Locking, pero su importancia va mucho más allá de lo que él mismo bailó. Como mentor, maestro y fuerza impulsora de LockerLegends, ha dedicado décadas a preservar a las personas, los contextos y las historias que rodean esta danza.',
    openingQuote: 'Algunas personas construyen su legado asegurándose de que su propio nombre sea recordado. Otras lo construyen asegurándose de que nadie más sea olvidado.',
    portraitEyebrow: 'Pionero / Mentor / Guardián de la historia',
    portraitTitle: 'Más que una parte de la historia',
    portraitText: 'Para mí, Skeeter es más que uno de los pioneros del Locking. Es mi mentor, mi amigo y una de las personas que dieron forma a mi manera de entender la cultura que rodea esta danza. Pero su importancia va mucho más allá de mi propia historia.',
    galleryEyebrow: 'Encuentros / Conocimiento / Comunidad',
    galleryTitle: 'La historia entre las personas',
    galleryCaptions: [
      'O.G. Skeeter Rabbit en FunkCamp, 2005.',
      'Tony GoGo y O.G. Skeeter Rabbit.',
      'James “OG Skeeter Rabbit” Higgins.',
      'Alex, Yared, O.G. Skeeter Rabbit y Manne en FunkCamp 2005, cuando Skeeter vino a Suecia para compartir sus conocimientos.',
      'Greg “Campbellock Jr.” Pope, Robert “Rob-One” Wägar y O.G. Skeeter Rabbit en FunkCamp, 2005.',
      'Don Campbell, O.G. Skeeter Rabbit y Robert “Rob-One” Wägar en Las Vegas, 2011.',
    ],
    sections: [
      { eyebrow: 'El bailarín', title: 'Antes del historiador estuvo el bailarín', paragraphs: ['James Higgins fue uno de los primeros bailarines de Soul Train y miembro de varios grupos importantes durante los años formativos del Locking: Original Go-Go Brothers, Creative Generation en Watts Writers Workshop y, más tarde, Ghetto Dancers. LockerLegends también lo documenta como suplente oficial de The Lockers durante la gira de Frank Sinatra de 1974 y como organizador e integrante de gira de 33RPM.', 'No documenta esta historia desde afuera. Estuvo en los clubes, patios escolares y salas de ensayo mientras la danza todavía se desarrollaba. Su nombre también vive en el paso Skeeter Rabbit, que creó y desarrolló en distintas variaciones.'] },
      { eyebrow: 'Origen y comunidad', title: 'Un fundador — y toda una comunidad', paragraphs: ['Una idea central en el trabajo de Skeeter es que dos verdades pueden coexistir. Don Campbell merece pleno reconocimiento como creador del Campbellocking. Al mismo tiempo, la danza creció gracias a una comunidad más amplia que intercambió pasos, formó grupos, creó rutinas y construyó la cultura colectivamente.', 'Reconocer a Scooby Doo, Greg Pope, Tony y Buddy GoGo, Alpha Anderson, Fluky Luke, Charles Robot, Netta Bug y muchas otras personas no le quita nada a Don. Hace que la historia sea más amplia, humana y precisa.'] },
      { eyebrow: 'Educate B4U Recreate', title: 'Un archivo construido por quienes estuvieron ahí', paragraphs: ['El trabajo que se convertiría en LockerLegends comenzó a tomar forma alrededor de 2003. Skeeter siempre lo ha presentado como un proyecto colectivo, alimentado por el conocimiento de Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo y muchas otras personas.', 'En ese momento se conocía muy poco sobre los años anteriores a la fama comercial de The Lockers, especialmente fuera de Los Angeles. LockerLegends ayudó a cambiar la pregunta de “¿Quién se hizo famoso?” a “¿Quién estuvo realmente ahí?” Las respuestas no siempre son las mismas.'] },
      { eyebrow: 'Nombres / Rostros / Contexto', title: 'Dar su lugar a quienes fueron ignorados', paragraphs: ['LockerLegends destacó una y otra vez a bailarines cuyas historias habían recibido menos reconocimiento del merecido: Jimmy “Scooby Doo” Foster, Alpha Omega Anderson, Pat Davis, Netta Bug, Freddie Maxie, Buddy GoGo, Guy “Shocklock” Evans, Charles y Slim Robot, Tito Collins y muchas personas más.', 'Para generaciones posteriores, sobre todo fuera de Los Angeles, este trabajo fue invaluable. Antes del acceso constante a entrevistas, podcasts y videos, LockerLegends fue uno de los lugares donde los nombres detrás de la danza se convirtieron en personas, con rostros, relaciones, grupos, aportes e historias propias.'] },
      { eyebrow: 'Perspectiva', title: 'La historia no siempre es cómoda', paragraphs: ['Preservar una cultura no significa solamente celebrarla. A veces implica disentir, hacer preguntas incómodas y visibilizar aquello que no encaja en la versión más sencilla o fácil de vender.', 'LockerLegends reúne las perspectivas de Skeeter y otros pioneros sobre terminología, orígenes, herencia cultural afroamericana, comercialización y participación en distintas épocas. No hace falta aceptar cada interpretación para reconocer el valor de documentar voces directas y ponerlas en diálogo con otras fuentes.'] },
      { eyebrow: 'El maestro', title: 'El hombre detrás del archivo', paragraphs: ['El deseo de enseñar comenzó mucho antes del sitio web. Steve “Sugarfoot” Natorio recuerda haber viajado de joven a South Central Los Angeles con Tony “Crackerjack” Pierce, tocar la puerta de Skeeter y pedirle que saliera a enseñarles. Aprendieron no solo pasos, sino también la cultura y el contexto.', 'El actor Ken Sagoes cuenta que Skeeter ya dedicaba tiempo a jóvenes artistas después de los espectáculos en 1974 y que más tarde se convirtió en una especie de hermano mayor. LockerLegends no creó su deseo de compartir conocimiento: internet simplemente le permitió continuar ese trabajo con un círculo mucho más amplio.'] },
      { eyebrow: 'Personal', title: 'Mi mentor', paragraphs: ['Skeeter no se limitó a hablarme de los pioneros: me conectó con ellos. Me presentó a Greg Campbellock Jr. Pope, quien también se convirtió en un mentor decisivo en mi vida. Gracias a Skeeter pude construir relaciones con personas que antes solo conocía como nombres de la historia de la danza.', 'Cuando hablas con quienes realmente estuvieron ahí, la historia deja de ser una lista de fechas y nombres famosos. Empiezas a comprender las amistades, desacuerdos, barrios, música, quién aprendió de quién y cuántas personas hicieron falta para crear lo que heredaron las generaciones posteriores. Esa manera de ver el Locking es una de las principales razones por las que existe este sitio.'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: 'Mira lo que hicieron',
    closing: ['Tony GoGo agradeció públicamente a Skeeter por abrir LockerLegends, reunir a bailarines y ayudarlos a comunicar lo que significaba su movimiento. Pocas cosas describen mejor su contribución.', 'Skeeter podría haber pasado décadas diciendo: “Mira lo que hice”. En cambio, gran parte de su trabajo ha dicho: “Mira lo que hicieron”. Mira a las personas, los clubes, Watts, la música y la comunidad detrás de la danza. Una cultura no sobrevive solo porque alguien la crea. También sobrevive porque alguien se preocupa lo suficiente como para recordarla.'],
    archiveLink: 'Visitar LockerLegends',
    sourceNoteTitle: 'Sobre la historia y sus fuentes',
    sourceNote: 'Esta página combina mi experiencia personal con material publicado por Skeeter y otros pioneros a través de LockerLegends. Es un archivo comunitario cercano a experiencias directas, pero también representa una perspectiva particular de la historia. Por eso, las afirmaciones sobre funciones, fechas y aportes deben leerse junto con otras voces documentadas cuando estén disponibles.',
    sourcesTitle: 'Fuentes y lecturas adicionales',
  },
  pt: {
    intro: 'James “OG Skeeter Rabbit” Higgins é um pioneiro da era original do Locking, mas sua importância vai muito além do que ele próprio dançou. Como mentor, professor e força motriz do LockerLegends, dedicou décadas a preservar as pessoas, os contextos e as histórias em torno dessa dança.',
    openingQuote: 'Algumas pessoas constroem seu legado garantindo que o próprio nome seja lembrado. Outras o constroem garantindo que ninguém mais seja esquecido.',
    portraitEyebrow: 'Pioneiro / Mentor / Guardião da história',
    portraitTitle: 'Mais do que parte da história',
    portraitText: 'Para mim, Skeeter é mais do que um dos pioneiros do Locking. Ele é meu mentor, meu amigo e uma das pessoas que moldaram a maneira como compreendo a cultura em torno dessa dança. Mas sua importância vai muito além da minha própria história.',
    galleryEyebrow: 'Encontros / Conhecimento / Comunidade',
    galleryTitle: 'A história entre as pessoas',
    galleryCaptions: [
      'O.G. Skeeter Rabbit no FunkCamp, 2005.',
      'Tony GoGo e O.G. Skeeter Rabbit.',
      'James “OG Skeeter Rabbit” Higgins.',
      'Alex, Yared, O.G. Skeeter Rabbit e Manne no FunkCamp 2005, quando Skeeter veio à Suécia para compartilhar seu conhecimento.',
      'Greg “Campbellock Jr.” Pope, Robert “Rob-One” Wägar e O.G. Skeeter Rabbit no FunkCamp, 2005.',
      'Don Campbell, O.G. Skeeter Rabbit e Robert “Rob-One” Wägar em Las Vegas, 2011.',
    ],
    sections: [
      { eyebrow: 'O dançarino', title: 'Antes do historiador, havia o dançarino', paragraphs: ['James Higgins foi um dos primeiros dançarinos do Soul Train e integrou grupos importantes dos anos de formação do Locking: Original Go-Go Brothers, Creative Generation no Watts Writers Workshop e, mais tarde, Ghetto Dancers. O LockerLegends também o documenta como substituto oficial do The Lockers na turnê de Frank Sinatra em 1974 e como organizador e integrante em turnê do 33RPM.', 'Ele não documenta essa história de fora. Esteve nos clubes, pátios de escola e salas de ensaio enquanto a dança ainda se desenvolvia. Seu nome também vive no passo Skeeter Rabbit, que criou e desenvolveu em diversas variações.'] },
      { eyebrow: 'Origem e comunidade', title: 'Um fundador — e toda uma comunidade', paragraphs: ['Uma das ideias centrais no trabalho de Skeeter é que duas verdades podem coexistir. Don Campbell merece pleno reconhecimento como criador do Campbellocking. Ao mesmo tempo, a dança cresceu por meio de uma comunidade mais ampla que trocou passos, formou grupos, criou rotinas e construiu a cultura coletivamente.', 'Reconhecer Scooby Doo, Greg Pope, Tony e Buddy GoGo, Alpha Anderson, Fluky Luke, Charles Robot, Netta Bug e tantas outras pessoas não tira nada de Don. Isso torna a história maior, mais humana e mais precisa.'] },
      { eyebrow: 'Educate B4U Recreate', title: 'Um arquivo construído por quem estava lá', paragraphs: ['O trabalho que se tornaria o LockerLegends começou a tomar forma por volta de 2003. Skeeter sempre o descreveu como um projeto coletivo, alimentado pelo conhecimento de Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo e muitas outras pessoas.', 'Naquele momento, pouco se sabia sobre os anos anteriores à fama comercial do The Lockers, principalmente fora de Los Angeles. O LockerLegends ajudou a mudar a pergunta de “Quem ficou famoso?” para “Quem realmente estava lá?” As respostas nem sempre são iguais.'] },
      { eyebrow: 'Nomes / Rostos / Contexto', title: 'Dar lugar a quem foi deixado de lado', paragraphs: ['O LockerLegends destacou repetidamente dançarinos cujas histórias receberam menos reconhecimento do que mereciam: Jimmy “Scooby Doo” Foster, Alpha Omega Anderson, Pat Davis, Netta Bug, Freddie Maxie, Buddy GoGo, Guy “Shocklock” Evans, Charles e Slim Robot, Tito Collins e muitos outros.', 'Para gerações posteriores, especialmente fora de Los Angeles, esse trabalho foi inestimável. Antes do acesso constante a entrevistas, podcasts e vídeos, o LockerLegends foi um dos lugares onde os nomes por trás da dança se tornaram pessoas, com rostos, relações, grupos, contribuições e histórias próprias.'] },
      { eyebrow: 'Perspectiva', title: 'A história nem sempre é confortável', paragraphs: ['Preservar uma cultura não significa apenas celebrá-la. Às vezes significa discordar, fazer perguntas difíceis e tornar visível aquilo que não cabe na versão mais simples ou mais fácil de vender.', 'O LockerLegends reúne perspectivas de Skeeter e de outros pioneiros sobre terminologia, origens, herança cultural afro-americana, comercialização e participação em diferentes épocas. Não é preciso aceitar todas as interpretações para reconhecer o valor de documentar vozes diretas e colocá-las em diálogo com outras fontes.'] },
      { eyebrow: 'O professor', title: 'O homem por trás do arquivo', paragraphs: ['O desejo de ensinar começou muito antes do site. Steve “Sugarfoot” Natorio lembra que, quando jovem, viajava até South Central Los Angeles com Tony “Crackerjack” Pierce, batia à porta de Skeeter e pedia que ele saísse para ensiná-los. Eles aprenderam não apenas passos, mas também a cultura e o contexto.', 'O ator Ken Sagoes conta que Skeeter já dedicava tempo a jovens artistas depois dos espetáculos em 1974 e que mais tarde se tornou como um irmão mais velho. O LockerLegends não criou sua vontade de compartilhar conhecimento — a internet apenas permitiu que ele continuasse esse trabalho com um círculo muito maior.'] },
      { eyebrow: 'Pessoal', title: 'Meu mentor', paragraphs: ['Skeeter não apenas me contou sobre os pioneiros: ele me conectou a eles. Foi ele quem me apresentou a Greg Campbellock Jr. Pope, que também se tornou um mentor decisivo em minha vida. Por meio de Skeeter, construí relações com pessoas que antes conhecia apenas como nomes da história da dança.', 'Quando falamos com quem realmente estava lá, a história deixa de ser uma lista de datas e nomes famosos. Começamos a entender amizades, divergências, bairros, música, quem aprendeu com quem e quantas pessoas foram necessárias para criar o que as gerações seguintes herdaram. Essa maneira de enxergar o Locking é uma das principais razões para a existência deste site.'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: 'Veja o que eles fizeram',
    closing: ['Tony GoGo certa vez agradeceu publicamente a Skeeter por abrir o LockerLegends, reunir dançarinos e ajudá-los a comunicar o significado de seu movimento. Poucas coisas descrevem melhor sua contribuição.', 'Skeeter poderia ter passado décadas dizendo: “Veja o que eu fiz”. Em vez disso, grande parte de seu trabalho diz: “Veja o que eles fizeram”. Veja as pessoas, os clubes, Watts, a música e a comunidade por trás da dança. Uma cultura não sobrevive apenas porque alguém a cria. Ela também sobrevive porque alguém se importa o bastante para lembrar.'],
    archiveLink: 'Visitar o LockerLegends',
    sourceNoteTitle: 'Sobre a história e as fontes',
    sourceNote: 'Esta página combina minha experiência pessoal com materiais publicados por Skeeter e outros pioneiros no LockerLegends. É um arquivo comunitário próximo de experiências diretas, mas também representa uma perspectiva particular da história. Por isso, afirmações sobre papéis, datas e contribuições devem ser lidas junto a outras vozes documentadas quando disponíveis.',
    sourcesTitle: 'Fontes e leituras adicionais',
  },
  ko: {
    intro: 'James “OG Skeeter Rabbit” Higgins는 Locking 오리지널 시대의 파이오니어입니다. 하지만 그의 중요성은 자신이 춘 춤을 훨씬 넘어섭니다. 멘토이자 교사이며 LockerLegends를 이끈 인물로서, 그는 수십 년 동안 이 춤을 둘러싼 사람과 맥락, 이야기를 보존해 왔습니다.',
    openingQuote: '어떤 사람은 자신의 이름이 기억되도록 하며 유산을 만듭니다. 또 어떤 사람은 다른 누구도 잊히지 않도록 하며 유산을 만듭니다.',
    portraitEyebrow: '파이오니어 / 멘토 / 역사의 수호자',
    portraitTitle: '역사의 일부, 그 이상',
    portraitText: '제게 Skeeter는 Locking의 파이오니어 중 한 명 그 이상입니다. 그는 제 멘토이자 친구이며, 이 춤을 둘러싼 문화를 이해하는 제 관점을 만들어 준 사람입니다. 그러나 그의 중요성은 제 개인적인 이야기를 훨씬 넘어섭니다.',
    galleryEyebrow: '만남 / 지식 / 공동체',
    galleryTitle: '사람들 사이에 살아 있는 역사',
    galleryCaptions: [
      '2005년 FunkCamp의 O.G. Skeeter Rabbit.',
      'Tony GoGo와 O.G. Skeeter Rabbit.',
      'James “OG Skeeter Rabbit” Higgins.',
      '2005년 Skeeter가 지식을 나누기 위해 스웨덴을 찾았을 때 FunkCamp에서 함께한 Alex, Yared, O.G. Skeeter Rabbit, Manne.',
      '2005년 FunkCamp의 Greg “Campbellock Jr.” Pope, Robert “Rob-One” Wägar, O.G. Skeeter Rabbit.',
      '2011년 Las Vegas의 Don Campbell, O.G. Skeeter Rabbit, Robert “Rob-One” Wägar.',
    ],
    sections: [
      { eyebrow: '댄서', title: '역사가이기 전에, 그는 댄서였다', paragraphs: ['James Higgins는 초기 Soul Train 댄서였고 Locking이 형성되던 시기의 여러 중요한 그룹에 속했습니다. Original Go-Go Brothers, Watts Writers Workshop의 Creative Generation, 이후 Ghetto Dancers가 그 예입니다. LockerLegends는 그가 1974년 Frank Sinatra 투어에서 The Lockers의 공식 대체 멤버로 활동했고, 33RPM을 조직해 투어한 인물이라고도 기록합니다.', '그는 이 역사를 바깥에서 기록한 사람이 아닙니다. 춤이 발전하던 시기에 클럽과 학교 운동장, 연습실에 직접 있었습니다. 그가 만들고 여러 변형으로 발전시킨 Skeeter Rabbit 스텝에도 그의 이름이 살아 있습니다.'] },
      { eyebrow: '기원과 공동체', title: '한 명의 창시자 — 그리고 하나의 공동체', paragraphs: ['Skeeter의 작업을 관통하는 핵심 생각은 두 가지 진실이 함께 설 수 있다는 것입니다. Don Campbell은 Campbellocking의 창시자로서 온전한 존중을 받아야 합니다. 동시에 이 춤은 스텝을 나누고, 그룹을 만들고, 루틴을 창작하며 함께 문화를 빚은 더 넓은 공동체를 통해 성장했습니다.', 'Scooby Doo, Greg Pope, Tony와 Buddy GoGo, Alpha Anderson, Fluky Luke, Charles Robot, Netta Bug 등 수많은 사람을 인정하는 일은 Don의 업적을 줄이지 않습니다. 오히려 역사를 더 넓고 인간적이며 정확하게 만듭니다.'] },
      { eyebrow: 'Educate B4U Recreate', title: '그곳에 있었던 사람들이 만든 아카이브', paragraphs: ['LockerLegends로 이어진 작업은 2003년 무렵 구체화되기 시작했습니다. Skeeter는 이를 Greg Campbellock Jr. Pope, Tony GoGo, Steve Crane, Greg Dandridge, Guy Evans, Arnetta Johnson, Fluky Luke, Tito Collins, Peek-a-Boo 등 많은 이들의 지식이 모인 공동 프로젝트라고 일관되게 설명해 왔습니다.', '당시에는 The Lockers가 상업적으로 유명해지기 전 시기에 관한 이해가 널리 퍼져 있지 않았으며, Los Angeles 밖에서는 더욱 그랬습니다. LockerLegends는 질문을 “누가 유명해졌는가?”에서 “실제로 그곳에 누가 있었는가?”로 바꾸는 데 기여했습니다. 두 질문의 답은 언제나 같지 않습니다.'] },
      { eyebrow: '이름 / 얼굴 / 맥락', title: '주목받지 못한 이들에게 자리를 돌려주다', paragraphs: ['LockerLegends는 충분한 인정을 받지 못했던 댄서들을 꾸준히 조명했습니다. Jimmy “Scooby Doo” Foster, Alpha Omega Anderson, Pat Davis, Netta Bug, Freddie Maxie, Buddy GoGo, Guy “Shocklock” Evans, Charles와 Slim Robot, Tito Collins 등이 그 예입니다.', '특히 Los Angeles 밖의 후대에게 이 작업은 매우 중요했습니다. 인터뷰와 팟캐스트, 영상을 언제든 접할 수 있기 전, LockerLegends는 춤 뒤의 이름들이 얼굴과 관계, 그룹, 기여와 자기 이야기를 지닌 사람으로 다가오게 해 준 공간이었습니다.'] },
      { eyebrow: '관점', title: '역사는 언제나 편안하지 않다', paragraphs: ['문화를 보존한다는 것은 찬양만 한다는 뜻이 아닙니다. 때로는 이견을 말하고, 불편한 질문을 던지며, 가장 단순하거나 팔기 쉬운 이야기에서 빠진 것을 드러내야 합니다.', 'LockerLegends에는 용어, 기원, 아프리카계 미국인의 문화유산, 상업화와 각 시대의 참여자에 관한 Skeeter와 다른 파이오니어들의 관점이 담겨 있습니다. 모든 해석에 동의하지 않더라도, 당사자의 목소리를 기록하고 다른 자료와 대화하게 하는 가치는 분명합니다.'] },
      { eyebrow: '교사', title: '아카이브 뒤의 사람', paragraphs: ['가르치려는 마음은 웹사이트보다 훨씬 먼저 시작됐습니다. Steve “Sugarfoot” Natorio는 어린 시절 Tony “Crackerjack” Pierce와 South Central Los Angeles로 가 Skeeter의 문을 두드리고 밖으로 나와 가르쳐 달라고 했던 일을 회상합니다. 그들은 스텝뿐 아니라 문화와 배경까지 배웠습니다.', '배우 Ken Sagoes도 Skeeter가 이미 1974년 공연 뒤에 젊은 아티스트들을 위해 시간을 내주었고, 나중에는 형 같은 존재가 됐다고 이야기합니다. LockerLegends가 Skeeter의 나눔을 만든 것이 아닙니다. 인터넷이 그 일을 훨씬 넓은 사람들과 이어갈 수 있게 했을 뿐입니다.'] },
      { eyebrow: '개인적인 이야기', title: '나의 멘토', paragraphs: ['Skeeter는 제게 파이오니어들의 이야기를 들려주는 데 그치지 않고 그들과 연결해 주었습니다. 그는 또 한 명의 결정적인 멘토가 된 Greg Campbellock Jr. Pope를 소개해 주었고, 저는 Skeeter를 통해 이전에는 춤 역사의 이름으로만 알던 사람들과 관계를 맺었습니다.', '실제로 그곳에 있었던 사람들과 이야기하면 역사는 연도와 유명인의 목록이 아니게 됩니다. 우정과 갈등, 동네와 음악, 누가 누구에게 배웠는지, 후대가 물려받은 것을 만드는 데 얼마나 많은 사람이 필요했는지가 보입니다. Locking을 이렇게 바라보는 관점은 이 사이트가 존재하는 가장 중요한 이유 중 하나입니다.'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: '그들이 한 일을 보라',
    closing: ['Tony GoGo는 LockerLegends를 열고 댄서들을 연결하며 그들의 움직임이 무엇이었는지 알리는 데 힘쓴 Skeeter에게 공개적으로 감사를 전한 적이 있습니다. 그의 기여를 이보다 더 잘 설명하기는 어렵습니다.', 'Skeeter는 수십 년 동안 “내가 한 일을 보라”고 말할 수도 있었습니다. 하지만 그의 작업 대부분은 “그들이 한 일을 보라”고 말합니다. 사람과 클럽, Watts, 음악과 춤 뒤의 공동체를 보라고 합니다. 문화는 누군가가 창조했기 때문에만 살아남는 것이 아닙니다. 누군가가 기억할 만큼 깊이 아끼기 때문에도 살아남습니다.'],
    archiveLink: 'LockerLegends 방문하기',
    sourceNoteTitle: '이 이야기와 출처에 관하여',
    sourceNote: '이 페이지는 제 개인적인 경험과 Skeeter 및 다른 파이오니어들이 LockerLegends에 공개한 자료를 함께 엮었습니다. 이곳은 당사자의 경험에 가까운 커뮤니티 아카이브인 동시에 역사에 관한 특정한 관점이기도 합니다. 따라서 역할, 연도와 기여에 관한 주장은 가능한 경우 다른 기록된 목소리와 함께 읽어야 합니다.',
    sourcesTitle: '출처 및 더 읽어보기',
  },
  ja: {
    intro: 'James “OG Skeeter Rabbit” HigginsはLockingのオリジナル時代を生きたパイオニアです。しかし、その重要性は彼自身が踊ったものだけにとどまりません。メンター、教師、そしてLockerLegendsを動かす中心人物として、彼は何十年にもわたり、このダンスを取り巻く人々、背景、物語を残してきました。',
    openingQuote: '自分の名前が記憶されることでレガシーを築く人がいる。誰ひとり忘れられないようにすることでレガシーを築く人もいる。',
    portraitEyebrow: 'パイオニア / メンター / 歴史の守り手',
    portraitTitle: '歴史の一部、その先へ',
    portraitText: '私にとってSkeeterはLockingのパイオニアの一人というだけではありません。私のメンターであり友人であり、このダンスを取り巻く文化への理解を形づくってくれた人物です。そして、その重要性は私自身の物語をはるかに越えています。',
    galleryEyebrow: '出会い / 知識 / コミュニティ',
    galleryTitle: '人と人との間にある歴史',
    galleryCaptions: [
      '2005年FunkCampのO.G. Skeeter Rabbit。',
      'Tony GoGoとO.G. Skeeter Rabbit。',
      'James “OG Skeeter Rabbit” Higgins。',
      'Skeeterが知識を伝えるためスウェーデンを訪れた2005年、FunkCampでのAlex、Yared、O.G. Skeeter Rabbit、Manne。',
      '2005年FunkCampのGreg “Campbellock Jr.” Pope、Robert “Rob-One” Wägar、O.G. Skeeter Rabbit。',
      '2011年Las VegasのDon Campbell、O.G. Skeeter Rabbit、Robert “Rob-One” Wägar。',
    ],
    sections: [
      { eyebrow: 'ダンサー', title: '歴史家である前に、ダンサーだった', paragraphs: ['James Higginsは初期のSoul Trainダンサーであり、Lockingが形づくられた時代の重要なグループに所属しました。Original Go-Go Brothers、Watts Writers WorkshopのCreative Generation、そして後のGhetto Dancersです。LockerLegendsは、1974年のFrank SinatraツアーでThe Lockersの公式代役を務め、その後33RPMを組織してツアーした人物としても記録しています。', '彼は歴史を外側から記録しているのではありません。ダンスがまだ発展の途上にあった時代、クラブ、学校の校庭、リハーサル室に実際にいました。彼が生み出し、いくつものバリエーションへ発展させたSkeeter Rabbitステップにも、その名が残っています。'] },
      { eyebrow: '起源とコミュニティ', title: '一人の創始者 — そしてコミュニティ全体', paragraphs: ['Skeeterの仕事を貫く大切な考えは、二つの真実が同時に成り立つということです。Don CampbellはCampbellockingの創始者として最大限の敬意を受けるべきです。同時に、このダンスはステップを交換し、グループやルーティンを作り、ともに文化を形づくったより大きなコミュニティを通して成長しました。', 'Scooby Doo、Greg Pope、TonyとBuddy GoGo、Alpha Anderson、Fluky Luke、Charles Robot、Netta Bugらを称えることは、Donの功績を損ないません。歴史をより広く、人間的に、正確にします。'] },
      { eyebrow: 'Educate B4U Recreate', title: 'その場にいた人々が作ったアーカイブ', paragraphs: ['LockerLegendsへと発展する活動は2003年頃に形を取り始めました。Skeeterは一貫して、Greg Campbellock Jr. Pope、Tony GoGo、Steve Crane、Greg Dandridge、Guy Evans、Arnetta Johnson、Fluky Luke、Tito Collins、Peek-a-Booなど多くの人々の知識を集めた共同プロジェクトだと説明しています。', '当時、The Lockersが商業的に有名になる前の時代については、特にLos Angelesの外でほとんど理解されていませんでした。LockerLegendsは問いを「誰が有名になったか」から「実際にそこにいたのは誰か」へ変える助けとなりました。その答えは、いつも同じではありません。'] },
      { eyebrow: '名前 / 顔 / 背景', title: '見過ごされた人々に場所を返す', paragraphs: ['LockerLegendsは、十分に評価されてこなかったダンサーたちを繰り返し紹介しました。Jimmy “Scooby Doo” Foster、Alpha Omega Anderson、Pat Davis、Netta Bug、Freddie Maxie、Buddy GoGo、Guy “Shocklock” Evans、CharlesとSlim Robot、Tito Collinsなどです。', '後の世代、特にLos Angelesの外にいる人々にとって、この仕事はかけがえのないものでした。インタビュー、ポッドキャスト、映像へ常にアクセスできる今日より前、LockerLegendsはダンスの背後にある名前を、顔、関係、グループ、貢献、そして自分自身の物語を持つ人間として伝えた場所の一つでした。'] },
      { eyebrow: '視点', title: '歴史はいつも心地よいとは限らない', paragraphs: ['文化を守ることは、ただ祝福することではありません。時には異議を唱え、難しい問いを投げかけ、最も単純で売りやすい物語に収まらないものを可視化する必要があります。', 'LockerLegendsには、用語、起源、アフリカ系アメリカ人の文化的遺産、商業化、各時代の参加者について、Skeeterや他のパイオニアの視点が記録されています。すべての解釈に同意しなくても、当事者の声を残し、他の資料と対話させる価値は認められます。'] },
      { eyebrow: '教師', title: 'アーカイブの向こうにいる人', paragraphs: ['教える意志はウェブサイトよりずっと前からありました。Steve “Sugarfoot” Natorioは、若い頃Tony “Crackerjack” PierceとSouth Central Los Angelesへ行き、Skeeterの家のドアをたたいて外で教えてほしいと頼んだことを振り返っています。二人はステップだけでなく、文化と背景も学びました。', '俳優Ken Sagoesも、Skeeterが1974年当時から公演後に若い表現者へ時間を割き、後には兄のような存在になったと語っています。LockerLegendsが知識を伝える意志を生んだのではありません。インターネットが、その仕事をより大きな輪へ広げただけです。'] },
      { eyebrow: '個人的な物語', title: '私のメンター', paragraphs: ['Skeeterはパイオニアについて話すだけでなく、私を彼らと結びつけてくれました。彼は、私の人生でも決定的なメンターとなったGreg Campbellock Jr. Popeを紹介してくれました。そしてSkeeterを通して、それまでダンス史の名前としてしか知らなかった人々と関係を築けました。', '実際にそこにいた人々と話すと、歴史は年号と有名人のリストではなくなります。友情、対立、地域、音楽、誰が誰から学んだのか、後世が受け継いだものを作るためにどれほど多くの人が必要だったのかが見えてきます。このLockingの見方こそ、このサイトが存在する大きな理由の一つです。'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: '彼らがしたことを見てほしい',
    closing: ['Tony GoGoはかつて、LockerLegendsを立ち上げ、ダンサーを結びつけ、自分たちのムーブメントが何だったのかを伝えたSkeeterへ公に感謝しました。それほど彼の貢献を的確に表すものはありません。', 'Skeeterは何十年も「私がしたことを見てほしい」と言うこともできました。しかし彼の仕事の多くは「彼らがしたことを見てほしい」と語っています。人々、クラブ、Watts、音楽、そしてダンスの背後にあるコミュニティを見てほしい、と。文化は誰かが創ったからだけで生き残るのではありません。誰かが忘れないほど大切にするからこそ生き残ります。'],
    archiveLink: 'LockerLegendsを見る',
    sourceNoteTitle: '物語と資料について',
    sourceNote: 'このページは私自身の経験と、Skeeterおよび他のパイオニアがLockerLegendsで公開した資料を組み合わせています。当事者の経験に近いコミュニティ・アーカイブである一方、歴史に対する特定の視点でもあります。役割、年代、貢献に関する記述は、可能な場合には他の記録された声とあわせて読む必要があります。',
    sourcesTitle: '出典と参考資料',
  },
  zh: {
    intro: 'James “OG Skeeter Rabbit” Higgins 是 Locking 最初时代的先驱，但他的重要性远不止于他自己跳过的舞。作为导师、教师和 LockerLegends 的核心推动者，他用数十年时间保存这门舞蹈背后的人、文化语境与故事。',
    openingQuote: '有些人通过确保自己的名字被记住来建立传承。另一些人则通过确保没有其他人被遗忘来建立传承。',
    portraitEyebrow: '先驱 / 导师 / 历史守护者',
    portraitTitle: '不只是历史的一部分',
    portraitText: '对我而言，Skeeter 不只是 Locking 的先驱之一。他是我的导师、朋友，也是塑造我理解这门舞蹈及其文化方式的人。但他的重要性远远超出我个人的故事。',
    galleryEyebrow: '相遇 / 知识 / 社群',
    galleryTitle: '人与人之间的历史',
    galleryCaptions: [
      '2005年 FunkCamp 上的 O.G. Skeeter Rabbit。',
      'Tony GoGo 与 O.G. Skeeter Rabbit。',
      'James “OG Skeeter Rabbit” Higgins。',
      '2005年 Skeeter 来到瑞典分享知识时，Alex、Yared、O.G. Skeeter Rabbit 与 Manne 在 FunkCamp 合影。',
      '2005年 FunkCamp 上的 Greg “Campbellock Jr.” Pope、Robert “Rob-One” Wägar 与 O.G. Skeeter Rabbit。',
      '2011年，Don Campbell、O.G. Skeeter Rabbit 与 Robert “Rob-One” Wägar在 Las Vegas。',
    ],
    sections: [
      { eyebrow: '舞者', title: '成为历史记录者之前，他首先是一名舞者', paragraphs: ['James Higgins 是早期 Soul Train 舞者，也是 Locking 形成阶段多个重要团体的成员，包括 Original Go-Go Brothers、Watts Writers Workshop 的 Creative Generation，以及之后的 Ghetto Dancers。LockerLegends 还记录他曾在1974年 Frank Sinatra 巡演中担任 The Lockers 的正式替补成员，后来组织并随 33RPM 巡演。', '他不是从外部记录这段历史。舞蹈仍在发展时，他本人就在俱乐部、校园和排练空间里。他的名字也留在由他创造并发展出多种变化的 Skeeter Rabbit 舞步中。'] },
      { eyebrow: '起源与社群', title: '一位创始人 — 以及整个社群', paragraphs: ['Skeeter 工作中的一个核心观念是：两件事实可以同时成立。Don Campbell 理应作为 Campbellocking 的创造者得到充分认可。与此同时，这门舞蹈也通过一个更广泛的社群成长起来，人们交换舞步、组成团体、创造编排，共同塑造文化。', '认可 Scooby Doo、Greg Pope、Tony 和 Buddy GoGo、Alpha Anderson、Fluky Luke、Charles Robot、Netta Bug 等许多人的贡献，并不会削弱 Don 的地位，反而让历史更完整、更有人情味，也更精确。'] },
      { eyebrow: 'Educate B4U Recreate', title: '由亲历者共同建立的档案', paragraphs: ['后来发展为 LockerLegends 的工作大约在2003年开始成形。Skeeter 始终将它描述为一项集体工程，汇集了 Greg Campbellock Jr. Pope、Tony GoGo、Steve Crane、Greg Dandridge、Guy Evans、Arnetta Johnson、Fluky Luke、Tito Collins、Peek-a-Boo 等许多人的知识。', '当时，人们对 The Lockers 获得商业名声之前的年代所知很少，在 Los Angeles 以外尤其如此。LockerLegends 帮助把问题从“谁出了名？”转向“谁真正亲历过？”这两个问题的答案并不总是相同。'] },
      { eyebrow: '名字 / 面孔 / 语境', title: '让被忽略的人拥有应有的位置', paragraphs: ['LockerLegends 一再介绍那些故事没有得到足够重视的舞者，包括 Jimmy “Scooby Doo” Foster、Alpha Omega Anderson、Pat Davis、Netta Bug、Freddie Maxie、Buddy GoGo、Guy “Shocklock” Evans、Charles 和 Slim Robot、Tito Collins 等。', '对于后来的世代，尤其是 Los Angeles 以外的舞者，这项工作价值巨大。在访谈、播客和影像随时可得之前，LockerLegends 是让舞蹈背后的名字变成真实人物的地方之一：他们有面孔、关系、团体、贡献，也有自己的故事。'] },
      { eyebrow: '视角', title: '历史并不总是令人舒服', paragraphs: ['保存文化不只是庆祝它。有时也意味着提出异议、追问不舒服的问题，并让那些不符合最简单或最容易出售的版本的内容被看见。', 'LockerLegends 记录了 Skeeter 与其他先驱对术语、起源、非裔美国文化遗产、商业化以及不同时期参与者的看法。我们不必同意每一种解释，也能够承认记录亲历者声音、并让它们与其他资料彼此对照的价值。'] },
      { eyebrow: '教师', title: '档案背后的那个人', paragraphs: ['他教人的愿望早在网站出现之前就存在。Steve “Sugarfoot” Natorio 回忆，年轻时他和 Tony “Crackerjack” Pierce 前往 South Central Los Angeles，敲开 Skeeter 的门，请他出来教他们。他们学到的不只是舞步，还有舞步背后的文化和历史。', '演员 Ken Sagoes 也说，早在1974年 Skeeter 就会在演出后花时间帮助年轻表演者，后来更像他的兄长。LockerLegends 并没有创造 Skeeter 分享知识的愿望；互联网只是让他能把一直在做的事带给更广泛的人群。'] },
      { eyebrow: '个人记忆', title: '我的导师', paragraphs: ['Skeeter 不只是向我讲述先驱，他还把我和他们连接起来。正是他介绍我认识 Greg Campbellock Jr. Pope，后者也成为我生命中极其重要的导师。通过 Skeeter，我与那些过去只在舞蹈史中见过名字的人建立了真实关系。', '当你和真正亲历过的人交谈，历史便不再只是一串年份与名人。你会理解友谊、分歧、街区、音乐、谁向谁学习，以及后来世代所继承的一切需要多少人共同创造。正是这种理解 Locking 的方式，成为这个网站存在的主要原因之一。'] },
    ],
    closingEyebrow: 'The Legacy Keeper',
    closingTitle: '看看他们做了什么',
    closing: ['Tony GoGo 曾公开感谢 Skeeter 创建 LockerLegends、让舞者重新联系，并帮助大家讲清楚他们的 movement 意味着什么。这几乎是对他贡献最准确的概括。', 'Skeeter 原本可以用数十年反复说：“看看我做了什么。”但他的大量工作一直在说：“看看他们做了什么。”看看那些人、俱乐部、Watts、音乐，以及舞蹈背后的社群。一种文化能够存续，不只是因为有人创造它，也因为有人在乎到愿意记住。'],
    archiveLink: '访问 LockerLegends',
    sourceNoteTitle: '关于故事与资料来源',
    sourceNote: '本页结合了我的个人经历，以及 Skeeter 和其他先驱通过 LockerLegends 发布的资料。它是一份接近亲历者经验的社群档案，同时也代表一种特定的历史视角。因此，有关身份、年份与贡献的说法，在条件允许时应与其他已有记录的声音一同阅读。',
    sourcesTitle: '资料来源与延伸阅读',
  },
};
