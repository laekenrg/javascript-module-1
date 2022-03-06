function comprobacionDeUsuario(username, usertype) {
  const primeraLetra = username.charAt(0);
  const longitudUser = username.length;
  const longitudValida = longitudUser >= 5 && longitudUser <= 10;
  const accesoTotal = usertype === "Manager" || usertype === "Admin";

  if (
    accesoTotal ||
    (primeraLetra === primeraLetra.toUpperCase() && longitudValida)
  ) {
    return "Username valid";
  } else {
    return "Username invalid";
  }
}

console.log(comprobacionDeUsuario("Laeken", "Admin"));
