import { site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Politica de confidențialitate — ArtDent Slobozia" };

export default function PoliticaConfidentialitatePage() {
  return (
    <>
      <PageHero
        eyebrow="Informații legale"
        title="Politica de confidențialitate"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Politica de confidențialitate" }]}
      currentPath="/politica-de-confidentialitate"
      />
      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)", display: "grid", gap: 32 }}>
          <p style={{ margin: 0, fontSize: 13.5, color: "var(--muted)" }}>Ultima actualizare: 2026</p>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>1. Operatorul de date</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              {site.legalName}, CUI {site.cui}, cu sediul la {site.address}, prelucrează datele tale personale în calitate de operator, cu respectarea Regulamentului (UE) 2016/679 (GDPR). Pentru orice solicitare legată de datele tale, ne poți contacta la {site.email} sau la {site.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>2. Ce date colectăm</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Prin formularele de programare de pe site colectăm: nume, număr de telefon și, opțional, adresă de email. Aceste date sunt folosite exclusiv pentru a te contacta în vederea confirmării unei programări.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>3. Scopul prelucrării</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Datele colectate prin formular sunt folosite pentru: contactarea ta în vederea confirmării programării, comunicări legate de programarea solicitată. Nu folosim aceste date în scopuri de marketing fără consimțământul tău explicit și nu le vindem sau înstrăinăm către terți.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>4. Temeiul legal</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Prelucrarea datelor transmise prin formularul de programare se bazează pe consimțământul tău, exprimat prin completarea și trimiterea formularului, respectiv pe interesul legitim de a răspunde solicitării tale.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>5. Stocarea datelor</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Datele transmise prin formular sunt stocate în siguranță, într-o bază de date securizată, și sunt păstrate doar atât timp cât este necesar pentru scopul pentru care au fost colectate sau conform obligațiilor legale aplicabile domeniului medical.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>6. Drepturile tale</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Conform GDPR, ai dreptul de acces la datele tale, dreptul la rectificare, dreptul la ștergere ("dreptul de a fi uitat"), dreptul la restricționarea prelucrării, dreptul la portabilitatea datelor și dreptul de opoziție. Pentru a-ți exercita oricare dintre aceste drepturi, contactează-ne la {site.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>7. Servicii terțe</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Folosim furnizori de servicii tehnice (găzduire, bază de date) pentru funcționarea site-ului. Dacă activăm instrumente de analiză a traficului (ex. Google Analytics) sau de publicitate (ex. Meta Pixel), acestea vor colecta date suplimentare doar cu acordul tău, exprimat prin bara de cookie-uri.
            </p>
          </div>

          <div>
            <h2 className="font-display" style={{ fontSize: 22, color: "var(--teal-deep)" }}>8. Contact</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Pentru orice întrebare legată de modul în care prelucrăm datele tale, ne poți scrie la {site.email} sau suna la {site.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
