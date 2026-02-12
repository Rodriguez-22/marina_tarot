import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* Si tienes imágenes que usan el componente <Image /> de Next, 
     añade esto para evitar errores en el build estático: */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;