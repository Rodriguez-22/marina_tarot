import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
export const dynamic = 'force-static';

const prisma = new PrismaClient()

// ESTO ES PARA QUE EL ADMIN VEA LAS CITAS (LO QUE YA TENÍAS)
export async function GET() {
  try {
    const citas = await prisma.cita.findMany({
      orderBy: { id: 'desc' },
    })
    return NextResponse.json(citas)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener citas" }, { status: 500 })
  }
}

// ESTO ES LO QUE FALTA O ESTÁ MAL: PARA GUARDAR DESDE EL FORMULARIO
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("Datos recibidos en el POST:", body)

    const nuevaCita = await prisma.cita.create({
      data: {
        nombre: body.nombre,
        apellidos: body.apellidos,
        asunto: body.asunto,
        fecha: body.fecha,
        hora: body.hora,
      },
    })

    return NextResponse.json(nuevaCita, { status: 201 })
  } catch (error) {
    console.error("Error al guardar la cita:", error)
    return NextResponse.json({ error: "No se pudo guardar la cita" }, { status: 500 })
  }
}