"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type BookingContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  function openModal() {
    // Centralizat aici, nu în fiecare buton: orice buton "Programează-te" din
    // site (header, hero, footer, pagini de serviciu, popup de exit-intent
    // etc.) trece prin această funcție, deci un singur eveniment GA4 acoperă
    // toate punctele de intrare către formularul de programare.
    trackEvent("booking_modal_open", { page_location: typeof window !== "undefined" ? window.location.pathname : undefined });
    setOpen(true);
  }
  return (
    <BookingContext.Provider value={{ open, openModal, closeModal: () => setOpen(false) }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
