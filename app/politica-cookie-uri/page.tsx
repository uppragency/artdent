import { site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Politica de cookie-uri — ArtDent Slobozia" };

export default function PoliticaCookiePage() {
  return (
    <>
      <PageHero
        eyebrow="Informații legale"
        title="Politica de cookie-uri"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Politica de cookie-uri" }]}
      currentPath="/politica-cookie-uri"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)", display: "grid", gap: 32 }}>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>Ultima actualizare: 2026</p>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>1. Ce sunt cookie-urile</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Cookie-urile sunt fișiere text de mici dimensiuni, stocate în browserul tău atunci când vizitezi un site, folosite pentru a reține preferințe sau pentru a înțelege modul de utilizare a site-ului.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>2. Ce cookie-uri folosim</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              <strong>Cookie-uri necesare</strong> — esențiale pentru funcționarea site-ului (ex. reținerea alegerii tale privind cookie-urile). Acestea nu pot fi dezactivate.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              <strong>Cookie-uri de analiză</strong> — dacă sunt activate (Google Analytics), ne ajută să înțelegem cum este folosit site-ul, în mod agregat și anonimizat, pentru a-l îmbunătăți.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              <strong>Cookie-uri de marketing</strong> — dacă sunt activate (Meta Pixel), pot fi folosite pentru a măsura eficiența campaniilor noastre de promovare pe rețele sociale.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>3. Cum îți poți gestiona preferințele</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              La prima vizită, bara de cookie-uri îți permite să accepți sau să refuzi cookie-urile care nu sunt strict necesare. Îți poți schimba oricând browserul astfel încât să blocheze sau să șteargă cookie-urile — reține că unele funcționalități ale site-ului pot fi afectate dacă dezactivezi cookie-urile necesare.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>4. Contact</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Pentru întrebări despre această politică, ne poți contacta la {site.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
