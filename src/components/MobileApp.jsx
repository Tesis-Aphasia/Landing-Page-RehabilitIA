import React from "react";
import "../styles/MobileApp.css";
import appMockup from "../assets/mobile_app.png";

export default function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="mobileapp-wrapper w-full py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto grid items-center gap-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 lg:grid-cols-2">

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-6 scroll-reveal">
          <h2 className="mobileapp-title gradient-text">Aplicación Móvil para Pacientes</h2>

          <p className="mobileapp-text max-w-xl">
            La aplicación móvil de RehabilitIA está diseñada específicamente para personas
            con afasia: navegación simple, pocas opciones por pantalla, botones amplios,
            instrucciones claras y soporte visual–auditivo. Cada ejercicio se adapta
            automáticamente al desempeño del paciente, siguiendo VNeST y Spaced Retrieval.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            className="mobileapp-image max-w-[260px] rounded-2xl shadow-soft-lg hover-lift"
            src={appMockup}
            alt="Mockup de la aplicación RehabilitIA"
          />
        </div>

      </div>
    </section>
  );
}
