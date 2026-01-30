// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient() // En Prisma 7, la URL se toma automáticamente del config

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma