// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego que use un ciclo while donde el usuario debe adivinar un número entre 1 y 50. Proporciona pistas ('muy alto', 'muy bajo', 'cerca') y limita a 7 intentos máximos. Muestra un mensaje de éxito o fracaso al final.
let numeroSecreto = 25; // Número fijo para pruebas
let intentos = 0;
let maxIntentos = 7;
let adivinado = false;

// Array de respuestas predefinidas
let respuestas = [10, 30, 20, 27, 24, 25, 15];

console.log("Iniciando juego de adivinanza...");
console.log(`Número secreto (para pruebas): ${numeroSecreto}`);

while (intentos < maxIntentos && !adivinado) {
    let respuestaActual = respuestas[intentos];
    console.log(`\nIntento ${intentos + 1}: Probando con el número ${respuestaActual}`);

    if (respuestaActual === numeroSecreto) {
        adivinado = true;
    } else {
        if (respuestaActual < numeroSecreto) {
            if (numeroSecreto - respuestaActual <= 5) {
                console.log("Muy cerca! Intenta de nuevo.");
            } else {
                console.log("Muy bajo! Intenta de nuevo.");
            }
        } else {
            if (respuestaActual - numeroSecreto <= 5) {
                console.log("Muy cerca! Intenta de nuevo.");
            } else {
                console.log("Muy alto! Intenta de nuevo.");
            }
        }
    }
    intentos++;
}

if (adivinado) {
    console.log(`\n¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
} else {
    console.log(`\nLo siento! No adivinaste el número. Era ${numeroSecreto}.`);
}
