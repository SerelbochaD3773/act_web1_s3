// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.
 let matriz = [];
    
    for (let fila = 0; fila < 5; fila++) {
        let filaActual = [];
        for (let columna = 0; columna < 5; columna++) {
            let sumaIndices = fila + columna;
            filaActual.push(sumaIndices);
        }
        matriz.push(filaActual);
    }
    console.log("matriz 5x5 (fila + columna):");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" | "));
    }

    