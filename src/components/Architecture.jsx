import React from "react";
import "../styles/Architecture.css";

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="architecture-wrapper w-full py-12 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12 scroll-reveal">
          <h2 className="architecture-title gradient-text">Arquitectura de Alto Nivel</h2>
        </div>

        {/* Diagram */}
        <div className="w-full flex justify-center">
          <img
            className="architecture-image w-full max-w-5xl h-auto rounded-2xl shadow-soft-lg hover-lift"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9kEvx9GFE5R9Nsi-pGSHvj3lJ8HPQc7eLcOThg-NkYHjQcDC3-qB1CD1X80OeOyWGdUiO4MahC7ujMocLHGz5iZk9qWyg8hyGUGAK-Dn6-DgF4zIjShLWxsWFY3vPFxzv6tQYCfR1VuV85dwxOAjep26PCVPJb6w1A9CwK94HSYb7TPY-G6twgoZt8DKuq5pBx9c_sd5TkYRS0OfRDiLbMCe_J5qdEjmLqDJkjUspCpfm4lSS4u5rtFiurQGgBJWRf4KhM9wepQ"
            alt="Diagrama de arquitectura de alto nivel de RehabilitIA"
          />
        </div>

      </div>
    </section>
  );
}
