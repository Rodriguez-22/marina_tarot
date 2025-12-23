// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google"; 
import Header from "./components/Header"; 
import "./globals.css";
import JsonLd from "./components/JsonLd";

// DEFINICIÓN DE POPPINS (Cuerpo)
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700", "800"] 
}); 

// DEFINICIÓN DE PLAYFAIR DISPLAY (Títulos)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["700", "900"], 
  variable: '--font-playfair' 
}); 

export const metadata: Metadata = {
  metadataBase: new URL('https://comprobaciones.vercel.app'),
  title: {
    default: "Marina Tarot | Guía Espiritual y Sanación",
    template: "%s | Marina Tarot"
  },
  description: "Descubre tu camino con lecturas de Tarot, Registros Akáshicos y sanación energética. Agenda tu consulta online hoy mismo.",
  keywords: ["Tarot", "Lectura de Cartas", "Registros Akáshicos", "Sanación", "Espiritualidad", "Videncia"],
  authors: [{ name: "Marina Tarot" }],
  creator: "Marina Tarot",
  openGraph: {
    title: "Marina Tarot | Guía Espiritual y Sanación",
    description: "Conecta con tu sabiduría interior. Tarot, Registros Akáshicos y Rituales.",
    url: 'https://comprobaciones.vercel.app',
    siteName: 'Marina Tarot',
    images: [
      {
        url: '/fondo_tarot.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={playfair.variable}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={poppins.className}>
        <JsonLd />
        <Header /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}