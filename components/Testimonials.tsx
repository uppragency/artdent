"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";
import { fallbackReviews, site } from "@/lib/data";
import { supabase } from "@/lib/supabase";

type Review = { text: string; name: string; initial: string; meta: string };

const PER_PAGE = 3;

export function Testimonials() {
  const { openModal } = useBooking();
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(reviews.length / PER_PAGE));
  const visibleReviews = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      // Try live Google reviews first.
      try {
        const res = await fetch("/api/google-reviews");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data?.reviews) && data.reviews.length > 0 && !cancelled) {
            setReviews(data.reviews);
            return;
          }
        }
      } catch {
        // ignore — fall through to Supabase
      }

      // Fall back to manually curated testimonials in Supabase.
      try {
        const { data } = await supabase
          .from("testimonials")
          .select("patient_name, text, source")
          .order("display_order", { ascending: true })
          .limit(6);
        if (Array.isArray(data) && data.length > 0 && !cancelled) {
          setReviews(data.map((d: { patient_name: string; text: string; source: string | null }) => ({
            text: d.text,
            name: d.patient_name,
            initial: d.patient_name?.[0]?.toUpperCase() || "N",
            meta: d.source || "Google",
          })));
        }
      } catch {
        // ignore — keep the static fallback already in state
      }
    }

    loadReviews();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    setPage(0);
  }, [reviews]);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pageCount), 5000);
    return () => clearInterval(t);
  }, [pageCount]);

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gap: 14, justifyItems: "center", textAlign: "center", marginBottom: "clamp(32px, 4vw, 48px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Experiența pacienților</span>
        <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>Ce spun cei care ne-au ales</h2>
        <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 6 }}>
          <span style={{ fontSize: 15, letterSpacing: "0.12em", color: "var(--gold-star)" }}>★★★★★</span>
          <span style={{ fontSize: 14.5, fontWeight: 600 }}>4,9 / 5 pe Google</span>
          <a href={site.googleReviewsUrl} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-600)" }}>Vezi toate recenziile →</a>
        </div>
      </div>

      <div style={{ border: "1px solid var(--line)", borderRadius: 10, padding: "clamp(18px, 2.5vw, 28px)", background: "var(--card)" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <span onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)} className="review-arrow" style={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 13, cursor: "pointer" }}>‹</span>
            <span onClick={() => setPage((p) => (p + 1) % pageCount)} className="review-arrow" style={{ width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 13, cursor: "pointer" }}>›</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {visibleReviews.map((r, i) => (
            <div key={page + "-" + i} className="review-card" style={{
              border: "1px solid oklch(0.92 0.01 190)", borderRadius: 8, padding: 24, display: "grid", gap: 14,
              alignContent: "start", background: "var(--cream)",
            }}>
              <span style={{ fontSize: 14, letterSpacing: "0.12em", color: "var(--gold-star)" }}>★★★★★</span>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "oklch(0.34 0.02 195)" }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 4 }}>
                <span style={{ width: 32, height: 32, borderRadius: "50%", background: "oklch(0.94 0.014 190)", display: "grid", placeItems: "center", fontSize: 12.5, fontWeight: 600, color: "oklch(0.42 0.03 195)" }}>{r.initial}</span>
                <span style={{ display: "grid" }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{r.name}</span>
                  <span className="font-mono-label" style={{ fontSize: 11, color: "oklch(0.6 0.015 195)" }}>{r.meta}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingTop: 20 }}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <span key={i} onClick={() => setPage(i)} className="review-dot" style={{
              width: 8, height: 8, borderRadius: "50%", cursor: "pointer",
              background: i === page ? "oklch(0.7 0.06 90)" : "oklch(0.86 0.014 190)",
            }} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", paddingTop: 24 }}>
          <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-deep" style={{
            fontSize: 15.5, fontWeight: 600, padding: "15px 28px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center",
          }}>
            Programează o consultație
          </a>
        </div>
      </div>
    </section>
  );
}
