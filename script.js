
//Clase de filtros - bootcamp


// const btnBlueApplyJob = document.querySelectorAll(".btn-blue-apply-job");

// btnBlueApplyJob.forEach(btn => {
//     btn.addEventListener("click", function () {
//         btn.textContent = "¡Aplicado!"; /*Cambio de texto al presionar el botón*/
//         btn.disabled = true; /*Desactivar el botón al presionarlo*/
//         btn.style.opacity = "0.5"; /*Cambia el color del botón al presionarlo*/
//         btn.style.cursor = "not-allowed"; /*Cambia el cursor al presionarlo*/
//     });
// });

// const applyJobBtn = document.querySelector(".results-section");

// applyJobBtn?.addEventListener("click", function (event) {
//   const element = event.target

//    if(element?.classList?.contains("btn-blue-apply-job")) {
//     element.textContent = "¡Aplicado!";
//     element.disabled = true;
//     element.style.opacity = "0.5";
//     element.style.cursor = "not-allowed";

//    }
// });

// ---Inicio de filtros---
// Los inputs se seleccionan por su id para facilitar su manipulación
// const resultsSection = document.querySelectorAll(".results-card");
// const filterTechs = document.querySelector("#filter-techs");
// const filterUbicacion = document.querySelector("#filter-ubicacion");
// const filterTipoContrato = document.querySelector("#filter-tipo-contrato");
// const filterExperiencia = document.querySelector("#filter-experiencia");

// function filtrar() { //creamos una función que se va a ejecutar cada vez que cambie el valor de los filtros
  
// //los resultados de los inputs se convierten a minúsculas para facilitar su manipulación
//   const filterValueTechs = filterTechs.value.toLowerCase(); 
//   const filterValueUbicacion = filterUbicacion.value.toLowerCase();
//   const filterValueTipoContrato = filterTipoContrato.value.toLowerCase();
//   const filterValueExperiencia = filterExperiencia.value.toLowerCase();

//   resultsSection.forEach(card => { //bucle que recorre las cards del html 
//     const title = card 
//       .querySelector(".results-card-title") //seleccionamos el titulo de la card
//       .textContent //obtenemos el texto del titulo
//       .toLowerCase(); //convertimos el texto a minúsculas


//       const ubicacion = card 
//       .querySelector(".results-card-subtitle") //seleccionamos el subtitulo de la card
//       .textContent //obtenemos el texto del subtitulo
//       .toLowerCase(); //convertimos el texto a minúsculas

//       const tipoContrato = card 
//       .querySelector(".results-card-subtitle") //seleccionamos el subtitulo de la card
//       .textContent //obtenemos el texto del subtitulo
//       .toLowerCase(); //convertimos el texto a minúsculas

//       const experiencia = card 
//       .querySelector(".results-card-subtitle") //seleccionamos el subtitulo de la card
//       .textContent //obtenemos el texto del subtitulo
//       .toLowerCase(); //convertimos el texto a minúsculas

      
//       const shouldShow = //condición que se cumple si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío
//        (filterValueTechs === "" || title.includes(filterValueTechs)) && //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío 
//        (filterValueUbicacion === "" || ubicacion.includes(filterValueUbicacion)) && //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío
//        (filterValueTipoContrato === "" || tipoContrato.includes(filterValueTipoContrato)) && //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío
//        (filterValueExperiencia === "" || experiencia.includes(filterValueExperiencia)); //si el valor del filtro es igual al texto de la card o si el valor del filtro está vacío

//       card.style.display = shouldShow ? "" : "none"; //muestra la card si se cumple la condición

    
//   });
// }

// filterTechs.addEventListener("change", filtrar);
// filterUbicacion.addEventListener("change", filtrar);
// filterTipoContrato.addEventListener("change", filtrar);
// filterExperiencia.addEventListener("change", filtrar);




//Creacion del objeto jobs


  
// const filterTechs = document.querySelector("#filter-techs");
// const filterUbicacion = document.querySelector("#filter-ubicacion");
// const filterTipoContrato = document.querySelector("#filter-tipo-contrato");
// const filterExperiencia = document.querySelector("#filter-experiencia");
// const container = document.querySelector("#results-container");
// const resultsCount = document.querySelector("#results-count");

// container.addEventListener("click", (e) => {
//   const button = e.target.closest(".btn-blue-apply-job");
//   if (!button) return;
//   const jobId = button.dataset.id;
//   window.location.href = `aplicar.html?id=${jobId}`;
// });


// function filtrar() {
//   const tech = filterTechs.value.toLowerCase();
//   const ubicacion = filterUbicacion.value.toLowerCase();
//   const experiencia = filterExperiencia.value.toLowerCase();
//   const tipoContrato = filterTipoContrato.value.toLowerCase();
  
//   const filtrados = jobs.filter(job => {
//     const matchTech =
//       tech === "" || job.title.toLowerCase().includes(tech);

//     const matchUbicacion =
//       ubicacion === "" || job.location.toLowerCase().includes(ubicacion);

//     const matchExperiencia =
//       experiencia === "" || job.experiencia.toLowerCase().includes(experiencia);

//     const matchTipoContrato =
//       tipoContrato === "" || job.tipoContrato.toLowerCase().includes(tipoContrato);

//     return matchTech && matchUbicacion && matchExperiencia && matchTipoContrato;
//   });



//   resultsCount.textContent = `Mostrando ${filtrados.length} resultados`;

//   container.innerHTML = "";

//   filtrados.forEach(job => {
//     const card = document.createElement("article");
//     card.classList.add("results-card");
    

//     card.innerHTML = `
//     <div class="results-card-content">
//     <h4 class="results-card-title">${job.title}</h4>
//     <div>
//       <button class="btn-blue-apply-job" data-id="${job.id}" type="button">Aplicar</button>
//     </div>
//   </div>

//   <div class="results-card-content">
//     <h5 class="results-card-subtitle">
//       ${job.company} | ${job.location} | ${job.tipoContrato} | ${job.experiencia}
//     </h5>
//   </div>

  

//   <p class="results-card-description">
//     ${job.description}
//   </p>

  
// `;

//     container.appendChild(card);
//   });
// }

// filterTechs.addEventListener("change", filtrar);
// filterUbicacion.addEventListener("change", filtrar);
// filterExperiencia.addEventListener("change", filtrar);
// filterTipoContrato.addEventListener("change", filtrar);

// // Array de responsabilidades
// const responsabilidades = trabajo.responsabilidades;

// // Limpias y llenas la lista
// const lista = document.querySelector(".responsabilities-list");
// lista.innerHTML = "";
// responsabilidades.forEach(item => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   lista.appendChild(li);
// });
