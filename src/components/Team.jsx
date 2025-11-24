import React from "react";
import "../styles/Team.css";

export default function Team() {
  return (
    <section
      id="team"
      className="team-wrapper w-full py-16 lg:py-28 relative overflow-hidden"
    >
      <div className="team-bg-orb"></div>

      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 scroll-reveal">
          <h2 className="team-title gradient-text">Nuestro Equipo – Investigadores</h2>
          <p className="team-subtitle max-w-2xl">
            RehabilitIA es desarrollado por un equipo interdisciplinario de la
            Universidad de los Andes, integrando ingeniería, diseño centrado en el
            usuario e investigación en tecnologías para la salud.
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
            <h3 className="team-name">Prof. Rubén Manrique</h3>
            <p className="team-role">Lead Researcher</p>
            <p className="team-affiliation">rf.manrique@uniandes.edu.co</p>
          </div>

          {/* Andrea Herrera */}
          <div className="team-card glass hover-glow">
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
            <h3 className="team-name">Prof. Andrea Herrera</h3>
            <p className="team-role">Faculty Advisor</p>
            <p className="team-affiliation">Universidad de los Andes</p>
          </div>

          {/* Andrea Galindo */}
          <div className="team-card glass hover-glow">
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
            <h3 className="team-name">Andrea Galindo</h3>
            <p className="team-role">Researcher</p>
            <p className="team-affiliation">al.galindo@uniandes.edu.co</p>
          </div>

          {/* Santiago */}
          <div className="team-card glass hover-glow">
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
            <h3 className="team-name">Santiago Navarrete</h3>
            <p className="team-role">Researcher</p>
            <p className="team-affiliation">s.navarretev@uniandes.edu.co</p>
          </div>


        </div>
      </div>
    </section>
  );
}
