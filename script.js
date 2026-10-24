const LINKS = {
  linkedin: "https://www.linkedin.com/in/stephania-gonzalez-mur-gamedev",
  email: "stephaniagonzalezmur@gmail.com",
  itchio: "https://steff19.itch.io/"
};

function configureLinks() {
  document.querySelectorAll('[data-link="linkedin"]').forEach(a => { a.href = LINKS.linkedin; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
  document.querySelectorAll('[data-link="email"]').forEach(a => { a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(LINKS.email)}`; a.target = "_blank"; a.rel = "noopener noreferrer"; });
  document.querySelectorAll('[data-link="itchio"]').forEach(a => { a.href = LINKS.itchio; a.target = '_blank'; a.rel = 'noopener noreferrer'; });
}

const translations = {
  es: {
    skip:"Saltar al contenido",navProjects:"Proyectos",navAbout:"Sobre mí",navSkills:"Habilidades",navContact:"Contacto",
    eyebrow:"Desarrollo de videojuegos · Unity · C#",heroLine1:"Desarrolladora de videojuegos",heroLine2:"creando experiencias interactivas.",
    heroDescription:"Creo experiencias interactivas mediante la programación de mecánicas de juego, la narrativa interactiva y mi pasión por los videojuegos.",
    viewProjects:"Ver mis proyectos",cvButton:"Ver mi CV",linkedinButton:"Conectemos en LinkedIn ↗",heroMeta1:"Mecánicas de juego e interacción",heroMeta2:"Aprendizaje continuo mediante proyectos",
    profileLabel:"PERFIL DE DESARROLLO",currentlyLearning:"APRENDIENDO Y CRECIENDO",profileNote:"Prototipos, sistemas de juego y experiencias interactivas.",
    selectedWork:"TRABAJO SELECCIONADO",projectsTitle:"Proyectos destacados",projectsIntro:"Proyectos y prototipos donde desarrollo mecánicas, lógica de juego e interacciones.",
    personalProject:"PROYECTO PERSONAL",publishedPlayable:"PROTOTIPO JUGABLE",gameplayMechanics:"Mecánicas de juego",interaction:"Interacción",
    heleniaDescription:"Es una aventura 3D de fantasía oscura con estética low-poly, inspirada en los paisajes y la biodiversidad de Colombia. En este prototipo desarrollé mecánicas de juego, comportamientos de enemigos e interacciones de interfaz para dar vida a una primera sección de la experiencia.",
    projectDetailsButton:"Ver detalles del proyecto ↓",itchLink:"Explorar mi perfil de itch.io",heleniaIntro:"Este prototipo jugable reúne la primera parte del mundo y varias de las mecánicas principales que desarrollé para dar forma a la experiencia.",
    mechanicsHeading:"Mecánicas de juego e IA de enemigos",mechanic1:"Implementé en C# mecánicas para lanzar piedras, distraer enemigos y congelar temporalmente sus rutas de patrulla usando un cristal mágico.",mechanic2:"Programé comportamientos de enemigos con patrullaje y persecución mediante NavMesh.",mechanic3:"Implementé la interacción con llaves para que el jugador pueda avanzar por el entorno.",
    uiHeading:"Diseño e implementación de UI",ui1:"Diseñé wireframes en Figma para organizar cómo se vería y distribuiría la interfaz.",ui2:"Implementé la interfaz con Unity UI Toolkit: personalicé elementos visuales y programé las interacciones en C# para conectarla con la lógica del juego.",
    controllerHeading:"Control del personaje",controller1:"Adapté un Third Person Controller ya existente para ajustarlo a lo que necesitaba el proyecto.",controller2:"Modifiqué el movimiento para bloquearlo durante el diálogo introductorio y evitar entradas de movimiento en ciertas animaciones.",
    assetsHeading:"Integración de recursos",assets1:"Integré modelos 3D, animaciones, materiales, sprites, imágenes, sonidos y sistemas de partículas para construir esta versión jugable.",assets2:"Utilicé recursos de terceros cuando fue necesario y los adapté para que encajaran en la experiencia.",
    roleLabel:"Mi rol:",roleValue:"Desarrolladora de videojuegos generalista",statusLabel:"Estado:",statusValue:"Prototipo jugable de una sección inicial",processButton:"Explorar el proceso de desarrollo ↓",processCaption:"Wireframe de planificación de la interfaz. Las flechas muestran el flujo entre pantallas.",
    aboutEyebrow:"DETRÁS DE LOS PROYECTOS",aboutTitle:"Ideas que se convierten en experiencias",aboutP1:"Soy desarrolladora de videojuegos de Colombia y tecnóloga en Desarrollo de Videojuegos y Entornos Interactivos del SENA. Me encanta programar mecánicas de juego e interfaces de usuario con Unity y C#, así como explorar la narrativa interactiva.",
    aboutP2:"Disfruto transformar ideas en experiencias jugables donde las personas sientan que forman parte de la historia. Me entusiasma aportar a un gran equipo, seguir aprendiendo y crecer junto a él.",aboutHighlight:"Me gusta aprender haciendo: probar una idea, encontrar el problema y mejorar la solución paso a paso.",
    toolbox:"MI CAJA DE HERRAMIENTAS",skillsTitle:"Habilidades en desarrollo",skillsIntro:"Tecnologías que he utilizado en proyectos y áreas que continúo fortaleciendo.",technicalSkills:"Desarrollo de videojuegos",technicalDescription:"Programación y construcción de prototipos interactivos.",workSkills:"Habilidades personales",workDescription:"Habilidades que aplico al resolver problemas y desarrollar proyectos.",
    physicsCollisions:"Física y colisiones",learningTag:"(En aprendizaje)",problemSolving:"Resolución de problemas",persistence:"Perseverancia",analyticalThinking:"Pensamiento analítico",continuousLearning:"Aprendizaje continuo",
    educationLabel:"FORMACIÓN",educationTitle:"Tecnóloga en Desarrollo de Videojuegos y Entornos Interactivos",educationPlace:"SENA · Colombia",trainingLabel:"FORMACIÓN COMPLEMENTARIA",trainingDescription:"Entrenamiento orientado al desarrollo profesional y técnico.",
    contactEyebrow:"HAGAMOS ALGO INTERESANTE",contactTitle:"¡Conectemos!",contactDescription:"Me encanta conectar con personas que comparten el interés por el desarrollo de videojuegos, las ideas creativas y las experiencias interactivas. Estoy abierta a conversar sobre oportunidades laborales, colaboraciones o proyectos.",emailButton:"Escríbeme por correo",contactNote:"También puedes encontrarme en LinkedIn e itch.io.",footerText:"Portafolio de desarrollo de videojuegos · Hecho con curiosidad.",backTop:"Volver arriba ↑",
    cvNoticeEyebrow:"PRÓXIMAMENTE",cvNoticeTitle:"Mi CV estará disponible pronto",cvNoticeText:"Estamos preparando el PDF para que puedas consultarlo y descargarlo desde aquí.",closeButton:"Cerrar"
  },
  en: {
    skip:"Skip to content",navProjects:"Projects",navAbout:"About me",navSkills:"Skills",navContact:"Contact",
    eyebrow:"Game Development · Unity · C#",heroLine1:"Game Developer",heroLine2:"building interactive experiences.",
    heroDescription:"I create interactive experiences through gameplay programming, interactive storytelling, and a passion for games.",
    viewProjects:"View my projects",cvButton:"View CV",linkedinButton:"Connect on LinkedIn ↗",heroMeta1:"Gameplay mechanics and interaction",heroMeta2:"Continuous learning through projects",
    profileLabel:"DEVELOPER PROFILE",currentlyLearning:"LEARNING AND GROWING",profileNote:"Prototypes, game systems, and interactive experiences.",
    selectedWork:"SELECTED WORK",projectsTitle:"Featured projects",projectsIntro:"Projects and prototypes where I develop gameplay mechanics, game logic, and interactions.",
    personalProject:"PERSONAL PROJECT",publishedPlayable:"PLAYABLE PROTOTYPE",gameplayMechanics:"Gameplay mechanics",interaction:"Interaction",
    heleniaDescription:"Helenia is a low-poly 3D dark fantasy adventure inspired by Colombia’s landscapes and biodiversity. In this prototype, I developed gameplay mechanics, enemy behaviors, and UI interactions to bring an early section of the experience to life.",
    projectDetailsButton:"View project details ↓",itchLink:"Explore my itch.io profile",heleniaIntro:"This playable prototype brings together the first part of the world and several core mechanics I developed to shape the experience.",
    mechanicsHeading:"Gameplay Mechanics & Enemy AI",mechanic1:"Implemented C# mechanics for throwing stones to distract enemies and temporarily freeze their patrol routes using a magic crystal.",mechanic2:"Programmed enemy patrol and chase behaviors using NavMesh.",mechanic3:"Implemented key interactions that allow the player to progress through the environment.",
    uiHeading:"UI Design & Implementation",ui1:"Designed wireframes in Figma to plan the interface layout.",ui2:"Implemented the interface using Unity UI Toolkit, customized visual elements, and programmed C# interactions to connect the UI with gameplay logic.",
    controllerHeading:"Player Controller",controller1:"Adapted an existing Third Person Controller to meet the project’s requirements.",controller2:"Modified movement behavior to lock player movement during the introductory dialogue and prevent movement input during certain animations.",
    assetsHeading:"Asset Integration",assets1:"Integrated 3D models, animations, materials, sprites, images, audio, and particle systems to build this playable version.",assets2:"Used third-party resources where needed and adapted them to fit the experience.",
    roleLabel:"My role:",roleValue:"Generalist Game Developer",statusLabel:"Status:",statusValue:"Playable prototype featuring an early section of the game",processButton:"Explore the development process ↓",processCaption:"Interface planning wireframe. Arrows show the flow between screens.",
    aboutEyebrow:"BEHIND THE PROJECTS",aboutTitle:"Ideas turned into experiences",aboutP1:"I’m a game developer from Colombia and a technologist in Video Game and Interactive Environments Development from SENA. I enjoy programming gameplay mechanics and user interfaces with Unity and C#, as well as exploring interactive storytelling.",
    aboutP2:"I enjoy turning ideas into playable experiences where people feel part of the story. I’m excited to contribute to a great team, keep learning, and grow together.",aboutHighlight:"I like learning by doing: testing an idea, finding the problem, and improving the solution step by step.",
    toolbox:"MY TOOLBOX",skillsTitle:"Skills in progress",skillsIntro:"Technologies I’ve used in projects and areas I’m continuing to strengthen.",technicalSkills:"Game Development",technicalDescription:"Programming and building interactive prototypes.",workSkills:"Soft Skills",workDescription:"Skills I apply when solving problems and developing projects.",
    physicsCollisions:"Physics & Collisions",learningTag:"(Currently learning)",problemSolving:"Problem-Solving",persistence:"Persistence",analyticalThinking:"Analytical Thinking",continuousLearning:"Continuous Learning",
    educationLabel:"EDUCATION",educationTitle:"Technologist in Video Game and Interactive Environments Development",educationPlace:"SENA · Colombia",trainingLabel:"ADDITIONAL TRAINING",trainingDescription:"Training focused on professional and technical development.",
    contactEyebrow:"LET’S MAKE SOMETHING INTERESTING",contactTitle:"Let’s connect!",contactDescription:"I enjoy connecting with people who share an interest in game development, creative ideas, and interactive experiences. I’m open to conversations about job opportunities, collaborations, or game projects.",emailButton:"Email me",contactNote:"You can also find me on LinkedIn and itch.io.",footerText:"Game development portfolio · Made with curiosity.",backTop:"Back to top ↑",
    cvNoticeEyebrow:"COMING SOON",cvNoticeTitle:"My CV will be available soon",cvNoticeText:"The PDF is being prepared so you’ll be able to view and download it here.",closeButton:"Close"
  }
};

function setLanguage(language) {
  const lang = translations[language] ? language : "es";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  try { localStorage.setItem("portfolio-language", lang); } catch (_) {}
}

document.querySelectorAll(".lang-btn").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
document.querySelectorAll(".detail-toggle, .process-toggle").forEach((button) => button.addEventListener("click", () => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  const opening = panel.hidden;
  panel.hidden = !opening;
  button.setAttribute("aria-expanded", String(opening));
  const lang = document.documentElement.lang === "en" ? "en" : "es";
  if (button.classList.contains("detail-toggle")) button.textContent = opening ? (lang === "en" ? "Hide project details ↑" : "Ocultar detalles del proyecto ↑") : translations[lang].projectDetailsButton;
  else button.textContent = opening ? (lang === "en" ? "Hide development process ↑" : "Ocultar proceso de desarrollo ↑") : translations[lang].processButton;
}));
const cvNotice = document.getElementById("cvNotice");
document.getElementById("cvButton").addEventListener("click", () => { cvNotice.hidden = false; cvNotice.querySelector("button").focus(); });
document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", () => { cvNotice.hidden = true; document.getElementById("cvButton").focus(); }));
cvNotice.addEventListener("click", e => { if (e.target === cvNotice) cvNotice.hidden = true; });
const imageModal = document.getElementById("imageModal");
document.querySelector(".wireframe-open").addEventListener("click", () => { imageModal.hidden = false; imageModal.querySelector("img").focus(); });
document.querySelector("[data-close-image]").addEventListener("click", () => { imageModal.hidden = true; });
imageModal.addEventListener("click", e => { if (e.target === imageModal) imageModal.hidden = true; });
document.addEventListener("keydown", e => { if (e.key === "Escape") { cvNotice.hidden = true; imageModal.hidden = true; } });
configureLinks();
document.getElementById("year").textContent = new Date().getFullYear();
let savedLanguage = "es"; try { savedLanguage = localStorage.getItem("portfolio-language") || "es"; } catch (_) {}
setLanguage(savedLanguage);
