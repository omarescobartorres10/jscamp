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

const obtenerIdURL = window.location.search;

const urlParams = new URLSearchParams(obtenerIdURL);
const id = urlParams.get('id');


const applytitle = document.querySelector(".apply-page-title");
const applysubtitle = document.querySelector(".apply-page-subtitle");
const applydescription = document.querySelector(".apply-page-description");
const responsabilitiesList = document.querySelector(".responsabilities-list");
const requirementsList = document.querySelector(".requirements-list");
const aboutCompanyDescription = document.querySelector(".about-company-description");



const trabajo = empleos.find(empleo => empleo.id == id);

if (trabajo) {
    applytitle.textContent = trabajo.titulo;
    applysubtitle.textContent = `${trabajo.empresa} | ${trabajo.ubicacion}`;
    applydescription.textContent = trabajo.descripcion;
    aboutCompanyDescription.textContent = trabajo.sobreLaEmpresa;
} else {
    applytitle.textContent = "No se encontro el empleo";
}
    
responsabilitiesList.innerHTML = "";
requirementsList.innerHTML = "";


trabajo.responsabilidades.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    responsabilitiesList.classList.add("responsabilities-list-item"); //AGREGAR CLASE PARA PODER USAR LOS ESTILOS DE CSS
    responsabilitiesList.appendChild(li);
})

trabajo.requisitos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    requirementsList.classList.add("requirements-list-item");
    requirementsList.appendChild(li);
})





// title.textContent = empleos[id].titulo;
// subtitle.textContent = empleos[id].empresa;
// applydescription.textContent = empleos[id].descripcion;
