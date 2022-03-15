/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

/*function capitalise(str) {
  let primeraLetra = str[0].toUpperCase()
  return primeraLetra+str.slice(1)
}*/

function capitalise(str) {
 str = str.split("")
str[0] = str[0].toUpperCase()
  return str.join("")
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));


/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
