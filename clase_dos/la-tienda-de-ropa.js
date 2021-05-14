console.clear();
var precioDePrenda = 1500;
var porcentajeDeAumento = 25;
var precioFinal;

precioFinal = (precioDePrenda * porcentajeDeAumento) / 100 + precioDePrenda;
if (precioFinal > 4000) {
  console.log(`'Precio excedido'`);
} else {
  console.log("el precio final de la prenda es: $" + precioFinal);
}
