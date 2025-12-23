// rodriguez-22/nidea-marketing/nidea-marketing-15893a801ab79dff58e5598a883b92ba30b64bea/app/components/ServiceCard.tsx
import React from 'react';

// === Ícono de Acento === // ELIMINADO

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div className="
            /* LAYOUT y FONDO */
            bg-[var(--color-fondo-modulo)] 
            rounded-2xl 
            
            /* PADDING GRANDE */
            p-8 
            md:p-12 
            
            h-full
            flex 
            flex-col

            /* EFECTOS VISUALES y BORDES */
            border 
            border-[var(--color-borde)]
            shadow-lg 
            
            /* INTERACCIÓN (Hover) */
            hover:border-[var(--color-morado-principal)] 
            hover:shadow-[0_10px_20px_rgba(168,85,247,0.3)] 
            hover:translate-y-[-4px] 
            transition 
            duration-300 
            ease-in-out
        ">
            {/* TÍTULO MEJORADO - ELIMINAMOS ICONO Y CENTRAMOS */}
            <h3 className="
                text-xl 
                md:text-2xl 
                font-extrabold 
                mb-6 
                text-[var(--color-morado-principal)]
                text-center /* ¡AÑADIDO PARA CENTRAR EL TEXTO! */
            ">
                {title}
            </h3>
            
            {/* DESCRIPCIÓN MEJORADA */}
            <p className="
                text-base 
                text-[var(--color-texto-secundario)]
                flex-grow 
                leading-relaxed 
            ">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;