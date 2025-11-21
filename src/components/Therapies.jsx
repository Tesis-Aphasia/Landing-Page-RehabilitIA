import React from "react";
import "../styles/Therapies.css";

export default function Therapies() {
  return (
    <section
      id="therapies"
      className="therapies-wrapper w-full py-12 md:py-24 bg-brand-gray-warm dark:bg-background-dark/50 rounded-xl"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <h2 className="therapies-title">
            Terapias Basadas en Evidencia
          </h2>

          <p className="therapies-subtitle max-w-[700px]">
            Utilizamos metodologías probadas para maximizar la efectividad de la rehabilitación,
            integrando enfoques validados clínicamente como VNeST y Spaced Retrieval.
          </p>
        </div>

        {/* Cards */}
        <div className="grid max-w-5xl mx-auto gap-8 sm:grid-cols-2">

          {/* VNeST */}
          <div className="therapy-card">
            <div className="flex items-center gap-4">
              <div className="therapy-icon bg-brand-blue-light/20 text-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="therapy-card-title">VNeST</h3>
            </div>

            <p className="therapy-card-text">
              Verb Network Strengthening Treatment fortalece las redes semánticas alrededor de los verbos,
              mejorando la recuperación léxica y la producción de oraciones. Es uno de los tratamientos con
              mayor evidencia de generalización en personas con afasia.
            </p>
          </div>

          {/* SR */}
          <div className="therapy-card">
            <div className="flex items-center gap-4">
              <div className="therapy-icon bg-brand-lavender/20 text-purple-600">
                <span className="material-symbols-outlined">timer</span>
              </div>
              <h3 className="therapy-card-title">Spaced Retrieval (SR)</h3>
            </div>

            <p className="therapy-card-text">
              La Recuperación Espaciada es una técnica de aprendizaje que incrementa el intervalo entre
              recordatorios a medida que el paciente responde correctamente, facilitando la consolidación
              de memoria y la retención de palabras y frases funcionales.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
