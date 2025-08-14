// Ejercicio While 10: Procesador de Calificaciones
// Desarrolla un programa que use un ciclo while para procesar calificaciones de estudiantes. Debe continuar pidiendo calificaciones hasta que se ingrese -1, luego calcular y mostrar el promedio, la calificación más alta y más baja.


let calificaciones = [1,5,3,3,5,3,3,4,2,5,2,-1];
let mayor = calificaciones[0];
let menor = calificaciones[0];
let promedio = 0;
let sumaTotal = 0;

let i = 0;  // Inicializamos el contador para while

while (i < calificaciones.length) {
    let numero = calificaciones[i];
    sumaTotal += numero;
    
    if (numero > mayor) {
        mayor = numero;
    }else if (numero < menor) {
        menor = numero;
    }    
      
    i++;  // Incrementamos el contador manualmente
}

console.log(`Mayor: ${mayor}`);
console.log(`Menor: ${menor}`);
console.log(`Suma Total: ${sumaTotal}`);
console.log(`Promedio: ${sumaTotal / calificaciones.length}`);

