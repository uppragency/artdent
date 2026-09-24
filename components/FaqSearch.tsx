"use client";

import { useMemo, useState } from "react";
import { ServiceFaq } from "@/components/ServiceFaq";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { site } from "@/lib/data";

type QA = { q: string; a: string };
type Section = { key: string; title: string; num?: string; href?: string; faq: QA[] };

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function FaqSearch({ generalTitle, generalFaq, sections }: { generalTitle: string; generalFaq: QA[]; sections: Section[] }) {
  const [query, setQuery] = useState("");
  const q = normalize(query.trim());

  const filteredGeneral = useMemo(() => {
    if (!q) return generalFaq;
    return generalFaq.filter((f) => normalize(f.q).includes(q) || normalize(f.a).includes(q));
  }, [q, generalFaq]);

  const filteredSections = useMemo(() => {
    if (!q) return sections;
    return sections
      .map((s) => ({ ...s, faq: s.faq.filter((f) => normalize(f.q).includes(q) || normalize(f.a).includes(q)) }))
      .filter((s) => s.faq.length > 0);
  }, [q, sections]);

  const totalResults = filteredGeneral.length + filteredSections.reduce((n, s) => n + s.faq.length, 0);
  const noResults = q.length > 0 && totalResults === 0;
  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Bună, am o întrebare despre tratamentele ArtDent Slobozia.")}`;

  return (
    <>
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(24px, 3vw, 40px)" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Caută o întrebare (ex: implant, durere, preț)…"
            style={{
              width: "100%", padding: "16px 44px 16px 18px", fontSize: 15.5, borderRadius: 8,
              border: "1px solid var(--line)", background: "var(--card)", color: "var(--ink)",
              fontFamily: "inherit", outline: "none",
            }}
            aria-label="Caută în întrebările frecvente"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Șterge căutarea"
              style={{
                position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                background: "none", border: 0, cursor: "pointer", fontSize: 18, color: "var(--muted)", lineHeight: 1,
              }}
            >
              ×
            </button>
          )}
        </div>
        {q && !noResults && (
          <p style={{ margin: "10px 2px 0", fontSize: 13.5, color: "var(--muted)" }}>
            {totalResults} {totalResults === 1 ? "rezultat" : "rezultate"} pentru „{query}”
          </p>
        )}
      </div>

      {noResults ? (
        <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(64px, 8vw, 96px)", textAlign: "center" }}>
            <h2 className="font-display" style={{ margin: "0 0 12px", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 28px)", color: "var(--teal-deep)" }}>
              Nu am găsit un răspuns pentru „{query}”
            </h2>
            <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.7, color: "var(--muted-2)" }}>
              Scrie-ne pe WhatsApp sau sună-ne direct — îți răspundem personal la orice întrebare despre tratamente sau programări.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <a href={waHref} target="_blank" rel="noreferrer" className="btn-teal" style={{ display: "inline-flex", fontSize: 15, fontWeight: 600, padding: "14px 24px", borderRadius: 4 }}>
                Scrie pe WhatsApp
              </a>
              <a href={site.phoneHref} className="btn-outline-dark" style={{ display: "inline-flex", fontSize: 15, fontWeight: 600, padding: "14px 24px", borderRadius: 4 }}>
                Sună acum · {site.phone}
              </a>
            </div>
          </div>
        </section>
      ) : (
        <>
          {filteredGeneral.length > 0 && (
            <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
              <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 88px)" }}>
                <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>General</span>
                <h2 className="font-display" style={{ margin: "10px 0 24px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
                  {generalTitle}
                </h2>
                <ServiceFaq items={filteredGeneral} />
              </div>
            </section>
          )}

          {filteredSections.map((s) => (
            <section key={s.key} style={{ background: "linear-gradient(180deg, var(--white-to-blue) 0%, #fff 100%)" }}>
              <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 40px) clamp(48px, 6vw, 72px)" }}>
                {s.num && <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{s.num}</span>}
                <h2 className="font-display" style={{ margin: "8px 0 24px", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
                  {s.href ? <a href={s.href} style={{ color: "inherit" }}>{s.title}</a> : s.title}
                </h2>
                <ServiceFaq items={s.faq} />
              </div>
            </section>
          ))}
        </>
      )}
    </>
  );
}
