// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.
let numeros = [1,7,3,21,15,12,30,8,13,27,50,42, 5, 9, 11, 4, 6, 18, 14, 2];
let mayor = numeros[0];
let menor = numeros[0];
let promedio = 0;
let sumaTotal = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    sumaTotal += numero;
    if (numero > mayor) {
        mayor = numero;
    }
    if (numero < menor) {
        menor = numero;
    }    
    if (numero % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

console.log(`Mayor: ${mayor}`);
console.log(`Menor: ${menor}`);
console.log(`Suma Total: ${sumaTotal}`);
console.log(`Promedio: ${sumaTotal / numeros.length}`);
console.log(`Números Pares: ${contadorPares}`);
console.log(`Números Impares: ${contadorImpares}`);