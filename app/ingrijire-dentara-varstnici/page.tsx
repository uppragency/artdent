import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { site } from "@/lib/data";

export const metadata = {
  title: "Îngrijire dentară pentru vârstnici | ArtDent Slobozia",
  description: "Particularitățile sănătății orale la vârsta a treia: uscăciunea bucală, recesiile gingivale, protezele și cum le gestionăm la ArtDent Slobozia.",
  alternates: { canonical: "/ingrijire-dentara-varstnici" },
};

const paragraphs = [
  "Sănătatea orală la vârsta a treia are particularități care merită atenție specială. Pe măsură ce înaintăm în vârstă, apar mai frecvent probleme precum uscăciunea gurii (adesea cauzată de anumite medicamente), recesiile gingivale care expun rădăcina dintelui la carii, uzura dentară acumulată în timp și, în multe cazuri, necesitatea unor lucrări protetice pentru dinții pierduți.",
  "Uscăciunea bucală este deosebit de importantă, pentru că saliva are un rol natural de protecție împotriva bacteriilor și a cariilor. Când producția de salivă scade, riscul de carii și infecții gingivale crește semnificativ. În aceste cazuri, recomandăm hidratare frecventă, evitarea băuturilor cu zahăr și, dacă este necesar, produse speciale pentru stimularea salivației.",
  "Pentru pacienții care poartă proteze dentare, verificarea periodică a adaptării acestora este esențială: o proteză care nu se mai potrivește corect poate cauza iritații, dificultăți de masticație și, pe termen lung, pierdere osoasă accelerată. La ArtDent Slobozia oferim atât ajustări ale protezelor existente, cât și soluții noi, inclusiv proteze pe implant, pentru o stabilitate superioară.",
  "Controalele regulate rămân la fel de importante ca la orice vârstă, poate chiar mai mult, pentru că multe afecțiuni orale la vârstnici evoluează fără durere vizibilă până în stadii avansate. O evaluare completă, cu radiografii dacă este necesar, permite depistarea din timp a problemelor și menținerea unei calități bune a vieții prin păstrarea funcției de masticație.",
];

export default function IngrijireDentaraVarstniciPage() {
  return (
    <>
      <PageHero
        eyebrow="Sfaturi pentru pacienți"
        title="Îngrijire dentară pentru vârstnici"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Îngrijire dentară pentru vârstnici" }]}
        currentPath="/ingrijire-dentara-varstnici"
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
              <span style={{ fontSize: 15.5, fontWeight: 600 }}>Ai nevoie de proteze dentare sau o ajustare?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "oklch(0.88 0.015 190)" }}>Vezi soluțiile noastre pentru proteze dentare, acrilice, elastice sau pe implant.</span>
            </div>
            <a href="/servicii/proteze-dentare" className="btn-outline-light-noscale" style={{ fontSize: 14.5, fontWeight: 600, padding: "13px 22px", borderRadius: 4, whiteSpace: "nowrap" }}>
              Proteze dentare →
            </a>
          </div>

          <div style={{ marginTop: 24 }}>
            <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
              Programează o consultație
            </OpenBookingButton>
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
              Ne poți contacta și la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
