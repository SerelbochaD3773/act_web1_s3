// Ejercicio While 7: Contador de Dígitos
// Implementa un programa que use un ciclo while para contar cuántos dígitos tiene un número entero positivo. Por ejemplo, 12345 tiene 5 dígitos.
let numeroEntero = 5487;
let contadorDigitos = 0;
let numeroTemporal = numeroEntero;

while (numeroTemporal > 0) {
    numeroTemporal = Math.floor(numeroTemporal / 10);
    contadorDigitos++;
}

console.log(`El número ${numeroEntero} tiene ${contadorDigitos} dígitos.`);

