// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.
let fraseOriginal = "Amo la pacífica paloma ";
let fraseInvertida = "";
let fraseLimpiada = fraseOriginal
    .normalize('NFD')                    // Descompone los caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '')    // Elimina los diacríticos
    .replace(/[\W_]/g, '')              // Elimina espacios y caracteres especiales
    .toLowerCase();                      // Convierte a minúsculas

console.log("Verificando cada caracter de fraseLimpiada:");
for (let i = 0; i < fraseLimpiada.length; i++) {
    console.log(`Posición ${i}: ${fraseLimpiada[i]}`);
}

fraseInvertida = ""; // Aseguramos que está vacía
for (let i = fraseLimpiada.length - 1; i >= 0; i--) {
    fraseInvertida += fraseLimpiada[i];
    console.log(`Agregando caracter en posición ${i}: ${fraseLimpiada[i]}`);
    console.log(`fraseInvertida actual: ${fraseInvertida}`);
}

if (fraseLimpiada === fraseInvertida) {
    console.log("La frase es un palíndromo.");
} else {
    console.log("La frase no es un palíndromo.");
} 


console.log(`Frase Original: ${fraseOriginal}`);
console.log(`Frase Limpiada: ${fraseLimpiada}`);
console.log(`Frase Invertida: ${fraseInvertida}`);
