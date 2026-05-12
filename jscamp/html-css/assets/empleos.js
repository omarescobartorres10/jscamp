// import { empleos } from './data.js';


let empleos = [];

fetch("./empleos.json")
    .then(response => response.json())
    .then(data => {
        empleos = data;
        pintarCards(empleos);
        // Ahora sí, puedes ejecutar lo que dependa de empleos
    })
    .catch(error => console.error("Error cargando empleos:", error));

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

    pintarCards(filtrados);
}

filterTechs.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros();
});

filterUbicacion.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros();
});

filterContrato.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros();
});

filterExperiencia.addEventListener("change", () => {
    if (empleos.length) aplicarFiltros();
});

pintarCards(empleos)


const inputBuscar = document.getElementById("input-buscar");

inputBuscar.addEventListener("input", aplicarFiltros);




