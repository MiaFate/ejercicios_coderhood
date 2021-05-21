//Hacer una función que reciba una serie de palabras separadas por espacios y que imprima
//la misma frase pero en orden inverso.

//solucion 1
function inverso(_frase) {
    let _inverso = _frase.split("").reverse().join("");
    console.log(_inverso);
  }
  
  inverso("hola amigo");

//solucion 2  
  function inversoFor(_frase) {
    let _inverso = "";
    for (let i = _frase.length; i >= 0; i--) {
      _inverso += _frase.charAt(i);
    }
    console.log(_inverso);
  }
  
  inversoFor("adios amigo");

//solucion 3 
  
  function inversoWhile(_frase) {
    let x = _frase.length - 1;
    let _inverso = "";
    while (x >= 0) {
      _inverso += _frase[x];
      x--;
    }
    console.log(_inverso);
  }
  
  inversoWhile("sorpresa he vuelto");