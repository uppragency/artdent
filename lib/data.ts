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
  cui: "RO00000000", // de completat
  mapsEmbed: "https://maps.google.com/maps?q=Al.+Feroviarului+1,+Slobozia&z=15&output=embed",
  googleReviewsUrl: "https://www.google.com/search?q=artdent+slobozia+recenzii",
};

export const nav = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Despre noi", href: "/despre" },
  { label: "Echipă", href: "/echipa" },
  { label: "Prețuri", href: "/servicii" },
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

export const pricing = [
  { title: "Consultație inițială", price: "de la 100 lei", text: "Examinare clinică, diagnostic și plan de tratament personalizat.", popular: false },
  { title: "Igienizare completă", price: "de la 250 lei", text: "Detartraj, periaj profesional și air-flow.", popular: false },
  { title: "Implant dentar", price: "de la 2.500 lei", text: "Implant, bont și coroană finală, planificate digital.", popular: true },
  { title: "Aparat dentar ortodontic", price: "de la 3.500 lei", text: "Fix sau gutiere transparente, cu plată etapizată pe durata tratamentului.", popular: false },
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
  "Albire dentară profesională", "Fațete ceramice", "Corectare aliniere",
  "Implant dentar unic", "Reconstrucție protetică", "Estetică gingivală",
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
  { text: "Text recenzie preluat live din profilul Google al clinicii.", name: "nume pacient", initial: "N", meta: "Google · acum 2 săptămâni" },
  { text: "Text recenzie preluat live din profilul Google al clinicii.", name: "nume pacient", initial: "N", meta: "Google · acum 1 lună" },
  { text: "Text recenzie preluat live din profilul Google al clinicii.", name: "nume pacient", initial: "N", meta: "Google · acum 2 luni" },
];

export const calendarLink =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Programare ArtDent Slobozia") +
  "&details=" + encodeURIComponent("Programare la clinica ArtDent, Al. Feroviarului 1, Slobozia") +
  "&location=" + encodeURIComponent("Al. Feroviarului 1, Slobozia");
