import { pintarCards } from './ui.js';
import { aplicarFiltros } from './filtros.js';


const inputBuscar = document.getElementById("input-buscar");
const container = document.querySelector("#results-container");
const filterTechs = document.getElementById("filter-techs");
const filterUbicacion = document.getElementById("filter-ubicacion");
const filterContrato = document.getElementById("filter-tipo-contrato");
const filterExperiencia = document.getElementById("filter-experiencia");
const paginationLinks = document.querySelector("#pagination-links");

let empleos = [];

let paginaActual = 1;
const limitePorPagina = 5;


function generarPaginacion(totalEmpleos) {
    paginationLinks.innerHTML = "";

    const totalPaginas = Math.ceil(totalEmpleos / limitePorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement("li");
        const boton = document.createElement("a");
        boton.textContent = i;
        boton.href = "#";
        boton.classList.add("pagination-link");
        boton.dataset.pagina = i;
        li.appendChild(boton);
        paginationLinks.appendChild(li);
        if (paginaActual === i) {
            boton.classList.add("active");
        }
        boton.addEventListener("click", () => {
            paginaActual = i;
            generarPaginacion(empleos.length)
            mostrarEmpleos();
        });
    }
}


function mostrarEmpleos() {
    const busqueda = inputBuscar.value.trim().toLowerCase();
    const tech = filterTechs.value.trim().toLowerCase();
    const ubi = filterUbicacion.value.trim().toLowerCase();
    const contrato = filterContrato.value.trim().toLowerCase();
    const experiencia = filterExperiencia.value.trim().toLowerCase();


    const filtrados = empleos.filter(empleo => {
        const cumpleBusqueda = (busqueda === "") || empleo.titulo.toLowerCase().includes(busqueda);
        const cumpleTech = (tech === "") || empleo.titulo.toLowerCase().includes(tech);
        const cumpleUbi = (ubi === "") || empleo.ubicacion.toLowerCase().includes(ubi);
        const cumpleContrato = (contrato === "") || empleo.tipoContrato.toLowerCase().includes(contrato);
        const cumpleExperiencia = (experiencia === "") || empleo.experiencia.toLowerCase().includes(experiencia);

        return cumpleBusqueda && cumpleTech && cumpleUbi && cumpleContrato && cumpleExperiencia;
    });

    const empleosAPintar = filtrados.slice((paginaActual - 1) * limitePorPagina, paginaActual * limitePorPagina);

    pintarCards(container, empleosAPintar);

}


async function cargarEmpleos() {
    try {
        const respuesta = await fetch("src/data/empleos.json");
        const data = await respuesta.json();
        empleos = data;
        generarPaginacion(empleos.length);
        mostrarEmpleos();
    } catch (error) {
        console.error("Error cargando empleos:", error);
    }
}

cargarEmpleos();
;


container.addEventListener("click", (event) => {
    const elementoClickeado = event.target;
    const boton = elementoClickeado.closest(".btn-blue-apply-job");
    if (!boton) return;
    const id = parseInt(boton.dataset.id);  // conviértelo a número por si acaso
    let empleoEncontrado = empleos.find(empleo => empleo.id === id)
    window.location.href = `aplicar.html?id=${id}`;
});



filterTechs.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container, paginaActual, limitePorPagina);
});

filterUbicacion.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container, paginaActual, limitePorPagina);
});

filterContrato.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container, paginaActual, limitePorPagina);
});

filterExperiencia.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container, paginaActual, limitePorPagina);
});

inputBuscar.addEventListener("input", () => {
    if (empleos.length) {
        aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container, paginaActual, limitePorPagina);
    }
});



export { empleos }

