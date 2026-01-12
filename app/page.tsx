// app/page.tsx
'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-serif">
      
      {/* 1. FUENTES Y ANIMACIONES (Cinzel y Garamond) */}
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

      {/* --- FONDO MÁGICO TOTAL --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(88,28,135,0.15),_black_70%)]"></div>
      
      {/* CAPA DE ESTRELLAS */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none animate-stars" 
           style={{ 
             backgroundImage: `
               radial-gradient(2px 2px at 20px 30px, #ffffff, transparent), 
               radial-gradient(1.5px 1.5px at 100px 150px, #ffffff, transparent),
               radial-gradient(2px 2px at 200px 80px, #ffffff, transparent)
             `, 
             backgroundSize: '300px 300px' 
           }}>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* LOGO Y TÍTULO: Marina en Morado y Centrado */}
        <div className="flex flex-row justify-center items-center gap-8 mb-28">
          <div className="drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]">
            <img src="/logo.png" alt="Logo Marina Tarot" className="w-20 h-20 md:w-32 md:h-32 object-contain" />
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-[#A855F7] tracking-tighter uppercase">
            Marina
          </h1>
        </div>

        {/* SECCIÓN HERO: CAJA DE NEÓN TOTALMENTE CENTRADA */}
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-4xl p-[1px] rounded-[40px] bg-gradient-to-r from-purple-500/30 via-transparent to-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            {/* Ajuste de padding (px-8 md:px-20) para separar la imagen del borde */}
            <div className="bg-black/80 backdrop-blur-xl rounded-[39px] py-12 px-8 md:px-20">
              
              <section className="flex flex-row items-center justify-center w-full gap-12 md:gap-20"> 

                {/* IMAGEN A LA IZQUIERDA: Separada del margen */}
                <div className="w-[35%] md:w-[25%] shrink-0">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-purple-500/50">
                    <img 
                      src="/perfil.jpg" 
                      alt="Perfil Marina" 
                      className="object-cover w-full h-full brightness-110"
                    />
                  </div>
                </div>

                {/* TEXTO A LA DERECHA: Centrado verticalmente respecto a la imagen */}
                <div className="flex-1 flex flex-col justify-center items-start text-left">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-white tracking-wide uppercase">
                    Tu guía en la sanación espiritual y el autoconocimiento.
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic font-light">
                    Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, 
                    Registros Akáshicos y terapias de sanación.
                  </p>

                  {/* BOTÓN PREMIUM */}
                  <div className="relative inline-block group">
                    <span className="absolute inset-0 rounded-full bg-purple-600/70 blur-[50px] group-hover:bg-purple-400/60 transition-all duration-700 animate-pulse"></span>
                    <a 
                      href="/contacto" 
                      className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full 
                                 bg-gradient-to-r from-fuchsia-700 via-purple-600 to-indigo-800 
                                 border border-white/40 shadow-[0_0_50px_rgba(192,38,211,0.6)] 
                                 hover:scale-105 transition-all duration-500 ease-out 
                                 uppercase tracking-[0.3em] text-[10px] md:text-xs"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Agenda tu Consulta Hoy 
                        <span className="text-lg text-fuchsia-200 group-hover:rotate-180 transition-transform duration-700">✧</span>
                      </span>
                    </a>
                  </div>
                </div>

              </section>
            </div>
          </div>
        </div>

      </div>

      {/* RESPLANDOR DE FONDO EXTRA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

    </div>
  );
}