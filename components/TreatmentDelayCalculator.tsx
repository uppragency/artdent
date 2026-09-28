"use client";

import { useState } from "react";
import { OpenBookingButton } from "@/components/OpenBookingButton";

type Scenario = {
  id: string;
  label: string;
  now: { title: string; price: string; text: string };
  later: { title: string; price: string; text: string };
};

const scenarios: Scenario[] = [
  {
    id: "carie-mica",
    label: "O carie mică, fără durere",
    now: { title: "Obturație simplă", price: "250 lei", text: "Tratament rapid, într-o singură ședință, fără complicații." },
    later: { title: "Obturație pe carie extinsă", price: "300 – 350 lei", text: "Cu cât cavitatea crește, cu atât obturația devine mai amplă și riscul de afectare a nervului dintelui crește." },
  },
  {
    id: "sensibilitate",
    label: "Sensibilitate sau durere ocazională",
    now: { title: "Tratament conservator", price: "50 – 350 lei", text: "Coafaj sau obturație, în funcție de stadiu — dintele își păstrează vitalitatea." },
    later: { title: "Tratament de canal", price: "500 – 650 lei", text: "Dacă durerea e ignorată, afectarea pulpei devine ireversibilă și necesită tratament endodontic complet." },
  },
  {
    id: "durere-persistenta",
    label: "Durere persistentă sau umflătură",
    now: { title: "Tratament endodontic sau drenaj", price: "150 – 650 lei", text: "Se poate încă salva dintele, cu tratament de canal sau drenaj al infecției." },
    later: { title: "Extracție + soluție de înlocuire", price: "200 lei + de la 1.900 lei", text: "O infecție netratată poate impune extracția, urmată de proteză sau implant pentru a înlocui dintele pierdut." },
  },
  {
    id: "dinte-pierdut",
    label: "Dinte deja pierdut sau foarte afectat",
    now: { title: "Implant sau proteză", price: "de la 1.900 lei", text: "Cu osul alveolar încă sănătos, opțiunile de înlocuire sunt mai simple și mai accesibile." },
    later: { title: "Adiție osoasă + implant", price: "+ 4.000 lei adiție osoasă", text: "Osul se resoarbe în timp după pierderea unui dinte, iar un implant tardiv poate necesita mai întâi reconstrucție osoasă." },
  },
];

export function TreatmentDelayCalculator() {
  const [selected, setSelected] = useState<Scenario>(scenarios[0]);

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div style={{ display: "grid", gap: 10 }}>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--muted)" }}>Ce se potrivește situației tale?</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelected(s)}
              style={{
                fontFamily: "inherit", fontSize: 13.5, fontWeight: 600, padding: "10px 16px", borderRadius: 999,
                border: `1px solid ${selected.id === s.id ? "var(--teal-deep)" : "var(--line)"}`,
                background: selected.id === s.id ? "var(--teal-deep)" : "var(--card)",
                color: selected.id === s.id ? "#fff" : "var(--ink)",
                cursor: "pointer",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        <div style={{ border: "2px solid var(--teal-deep)", borderRadius: 10, padding: "clamp(20px, 3vw, 26px)", background: "var(--card)" }}>
          <span className="font-mono-label" style={{ fontSize: 11, color: "var(--teal-600)" }}>DACĂ TRATEZI ACUM</span>
          <h3 className="font-display" style={{ margin: "8px 0 4px", fontSize: 22, color: "var(--teal-deep)" }}>{selected.now.title}</h3>
          <span className="font-display" style={{ fontSize: 26, color: "var(--teal-deep)" }}>{selected.now.price}</span>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--muted-2)" }}>{selected.now.text}</p>
        </div>
        <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: "clamp(20px, 3vw, 26px)", background: "var(--cream-section)" }}>
          <span className="font-mono-label" style={{ fontSize: 11, color: "var(--gold-label-2)" }}>DACĂ AMÂNI</span>
          <h3 className="font-display" style={{ margin: "8px 0 4px", fontSize: 22, color: "var(--ink)" }}>{selected.later.title}</h3>
          <span className="font-display" style={{ fontSize: 26, color: "var(--ink)" }}>{selected.later.price}</span>
          <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--muted-2)" }}>{selected.later.text}</p>
        </div>
      </div>

      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: "var(--muted)" }}>
        Prețurile sunt orientative, conform listei noastre de tarife. Evoluția reală depinde de fiecare caz — diagnosticul exact se stabilește la o consultație.
      </p>

      <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", width: "fit-content", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
        Programează o consultație acum
      </OpenBookingButton>
    </div>
  );
}
