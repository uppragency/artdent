import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { site } from "@/lib/data";

export const metadata = {
  title: "Frica de dentist — cum te putem ajuta | ArtDent Slobozia",
  description: "Frica de dentist este comună și tratabilă. Află cum abordăm anxietatea pacienților la ArtDent Slobozia, pas cu pas, în ritmul tău.",
  alternates: { canonical: "/frica-de-dentist" },
};

const paragraphs = [
  "Frica de dentist este una dintre cele mai frecvente forme de anxietate legată de sănătate și afectează pacienți de toate vârstele. Ea poate proveni dintr-o experiență neplăcută din trecut, dintr-o senzație de lipsă de control sau pur și simplu din teama de durere sau de necunoscut. Este important să știi că această reacție este normală și că amânarea vizitelor din acest motiv nu face decât să agraveze problemele dentare, ceea ce, la rândul său, poate crește anxietatea pentru vizita următoare.",
  "La ArtDent Slobozia, primul pas este comunicarea deschisă. Înainte de orice tratament, discutăm cu pacientul despre temerile sale, explicăm fiecare etapă a procedurii și răspundem la toate întrebările. Pacientul stabilește împreună cu medicul un semnal simplu (de exemplu, ridicarea mâinii) prin care poate cere oricând o pauză, ceea ce oferă un sentiment real de control asupra situației.",
  "Pentru procedurile care pot genera disconfort, folosim anestezie locală eficientă, aplicată cu grijă, astfel încât tratamentul să decurgă fără durere. Ritmul consultației este adaptat nevoilor pacientului: pentru cei cu anxietate mai ridicată, putem programa vizite mai scurte, în etape, pentru a construi treptat încrederea.",
  "Dacă ai amânat o vizită la dentist din cauza fricii, cel mai bun prim pas este o consultație de evaluare, fără presiunea unui tratament imediat. Astfel poți cunoaște echipa, poți vedea cabinetul și poți discuta liber despre ce te îngrijorează, înainte de a lua orice decizie legată de tratament.",
];

export default function FricaDeDentistPage() {
  return (
    <>
      <PageHero
        eyebrow="Sfaturi pentru pacienți"
        title="Frica de dentist"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Frica de dentist" }]}
        currentPath="/frica-de-dentist"
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
              Programează o consultație de evaluare
            </OpenBookingButton>
            <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
              Poți suna și direct la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a> pentru a discuta despre nevoile tale înainte de a programa o vizită.
            </p>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
