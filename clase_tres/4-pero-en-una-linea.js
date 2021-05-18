var limite = 10;
var a = 0;
var b = 1;
var c = 0;
var fibonacci = "0, 1, ";
for (let i = 0; i <= limite; i++) {
  if (i > 2 && i < limite) {
    c = a + b;
    a = b;
    b = c;
    fibonacci += c + ", ";
  } else if (i === limite) {
    c = a + b;
    a = b;
    b = c;
    fibonacci += c + "...";
  }
}
console.log(fibonacci);

/*
4) La secuencia de Fibonacci
En matemáticas, la sucesión o serie de Fibonacci es la
siguiente sucesión infinita de números naturales:
0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21
La sucesión comienza con los números 0 y 1,a partir de estos
cada término es la suma de sus dos anteriores
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir tantos terminos de la secuencia como repeticions de 0 hasta limite
Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5
*/