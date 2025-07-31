// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.
for (let base = 2; base <= 5; base++) {
    for (let exponente = 1; exponente <= 3; exponente++) {
        let resultado = 1;
        let pasos = `${base} elevado a la ${exponente} es: `;
        
        for (let i = 1; i <= exponente; i++) {
            resultado *= base;
            pasos += `${base}${i < exponente ? ' * ' : ' = '}`;
        }
        
        console.log(`${pasos}${resultado}`);
    }
}