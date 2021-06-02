//1. Alumnos aprobados
//Dado el siguiente array de alumnos de una clase
//Obtener un array con los números de alumno de aquellos alumnos que hayan
//aprobado la materia. Para approbar la matería la nota final debe ser mayor a 6.
const alumnos = [
    { numAlumno: "1234/0", nombre: "maria", nota: 7 },
    { numAlumno: "4459/2", nombre: "juan", nota: 3 },
    { numAlumno: "5877/1", nombre: "pepe", nota: 5 },
    { numAlumno: "5512/0", nombre: "josefina", nota: 9 },
    { numAlumno: "9874/0", nombre: "jaime", nota: 7 },
  ];
  
  function filtrarNotas(notas) {
    return notas.nota > 6;
  }
  
  function aprobados(alumnos) {
    return alumnos.numAlumno;
  }
  
  const arr = alumnos.filter(filtrarNotas).forEach(aprobados);
  //en lugar de for each tambien podriamos usar un .map()
  
  console.log(arr);