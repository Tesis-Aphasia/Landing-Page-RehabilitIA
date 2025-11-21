import React from "react";
import "../styles/Timeline.css";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="timeline-wrapper w-full py-12 md:py-24 bg-brand-gray-warm dark:bg-background-dark/50 rounded-xl"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <h2 className="timeline-title">Línea de Tiempo del Proyecto</h2>

          <p className="timeline-subtitle max-w-[700px]">
            Un resumen de nuestro progreso a lo largo del desarrollo de RehabilitIA.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* 2024 */}
          <div className="timeline-card">
            <h3 className="timeline-card-year">2024</h3>

            <ul className="timeline-list">
              <li>Investigación fundamental y marco teórico.</li>
              <li>Diseño de la arquitectura del sistema.</li>
              <li>Integración de modelos de IA (LLMs y Agentes).</li>
              <li>Desarrollo inicial de la app móvil y la plataforma web.</li>
              <li>Pruebas preliminares con usuarios y terapeutas.</li>
            </ul>
          </div>

          {/* 2025 */}
          <div className="timeline-card">
            <h3 className="timeline-card-year">2025</h3>

            <ul className="timeline-list">
              <li>Evaluación de resultados y análisis de desempeño.</li>
              <li>Optimización de flujo terapéutico y generación automática.</li>
              <li>Mejoras basadas en retroalimentación clínica.</li>
              <li>Redacción y presentación del documento de tesis.</li>
              <li>Finalización del proyecto académico.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
