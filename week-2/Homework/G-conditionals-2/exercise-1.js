/*
  Conditionals
  ---------------------------------
  Write a function to test if a provided number is negative or positive
  - if number is less than zero, return the word "negative"
  - if number is more or equal to zero, return the word "positive"
*/

function negativeOrPositive(number) {
  if (number >= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var number1 = 5;
var number2 = -1;
var number3 = 0;

console.log(number1 + " is " + negativeOrPositive(5));
console.log(number2 + " is " + negativeOrPositive(-1));
console.log(number3 + " is " + negativeOrPositive(0));

/* 
  EXPECTED RESULT
  ---------------
  5 is positive
  -1 is negative
  0 is positive
*/
