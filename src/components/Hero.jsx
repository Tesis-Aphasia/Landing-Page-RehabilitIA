import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/brain_logo.png";

export default function Hero() {
  return (
    <section id="hero" className="hero-section w-full py-20 lg:py-28">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* TEXT BLOCK */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <h1 className="hero-title leading-snug">
              RehabilitIA: Terapia de Lenguaje Asistida por IA 
              a través de una Plataforma Web y Móvil para la 
              Rehabilitación Personalizada de la Afasia en
              Pacientes Hispanohablantes
            </h1>

            <p className="hero-subtitle max-w-xl mx-auto lg:mx-0">
              La afasia afecta a millones de personas y está presente en hasta el 40% de los 
              sobrevivientes de accidente cerebrovascular. En Colombia, el acceso a la terapia 
              del lenguaje es limitado, especialmente para pacientes hispanohablantes. RehabilitIA 
              combina modelos de lenguaje avanzados y flujos agentivos para generar ejercicios 
              adaptativos, culturalmente apropiados y basados en evidencia, permitiendo la práctica 
              autónoma y la supervisión continua por parte de terapeutas.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="hero-image w-full bg-center bg-no-repeat aspect-[4/3] bg-contain rounded-xl"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
      </div>
    </section>
  );
}
