"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Check, Send, User, MessageSquare } from "lucide-react"

interface TimeSlot {
  id: string
  time: string
  hour24: number
}

const TIME_SLOTS: TimeSlot[] = [
  { id: "1", time: "09:00 AM", hour24: 9 },
  { id: "2", time: "10:00 AM", hour24: 10 },
  { id: "3", time: "11:00 AM", hour24: 11 },
  { id: "4", time: "12:00 PM", hour24: 12 },
  { id: "5", time: "13:00 PM", hour24: 13 },
  { id: "6", time: "14:00 PM", hour24: 14 },
  { id: "7", time: "15:00 PM", hour24: 15 },
  { id: "8", time: "16:00 PM", hour24: 16 },
  { id: "9", time: "17:00 PM", hour24: 17 },
  { id: "10", time: "18:00 PM", hour24: 18 },
]

export default function CustomBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    asunto: ""
  })

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  // Lógica para bloquear horas que ya pasaron hoy
  const isTimePassed = (hour24: number) => {
    if (!selectedDate) return false
    const now = new Date()
    if (selectedDate.toDateString() === now.toDateString()) {
      return hour24 <= now.getHours()
    }
    return false
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendWhatsApp = async () => {
  const slot = TIME_SLOTS.find(s => s.id === selectedTime);
  const dateStr = selectedDate?.toLocaleDateString("es-ES", { 
    day: "numeric", month: "long", year: "numeric" 
  });

  try {
    await fetch('/api/citas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: formData.nombre,
        apellidos: formData.apellidos,
        asunto: formData.asunto,
        fecha: selectedDate?.toLocaleDateString("es-ES"),
        hora: TIME_SLOTS.find(s => s.id === selectedTime)?.time
      })
    });
  } catch (err) {
    console.error("No se pudo guardar en la base de datos, pero enviando WhatsApp...");
  }

  // Lógica original de WhatsApp
  const message = `¡Hola Marina! Me gustaría reservar una sesión...`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/34606340486?text=${encodedMessage}`, "_blank");
}

  // --- Lógica de Calendario ---
  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const getFirstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1
  }

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  const days = useMemo(() => {
    const daysArray = []
    const firstDay = getFirstDayOfMonth(currentMonth)
    const daysInMonth = getDaysInMonth(currentMonth)
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    const daysInPrevMonth = getDaysInMonth(prevMonthDate)

    for (let i = firstDay - 1; i >= 0; i--) {
      daysArray.push({ day: daysInPrevMonth - i, month: prevMonthDate.getMonth(), year: prevMonthDate.getFullYear(), currentMonth: false, isAvailable: false })
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      const isPast = d < today
      const isWeekend = d.getDay() === 0 || d.getDay() === 6
      daysArray.push({ day: i, month: currentMonth.getMonth(), year: currentMonth.getFullYear(), currentMonth: true, isAvailable: !isPast && !isWeekend })
    }
    return daysArray
  }, [currentMonth, today])

  const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 space-y-8">
      
      {/* SECCIÓN 1: SELECCIÓN DE CITA (CALENDARIO Y HORAS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Calendario */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 text-purple-300 hover:bg-white/10 rounded-full transition-colors"><ChevronLeft /></button>
            <h2 className="text-xl font-bold text-white">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 text-purple-300 hover:bg-white/10 rounded-full transition-colors"><ChevronRight /></button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map(day => <div key={day} className="text-center text-purple-300 text-xs font-bold uppercase">{day}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((dayObj, i) => {
              const isSelected = selectedDate?.getDate() === dayObj.day && selectedDate?.getMonth() === dayObj.month && selectedDate?.getFullYear() === dayObj.year
              return (
                <button
                  key={i}
                  disabled={!dayObj.currentMonth || !dayObj.isAvailable}
                  onClick={() => { setSelectedDate(new Date(dayObj.year, dayObj.month, dayObj.day)); setSelectedTime(null); }}
                  className={`aspect-square text-sm rounded-lg font-semibold transition-all ${
                    isSelected ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50" : 
                    dayObj.isAvailable ? "bg-white/5 text-white hover:bg-white/20 border border-white/10" : "text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {dayObj.day}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Selección de Horas */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 shadow-2xl flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4">Horas Disponibles</h3>
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {TIME_SLOTS.map((slot) => {
                const passed = isTimePassed(slot.hour24)
                return (
                  <button
                    key={slot.id}
                    disabled={passed}
                    onClick={() => setSelectedTime(slot.id)}
                    className={`py-3 px-2 rounded-xl font-bold transition-all border-2 text-sm flex items-center justify-center gap-2 ${
                      selectedTime === slot.id ? "bg-purple-600 border-purple-300 text-white" : 
                      passed ? "opacity-20 cursor-not-allowed border-transparent text-gray-500 line-through" : "bg-white/5 border-purple-400/20 text-white hover:border-purple-400"
                    }`}
                  >
                    {slot.time}
                    {selectedTime === slot.id && <Check size={16} />}
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-purple-300/50 space-y-2">
              <span className="text-4xl">⬅️</span>
              <p>Selecciona un día para ver horas</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* SECCIÓN 2: FORMULARIO (APARTADO SEPARADO) */}
      <AnimatePresence>
        {selectedDate && selectedTime && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="bg-white/10 backdrop-blur-xl border-2 border-purple-500/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Decoración de fondo para el apartado */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <User className="text-purple-400" /> Tus Datos Personales
                  </h3>
                  <p className="text-purple-200 text-sm mt-1">Completa la información para finalizar tu reserva.</p>
                </div>
                <div className="bg-purple-600/30 px-4 py-2 rounded-full border border-purple-400/40">
                  <span className="text-white font-medium text-sm">
                    Cita: {selectedDate.toLocaleDateString()} — {TIME_SLOTS.find(s => s.id === selectedTime)?.time}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-purple-200 text-xs font-bold uppercase mb-2 ml-1">Nombre</label>
                    <input 
                      type="text" name="nombre" placeholder="Tu nombre..." 
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-xs font-bold uppercase mb-2 ml-1">Apellidos</label>
                    <input 
                      type="text" name="apellidos" placeholder="Tus apellidos..." 
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-purple-500/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="block text-purple-200 text-xs font-bold uppercase mb-2 ml-1">Asunto / Consulta</label>
                  <textarea 
                    name="asunto" 
                    placeholder="¿Sobre qué quieres hablar? (Ej: Lectura de tarot amor, trabajo...)" 
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full flex-1 bg-white/5 border border-purple-500/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-white/20 resize-none"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!formData.nombre || !formData.asunto}
                onClick={sendWhatsApp}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:from-gray-700 disabled:to-gray-800 text-white font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all mt-8 shadow-xl shadow-green-900/20"
              >
                <Send size={22} /> CONFIRMAR Y ENVIAR POR WHATSAPP
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}