import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Therapies from "./components/Therapies";
import Technology from "./components/Technology";
import MobileApp from "./components/MobileApp";
import WebPlatform from "./components/WebPlatform";
import Timeline from "./components/Timeline";
import Architecture from "./components/Architecture";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* --- AFASIA (usamos Section genérico) --- */}
      <Section
        id="what-is-aphasia"
        title="¿Qué es la Afasia?"
        text="La afasia es un trastorno adquirido del lenguaje que afecta la capacidad para hablar, entender, leer y escribir. Es causada usualmente por un accidente cerebrovascular y representa un desafío profundo para pacientes y familias. Nuestro proyecto nace para acompañar esa rehabilitación con tecnología accesible."
        img="https://lh3.googleusercontent.com/aida-public/AB6AXuBpu8lxg9UgoFqWpOvffmO0-NdB0JlHIdNMgEapR0bkkMMkNMIh-4WYWAfMdtcJMQmefaVSvI0Q6ENF2SMKM42gTKt9p4hZwfpe45I2aY76NMosljVTpUttXOJzXt9z8ZwGCADBNPEz7w_crudCNpA0iNPb_PnuKRVnE23RIZx7oNfu0gse-eR8uRqFgTVpMbJZUDjVNPFJg_jFGcy-ZSPnT1tVH8qHldjyOLSGPqKiQqq6fVVuK5PlQ-T1CD49ZTPsuf1pCekfAg"
        imgAlt="Áreas del lenguaje en el cerebro"
        background="bg-brand-gray-warm dark:bg-background-dark/50"
      />

      {/* --- TERAPIAS --- */}
      <Therapies />

      {/* --- TECNOLOGÍA --- */}
      <Technology />

      {/* --- APP MÓVIL --- */}
      <MobileApp />

      {/* --- PLATAFORMA WEB TERAPEUTAS --- */}
      <WebPlatform />

      {/* --- LÍNEA DE TIEMPO --- */}
      <Timeline />

      {/* --- ARQUITECTURA --- */}
      <Architecture />

      {/* --- EQUIPO --- */}
      <Team />

      {/* --- FOOTER --- */}
      <Footer />
    </>
  );
}

export default App;
