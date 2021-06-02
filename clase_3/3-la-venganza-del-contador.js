var limite = 9;
var final = 10;
var pares = 0;
var multiplosDeTres = 0;
var aux = 0;
var suma =0;

while (aux <= limite && pares <= final) {

  suma = suma + aux;
  aux = aux + 1;

  if (aux % 2 === 0) {
    pares = pares + 1;
  }

  if (aux % 3 === 0) {
    multiplosDeTres++;    

  }
}

console.log('La cantidad de numeros multiplos de 3 es: '+ multiplosDeTres);
console.log('la suma de todos los numeros desde 0 hasta el final del recorrido es: '+suma);

/*
3) Contador 2: La venganza del contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
Se llega a limite
La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido
*/
