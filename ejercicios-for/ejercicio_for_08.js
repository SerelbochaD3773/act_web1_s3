// Ejercicio For 8: Contador de Vocales
// "Desarrolla un programa que use un ciclo for para contar cuántas vocales (a, e, i, o, u) hay en una frase dada. Debe mostrar el conteo de cada vocal por separado.",
// Muestra los resultados ordenados alfabéticamente.
let cadenaTexto = "programacion es muy divertida y emocionante";
let conteoA = 0;
let conteoE = 0;
let conteoI = 0;
let conteoO = 0;
let conteoU = 0;
let conteoVocales = conteoA + conteoE + conteoI + conteoO + conteoU;

for (let i = 0; i < cadenaTexto.length; i++) {
    let caracter = cadenaTexto[i];
    switch (caracter) {
        case 'a':
            conteoA++;
            conteoVocales++;
            break;
        case 'e':
            conteoE++;
            conteoVocales++;
            break;
        case 'i':
            conteoI++;
            conteoVocales++;
            break;
        case 'o':
            conteoO++;
            conteoVocales++;
            break;
        case 'u':
            conteoU++;
            conteoVocales++;
            break;
    }
}

console.log(`Frecuencia de 'a': ${conteoA}`);
console.log(`Frecuencia de 'e': ${conteoE}`);
console.log(`Frecuencia de 'i': ${conteoI}`);
console.log(`Frecuencia de 'o': ${conteoO}`);
console.log(`Frecuencia de 'u': ${conteoU}`);
console.log(`Total de vocales: ${conteoVocales}`);
