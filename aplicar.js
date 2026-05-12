let empleos = [];

const applytitle = document.querySelector(".apply-page-title");
const applysubtitle = document.querySelector(".apply-page-subtitle");
const applydescription = document.querySelector(".apply-page-description");
const responsabilitiesList = document.querySelector(".responsabilities-list");
const requirementsList = document.querySelector(".requirements-list");
const aboutCompanyDescription = document.querySelector(".about-company-description");

function crearIconoCheck() {

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.4");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.classList.add("icon", "icon-tabler", "icons-tabler-outline", "icon-tabler-circle-check");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("stroke", "none");
    path1.setAttribute("d", "M0 0h24v24H0z");
    path1.setAttribute("fill", "none");

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0");

    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M9 12l2 2l4 -4");

    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);

    return svg;
}


fetch("./empleos.json")
    .then(response => response.json())
    .then(data => {
        empleos = data;

        const obtenerIdURL = window.location.search;
        const urlParams = new URLSearchParams(obtenerIdURL);
        const id = urlParams.get('id');
        const trabajo = empleos.find(empleo => empleo.id == id);

        if (trabajo) {
            applytitle.textContent = trabajo.titulo;
            applysubtitle.textContent = `${trabajo.empresa} | ${trabajo.ubicacion}`;
            applydescription.textContent = trabajo.descripcion;
            aboutCompanyDescription.textContent = trabajo.sobreLaEmpresa;

            // Limpiar y pintar responsabilidades
            responsabilitiesList.innerHTML = "";
            trabajo.responsabilidades.forEach(item => {
                const li = document.createElement("li");
                li.classList.add("responsabilities-list-item");
                const icono = crearIconoCheck();
                li.appendChild(icono);
                li.appendChild(document.createTextNode(` ${item}`));
                responsabilitiesList.appendChild(li);
            });

            // Limpiar y pintar requisitos
            requirementsList.innerHTML = "";
            trabajo.requisitos.forEach(item => {
                const li = document.createElement("li");
                li.classList.add("requirements-list-item");
                const icono = crearIconoCheck();
                li.appendChild(icono);
                li.appendChild(document.createTextNode(` ${item}`));
                requirementsList.appendChild(li);
            });
        } else {
            applytitle.textContent = "No se encontró el empleo";
        }
    })
    .catch(error => console.error("Error cargando empleos:", error));
