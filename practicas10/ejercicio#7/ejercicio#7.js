function obtenerIDGoogleDrive(url) {
    // Verificar si la URL es una URL de Google Drive válida
    const regex = /(?:drive\.google\.com\/(?:file\/d\/|open\?id=|folderview\?id=|drive\/folders\/)|drive\.google\.com\/drive\/u\/\d\/folders\/)([^\/\?&]+)/;
    const match = url.match(regex);
  
    if (match && match[1]) {
      const idRecurso = match[1];
      return idRecurso;
    } else {
      return "No se pudo obtener el ID del recurso compartido de Google Drive. Verifica la URL ingresada.";
    }
  }
  
  // Ejemplo de uso
  const urlGoogleDrive = prompt("Ingresa la URL de Google Drive:");
  
  // Verificar si el usuario hizo clic en "Cancelar"
  if (urlGoogleDrive !== null) {
    const idRecurso = obtenerIDGoogleDrive(urlGoogleDrive);
  
    // Mostrar el resultado con un alert
    if (idRecurso) {
      alert("ID del recurso compartido de Google Drive: " + idRecurso);
    } else {
      alert("No se pudo obtener el ID del recurso. Verifica la URL ingresada.");
    }
  } else {
    alert("Operación cancelada por el usuario.");
  }
  