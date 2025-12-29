// En rodriguez-22/nidea-marketing/nidea-marketing-90cd82629267443ecc736288e2894ed49fafc54d/app/layout.tsx

import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google"; // ⬅️ DEBE USAR POPPINS Y AÑADIMOS Playfair_Display
import Header from "./components/Header"; 
import "./globals.css";

// ⬅️ DEFINICIÓN DE POPPINS (Cuerpo)
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"] }); 

// ⬅️ DEFINICIÓN DE PLAYFAIR DISPLAY (Títulos)
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"], variable: '--font-playfair' }); 

// ... (resto del metadata)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Se añade la variable CSS de la fuente Serif al <html>
    <html lang="es" className={playfair.variable}> 
      <body className={poppins.className}> {/* ⬅️ DEBE USAR poppins.className */}
        <Header /> 
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}