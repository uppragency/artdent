import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata = {
  title: "Urgențe dentare Slobozia — durere de dinți | ArtDent Slobozia",
  description: "Ai o urgență dentară în Slobozia? Sună-ne direct pentru durere de dinți, dinte spart sau umflătură. Program Luni–Vineri, 09:00–19:00.",
  alternates: { canonical: "/urgente-dentare" },
};

const situations = [
  { title: "Durere de dinți persistentă", text: "O durere care nu trece la analgezice uzuale sau se agravează în timp poate indica o infecție sau o carie profundă care necesită tratament de urgență." },
  { title: "Dinte spart sau ciobit", text: "Dacă ai o fractură dentară, clătește gura cu apă călduță și evită să mesteci pe partea afectată până ajungi la cabinet." },
  { title: "Dinte scos accidental (avulsie)", text: "Timpul contează: dacă acționezi în primele 30–60 de minute, dintele poate fi uneori repoziționat. Vezi ghidul nostru complet mai jos." },
  { title: "Umflătură sau abces", text: "O umflătură la nivelul gingiei sau al obrazului, mai ales însoțită de febră, poate indica o infecție care trebuie tratată rapid." },
  { title: "Proteză sau lucrare protetică ruptă", text: "O coroană sau proteză deteriorată afectează masticația; recomandăm o vizită cât mai curând pentru ajustare sau înlocuire." },
  { title: "Sângerare gingivală abundentă", text: "Sângerarea persistentă, mai ales după o extracție recentă sau un traumatism, necesită evaluare imediată." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ce fac dacă am o durere de dinți puternică în afara programului clinicii?",
      acceptedAnswer: { "@type": "Answer", text: "Sună-ne la numărul afișat — lăsăm mesaj vocal sau revenim cu apel în cel mai scurt timp posibil. Pentru dureri severe însoțite de umflătură facială extinsă sau febră mare, adresează-te la camera de gardă." },
    },
    {
      "@type": "Question",
      name: "Cât costă o consultație de urgență?",
      acceptedAnswer: { "@type": "Answer", text: "Costul depinde de tratamentul necesar și este comunicat înainte de începerea oricărei proceduri, după evaluarea clinică." },
    },
  ],
};

export default function UrgenteDentarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Urgențe"
        title="Urgențe dentare Slobozia"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Urgențe dentare" }]}
        currentPath="/urgente-dentare"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <div style={{
            borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)",
            padding: "clamp(24px, 3vw, 32px)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between", marginBottom: 32,
          }}>
            <div style={{ display: "grid", gap: 6, maxWidth: "40ch" }}>
              <span style={{ fontSize: 15.5, fontWeight: 600 }}>Ai o urgență dentară chiar acum?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "oklch(0.88 0.015 190)" }}>Sună-ne direct — încercăm să te preluăm în aceeași zi, în funcție de disponibilitate.</span>
            </div>
            <a href={site.phoneHref} className="btn-outline-light-noscale" style={{ fontSize: 14.5, fontWeight: 600, padding: "13px 22px", borderRadius: 4, whiteSpace: "nowrap" }}>
              Sună acum · {site.phone}
            </a>
          </div>

          <p style={{ margin: "0 0 28px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>
            O urgență dentară este orice situație care necesită intervenție rapidă pentru a opri durerea, sângerarea sau o infecție și pentru a preveni agravarea problemei. Iată cele mai frecvente situații și ce poți face imediat, până ajungi la cabinet.
          </p>

          <div style={{ display: "grid", gap: 14 }}>
            {situations.map((s) => (
              <div key={s.title} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "18px 20px", background: "var(--card)" }}>
                <h2 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</h2>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted-2)" }}>{s.text}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 28, fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>
            Pentru dinte spart sau scos accidental, consultă și{" "}
            <a href="/traumatism-dentar" style={{ color: "var(--teal-600)", fontWeight: 600 }}>ghidul nostru despre traumatismul dentar</a>.
          </p>

          <p style={{ marginTop: 20, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)" }}>
            Program: {site.hours}. În afara programului, lasă un mesaj — revenim cu apel imediat ce este posibil. Pentru urgențe medicale majore (umflătură facială extinsă, dificultăți de respirație sau înghițire, febră mare), adresează-te la camera de gardă.
          </p>
        </div>
      </section>
    </>
  );
}
