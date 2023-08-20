import bisiesto from "./bisiesto";

const year = document.querySelector("#txtyear");
const resultado = document.querySelector("#resultado-div");
const btnmostrar=document.querySelector("#bisiesto-button");
resultado.style.display="none";
btnmostrar.addEventListener("click", (event) => {
  event.preventDefault();
  const txtyear = Number.parseInt(year.value);
  const txtbisiesto=bisiesto(txtyear);
  resultado.style.display="block";

  resultado.innerHTML = "<p>" + bisiesto(txtyear) + "</p>";
});
