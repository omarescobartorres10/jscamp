const empleos = [
    { id: 1, titulo: "Frontend Developer", empresa: "Google" },
    { id: 2, titulo: "Backend Developer", empresa: "Amazon" },
    { id: 3, titulo: "Fullstack Developer", empresa: "Microsoft" },
    { id: 4, titulo: "Data Scientist", empresa: "Meta" },
    { id: 5, titulo: "Mobile Developer", empresa: "Apple" }
];

const container = document.querySelector("#results-container");



empleos.forEach(empleo => {
    const card = document.createElement("article"); //Se crea un article
    card.classList.add("results-card"); //Se le asigna la clase results-card
    const div = document.createElement("div"); //Se crea un div
    const h4 = document.createElement("h4"); //Se crea un h4
    h4.classList.add("results-card-title");
    const p = document.createElement("p") //Se crea un p
    p.classList.add("results-card-subtitle");
    const btn = document.createElement("button");
    btn.classList.add("btn-blue-apply-job");
    h4.textContent = empleo.titulo; //Se le asigna el titulo del empleo al h4
    p.textContent = empleo.empresa //Se le asigna el nombre de la empresa al p
    btn.textContent = "Aplicar";
    btn.dataset.id = empleo.id;
    div.appendChild(h4); //Se agrega el h4 al div
    div.appendChild(p); //Se agrega el p al div
    card.appendChild(div); //Se agrega el div al card
    card.appendChild(btn); //Se agrega el btn al card
    container.appendChild(card); //Se agrega el card al contenedor
});

container.addEventListener("click", (event) => {
    const elementoClickeado = event.target;
    const boton = elementoClickeado.closest(".btn-blue-apply-job");
    if (!boton) return;
    const id = parseInt(boton.dataset.id);  // conviértelo a número por si acaso
    let empleoEncontrado = empleos.find(empleo => empleo.id === id)
    alert(`Aplicaste a ${empleoEncontrado.titulo}`)
});
