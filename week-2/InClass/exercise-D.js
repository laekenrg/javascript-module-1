function miEstadoDeAnimo(emocion) {
  if (emocion === "Feliz") {
    return "Good job, you're doing great!";
  } else if (emocion === "Triste") {
    return "Every cloud has a silver lining";
  } else if (typeof emocion === "number") {
    return "Beep beep boop";
  } else {
    return "I'm sorry, I'm still learning about feelings!";
  }
}

console.log(miEstadoDeAnimo(99999));
