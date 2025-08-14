//Utiliza un ciclo while para calcular la suma de todos los números pares entre 1 y 50. Muestra el resultado final y cuántos números pares se sumaron.
let suma = 0;
let contador = 1; // Empezamos desde 1
let cantidadPares = 0;

while (contador <= 50) {
    if (contador % 2 === 0) { // Verificamos si es par usando módulo
        suma += contador;
        cantidadPares++;
    }
    contador++; // Incrementamos de uno en uno
}

console.log(`La suma de los números pares entre 1 y 50 es: ${suma}`);
console.log(`Se sumaron un total de ${cantidadPares} números pares.`);