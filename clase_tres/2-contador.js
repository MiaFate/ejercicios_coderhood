var limite = 20;
var impares = 0;
var menores = 0;
for (var i = 0; i <= limite; i++) {
  if (i % 2 === 1) {
    impares = impares + 1;
  }
  if (i < limite / 2) {
    menores = menores + 1;
  }
}
console.log("La cantidad de numeros impares es: " + impares);
console.log("La cantidad de numeros menores que limite/2 es: " + menores);

/*
2) Contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2
*/
