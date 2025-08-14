// Ejercicio While 5: Calculadora de Factorial
// Desarrolla una función que use un ciclo while para calcular el factorial de un número dado. Debe mostrar paso a paso cómo se va calculando el factorial.

function calcularFactorial(numero) {
    let factorial = 1;
    let i = 1;

    while (i <= numero) {
        factorial *= i;
        console.log(`Paso ${i}: ${factorial}`);
        i++;
    }

    return factorial;
}

const resultado = calcularFactorial(8);
console.log(`El factorial es: ${resultado}`);