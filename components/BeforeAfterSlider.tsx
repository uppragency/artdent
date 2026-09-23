"use client";

import { useState } from "react";

export function BeforeAfterSlider({ label }: { label: string }) {
  const [value, setValue] = useState(50);

  return (
    <div className="overflow-hidden rounded-xl border border-[color:var(--color-line)] bg-white">
      <div className="relative aspect-[4/3] bg-[color:var(--color-olive-50)]">
        <div className="absolute inset-0 grid place-items-center text-xs text-[color:var(--color-ink)]/40">ÎNAINTE</div>
        <div
          className="absolute inset-0 grid place-items-center bg-[color:var(--color-teal-deep)]/5 text-xs text-[color:var(--color-teal-deep)]/60"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          DUPĂ
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`Compară înainte și după — ${label}`}
          className="absolute inset-x-0 bottom-3 mx-auto w-[85%]"
        />
      </div>
      <p className="px-4 py-3 text-sm font-medium">{label}</p>
    </div>
  );
}
