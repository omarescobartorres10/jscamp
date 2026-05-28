import { pintarCards } from './ui.js';

function aplicarFiltros(empleos, inputBuscar, filterTechs, filterUbicacion, filterContrato, filterExperiencia, container, paginaActual, limitePorPagina) {
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

        generarPaginacion(filtrados.length);

        return cumpleBusqueda && cumpleTech && cumpleUbi && cumpleContrato && cumpleExperiencia;
    });

    const empleosAPintar = filtrados.slice((paginaActual - 1) * limitePorPagina, paginaActual * limitePorPagina);

    pintarCards(container, empleosAPintar);

}


export { aplicarFiltros };



