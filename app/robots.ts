import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://comprobaciones.vercel.app'; // ⚠️ CAMBIA ESTO POR TU DOMINIO REAL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Rutas que no quieres que Google vea
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}