/* 1) Funcion de errores
Crear una funcion que recibe tres parametros chance, mensaje y resultado.
chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error.
si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
mensaje: el mensaje que tiene que tener el error que puede disparar la funcion
resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la
funcion si no arrojo un error */
function funcionCatastrofica(chance, mensaje, resultado) {
    let probabilidad = chance / 100;
    if (Math.random() <= probabilidad) {
      throw new Error(mensaje);
    }
    return resultado;
  }
  
  try {
    let resultado = funcionCatastrofica(5, "Error, ya volvemos :)", 5);
    console.log("todo salio bien :)", resultado)
  } catch (error) {
    console.log(error.message);
  }