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


const obtenerResultadosCartas = document.querySelectorAll(".results-card");

const filterTechs = document.querySelector("#filter-techs");

filterTechs?.addEventListener("change", function() {
  const optionSelected = filterTechs.value.toLowerCase();

    // console.log(obtenerResultadosCartas);
obtenerResultadosCartas.forEach(card => {
  

  
    if(card.querySelector(".results-card-title").textContent.toLowerCase().includes(optionSelected)) {
    
    card.style.display = ""; //Para ocultar la carta

  } else {

    card.style.display = "none"; //Para mostrar la carta
  }
  })



})









  
