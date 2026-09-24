"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "artdent_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (!existing) setVisible(true);
    } catch {
      // localStorage unavailable — skip silently, don't show the bar.
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-bar" style={{
      background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 10,
      padding: 18, boxShadow: "0 20px 44px -20px rgba(2,47,58,0.35)",
      display: "grid", gap: 10,
    }}>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)" }}>
        Folosim cookie-uri pentru a-ți oferi o experiență mai bună pe site. Vezi{" "}
        <a href="/politica-cookie-uri" style={{ color: "var(--teal-600)", fontWeight: 600 }}>politica de cookie-uri</a>.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="btn-teal"
          style={{ fontFamily: "inherit", fontSize: 13, fontWeight: 600, padding: "9px 16px", border: 0, borderRadius: 4, cursor: "pointer", flex: "1 1 auto" }}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="btn-outline-dark"
          style={{ fontFamily: "inherit", fontSize: 13, fontWeight: 600, padding: "9px 16px", background: "none", borderRadius: 4, cursor: "pointer", flex: "0 0 auto" }}
        >
          Refuz
        </button>
      </div>
    </div>
  );
}
