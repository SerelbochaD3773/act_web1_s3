// Ejercicio While 3: Validador de Contraseña
// Implementa un sistema que use un ciclo while para solicitar una contraseña al usuario hasta que ingrese 'admin123'. Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.


let intentos = ["clave123", "admin456", "secreto789", "admin123"];
let intentosFallidos = 0;
let i = 0;

while (i < intentos.length) {
    let contraseñaActual = intentos[i];
    console.log(`Intento ${i + 1}: Probando contraseña: ${contraseñaActual}`);
    
    if (contraseñaActual === "admin123") {
        console.log(`¡Acceso concedido! Contraseña correcta en el intento ${i + 1}`);
        console.log(`Total de intentos fallidos: ${intentosFallidos}`);
        break;
    } else {
        console.log("Contraseña incorrecta");
        intentosFallidos++;
    }
    i++;
}

if (i >= intentos.length) {
    console.log("Se agotaron todos los intentos");
}