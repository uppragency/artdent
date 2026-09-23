"use client";

import { useBooking } from "@/lib/booking-context";

export function OpenBookingButton({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { openModal } = useBooking();
  return (
    <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className={className} style={style}>
      {children}
    </a>
  );
}
