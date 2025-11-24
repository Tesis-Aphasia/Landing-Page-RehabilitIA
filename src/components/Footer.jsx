import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© 2025 RehabilitIA — {t.footerRights}</p>

        <p className="footer-text">{t.footerUniversity}</p>

        <p className="footer-text">
          {t.footerRecognition}
        </p>

        <p className="footer-text">
          {t.footerLegalEntity}
        </p>

        <p className="footer-text">
          {t.footerAddress}
        </p>

        <p className="footer-text">
          <a
            href="https://sistemas.uniandes.edu.co/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {t.footerDepartment}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
