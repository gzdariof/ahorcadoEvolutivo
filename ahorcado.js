'use strict';
 
let palabra = "MARIPOSA";
let palabraOculta = "";
let intentos = 6;

for (let i = 0; i < palabra.length; i++) {
    palabraOculta += "_";
}

console.log(palabraOculta);
while (intentos > 0) {
    let letraDigitada = prompt("Ingrese una letra:").toUpperCase();
    if (palabra.includes(letraDigitada)) {
        let nuevaPalabraOculta = "";
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letraDigitada) {
                nuevaPalabraOculta += letraDigitada;
            } else {
                nuevaPalabraOculta += palabraOculta[i];
            }
        }
        palabraOculta = nuevaPalabraOculta;
        alert("¡Correcto!: " + palabraOculta);
        if (palabraOculta === palabra) {
            alert("¡Felicidades! Has ganado. La palabra era: " + palabra);
            break;
        }
    } else {
        intentos--;
        alert("¡Incorrecto! Intentos restantes: " + intentos);
    }
}