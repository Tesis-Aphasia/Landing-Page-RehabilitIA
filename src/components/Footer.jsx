import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="footer-wrapper w-full py-6 mt-12 border-t border-solid border-t-[#e7ebf3] dark:border-t-gray-700"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">

        {/* Branding */}
        <div className="flex items-center gap-4 text-brand-text-dark dark:text-white mb-4 md:mb-0">
          <img
            src="src/assets/brain_logo.png"
            alt="RehabilitIA Logo"
            className="footer-logo"
          />
          <span className="footer-brand">RehabilitIA</span>
        </div>

        {/* Copyright */}
        <p className="footer-text text-sm text-brand-text-light dark:text-gray-400 mb-4 md:mb-0">
          © 2025 RehabilitIA – Undergraduate Thesis Project
        </p>

        {/* Uniandes Logo */}
        <div className="flex items-center gap-2">
          <img
            className="footer-uniandes h-8"
            alt="Universidad de los Andes Logo"
            src="src/assets/logo_uniandes.png"
          />
        </div>

        {/* Department Logo */}
        <div className="flex items-center gap-2">
          <img
            className="footer-uniandes h-8"
            alt="Systems and Computer Engineering Department Logo"
            src="src/assets/logo_disc.png"
          />
        </div>
      </div>
    </footer>
  );
}
