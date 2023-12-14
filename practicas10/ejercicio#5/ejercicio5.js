function obtenerNombreUsuario(correo) {
    // Dividir el correo electrónico en nombre de usuario y dominio usando el separador '@'
    const partes = correo.split('@');
  
    // El nombre de usuario estará en la primera parte del array
    const nombreUsuario = partes[0];
  
    return nombreUsuario;
  }
  
  // Ejemplo de uso
  alert(obtenerNombreUsuario('ejemplo@correo.com')); // Devolverá 'ejemplo'