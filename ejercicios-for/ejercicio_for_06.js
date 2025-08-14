// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.
let base = 3; // Base
let exponente = 3;
let resultado = 1;

for (let i = 1; i <= exponente; i++){
    resultado*= base;
   console.log(`Paso ${i}: ${base} elevado a ${i} es igual a: ${resultado}`);
} {
    console.log(`El resultado final de ${base} elevado a ${exponente} es: ${resultado}`);
}
