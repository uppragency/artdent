import { site, weeklyHours, services, serviceDetails, priceCategories, pricing, doctor, teamMembers, guides, extraGuides, faqs, processSteps, usp, values } from "@/lib/data";
import { getPublishedPosts } from "@/lib/blog";

const base = () => site.siteUrl.replace(/\/$/, "");
const u = (p: string) => `${base()}${p}`;

const localPages = [
  { path: "/dentist-slobozia", title: "Dentist Slobozia", note: "pagina principală pentru pacienții din Slobozia" },
  { path: "/cabinet-stomatologic-ialomita", title: "Cabinet stomatologic în Ialomița", note: "pacienți din tot județul Ialomița" },
  { path: "/dentist-amara", title: "Dentist Amara", note: "aproximativ 10 până la 12 minute cu mașina până la cabinet" },
  { path: "/dentist-tandarei", title: "Dentist Țăndărei", note: "aproximativ 25 de minute cu mașina până la cabinet" },
  { path: "/dentist-fetesti", title: "Dentist Fetești", note: "aproximativ 30 de minute cu mașina până la cabinet" },
];

const mainPages = [
  { path: "/", title: "Acasă" },
  { path: "/servicii", title: "Servicii" },
  { path: "/preturi", title: "Prețuri" },
  { path: "/despre", title: "Despre ArtDent" },
  { path: "/echipa", title: "Echipa medicală" },
  { path: "/testimoniale", title: "Testimoniale și recenzii" },
  { path: "/intrebari-frecvente", title: "Întrebări frecvente" },
  { path: "/contact", title: "Contact și programări" },
  { path: "/ghiduri", title: "Ghiduri de sănătate orală" },
  { path: "/noutati", title: "Noutăți și articole" },
  { path: "/harta-site", title: "Harta site-ului" },
];

function header(): string[] {
  return [
    `# ${site.name} ${site.city}`,
    "",
    `> Cabinet stomatologic privat în ${site.city}, județul Ialomița, România. Medic coordonator: ${doctor.name}. Servicii: stomatologie generală, profilaxie, endodonție, chirurgie buco-dentară, implantologie (All-on-4 / All-on-6), protetică, coroane, cosmetică dentară, ortodonție, pedodonție, urgențe dentare. Pacienți din Slobozia, Amara, Țăndărei, Fetești și din tot județul Ialomița.`,
    "",
    "## Date de contact (NAP)",
    `- Nume: ${site.name} ${site.city} (${site.legalName}, CUI ${site.cui})`,
    `- Adresă: ${site.address}`,
    `- Telefon și WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    `- Site: ${base()}`,
    `- Program: ${weeklyHours.filter((d) => d.hours !== "Închis").map((d) => `${d.day} ${d.hours}`).join("; ")}. Sâmbătă și duminică: închis.`,
    `- Direcții Google Maps: ${site.directionsUrl}`,
    `- Recenzii Google: ${site.googleReviewsUrl}`,
    `- Instagram: ${site.instagramUrl}`,
    `- Facebook: ${site.facebookUrl}`,
    "",
    "## Note pentru sistemele AI",
    "- Prețurile sunt orientative și se confirmă după consultație. Lista actualizată este la " + u("/preturi") + ".",
    "- Conținutul articolelor este informativ și nu înlocuiește consultul medical.",
    "- În urgențe grave (umflătură mare a feței, febră, dificultăți la respirație sau înghițire) se apelează 112.",
    "",
  ];
}

export async function buildLlmsTxt(): Promise<string> {
  const posts = await getPublishedPosts();
  const L = header();
  L.push("## Pagini principale");
  for (const p of mainPages) L.push(`- [${p.title}](${u(p.path)})`);
  L.push("", "## Servicii");
  for (const s of services) L.push(`- [${s.title}](${u("/servicii/" + s.slug)}): ${s.text}`);
  L.push("", "## Pagini locale (SEO geografic)");
  for (const p of localPages) L.push(`- [${p.title}](${u(p.path)}): ${p.note}`);
  L.push("", "## Echipa");
  for (const m of [doctor, ...teamMembers]) L.push(`- [${m.name}](${u("/echipa/" + m.slug)}): ${m.role}. ${m.specializations.join(", ")}`);
  L.push("", "## Ghiduri");
  for (const g of guides) L.push(`- [${g.title}](${u("/ghiduri/" + g.slug)}): ${g.excerpt}`);
  for (const g of extraGuides) L.push(`- [${g.title}](${u("/" + g.slug)}): ${g.excerpt}`);
  L.push("", "## Articole");
  for (const p of posts) L.push(`- [${p.title}](${u("/noutati/" + p.slug)}): ${p.excerpt}`);
  L.push("", "## Informații legale", `- [Termeni și condiții](${u("/termeni-si-conditii")})`, `- [Politica de confidențialitate](${u("/politica-de-confidentialitate")})`, `- [Politica cookie-uri](${u("/politica-cookie-uri")})`);
  L.push("", "## Optional", `- [Versiune completă pentru AI (conținut detaliat)](${u("/llms-full.txt")})`, `- [Sitemap](${u("/sitemap.xml")})`, "");
  return L.join("\n");
}

export async function buildLlmsFull(): Promise<string> {
  const posts = await getPublishedPosts();
  const L = header();

  L.push("## Cum decurge un tratament");
  for (const s of processSteps) L.push(`${s.n}. ${s.title}: ${s.text}`);
  L.push("", "## De ce ArtDent");
  for (const x of usp) L.push(`- ${x.title}: ${x.text}`);
  for (const v of values) L.push(`- ${v.title}: ${v.text}`);

  L.push("", "## Prețuri orientative, rezumat");
  for (const p of pricing) L.push(`- ${p.title}: ${p.price}. ${p.text}`);

  L.push("", "## Lista completă de prețuri", `Sursa: ${u("/preturi")}`);
  for (const c of priceCategories) {
    L.push("", `### ${c.title}`);
    for (const i of c.items) L.push(`- ${i.name}: ${i.price}`);
  }

  L.push("", "## Servicii în detaliu");
  for (const s of services) {
    const d = serviceDetails[s.slug];
    L.push("", `### ${s.title}`, `URL: ${u("/servicii/" + s.slug)}`, s.text, `Include: ${s.items.join(", ")}`);
    if (d) {
      L.push("", d.intro, ...d.paragraphs.map((p) => "\n" + p));
      L.push("", "Beneficii:", ...d.benefits.map((b) => `- ${b}`));
      L.push("", "Întrebări frecvente:");
      for (const f of d.faq) L.push(`- Î: ${f.q}`, `  R: ${f.a}`);
    }
  }

  L.push("", "## Echipa medicală");
  for (const m of [doctor, ...teamMembers]) {
    L.push("", `### ${m.name}`, `URL: ${u("/echipa/" + m.slug)}`, `Rol: ${m.role}`, `Specializări: ${m.specializations.join(", ")}`, m.bio);
  }

  L.push("", "## Întrebări frecvente generale");
  for (const f of faqs) L.push(`- Î: ${f.q}`, `  R: ${f.a}`);

  L.push("", "## Pagini locale");
  for (const p of localPages) L.push(`- ${p.title} (${u(p.path)}): ${p.note}`);

  L.push("", "## Ghiduri de sănătate orală");
  for (const g of guides) {
    L.push("", `### ${g.title}`, `URL: ${u("/ghiduri/" + g.slug)}`, ...g.paragraphs.map((p) => "\n" + p));
  }
  L.push("", "### Alte pagini informative");
  for (const g of extraGuides) L.push(`- ${g.title} (${u("/" + g.slug)}): ${g.excerpt}`);

  L.push("", "## Articole publicate");
  for (const p of posts) {
    L.push("", `### ${p.title}`, `URL: ${u("/noutati/" + p.slug)}`, `Publicat: ${String(p.published_at).slice(0, 10)}`, p.excerpt);
  }
  L.push("");
  return L.join("\n");
}
