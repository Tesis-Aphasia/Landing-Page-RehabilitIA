import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Timeline.css";

export default function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="timeline"
      className="timeline-wrapper w-full py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 scroll-reveal">
          <h2 className="timeline-title gradient-text">{t.timelineTitle}</h2>
          <p className="timeline-subtitle max-w-2xl">
            {t.timelineSubtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* 2025 */}
          <div className="timeline-card soft-card hover-lift">
            <h3 className="timeline-card-year">{t.timeline2025Year}</h3>
            <ul className="timeline-list">
              {t.timeline2025Items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 2026 — Continuación */}
          <div className="timeline-card soft-card hover-lift">
            <h3 className="timeline-card-year">{t.timeline2026Year}</h3>
            <ul className="timeline-list">
              {t.timeline2026Items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
