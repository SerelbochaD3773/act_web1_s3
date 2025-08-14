// Ejercicio For 1: Tabla de Multiplicar Completa
// Usa ciclos for anidados para crear las tablas de multiplicar del 1 al 10. 
// Presenta los resultados en formato de tabla organizada.

console.log("tablas de multiplicar")
console.log("--------------------");
for ( let i = 1; i <= 10; i++){
    for (let z = 1; z <= 10; z++) {
      console.log(`${i} x ${z} = ${i * z}`);  
    }
    console.log("--------------------");

}