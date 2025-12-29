// app/contacto/page.tsx
"use client";

import CustomBooking from "../components/CustomBooking";

export default function ContactoPage() {
  return (
    <main className="contact-page-wrapper">
      <div className="contact-hero-text">
        <h1>Conectemos con tu destino</h1>
        <p className="text-gray-400">Selecciona el momento ideal para tu sesión mística.</p>
      </div>
      
      <div className="animate-fade-in-up w-full">
        <CustomBooking />
      </div>
    </main>
  );
}