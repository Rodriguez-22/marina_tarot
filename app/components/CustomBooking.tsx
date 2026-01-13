"use client"

import { useState } from "react"

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

const TIME_SLOTS: TimeSlot[] = [
  { id: "1", time: "09:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:00 AM", available: false },
  { id: "4", time: "12:00 PM", available: true },
  { id: "5", time: "13:00 PM", available: true },
  { id: "6", time: "14:00 PM", available: false },
  { id: "7", time: "15:00 PM", available: true },
  { id: "8", time: "16:00 PM", available: true },
  { id: "9", time: "17:00 PM", available: true },
  { id: "10", time: "18:00 PM", available: false },
]

export default function CustomBooking() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days: (number | null)[] = Array(firstDay === 0 ? 6 : firstDay - 1)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1))

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    setSelectedDate(null)
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    setSelectedDate(null)
  }

  const handleSelectTime = (timeId: string) => {
    if (selectedDate) {
      console.log(
        `Cita agendada: ${selectedDate} de ${currentMonth.toLocaleString("es-ES", { month: "long", year: "numeric" })} a las ${TIME_SLOTS.find((s) => s.id === timeId)?.time}`,
      )
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CALENDAR SECTION */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg border border-purple-200">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handlePrevMonth}
              className="p-2 hover:bg-purple-200 rounded-lg transition-colors text-purple-700 font-semibold"
            >
              ←
            </button>
            <h2 className="text-lg font-heading font-bold text-purple-900">
              {currentMonth.toLocaleString("es-ES", { month: "long", year: "numeric" })}
            </h2>
            <button
              onClick={handleNextMonth}
              className="p-2 hover:bg-purple-200 rounded-lg transition-colors text-purple-700 font-semibold"
            >
              →
            </button>
          </div>

          {/* WEEKDAY HEADERS */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {WEEKDAYS.map((day) => (
              <div key={day} className="text-center font-semibold text-purple-700 py-2 text-sm">
                {day}
              </div>
            ))}
          </div>

          {/* CALENDAR DAYS */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => day && setSelectedDate(day)}
                disabled={!day}
                className={`
                  aspect-square rounded-lg font-body font-semibold transition-all
                  ${!day ? "bg-transparent" : ""}
                  ${
                    day && selectedDate === day
                      ? "bg-purple-600 text-white shadow-lg scale-105"
                      : day
                        ? "bg-white text-purple-900 hover:bg-purple-100 border border-purple-200 hover:border-purple-400"
                        : ""
                  }
                  ${day ? "cursor-pointer" : "cursor-default"}
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* TIME SLOTS SECTION */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-lg border border-purple-200">
          {selectedDate ? (
            <>
              <h3 className="text-lg font-heading font-bold text-purple-900 mb-2">Horarios disponibles</h3>
              <p className="text-sm text-purple-700 mb-6">
                {selectedDate} de {currentMonth.toLocaleString("es-ES", { month: "long" })}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => slot.available && handleSelectTime(slot.id)}
                    disabled={!slot.available}
                    className={`
                      py-3 px-4 rounded-lg font-body font-semibold transition-all
                      ${
                        slot.available
                          ? "bg-white text-purple-900 border-2 border-purple-300 hover:border-purple-600 hover:bg-purple-50 cursor-pointer"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      }
                    `}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-center">
              <p className="text-purple-600 font-body">
                Selecciona un día en el calendario para ver los horarios disponibles
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
