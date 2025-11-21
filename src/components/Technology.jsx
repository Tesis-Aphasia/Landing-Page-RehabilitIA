import React from "react";
import "../styles/Technology.css";

export default function Technology() {
  return (
    <section
      id="technology"
      className="technology-wrapper w-full py-12 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <h2 className="technology-title">
            Tecnología detrás de RehabilitIA
          </h2>

          <p className="technology-subtitle max-w-[700px]">
            Integramos herramientas avanzadas de inteligencia artificial para crear terapias dinámicas,
            adaptativas y accesibles tanto para pacientes como para terapeutas.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="technology-grid mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* LLM */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">smart_toy</span>
            </div>
            <h3 className="tech-card-title">Large Language Models</h3>
            <p className="tech-card-text">
              Generación de contenido lingüístico adaptado al nivel y desempeño del paciente,
              permitiendo miles de variaciones de ejercicios sin intervención manual.
            </p>
          </div>

          {/* Agents */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">hub</span>
            </div>
            <h3 className="tech-card-title">Intelligent Agents</h3>
            <p className="tech-card-text">
              Agentes especializados que coordinan cada fase del tratamiento, generan material terapéutico
              y supervisan la coherencia de los ejercicios creados por la IA.
            </p>
          </div>

          {/* Automatic Exercises */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">auto_awesome</span>
            </div>
            <h3 className="tech-card-title">Generación Automática</h3>
            <p className="tech-card-text">
              Ejercicios personalizados que se ajustan dinámicamente al progreso del paciente,
              manteniendo un nivel óptimo de reto y motivación.
            </p>
          </div>

          {/* Therapist-Assisted Personalization */}
          <div className="tech-card">
            <div className="tech-icon bg-brand-green-soft/20 text-green-600">
              <span className="material-symbols-outlined text-4xl">tune</span>
            </div>
            <h3 className="tech-card-title">Personalización Asistida</h3>
            <p className="tech-card-text">
              Los terapeutas pueden supervisar, refinar y complementar el material generado automatizadamente,
              integrando la experiencia clínica con la inteligencia artificial.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
