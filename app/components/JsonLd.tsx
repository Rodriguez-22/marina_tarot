import React from 'react';

const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // O "Person" si prefieres enfocarte en la marca personal
    "name": "Marina Tarot",
    "image": "https://comprobaciones.vercel.app/logo.png", // ⚠️ Pon tu URL real
    "description": "Lecturas de Tarot, Registros Akáshicos y terapias de sanación energética.",
    "url": "https://comprobaciones.vercel.app",
    "telephone": "+34607929902", // Tu número sacado del código
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES" // Cambia si no es España
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.416775", // ⚠️ (Opcional) Pon tus coordenadas reales si tienes consulta física
      "longitude": "-3.703790"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/tu-pagina",
      "https://www.instagram.com/tu-usuario",
      "https://www.tiktok.com/@tu-usuario"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLd;