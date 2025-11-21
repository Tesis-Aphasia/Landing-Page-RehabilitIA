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
import aphasiaImage from "./assets/img2.png";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* --- AFASIA (usamos Section genérico) --- */}
      <Section
        id="what-is-aphasia"
        title="¿Qué es la afasia?"
        text="La afasia es un trastorno adquirido del lenguaje causado por daño cerebral, generalmente después de un accidente cerebrovascular. Afecta la capacidad para hablar, comprender, leer y escribir, sin que necesariamente se alteren la memoria u otras funciones cognitivas. Dependiendo de la zona lesionada, las personas pueden hablar con fluidez pero con poco sentido, o tener un habla muy limitada aunque con buena comprensión."
        img={aphasiaImage}
        imgAlt="Ilustración del cerebro con áreas del lenguaje destacadas"
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
