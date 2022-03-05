function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

console.log(numberChecker("veinte"));

/*En la primera linea si declaramos un valor mayor nos retornara 
el mensaje" is gretater than20", en la segunda linea si es igual a 20 
nos retornará el mensaje "is equal to 20", en la tercera si el numero es menor
nos retornara "is less than 20" y en la ultima linea si le damos un valor que
no se aun numero por ejemplo un string nos retorna " isn't even a number" .*/ 
