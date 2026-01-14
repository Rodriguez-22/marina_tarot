"use client"

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full text-white overflow-hidden font-sans"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* TIPOGRAFÍAS NUEVAS: Playfair Display + Lato */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;800&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes moveStars { 
          from { transform: translateY(0); } 
          to { transform: translateY(-1000px); } 
        }
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
        
        .animate-stars { animation: moveStars 100s linear infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .image-container { transition: transform 0.5s ease-out, box-shadow 0.5s ease-out; }
        .image-container:hover { transform: translateY(-8px); box-shadow: 0 20px 60px rgba(168,85,247,0.5) !important; }
      `,
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(88,28,135,0.3),_transparent_70%)]"></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">

        {/* HEADER CON LOGO GRANDE */}
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-10 mb-24 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="drop-shadow-[0_0_45px_rgba(168,85,247,0.9)] animate-float">
            {/* Tamaño aumentado de w-40 a w-60 para un impacto visual mayor */}
            <img
              src="/logo.png"
              alt="Logo Marina Tarot"
              className="w-32 h-32 md:w-60 md:h-60 object-contain"
            />
          </div>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-[#A855F7] tracking-tighter uppercase font-heading">
            Marina
          </h1>
        </div>

        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-5xl p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/30 via-transparent to-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl py-16 px-8 md:px-16">
              <section className="flex flex-col lg:flex-row items-center justify-between w-full gap-16">

                {/* --- CONTENEDOR DE LA IMAGEN DE PERFIL --- */}
                <div className="w-full lg:w-1/4 flex-shrink-0 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                  <div className="relative w-full max-w-[280px] mx-auto aspect-square rounded-2xl overflow-hidden image-container animate-glow border border-purple-500/50">
                    <img
                      src="/perfil.jpg"
                      alt="Perfil Marina"
                      className="object-cover w-full h-full brightness-110 hover:brightness-125 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-600/0 via-transparent to-purple-900/20"></div>
                  </div>
                </div>

                {/* --- CONTENEDOR DE TEXTO --- */}
                <div
                  className="flex-1 flex flex-col justify-center items-start text-left animate-slide-in-right py-12 lg:py-20"
                  style={{ animationDelay: "0.3s" }}
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white tracking-tight font-heading max-w-xl">
                    Tu guía en la <br className="hidden md:block" />
                    sanación espiritual y el <br className="hidden md:block" />
                    autoconocimiento
                  </h2>

                  <div className="max-w-md space-y-4 mb-10">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-body">
                      Descubre el poder de la guía ancestral.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-body">
                      Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias personalizadas.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light font-body">
                      Tu camino hacia el crecimiento espiritual comienza aquí.
                    </p>
                  </div>

                  <div className="relative inline-block group">
                    <span className="absolute inset-0 rounded-full bg-purple-600/70 blur-[40px] group-hover:bg-purple-400/80 transition-all duration-700 group-hover:scale-110"></span>
                    <a
                      href="/contacto"
                      className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-semibold text-white rounded-full 
                                   bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-700 
                                   border border-white/40 shadow-[0_0_40px_rgba(192,38,211,0.5)]
                                   hover:scale-110 hover:shadow-[0_0_60px_rgba(192,38,211,0.8)] 
                                   transition-all duration-500 ease-out 
                                   uppercase tracking-wider text-sm font-body"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Agenda tu Consulta
                        <span className="text-lg text-fuchsia-200 group-hover:rotate-180 transition-transform duration-700">
                          ✧
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}