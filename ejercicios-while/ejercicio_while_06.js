// Ejercicio While 6: Búsqueda en Array
//Dado un array de nombres, usa un ciclo while para buscar un nombre específico. El programa debe mostrar en qué posición se encontró el nombre o indicar si no existe.

const nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];
const nombreBuscado = "Ana";
let i = 0;
let encontrado = false;

while (i < nombres.length) {
    if (nombres[i] === nombreBuscado) {
        console.log(`Nombre encontrado en la posición:numero ${i+1}`);
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log("Nombre no existe.");
}