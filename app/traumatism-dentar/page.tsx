import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata = {
  title: "Ce faci în caz de traumatism dentar | ArtDent Slobozia",
  description: "Dinte spart sau scos accidental? Iată ce trebuie să faci imediat, pas cu pas, până ajungi la cabinet.",
  alternates: { canonical: "/traumatism-dentar" },
};

const paragraphs = [
  "Un traumatism dentar (dinte spart, ciobit sau scos complet din alveolă) este o urgență reală în care timpul de reacție influențează direct șansele de recuperare. Cel mai important lucru este să rămâi calm și să acționezi rapid, mai ales în cazul unui dinte scos complet.",
  "Dacă un dinte permanent a fost scos accidental (avulsie), ridică-l ținându-l de coroană (partea vizibilă), nu de rădăcină. Dacă este murdar, clătește-l rapid cu apă curată sau soluție salină, fără să freci suprafața rădăcinii. Încearcă să îl repoziționezi în alveolă, dacă este posibil, și mușcă ușor pe o compresă pentru a-l menține pe loc. Dacă repoziționarea nu este posibilă, păstrează dintele într-un pahar cu lapte sau salivă (nu apă simplă) și ajungi la cabinet cât mai repede, ideal în primele 30-60 de minute.",
  "Pentru un dinte spart sau ciobit, clătește gura cu apă călduță, aplică o compresă rece pe zona afectată pentru a reduce umflătura și păstrează, dacă este posibil, fragmentul desprins într-un recipient cu apă sau lapte. Evită să mesteci pe partea afectată până la evaluarea de la cabinet.",
  "În toate cazurile de traumatism dentar, o evaluare radiologică este necesară pentru a verifica dacă rădăcina sau osul din jur au fost afectate, chiar dacă dintele pare stabil vizual. Amânarea vizitei poate reduce șansele de salvare a dintelui sau poate complica tratamentul ulterior.",
];

export default function TraumatismDentarPage() {
  return (
    <>
      <PageHero
        eyebrow="Urgențe"
        title="Ce faci în caz de traumatism dentar"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Traumatism dentar" }]}
        currentPath="/traumatism-dentar"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <div style={{ display: "grid", gap: 18 }}>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>{p}</p>
            ))}
          </div>

          <div style={{
            marginTop: 32, borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)",
            padding: "clamp(24px, 3vw, 32px)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "grid", gap: 6, maxWidth: "38ch" }}>
              <span style={{ fontSize: 15.5, fontWeight: 600 }}>Ai un traumatism dentar chiar acum?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "oklch(0.88 0.015 190)" }}>Sună-ne imediat — vezi și pagina noastră dedicată urgențelor dentare.</span>
            </div>
            <a href="/urgente-dentare" className="btn-outline-light-noscale" style={{ fontSize: 14.5, fontWeight: 600, padding: "13px 22px", borderRadius: 4, whiteSpace: "nowrap" }}>
              Urgențe dentare →
            </a>
          </div>

          <p style={{ marginTop: 20, fontSize: 14, color: "var(--muted)" }}>
            Sună direct la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
