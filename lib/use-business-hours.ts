"use client";

import { useEffect, useState } from "react";
import { weeklyHours } from "@/lib/data";

function parseHours(hours: string): [number, number] | null {
  if (hours === "Închis") return null;
  const [open, close] = hours.split("–").map((s) => s.trim());
  const [oh, om] = open.split(":").map(Number);
  const [ch, cm] = close.split(":").map(Number);
  return [oh * 60 + om, ch * 60 + cm];
}

function nextOpeningLabel(now: Date): string {
  for (let i = 1; i <= 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const day = weeklyHours[d.getDay()];
    const parsed = parseHours(day.hours);
    if (parsed) {
      const openStr = day.hours.split("–")[0].trim();
      return i === 1 ? `mâine, de la ${openStr}` : `${day.day.toLowerCase()}, de la ${openStr}`;
    }
  }
  return "cât mai curând";
}

// Determină dacă suntem în programul de lucru curent, client-side (ora locală a
// vizitatorului). Folosit pentru a schimba micro-copy-ul CTA-urilor în afara orelor.
export function useBusinessHours() {
  const [state, setState] = useState<{ checked: boolean; isOpen: boolean; nextOpening: string }>({
    checked: false, isOpen: true, nextOpening: "",
  });

  useEffect(() => {
    const now = new Date();
    const today = weeklyHours[now.getDay()];
    const parsed = parseHours(today.hours);
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    const isOpen = !!parsed && minutesNow >= parsed[0] && minutesNow < parsed[1];
    setState({ checked: true, isOpen, nextOpening: isOpen ? "" : nextOpeningLabel(now) });
  }, []);

  return state;
}
