function generarAsignacionFilasLaboratorio(laboratorio, cantidadFilas) {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Alfabeto
    const asignaciones = [];
  
    for (let i = 0; i < cantidadFilas; i++) {
      const fila = letras[i % letras.length]; // Obtener la letra correspondiente
      const asignacion = `LAB${laboratorio}#${fila}`;
      asignaciones.push(asignacion);
    }
  
    return asignaciones;
  }
  
  // Ejemplo de uso
  const laboratorio = 2;
  const cantidadFilas = 5;
  const asignaciones = generarAsignacionFilasLaboratorio(laboratorio, cantidadFilas);
  
  // Mostrar las asignaciones con un alert
  if (asignaciones.length > 0) {
    alert("Asignaciones de letras para las filas del laboratorio:\n" + asignaciones.join("\n"));
  } else {
    alert("No se pudo generar ninguna asignación. Verifica los parámetros.");
  }
  