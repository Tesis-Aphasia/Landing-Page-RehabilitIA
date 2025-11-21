import React from "react";
import "../styles/Therapies.css";

export default function Therapies() {
  return (
    <section
      id="therapies"
      className="therapies-wrapper w-full py-16 lg:py-28 bg-brand-gray-warm dark:bg-background-dark/50 rounded-xl"
    >
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <h2 className="therapies-title">Terapias Basadas en Evidencia</h2>

          <p className="therapies-subtitle max-w-2xl">
            En RehabilitIA integramos enfoques terapéuticos respaldados por décadas de 
            investigación clínica para fortalecer las habilidades lingüísticas en personas 
            con afasia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid max-w-5xl mx-auto gap-10 sm:grid-cols-2">

          {/* VNeST */}
          <div className="therapy-card">
            <div className="flex items-center gap-4">
              <div className="therapy-icon bg-brand-blue-light/20 text-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="therapy-card-title">VNeST</h3>
            </div>

            <p className="therapy-card-text">
              Verb Network Strengthening Treatment fortalece las redes semánticas 
              alrededor de los verbos, mejorando la recuperación de palabras y la 
              producción de oraciones en contextos reales.
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
              La Recuperación Espaciada entrena la memoria mediante la evocación repetida 
              en intervalos crecientes, favoreciendo la retención de palabras y frases 
              funcionales para la comunicación diaria.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
