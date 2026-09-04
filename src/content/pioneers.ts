import type { Pioneer } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

type PioneerCopy = Pick<Pioneer, 'name' | 'aka' | 'desc'>;

const swedishCopy: Record<string, Partial<PioneerCopy> & Pick<PioneerCopy, 'desc'>> = {
  Introduction: {
    name: 'Introduktion',
    aka: 'DEN URSPRUNGLIGA ERANS HALL OF FAME',
    desc: 'Locking som konstform har nu flera årtionden av utövare bakom sig. Varje årtionde har Lockingdansare som i dag är ikoner inom streetdance. Den här presentationen är däremot tillägnad de många ursprungliga pionjärer som förtjänar erkännande för sina bidrag till Locking som konstform och subkultur. Många av de dansare som här kallas mästare eller OG var verksamma innan The Lockers presenterades offentligt som grupp 1973. De deltog när dansen delades och utvecklades, och dansade på Soul Train och på nattklubbarna i Los Angeles. Många människor har bidragit på olika sätt till konstformens historia. Det här urvalet lyfter några av den ursprungliga erans centrala pionjärer, som bidrog med steg, stil och attityd till utvecklingen av den subkultur vi känner som Locking.',
  },
  The_term_OG: {
    name: 'Begreppet OG',
    aka: 'Vad betyder OG?',
    desc: 'Inom Locking används OG här i betydelsen Original Generation. Personer som bidrog under den ursprungliga eran benämns därför Original OGs, OG Legends eller helt enkelt OGs. Dansare från senare årtionden och epoker beskrivs i originalmaterialet som 70-, 80- och 90-talets old school- eller new school-pionjärer, ibland även som BGs. Terminologin är knuten till den respektkultur som fanns i gatumiljön.',
  },
  Don_Campbell: {
    desc: 'Don Campbell skapade dansen som först kallades Campbellocking och som senare, när den utvecklades till en konstform, blev känd som Locking. Han formade de tidiga rörelserna genom att förena gester med sin egen rytm. Campbell var medlem i den ursprungliga Soul Train Gang och startade den första improvisationsgruppen, The Campbellockers, även kallad Campbellock Dancers. Senare var han den samlande kraften bakom The Original Lockers. Som dynamisk solodansare blev han känd för sina spektakulära dyk och splitar.',
  },
  Damita_Jo_Freeman: {
    desc: 'Damita Jo Freeman var medlem i den ursprungliga Soul Train Gang och en av Lockingens tidigaste kvinnliga pionjärer. Hon var Don Campbells första danspartner i programmet. Senare vann hon Soul Trains andra danstävling tillsammans med Jimmy ”Scooby Doo” Foster och visade då sin särpräglade Lockingstil. Hon blev känd för sina höga bensparkar och fortsatte sedan som uppmärksammad koreograf.',
  },
  Greg_Pope: {
    desc: 'Greg Pope var inte släkt med Don Campbell, men fick namnet Campbellock Jr på grund av sin kreativitet med Lockingrörelser. Han var medlem i Soul Train Gang och dansgruppen Creative Generation vid Watts Writers Workshop innan han gick med i The Original Lockers 1973. Greg bidrog till flera steg, rörelser, handslag och rutiner som förknippas med Locking.',
  },
  Fred_Berry: {
    desc: 'Fred Berry blev också känd som Rerun i 1970-talets tv-serie What’s Happening!!. Han dansade på Soul Train, var medlem i den tidiga improvisationsgruppen The Campbellockers och senare i The Original Lockers. Hans uttryck, kroppsspråk och leende förknippades med slow motion och signaturrörelsen Master Butt Drop.',
  },
  Leo_Williams: {
    desc: 'Leo Williams var Soul Train-dansare och ursprunglig medlem i The Lockers. Han blev känd för sina dubbelledade locks, kallade ”Leo Locks”. Han bidrog också med synkroniserade steg, bland annat Which-A-Way, till Lockingkulturen.',
  },
  Jimmy_Foster: {
    desc: 'Jimmy Foster var medlem i den ursprungliga Soul Train Gang. Tillsammans med sin dåvarande partner Damita Jo Freeman vann han Soul Trains andra danstävling med deras Lockingstilar. Därefter ingick han i Creative Generation vid Watts Writers Workshop 1972–1973, dansade med Something Special och blev senare en av de första Chippendales-dansarna. ”Scooby Doo” var en lång och uttrycksfull dansare som ofta utvecklade handslag och steg tillsammans med Greg Campbellock Jr. Han är särskilt förknippad med steget Scooby Doo.',
  },
  James_Higgins: {
    desc: 'James Higgins var en tidig Soul Train-dansare och medlem i flera av de första Lockinggrupperna: The Original Go-Go Brothers 1971–1973, Creative Generation vid Watts Writers Workshop 1972–1973 och The Original Lockers 1973–1974. Han dansade även med Ghetto Dancers 1975 och var känd som en skicklig robotdansare. Senare organiserade och turnerade han med gruppen 33 RPM. Han är framför allt förknippad med steget Skeeter Rabbit, som används i många synkroniserade Lockingrutiner.',
  },
  Arnetta_Johnson: {
    desc: 'Arnetta ”Netta Bug” Johnson var en tidig streetdansare inom Locking och beskrivs i originalmaterialet som den första kvinnan i en Lockinggrupp. Hennes grundläggande Locking var stark, och hon syntes ofta på klubbar, gatufester och skoldanser tillsammans med Go-Go Brothers. Genom kopplingen till Watts Writers Workshop medverkade hon till att den könsblandade gruppen Creative Generation organiserades. Hon var även medlem i den tidiga kvinnliga Lockinggruppen The Toota Woota Sisters.',
  },
  Anthony_Lewis: {
    desc: 'Anthony ”Tony Go-Go” Lewis var en tidig Soul Train-dansare och en av grundarna av Go-Go Brothers i början av 1970-talet. Han dansade även med grupper som 33 RPM och var medlem i The Original Lockers. Tony hade en snabb och akrobatisk stil. Han och andra medlemmar i Go-Go Brothers förknippas med de första synkroniserade Lockinggrupperna omkring 1971. Senare introducerade och etablerade han Lockingstilar och undervisning i Japan.',
  },
  Adolfo_Quinones: {
    desc: 'Adolfo ”Shabba-Doo” Quinones kom ursprungligen från Chicago och var en av originalmedlemmarna i The Lockers. Han blev också känd som karaktären Ozone i Breakin’-filmerna. Shabba-Doo kom in i den ursprungliga Lockingkretsen 1973, ungefär två år efter att dansens tidiga utvecklingsfas hade börjat, men blev snabbt en av de snabbaste och mjukaste dansarna. Hans första smeknamn var ”King Rookie”, eftersom han lärde sig rutiner mycket snabbt.',
  },
  Bill_Williams: {
    desc: 'Bill ”Slim the Robot” Williams var en tidig Soul Train-dansare, känd för sin Robot. Han turnerade med improvisationsdansarna Campbellock Dancers och var originalmedlem i The Original Lockers. Han omformade den grundläggande robotstilen till en snabb rörelse med influenser från karate och blev även känd för en ljusdräkt och eldeffekter i sitt nummer.',
  },
  Edwin_Lombard: {
    desc: 'Edwin ”Buddy Go-Go” Lombard var medlem i Go-Go Brothers och i Creative Generation vid Watts Writers Workshop, den första könsblandade Lockinggruppen. Tillsammans med bland andra Tony Go-Go och Skeeter Rabbit utvecklade han flera tidiga synkroniserade steg och sketcher.',
  },
  Freddie_Maxie: {
    desc: 'Freddie Maxie var en tidig streetdansare från Comptons dansmiljö och blev senare Soul Train-dansare. Hon var danspartner till flera legendariska Lockers och hörde till de tidiga kvinnliga Lockingdansarna. Hon var verksam på klubbar och gatufester och i grupper som Something Special och Soul Train Gang.',
  },
  Alpha_Andersson: {
    desc: 'Alpha Andersson var en Lockingdansare med en särpräglad stil och dansade på Soul Train i början av 1970-talet. Hon skapade en variant av Russian kicks där hon studsade bakåt på händerna mellan sparkarna. Steget, känt som ”Alphas”, används fortfarande av många Lockingdansare. Alpha var medlem i den andra generationen av The Lockers.',
  },
  Toni_Basil: {
    desc: 'Toni Basil var redan etablerad koreograf när hon lärde sig Locking av Don Campbell och blev en organiserande kraft i utvecklingen av The Original Lockers. Hon hade en omfattande bakgrund inom balett och blev så småningom den enda kvinnan i den professionella originaluppsättningen. Även om hon inte kom från Lockingens ursprungliga rörelse var hennes insats som manager betydelsefull. Hennes kontakter och erfarenhet av underhållningsbranschen hjälpte gruppen att nå professionella och kommersiella sammanhang. Som dansare blev hon känd för att föra in balettelement och upprepade snurrar i sin Locking.',
  },
  Pat_Davis: {
    desc: 'Pat Davis var en tidig Soul Train-dansare med ett betydande inflytande på Locking. Hon blev känd för sin version av Robot och tidiga fjärilsformade armrörelser som senare kom att kallas Leo Locks. Under 1970-talet var hon också medlem i Something Special, en grupp med Soul Train-dansare där bland andra Jimmy ”Scooby Doo” Foster ingick. Gruppen var inte en renodlad Lockinggrupp utan visade flera av tidens tidiga dansstilar.',
  },
  Charles_Washington: {
    desc: 'Charles ”Charles the Robot” Washington var med från den tidiga perioden, då både Robot och Locking kunde samlas under beteckningen Lockers. Han betraktas som en central pionjär för Robot som partydans inom Locking, innan stilen senare utvecklades inom Poppingmiljön. Han var medlem i den första Soul Train Gang och turnerade med Campbellock Dancers 1972. Han utvecklade en rytmisk Robotstil och organiserade gruppen The Robot Brothers i slutet av 1960-talet.',
  },
  Others: {
    name: 'Fler pionjärer',
    aka: 'Bilden är inte kopplad till namnen',
    desc: 'Kevin ”Yo-Yo” Lombard – se sidan om Go-Go Brothers; Sambo Lock; Johnnie McCloud; Eugene ”F&M” Henderson; Steve ”Sinbad” Crane – se Ghetto Dancers; Greg ”Captain Crunch” Dandridge – se Ghetto Dancers; Mike ”Peekaboo” Frenke – se 33 RPM och Yo-Yo Brothers; Guy ”Shocklock” Evan; John ”Okie Doke” Wilson – se 33 RPM; Jeffrey Daniel; Tito Collins – se Alphabet Kids och 33 RPM; Jeffrey ”Cat Man” McKintire; Bishop ”CoCo” Hall; Tick; Sneaky T; Enock ”Elmer Fudd” Smith (RIP).',
  },
};

const frenchCopy: Record<string, Partial<PioneerCopy> & Pick<PioneerCopy, 'desc'>> = {
  Introduction: {
    name: 'Introduction',
    aka: 'LE HALL OF FAME DE LA PÉRIODE FONDATRICE',
    desc: 'Le Locking en tant que forme artistique compte aujourd’hui plusieurs décennies de pratique. Chaque décennie a vu émerger des lockers devenus des icônes de la street dance. Cette présentation est toutefois consacrée aux nombreux pionniers originaux qui méritent d’être reconnus pour leur contribution au Locking comme forme artistique et subculture. Beaucoup des danseurs appelés ici maîtres ou OG étaient actifs avant que The Lockers ne soient présentés publiquement comme groupe en 1973. Ils étaient présents lorsque la danse se partageait et se développait, sur Soul Train et dans les clubs de Los Angeles. De nombreuses personnes ont contribué de différentes façons à l’histoire de cette forme. Cette sélection met en lumière quelques pionniers majeurs de la période fondatrice, dont les pas, le style et l’attitude ont participé au développement de la subculture que nous connaissons sous le nom de Locking.',
  },
  The_term_OG: {
    name: 'Le terme OG',
    aka: 'Que signifie OG ?',
    desc: 'Dans le contexte du Locking, OG est employé ici au sens d’Original Generation. Les personnes ayant contribué pendant la période fondatrice sont ainsi appelées Original OGs, OG Legends ou simplement OGs. Les danseurs des décennies et périodes ultérieures sont décrits dans le matériau original comme des pionniers old school ou new school des années 1970, 1980 et 1990, parfois aussi comme des BGs. Cette terminologie est liée à la culture du respect présente dans la rue.',
  },
  Don_Campbell: {
    desc: 'Don Campbell a créé la danse d’abord appelée Campbellocking puis, à mesure qu’elle s’est développée en forme artistique, connue sous le nom de Locking. Il a façonné les premiers mouvements en associant des gestes à son propre rythme. Campbell faisait partie du Soul Train Gang original et a fondé le premier groupe d’improvisation, The Campbellockers, aussi appelé Campbellock Dancers. Il devint ensuite la force fédératrice de The Original Lockers. Danseur solo dynamique, il était connu pour ses dives et ses splits spectaculaires.',
  },
  Damita_Jo_Freeman: {
    desc: 'Damita Jo Freeman faisait partie du Soul Train Gang original et compte parmi les premières pionnières du Locking. Elle fut la première partenaire de danse de Don Campbell dans l’émission. Elle remporta ensuite le deuxième concours de danse de Soul Train avec Jimmy « Scooby Doo » Foster, en y présentant son style de Locking singulier. Connue pour ses coups de pied très hauts, elle poursuivit une carrière de chorégraphe reconnue.',
  },
  Greg_Pope: {
    desc: 'Greg Pope n’avait aucun lien de parenté avec Don Campbell, mais reçut le nom Campbellock Jr. en raison de sa créativité dans les mouvements de Locking. Il fit partie du Soul Train Gang et de Creative Generation au Watts Writers Workshop avant de rejoindre The Original Lockers en 1973. Greg contribua à plusieurs pas, mouvements, poignées de main et routines associés au Locking.',
  },
  Fred_Berry: {
    desc: 'Fred Berry devint également célèbre sous le nom de Rerun dans la série télévisée des années 1970 What’s Happening!!. Il dansa dans Soul Train, fit partie du premier groupe d’improvisation The Campbellockers, puis de The Original Lockers. Son expression, son langage corporel et son sourire furent associés au slow motion et à son mouvement signature, le Master Butt Drop.',
  },
  Leo_Williams: {
    desc: 'Leo Williams était danseur dans Soul Train et membre original de The Lockers. Il était connu pour ses locks réalisés avec une souplesse articulaire exceptionnelle, appelés « Leo Locks ». Il a aussi apporté à la culture Locking des pas synchronisés, dont le Which-A-Way.',
  },
  Jimmy_Foster: {
    desc: 'Jimmy Foster faisait partie du Soul Train Gang original. Avec sa partenaire de l’époque, Damita Jo Freeman, il remporta le deuxième concours de danse de Soul Train grâce à leurs styles de Locking. Il rejoignit ensuite Creative Generation au Watts Writers Workshop de 1972 à 1973, dansa avec Something Special et devint plus tard l’un des premiers danseurs des Chippendales. Grand danseur très expressif, « Scooby Doo » développait souvent des poignées de main et des pas avec Greg Campbellock Jr. Il est particulièrement associé au pas Scooby Doo.',
  },
  James_Higgins: {
    desc: 'James Higgins fut l’un des premiers danseurs de Soul Train et membre de plusieurs groupes pionniers du Locking : The Original Go-Go Brothers de 1971 à 1973, Creative Generation au Watts Writers Workshop de 1972 à 1973 et The Original Lockers de 1973 à 1974. Il dansa aussi avec Ghetto Dancers en 1975 et était reconnu comme excellent danseur de Robot. Il organisa ensuite des tournées avec le groupe 33 RPM. Il reste surtout associé au pas Skeeter Rabbit, utilisé dans de nombreuses routines de Locking synchronisées.',
  },
  Arnetta_Johnson: {
    desc: 'Arnetta « Netta Bug » Johnson fut l’une des premières street dancers du Locking et est présentée dans le matériau original comme la première femme d’un groupe de Locking. Son Locking fondamental était puissant et on la voyait souvent dans les clubs, les fêtes de rue et les bals scolaires avec les Go-Go Brothers. Par son lien avec le Watts Writers Workshop, elle contribua à l’organisation de Creative Generation, groupe mixte. Elle fit également partie du premier groupe féminin de Locking, The Toota Woota Sisters.',
  },
  Anthony_Lewis: {
    desc: 'Anthony « Tony Go-Go » Lewis fut l’un des premiers danseurs de Soul Train et l’un des fondateurs des Go-Go Brothers au début des années 1970. Il dansa aussi avec des groupes comme 33 RPM et fit partie de The Original Lockers. Tony possédait un style rapide et acrobatique. Avec d’autres membres des Go-Go Brothers, il est associé aux premiers groupes de Locking synchronisé autour de 1971. Plus tard, il introduisit et établit les styles et l’enseignement du Locking au Japon.',
  },
  Adolfo_Quinones: {
    desc: 'Originaire de Chicago, Adolfo « Shabba-Doo » Quinones fut l’un des membres originaux de The Lockers. Il devint aussi célèbre dans le rôle d’Ozone dans les films Breakin’. Shabba-Doo entra dans le cercle originel du Locking en 1973, environ deux ans après le début de la première phase de développement de la danse, mais devint rapidement l’un des danseurs les plus rapides et les plus fluides. Son premier surnom était « King Rookie », car il apprenait les routines très vite.',
  },
  Bill_Williams: {
    desc: 'Bill « Slim the Robot » Williams fut l’un des premiers danseurs de Soul Train, connu pour son Robot. Il partit en tournée avec les danseurs d’improvisation Campbellock Dancers et fut membre original de The Original Lockers. Il transforma le style Robot de base en un mouvement rapide influencé par le karaté et devint également célèbre pour un costume lumineux et des effets de feu dans son numéro.',
  },
  Edwin_Lombard: {
    desc: 'Edwin « Buddy Go-Go » Lombard fit partie des Go-Go Brothers et de Creative Generation au Watts Writers Workshop, le premier groupe de Locking mixte. Avec Tony Go-Go, Skeeter Rabbit et d’autres, il développa plusieurs des premiers pas synchronisés et sketches.',
  },
  Freddie_Maxie: {
    desc: 'Freddie Maxie fut l’une des premières street dancers de la scène de Compton avant de devenir danseuse dans Soul Train. Partenaire de plusieurs lockers légendaires, elle comptait parmi les premières danseuses de Locking. Elle était active dans les clubs, les fêtes de rue et des groupes comme Something Special et Soul Train Gang.',
  },
  Alpha_Andersson: {
    desc: 'Alpha Andersson était une locker au style singulier qui dansait dans Soul Train au début des années 1970. Elle créa une variante des Russian kicks dans laquelle elle rebondissait vers l’arrière sur les mains entre les coups de pied. Le pas, connu sous le nom « Alphas », est encore utilisé par de nombreux lockers. Alpha fit partie de la deuxième génération de The Lockers.',
  },
  Toni_Basil: {
    desc: 'Toni Basil était déjà une chorégraphe établie lorsqu’elle apprit le Locking auprès de Don Campbell et devint une force organisatrice dans le développement de The Original Lockers. Forte d’une solide formation en ballet, elle devint finalement la seule femme de la formation professionnelle originale. Bien qu’elle ne soit pas issue du mouvement fondateur du Locking, sa contribution comme manager fut importante. Ses contacts et son expérience de l’industrie du spectacle aidèrent le groupe à accéder aux milieux professionnels et commerciaux. Comme danseuse, elle était connue pour intégrer des éléments de ballet et des tours répétés à son Locking.',
  },
  Pat_Davis: {
    desc: 'Pat Davis fut l’une des premières danseuses de Soul Train et exerça une influence importante sur le Locking. Elle était connue pour sa version du Robot et pour de premiers mouvements de bras en forme de papillon, plus tard appelés Leo Locks. Dans les années 1970, elle fit également partie de Something Special, un groupe de danseurs de Soul Train comprenant notamment Jimmy « Scooby Doo » Foster. Ce n’était pas exclusivement un groupe de Locking : il présentait plusieurs styles de danse de l’époque.',
  },
  Charles_Washington: {
    desc: 'Charles « Charles the Robot » Washington était présent dès la première période, lorsque Robot et Locking pouvaient tous deux être réunis sous l’appellation Lockers. Il est considéré comme un pionnier majeur du Robot comme party dance au sein du Locking, avant que le style ne se développe ensuite dans la scène Popping. Il fit partie du premier Soul Train Gang et partit en tournée avec Campbellock Dancers en 1972. Il développa un style Robot rythmique et organisa le groupe The Robot Brothers à la fin des années 1960.',
  },
  Others: {
    name: 'Autres pionniers',
    aka: 'L’image n’est pas liée aux noms',
    desc: 'Kevin « Yo-Yo » Lombard — voir la page sur les Go-Go Brothers ; Sambo Lock ; Johnnie McCloud ; Eugene « F&M » Henderson ; Steve « Sinbad » Crane — voir Ghetto Dancers ; Greg « Captain Crunch » Dandridge — voir Ghetto Dancers ; Mike « Peekaboo » Frenke — voir 33 RPM et Yo-Yo Brothers ; Guy « Shocklock » Evan ; John « Okie Doke » Wilson — voir 33 RPM ; Jeffrey Daniel ; Tito Collins — voir Alphabet Kids et 33 RPM ; Jeffrey « Cat Man » McKintire ; Bishop « CoCo » Hall ; Tick ; Sneaky T ; Enock « Elmer Fudd » Smith (RIP).',
  },
};

export function getPioneerCopy(pioneer: Pioneer, lang: Locale): PioneerCopy {
  if (lang === 'en' || lang === 'fi' || lang === 'ko') return pioneer;

  const translation = (lang === 'fr' ? frenchCopy : swedishCopy)[pioneer.id];
  return {
    name: translation?.name ?? pioneer.name,
    aka: translation?.aka ?? pioneer.aka,
    desc: translation?.desc ?? pioneer.desc,
  };
}
