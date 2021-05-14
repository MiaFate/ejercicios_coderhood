console.clear();
var repartidores = 8;
var esFeriado = true;
var gananciaDelDia = 10000;
var porcentajeParaSueldos;
var sueldoNetoDeRepartidor;
var gananciaDelComercioFinal;

if (esFeriado === true) {
  porcentajeParaSueldos = 0.8 * gananciaDelDia;
} else {
  porcentajeParaSueldos = 0.65 * gananciaDelDia;
}

sueldoNetoDeRepartidor = porcentajeParaSueldos / repartidores;

gananciaDelComercioFinal = gananciaDelDia - porcentajeParaSueldos;
console.log("El sueldo neto de cada repartidor es: " + sueldoNetoDeRepartidor);
console.log("Una vez pagados los sueldos la pizzeria gana: " + gananciaDelComercioFinal);
