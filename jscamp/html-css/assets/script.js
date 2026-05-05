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

const resultsSection = document.querySelectorAll(".results-card");
const filterTechs = document.querySelector("#filter-techs");
const filterUbicacion = document.querySelector("#filter-ubicacion");

function filtrar() {
  
  const filterValueTechs = filterTechs.value.toLowerCase();
  const filterValueUbicacion = filterUbicacion.value.toLowerCase();

  resultsSection.forEach(card => {
    const title = card
      .querySelector(".results-card-title")
      .textContent
      .toLowerCase();


      const ubicacion = card
      .querySelector(".results-card-subtitle")
      .textContent
      .toLowerCase();

      const shouldShow = (filterValueTechs === "" || title.includes(filterValueTechs)) && (filterValueUbicacion === "" || ubicacion.includes(filterValueUbicacion)); 

      card.style.display = shouldShow ? "" : "none";

    
  });
}

filterTechs.addEventListener("change", filtrar);
filterUbicacion.addEventListener("change", filtrar);










  
