import { services, teamMembers, doctor, guides } from "@/lib/data";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Harta site — ArtDent Slobozia", alternates: { canonical: "/harta-site" } };

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Pagini principale",
    links: [
      { label: "Acasă", href: "/" },
      { label: "Despre noi", href: "/despre" },
      { label: "Echipă", href: "/echipa" },
      { label: "Servicii", href: "/servicii" },
      { label: "Prețuri", href: "/preturi" },
      { label: "Testimoniale & rezultate", href: "/testimoniale" },
      { label: "Întrebări frecvente", href: "/intrebari-frecvente" },
      { label: "Contact", href: "/contact" },
      { label: "Dentist Slobozia", href: "/dentist-slobozia" },
      { label: "Urgențe dentare", href: "/urgente-dentare" },
    ],
  },
  {
    title: "Servicii",
    links: services.map((s) => ({ label: s.title, href: `/servicii/${s.slug}` })),
  },
  {
    title: "Echipă",
    links: [doctor, ...teamMembers].map((m) => ({ label: m.name, href: `/echipa/${m.slug}` })),
  },
  {
    title: "Ghiduri",
    links: [
      { label: "Toate ghidurile", href: "/ghiduri" },
      ...guides.map((g) => ({ label: g.title, href: `/ghiduri/${g.slug}` })),
      { label: "Frica de dentist", href: "/frica-de-dentist" },
      { label: "Prima vizită a copilului la dentist", href: "/prima-vizita-copil-la-dentist" },
      { label: "Îngrijire dentară pentru vârstnici", href: "/ingrijire-dentara-varstnici" },
      { label: "Prima consultație (adulți)", href: "/prima-consultatie-adulti" },
      { label: "Traumatism dentar", href: "/traumatism-dentar" },
    ],
  },
  {
    title: "Informații legale",
    links: [
      { label: "Termeni și condiții", href: "/termeni-si-conditii" },
      { label: "Politica de confidențialitate", href: "/politica-de-confidentialitate" },
      { label: "Politica de cookie-uri", href: "/politica-cookie-uri" },
    ],
  },
];

export default function HartaSitePage() {
  return (
    <>
      <PageHero
        eyebrow="Navigare"
        title="Harta site-ului"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Harta site" }]}
        currentPath="/harta-site"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)", display: "grid", gap: 40 }}>
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>{g.title}</h2>
              <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
                {g.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} style={{ fontSize: 15, color: "var(--teal-600)" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
