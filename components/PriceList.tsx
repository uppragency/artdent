"use client";

import { useState } from "react";
import { priceCategories } from "@/lib/data";

export function PriceList() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? priceCategories : priceCategories.filter((c) => c.slug === filter);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <label htmlFor="price-filter" style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-soft)" }}>
          Sortează după tipul de tratament
        </label>
        <select
          id="price-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            fontFamily: "inherit", fontSize: 15, padding: "12px 16px", borderRadius: 4,
            border: "1px solid var(--line)", background: "#fff", color: "var(--ink)", minHeight: 46,
          }}
        >
          <option value="all">Toate tratamentele</option>
          {priceCategories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.title}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "grid", gap: 40 }}>
        {visible.map((cat) => (
          <div key={cat.slug}>
            <h2 className="font-display" style={{ margin: "0 0 16px", fontSize: 24, color: "var(--teal-deep)" }}>
              {cat.title}
            </h2>
            <div style={{ border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden", background: "var(--card)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14.5 }}>
                <thead>
                  <tr style={{ background: "var(--cream-section)" }}>
                    <th style={{ textAlign: "left", padding: "14px 20px", fontWeight: 600, color: "var(--teal-deep)" }}>Tratament</th>
                    <th style={{ textAlign: "right", padding: "14px 20px", fontWeight: 600, color: "var(--teal-deep)", whiteSpace: "nowrap" }}>Preț (lei)</th>
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((it, i) => (
                    <tr key={it.name} style={{ borderTop: i === 0 ? undefined : "1px solid var(--line)" }}>
                      <td style={{ padding: "14px 20px", color: "var(--ink)" }}>{it.name}</td>
                      <td style={{ padding: "14px 20px", textAlign: "right", fontWeight: 600, color: "var(--teal-600)", whiteSpace: "nowrap" }}>{it.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 32, fontSize: 13.5, color: "var(--muted)" }}>
        Prețurile finale se stabilesc după consultație, în funcție de planul de tratament personalizat.
      </p>
    </div>
  );
}
