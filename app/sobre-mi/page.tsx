import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ⬅️ Importamos el componente Image de Next.js para optimización

// === Metadata específica para esta página ===
export const metadata = {
    title: "Sobre Mí | Marina Tarot",
    description: "Conoce a Marina, mi trayectoria en las artes esotéricas y mi compromiso con tu sanación y empoderamiento espiritual.",
};

export default function SobreMiPage() {
    return (
        <div className="overflow-x-hidden min-h-screen bg-[#1a1a1a] text-white"> {/* Aseguramos fondo oscuro por si acaso */}
            {/* Se ha aumentado el pb-20 a pb-40 para dar más separación abajo */}
            <section className="max-w-[1200px] mx-auto pt-24 pb-40 px-8 md:px-12">

                {/* Layout Flex: Columna en móvil, Fila en escritorio (lg) */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

                    {/* --- COLUMNA IZQUIERDA: IMAGEN --- */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[500px] h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-purple-500/20">
                            <Image
                                src="/mujer.jpg" 
                                alt="Foto de Marina"
                                fill 
                                style={{ objectFit: "cover" }} 
                                className="hover:scale-105 transition-transform duration-500 ease-in-out" 
                                priority 
                            />
                        </div>
                    </div>


                    {/* --- COLUMNA DERECHA: TEXTO E INFORMACIÓN --- */}
                    <div className="w-full lg:w-1/2 flex flex-col text-left">

                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-white leading-tight">
                            Hola, soy <span className="text-[var(--color-morado-principal)]">Marina</span>
                        </h1>

                        {/* Bloque de texto descriptivo */}
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                Mi camino no comenzó con la intención de predecir el futuro, sino con la profunda necesidad de entender el presente y sanar el pasado. Llevo años dedicada al estudio y la práctica de las artes esotéricas, no como un fin, sino como un medio para el autodescubrimiento.
                            </p>
                            <p>
                                Mi trabajo se centra en ser un faro de claridad. No estoy aquí para decirte qué va a pasar, sino para ayudarte a ver por qué está pasando y darte las herramientas para que tomes decisiones conscientes y recuperes tu poder personal.
                            </p>
                            <p>
                                Fusiono la sabiduría ancestral del Tarot y los Registros Akáshicos con técnicas de sanación energética modernas, siempre bajo un enfoque holístico y un respeto absoluto por tu proceso. Te ofrezco un espacio seguro, confidencial y libre de juicios.
                            </p>
                            <p className="font-semibold text-purple-200">
                                Mi compromiso es acompañarte a conectar con tu propia sabiduría interior.
                            </p>
                        </div>

                        {/* Botón de llamada a la acción */}
                        <div className="mt-10">
                             <Link href="/contacto" className="cta-button text-base px-8 py-4 font-semibold inline-block rounded-lg transition-all duration-300 hover:bg-[var(--color-morado-principal)] hover:border-[var(--color-morado-principal)] hover:shadow-lg hover:shadow-purple-700/50">
                                ¡Hablemos! Agenda tu encuentro
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}