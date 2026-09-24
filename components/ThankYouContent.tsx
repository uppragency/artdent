"use client";

import { useSearchParams } from "next/navigation";
import { site, calendarLink, services, relatedServices } from "@/lib/data";

function getContactEstimate(): string {
  const now = new Date();
  const day = now.getDay(); // 0 = Duminică ... 6 = Sâmbătă
  const hour = now.getHours();
  const isWeekday = day >= 1 && day <= 5;
  const withinHours = isWeekday && hour >= 9 && hour < 19;

  if (withinHours) return "în următoarele 2–4 ore, în intervalul de program";
  if (day === 6 || day === 0) return "luni dimineață, de la ora 09:00";
  if (isWeekday && hour >= 19) return day === 5 ? "luni dimineață, de la ora 09:00" : "mâine dimineață, de la ora 09:00";
  return "astăzi, de la ora 09:00";
}

export function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const phone = searchParams.get("phone") || "";
  const from = searchParams.get("from") || "";

  const contactEstimate = getContactEstimate();

  const fromSlug = from.startsWith("/servicii/") ? from.replace("/servicii/", "") : null;
  const related = fromSlug ? (relatedServices[fromSlug] || []).map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) : [];
  const fromService = fromSlug ? services.find((s) => s.slug === fromSlug) : null;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
      {(name || phone) && (
        <div style={{ borderRadius: 10, background: "var(--cream-section)", padding: 20, marginBottom: 28, textAlign: "left" }}>
          <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink)" }}>
            Ai solicitat o programare{fromService ? <> pentru <strong>{fromService.title}</strong></> : ""}
            {name && <> ca <strong>{name}</strong></>}
            {phone && <>, la numărul <strong className="font-mono-label">{phone}</strong></>}.
          </p>
        </div>
      )}

      <div style={{ textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--muted-2)" }}>
          Am primit solicitarea ta de programare. Te contactăm telefonic <strong>{contactEstimate}</strong>.
        </p>
      </div>

      {/* Progres pași */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "32px 0" }}>
        {[
          { label: "Trimis", done: true },
          { label: "Te contactăm", done: false },
          { label: "Programare confirmată", done: false },
        ].map((step, i, arr) => (
          <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "grid", gap: 6, justifyItems: "center" }}>
              <span style={{
                width: 26, height: 26, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700,
                background: step.done ? "var(--teal-deep)" : "var(--line)", color: step.done ? "#fff" : "var(--muted)",
              }}>
                {step.done ? "✓" : i + 1}
              </span>
              <span style={{ fontSize: 11, color: step.done ? "var(--teal-deep)" : "var(--muted)", fontWeight: step.done ? 600 : 500, whiteSpace: "nowrap" }}>{step.label}</span>
            </div>
            {i < arr.length - 1 && <span style={{ width: 30, height: 1.5, background: "var(--line)", marginBottom: 16 }} />}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
        <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-teal" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
          Scrie-ne pe WhatsApp
        </a>
        <a href={site.phoneHref} className="btn-outline-dark" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
          {site.phone}
        </a>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", justifyContent: "center", marginTop: 20 }}>
        <a href={calendarLink} target="_blank" rel="noreferrer" style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-600)" }}>
          + Adaugă în calendar
        </a>
        <a href={`/contact?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-600)" }}>
          Modifică solicitarea
        </a>
      </div>

      <div style={{ marginTop: 40 }}>
        <iframe
          src={site.mapsEmbed}
          style={{ border: "1px solid var(--line)", borderRadius: 10, width: "100%", minHeight: 220, display: "block" }}
          loading="lazy"
          title="Hartă ArtDent Slobozia"
        />
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: 32, textAlign: "left" }}>
          <p style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-soft)", marginBottom: 10 }}>
            Cât timp aștepți, poate te interesează și:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {related.map((s) => s && (
              <a key={s.slug} href={`/servicii/${s.slug}`} style={{
                fontSize: 13, fontWeight: 600, padding: "9px 16px", borderRadius: 999,
                background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)",
              }}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      )}

      <a href="/" style={{ display: "inline-block", marginTop: 32, fontSize: 14, color: "var(--muted)" }}>← Înapoi la pagina principală</a>
    </div>
  );
}
