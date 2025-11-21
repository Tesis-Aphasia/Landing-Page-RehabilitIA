import React from "react";
import "../styles/MobileApp.css";

export default function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="mobileapp-wrapper w-full py-12 md:py-24 bg-brand-gray-warm dark:bg-background-dark/50 rounded-xl"
    >
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="mobileapp-title">
            Aplicación Móvil para Pacientes
          </h2>

          <p className="mobileapp-text max-w-[600px]">
            Una interfaz accesible, clara y multimodal diseñada para que los pacientes
            realicen sus ejercicios diarios de forma sencilla, motivadora y sin barreras
            cognitivas. Cada ejercicio está adaptado al nivel del paciente y sigue la
            metodología de VNeST y Spaced Retrieval.
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center">
          <img
            className="mobileapp-image max-w-[260px] rounded-xl shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaw_S7sFTJErMGALfyrX_vCZiVkatQIDqI-QV69uDqs8rD-GSwCy9tNzXtPvIcZ9fAZPIXNMinXNFZl3Hw-dN2GxMkc33m8Vl714cxpjdNsgfCOowQsEHknf3C_xut1hrTfwwi0gjpMkSCo6WGSG6i4hTdUe4vcNm2ZXYVO7IQFwJ8DOidOHPj0DRveWEK1KAnKwxyP2cM9y0T_PZR_FF0e-Q--OoD7jFcYzKWQ_Rs23ai3-J2qKcE9Ce315sDOipvMl3i_TU2ww"
            alt="Mockup de la app RehabilitIA"
          />
        </div>

      </div>
    </section>
  );
}
