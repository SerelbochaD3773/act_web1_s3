// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.
let limite = 100;
let contadorPrimos = 0;

for (let i = 2; i <= limite; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(`Números primos encontrados: ${i}`);
        contadorPrimos++;
    }
}

console.log(`Total de números primos encontrados: ${contadorPrimos}`);
