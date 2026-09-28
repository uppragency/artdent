import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "ArtDent Kids — vizita la dentist explicată copiilor",
  description: "O poveste prietenoasă, cu mascota ArtDent, care explică celor mici ce se întâmplă la o vizită la dentist. Pentru părinți și copii, înainte de prima programare.",
  path: "/artdent-kids",
});

const steps = [
  {
    title: "Te aștept la ușă",
    text: "Bună! Eu sunt mascota ArtDent și azi îți arăt cum arată o vizită la dentist. Nu-i nimic înfricoșător — hai să vezi!",
  },
  {
    title: "Ne așezăm pe scaunul special",
    text: "Scaunul se mișcă și se apleacă ușor, ca un leagăn. Poți sta cu mama sau tata lângă tine, dacă vrei.",
  },
  {
    title: "Numărăm dințișorii",
    text: "Doamna sau domnul doctor se uită cu o oglinjoară micuță la toți dințișorii tăi, ca să vadă că sunt sănătoși și puternici.",
  },
  {
    title: "Le facem curat, dacă e nevoie",
    text: "Dacă un dinte are nevoie de puțină grijă, doctorul îți explică exact ce face, pas cu pas, înainte să înceapă.",
  },
  {
    title: "Primești o steluță de curaj",
    text: "La final, ai fost curajos! Pleci acasă cu dinții verificați și cu un motiv de mândrie.",
  },
];

export default function ArtDentKidsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pentru cei mici"
        title="ArtDent Kids"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "ArtDent Kids" }]}
        currentPath="/artdent-kids"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)", textAlign: "center" }}>
          <img src="/images/mascota-artdent.svg" alt="Mascota ArtDent" width={140} height={175} style={{ display: "block", margin: "0 auto 8px" }} />
          <h2 className="font-display" style={{ margin: "0 0 12px", fontSize: "clamp(24px, 3.4vw, 32px)", color: "var(--teal-deep)" }}>
            Hai să vedem cum e la dentist!
          </h2>
          <p style={{ margin: "0 auto", maxWidth: "48ch", fontSize: 15.5, lineHeight: 1.7, color: "var(--muted-2)" }}>
            O poveste scurtă pentru copii, de citit împreună cu mama sau tata înainte de prima vizită.
          </p>
        </div>

        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 88px)", display: "grid", gap: 20 }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{
              display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 22px", borderRadius: 12,
              background: "var(--card)", border: "1px solid var(--line)",
            }}>
              <span className="font-display" style={{
                width: 40, height: 40, borderRadius: "50%", background: "var(--gold-tint-bg)", color: "var(--gold-label-2)",
                display: "grid", placeItems: "center", fontSize: 17, flex: "0 0 auto",
              }}>
                {i + 1}
              </span>
              <div style={{ display: "grid", gap: 6 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--muted-2)" }}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)" }}>
          <div style={{
            borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)",
            padding: "clamp(24px, 3vw, 32px)", display: "grid", gap: 12, textAlign: "center", justifyItems: "center",
          }}>
            <span style={{ fontSize: 15.5, fontWeight: 600, maxWidth: "40ch" }}>
              Pentru părinți: mai multe detalii despre prima vizită a copilului la dentist
            </span>
            <a href="/prima-vizita-copil-la-dentist" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)" }}>
              Citește ghidul complet →
            </a>
            <OpenBookingButton className="btn-gold" style={{ marginTop: 8, fontSize: 14.5, fontWeight: 600, padding: "14px 24px", borderRadius: 4, display: "inline-flex" }}>
              Programează o vizită
            </OpenBookingButton>
          </div>
        </div>
      </section>
      <BookingSection />
    </>
  );
}
