/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

function studentPassed(grade) {
  if (grade < 50) {
    return "failed";
  }
  {
    return "Passed";
  }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed(49));
console.log("'" + grade2 + "': " + studentPassed(50));
console.log("'" + grade3 + "': " + studentPassed(100));

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/
