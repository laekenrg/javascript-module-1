function añoDeNacimiento(age) {
  return 2022 - age;
}

function datosCompletos(age, name) {
  return (
    "Mi nombre es " + name + " y nací en el año " + añoDeNacimiento(age) + "."
  );
}

console.log(datosCompletos(28, "laeken"));
