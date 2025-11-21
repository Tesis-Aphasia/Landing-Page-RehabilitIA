import React from "react";
import "../styles/Technology.css";

export default function Technology() {
  return (
    <section
      id="technology"
      className="technology-wrapper w-full py-16 lg:py-28"
    >
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <h2 className="technology-title">Tecnología detrás de RehabilitIA</h2>
          <p className="technology-subtitle max-w-2xl">
            RehabilitIA combina modelos de lenguaje avanzados, agentes
            especializados y flujos de generación automática para ofrecer
            terapia del lenguaje personalizada y basada en evidencia.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="technology-grid grid max-w-7xl mx-auto gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* LLM */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">smart_toy</span>
            </div>
            <h3 className="tech-card-title">Large Language Models</h3>
            <p className="tech-card-text">
              Modelos de lenguaje que generan contenido terapéutico adaptado
              al perfil y desempeño del paciente.
            </p>
          </div>

          {/* Agents */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">hub</span>
            </div>
            <h3 className="tech-card-title">Agentes Inteligentes</h3>
            <p className="tech-card-text">
              Agentes que estructuran los ejercicios, validan coherencia
              clínica y adaptan la dificultad durante el tratamiento.
            </p>
          </div>

          {/* Automatic Generation */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            <h3 className="tech-card-title">Generación Automática</h3>
            <p className="tech-card-text">
              Material terapéutico dinámico que evoluciona según el progreso
              del paciente, manteniendo motivación y continuidad.
            </p>
          </div>

          {/* Personalization */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">tune</span>
            </div>
            <h3 className="tech-card-title">Personalización Asistida</h3>
            <p className="tech-card-text">
              Los terapeutas pueden refinar y complementar los ejercicios,
              integrando criterio clínico con la IA.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
