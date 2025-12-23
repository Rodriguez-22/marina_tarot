import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marina Tarot',
    short_name: 'Marina Tarot',
    description: 'Tu guía en la sanación espiritual, Tarot y Registros Akáshicos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a', // Tu variable --color-fondo
    theme_color: '#a855f7',      // Tu variable --color-morado-principal
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png', // Deberías generar esta imagen y ponerla en /public
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png', // Deberías generar esta imagen y ponerla en /public
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}