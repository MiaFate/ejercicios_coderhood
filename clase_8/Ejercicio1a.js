/* Ejercicio 1 - a
Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout), devolviendo el
mismo resultado que la función dada.
function dividirNumeros(dividendo, divisor) {
return dividendo / divisor;
} */


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
  
  function callbackExito(resultadoExito) {
    console.log("el resultado obtenido es: " + resultadoExito);
  }
  function callbackFallo(error) {
    console.log("lo siento, hubo un error: " + error);
  }
  
  const promesa = dividirNumerosAsync(3, 0);
  promesa.then(callbackExito).catch(callbackFallo);
  /* promesa.then((x)=>console.log('el resultado es:',x)).catch((x)=>console.log(x)) */