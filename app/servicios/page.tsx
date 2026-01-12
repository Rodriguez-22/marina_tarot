'use client';

import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    category: "Lecturas Espirituales",
    icon: "🔮",
    items: [
      { title: "Tarot Adivinatorio", image: "/images/tarot.jpg", desc: "Ilumina tu pasado y vislumbra posibles futuros para tomar decisiones conscientes." },
      { title: "Registros Akáshicos", image: "/images/akashicos.jpg", desc: "Conecta con la biblioteca del alma para transformar patrones emocionales." }
    ]
  },
  {
    category: "Consultas Esotéricas",
    icon: "✨",
    items: [
      { title: "Trabajos de Corte", image: "/images/corte.jpg", desc: "Neutralización de envidias y ataques espirituales negativos." },
      { title: "Lazos Kármicos", image: "/images/lazos.jpg", desc: "Libérate de vínculos energéticos del pasado que impiden tu avance." }
    ]
  },
  {
    category: "Sanación Corporal",
    icon: "🧘‍♀️",
    items: [
      { title: "Piedras Calientes", image: "/images/piedras.jpg", desc: "Relajación profunda con piedras volcánicas para liberar el estrés." },
      { title: "Masaje Kobido", image: "/images/kobido.jpg", desc: "Técnica facial japonesa para un lifting natural y energía vital." }
    ]
  }
];

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden pb-40">
      
      {/* 1. FUENTES MÍSTICAS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap');
        h1, h2, h3 { font-family: 'Cinzel', serif; }
        p, span { font-family: 'EB Garamond', serif; }
      `}</style>

      {/* FONDO DE NEBULOSA PÚRPURA */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <section className="relative z-10 max-w-5xl mx-auto pt-24 px-6">
        
        {/* TÍTULO PRINCIPAL */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-[0.3em] uppercase text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Servicios
          </h1>
          <div className="h-[1px] w-24 mx-auto bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
        </motion.div>

        {/* CONTENEDOR DE CARTAS PEQUEÑAS Y SEPARADAS */}
        <div className="flex flex-col items-center space-y-32">
          {servicesData.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // max-w-lg hace la caja más estrecha y compacta
              className="w-full max-w-lg p-[1px] rounded-[40px] bg-gradient-to-b from-purple-500/40 via-purple-500/5 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="bg-zinc-950/90 backdrop-blur-3xl p-10 md:p-14 rounded-[39px] border border-white/5">
                
                {/* ICONO Y TÍTULO CENTRADO */}
                <div className="flex flex-col items-center mb-16">
                  <span className="text-5xl mb-6 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">{cat.icon}</span>
                  <h2 className="text-2xl font-bold tracking-[0.2em] text-purple-400 uppercase text-center">
                    {cat.category}
                  </h2>
                </div>

                {/* LISTA DE SERVICIOS INDIVIDUALES */}
                <div className="space-y-16">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                      
                      {/* IMAGEN CIRCULAR/REDONDEADA PEQUEÑA */}
                      <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-purple-500/20 group-hover:border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-500">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
                          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1514820402329-de527fdd2e6d?q=80&w=200"; }}
                        />
                      </div>

                      {/* TEXTO EN LA MITAD DE LA IMAGEN (Centrado debajo) */}
                      <div className="max-w-xs">
                        <h3 className="text-lg font-bold text-white mb-3 tracking-widest uppercase group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed italic font-light">
                          {item.desc}
                        </p>
                      </div>

                      {/* SEPARADOR SUTIL ENTRE SERVICIOS */}
                      {idx !== cat.items.length - 1 && (
                        <div className="w-8 h-[1px] bg-purple-500/20 mt-12"></div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}