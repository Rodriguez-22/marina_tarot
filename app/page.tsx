// app/page.tsx

export default function Home() {
  return (
    <div className="home-content-container">
      <section>

        {/* --- (El resto de tu código de arriba sigue igual) --- */}
        <h1>Marina Tarot</h1>
        <h2>Tu guía en la sanación espiritual y el autoconocimiento.</h2>
        
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-32 leading-relaxed drop-shadow-sm">
          Descubre el poder de la guía ancestral. Ofrecemos lecturas de Tarot, Registros Akáshicos y terapias de sanación energética para transformar tu presente y liberar tu potencial.
        </p>

        {/* SOLUCIÓN: Usamos style={{ marginTop: '100px' }} para forzar el espacio sí o sí */}
        <p className="home-cta-spacing" style={{ marginTop: '100px' }}>
          <a href="/contacto" className="cta-button">Agenda tu Consulta Hoy</a>
        </p>
        
      </section>
    </div>
  );
}