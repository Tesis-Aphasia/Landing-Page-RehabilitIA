import React from "react";
import { useLanguage } from "../context/LanguageContext";
import brainLogo from "../assets/brain_logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar glass fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="navbar-logo flex items-center gap-3">
          <img src={brainLogo} alt="RehabilitIA Logo" className="logo-image" />
          <span className="navbar-title gradient-text font-bold text-xl">RehabilitIA</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links hidden md:flex items-center gap-8">
          <a href="#hero" className="navbar-link">
            {language === 'es' ? 'Inicio' : 'Home'}
          </a>
          <a href="#what-is-aphasia" className="navbar-link">
            {language === 'es' ? 'Sobre Nosotros' : 'About Us'}
          </a>
          <a href="#technology" className="navbar-link">
            {language === 'es' ? 'Tecnología' : 'Technology'}
          </a>
          <a href="#team" className="navbar-link">
            {language === 'es' ? 'Equipo' : 'Team'}
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="language-toggle-btn"
            aria-label="Toggle language"
          >
            <span className="material-symbols-outlined">translate</span>
            <span className="language-text">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
