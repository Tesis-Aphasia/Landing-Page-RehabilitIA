import React from "react";
import "../styles/WebPlatform.css";

export default function WebPlatform() {
  return (
    <section
      id="web-platform"
      className="webplatform-wrapper w-full py-12 md:py-24"
    >
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">

        {/* IMAGE */}
        <div className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-xl webplatform-image"
          style={{
            backgroundImage:
              `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmimPaWLE07Unjbu_aOQVP107RALfFhFiqNZs0cm_G5RA2C9A2jTHlmfTJUk477K0sND9q3y2Wj1bZICVIxJNTVbzTQNtkfpPFKQpiF1oV-BMKBNil1uvHqMEpCpzQvbogvoEUHQd4sfJNgrDBIj0_lJu0IG80no3kr8AYKxX_NV9FbR2X8XCjdxWL9x7Gg2QBEybxZHr3DcxYJvi2eu0F8oZ-GBnbJ7WxFX_uHqzDi_6iBnKHNnz4PNUtvZZXz_VXi7eiVDzQsA")`
          }}
        />

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="webplatform-title">
            Plataforma Web para Terapeutas
          </h2>

          <p className="webplatform-text max-w-[600px]">
            Un dashboard profesional que permite a los terapeutas supervisar el progreso
            de los pacientes, visualizar datos de rendimiento, validar solicitudes de
            registro, ajustar la dificultad de los ejercicios y complementar la terapia
            generada por la IA.
          </p>
        </div>

      </div>
    </section>
  );
}
