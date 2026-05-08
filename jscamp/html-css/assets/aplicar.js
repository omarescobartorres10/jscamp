const empleos = [
    { id: 1, titulo: "Frontend Developer", empresa: "Google", ubicacion: "remoto", descripcion: "Estamos buscando un desarrollador frontend para unirse a nuestro equipo en remoto. El candidato ideal será responsable de desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web.", responsabilidades: ["Desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web."], requisitos: ["Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend", "Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend"] },
    { id: 2, titulo: "Backend Developer", empresa: "Amazon", ubicacion: "remoto", descripcion: "Estamos buscando un desarrollador backend para unirse a nuestro equipo en remoto. El candidato ideal será responsable de desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web.", responsabilidades: ["Desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web."], requisitos: ["Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend", "Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend"] },
    { id: 3, titulo: "Fullstack Developer", empresa: "Microsoft", ubicacion: "presencial", descripcion: "Estamos buscando un desarrollador fullstack para unirse a nuestro equipo en presencial. El candidato ideal será responsable de desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web.", responsabilidades: ["Desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web."], requisitos: ["Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend", "Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend"] },
    { id: 4, titulo: "Data Scientist", empresa: "Meta", ubicacion: "hibrido", descripcion: "Estamos buscando un científico de datos para unirse a nuestro equipo en híbrido. El candidato ideal será responsable de desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web.", responsabilidades: ["Desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web."], requisitos: ["Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend", "Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend"] },
    { id: 5, titulo: "Mobile Developer", empresa: "Apple", ubicacion: "presencial", descripcion: "Estamos buscando un desarrollador móvil para unirse a nuestro equipo en presencial. El candidato ideal será responsable de desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web.", responsabilidades: ["Desarrollar y mantener interfaces de usuario atractivas y funcionales para nuestras aplicaciones web."], requisitos: ["Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend", "Experiencia en desarrollo frontend", "Conocimientos de HTML, CSS y JavaScript", "Conocimientos de frameworks modernos de frontend"] }
];


const obtenerIdURL = window.location.search;

const urlParams = new URLSearchParams(obtenerIdURL);
const id = urlParams.get('id');


const applytitle = document.querySelector(".apply-page-title");
const applysubtitle = document.querySelector(".apply-page-subtitle");
const applydescription = document.querySelector(".apply-page-description");
const responsabilitiesList = document.querySelector(".responsabilities-list");
const requirementsList = document.querySelector(".requirements-list");


const trabajo = empleos.find(empleo => empleo.id == id);

if (trabajo) {
    applytitle.textContent = trabajo.titulo;
    applysubtitle.textContent = `${trabajo.empresa} | ${trabajo.ubicacion}`;
    applydescription.textContent = trabajo.descripcion;
} else {
    applytitle.textContent = "No se encontro el empleo";
}
    







// title.textContent = empleos[id].titulo;
// subtitle.textContent = empleos[id].empresa;
// applydescription.textContent = empleos[id].descripcion;
