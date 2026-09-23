"use client";

import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/data";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {heroStats.map((s) => (
        <div key={s.label} className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="font-display text-4xl text-[color:var(--color-teal-deep)]">{s.value}</p>
          <p className="mt-1 text-sm font-medium">{s.label}</p>
          <p className="mt-1 text-xs text-[color:var(--color-ink)]/60">{s.description}</p>
        </div>
      ))}
    </div>
  );
}
