import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite cargar imágenes de Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Formatos de última generación para mejor SEO y velocidad
    formats: ['image/avif', 'image/webp'],
  },
  /* Aquí puedes añadir otras opciones de configuración si las necesitas */
};

export default nextConfig;