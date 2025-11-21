import React from "react";
import "../styles/WebPlatform.css";
import webMockup from "../assets/web_mockup.png"; // si quieres usar imagen local

export default function WebPlatform() {
  return (
    <section
      id="web-platform"
      className="webplatform-wrapper w-full py-16 lg:py-28"
    >
      <div className="container mx-auto grid items-center gap-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 lg:grid-cols-2">

        {/* IMAGE */}
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl webplatform-image"
          style={{
            backgroundImage: `url(${webMockup})`,
          }}
        />

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="webplatform-title">Plataforma Web para Terapeutas</h2>

          <p className="webplatform-text max-w-xl">
            La plataforma web ofrece a los terapeutas un panel claro y completo 
            para revisar el progreso de cada paciente, analizar su desempeño, ajustar 
            ejercicios generados por IA y gestionar solicitudes de registro profesional. 
            Permite integrar criterio clínico con herramientas inteligentes para una 
            rehabilitación más precisa y personalizada.
          </p>
        </div>

      </div>
    </section>
  );
}
