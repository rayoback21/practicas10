function obtenerNombreUsuarioFacebook(url) {
    // Verificar si la URL es una URL de perfil de Facebook válida
    if (url.includes("facebook.com") && url.includes("/profile.php")) {
      // Extraer el nombre de usuario de la URL
      const inicioUsername = url.indexOf("/profile.php?id=") + 16;
      const finUsername = url.indexOf("&", inicioUsername);
      
      if (finUsername !== -1) {
        const nombreUsuario = url.substring(inicioUsername, finUsername);
        return nombreUsuario;
      } else {
        return "No se pudo encontrar el nombre de usuario en la URL.";
      }
    } else if (url.includes("facebook.com") && url.includes("/people/")) {
      // Extraer el nombre de usuario de la URL
      const inicioUsername = url.indexOf("/people/") + 8;
      const finUsername = url.indexOf("/", inicioUsername);
  
      if (finUsername !== -1) {
        const nombreUsuario = url.substring(inicioUsername, finUsername);
        return nombreUsuario;
      } else {
        return "No se pudo encontrar el nombre de usuario en la URL.";
      }
    } else {
      return "La URL no parece ser una URL de perfil de Facebook válida.";
    }
  }
  
  // Ejemplo de uso
  const urlFacebook = "https://www.facebook.com/Bryan.Bonilla1994bb21";
  const nombreUsuario = obtenerNombreUsuarioFacebook(urlFacebook);
  console.log("Nombre de usuario de Facebook:", nombreUsuario);
  