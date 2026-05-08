const empleos = [
    {
        id: 1,
        titulo: "Frontend Developer",
        empresa: "Google",
        ubicacion: "remoto",
        tipoContrato: "Tiempo completo",
        experiencia: "Senior",
        descripcion: "Google busca un Frontend Developer apasionado por las interfaces de usuario y la experiencia del usuario. Trabajarás en productos con millones de usuarios diarios, colaborando con equipos de UX y backend. El entorno es dinámico, con oportunidades de aprendizaje continuo y proyectos desafiantes.",
        responsabilidades: [
            "Desarrollar componentes de UI reutilizables y escalables con React y TypeScript.",
            "Colaborar con diseñadores UX/UI para implementar diseños pixel-perfect.",
            "Optimizar el rendimiento de las aplicaciones web (métricas Core Web Vitals).",
            "Mantener la coherencia visual y técnica en múltiples productos.",
            "Participar en code reviews y mentoría de juniors."
        ],
        requisitos: [
            "Mínimo 3 años de experiencia con React y TypeScript.",
            "Conocimiento profundo de HTML5, CSS3 (Flexbox, Grid, animaciones).",
            "Experiencia con testing (Jest, React Testing Library).",
            "Manejo de control de versiones con Git.",
            "Inglés intermedio (lectura técnica)."
        ],
        sobreLaEmpresa: "Google es una empresa tecnológica global que busca mejorar la vida de las personas a través de productos innovadores. Ofrecemos un entorno inclusivo, flexible y con beneficios competitivos."
    },
    {
        id: 2,
        titulo: "Backend Developer",
        empresa: "Amazon",
        ubicacion: "remoto",
        tipoContrato: "Por proyecto",
        experiencia: "Mid",
        descripcion: "Amazon Web Services busca un Backend Developer para diseñar y mantener APIs de alto rendimiento. Trabajarás con microservicios, bases de datos distribuidas y sistemas de mensajería a gran escala. Necesitamos a alguien con enfoque en escalabilidad y resiliencia.",
        responsabilidades: [
            "Diseñar e implementar APIs RESTful y GraphQL.",
            "Optimizar consultas en bases de datos SQL y NoSQL (PostgreSQL, DynamoDB).",
            "Implementar sistemas de autenticación y autorización (OAuth, JWT).",
            "Garantizar la seguridad y el cumplimiento de estándares (OWASP).",
            "Monitorear y solucionar problemas de rendimiento en producción."
        ],
        requisitos: [
            "Experiencia con Node.js, Python o Java (mínimo 3 años).",
            "Conocimiento en arquitectura de microservicios y contenedores (Docker).",
            "Manejo de sistemas de colas (SQS, RabbitMQ) y caché (Redis).",
            "Pruebas unitarias y de integración con frameworks como Mocha o JUnit.",
            "Inglés avanzado técnico."
        ],
        sobreLaEmpresa: "Amazon es una compañía centrada en el cliente, con cultura de innovación y entrega rápida. Valoramos la propiedad, la frugalidad y el pensamiento a largo plazo."
    },
    {
        id: 3,
        titulo: "Fullstack Developer",
        empresa: "Microsoft",
        ubicacion: "presencial",
        tipoContrato: "Medio tiempo",
        experiencia: "Junior",
        descripcion: "Microsoft busca un Fullstack Developer para trabajar en soluciones empresariales integrando servicios en la nube (Azure). Participarás en el ciclo completo de desarrollo, desde la idea hasta el despliegue. Buscamos a alguien versátil que disfrute tanto del frontend como del backend.",
        responsabilidades: [
            "Desarrollar aplicaciones completas con .NET Core y React.",
            "Integrar servicios de Azure (Functions, App Services, SQL Database).",
            "Implementar pipelines de CI/CD con Azure DevOps.",
            "Crear documentación técnica y diagramas de arquitectura.",
            "Asistir en la estimación y planificación de sprints."
        ],
        requisitos: [
            "Experiencia en C# y .NET Core (mínimo 2 años).",
            "Manejo de React o Angular.",
            "Conocimientos de SQL Server y Entity Framework.",
            "Familiaridad con metodologías ágiles (Scrum).",
            "Inglés intermedio para documentación técnica."
        ],
        sobreLaEmpresa: "Microsoft es una empresa global que empodera a las personas y organizaciones para lograr más. Promovemos una cultura de crecimiento, inclusión y colaboración."
    },
    {
        id: 4,
        titulo: "Data Scientist",
        empresa: "Meta",
        ubicacion: "hibrido",
        tipoContrato: "Por proyecto",
        experiencia: "Junior",
        descripcion: "Meta busca un Data Scientist para analizar grandes volúmenes de datos y generar insights que impulsen la toma de decisiones. Trabajarás con equipos de producto e ingeniería para mejorar la experiencia de millones de usuarios.",
        responsabilidades: [
            "Limpiar, procesar y analizar conjuntos de datos masivos.",
            "Desarrollar modelos predictivos y algoritmos de machine learning.",
            "Crear visualizaciones y dashboards para comunicar hallazgos.",
            "Diseñar y ejecutar experimentos A/B para validar hipótesis.",
            "Automatizar reportes y flujos de datos."
        ],
        requisitos: [
            "Experiencia con Python y pandas (o R).",
            "Conocimiento en SQL y manejo de grandes bases de datos.",
            "Familiaridad con scikit-learn, TensorFlow o PyTorch.",
            "Capacidad para comunicar resultados complejos de forma clara.",
            "Inglés avanzado."
        ],
        sobreLaEmpresa: "Meta construye tecnologías que ayudan a las personas a conectar, encontrar comunidades y hacer crecer negocios. Valoramos la velocidad, el impacto y la innovación responsable."
    },
    {
        id: 5,
        titulo: "Mobile Developer",
        empresa: "Apple",
        ubicacion: "presencial",
        tipoContrato: "Tiempo completo",
        experiencia: "Senior",
        descripcion: "Apple busca un Mobile Developer especializado en iOS para desarrollar aplicaciones innovadoras para iPhone y iPad. Serás parte de un equipo de diseño y desarrollo, enfocado en crear experiencias fluidas, seguras y de alta calidad.",
        responsabilidades: [
            "Desarrollar aplicaciones nativas para iOS con Swift y UIKit/SwiftUI.",
            "Implementar patrones de arquitectura limpia (MVVM, Coordinator).",
            "Escribir pruebas unitarias y de interfaz (XCTest).",
            "Optimizar el rendimiento y consumo de batería.",
            "Colaborar en el diseño de nuevas funcionalidades."
        ],
        requisitos: [
            "Experiencia comprobable en desarrollo iOS (mínimo 2 años).",
            "Manejo de CoreData, URLSession y Push Notifications.",
            "Conocimientos de Git y metodologías ágiles.",
            "Entendimiento de principios de UX en dispositivos móviles.",
            "Inglés intermedio."
        ],
        sobreLaEmpresa: "Apple es una empresa que cree en el poder de la tecnología para enriquecer la vida de las personas. Fomentamos la creatividad, la innovación y la excelencia en el diseño."
    }
];

const container = document.querySelector("#results-container");



function pintarCards(listaEmpleos) {
    container.innerHTML = "";

    listaEmpleos.forEach(empleo => {
        // Crear la card principal
        const card = document.createElement("article");
        card.classList.add("results-card");
        card.dataset.tipoContrato = empleo.tipoContrato;
        card.dataset.experiencia = empleo.experiencia;

        // PRIMER div (título y botón)
        const div1 = document.createElement("div");
        div1.classList.add("results-card-content");

        const h4 = document.createElement("h4");
        h4.classList.add("results-card-title");
        h4.textContent = empleo.titulo;

        const divBoton = document.createElement("div"); // contenedor del botón
        const btn = document.createElement("button");
        btn.classList.add("btn-blue-apply-job");
        btn.textContent = "Aplicar";
        btn.dataset.id = empleo.id;
        divBoton.appendChild(btn);

        div1.appendChild(h4);
        div1.appendChild(divBoton);

        // SEGUNDO div (subtítulo)
        const div2 = document.createElement("div");
        div2.classList.add("results-card-content");

        const h5 = document.createElement("h5");
        h5.classList.add("results-card-subtitle");
        h5.textContent = `${empleo.empresa} | ${empleo.ubicacion}`;
        div2.appendChild(h5);

        // Descripción
        const descripcion = document.createElement("p");
        descripcion.classList.add("results-card-description");
        descripcion.textContent = empleo.descripcion;

        // Armar la card
        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(descripcion);

        // Agregar la card al contenedor
        container.appendChild(card);
    });
}

container.addEventListener("click", (event) => {
    const elementoClickeado = event.target;
    const boton = elementoClickeado.closest(".btn-blue-apply-job");
    if (!boton) return;
    const id = parseInt(boton.dataset.id);  // conviértelo a número por si acaso
    let empleoEncontrado = empleos.find(empleo => empleo.id === id)
    window.location.href = `aplicar.html?id=${id}`;
});

const filterTechs = document.getElementById("filter-techs");
const filterUbicacion = document.getElementById("filter-ubicacion");
const filterContrato = document.getElementById("filter-tipo-contrato");
const filterExperiencia = document.getElementById("filter-experiencia");


function aplicarFiltros(){
    const tech = filterTechs.value.trim().toLowerCase();
    const ubi = filterUbicacion.value.trim().toLowerCase();
    const contrato = filterContrato.value.trim().toLowerCase();
    const experiencia = filterExperiencia.value.trim().toLowerCase();


    const filtrados = empleos.filter(empleo => {
        
        const cumpleTech = (tech === "") || empleo.titulo.toLowerCase().includes(tech);
        const cumpleUbi = (ubi === "") || empleo.ubicacion.toLowerCase().includes(ubi);
        const cumpleContrato = (contrato === "") || empleo.tipoContrato.toLowerCase().includes(contrato);
        const cumpleExperiencia = (experiencia === "") || empleo.experiencia.toLowerCase().includes(experiencia);
        
        return cumpleTech && cumpleUbi && cumpleContrato && cumpleExperiencia;
    });

    pintarCards(filtrados);
}

filterTechs.addEventListener("change", aplicarFiltros);
filterUbicacion.addEventListener("change", aplicarFiltros);
filterContrato.addEventListener("change", aplicarFiltros);
filterExperiencia.addEventListener("change", aplicarFiltros);

pintarCards(empleos)



