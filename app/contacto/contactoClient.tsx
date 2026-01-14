"use client"

import { useEffect, useState } from "react"
import { motion, easeInOut } from "framer-motion"
import CustomBooking from "../components/custom-booking"
import CustomCalendar from "../components/CustomCalendar"

export default function ContactoClient() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  }

  return (
    <div className="overflow-x-hidden min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=mystical-spiritual-background)",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/50 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-purple-500/20 to-transparent" />
      </div>

      {/* Content */}
      <section className="relative z-10 py-16 md:py-24">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4 text-balance">
              Reserva tu sesión
            </h1>
            <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto text-balance">
              Selecciona un día y hora para tu consulta personal con Marina. Cada sesión está diseñada para brindarte
              claridad y guía espiritual.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full">
            <CustomBooking />
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6 mt-16" variants={containerVariants}>
            {[
              {
                icon: "✨",
                title: "Consultas personalizadas",
                description: "Sesiones adaptadas a tus necesidades específicas",
              },
              {
                icon: "🔮",
                title: "Lectura profunda",
                description: "Exploración detallada de tu situación actual",
              },
              {
                icon: "💜",
                title: "Guía espiritual",
                description: "Orientación clara para tu camino futuro",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-500/60 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-purple-200 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
