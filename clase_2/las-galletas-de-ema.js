console.clear();
var huevos = 3;
var barraDeChocolate = 5;
var harina = 0.5;
var azucar = 3;
var comprar = "hay que comprar:\n";

if (huevos >= 3 && barraDeChocolate >= 1 && harina >= 0.5 && azucar >= 5) {
  console.log("se pueden hacer las galletitas");
} else {
  if (huevos < 3) {
    comprar = comprar + "-" + (3 - huevos) + " huevo(s)\n";
  }
  if (barraDeChocolate < 1) {
    comprar = comprar + "-" + 1 + " Barra de chocolate\n";
  }
  if (harina < 0.5) {
    comprar = comprar + "-Harina\n";
  }
  if (azucar < 5) {
    comprar = comprar + "-Azucar\n";
  }
  console.log(comprar);
}
