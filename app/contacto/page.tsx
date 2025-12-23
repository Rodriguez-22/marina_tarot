// app/contacto/page.tsx
import CustomBooking from "../components/CustomBooking"; 

// Metadata específica para esta página
export const metadata = {
    title: "Contacto | Marina Tarot",
    description: "Agenda tu reunión personal con Bartolomé Rubio para una consulta.",
};

export default function ContactoPage() {
  return (
    // CAMBIO APLICADO: Div contenedor con overflow-x-hidden para evitar el scroll horizontal en móvil.
    <div className="overflow-x-hidden min-h-screen">
      {/* Reutilizamos la clase 'booking-section' para centrado y márgenes */}
      <section className="booking-section">
          <h1>Agendar una reunión</h1>
          <p>
              A continuación puede encontrar la lista de intervalos de horas 
              disponible para Reunión personal para toma de contacto e 
              información con Marina Tarot. Haga clic en una ranura 
              de hora para proceder con la cita.
          </p>
          <CustomBooking />
      </section>
    </div>
  );
}