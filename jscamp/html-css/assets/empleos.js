
// 1. El array JOBS (cópialo entero aquí)
const jobs = [
   {
    id: 1,
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Buscamos Frontend con React y Tailwind para proyectos innovadores. La empresa es una agencia de diseño web con sede en Barcelona. Nos encanta crear experiencias digitales atractivas y de alto rendimiento para nuestros clientes de todo el mundo. El candidato ideal será proactivo, creativo y apasionado por las últimas tendencias en diseño y desarrollo web.",
    requisitos: ["Diseñar, desarrollar y mantener interfaces web", "Colaborar con el equipo de diseño", "Mantener y actualizar sitios web existentes", "Optimizar la velocidad y el rendimiento de los sitios web", "Solucionar problemas y errores en los sitios web"],
    responsabilidades: ["Desarrollo de interfaces web", "Colaborar con el equipo de diseño", "Mantener y actualizar sitios web existentes", "Optimizar la velocidad y el rendimiento de los sitios web", "Solucionar problemas y errores en los sitios web"],
  },
  {
    id: 2,
    title: "Analista de Datos",
    company: "Fintech Solutions",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Análisis de datos con Python y SQL. Trabajarás con grandes conjuntos de datos financieros para identificar tendencias y riesgos, apoyando la toma de decisiones estratégicas.",
    requisitos: ["Analizar grandes conjuntos de datos", "Identificar tendencias y riesgos", "Apoyar la toma de decisiones estratégicas"],
    responsabilidades: ["Recopilar, limpiar y procesar grandes conjuntos de datos", "Desarrollar modelos predictivos y algoritmos de machine learning", "Crear visualizaciones y dashboards para comunicar hallazgos", "Colaborar con equipos de producto", "Diseñar y ejecutar experimentos"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Cloud Native",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Infraestructura en AWS y CI/CD. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Automatización de procesos de despliegue", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    
  },
  {
    id: 4,
    title: "Desarrollador movil",
    company: "App Studio",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Desarrollo de apps con React Native. Participarás en el desarrollo de una aplicación móvil para iOS y Android. Trabajaremos con metodologías ágiles y herramientas modernas para crear una experiencia de usuario excepcional.",
    requisitos: ["Desarrollo de apps con React Native", "Desarrollo de aplicaciones móviles", "Desarrollo de aplicaciones para iOS y Android"],
    responsabilidades: ["Desarrollo de apps con React Native", "Desarrollo de aplicaciones móviles", "Desarrollo de aplicaciones para iOS y Android"],
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "mid",
    description: "Maquetación con HTML/CSS y JavaScript. Serás parte de un equipo ágil encargado de transformar diseños en interfaces web funcionales y atractivas.", 
    requisitos: ["Maquetación con HTML/CSS y JavaScript", "Transformación de diseños en interfaces web funcionales y atractivas"],
    responsabilidades: ["Maquetación con HTML/CSS y JavaScript", "Transformación de diseños en interfaces web funcionales y atractivas"],
  },
  {
    id: 6,
    title: "Analista de Datos",
    company: "Retail Metrics",
    location: "presencial",
    tipoContrato: "por proyecto",
    experiencia: "junior",
    description: "Dashboards con Power BI. Buscamos una persona proactiva y detallista para analizar datos de ventas y generar informes visuales que ayuden a optimizar nuestras estrategias comerciales."
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "Tech Startup",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Kubernetes y Docker. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Kubernetes y Docker", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Kubernetes y Docker", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 8,
    title: "Desarrollador movil",
    company: "Game Studio",
    location: "remoto",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Desarrollo de juegos con Unity. Serás parte de un equipo ágil encargado de transformar diseños en interfaces web funcionales y atractivas.",
    requisitos: ["Desarrollo de juegos con Unity", "Transformación de diseños en interfaces web funcionales y atractivas"],
    responsabilidades: ["Desarrollo de juegos con Unity", "Transformación de diseños en interfaces web funcionales y atractivas"],
  },
  {
    id: 9,
    title: "Frontend Developer",
    company: "Startup Hub",
    location: "hibrido",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "Vue.js y Tailwind. Serás parte de un equipo ágil encargado de transformar diseños en interfaces web funcionales y atractivas.",
    requisitos: ["Vue.js y Tailwind", "Transformación de diseños en interfaces web funcionales y atractivas"],
    responsabilidades: ["Vue.js y Tailwind", "Transformación de diseños en interfaces web funcionales y atractivas"],
  },
  {
    id: 10,
    title: "Analista de Datos",
    company: "Analytics Corp",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Machine Learning con Python. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 11,
    title: "DevOps Engineer",
    company: "Cloud Services",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Terraform y Ansible. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Terraform y Ansible", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Terraform y Ansible", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 12,
    title: "Desarrollador movil",
    company: "Travel App",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Desarrollo nativo en Kotlin. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Desarrollo nativo en Kotlin", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollo nativo en Kotlin", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 13,
    title: "Frontend Developer",
    company: "Marketing SaaS",
    location: "presencial",
    tipoContrato: "por proyecto",
    experiencia: "mid",
    description: "Next.js y TypeScript. Serás parte de un equipo ágil encargado de transformar diseños en interfaces web funcionales y atractivas.",
    requisitos: ["Next.js y TypeScript", "Transformación de diseños en interfaces web funcionales y atractivas"],
    responsabilidades: ["Next.js y TypeScript", "Transformación de diseños en interfaces web funcionales y atractivas"],
  },
  {
    id: 14,
    title: "Analista de Datos",
    company: "Data Corp",
    location: "hibrido",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "ETL con Python. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Analizar datos", "Interpretar datos", "Crear visualizaciones", "Generar informes", "Comunicar hallazgos a stakeholders"],
    responsabilidades: ["Analizar datos", "Interpretar datos", "Crear visualizaciones", "Generar informes", "Comunicar hallazgos a stakeholders"],
  },
  {
    id: 15,
    title: "DevOps Engineer",
    company: "Secure Tech",
    location: "remoto",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Seguridad en la nube. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Seguridad en la nube", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Implementar medidas de seguridad", "Supervisar la infraestructura en la nube", "Gestionar procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 16,
    title: "Desarrollador movil",
    company: "Health App",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Flutter multiplataforma. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Flutter multiplataforma", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones multiplataforma", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 17,
    title: "Frontend Developer",
    company: "E-commerce Inc",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Angular y NgRx. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Angular y NgRx", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con Angular y NgRx", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 18,
    title: "Analista de Datos",
    company: "Bank Security",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "SQL avanzado y reporting. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["SQL avanzado y reporting", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Analizar datos", "Interpretar datos", "Crear visualizaciones", "Generar informes", "Comunicar hallazgos a stakeholders"],
  },
  {
    id: 19,
    title: "DevOps Engineer",
    company: "Software Factory",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "GitHub Actions y monitoreo. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["GitHub Actions y monitoreo", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["GitHub Actions y monitoreo", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 20,
    title: "Desarrollador movil",
    company: "Social Network",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "SwiftUI para iOS. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["SwiftUI para iOS", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con SwiftUI", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 21,
    title: "Frontend Developer",
    company: "Design Studio",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Figma a código con CSS puro. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Figma a código con CSS puro", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con Figma", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 22,
    title: "Analista de Datos",
    company: "Logistics Tech",
    location: "remoto",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Big Data con Spark. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Big Data con Spark", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con Big Data", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 23,
    title: "DevOps Engineer",
    company: "AI Lab",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "MLOps y despliegue de modelos. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["MLOps y despliegue de modelos", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con MLOps", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 24,
    title: "Desarrollador movil",
    company: "Music App",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "Desarrollo con Flutter. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.", 
    requisitos: ["Desarrollo con Flutter", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con Flutter", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 25,
    title: "Frontend Developer",
    company: "Real Estate Tech",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Mapas interactivos con Leaflet. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Mapas interactivos con Leaflet", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con Leaflet", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 26,
    title: "Analista de Datos",
    company: "Insurance Co",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Modelos predictivos de riesgo. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Modelos predictivos de riesgo", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar modelos predictivos de riesgo", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 27,
    title: "DevOps Engineer",
    company: "Streaming Platform",
    location: "presencial",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Escalabilidad y CDN. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Escalabilidad y CDN", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar con escalabilidad y CDN", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 28,
    title: "Desarrollador movil",
    company: "Fintech App",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "React Native y pasarelas de pago. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["React Native y pasarelas de pago", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar aplicaciones con React Native", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 29,
    title: "Frontend Developer",
    company: "Education Tech",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "senior",
    description: "Accesibilidad web y rendimiento. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Accesibilidad web y rendimiento", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar con accesibilidad web y rendimiento", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  },
  {
    id: 30,
    title: "Analista de Datos",
    company: "Consulting Group",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Visualización de datos con Tableau. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones.",
    requisitos: ["Visualización de datos con Tableau", "Automatización de infraestructuras", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
    responsabilidades: ["Desarrollar con visualización de datos", "Mantener la infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones", "Procesos de despliegue", "Mantenimiento de infraestructura en la nube", "Asegurar la disponibilidad y escalabilidad de las aplicaciones"],
  }
];

const filterTechs = document.querySelector("#filter-techs");
const filterUbicacion = document.querySelector("#filter-ubicacion");
const filterTipoContrato = document.querySelector("#filter-tipo-contrato");
const filterExperiencia = document.querySelector("#filter-experiencia");
const container = document.querySelector("#results-container");
const resultsCount = document.querySelector("#results-count");

// ✅ EVENT LISTENER DELEGADO (UNA SOLA VEZ)
container.addEventListener("click", (e) => {
  const button = e.target.closest(".btn-blue-apply-job");
  if (!button) return;
  const jobId = button.dataset.id;
  window.location.href = `aplicar.html?id=${jobId}`;
});

function filtrar() {
  const tech = filterTechs.value.toLowerCase();
  const ubicacion = filterUbicacion.value.toLowerCase();
  const experiencia = filterExperiencia.value.toLowerCase();
  const tipoContrato = filterTipoContrato.value.toLowerCase();

  const filtrados = jobs.filter(job => {
    const matchTech = tech === "" || job.title.toLowerCase().includes(tech);
    const matchUbicacion = ubicacion === "" || job.location.toLowerCase().includes(ubicacion);
    const matchExperiencia = experiencia === "" || job.experiencia.toLowerCase().includes(experiencia);
    const matchTipoContrato = tipoContrato === "" || job.tipoContrato.toLowerCase().includes(tipoContrato);
    return matchTech && matchUbicacion && matchExperiencia && matchTipoContrato;
  });

  resultsCount.textContent = `Mostrando ${filtrados.length} resultados`;
  container.innerHTML = "";

  filtrados.forEach(job => {
    const card = document.createElement("article");
    card.classList.add("results-card");

    card.innerHTML = `
      <div class="results-card-content">
        <h4 class="results-card-title">${job.title}</h4>
        <div>
          <button class="btn-blue-apply-job" data-id="${job.id}" type="button">Aplicar</button>
        </div>
      </div>
      <div class="results-card-content">
        <h5 class="results-card-subtitle">
          ${job.company} | ${job.location} | ${job.tipoContrato} | ${job.experiencia}
        </h5>
      </div>
      <p class="results-card-description">
        ${job.description}
      </p>
    `;

    container.appendChild(card);
  });
}

console.log("filterTechs:", filterTechs);
console.log("filterUbicacion:", filterUbicacion);
console.log("filterExperiencia:", filterExperiencia);
console.log("filterTipoContrato:", filterTipoContrato);

filterTechs.addEventListener("change", filtrar);
filterUbicacion.addEventListener("change", filtrar);
filterExperiencia.addEventListener("change", filtrar);
filterTipoContrato.addEventListener("change", filtrar);

// 👇 Ejecuta la primera vez para mostrar todos los jobs
filtrar();