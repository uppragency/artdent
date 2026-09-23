"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Testimonial = { id: string; patient_name: string; text: string; source: string | null };

const fallback: Testimonial[] = [
  { id: "1", patient_name: "nume pacient", text: "Text recenzie preluat live din profilul Google al clinicii.", source: "Google · acum 2 săptămâni" },
  { id: "2", patient_name: "nume pacient", text: "Text recenzie preluat live din profilul Google al clinicii.", source: "Google · acum 1 lună" },
  { id: "3", patient_name: "nume pacient", text: "Text recenzie preluat live din profilul Google al clinicii.", source: "Google · acum 2 luni" },
];

export function TestimonialsCarousel() {
  const [items, setItems] = useState<Testimonial[]>(fallback);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("id, patient_name, text, source")
      .order("display_order", { ascending: true })
      .limit(6)
      .then(({ data }) => {
        if (data && data.length > 0) setItems(data as Testimonial[]);
      });
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="mx-auto max-w-xl text-center">
      <p className="text-[color:var(--color-gold-deep)]">★★★★★</p>
      <p className="mt-4 font-display text-xl leading-relaxed">&ldquo;{current.text}&rdquo;</p>
      <p className="mt-3 text-sm text-[color:var(--color-ink)]/60">{current.patient_name} · {current.source}</p>
      <div className="mt-5 flex justify-center gap-2">
        {items.map((it, i) => (
          <button
            key={it.id}
            aria-label={`Recenzia ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-[color:var(--color-teal-deep)]" : "bg-[color:var(--color-line)]"}`}
          />
        ))}
      </div>
    </div>
  );
}
