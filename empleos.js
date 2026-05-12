import { pintarCards } from './ui.js';
import { aplicarFiltros } from './filtros.js';

let empleos = [];

async function cargarEmpleos() {
    try {
        const respuesta = await fetch("./empleos.json");
        const data = await respuesta.json();
        empleos = data;
        pintarCards(container, empleos);
    } catch (error) {
        console.error("Error cargando empleos:", error);
    }
}

cargarEmpleos();

const inputBuscar = document.getElementById("input-buscar");
const container = document.querySelector("#results-container");


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



filterTechs.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container);
});

filterUbicacion.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container);
});

filterContrato.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container);
});

filterExperiencia.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container);
});

pintarCards(container, empleos)




inputBuscar.addEventListener("input", aplicarFiltros);



export { empleos }

