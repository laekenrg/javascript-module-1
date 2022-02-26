function mentores(mentor1, mentor2, mentor3, mentor4, mentor5) {
  return (
    mentor1.toUpperCase() +
    mentor2.toUpperCase() +
    mentor3.toUpperCase() +
    mentor4.toUpperCase() +
    mentor5.toUpperCase()
  );
}
function saludoCompleto(saludo, mentor1, mentor2, mentor3, mentor4, mentor5) {
  return (
    saludo.toUpperCase() +
    " " +
    mentor1.toUpperCase() +
    "\n" +
    saludo.toUpperCase() +
    " " +
    mentor2.toUpperCase() +
    "\n" +
    saludo.toUpperCase() +
    " " +
    mentor3.toUpperCase() +
    "\n" +
    saludo.toUpperCase() +
    " " +
    mentor4.toUpperCase() +
    "\n" +
    saludo.toUpperCase() +
    " " +
    mentor5.toUpperCase()
  );
}

console.log(
  saludoCompleto("Hola", "Daniel", "Irina", "Mimi", "Rob", "Yohannes")
);
