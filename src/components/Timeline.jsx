import React from "react";
import "../styles/Timeline.css";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="timeline-wrapper w-full py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 scroll-reveal">
          <h2 className="timeline-title gradient-text">Línea de Tiempo del Proyecto</h2>
          <p className="timeline-subtitle max-w-2xl">
            RehabilitIA inicia en 2025 como el primer sistema en español que
            combina agentes de IA y terapias basadas en evidencia para la
            rehabilitación del lenguaje.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* 2025 */}
          <div className="timeline-card soft-card hover-lift">
            <h3 className="timeline-card-year">2025</h3>
            <ul className="timeline-list">
              <li>Formulación del problema y revisión de literatura.</li>
              <li>Diseño de la arquitectura del sistema.</li>
              <li>Integración inicial de agentes IA y modelos de lenguaje.</li>
              <li>Desarrollo de la app móvil y la plataforma web.</li>
              <li>Pruebas preliminares con terapeutas.</li>
              <li>Redacción y defensa de la tesis.</li>
            </ul>
          </div>

          {/* 2026 — Continuación */}
          <div className="timeline-card glass hover-glow">
            <h3 className="timeline-card-year">2026 — En curso</h3>
            <ul className="timeline-list">
              <li>Extensión del sistema a nuevas terapias.</li>
              <li>Integración de evaluación automática del habla.</li>
              <li>Pruebas clínicas ampliadas.</li>
              <li>Publicación académica de resultados.</li>
              <li>Preparación para despliegue a mayor escala.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
