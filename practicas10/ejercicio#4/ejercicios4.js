
function obtenerIniciales(numeroJugador) {
    let iniciales = "";
    for (let char of numeroJugador) {
        if (char.match(/[a-zA-Z]/)) {
            iniciales += char;
        }
    }
    return iniciales;
}

// Ejemplos
let jugador1 = "CR-7";
let jugador2 = "LM-10";
let jugador3 = "LFS-10";
let jugador4 = "AV-25";

let iniciales1 = obtenerIniciales(jugador1);
let iniciales2 = obtenerIniciales(jugador2);
let iniciales3 = obtenerIniciales(jugador3);
let iniciales4 = obtenerIniciales(jugador4);

alert(`Iniciales de ${jugador1}: ${iniciales1}`);
alert(`Iniciales de ${jugador2}: ${iniciales2}`);
alert(`Iniciales de ${jugador3}: ${iniciales3}`);
alert(`Iniciales de ${jugador4}: ${iniciales4}`);
