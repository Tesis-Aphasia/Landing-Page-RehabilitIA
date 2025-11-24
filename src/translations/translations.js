export const translations = {
  es: {
    // Navbar
    navHome: "Inicio",
    navAbout: "Sobre Nosotros",
    navTech: "Tecnología",
    navTeam: "Equipo",

    // Hero
    heroTitle: "RehabilitIA: Terapia de Lenguaje Asistida por IA",
    heroSubtitle: "Plataforma web y móvil para la rehabilitación personalizada de la afasia en pacientes hispanohablantes, combinando modelos de lenguaje avanzados y flujos agentivos para generar ejercicios adaptativos, culturalmente apropiados y basados en evidencia.",

    // Aphasia Section
    aphasiaTitle: "¿Qué es la afasia?",
    aphasiaText: "La afasia es un trastorno adquirido del lenguaje causado por daño cerebral, generalmente después de un accidente cerebrovascular. Afecta la capacidad para hablar, comprender, leer y escribir, sin que necesariamente se alteren la memoria u otras funciones cognitivas.",

    // Therapies
    therapiesTitle: "Terapias Basadas en Evidencia",
    therapiesSubtitle: "Implementamos terapias validadas científicamente y adaptadas para hispanohablantes",
    vnestTitle: "VNeST",
    vnestSubtitle: "Verb Network Strengthening Treatment",
    vnestDescription: "Terapia de rehabilitación del lenguaje diseñada para personas con afasia que coloca los verbos en el centro de la terapia, fortaleciendo las conexiones entre verbos y sus roles temáticos (agentes, objetos y adjuntos).",
    vnestLearnMore: "Conocer más",
    srTitle: "Spaced Retrieval (SR)",
    srSubtitle: "Entrenamiento de Recuperación Espaciada",
    srDescription: "Intervención basada en memoria diseñada para mejorar la retención a largo plazo de información específica, pidiendo repetidamente a los pacientes que recuerden información objetivo en intervalos progresivamente más largos.",
    srLearnMore: "Conocer más",

    // Technology
    techTitle: "Tecnología Innovadora y Centrada en el Humano",
    techSubtitle: "Combinamos inteligencia artificial de vanguardia con un enfoque amable y de apoyo para crear tecnología que realmente comprende y se adapta a tus necesidades.",
    techSectionTitle: "Tecnologías de IA",
    llmTitle: "Modelos de Lenguaje Grande",
    llmDescription: "Generan contenido terapéutico adaptado al perfil del paciente",
    agentsTitle: "Agentes Inteligentes",
    agentsDescription: "Estructuran ejercicios y validan coherencia clínica",
    autoGenTitle: "Generación Automática",
    autoGenDescription: "Material dinámico que evoluciona según el progreso",
    techLearnMore: "Conocer más sobre las tecnologías",

    // Modals
    closeModal: "Cerrar",

    // VNeST Modal
    vnestModalTitle: "VNeST - Verb Network Strengthening Treatment",
    vnestModalContent: `
      <h3>¿Qué es VNeST?</h3>
      <p>Verb Network Strengthening Treatment (VNeST) es un enfoque de rehabilitación del lenguaje diseñado para personas con afasia, particularmente aquellas con variantes anómicas o no fluentes. A diferencia de las intervenciones tradicionales centradas en sustantivos, VNeST coloca los verbos en el centro de la terapia, bajo el supuesto de que los verbos activan redes semánticas más amplias y son esenciales para la construcción de oraciones.</p>
      
      <h3>¿Cómo funciona?</h3>
      <p>La terapia se desarrolla típicamente a través de fases estructuradas:</p>
      <ul>
        <li><strong>Fase 1:</strong> Los pacientes seleccionan un verbo central y generan combinaciones agente-objeto (ej: "el piloto conduce el avión" o "el granjero conduce el tractor")</li>
        <li><strong>Fase 2:</strong> Se expanden estas oraciones agregando detalles contextuales como dónde, por qué o cuándo (ej: "el piloto conduce el avión en el aeropuerto todos los días")</li>
        <li><strong>Fase 3:</strong> Los pacientes son desafiados con juicios de plausibilidad semántica, decidiendo si las oraciones generadas son significativas o no</li>
        <li><strong>Fase 4:</strong> Se refuerza la recuperación de verbos pidiendo explícitamente al paciente que identifique el verbo objetivo practicado durante la sesión</li>
      </ul>
      
      <h3>Beneficios</h3>
      <ul>
        <li>Mejora tanto la producción como la comprensión del lenguaje</li>
        <li>Las mejoras se extienden más allá de los elementos entrenados al habla espontánea</li>
        <li>Fortalece las conexiones entre verbos y roles temáticos</li>
        <li>Promueve comunicación más funcional y generalizable</li>
        <li>Puede implementarse mediante herramientas tecnológicas (web/móvil) para práctica en casa</li>
      </ul>
    `,

    // SR Modal
    srModalTitle: "Spaced Retrieval Training - Entrenamiento de Recuperación Espaciada",
    srModalContent: `
      <h3>¿Qué es Spaced Retrieval Training?</h3>
      <p>Spaced Retrieval Training (SRT) es una intervención basada en memoria diseñada para mejorar la retención a largo plazo de información específica en personas con deterioro cognitivo o afasia. A diferencia de las terapias centradas en la comprensión o producción del lenguaje, SRT aprovecha el aprendizaje implícito al pedir repetidamente a los pacientes que recuerden información objetivo en intervalos progresivamente más largos.</p>
      
      <h3>¿Cómo funciona?</h3>
      <p>La técnica funciona de la siguiente manera:</p>
      <ul>
        <li>Se presenta información al paciente</li>
        <li>Se le pide que la recuerde después de intervalos específicos (ej: 30 segundos, 1 minuto, 2 minutos)</li>
        <li>Si la respuesta es correcta, el intervalo aumenta</li>
        <li>Si es incorrecta, la información se reintroduce y el intervalo se acorta</li>
      </ul>
      
      <h3>Aplicaciones</h3>
      <p>Esta técnica es particularmente efectiva para ayudar a los pacientes a recordar:</p>
      <ul>
        <li>Nombres de personas importantes</li>
        <li>Instrucciones y rutinas diarias</li>
        <li>Ubicaciones y lugares</li>
        <li>Estrategias de comunicación</li>
      </ul>
      
      <h3>Beneficios</h3>
      <ul>
        <li>Mejora la memoria funcional a largo plazo</li>
        <li>Ha demostrado éxito en entornos clínicos</li>
        <li>Puede implementarse en herramientas digitales</li>
        <li>Aprovecha el aprendizaje implícito</li>
      </ul>
    `,

    // Tech Modal
    techModalTitle: "Tecnologías de IA para Rehabilitación",
    techModalContent: `
      <h3>Modelos de Lenguaje Grande (LLM)</h3>
      <p>Utilizamos modelos de lenguaje avanzados para generar contenido terapéutico personalizado que se adapta al nivel y necesidades de cada paciente. Estos modelos son capaces de crear ejercicios contextualmente apropiados y culturalmente relevantes para hispanohablantes.</p>
      
      <h3>Agentes Inteligentes</h3>
      <p>Nuestros agentes de IA trabajan en conjunto para:</p>
      <ul>
        <li>Estructurar ejercicios terapéuticos coherentes y clínicamente válidos</li>
        <li>Validar la coherencia clínica del contenido generado</li>
        <li>Adaptar la dificultad según el desempeño del paciente</li>
        <li>Personalizar el contenido culturalmente para el contexto hispanohablante</li>
        <li>Mantener la continuidad terapéutica entre sesiones</li>
      </ul>
      
      <h3>Generación Automática de Contenido</h3>
      <p>El sistema genera automáticamente:</p>
      <ul>
        <li>Ejercicios adaptados al progreso individual del paciente</li>
        <li>Material culturalmente apropiado y contextualizado</li>
        <li>Contenido variado para mantener la motivación y el compromiso</li>
        <li>Retroalimentación personalizada basada en el desempeño</li>
        <li>Secuencias de ejercicios que siguen principios terapéuticos establecidos</li>
      </ul>
      
      <h3>Integración de Tecnologías</h3>
      <p>Estas tres tecnologías trabajan en conjunto para crear una experiencia terapéutica completa, adaptativa y basada en evidencia científica, facilitando tanto la práctica autónoma como el seguimiento por parte de terapeutas profesionales.</p>
    `,
  },
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About Us",
    navTech: "Technology",
    navTeam: "Team",

    // Hero
    heroTitle: "RehabilitIA: AI-Assisted Language Therapy",
    heroSubtitle: "Web and mobile platform for personalized aphasia rehabilitation in Spanish-speaking patients, combining advanced language models and agentic flows to generate adaptive, culturally appropriate, and evidence-based exercises.",

    // Aphasia Section
    aphasiaTitle: "What is Aphasia?",
    aphasiaText: "Aphasia is an acquired language disorder caused by brain damage, usually after a stroke. It affects the ability to speak, understand, read, and write, without necessarily altering memory or other cognitive functions.",

    // Therapies
    therapiesTitle: "Evidence-Based Therapies",
    therapiesSubtitle: "We implement scientifically validated therapies adapted for Spanish speakers",
    vnestTitle: "VNeST",
    vnestSubtitle: "Verb Network Strengthening Treatment",
    vnestDescription: "Language rehabilitation approach designed for individuals with aphasia that places verbs at the center of therapy, strengthening connections between verbs and their thematic roles (agents, objects, and adjuncts).",
    vnestLearnMore: "Learn more",
    srTitle: "Spaced Retrieval (SR)",
    srSubtitle: "Spaced Retrieval Training",
    srDescription: "Memory-based intervention designed to enhance long-term retention of specific information by repeatedly asking patients to recall targeted information over progressively longer intervals.",
    srLearnMore: "Learn more",

    // Technology
    techTitle: "Innovative, Human-Centered Technology",
    techSubtitle: "We blend cutting-edge artificial intelligence with a gentle, supportive approach to create technology that truly understands and adapts to your needs.",
    techSectionTitle: "AI Technologies",
    llmTitle: "Large Language Models",
    llmDescription: "Generate therapeutic content adapted to patient profile",
    agentsTitle: "Intelligent Agents",
    agentsDescription: "Structure exercises and validate clinical coherence",
    autoGenTitle: "Automatic Generation",
    autoGenDescription: "Dynamic material that evolves with progress",
    techLearnMore: "Learn more about technologies",

    // Modals
    closeModal: "Close",

    // VNeST Modal
    vnestModalTitle: "VNeST - Verb Network Strengthening Treatment",
    vnestModalContent: `
      <h3>What is VNeST?</h3>
      <p>Verb Network Strengthening Treatment (VNeST) is a language rehabilitation approach designed for individuals with aphasia, particularly those with anomic or non-fluent variants. Unlike traditional noun-focused interventions, VNeST places verbs at the center of therapy, under the assumption that verbs activate wider semantic networks and are essential for sentence construction.</p>
      
      <h3>How does it work?</h3>
      <p>The therapy typically unfolds through structured phases:</p>
      <ul>
        <li><strong>Phase 1:</strong> Patients select a central verb and generate agent-object combinations (e.g., "the pilot drives the plane" or "the farmer drives the tractor")</li>
        <li><strong>Phase 2:</strong> These sentences are expanded by adding contextual details such as where, why, or when (e.g., "the pilot drives the plane at the airport every day")</li>
        <li><strong>Phase 3:</strong> Patients are challenged with judgments of semantic plausibility, deciding whether newly generated sentences are meaningful or not</li>
        <li><strong>Phase 4:</strong> Verb retrieval is reinforced by explicitly asking the patient to identify the target verb practiced during the session</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Demonstrates positive effects on both production and comprehension of language</li>
        <li>Improvements extend beyond trained items into spontaneous speech</li>
        <li>Strengthens connections between verbs and thematic roles</li>
        <li>Promotes more functional and generalizable communication</li>
        <li>Can be implemented through technological tools (web/mobile) for home practice</li>
      </ul>
    `,

    // SR Modal
    srModalTitle: "Spaced Retrieval Training",
    srModalContent: `
      <h3>What is Spaced Retrieval Training?</h3>
      <p>Spaced Retrieval Training (SRT) is a memory-based intervention designed to enhance long-term retention of specific information in individuals with cognitive impairment or aphasia. Unlike therapies focused on language comprehension or production, SRT leverages implicit learning by repeatedly asking patients to recall targeted information over progressively longer intervals.</p>
      
      <h3>How does it work?</h3>
      <p>The technique works as follows:</p>
      <ul>
        <li>Information is presented to the patient</li>
        <li>They are asked to recall it after specific intervals (e.g., 30 seconds, 1 minute, 2 minutes)</li>
        <li>If the response is correct, the interval increases</li>
        <li>If incorrect, the information is reintroduced and the interval is shortened</li>
      </ul>
      
      <h3>Applications</h3>
      <p>This technique is particularly effective in helping patients remember:</p>
      <ul>
        <li>Names of important people</li>
        <li>Instructions and daily routines</li>
        <li>Locations and places</li>
        <li>Communication strategies</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Improves long-term functional memory</li>
        <li>Has shown success in clinical settings</li>
        <li>Can be implemented in digital tools</li>
        <li>Leverages implicit learning</li>
      </ul>
    `,

    // Tech Modal
    techModalTitle: "AI Technologies for Rehabilitation",
    techModalContent: `
      <h3>Large Language Models (LLM)</h3>
      <p>We use advanced language models to generate personalized therapeutic content that adapts to each patient's level and needs. These models are capable of creating contextually appropriate and culturally relevant exercises for Spanish speakers.</p>
      
      <h3>Intelligent Agents</h3>
      <p>Our AI agents work together to:</p>
      <ul>
        <li>Structure coherent and clinically valid therapeutic exercises</li>
        <li>Validate the clinical coherence of generated content</li>
        <li>Adapt difficulty based on patient performance</li>
        <li>Culturally personalize content for the Spanish-speaking context</li>
        <li>Maintain therapeutic continuity between sessions</li>
      </ul>
      
      <h3>Automatic Content Generation</h3>
      <p>The system automatically generates:</p>
      <ul>
        <li>Exercises adapted to individual patient progress</li>
        <li>Culturally appropriate and contextualized material</li>
        <li>Varied content to maintain motivation and engagement</li>
        <li>Personalized feedback based on performance</li>
        <li>Exercise sequences that follow established therapeutic principles</li>
      </ul>
      
      <h3>Technology Integration</h3>
      <p>These three technologies work together to create a complete, adaptive, and scientifically evidence-based therapeutic experience, facilitating both autonomous practice and monitoring by professional therapists.</p>
    `,
  }
};
