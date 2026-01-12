// app/page.tsx
'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      
      {/* 1. FUENTES Y ANIMACIONES */}
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        h1, h2 { font-family: 'Cinzel', serif !important; }
        p, a { font-family: 'EB Garamond', serif !important; }
        
        @keyframes moveStars { 
          from { transform: translateY(0); } 
          to { transform: translateY(-1000px); } 
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-stars { animation: moveStars 100s linear infinite; }
        .animate-shimmer { animation: shimmer 3s infinite; }
      `}} />

      {/* --- FONDO MÁGICO --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(88,28,135,0.25),_black_80%)]"></div>
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none animate-stars" 
           style={{ 
             backgroundImage: `
               radial-gradient(2px 2px at 20px 30px, #ffffff, transparent), 
               radial-gradient(1.5px 1.5px at 100px 150px, #ffffff, transparent),
               radial-gradient(2px 2px at 200px 80px, #ffffff, transparent),
               radial-gradient(1px 1px at 50px 200px, #ffffff, transparent)
             `, 
             backgroundSize: '300px 300px' 
           }}>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
        
        {/* LOGO Y TÍTULO: CENTRADO TOTAL SUPERIOR */}
        <div className="flex flex-row justify-center items-center gap-6 md:gap-8 mb-24 md:mb-32">
          <div className="drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]">
            <img src="/logo.png" alt="Logo Marina Tarot" className="w-20 h-20 md:w-40 md:h-40 object-contain" />
          </div>
          <h1 className="text-5xl md:text-9xl font-bold text-[#A855F7] tracking-tighter uppercase">
            Marina
          </h1>
        </div>

        {/* --- SECCIÓN HERO CENTRADA --- */}
        {/* Usamos max-w-4xl para que no se estire a los bordes y mx-auto para centrar el bloque entero */}
        <div className="max-w-4xl mx-auto"> 
          <section className="flex flex-row items-center justify-center w-full gap-10 md:gap-16"> 

            {/* IMAGEN A LA IZQUIERDA (Pequeña y con espacio por fuera) */}
            <div className="w-[30%] md:w-[25%] shrink-0">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-purple-500/40">
                <img 
                  src="/perfil.jpg" 
                  alt="Perfil Marina" 
                  className="w-full h-full object-cover brightness-105"
                />
              </div>
            </div>

            {/* TEXTO A LA DERECHA (Alineado con el centro de la imagen) */}
            <div className="flex-1 flex flex-col justify-center items-start text-left">
              <h2 className="text-xl md:text-4xl font-bold mb-4 leading-[1.2] text-white tracking-wide uppercase">
                Tu guía en la sanación espiritual y el autoconocimiento.
              </h2>
              <p className="text-xs md:text-lg text-gray-300 mb-6 leading-relaxed italic">
                Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, 
                Registros Akáshicos y terapias de sanación energética para transformar 
                tu presente y liberar tu potencial.
              </p>

              {/* BOTÓN PREMIUM MÁS PEQUEÑO Y CENTRADO */}
              <div className="relative inline-block group">
                <span className="absolute inset-0 rounded-full bg-purple-600/70 blur-[40px] group-hover:bg-purple-400/60 transition-all duration-700 animate-pulse"></span>
                <a 
                  href="/contacto" 
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full 
                             bg-gradient-to-r from-fuchsia-700 via-purple-600 to-indigo-800 
                             border border-white/40 shadow-[0_0_50px_rgba(192,38,211,0.6)] 
                             hover:shadow-[0_0_90px_rgba(192,38,211,1)] 
                             hover:scale-105 transition-all duration-500 ease-out 
                             uppercase tracking-[0.3em] text-[8px] md:text-[10px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Agenda tu Consulta Hoy 
                    <span className="text-sm text-fuchsia-200 group-hover:rotate-180 transition-transform duration-700">✧</span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}