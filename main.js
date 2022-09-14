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
//promedio de estudiantes activos
//contador estudiante menos de 7 dias
var estudiantesActivos = 9;
var estudiantesTotal = 30;
var porcentajeTotal = 0;
function porcenEstuAct() {
    porcentajeTotal = estudiantesTotal / estudiantesActivos;
    console.log("El porcentaje de estudiantes activos es de " + porcentajeTotal + " %");
}
