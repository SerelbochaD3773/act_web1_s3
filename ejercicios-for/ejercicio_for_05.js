// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.
let cadenaOriginal = "estoy contento aprendiendo a programar";
let cadenaInvertida = "";

for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i];
}

console.log(`Cadena Original: ${cadenaOriginal}`);
console.log(`Cadena Invertida: ${cadenaInvertida}`);