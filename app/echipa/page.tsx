import { doctor, teamMembers } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";

export const metadata = { title: "Echipă — ArtDent Slobozia" };

export default function EchipaPage() {
  const all = [
    { name: doctor.name, role: doctor.role, specializations: doctor.specializations, bio: doctor.bio },
    ...teamMembers.map((t) => ({ ...t, specializations: [t.role], bio: "" })),
  ];

  return (
    <>
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)" }}>
      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Echipa medicală</span>
      <h1 className="font-display" style={{ margin: "10px 0 0", fontWeight: 400, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.015em", color: "var(--teal-deep)" }}>
        Medicii ArtDent Slobozia
      </h1>

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {all.map((m) => (
          <div key={m.name} style={{ border: "1px solid var(--line)", borderRadius: 10, background: "var(--card)", padding: 24 }}>
            <div className="diagonal-stripes" style={{ aspectRatio: "4/3", borderRadius: 6, display: "grid", placeItems: "center" }}>
              <span className="font-mono-label" style={{ fontSize: 11, color: "var(--muted)" }}>portret profesional</span>
            </div>
            <p className="font-mono-label" style={{ marginTop: 14, fontSize: 11, color: "var(--gold-label)" }}>{m.role}</p>
            <h2 className="font-display" style={{ margin: "4px 0 0", fontSize: 22, color: "var(--teal-deep)" }}>{m.name}</h2>
            <p style={{ margin: "8px 0 0", fontSize: 14, color: m.bio ? "var(--muted-2)" : "var(--muted)" }}>
              {m.bio || "Descriere de completat."}
            </p>
            <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {m.specializations.map((s) => (
                <span key={s} style={{ fontSize: 12.5, padding: "6px 12px", borderRadius: 999, background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)" }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", marginTop: 40, fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
        Programează o consultație
      </OpenBookingButton>
    </section>
    <BookingSection />
    </>
  );
}
