var limite = 10;
var a = 0;
var b = 1;
var c = 0;

for (let i = 0; i < limite; i++) {
  console.log(c);
  a = b;
  b = c;
  c = a + b;
}