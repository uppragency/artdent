import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { processSteps, site } from "@/lib/data";

export const metadata = {
  title: "Cum arată prima consultație la ArtDent Slobozia",
  description: "Ce se întâmplă pas cu pas la prima ta vizită la ArtDent Slobozia: discuție, examinare, plan de tratament transparent.",
  alternates: { canonical: "/prima-consultatie-adulti" },
};

export default function PrimaConsultatieAdultiPage() {
  return (
    <>
      <PageHero
        eyebrow="Sfaturi pentru pacienți"
        title="Cum arată prima consultație"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Prima consultație" }]}
        currentPath="/prima-consultatie-adulti"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <p style={{ margin: "0 0 28px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>
            Dacă vii pentru prima dată la ArtDent Slobozia, este util să știi dinainte la ce să te aștepți. Nu se întâmplă nimic pe care nu îl discutăm mai întâi cu tine, iar programul consultației este structurat astfel încât să pleci cu răspunsuri clare, nu doar cu un diagnostic.
          </p>

          <div style={{ display: "grid", gap: 14, marginBottom: 32 }}>
            {processSteps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 16, border: "1px solid var(--line)", borderRadius: 8, padding: "18px 20px", background: "var(--card)" }}>
                <span className="font-mono-label" style={{ fontSize: 15, color: "var(--gold-label-2)", flex: "0 0 auto" }}>{s.n}</span>
                <div>
                  <h2 style={{ margin: "0 0 6px", fontSize: 16.5, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</h2>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted-2)" }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
            La final, primești un plan de tratament scris, cu etapele și costurile aferente, astfel încât să poți decide în ritmul tău dacă și când continui. Nicio procedură nu începe fără acordul tău explicit.
          </p>

          <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
            Programează prima consultație
          </OpenBookingButton>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
            Pentru întrebări înainte de programare, sună la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a>.
          </p>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
