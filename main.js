var mensaje = "Hola Mundo desde TS";
console.log(mensaje);
// algoritmo fibonacci
var n = 3;
var a = 0;
var b = 1;
var c = 0;
for (var i = 0; i <= n; i++) {
    c = a + b;
    console.log(a);
    a = b;
    b = c;
}
