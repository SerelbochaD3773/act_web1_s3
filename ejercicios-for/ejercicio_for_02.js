// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.
let altura = 10;
for (let i = 1; i <= altura; i++) {
    let lineas = ' ';
    for (let j = 1; j <= altura - i; j++) {
        lineas += ' ';
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
        lineas += '*';
    }
    console.log(lineas);
}