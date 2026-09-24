export function SectionSeam({ dark = false }: { dark?: boolean }) {
  const color = dark ? "var(--gold)" : "oklch(0.8 0.03 88)";
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, paddingTop: 28 }} aria-hidden="true">
      <span style={{ width: 28, height: 1.5, background: color, opacity: 0.6 }} />
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: color }} />
      <span style={{ width: 28, height: 1.5, background: color, opacity: 0.6 }} />
    </div>
  );
}
