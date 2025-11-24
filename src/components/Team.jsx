import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Team.css";

export default function Team() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="team"
      className="team-wrapper w-full py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="team-bg-orb"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 scroll-reveal">
          <h2 className="team-title gradient-text">{t.teamTitle}</h2>
          <p className="team-subtitle max-w-2xl">
            {t.teamSubtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="team-grid grid max-w-5xl mx-auto gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* Rubén */}
          <div className="team-card soft-card hover-lift">
            <a
              href="https://www.linkedin.com/in/ruben-francisco-manrique/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-photo-wrapper"
            >
              <img
                className="team-photo"
                src="https://media.licdn.com/dms/image/v2/C4D03AQFNma6N4gYeJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1648573665311?e=1765411200&v=beta&t=dBktTTL-2k18aYME2TCUwjCvBQDIHfeXzQn5T5fFGZI"
                alt="Rubén Manrique"
              />
            </a>
            <h3 className="team-name">{t.teamRubenName}</h3>
            <p className="team-role">{t.teamRubenRole}</p>
            <p className="team-affiliation">rf.manrique@uniandes.edu.co</p>
          </div>

          {/* Andrea Herrera */}
          <div className="team-card soft-card hover-lift">
            <a
              href="https://www.linkedin.com/in/andrea-herrera-564253/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-photo-wrapper"
            >
              <img
                className="team-photo"
                src="https://media.licdn.com/dms/image/v2/D4E03AQHERM0eQ9ALBA/profile-displayphoto-shrink_800_800/0/1517555013205?e=1765411200&v=beta&t=GDGk2ZUNDwTt12Y4ChbFgdnHaJgBs5p4b1WSZUX7cAY"
                alt="Andrea Herrera"
              />
            </a>
            <h3 className="team-name">{t.teamAndreaHName}</h3>
            <p className="team-role">{t.teamAndreaHRole}</p>
            <p className="team-affiliation">{t.teamAndreaHAffiliation}</p>
          </div>

          {/* Andrea Galindo */}
          <div className="team-card soft-card hover-lift">
            <a
              href="https://www.linkedin.com/in/algalindoc/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-photo-wrapper"
            >
              <img
                className="team-photo"
                src="https://media.licdn.com/dms/image/v2/D4E03AQGM6cS7vIy58Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708783332874?e=1765411200&v=beta&t=OdgcjozaUY8CdzW_a-ZGGl7zYnUagOeTYkil_-nXhlI"
                alt="Andrea Galindo"
              />
            </a>
            <h3 className="team-name">{t.teamAndreaGName}</h3>
            <p className="team-role">{t.teamAndreaGRole}</p>
            <p className="team-affiliation">al.galindo@uniandes.edu.co</p>
          </div>

          {/* Santiago */}
          <div className="team-card soft-card hover-lift">
            <a
              href="https://www.linkedin.com/in/santiagonavarrete19"
              target="_blank"
              rel="noopener noreferrer"
              className="team-photo-wrapper"
            >
              <img
                className="team-photo"
                src="https://media.licdn.com/dms/image/v2/D4E03AQGpwK3Yy14xtQ/profile-displayphoto-shrink_800_800/B4EZSq5ifPHoAc-/0/1738033998196?e=1765411200&v=beta&t=f-ms8H-TEc69dcp5ed4DAZmEiItTP_z_dLpsyfMwFK0"
                alt="Santiago Navarrete"
              />
            </a>
            <h3 className="team-name">{t.teamSantiagoName}</h3>
            <p className="team-role">{t.teamSantiagoRole}</p>
            <p className="team-affiliation">s.navarretev@uniandes.edu.co</p>
          </div>


        </div>
      </div>
    </section>
  );
}
