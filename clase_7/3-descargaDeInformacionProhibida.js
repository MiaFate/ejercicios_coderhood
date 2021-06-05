/* 3) Descarga de informacion prohibida
Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente
lista:
let lista = [{
 id: 19310,
 nombre: "Bautista",
},{
 id: 90010,
 nombre: "Ema",
},{
 id: 00519,
 nombre: "Lucas",
},{
 id: 00000,
 nombre: "Meison",
}
]
La funcion pedirUsuario disparar un error llamado 'ForbiddenInformation' si el usuario
elegido es el del id = 00000
Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el
retorno de la funcion pedirInformacion.
Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la
capture debe disparar un error 'NetworkError'.
Ejemplo:
function pedirUsuario(){
 // puede disparar un error, devuelve un usuario
}
function pedirInformacion(){
 let usuario = pedirUsuario(); // considerar 'pedirUsuario' p
 // el resto de la funcion
 return usuario;
} */
const lista = [
    {
      id: 19310,
      nombre: "Bautista",
    },
    {
      id: 90010,
      nombre: "Ema",
    },
    {
      id: 0051,
      nombre: "Lucas",
    },
    {
      id: 00000,
      nombre: "Meison",
    },
  ];
  function pedirUsuario() {
    //para calcular el usuario que saldra 
    //con Math.trunc le quito la parte fraccionaria, 
    //tambien funciona con parseInt() pero ese metodo es mas indicado para trabajar con strings
    //asi mismo tambien se podria usar Math.floor() 
    //pero no Math.round() porque me podria redondear hacia arriba
    const usuario = Math.trunc(Math.random() * lista.length);
    const ForbiddenInformation = "Informacion Prohibida";
  
    if (lista[usuario].id == 00000) {
      //si el id es 00000 dispara el error
      throw new Error(ForbiddenInformation);
    }
    //devuelve accediendo al array por el indice aleatorio
    return lista[usuario];
  }
  
  //esta funcion es la misma del ejercicio 2 pero llamando a "pedirUsuario()"
  function pedirInformacion() {
    const falla = Math.random() * 100;
    //defino la variable usuario aqui afuera porque sino no podria devolverla en el bloque finally
    let usuario;
    //mensajes de error
    const NetworkError = "Hubo un problema en la conexion de internet";
    const InternalError = "Hubo un error interno en el el servidor";
    const AlienError = "Una anomalia intercepto la informacion";
    try {
      //intento buscar un usuario
      usuario = pedirUsuario();
    } catch (error) {
      //si atrapa un error debido a que el usuario era el 00000 disparo un nuevo error
      //y le paso el mensaje
      throw new Error(error.message);
    } finally {
  
      //calculo si salio en el 28% de error
      if (falla > 28 && falla <= 53) {
        throw new Error(NetworkError);
      }
      //calculo si salio en el 18% el error
      if (falla > 10 && falla <= 28) {
        throw new Error(InternalError);
      }
      //calculo si salio en el 10% el error
      if (falla <= 10) {
        throw new Error(AlienError);
      }
      //si no se disparo ningun error chequeo que usuario exista
      if (usuario) {
        //si usuario tiene algo lo muestro por consola
        return console.log(usuario);
      }
    }
  }
  
  //intento ejecutar "pedirInformacion"
  try {
    pedirInformacion();
  } catch (error) {
    //si se disparo algun error dentro de la funcion lo muestro por consola
    console.log(error.message);
  }