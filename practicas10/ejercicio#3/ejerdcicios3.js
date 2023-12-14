let fecha = "2022-10-31";
let partesFecha = fecha.split("-");
let year = parseInt(partesFecha[0]);
let month = parseInt(partesFecha[1]);
let day = parseInt(partesFecha[2]);

let fechaObjeto = new Date(year, month - 1, day);
let nombreMes = fechaObjeto.toLocaleString('default', { month: 'long' });

console.log("El mes es:", nombreMes);