"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const services = [
  {
    title: "Lectura de Tarot Evolutivo",
    description: "Un viaje hacia tu interior para obtener claridad sobre tus bloqueos actuales y las energías que te rodean.",
    image: "/tarot.jpg",
    price: "45€",
    duration: "60 min",
    link: "/contacto"
  },
  {
    title: "Sanación Energética",
    description: "Equilibra tus chakras y libera tensiones acumuladas a través de técnicas de canalización de luz y energía.",
    image: "/sanacion.jpg",
    price: "50€",
    duration: "50 min",
    link: "/contacto"
  },
  {
    title: "Registros Akáshicos",
    description: "Accede a la memoria de tu alma para comprender el origen de tus patrones y recibir mensajes espirituales.",
    image: "/registros.jpg",
    price: "60€",
    duration: "90 min",
    link: "/contacto"
  }
];

export default function ServiciosPage() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-40">
      
      {/* BARRA DE PROGRESO */}
      <div className="fixed top-0 left-0 w-full h-1 z-[50] bg-white/5">
        <div 
          className="h-full bg-[#a855f7] shadow-[0_0_15px_#a855f7] transition-all duration-100"
          style={{ width: `${completion}%` }}
        ></div>
      </div>

      {/* TÍTULO CON MARGEN INFERIOR MUY CLARO */}
      <section className="text-center mb-32 px-6">
        <h1 className="text-5xl md:text-6xl font-serif text-[#a855f7] mb-6 font-black uppercase tracking-tighter">
          Sesiones de Acompañamiento
        </h1>
        <div className="w-24 h-1 bg-[#a855f7] mx-auto mb-8 shadow-[0_0_10px_#a855f7]"></div>
        <p className="text-[#aaaaaa] italic text-xl max-w-2xl mx-auto">
          "Un espacio sagrado para reconectar con tu esencia."
        </p>
      </section>

      {/* CONTENEDOR PRINCIPAL CON MÁXIMA SEPARACIÓN LATERAL */}
      <div className="w-full max-w-[1400px] mx-auto px-10 md:px-20 lg:px-32"> 
        
        {/* GRID DE 3 COLUMNAS CON GAP (ESPACIO ENTRE CAJAS) */}
        <div className="flex flex-col gap-24 max-w-4xl mx-auto">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-module group relative flex flex-col h-full bg-[#1f1f1f] border border-[#a855f730] rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-4 hover:border-[#a855f7]"
            >
              {/* Imagen con espacio debajo (mb-8) */}
              <div className="relative h-56 w-full mb-8 overflow-hidden rounded-2xl border border-[#a855f720]">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Contenido centrado y con aire */}
              <div className="flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">{service.title}</h3>
                <p className="text-[#aaaaaa] mb-8 flex-grow leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Precio y Tiempo con margen arriba y abajo */}
                <div className="flex justify-center items-center gap-4 text-[#a855f7] font-bold mb-8 py-4 border-y border-[#a855f720]">
                  <span>{service.duration}</span>
                  <div className="w-1.5 h-1.5 bg-[#a855f7] rounded-full"></div>
                  <span>{service.price}</span>
                </div>

                {/* Botón CTA (clase de tu CSS) */}
                <a 
                  href={service.link}
                  className="cta-button w-full text-center block"
                >
                  RESERVAR SESIÓN
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN INFERIOR CON GRAN MARGEN DE SEPARACIÓN (mt-64) */}
      <section className="mt-64 py-24 bg-[#1a1a1a] border-y border-[#a855f730]">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-4xl text-[#a855f7] font-serif mb-24 uppercase tracking-widest font-black">
            ¿Cómo funcionan mis sesiones?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col items-center">
              <span className="text-7xl mb-8 filter drop-shadow-[0_0_10px_#a855f7]">✨</span>
              <h4 className="font-bold text-[#a855f7] mb-4 tracking-widest">INTENCIÓN</h4>
              <p className="text-[#aaaaaa] max-w-xs">Definimos qué aspecto de tu vida necesita luz.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl mb-8 filter drop-shadow-[0_0_10px_#a855f7]">🔮</span>
              <h4 className="font-bold text-[#a855f7] mb-4 tracking-widest">CANALIZACIÓN</h4>
              <p className="text-[#aaaaaa] max-w-xs">Recibimos los mensajes necesarios para ti.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-7xl mb-8 filter drop-shadow-[0_0_10px_#a855f7]">🌿</span>
              <h4 className="font-bold text-[#a855f7] mb-4 tracking-widest">INTEGRACIÓN</h4>
              <p className="text-[#aaaaaa] max-w-xs">Cerramos con consejos prácticos para tu día.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}