"use client"
import { motion } from "framer-motion"

const servicesData = [
  {
    category: "Lecturas Espirituales",
    icon: "🔮",
    items: [
      {
        title: "Tarot Adivinatorio",
        // Usando tu imagen local: public/tarot.jpg
        image: "/tarot.jpg", 
        desc: "Ilumina tu pasado y vislumbra posibles futuros para tomar decisiones conscientes.",
      },
      {
        title: "Registros Akáshicos",
        // Usando tu imagen local: public/registros.jpg
        image: "/registros.jpg",
        desc: "Conecta con la biblioteca del alma para transformar patrones emocionales.",
      },
    ],
  },
  {
    category: "Consultas Esotéricas",
    icon: "✨",
    items: [
      {
        title: "Trabajos de Corte",
        // Imagen de velas y protección (Unsplash)
        image: "https://images.unsplash.com/photo-1572916163351-460d37e28304?q=80&w=400",
        desc: "Neutralización de envidias y ataques espirituales negativos.",
      },
      {
        title: "Lazos Kármicos",
        // Imagen de hilos de energía o conexión mística
        image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?q=80&w=400",
        desc: "Libérate de vínculos energéticos del pasado que impiden tu avance.",
      },
    ],
  },
  {
    category: "Sanación Corporal",
    icon: "🧘‍♀️",
    items: [
      {
        title: "Piedras Calientes",
        // Imagen de piedras volcánicas de sanación
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400",
        desc: "Relajación profunda con piedras volcánicas para liberar el estrés.",
      },
      {
        title: "Masaje Kobido",
        // Usando tu imagen local de sanación: public/sanacion.jpg
        image: "/sanacion.jpg",
        desc: "Técnica facial japonesa para un lifting natural y energía vital.",
      },
    ],
  },
]

export default function ServiciosPage() {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden pb-40"
      style={{
        // Asegurando que usa tu fondo: public/hero-bg.jpg
        backgroundImage: "url(/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ... resto del código (fuentes y estilos) se mantiene igual ... */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(168,85,247,0.4); }
          50% { box-shadow: 0 0 50px rgba(168,85,247,0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.3); }
          50% { box-shadow: 0 0 40px rgba(168,85,247,0.5); }
        }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        
        .service-card-container { transition: transform 0.5s ease-out, box-shadow 0.5s ease-out; }
        .service-card-container:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(168,85,247,0.5) !important; }
        
        .service-image { transition: brightness 0.5s ease-out, transform 0.5s ease-out; }
        .service-image:hover { brightness: 1.1; }
      `,
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(88,28,135,0.3),_transparent_70%)]"></div>

      <section className="relative z-10 max-w-5xl mx-auto pt-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 animate-fade-in-up"
        >
          <h1
            className="text-5xl md:text-7xl font-bold mb-8 tracking-[0.3em] uppercase text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Servicios
          </h1>
          <div className="h-[2px] w-32 mx-auto bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
        </motion.div>

        <div className="flex flex-col items-center space-y-32">
          {servicesData.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="w-full max-w-lg p-[1px] rounded-[30px] bg-gradient-to-b from-purple-500/40 via-purple-500/5 to-transparent shadow-[0_20px_60px_rgba(168,85,247,0.2)] service-card-container animate-pulse-glow"
            >
              <div className="bg-black/85 backdrop-blur-3xl p-10 md:p-14 rounded-[29px] border border-purple-500/20">
                <div className="flex flex-col items-center mb-16">
                  <span className="text-6xl mb-6 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] animate-float">
                    {cat.icon}
                  </span>
                  <h2
                    className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-purple-300 uppercase text-center"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {cat.category}
                  </h2>
                </div>

                <div className="space-y-16">
                  {cat.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-2 border-purple-500/40 group-hover:border-purple-500/80 shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-500 animate-glow">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700 service-image"
                          onError={(e) => {
                            // Fallback a una bola de cristal si falla la carga
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1514820402329-de527fdd2e6d?q=80&w=200"
                          }}
                        />
                      </div>

                      <div className="max-w-xs">
                        <h3
                          className="text-lg md:text-xl font-bold text-white mb-3 tracking-widest uppercase group-hover:text-purple-200 transition-colors duration-300"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm md:text-base text-gray-300 leading-relaxed italic font-light"
                          style={{ fontFamily: "Lato, sans-serif" }}
                        >
                          {item.desc}
                        </p>
                      </div>

                      {idx !== cat.items.length - 1 && (
                        <div className="w-12 h-[1px] bg-gradient-to-r from-purple-500/20 via-purple-500/60 to-purple-500/20 mt-12"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}