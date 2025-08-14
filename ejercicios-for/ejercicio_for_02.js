// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de diamante de 9 niveles de altura.
let altura = 9;
let centro = 5;

console.log("Patrón de Asteriscos ");
console.log("en forma de diamante");
console.log("--------------------");
for (let i = 1; i <= altura; i++) {
    let lineas = ' ';
    if (i <= centro) {
        for (let j = 1; j <= centro - i; j++) {                      
            lineas += ' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            lineas += '*';
        }
    } else {
        for (let j = 1; j <= i - centro; j++) {
            lineas += ' ';
        }
        for (let k = 1; k <= (2 * (altura - i) + 1); k++) {
            lineas += '*';
        }
       
    }
    console.log(lineas);
}