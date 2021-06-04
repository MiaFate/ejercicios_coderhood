/* 2) Simulador de descarga de informacion
Cuando queremos descargar informacion de internet, varias cosas pueden ir mal:
desconexion de internet, corte de luz, perdida de informacion por culpa de seres
desconocidos. Crear una funcion llamada pedirInformacion que no recibe parametros y
que devuelve el siguiente objeto que corresponde a los datos de un usuario: let persona =
{ id: 19310, nombre: "Bautista", apellido: "Di Santo" }
La funcion pedirInformacion tiene:
25% de posibilidades de disparar un error por desconexion de internet, el nombre del
error es 'NetworkError'
18% de posibilidades de disparar un error por error del servidor, el nombre del error es
'InternalError'
10% de posibilidades de disparar un error por una anomalia, el nombre del error es
'AlienError'
Cuando se llame a la funcion, informar:
Si hubo un error, informar segun el mensaje del error:
NetworkError => informar "Hubo un problema en la conexion de internet"
InternalError => informar "Hubo un error interno en el el servidor"
AlienError => informar "Una anomalia intercepto la informacion"
Si no hubo un error, informar el objeto persona */


function pedirInformacion() {

    const falla = Math.random() * 100;
    const persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" };
    //mensajes de error
    const NetworkError = "Hubo un problema en la conexion de internet";
    const InternalError = "Hubo un error interno en el el servidor";
    const AlienError = "Una anomalia intercepto la informacion";
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
  
    return console.log(persona);
  }
  
  try {
    pedirInformacion();
  } catch (error) {
    console.log(error.message);
  }
  