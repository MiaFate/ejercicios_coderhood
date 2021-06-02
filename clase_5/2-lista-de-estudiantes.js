// //Dado un array de estudiantes de una universidad,
//mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [
    { nombre: "Ema", carrera: "Ingenieria en computacion" },
    { nombre: "Luis", carrera: "Produccion audiovisual" },
    { nombre: "Pablo", carrera: "Licenciatura en sistemas" },
    { nombre: "Meison", carrera: "Ingenieria en computacion" },
  ];
  
  let lista = "";
  
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].carrera === "Ingenieria en computacion") {
      lista += ", " + alumnos[i].nombre;
    }
  }
  
  lista += ".";
  
  if (lista === ".") {
    console.log("nadie estudia Ingenieria en computacion");
  } else {
    console.log(`estudian Ingenieria en computacion${lista}`);
  }