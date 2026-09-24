// Sursă: designul aprobat "ArtDent Homepage v2" + documentul de specificații.
// Rândurile marcate „de completat" nu au fost confirmate de client.

export const site = {
  name: "ArtDent",
  city: "Slobozia",
  phone: "0723 192 716",
  phoneHref: "tel:0723192716",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "40723192716",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "programari@artdentslobozia.ro", // de completat
  address: "Al. Feroviarului 1, Slobozia, Ialomița, 920030",
  hours: "Luni – Vineri, 09:00 – 19:00",
  legalName: "C.M.I ARTDENT - DR. ZUPCU M. MIHAELA",
  cui: "20785382",
  mapsEmbed: "https://maps.google.com/maps?q=Al.+Feroviarului+1,+Slobozia&z=15&output=embed",
  googleReviewsUrl: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40b05184c7cadd09:0xced901ca02200d7b?sa=X&ved=1t:8290&ictx=111",
  instagramUrl: "https://www.instagram.com/artdent_dr_zupcu/",
  facebookUrl: "https://www.facebook.com/profile.php?id=100057326415385",
};

export const nav = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Despre noi", href: "/despre" },
  { label: "Echipă", href: "/echipa" },
  { label: "Prețuri", href: "/preturi" },
  { label: "Contact", href: "/contact" },
];

export const serviceOptions = [
  "Consultație",
  "Implantologie și protetică",
  "Ortodonție",
  "Estetică și cosmetică dentară",
  "Tratamente generale",
  "Chirurgie buco-dentară",
];

export const featuredSolutions = [
  { num: "01", title: "Implantologie și Protetică Avansată", text: "Reabilitări funcționale complete, planificate digital înainte de intervenție. Implant, bont și coroană într-un flux controlat, cu un rezultat care se integrează natural în zâmbet." },
  { num: "02", title: "Ortodonție Modernă", text: "Aparate fixe și gutiere transparente pentru copii și adulți. Alinierea dinților se face pe baza unui plan clar, cu etape și durată comunicate de la început." },
  { num: "03", title: "Estetică și Cosmetică Dentară", text: "Albire profesională, fațete și coroane ceramice. Forma și culoarea se stabilesc împreună cu tine, cu simulare înainte de orice lucrare definitivă." },
];

export const processSteps = [
  { n: "1", title: "Programare", text: "Ne suni, ne scrii pe WhatsApp sau completezi formularul online. Stabilim o oră care ți se potrivește." },
  { n: "2", title: "Consultație și diagnostic", text: "Discutăm ce te deranjează, facem examinarea clinică și, dacă e nevoie, radiografii digitale." },
  { n: "3", title: "Plan de tratament", text: "Primești un plan clar, cu etape, durată și costuri. Nimic nu începe fără acordul tău." },
  { n: "4", title: "Începerea tratamentului", text: "Tratamentul se face în etapa stabilită împreună, cu explicații la fiecare pas." },
];

export const usp = [
  { title: "Echipamente de ultimă generație", text: "Radiologie digitală și instrumentar modern, pentru intervenții precise și mai puțin invazive." },
  { title: "Diagnostic riguros", text: "Fiecare plan pornește de la o evaluare completă, nu de la o soluție rapidă aplicată tuturor." },
  { title: "Prețuri accesibile și transparente", text: "Costurile sunt comunicate integral din prima consultație, cu opțiuni de etapizare." },
];

export const services = [
  { num: "01", slug: "cosmetica-dentara", title: "Cosmetică Dentară", text: "Albire profesională, fațete ceramice și reconturări pentru un zâmbet echilibrat, cu aspect natural.", items: ["Albire profesională", "Fațete ceramice", "Reconturare estetică"] },
  { num: "02", slug: "tratament-ortodontic", title: "Tratament Ortodontic", text: "Aparate fixe metalice sau ceramice și gutiere transparente, pentru copii și adulți.", items: ["Aparate fixe", "Gutiere transparente", "Monitorizare periodică"] },
  { num: "03", slug: "tratamente-generale", title: "Tratamente Generale", text: "Consultație, obturații, tratamente de canal și restaurări, cu materiale certificate.", items: ["Consultație și diagnostic", "Obturații", "Tratamente de canal"] },
  { num: "04", slug: "chirurgie-buco-dentara", title: "Chirurgie Buco-Dentară", text: "Extracții simple și complexe, inclusiv molari de minte, în condiții de siguranță.", items: ["Extracții simple", "Extracții molari de minte", "Chirurgie parodontală"] },
  { num: "05", slug: "profilaxie", title: "Profilaxie", text: "Detartraj, periaj profesional și air-flow, plus recomandări de igienă adaptate ție.", items: ["Detartraj", "Periaj profesional", "Air-flow"] },
  { num: "06", slug: "radiografii", title: "Radiografii Retroalveolare", text: "Imagistică digitală realizată în clinică, pentru diagnostic rapid și precis.", items: ["Radiografie digitală", "Interpretare imediată", "Arhivă digitală"] },
];

export const relatedServices: Record<string, string[]> = {
  "cosmetica-dentara": ["tratament-ortodontic", "profilaxie"],
  "tratament-ortodontic": ["cosmetica-dentara", "profilaxie"],
  "tratamente-generale": ["radiografii", "profilaxie"],
  "chirurgie-buco-dentara": ["radiografii", "tratamente-generale"],
  profilaxie: ["cosmetica-dentara", "tratamente-generale"],
  radiografii: ["tratamente-generale", "chirurgie-buco-dentara"],
};

export const serviceDetails: Record<string, {
  metaTitle: string;
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  benefits: string[];
  faq: { q: string; a: string }[];
}> = {
  "cosmetica-dentara": {
    metaTitle: "Cosmetică Dentară în Slobozia — Albire, Fațete Ceramice | ArtDent",
    metaDescription: "Albire profesională, fațete ceramice și reconturare estetică la ArtDent Slobozia. Zâmbet natural, planificat digital, cu simulare înainte de tratament.",
    intro: "Estetica dentară modernă îmbină aspectul natural cu rezultate de durată. La ArtDent Slobozia, fiecare procedură de cosmetică dentară pornește de la o analiză atentă a formei feței, a culorii naturale a dinților și a proporțiilor zâmbetului, astfel încât rezultatul să arate firesc, nu artificial.",
    paragraphs: [
      "Albirea profesională realizată în cabinet folosește geluri concentrate activate controlat, cu rezultate vizibile încă din prima ședință și fără sensibilitate excesivă. Pentru cei care preferă un ritm propriu, oferim și albire cu gutiere personalizate, de purtat acasă, cu gel dozat corect pentru smalțul fiecărui pacient.",
      "Fațetele ceramice corectează discret formă, culoare sau spații inegale între dinți, păstrând o structură dentară sănătoasă cu șlefuire minimă. Sunt confecționate individual, la culoarea și translucența dinților naturali învecinați, astfel încât diferența să nu se observe.",
      "Pentru corecții mai simple — un dinte ciobit, o formă ușor asimetrică — reconturarea estetică cu material compozit oferă un rezultat rapid, într-o singură ședință, la un cost mai accesibil decât o fațetă ceramică.",
      "Înainte de orice lucrare definitivă, discutăm împreună forma și culoarea dorite, astfel încât să știi exact la ce să te aștepți.",
    ],
    benefits: [
      "Rezultat cu aspect natural, adaptat la trăsăturile feței",
      "Șlefuire minimă a structurii dentare sănătoase",
      "Simulare și discuție despre formă și culoare înainte de tratament",
      "Proceduri rapide, cu recuperare imediată",
      "Materiale certificate, rezistente la pată și uzură",
      "Îmbunătățire vizibilă a încrederii în zâmbet",
    ],
    faq: [
      { q: "Cât durează albirea profesională în cabinet?", a: "O ședință de albire în cabinet durează, în general, 45–60 de minute, iar rezultatul este vizibil imediat. Pentru un efect optim, poate fi recomandată o a doua ședință la interval de câteva săptămâni." },
      { q: "Fațetele ceramice necesită șlefuirea dinților?", a: "Da, dar minimă — de regulă doar un strat foarte subțire de smalț, suficient cât fațeta să se integreze natural în arcadă, fără a afecta structura dintelui." },
      { q: "Cât timp țin fațetele ceramice?", a: "Cu o igienă orală corectă și controale periodice, fațetele ceramice pot dura 10–15 ani sau mai mult." },
      { q: "Albirea dentară dăunează smalțului?", a: "Nu, atunci când este realizată profesional, cu concentrații și timpi de expunere controlați. Recomandăm întotdeauna o evaluare înainte, pentru a exclude contraindicații precum cariile netratate." },
      { q: "Care este diferența dintre reconturarea cu compozit și fațeta ceramică?", a: "Reconturarea cu compozit este mai rapidă și mai accesibilă, potrivită pentru corecții mici, dar are o durată de viață mai scurtă. Fațeta ceramică oferă un rezultat mai durabil și mai rezistent la pată, pentru corecții mai ample." },
    ],
  },
  "tratament-ortodontic": {
    metaTitle: "Tratament Ortodontic în Slobozia — Aparate Dentare, Gutiere | ArtDent",
    metaDescription: "Aparate ortodontice fixe și gutiere transparente pentru copii și adulți, la ArtDent Slobozia. Plan de tratament clar, cu etape și durată comunicate de la început.",
    intro: "Un zâmbet aliniat corect nu este doar o chestiune de estetică — dinții bine poziționați se curăță mai ușor, mestecă eficient și se uzează uniform. Tratamentul ortodontic la ArtDent este potrivit atât pentru copii, cât și pentru adulți care își doresc o corecție la orice vârstă.",
    paragraphs: [
      "Aparatele dentare fixe, metalice sau ceramice, rămân soluția cea mai eficientă pentru cazurile complexe de neregularitate dentară sau probleme de ocluzie. Bracket-urile ceramice, discrete la culoarea dintelui, sunt alese frecvent de pacienții adulți.",
      "Pentru cei care preferă o soluție mai puțin vizibilă, gutierele transparente corectează treptat poziția dinților, sunt detașabile pentru masă și periaj, și sunt potrivite pentru cazuri de aliniere ușoară spre moderată.",
      "Fiecare tratament ortodontic începe cu o evaluare clinică și radiografii, urmate de un plan cu etape clare: durata estimată, frecvența controalelor și costul total, comunicate integral înainte de a începe.",
      "Monitorizarea periodică este esențială pentru progresul corect al tratamentului — ajustăm arcul sau trecem la o nouă gutieră la intervalele stabilite, urmărind evoluția aliniamentului.",
    ],
    benefits: [
      "Corectarea aliniamentului dentar la copii și adulți",
      "Îmbunătățirea masticației și a ocluziei",
      "Igienă orală mai ușoară după aliniere",
      "Opțiuni discrete: bracket-uri ceramice sau gutiere transparente",
      "Plan de tratament cu etape și costuri clare de la început",
      "Monitorizare periodică a progresului",
    ],
    faq: [
      { q: "La ce vârstă poate începe un copil tratamentul ortodontic?", a: "O primă evaluare ortodontică este recomandată în jurul vârstei de 7 ani, pentru a depista din timp eventuale probleme de dezvoltare a arcadelor, chiar dacă tratamentul activ începe de obicei mai târziu." },
      { q: "Cât durează, în medie, un tratament ortodontic?", a: "Durata variază în funcție de complexitatea cazului, de regulă între 12 și 24 de luni, uneori mai mult pentru corecții complexe de ocluzie." },
      { q: "Aparat fix sau gutiere transparente — care este mai potrivit?", a: "Depinde de tipul și complexitatea problemei. Discutăm ambele opțiuni la consultație și recomandăm soluția care corespunde nevoilor tale, atât din punct de vedere clinic, cât și al stilului de viață." },
      { q: "Montarea aparatului dentar doare?", a: "Montarea în sine este nedureroasă. Poate apărea un disconfort ușor în primele zile după fiecare ajustare, pe măsură ce dinții se adaptează la noua poziție." },
      { q: "Este nevoie de extracții dentare pentru ortodonție?", a: "Nu întotdeauna. Extracția este recomandată doar în cazurile cu aglomerare dentară severă, unde nu există spațiu suficient pentru alinierea corectă a tuturor dinților." },
    ],
  },
  "tratamente-generale": {
    metaTitle: "Tratamente Stomatologice Generale — Obturații, Tratament de Canal | ArtDent",
    metaDescription: "Consultații, obturații și tratamente de canal la ArtDent Slobozia, cu materiale certificate și diagnostic riguros la fiecare pas.",
    intro: "Tratamentele stomatologice generale reprezintă baza unei sănătăți orale de durată. De la consultația de rutină până la un tratament de canal complex, fiecare etapă este explicată înainte de a fi începută, astfel încât să știi mereu ce urmează.",
    paragraphs: [
      "Consultația inițială include examinarea clinică completă, radiografii digitale acolo unde este necesar, și un diagnostic clar. Pe baza acestuia, primești un plan de tratament cu etape, durată și costuri, fără surprize ulterioare.",
      "Obturațiile cu material compozit fotopolimerizabil tratează cariile la culoarea naturală a dintelui, redând forma și funcția fără compromisuri estetice — indiferent dacă este vorba de o carie superficială sau una mai extinsă.",
      "Când afectarea ajunge la pulpa dentară, tratamentul endodontic (de canal) elimină țesutul infectat și sigilează canalele radiculare, salvând dintele natural în locul unei extracții. Folosim tehnici rotative moderne, iar pentru cazurile complexe, tratament sub microscop dentar, pentru precizie sporită.",
      "Controalele periodice — recomandate la 6 luni — permit depistarea din timp a problemelor, înainte ca acestea să necesite intervenții extinse și costisitoare.",
    ],
    benefits: [
      "Diagnostic riguros, bazat pe examinare clinică și radiografii digitale",
      "Obturații la culoarea naturală a dintelui, fără compromis estetic",
      "Tratament de canal cu tehnici rotative moderne sau microscop dentar",
      "Salvarea dintelui natural, evitând extracția atunci când este posibil",
      "Materiale certificate, cu rezultate durabile",
      "Plan de tratament transparent, comunicat înainte de începere",
    ],
    faq: [
      { q: "Cât durează o obturație?", a: "O obturație simplă durează, în medie, 30–45 de minute, în funcție de mărimea și localizarea cariei." },
      { q: "Tratamentul de canal este dureros?", a: "Tratamentul se realizează sub anestezie locală, deci nu simți durere în timpul procedurii. Poate apărea un disconfort ușor, trecător, în zilele următoare." },
      { q: "Cât de des este recomandat un control stomatologic?", a: "Un control la fiecare 6 luni permite depistarea precoce a cariilor și a altor probleme, înainte ca acestea să se agraveze." },
      { q: "Ce se întâmplă dacă amân tratamentul unei carii?", a: "O carie netratată avansează spre pulpa dentară, putând necesita un tratament de canal sau, în stadii avansate, extracția dintelui. Tratamentul din timp este mereu mai simplu și mai puțin costisitor." },
      { q: "Câte ședințe sunt necesare pentru un tratament de canal?", a: "De obicei 1–2 ședințe, în funcție de numărul de canale radiculare și de complexitatea cazului." },
    ],
  },
  "chirurgie-buco-dentara": {
    metaTitle: "Chirurgie Buco-Dentară — Extracții, Molari de Minte | ArtDent Slobozia",
    metaDescription: "Extracții simple și complexe, extracția molarilor de minte și chirurgie parodontală la ArtDent Slobozia, în condiții de siguranță și cu recuperare monitorizată.",
    intro: "Intervențiile chirurgicale buco-dentare sunt realizate la ArtDent cu protocoale stricte de sterilizare și anestezie eficientă, pentru un confort maxim pe parcursul procedurii și o recuperare cât mai rapidă.",
    paragraphs: [
      "Extracțiile simple sunt indicate pentru dinți afectați ireversibil de carii extinse, fracturi sau boală parodontală avansată. Fiecare extracție este precedată de o evaluare radiologică, pentru a alege abordarea potrivită.",
      "Molarii de minte incluși sau parțial erupți necesită frecvent o extracție chirurgicală, mai ales atunci când poziția lor afectează dinții învecinați sau provoacă inflamații recurente. Evaluăm poziția exactă a molarului prin radiografie înainte de intervenție.",
      "Chirurgia parodontală tratează afecțiunile avansate ale gingiei și osului de susținere, oprind progresul bolii parodontale și stabilizând dinții afectați.",
      "După orice intervenție chirurgicală, primești indicații clare de îngrijire post-operatorie, iar echipa rămâne disponibilă pentru orice nelămurire în perioada de recuperare.",
    ],
    benefits: [
      "Anestezie locală eficientă, pentru un confort real în timpul intervenției",
      "Evaluare radiologică înainte de orice extracție sau intervenție",
      "Protocoale stricte de sterilizare a instrumentarului",
      "Indicații clare de îngrijire post-operatorie",
      "Tratamentul complicațiilor post-extracționale, dacă apar",
      "Echipă disponibilă pentru monitorizarea recuperării",
    ],
    faq: [
      { q: "Extracția molarului de minte doare?", a: "Intervenția se realizează sub anestezie locală, deci nu simți durere în timpul ei. Disconfortul post-operator este normal și se controlează cu medicația recomandată." },
      { q: "Cât durează recuperarea după o extracție?", a: "Recuperarea inițială durează 3–5 zile, cu respectarea indicațiilor primite. Vindecarea completă a osului poate dura câteva săptămâni." },
      { q: "Ce trebuie să evit după o extracție dentară?", a: "Evită alimentele fierbinți sau tari, fumatul și clătirea puternică a gurii în primele 24 de ore, pentru a permite formarea corectă a cheagului de sânge." },
      { q: "Când este necesară sutura după o extracție?", a: "Suturile sunt aplicate în cazul extracțiilor chirurgicale mai complexe, pentru a favoriza vindecarea corectă a plăgii." },
      { q: "Cât de repede pot reveni la activitățile zilnice?", a: "În majoritatea cazurilor, activitățile zilnice normale pot fi reluate a doua zi, evitând efortul fizic intens timp de 2–3 zile." },
    ],
  },
  profilaxie: {
    metaTitle: "Profilaxie Dentară — Detartraj, Periaj Profesional, Air-Flow | ArtDent",
    metaDescription: "Detartraj, periaj profesional și air-flow la ArtDent Slobozia. Igienizare completă și recomandări personalizate pentru prevenirea cariilor și a bolii parodontale.",
    intro: "Prevenția este cea mai eficientă formă de îngrijire dentară. O igienizare profesională periodică previne apariția cariilor și a bolii parodontale, menținând gingiile sănătoase și respirația proaspătă.",
    paragraphs: [
      "Detartrajul îndepărtează tartrul acumulat supra și subgingival, depunere pe care periajul zilnic, oricât de riguros, nu o poate elimina complet. Folosim atât tehnica cu ultrasunete, cât și instrumentar manual, în funcție de zona tratată.",
      "Periajul profesional finalizează igienizarea, curățând suprafața dinților de placa bacteriană rămasă și pregătind smalțul pentru tratamentul de lustruire.",
      "Tehnologia air-flow folosește un jet controlat de apă, aer și pulbere fină pentru a îndepărta petele de pe suprafața dinților — cauzate de cafea, ceai, vin roșu sau fumat — fără a afecta smalțul.",
      "La finalul fiecărei ședințe de profilaxie, primești recomandări personalizate de igienă orală, adaptate nevoilor tale specifice.",
    ],
    benefits: [
      "Prevenirea cariilor și a bolii parodontale",
      "Îndepărtarea tartrului inaccesibil periajului zilnic",
      "Respirație proaspătă și gingii sănătoase",
      "Îndepărtarea petelor de pe smalț, fără abraziune",
      "Depistarea precoce a altor probleme dentare la control",
      "Recomandări de igienă personalizate",
    ],
    faq: [
      { q: "Cât de des este recomandat detartrajul?", a: "În general, o dată la 6 luni, sau mai des dacă ai tendință crescută de acumulare a tartrului sau probleme parodontale." },
      { q: "Detartrajul afectează smalțul dinților?", a: "Nu, detartrajul profesional, realizat corect, elimină doar tartrul depus, fără a afecta structura sănătoasă a smalțului." },
      { q: "Procedura air-flow este dureroasă?", a: "Nu, air-flow este o procedură confortabilă, fără durere, potrivită și pentru pacienții cu dinți sensibili." },
      { q: "Detartrajul poate provoca sângerarea gingiilor?", a: "O ușoară sângerare este posibilă dacă gingiile sunt inflamate înainte de procedură, dar aceasta se reduce pe măsură ce gingia revine la o stare sănătoasă." },
      { q: "Ce diferență este între detartraj și periaj profesional?", a: "Detartrajul elimină tartrul întărit, în timp ce periajul profesional curăță și lustruiește suprafața dinților, finalizând igienizarea completă." },
    ],
  },
  radiografii: {
    metaTitle: "Radiografii Dentare Digitale — Retroalveolare | ArtDent Slobozia",
    metaDescription: "Radiografii retroalveolare digitale la ArtDent Slobozia, cu interpretare imediată, radiație redusă și arhivare digitală pentru un diagnostic precis.",
    intro: "Un diagnostic corect începe adesea cu o imagine clară a structurilor dentare invizibile cu ochiul liber. Radiografiile digitale realizate direct în clinică oferă informația necesară pentru un plan de tratament precis, chiar din prima vizită.",
    paragraphs: [
      "Radiografia retroalveolară digitală surprinde detaliat un dinte sau un grup restrâns de dinți, fiind utilă pentru depistarea cariilor interdentare, evaluarea rădăcinilor înainte de tratamentul de canal sau verificarea osului din jurul implanturilor.",
      "Tehnologia digitală reduce semnificativ doza de radiație comparativ cu radiografia clasică, iar imaginea este disponibilă instant pe ecran, permițând discutarea rezultatului chiar în cabinet, în aceeași vizită.",
      "Fiecare radiografie este arhivată digital în dosarul tău, ceea ce permite compararea evoluției în timp la controalele ulterioare, fără a repeta investigații inutile.",
    ],
    benefits: [
      "Diagnostic precis pentru carii, tratamente de canal sau evaluări pre-implant",
      "Radiație semnificativ redusă față de radiografia clasică",
      "Rezultat disponibil imediat, discutat în aceeași vizită",
      "Arhivare digitală pentru comparații ulterioare",
      "Investigație rapidă, fără disconfort",
    ],
    faq: [
      { q: "Radiografia dentară este nocivă?", a: "Radiografiile digitale folosesc o doză de radiație foarte redusă, considerată sigură, inclusiv pentru investigații repetate atunci când sunt necesare din punct de vedere clinic." },
      { q: "Cât durează o radiografie retroalveolară?", a: "Procedura durează câteva minute, iar imaginea este disponibilă instant, digital." },
      { q: "Care este diferența dintre radiografia retroalveolară și cea panoramică?", a: "Radiografia retroalveolară surprinde detaliat 1–3 dinți, fiind utilă pentru diagnostic țintit, în timp ce radiografia panoramică oferă o imagine de ansamblu a întregii arcade dentare." },
      { q: "Este nevoie de radiografie la fiecare control?", a: "Nu neapărat — frecvența este stabilită individual, în funcție de istoricul dentar și de riscul de apariție a cariilor sau a altor probleme." },
    ],
  },
};

export const pricing = [
  { title: "Consultație inițială", price: "de la 100 lei", text: "Examinare clinică, diagnostic și plan de tratament personalizat.", popular: false },
  { title: "Igienizare completă", price: "de la 250 lei", text: "Detartraj, periaj profesional și air-flow.", popular: false },
  { title: "Implant dentar", price: "de la 2.500 lei", text: "Implant, bont și coroană finală, planificate digital.", popular: true },
  { title: "Aparat dentar ortodontic", price: "de la 3.500 lei", text: "Fix sau gutiere transparente, cu plată etapizată pe durata tratamentului.", popular: false },
];

export const values = [
  { num: "01", title: "Realizarea tratamentelor dentare de înaltă calitate", text: "Construim relații puternice și crearea unor pacienți-prieteni ArtDent pe viață." },
  { num: "02", title: "Susținerea excelenței și a fericirii membrilor echipei", text: "Căutarea continuă a oportunităților pentru a inova și pentru a îmbunătăți experiența la ArtDent." },
  { num: "03", title: "Pasiune", text: "Dedicarea și grija pentru a atinge cele mai înalte standarde." },
  { num: "04", title: "Îndeplinirea misiunii", text: "Servicii și susținere dedicate comunității locale." },
];

export const priceCategories = [
  {
    slug: "consultatii-urgente",
    title: "Consultații și urgențe",
    items: [
      { name: "Consultație. Stabilire diagnostic. Plan de tratament", price: "100 – 150 lei" },
      { name: "Tratament de urgență", price: "150 lei" },
    ],
  },
  {
    slug: "terapia-cariei",
    title: "Terapia cariei simple",
    items: [
      { name: "Tratamentul cariilor superficiale, obturație cu material compozit fotopolimerizabil la culoarea dintelui natural", price: "250 lei" },
      { name: "Tratamentul cariilor medii, obturație cu material compozit fotopolimerizabil la culoarea dintelui natural", price: "300 lei" },
      { name: "Tratamentul cariilor mari, obturație cu material compozit fotopolimerizabil la culoarea dintelui natural", price: "350 lei" },
      { name: "Aplicarea pivotului intraradicular metalic", price: "400 lei" },
      { name: "Aplicare pivot din fibră de sticlă", price: "350 lei" },
      { name: "Aplicarea sistemelor de retenție (preț per știft)", price: "50 lei" },
      { name: "Tratamentul hiperesteziei dentinare / dinte", price: "50 lei" },
      { name: "Tratamentul leziunilor de colet", price: "180 lei" },
      { name: "Capă pentru reconstituire coronară", price: "50 lei" },
      { name: "Obturație de bază", price: "120 lei" },
      { name: "Obturație cu ciment glassionomer", price: "150 lei" },
      { name: "Obturație temporară", price: "50 lei" },
      { name: "Obturație dinți temporari cu glassionomer", price: "150 lei" },
    ],
  },
  {
    slug: "afectiuni-pulpare",
    title: "Tratamentul afecțiunilor pulpare",
    items: [
      { name: "Pansament calmant", price: "150 lei" },
      { name: "Coafaj indirect", price: "30 lei" },
      { name: "Coafaj direct", price: "50 lei" },
      { name: "Tratament endodontic rotativ + obturație de canal (mono/pluri)", price: "500 / 550 / 650 lei" },
      { name: "Tratament endodontic la microscop + obturație de canal (mono/pluri)", price: "650 / 700 lei" },
      { name: "Tratamentul cu hidroxid de calciu", price: "200 / 250 lei" },
      { name: "Tratament gangrenă / ședință", price: "150 lei" },
      { name: "Tratamentul afecțiunilor pulpare la dinții temporari", price: "150 lei" },
    ],
  },
  {
    slug: "parodontite-apicale",
    title: "Tratamentul parodontitelor apicale",
    items: [
      { name: "Tratamentul parodontitei apicale acute prin drenaj endodontic", price: "150 lei" },
      { name: "Tratamentul parodontitei apicale acute prin drenaj endodontic, incizie mucoperiostală și osteotomie transmaxilară", price: "200 lei" },
    ],
  },
  {
    slug: "parodontiu-marginal",
    title: "Tratamentul afecțiunilor parodonțiului marginal",
    items: [
      { name: "Tratamentul abcesului parodontal", price: "150 lei" },
      { name: "Echilibrare ocluzală prin șlefuire selectivă / dinte", price: "70 lei" },
      { name: "Tratamentul gingivo-stomatitelor / ședință", price: "100 lei" },
      { name: "Detartraj manual supra și subgingival / dinte", price: "50 lei" },
      { name: "Detartraj cu ultrasunete / dinte", price: "30 lei" },
      { name: "Pachet curățare: detartraj, periaj și floss", price: "300 lei" },
      { name: "Periaj dentar profesional / ședință, cu pastă inclusă", price: "100 lei" },
      { name: "Detartraj și periaj profesional", price: "200 lei" },
    ],
  },
  {
    slug: "chirurgie-buco-dentara",
    title: "Tratamente chirurgicale buco-dentare",
    items: [
      { name: "Anestezie locală de contact", price: "50 lei" },
      { name: "Anestezie cu infiltrație", price: "50 lei" },
      { name: "Extracție simplă dinți sau resturi radiculare monoradiculari (include anestezia, chiuretajul)", price: "200 / 250 lei" },
      { name: "Extracție simplă dinți sau resturi radiculare pluriradiculari (include anestezia, chiuretajul)", price: "250 / 300 lei" },
      { name: "Extracție molar de minte (include anestezia, chiuretajul)", price: "300 / 400 / 500 / 600 lei" },
      { name: "Extracție dinți temporari (copii)", price: "90 lei" },
      { name: "Extracție dinți parodontotici", price: "170 lei" },
      { name: "Chiuretaj alveolar", price: "150 lei" },
      { name: "Tratamentul hemoragiei sau al alveolitei postextracționale", price: "100 lei" },
      { name: "Aplicare Neocon", price: "50 lei" },
      { name: "Tratamentul pericoronaritelor cu decapușonare (fără anestezie)", price: "150 lei" },
      { name: "Sutura plăgilor buco-maxilo-faciale", price: "50 lei" },
      { name: "Rezecție apicală pentru dinți frontali", price: "600 lei" },
      { name: "Rezecție apicală pentru dinți laterali", price: "750 lei" },
      { name: "Odontectomie", price: "650 lei" },
      { name: "Chistectomie", price: "550 lei" },
      { name: "Adiție osoasă cu os artificial / flacon", price: "4.000 lei" },
      { name: "Implant dentar Dentium", price: "400 €" },
      { name: "Sinus Lift", price: "800 €" },
    ],
  },
  {
    slug: "protetica",
    title: "Tratamente protetice",
    items: [
      { name: "Proteză acrilică parțială", price: "1.900 lei" },
      { name: "Proteză acrilică totală", price: "2.000 lei" },
      { name: "Proteză elastică", price: "2.500 lei" },
      { name: "Reparație simplă proteză acrilică", price: "200 lei" },
      { name: "Coroană metalică turnată", price: "450 lei" },
      { name: "Reconstituire corono-radiculară", price: "400 lei" },
      { name: "Coroană acrilică baro-polimerizabilă", price: "400 lei" },
      { name: "Coroană ceramică", price: "1.400 lei" },
      { name: "Coroană porțelan / zirconiu", price: "1.250 / 1.300 lei" },
      { name: "Coroană metalo-ceramică", price: "750 lei" },
      { name: "Gutiere pentru albit dinții (set)", price: "600 lei" },
      { name: "Gutiere pentru bruxism (set)", price: "650 lei" },
      { name: "Coroană temporară-provizorie", price: "100 lei" },
      { name: "Reparație fațete la lucrări cu material compozit", price: "150 lei" },
      { name: "Coroană pe implant", price: "800 lei" },
      { name: "Proteză pe bară cu implant (2/4)", price: "7.500 / 8.500 lei" },
      { name: "Cimentare lucrare cu ciment glassionomer", price: "50 lei" },
      { name: "Îndepărtarea unei coroane", price: "150 lei" },
      { name: "Rebazare proteză acrilică", price: "250 lei" },
      { name: "Sistem suplimentar de ancorare unilaterală", price: "500 lei" },
    ],
  },
  {
    slug: "profilaxie",
    title: "Activități profilactice",
    items: [
      { name: "Fluorizări locale cu lacuri / dinte", price: "50 lei" },
      { name: "Fluorizări locale cu geluri", price: "100 lei" },
      { name: "Fluorizări cu geluri în gutiere (material)", price: "250 lei" },
      { name: "Sigilări de șanțuri și fosete cu material compozit / dinte", price: "200 lei" },
    ],
  },
  {
    slug: "estetica",
    title: "Estetizare și cosmetizare dentară",
    items: [
      { name: "Albire profesională în cabinet, pe dinte / ședință", price: "150 – 1.000 lei" },
      { name: "Albire profesională cu gel în gutiere (incl. 2 seringi de gel și gutiere)", price: "850 lei" },
      { name: "Gel albire, preț / seringă", price: "50 lei" },
      { name: "Montare perlă dentară (inclusă perla)", price: "200 lei" },
      { name: "Albirea dinților devitali / dinte", price: "200 lei" },
      { name: "Fațetare dinte cu materiale compozite", price: "250 lei" },
    ],
  },
  {
    slug: "radiografii",
    title: "Radiografii retroalveolare",
    items: [
      { name: "Radiografie retroalveolară", price: "80 lei" },
    ],
  },
  {
    slug: "ortodontie",
    title: "Ortodonție",
    items: [
      { name: "Aparat ortodontic", price: "2.700 lei" },
      { name: "Aparat ortodontic autoligaturant", price: "3.500 lei" },
      { name: "Dijunctor", price: "1.700 lei" },
      { name: "Dijunctor cu 2 mini-implanturi", price: "3.000 lei" },
      { name: "Dijunctor cu 4 mini-implanturi", price: "4.500 lei" },
      { name: "Lipit bracket", price: "200 lei" },
      { name: "Activare aparat / arcadă", price: "100 lei" },
    ],
  },
];

export const galleryItems = [
  { src: "/images/gallery/cabinet-stomatologic.jpg", label: "Cabinet stomatologic" },
  { src: "/images/gallery/sala-tratament-1.jpg", label: "Sală de tratament" },
  { src: "/images/gallery/sala-tratament-copii.jpg", label: "Sală de tratament pentru copii" },
  { src: "/images/gallery/consultatie-pediatrica.jpg", label: "Consultație pediatrică" },
  { src: "/images/gallery/tratament-cabinet.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/sterilizare-1.jpg", label: "Zonă de sterilizare" },
  { src: "/images/gallery/sterilizare-2.jpg", label: "Instrumentar sterilizat" },
  { src: "/images/gallery/zona-copii.jpg", label: "Zonă dedicată copiilor" },
  { src: "/images/gallery/tratament-detaliu-1.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/tratament-detaliu-2.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/tratament-detaliu-3.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/tratament-detaliu-4.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/tratament-detaliu-5.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/tratament-detaliu-6.jpg", label: "Tratament în cabinet" },
  { src: "/images/gallery/tratament-detaliu-7.jpg", label: "Tratament în cabinet" },
];

export const beforeAfterCases = [
  { label: "Caz 1", before: "/images/cases/caz1-before.jpg", after: "/images/cases/caz1-after.jpg" },
  { label: "Caz 2", before: "/images/cases/caz2-before.jpg", after: "/images/cases/caz2-after.jpg" },
  { label: "Caz 3", before: "/images/cases/caz3-before.jpg", after: "/images/cases/caz3-after.jpg" },
  { label: "Caz 4", before: "/images/cases/caz4-before.jpg", after: "/images/cases/caz4-after.jpg" },
  { label: "Caz 5", before: "/images/cases/caz5-before.jpg", after: "/images/cases/caz5-after.jpg" },
  { label: "Caz 6", before: "/images/cases/caz6-before.jpg", after: "/images/cases/caz6-after.jpg" },
];

export const heroStats = [
  { key: "years", target: 20, suffix: "+", label: "ani de experiență clinică", description: "Practică neîntreruptă în stomatologie generală și implantologie." },
  { key: "congresses", target: 11, suffix: "", label: "ediții Implanto Days", description: "Participare la congresul de implantologie de la Poiana Brașov." },
  { key: "patients", target: 1000, suffix: "+", label: "pacienți tratați", description: "Din Slobozia și întreg județul Ialomița." },
  { key: "rating", target: 4.9, suffix: "", label: "rating mediu Google", description: "Rată de satisfacție confirmată de recenziile pacienților.", decimal: true },
];

export const doctor = {
  name: "Dr. Mihaela Zupcu",
  role: "Medic coordonator",
  specializations: ["Implantologie orală", "Ortodonție", "Estetică dentară", "Stomatologie generală"],
  bio: "Peste 20 de ani de experiență clinică și competență în implantologie orală. A participat la 11 ediții ale congresului Implanto Days de la Poiana Brașov, unde se discută protocoalele actuale în implantologie.",
};

// De completat / de confirmat cu clinica — nume neconfirmate din designul aprobat.
export const teamMembers = [
  { name: "Dr. Andrei Pop", role: "Ortodonție" },
  { name: "Dr. Ioana Marin", role: "Estetică dentară" },
  { name: "Dr. Cristian Toma", role: "Chirurgie buco-dentară" },
];

export const faqs = [
  { q: "Cât durează un tratament cu implant dentar?", a: "De la inserarea implantului până la coroana finală trec în general 3–6 luni, timp necesar integrării osoase. În cazurile favorabile se poate atașa o coroană provizorie chiar în ziua intervenției, astfel încât să nu rămâi fără dinte." },
  { q: "Intervenția este dureroasă?", a: "Intervenția se face cu anestezie locală, deci nu simți durere în timpul ei. Disconfortul de după este ușor și se controlează cu medicația recomandată; îți explicăm exact la ce să te aștepți în primele 48 de ore." },
  { q: "Ce garanții oferiți pentru lucrări?", a: "Lucrările protetice și implanturile beneficiază de garanția producătorului materialelor, plus urmărirea noastră post-tratament. Condiția este respectarea controalelor periodice și a igienei recomandate." },
  { q: "Ce se întâmplă la prima consultație?", a: "Discutăm despre ce te deranjează, facem examinarea clinică și radiografiile necesare, apoi primești un plan de tratament cu etape, durată și costuri. Nu se începe nimic în aceeași ședință dacă nu ești pregătit." },
  { q: "Cum se plătește tratamentul?", a: "Poți plăti pe etape, în funcție de fazele tratamentului. Prețurile sunt comunicate integral înainte de începere, fără costuri adăugate pe parcurs." },
];

export const articles = [
  { tag: "PREVENȚIE", title: "Cum previi cariile dentare", excerpt: "Obiceiuri simple de igienă orală care reduc semnificativ riscul de carii." },
  { tag: "ESTETICĂ", title: "Ce este albirea profesională și cum funcționează", excerpt: "Diferența dintre albirea de cabinet și produsele de acasă, explicată pas cu pas." },
  { tag: "ORTODONȚIE", title: "Ortodonție la adulți: nu este niciodată prea târziu", excerpt: "De ce tot mai mulți adulți aleg aparate fixe sau gutiere transparente." },
];

export const fallbackReviews = [
  { text: "Am fost foarte mulțumită de serviciile oferite, doctori nemaipomeniți, răbdători cu pacienții si specialiști. Recomand cu încredere!", name: "Georgi Dragomir", initial: "G", meta: "Google" },
  { text: "Am vizitat de mai multe ori acest cabinet stomatologic, fiind tratat de domnul doctor Țibuleac Ghenadie, și pot să spun că sunt mulțumit de serviciile oferite.", name: "Gigi Popirlan", initial: "G", meta: "Google" },
  { text: "Un personal foarte pregătit și foarte ospitalieri, vă mulțumesc pentru ajutor 🙏", name: "Tamas Ovidiu Cezar", initial: "T", meta: "Google" },
  { text: "Oameni de calitate, servicii foarte bune, recomand.", name: "Titel Axinte", initial: "T", meta: "Google" },
  { text: "Am fost tratată cu respect și profesionalism! Aprecieri și mulțumiri personalului și în special domnului Ghenadie T! Mi-a plăcut că mi-a explicat mereu ce face, m-a înțeles când durea și a fost f. înțelegător.", name: "Cristina Ostriceanu", initial: "C", meta: "Google" },
  { text: "Membrii familiei noastră suntem clienții clinicii Artdent de mai bine de 20 de ani. Mihaela Zupcu este un profesionist, dornică să fie in pas cu ultimele tehnologii. Și-a format o echipă care lucrează excelent împreună. Recomand cu căldură tuturor, mai ales celor cu copii mici.", name: "Alice Sneatinschi", initial: "A", meta: "Google" },
  { text: "Profesionalism desăvârșit.", name: "Alexandru Constantinescu", initial: "A", meta: "Google" },
  { text: "Datorită dumneavoastră, frica băiețelului meu de stomatolog a dispărut! Mulțumim Artdent Slobozia, în special domnișoarei Zupcu Mihaela, pentru profesionalismul și răbdarea de care a dat dovadă! Vă mulțumim din suflet pentru noul dințișor! Recomand cu încredere!", name: "Cristina Constantin", initial: "C", meta: "Google" },
];

export const calendarLink =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Programare ArtDent Slobozia") +
  "&details=" + encodeURIComponent("Programare la clinica ArtDent, Al. Feroviarului 1, Slobozia") +
  "&location=" + encodeURIComponent("Al. Feroviarului 1, Slobozia");
