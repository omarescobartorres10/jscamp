
//Clase de filtros - bootcamp


// const btnBlueApplyJob = document.querySelectorAll(".btn-blue-apply-job");

// btnBlueApplyJob.forEach(btn => {
//     btn.addEventListener("click", function () {
//         btn.textContent = "¡Aplicado!"; /*Cambio de texto al presionar el botón*/
//         btn.disabled = true; /*Desactivar el botón al presionarlo*/
//         btn.style.opacity = "0.5"; /*Cambia el color del botón al presionarlo*/
//         btn.style.cursor = "not-allowed"; /*Cambia el cursor al presionarlo*/
//     });
// });

// const applyJobBtn = document.querySelector(".results-section");

// applyJobBtn?.addEventListener("click", function (event) {
//   const element = event.target

//    if(element?.classList?.contains("btn-blue-apply-job")) {
//     element.textContent = "¡Aplicado!";
//     element.disabled = true;
//     element.style.opacity = "0.5";
//     element.style.cursor = "not-allowed";

//    }
// });

// ---Inicio de filtros---
// Los inputs se seleccionan por su id para facilitar su manipulación
// const resultsSection = document.querySelectorAll(".results-card");
// const filterTechs = document.querySelector("#filter-techs");
// const filterUbicacion = document.querySelector("#filter-ubicacion");
// const filterTipoContrato = document.querySelector("#filter-tipo-contrato");
// const filterExperiencia = document.querySelector("#filter-experiencia");

// function filtrar() { //creamos una función que se va a ejecutar cada vez que cambie el valor de los filtros
  
// //los resultados de los inputs se convierten a minúsculas para facilitar su manipulación
//   const filterValueTechs = filterTechs.value.toLowerCase(); 
//   const filterValueUbicacion = filterUbicacion.value.toLowerCase();
//   const filterValueTipoContrato = filterTipoContrato.value.toLowerCase();
//   const filterValueExperiencia = filterExperiencia.value.toLowerCase();

//   resultsSection.forEach(card => { //bucle que recorre las cards del html 
//     const title = card 
//       .querySelector(".results-card-title") //seleccionamos el titulo de la card
//       .textContent //obtenemos el texto del titulo
//       .toLowerCase(); //convertimos el texto a minúsculas


//       const ubicacion = card 
//       .querySelector(".results-card-subtitle") //seleccionamos el subtitulo de la card
//       .textContent //obtenemos el texto del subtitulo
//       .toLowerCase(); //convertimos el texto a minúsculas

//       const tipoContrato = card 
//       .querySelector(".results-card-subtitle") //seleccionamos el subtitulo de la card
//       .textContent //obtenemos el texto del subtitulo
//       .toLowerCase(); //convertimos el texto a minúsculas

//       const experiencia = card 
//       .querySelector(".results-card-subtitle") //seleccionamos el subtitulo de la card
//       .textContent //obtenemos el texto del subtitulo
//       .toLowerCase(); //convertimos el texto a minúsculas

      
//       const shouldShow = //condición que se cumple si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío
//        (filterValueTechs === "" || title.includes(filterValueTechs)) && //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío 
//        (filterValueUbicacion === "" || ubicacion.includes(filterValueUbicacion)) && //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío
//        (filterValueTipoContrato === "" || tipoContrato.includes(filterValueTipoContrato)) && //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío
//        (filterValueExperiencia === "" || experiencia.includes(filterValueExperiencia)); //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío

//       card.style.display = shouldShow ? "" : "none"; //muestra la card si se cumple la condición

    
//   });
// }

// filterTechs.addEventListener("change", filtrar);
// filterUbicacion.addEventListener("change", filtrar);
// filterTipoContrato.addEventListener("change", filtrar);
// filterExperiencia.addEventListener("change", filtrar);




//Creacion del objeto jobs

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Creative Agency",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Buscamos Frontend con React y Tailwind para proyectos innovadores. La empresa es una agencia de diseño web con sede en Barcelona. Nos encanta crear experiencias digitales atractivas y de alto rendimiento para nuestros clientes de todo el mundo. El candidato ideal será proactivo, creativo y apasionado por las últimas tendencias en diseño y desarrollo web."
  },
  {
    id: 2,
    title: "Analista de Datos",
    company: "Fintech Solutions",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Análisis de datos con Python y SQL. Trabajarás con grandes conjuntos de datos financieros para identificar tendencias y riesgos, apoyando la toma de decisiones estratégicas."
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Cloud Native",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Infraestructura en AWS y CI/CD. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 4,
    title: "Desarrollador movil",
    company: "App Studio",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Desarrollo de apps con React Native. Participarás en el desarrollo de una aplicación móvil para iOS y Android. Trabajaremos con metodologías ágiles y herramientas modernas para crear una experiencia de usuario excepcional."
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "mid",
    description: "Maquetación con HTML/CSS y JavaScript. Serás parte de un equipo ágil encargado de transformar diseños en interfaces web funcionales y atractivas."
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
    description: "Kubernetes y Docker. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 8,
    title: "Desarrollador movil",
    company: "Game Studio",
    location: "remoto",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Desarrollo de juegos con Unity. Serás parte de un equipo ágil encargado de transformar diseños en interfaces web funcionales y atractivas."
  },
  {
    id: 9,
    title: "Frontend Developer",
    company: "Startup Hub",
    location: "hibrido",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "Vue.js y Tailwind. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
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
    description: "Terraform y Ansible. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 12,
    title: "Desarrollador movil",
    company: "Travel App",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Desarrollo nativo en Kotlin. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 13,
    title: "Frontend Developer",
    company: "Marketing SaaS",
    location: "presencial",
    tipoContrato: "por proyecto",
    experiencia: "mid",
    description: "Next.js y TypeScript. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 14,
    title: "Analista de Datos",
    company: "Data Corp",
    location: "hibrido",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "ETL con Python. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 15,
    title: "DevOps Engineer",
    company: "Secure Tech",
    location: "remoto",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Seguridad en la nube. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 16,
    title: "Desarrollador movil",
    company: "Health App",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Flutter multiplataforma. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 17,
    title: "Frontend Developer",
    company: "E-commerce Inc",
    location: "remoto",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Angular y NgRx. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 18,
    title: "Analista de Datos",
    company: "Bank Security",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "SQL avanzado y reporting. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 19,
    title: "DevOps Engineer",
    company: "Software Factory",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "GitHub Actions y monitoreo. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 20,
    title: "Desarrollador movil",
    company: "Social Network",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "SwiftUI para iOS. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 21,
    title: "Frontend Developer",
    company: "Design Studio",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Figma a código con CSS puro. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 22,
    title: "Analista de Datos",
    company: "Logistics Tech",
    location: "remoto",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Big Data con Spark. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 23,
    title: "DevOps Engineer",
    company: "AI Lab",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "MLOps y despliegue de modelos. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 24,
    title: "Desarrollador movil",
    company: "Music App",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "junior",
    description: "Desarrollo con Flutter. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 25,
    title: "Frontend Developer",
    company: "Real Estate Tech",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "Mapas interactivos con Leaflet. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 26,
    title: "Analista de Datos",
    company: "Insurance Co",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "senior",
    description: "Modelos predictivos de riesgo. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 27,
    title: "DevOps Engineer",
    company: "Streaming Platform",
    location: "presencial",
    tipoContrato: "por proyecto",
    experiencia: "senior",
    description: "Escalabilidad y CDN. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 28,
    title: "Desarrollador movil",
    company: "Fintech App",
    location: "hibrido",
    tipoContrato: "tiempo completo",
    experiencia: "mid",
    description: "React Native y pasarelas de pago. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 29,
    title: "Frontend Developer",
    company: "Education Tech",
    location: "remoto",
    tipoContrato: "medio tiempo",
    experiencia: "senior",
    description: "Accesibilidad web y rendimiento. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  },
  {
    id: 30,
    title: "Analista de Datos",
    company: "Consulting Group",
    location: "presencial",
    tipoContrato: "tiempo completo",
    experiencia: "junior",
    description: "Visualización de datos con Tableau. Buscamos un Engineer con experiencia en la automatización de infraestructuras y procesos de despliegue. Serás responsable de mantener la infraestructura en la nube y de asegurar la disponibilidad y escalabilidad de nuestras aplicaciones."
  }
];


// jobs.forEach(job => {
//   console.log(job.title);
// });
  
const filterTechs = document.querySelector("#filter-techs");
const filterUbicacion = document.querySelector("#filter-ubicacion");
const filterTipoContrato = document.querySelector("#filter-tipo-contrato");
const filterExperiencia = document.querySelector("#filter-experiencia");
const container = document.querySelector("#results-container");
const resultsCount = document.querySelector("#results-count");


function filtrar() {
  const tech = filterTechs.value.toLowerCase();
  const ubicacion = filterUbicacion.value.toLowerCase();
  const experiencia = filterExperiencia.value.toLowerCase();
  const tipoContrato = filterTipoContrato.value.toLowerCase();
  
  

  const filtrados = jobs.filter(job => {
    const matchTech =
      tech === "" || job.title.toLowerCase().includes(tech);

    const matchUbicacion =
      ubicacion === "" || job.location.toLowerCase().includes(ubicacion);

    const matchExperiencia =
      experiencia === "" || job.experiencia.toLowerCase().includes(experiencia);

    const matchTipoContrato =
      tipoContrato === "" || job.tipoContrato.toLowerCase().includes(tipoContrato);

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
      <button class="btn-blue-apply-job" type="button">Aplicar</button>
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

filterTechs.addEventListener("change", filtrar);
filterUbicacion.addEventListener("change", filtrar);
filterExperiencia.addEventListener("change", filtrar);
filterTipoContrato.addEventListener("change", filtrar);
