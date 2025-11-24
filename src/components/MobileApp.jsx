import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/MobileApp.css";
import appMockup from "../assets/mobile_app.png";

export default function MobileApp() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="mobile-app"
      className="mobileapp-wrapper w-full py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto grid items-center gap-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 lg:grid-cols-2">

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-6 scroll-reveal">
          <h2 className="mobileapp-title gradient-text">{t.mobileTitle}</h2>

          <p className="mobileapp-text max-w-xl">
            {t.mobileText}
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
