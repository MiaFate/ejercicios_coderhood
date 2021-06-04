//4. Silabas
//Nuestro software de reconocimiento de voz funciona de una forma un poco particualar,
//y el texto reconocido nos lo envía en un arreglo de silabas.
//Dado el siguiente array, obtener un string con todo el texto de corrido.
const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do ", "bien?", " Me ", "a", "le", "gro."]
//resultado esperado "¡Hola, mundo! ¿Todo bien? Me alegro."
function concatenacion(acc, el){
    return acc + el;
}

const string = silabas.reduce(concatenacion,"");

console.log(string);