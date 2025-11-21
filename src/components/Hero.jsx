import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/brain_logo.png";


export default function Hero() {
  return (
    <section id="hero" className="hero-section w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="@container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">

            {/* TEXT BLOCK */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <h1 className="hero-title">
                RehabilitIA: Inteligencia Artificial para Terapia de Afasia en Español
              </h1>

              <p className="hero-subtitle">
                Una plataforma web y móvil para generar ejercicios adaptativos basados en
                VNeST y Spaced Retrieval, diseñada para mejorar la rehabilitación del
                lenguaje en pacientes hispanohablantes con afasia.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href="#what-is-aphasia">
                  <button className="hero-button">
                    Learn More
                  </button>
                </a>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div
              className="hero-image h-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl"
                    style={{
                        backgroundImage:
                        `url(${heroImage})`,
                    }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
