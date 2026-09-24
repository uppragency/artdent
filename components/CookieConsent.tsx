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
      background: "var(--cream)", border: "1px solid var(--line)", borderRadius: 12,
      padding: "22px 22px", boxShadow: "0 -8px 40px -12px rgba(2,47,58,0.35), 0 20px 44px -20px rgba(2,47,58,0.35)",
      display: "grid", gap: 14,
    }}>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-soft)" }}>
        Folosim cookie-uri pentru a-ți oferi o experiență mai bună pe site. Vezi{" "}
        <a href="/politica-cookie-uri" style={{ color: "var(--teal-600)", fontWeight: 600 }}>politica de cookie-uri</a>.
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="btn-teal"
          style={{ fontFamily: "inherit", fontSize: 15, fontWeight: 600, padding: "13px 20px", border: 0, borderRadius: 4, cursor: "pointer", flex: "1 1 auto", minHeight: 48 }}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="btn-outline-dark"
          style={{ fontFamily: "inherit", fontSize: 15, fontWeight: 600, padding: "13px 20px", background: "none", borderRadius: 4, cursor: "pointer", flex: "0 0 auto", minHeight: 48 }}
        >
          Refuz
        </button>
      </div>
    </div>
  );
}
