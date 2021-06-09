/* Ejercicio 1 - b
Usando then y catch completar la función "programa" dada para llamar a dividirNumeros e imprimir el resultado o imprimir un
mensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.
function programa() {
// Tu código acá
}
programa(); */

function dividirNumerosAsync(dividendo, divisor) {
    return new Promise(function (resolve, reject) {
      try {
        setTimeout(() => {
          resolve(dividendo / divisor);
        }, 3000);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  function programa(a, b) {
    return new Promise(function (resolve, reject) {
      try {
        resolve(dividirNumerosAsync(a, b));
      } catch (error) {
        reject(error);
      }
    });
  }
  programa(5, 0).then((x) => console.log("el resultado es", x)).catch((x)=>console.log(error));