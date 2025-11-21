import React from "react";
import "../styles/Team.css";

export default function Team() {
  return (
    <section
      id="team"
      className="team-wrapper w-full py-12 md:py-24 bg-brand-gray-warm dark:bg-background-dark/50 rounded-xl"
    >
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <h2 className="team-title">Nuestro Equipo – Investigadores</h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Member 1 */}
          <div className="team-card">
            <img
              className="team-photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxdlcHM05YMIw6CjwU2aKhscm-Xm-st1f3u3OBRomW8fqpLHrEksdHhvYXpErr8BS7AA2-SzjWDHrNnC0ERLHbPgeAUdtZp398tiYHEVy8k5S0VtPUgkiQ7rEBcp4UTZPbq1H8MCnKpRkQ8mWeRLRABaT_FnRkynRmkOAOxul1JE6vPKMvujNVCqeOrK67oo4IXnffNR1ek2ksLJX8ZgyxvBc5anc46eXutm2liQVJ29m--_Q2ylmNONH1SF6dPSA858dpN5AwNQ"
              alt="Investigador 1"
            />
            <h3 className="team-name">Juan Pérez</h3>
            <p className="team-role">Researcher & Developer</p>
            <p className="team-affiliation">Universidad de los Andes</p>
          </div>

          {/* Member 2 */}
          <div className="team-card">
            <img
              className="team-photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl9SJbZt13-C85tRwpPPFfUIrnOVtkFXEKTVTnHevIYHnCoFqTzhxckaAhYCT189Tds9Y7gC8iwjCHweRVLr3sZDLnSGr4iJj2Rkg-uEfCjtuuFXWs56ktoUTRqN4xyxJUn_iFgCjkGHdT3XBY2bwd7kZo9JVY3xC6f2RMTsJlmttyscJcV6IOBWV1rhBHV8ZMrMd_89V3H-3ebp5S3Et6699rRPXk128En-d2kDqQRAv46LMQx673GNwdgi7ckhlsycfOiOl11g"
              alt="Investigadora 2"
            />
            <h3 className="team-name">María García</h3>
            <p className="team-role">Researcher & Developer</p>
            <p className="team-affiliation">Universidad de los Andes</p>
          </div>

          {/* Member 3 */}
          <div className="team-card">
            <img
              className="team-photo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANL697Pd4dZdyi8rnE9W5DBZBOXMS8MyNhZJsgjfcpZQZq3zm9-P8-Ep9O7FE6z6RU6nvKhRs0k-LSL6O5LDEaiHTT0bVnI7pgMkNHmd-geNR5MKWgeJ7IkQy94Va4-LgwMxshmcMynCOWDjAWmU7-n9gSzmJebHUypriH86aKcGILWlB-Vi11H-XX8SZd3GMQUNpmNcfwhfhll71K4gCuVyXTL1iyymdQjQvbgd_vgI3S-GXjgqkk2qFbVeP86CTtaH-2uk7JQw"
              alt="Investigador 3"
            />
            <h3 className="team-name">Carlos Rodríguez</h3>
            <p className="team-role">Researcher & Developer</p>
            <p className="team-affiliation">Universidad de los Andes</p>
          </div>

        </div>
      </div>
    </section>
  );
}
