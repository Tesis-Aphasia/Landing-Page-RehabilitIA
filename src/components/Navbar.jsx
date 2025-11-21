import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-container sticky top-0 z-50 backdrop-blur-sm">
      <div className="navbar-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-content">
          {/* Logo + Branding */}
          <div className="navbar-left flex items-center gap-3">
            <img
              src="src/assets/brain_logo.png"
              alt="RehabilitIA Logo"
              className="navbar-logo"
            />
            <h2 className="navbar-title">RehabilitIA</h2>
          </div>

          {/* Navigation Links */}
          <nav className="navbar-links hidden md:flex gap-6">
            <a href="#hero">Inicio</a>
            <a href="#what-is-aphasia">Afasia</a>
            <a href="#therapies">Terapias</a>
            <a href="#technology">Tecnología</a>
            <a href="#mobile-app">App Móvil</a>
            <a href="#web-platform">Web Terapeutas</a>
            <a href="#timeline">Línea de Tiempo</a>
            <a href="#team">Equipo</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
