// prisma.config.ts
import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';
import path from 'path';

// Forzamos la carga del archivo .env desde la raíz
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default defineConfig({
  datasource: {
    // Si process.env.DATABASE_URL es undefined, Prisma dará error, 
    // así que asegúrate de que el nombre coincida con tu archivo .env
    url: process.env.DATABASE_URL,
  },
});