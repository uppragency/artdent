"use client";

import { useEffect, useState } from "react";
import { weeklyHours } from "@/lib/data";

export function WeeklySchedule() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden", background: "var(--card)" }}>
      {weeklyHours.map((d, i) => {
        const isToday = today === i;
        return (
          <div key={d.day} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "11px 16px", borderTop: i === 0 ? undefined : "1px solid var(--line)",
            background: isToday ? "var(--gold-tint-bg)" : undefined,
          }}>
            <span style={{ fontSize: 14, fontWeight: isToday ? 700 : 500, color: isToday ? "var(--gold-tint-text)" : "var(--ink)" }}>
              {d.day}{isToday && <span style={{ marginLeft: 8, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>astăzi</span>}
            </span>
            <span style={{ fontSize: 14, fontWeight: isToday ? 700 : 500, color: d.hours === "Închis" ? "var(--muted)" : (isToday ? "var(--gold-tint-text)" : "var(--ink)") }}>
              {d.hours}
            </span>
          </div>
        );
      })}
    </div>
  );
}
