// app/api/admin/citas/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obtenemos todas las citas ordenadas por la más reciente
    const citas = await prisma.cita.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(citas);
  } catch (error) {
    console.error("Error al obtener citas:", error);
    return NextResponse.json({ error: "No se pudieron obtener las citas" }, { status: 500 });
  }
}