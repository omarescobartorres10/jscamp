
function pintarCards(container, listaEmpleos) {
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

export { pintarCards };