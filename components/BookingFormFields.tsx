"use client";

import { useState } from "react";
import { calendarLink, serviceOptions } from "@/lib/data";
import { supabase } from "@/lib/supabase";

export function BookingFormFields({ dark = false }: { dark?: boolean }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const inputBg = dark ? "oklch(0.995 0.003 190)" : "#fff";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const service = String(form.get("service") || "");
    await supabase.from("contact_submissions").insert({
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      message: service ? `Serviciu dorit: ${service}` : null,
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setSending(false);
    setSent(true);
  }

  const labelStyle: React.CSSProperties = { display: "grid", gap: 7, fontSize: 13, fontWeight: 600, color: "var(--ink-soft)" };
  const inputStyle: React.CSSProperties = {
    fontFamily: "inherit", fontSize: 16, padding: "14px 16px", borderRadius: 4,
    border: "1px solid var(--line)", background: inputBg, color: "var(--ink)", minHeight: 50, width: "100%",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
      <label style={labelStyle}>Nume
        <input name="name" type="text" required placeholder="Numele tău" style={inputStyle} />
      </label>
      <label style={labelStyle}>Telefon
        <input name="phone" type="tel" required placeholder="07xx xxx xxx" style={inputStyle} />
      </label>
      <label style={labelStyle}>Email
        <input name="email" type="email" placeholder="nume@exemplu.ro" style={inputStyle} />
      </label>
      <label style={labelStyle}>Serviciu dorit
        <select name="service" style={inputStyle}>
          {serviceOptions.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <button type="submit" disabled={sending} className="btn-teal" style={{
        marginTop: 4, fontFamily: "inherit", fontSize: 16, fontWeight: 600, padding: "16px 24px",
        border: 0, borderRadius: 4, cursor: "pointer", minHeight: 54,
      }}>
        {sending ? "Se trimite…" : "Trimite solicitarea"}
      </button>
      <span style={{ fontSize: 12.5, lineHeight: 1.5, color: "oklch(0.55 0.015 195)" }}>
        {sent ? "Solicitare trimisă. Te contactăm în aceeași zi pentru confirmare." : "Te contactăm telefonic pentru confirmare. Datele nu sunt folosite în alt scop."}
      </span>
      {sent && (
        <a href={calendarLink} target="_blank" rel="noreferrer" className="btn-outline-dark" style={{
          textAlign: "center", fontSize: 14.5, fontWeight: 600, padding: "13px 20px",
          borderRadius: 4, minHeight: 48, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          Adaugă în calendar
        </a>
      )}
    </form>
  );
}
