let numeroOficina = "01.24";
let numeros = numeroOficina.split(".");

if (numeros.length === 2) {
  let piso = parseInt(numeros[0]);
  console.log("El número de piso es:", piso);
} else {
  console.log("El formato no es válido para obtener el número de piso.");
}