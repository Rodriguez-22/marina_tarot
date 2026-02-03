import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nuevaCita = await prisma.cita.create({
      data: {
        nombre: body.nombre,
        apellidos: body.apellidos,
        asunto: body.asunto,
        fecha: body.fecha,
        hora: body.hora,
      },
    });
    return NextResponse.json(nuevaCita, { status: 201 });
  } catch (error) {
    console.error("Error en API:", error);
    return NextResponse.json({ error: "Error al guardar" }, { status: 500 });
  }
}