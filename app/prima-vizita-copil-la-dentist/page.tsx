import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { site } from "@/lib/data";

export const metadata = {
  title: "Prima vizită a copilului la dentist | ArtDent Slobozia",
  description: "Cum pregătești copilul pentru prima vizită la dentist și ce se întâmplă efectiv în cabinet, explicat pentru părinți.",
  alternates: { canonical: "/prima-vizita-copil-la-dentist" },
};

const paragraphs = [
  "Prima vizită la dentist este un moment important pentru orice copil, iar modul în care este gestionată poate influența relația sa cu îngrijirea dentară pentru mult timp. Recomandarea generală este ca prima consultație să aibă loc încă de la apariția primilor dinți sau, cel târziu, în jurul vârstei de un an, chiar dacă nu există o problemă vizibilă. Scopul acestei vizite timpurii este familiarizarea copilului cu cabinetul, nu neapărat un tratament.",
  "Pentru a reduce emoțiile, este util ca părinții să vorbească despre vizită într-un mod calm și pozitiv, fără a folosi cuvinte care pot crea anxietate, precum „injecție” sau „durere”. O explicație simplă, de tipul „mergem să numărăm dințișorii și să vedem cât de sănătoși sunt”, este suficientă pentru cei mici.",
  "La ArtDent Slobozia, prima întâlnire cu un copil este structurată astfel încât acesta să se simtă în siguranță: îi arătăm instrumentele, îl lăsăm să exploreze cabinetul și adaptăm ritmul consultației la reacțiile lui. Examinarea inițială urmărește dezvoltarea dentiției, eventuale probleme de carii precoce și oferă părinților recomandări practice despre igiena orală zilnică potrivită vârstei copilului.",
  "Vizitele de control regulate, la fiecare șase luni, ajută la depistarea din timp a problemelor și mențin o experiență pozitivă asociată cu îngrijirea dentară. Un copil obișnuit de mic cu vizitele la dentist are șanse mult mai mari să nu dezvolte anxietate legată de acestea la vârsta adultă.",
];

export default function PrimaVizitaCopilPage() {
  return (
    <>
      <PageHero
        eyebrow="Sfaturi pentru părinți"
        title="Prima vizită a copilului la dentist"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Prima vizită a copilului la dentist" }]}
        currentPath="/prima-vizita-copil-la-dentist"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <div style={{ display: "grid", gap: 18 }}>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>{p}</p>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
              Programează prima vizită
            </OpenBookingButton>
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
              Pentru întrebări înainte de programare, ne poți contacta la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
