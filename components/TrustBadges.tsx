const badges = ["Răspuns în aceeași zi", "Fără obligații", "Prima discuție e gratuită"];

export function TrustBadges({ light = true }: { light?: boolean }) {
  const color = light ? "oklch(0.9 0.02 130)" : "var(--muted)";
  const dot = light ? "var(--gold)" : "var(--gold-label)";
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: 12.5 }}>
      {badges.map((b) => (
        <span key={b} style={{ display: "inline-flex", alignItems: "center", gap: 6, color }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: dot, flex: "0 0 auto" }} />
          {b}
        </span>
      ))}
    </div>
  );
}
