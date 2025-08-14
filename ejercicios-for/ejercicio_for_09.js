// Ejercicio For 9: Simulador de Dados
// Utiliza un ciclo for para generar la siguiente secuencia: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Debe mostrar cada término y la suma total de la secuencia.
let sumaTotal = 0;
let secuencia = 1;
for (let i = 1; i <= 10; i++) {
  secuencia *= 2;
  sumaTotal += secuencia;

  // Esto genera la secuencia 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024
  console.log(`Término ${i}: ${secuencia}`);
}

console.log(`Suma total de la secuencia: ${sumaTotal}`);
