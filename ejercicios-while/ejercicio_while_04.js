// Ejercicio While 4: Generador de Números Aleatorios
// Crea un programa que use un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga un número mayor a 95. Muestra cada número generado y al final indica cuántos números se generaron.

let numero;
let contador = 0;

while (true) {
    numero = Math.floor(Math.random() * 100) + 1;
    console.log(`Número generado: ${numero}`);
    contador++;

    if (numero > 95) {
        break;
    }
}

console.log(`Total de números generados: ${contador}`);