import React from 'react';

// === Metadata específica para esta página ===
export const metadata = {
    title: "Servicios | Marina Tarot",
    description: "Conoce nuestra oferta completa de servicios: Lecturas de Tarot, Registros Akáshicos, Rituales, Masajes de Sanación Corporal y Terapias de Equilibrio Energético.",
};

// === Estructura de Datos de Servicios (Contenido) ===
const servicesData = [
    {
        category: "Lecturas y Consultas Espirituales",
        icon: "🔮",
        items: [
            {
                title: "Tarot Adivinatorio y Preventivo",
                description: "Una práctica ancestral basada en las cartas de Tarot que permiten iluminar tu pasado, entender tu presente y vislumbrar posibles futuros, con el fin de detectar **bloqueos** y tomar **decisiones más conscientes**. Es una guía que busca anticipar caminos y ayudarte a liberar aquello que te impide avanzar.",
            },
            {
                title: "Registros Akáshicos",
                description: "Se trata de conectar con una **“biblioteca energética del alma”**, donde se almacena información de tus vidas pasadas y presentes. Mediante una sesión guiada, accedemos a esta memoria para ayudarte a identificar y transformar **patrones emocionales**, descubrir tu propósito y sanar con claridad y empoderamiento.",
            },
            {
                title: "Rituales Personalizados de Limpieza Energética",
                description: "Rituales diseñados especialmente según tus necesidades. Se utilizan herramientas como velas, hierbas, sahumerios y visualizaciones para purificar tu energía. Buscan eliminar bloqueos, **armonizar tus centros energéticos (Chakras)** y renovar tu bienestar físico, emocional y espiritual. Ideal cuando inicias un proyecto, cambias de espacio o sientes que algo te retiene.",
            },
        ],
    },
    {
        category: "Consultas Esotéricas y Rituales",
        icon: "✨",
        items: [
            {
                title: "Trabajos Personalizados",
                description: "Rituales y prácticas diseñadas específicamente para ti, abordando temas como el **amor, la protección, la salud, el trabajo** o cualquier otra situación que requiera intervención espiritual.",
            },
            {
                title: "Trabajos de Corte en Magia Negra",
                description: "Intervenciones específicas para detectar, neutralizar y eliminar trabajos de magia negra, envidias, maldiciones o cualquier tipo de ataque espiritual que esté afectando al consultante.",
            },
            {
                title: "Limpiezas Esotéricas y Espirituales",
                description: "Procesos energéticos destinados a eliminar bloqueos, energías negativas o influencias externas que afectan el bienestar físico, emocional o espiritual de la persona.",
            },
            {
                title: "Cortes de Lazos Kármicos y Ancestrales",
                description: "Rituales enfocados en liberarte de **patrones repetitivos**, cargas familiares o vínculos energéticos del pasado que impiden avanzar en tu camino personal y espiritual.",
            },
            {
                title: "Mesas Radiónicas",
                description: "Herramientas vibracionales que actúan a distancia, utilizando símbolos y frecuencias energéticas para armonizar situaciones específicas relacionadas con lo económico, lo emocional (como separaciones) y la salud integral.",
            },
        ],
    },
    {
        category: "Masajes y Sanación Corporal",
        icon: "🧘‍♀️",
        items: [
            {
                title: "Masajes Relajantes con Piedras Calientes",
                description: "Técnica terapéutica que combina el masaje manual con la aplicación de **piedras volcánicas calientes**, ayudando a relajar músculos tensos, mejorar la circulación y liberar el estrés acumulado.",
            },
            {
                title: "Masaje Kobido de Cara",
                description: "Antigua técnica oriental de masaje facial que **rejuvenece y tonifica la piel**, estimula la circulación y activa la energía vital, brindando un efecto lifting natural sin cirugía.",
            },
            {
                title: "Aromaterapia",
                description: "Terapia que utiliza aceites esenciales naturales para estimular los sentidos, equilibrar emociones, aliviar tensiones y promover el bienestar físico y mental a través del olfato y la piel.",
            },
            {
                title: "Reflexología Podal y Corporal",
                description: "Masaje basado en la estimulación de **puntos reflejos** en los pies y el cuerpo que se corresponden con diferentes órganos y sistemas del cuerpo, promoviendo el equilibrio y la salud general.",
            },
        ],
    },
    {
        category: "Acompañamiento Personal, Terapias y Equilibrio Energético",
        icon: "🤍",
        items: [
            {
                title: "Procesos de Duelo",
                description: "Acompañamiento respetuoso y consciente para transitar el dolor que produce una pérdida. Un espacio seguro para expresar tus emociones, comprender el proceso personal y encontrar herramientas que permitan vivir el duelo con mayor serenidad y aceptación.",
            },
            {
                title: "Escucha y Orientación Espiritual",
                description: "Encuentros dedicados a brindar contención, claridad y guía desde una mirada espiritual. Se ofrece un espacio donde puedas ser escuchada sin juicio, recibir orientación para tus inquietudes y reconectar con tu sabiduría interior.",
            },
            {
                title: "Ceremonias de Cierre y Apertura de Ciclos",
                description: "Rituales simbólicos que ayudan a **cerrar etapas importantes** de la vida y a dar la bienvenida a nuevas experiencias. Estas ceremonias permiten soltar con conciencia, agradecer lo vivido y prepararse con intención para lo que viene.",
            },
            {
                title: "Técnica Quantum Holográfica",
                description: "Método integrador que combina principios de la Cábala, la Terapia Cuántica y las Esencias Florales de Bach para identificar bloqueos emocionales y **restaurar el equilibrio energético** y espiritual de la persona.",
            },
            {
                title: "Alineación con Limpieza de Chakras",
                description: "Trabajo energético que armoniza y desbloquea los centros de energía del cuerpo (**Chakras**), favoreciendo el bienestar integral, la claridad mental y el equilibrio emocional.",
            },
        ],
    },
];

// === Componente Principal de la Página ===
export default function ServiciosPage() {
    return (
        <div className="overflow-x-hidden min-h-screen">
            <section className="max-w-[1700px] mx-auto pt-20 pb-28 px-8 md:px-6 text-center">
                {/* Título Principal */}
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
                    Nuestros Servicios Integrales
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 intro-spacing">
                    Te ofrecemos una guía y un espacio de sanación, combinando la sabiduría ancestral con técnicas de equilibrio energético y bienestar corporal.
                </p>

                {/* Contenedor de Módulos de Servicios: 2x2 en escritorio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-28 sm:gap-x-16 sm:gap-y-32 text-left services-grid-container">
                    {servicesData.map((category, index) => (
                        <div
                            key={index}
                            // CLASES DE ESTILO MEJORADO (ver CSS abajo)
                            className="p-8 rounded-xl shadow-xl transition duration-300 service-module hover:shadow-purple-700/50"
                        >
                            {/* Título de la Categoría */}
                            <h2
                                className="text-3xl lg:text-4xl font-extrabold mb-8 flex items-center service-category-title"
                            >
                                <span className="mr-4 text-5xl">{category.icon}</span>
                                {category.category}
                            </h2>

                            {/* Lista de Servicios */}
                            <div className="space-y-10 service-items-list">
                                {category.items.map((service, idx) => (
                                    <div key={idx} className="service-item">
                                        <h3 className="text-xl font-bold mb-1 text-white">
                                            {service.title}
                                        </h3>
                                        <p
                                            className="text-gray-400"
                                            dangerouslySetInnerHTML={{ __html: service.description }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}