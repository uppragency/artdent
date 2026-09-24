"use client";

import { useState } from "react";

export function ServiceFaq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "grid" }}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderTop: "1px solid var(--line-2)" }}>
            <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} style={{
              width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20,
              padding: "20px 0", background: "none", border: 0, cursor: "pointer", textAlign: "left",
              fontFamily: "inherit", color: "var(--ink)", minHeight: 52,
            }}>
              <span style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ fontSize: 20, fontWeight: 400, color: "var(--gold-label)", lineHeight: 1.2 }}>{isOpen ? "–" : "+"}</span>
            </button>
            <div style={{ maxHeight: isOpen ? 400 : 0, transition: "max-height .35s ease", overflow: "hidden" }}>
              <p style={{ margin: 0, padding: "0 40px 22px 0", fontSize: 14.5, lineHeight: 1.7, color: "var(--muted-2)" }}>{f.a}</p>
            </div>
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid var(--line-2)" }} />
    </div>
  );
}
