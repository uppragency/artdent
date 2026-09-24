"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

// Notă: metadata (inclusiv robots: noindex) e definită în layout separat
// nu e posibil într-un fișier "use client", vezi app/verifica-programare/layout.tsx

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  noua: { bg: "oklch(0.93 0.03 230)", text: "oklch(0.4 0.1 230)" },
  sunata: { bg: "oklch(0.94 0.05 88)", text: "oklch(0.45 0.08 88)" },
  confirmata: { bg: "oklch(0.93 0.06 155)", text: "oklch(0.4 0.1 155)" },
  anulata: { bg: "oklch(0.93 0.04 27)", text: "oklch(0.45 0.15 27)" },
};

const STATUS_LABEL: Record<string, string> = {
  noua: "Nouă",
  sunata: "Sunată",
  confirmata: "Confirmată",
  anulata: "Anulată",
};

type Result = { found: false } | { found: true; status: string; statusLabel: string; createdAt: string } | null;

export default function VerificaProgramarePage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`/api/check-submission?phone=${encodeURIComponent(phone)}`);
      if (!res.ok) {
        setError("Numărul introdus nu pare valid. Verifică și încearcă din nou.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setResult(data);
    } catch {
      setError("A apărut o eroare. Încearcă din nou sau sună-ne direct.");
    }
    setLoading(false);
  }

  return (
    <>
      <PageHero
        eyebrow="Programări"
        title="Verifică status programarea"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Verifică programarea" }]}
        currentPath="/verifica-programare"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <p style={{ margin: "0 0 28px", fontSize: 15.5, lineHeight: 1.7, color: "var(--muted-2)" }}>
            Introdu numărul de telefon folosit la trimiterea cererii de programare, pentru a vedea statusul curent.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07xx xxx xxx"
              style={{
                fontFamily: "inherit", fontSize: 16, padding: "14px 16px", borderRadius: 4,
                border: "1px solid var(--line)", minHeight: 50, width: "100%",
              }}
            />
            <button type="submit" disabled={loading} className="btn-teal" style={{
              fontFamily: "inherit", fontSize: 15.5, fontWeight: 600, padding: "14px 20px",
              border: 0, borderRadius: 4, cursor: loading ? "default" : "pointer", minHeight: 50,
            }}>
              {loading ? "Se verifică…" : "Verifică"}
            </button>
          </form>

          {error && <p style={{ marginTop: 16, fontSize: 14, color: "oklch(0.55 0.19 27)" }}>{error}</p>}

          {result && result.found === false && (
            <div style={{ marginTop: 24, padding: "18px 20px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--card)" }}>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted-2)" }}>
                Nu am găsit nicio cerere cu acest număr de telefon. Verifică dacă ai introdus numărul corect sau sună-ne la{" "}
                <a href={site.phoneHref} className="font-mono-label">{site.phone}</a>.
              </p>
            </div>
          )}

          {result && result.found === true && (
            <div style={{ marginTop: 24, padding: "20px 22px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--card)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{
                  fontSize: 13, fontWeight: 600, padding: "6px 14px", borderRadius: 999,
                  background: (STATUS_COLORS[result.status] || STATUS_COLORS.noua).bg,
                  color: (STATUS_COLORS[result.status] || STATUS_COLORS.noua).text,
                }}>
                  {STATUS_LABEL[result.status] || "În procesare"}
                </span>
                <span style={{ fontSize: 12.5, color: "var(--muted)" }}>
                  Trimisă pe {new Date(result.createdAt).toLocaleDateString("ro-RO")}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted-2)" }}>{result.statusLabel}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
