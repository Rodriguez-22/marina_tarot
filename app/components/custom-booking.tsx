"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

const TIME_SLOTS: TimeSlot[] = [
  { id: "1", time: "09:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:00 AM", available: true },
  { id: "4", time: "12:00 PM", available: true },
  { id: "5", time: "01:00 PM", available: true },
  { id: "6", time: "02:00 PM", available: true },
  { id: "7", time: "03:00 PM", available: true },
  { id: "8", time: "04:00 PM", available: true },
  { id: "9", time: "05:00 PM", available: true },
  { id: "10", time: "06:00 PM", available: true },
]

export default function CustomBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1
  }

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const days = useMemo(() => {
    const daysArray = []
    const firstDay = getFirstDayOfMonth(currentMonth)
    const daysInMonth = getDaysInMonth(currentMonth)

    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    const daysInPrevMonth = getDaysInMonth(prevMonthDate)

    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i
      const dayDate = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), day)
      dayDate.setHours(0, 0, 0, 0)
      const isPast = dayDate < today
      const dayOfWeek = dayDate.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

      daysArray.push({
        day,
        month: prevMonthDate.getMonth(),
        year: prevMonthDate.getFullYear(),
        currentMonth: false,
        isAvailable: !isPast && !isWeekend,
      })
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i)
      dayDate.setHours(0, 0, 0, 0)
      const isPast = dayDate < today
      const dayOfWeek = dayDate.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

      daysArray.push({
        day: i,
        month: currentMonth.getMonth(),
        year: currentMonth.getFullYear(),
        currentMonth: true,
        isAvailable: !isPast && !isWeekend,
      })
    }

    const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    const remainingDays = 42 - daysArray.length

    for (let i = 1; i <= remainingDays; i++) {
      const dayDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i)
      dayDate.setHours(0, 0, 0, 0)
      const isPast = dayDate < today
      const dayOfWeek = dayDate.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

      daysArray.push({
        day: i,
        month: nextMonthDate.getMonth(),
        year: nextMonthDate.getFullYear(),
        currentMonth: false,
        isAvailable: !isPast && !isWeekend,
      })
    }

    return daysArray
  }, [currentMonth, today])

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const handleSelectTime = (timeId: string) => {
    const slot = TIME_SLOTS.find((s) => s.id === timeId)
    if (slot?.available) {
      setSelectedTime(timeId)
    }
  }

  const handleDateClick = (dayObj: {
    day: number
    month: number
    year: number
    currentMonth: boolean
    isAvailable: boolean
  }) => {
    if (dayObj.isAvailable && dayObj.currentMonth) {
      const newDate = new Date(dayObj.year, dayObj.month, dayObj.day)
      newDate.setHours(0, 0, 0, 0)
      setSelectedDate(newDate)
      setSelectedTime(null)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  const timeSlotsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  }

  const timeSlotItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:border-purple-500/60 transition-all duration-300"
        >
          {/* Month Header */}
          <div className="flex items-center justify-between mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevMonth}
              className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors text-purple-300"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <h2 className="text-2xl font-heading font-bold text-white">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextMonth}
              className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors text-purple-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="text-center font-semibold text-purple-300 py-2 text-sm">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <motion.div className="grid grid-cols-7 gap-2" variants={containerVariants}>
            {days.map((dayObj, index) => {
              const isSelected =
                selectedDate &&
                selectedDate.getDate() === dayObj.day &&
                selectedDate.getMonth() === dayObj.month &&
                selectedDate.getFullYear() === dayObj.year

              return (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  whileHover={dayObj.currentMonth && dayObj.isAvailable ? { scale: 1.08, y: -2 } : {}}
                  whileTap={dayObj.currentMonth && dayObj.isAvailable ? { scale: 0.95 } : {}}
                  onClick={() => handleDateClick(dayObj)}
                  disabled={!dayObj.currentMonth || !dayObj.isAvailable}
                  className={`
                    aspect-square text-sm rounded-lg font-semibold transition-all relative group
                    ${!dayObj.currentMonth ? "text-gray-600" : ""}
                    ${dayObj.currentMonth && !dayObj.isAvailable ? "text-gray-500 cursor-not-allowed" : ""}
                    ${
                      dayObj.currentMonth && dayObj.isAvailable
                        ? "text-white cursor-pointer hover:shadow-lg hover:shadow-purple-500/50"
                        : ""
                    }
                    ${
                      isSelected
                        ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/50"
                        : dayObj.currentMonth && dayObj.isAvailable
                          ? "bg-white/5 border border-purple-500/20 hover:bg-white/15 hover:border-purple-500/50"
                          : "bg-transparent border border-transparent"
                    }
                  `}
                >
                  {dayObj.day}
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:border-purple-500/60 transition-all duration-300 flex flex-col"
        >
          <AnimatePresence mode="wait">
            {selectedDate ? (
              <motion.div
                key="time-slots"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Horarios disponibles</h3>
                  <p className="text-purple-300 text-base font-medium">
                    {selectedDate.toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-3 flex-1"
                  variants={timeSlotsContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {TIME_SLOTS.map((slot, index) => {
                    const isSelected = selectedTime === slot.id

                    return (
                      <motion.button
                        key={slot.id}
                        variants={timeSlotItemVariants}
                        whileHover={slot.available ? { scale: 1.05, y: -3 } : {}}
                        whileTap={slot.available ? { scale: 0.98 } : {}}
                        onClick={() => slot.available && handleSelectTime(slot.id)}
                        disabled={!slot.available}
                        className={`
                          py-4 px-3 rounded-xl font-bold transition-all relative overflow-hidden
                          ${
                            isSelected
                              ? "bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/50 border-2 border-purple-300"
                              : slot.available
                                ? "bg-white/15 text-white border-2 border-purple-400/50 hover:bg-white/25 hover:border-purple-300/80 hover:shadow-lg hover:shadow-purple-500/30"
                                : "bg-gray-600/20 text-gray-500 border-2 border-gray-600/20 cursor-not-allowed line-through"
                          }
                        `}
                      >
                        {slot.available && !isSelected && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: index * 0.1,
                            }}
                          />
                        )}

                        <div className="relative z-10 flex items-center justify-center gap-2">
                          <span className="text-base">{slot.time}</span>
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <Check size={18} />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    )
                  })}
                </motion.div>

                <motion.div
                  className="mt-6 p-4 bg-gradient-to-r from-purple-500/30 via-purple-400/10 to-purple-500/30 border border-purple-400/50 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedTime ? (
                    <p className="text-sm text-white text-center font-semibold">
                      Sesion agendada:{" "}
                      {selectedDate.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "2-digit" })} a
                      las {TIME_SLOTS.find((s) => s.id === selectedTime)?.time}
                    </p>
                  ) : (
                    <p className="text-sm text-purple-200 text-center">Selecciona una hora para reservar</p>
                  )}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center h-full min-h-96"
              >
                <div className="text-center">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    📅
                  </motion.div>
                  <p className="text-white text-lg font-semibold">Selecciona una fecha</p>
                  <p className="text-purple-300 text-sm mt-2">para ver los horarios disponibles</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
