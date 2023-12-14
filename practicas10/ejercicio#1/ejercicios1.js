let placa = "ABC-2030";
let numeros = placa.match(/\d+/);

if (numeros) {
  let parteNumerica = numeros[0];
  console.log("Salida:", parteNumerica);
} else {
  console.log("No se encontraron números en la placa.");
}