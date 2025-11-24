import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/WebPlatform.css";
import webMockup from "../assets/web_app.png";

export default function WebPlatform() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="web-platform"
      className="webplatform-wrapper w-full py-16 lg:py-28"
    >
      <div className="container mx-auto grid items-center gap-12 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 lg:grid-cols-2">

        {/* IMAGE */}
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-contain rounded-2xl webplatform-image shadow-soft-lg hover-lift"
          style={{
            backgroundImage: `url(${webMockup})`,
          }}
        />

        {/* TEXT BLOCK */}
        <div className="flex flex-col justify-center space-y-6 scroll-reveal">
          <h2 className="webplatform-title gradient-text">{t.webTitle}</h2>

          <p className="webplatform-text max-w-xl">
            {t.webText}
          </p>
        </div>

      </div>
    </section>
  );
}
