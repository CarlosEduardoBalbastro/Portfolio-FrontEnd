let mensaje = "Hola Mundo desde TS";

console.log(mensaje);

// algoritmo fibonacci
let n: number = 3;
let a: number = 0;
let b: number = 1;
let c: number = 0;

for(let i: number = 0; i <= n;i++){
c = a + b;
console.log(a);
a = b;
b = c;

}


//promedio de estudiantes activos
//contador estudiante menos de 7 dias

let estudiantesActivos:number = 9;
let estudiantesTotal:number = 30;
let porcentajeTotal:number = 0;

function porcenEstuAct(){
    porcentajeTotal = estudiantesTotal / estudiantesActivos;
    console.log("El porcentaje de estudiantes activos es de " + porcentajeTotal + " %")
}
