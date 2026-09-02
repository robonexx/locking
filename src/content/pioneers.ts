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

export function getPioneerCopy(pioneer: Pioneer, lang: Locale): PioneerCopy {
  if (lang === 'en') return pioneer;

  const translation = swedishCopy[pioneer.id];
  return {
    name: translation?.name ?? pioneer.name,
    aka: translation?.aka ?? pioneer.aka,
    desc: translation?.desc ?? pioneer.desc,
  };
}
