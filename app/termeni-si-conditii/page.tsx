import { site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Termeni și condiții — ArtDent Slobozia" };

export default function TermeniPage() {
  return (
    <>
      <PageHero
        eyebrow="Informații legale"
        title="Termeni și condiții"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Termeni și condiții" }]}
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)", display: "grid", gap: 32 }}>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>Ultima actualizare: 2026</p>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>1. Datele operatorului</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Acest website (artdentslobozia.ro) este operat de {site.legalName}, CUI {site.cui}, cu sediul la {site.address}. Pentru orice întrebare legată de acești termeni, ne poți contacta la {site.email} sau la {site.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>2. Acceptarea termenilor</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Prin accesarea și utilizarea acestui site, ești de acord cu prezenții termeni și condiții. Dacă nu ești de acord cu vreunul dintre ei, te rugăm să nu folosești acest site.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>3. Scopul site-ului</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Site-ul are un caracter informativ: prezintă serviciile stomatologice oferite de clinică, echipa medicală, prețuri orientative și permite solicitarea unei programări. Trimiterea unui formular de pe acest site reprezintă o solicitare de programare, nu o confirmare fermă — programarea este confirmată telefonic de echipa clinicii.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>4. Informații medicale</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Conținutul acestui site are scop informativ general și nu constituie o consultație medicală și nu înlocuiește sfatul unui medic. Orice decizie legată de un tratament stomatologic trebuie luată în urma unei consultații directe cu medicul.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>5. Prețuri</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Prețurile afișate pe site au caracter orientativ. Prețul final al unui tratament se stabilește exclusiv după consultație, în funcție de planul de tratament personalizat, și poate diferi de valorile afișate.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>6. Proprietate intelectuală</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Conținutul acestui site (texte, imagini, logo, design) este proprietatea {site.legalName} sau este utilizat cu acordul deținătorilor de drepturi și nu poate fi reprodus fără acord scris prealabil.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>7. Limitarea răspunderii</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Depunem eforturi rezonabile pentru ca informațiile de pe site să fie corecte și actualizate, dar nu garantăm absența erorilor. Clinica nu răspunde pentru eventuale prejudicii rezultate din utilizarea informațiilor publicate pe site, în afara celor generate de servicii medicale prestate direct, care sunt guvernate de reglementările specifice din domeniul sănătății.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>8. Modificarea termenilor</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Acești termeni pot fi actualizați periodic. Versiunea aplicabilă este cea publicată pe site la data accesării.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
