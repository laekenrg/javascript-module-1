/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
  if (mark < 50) {
    return "F";
  } else if (mark >= 80) {
    return "A";
  } else if (mark < 80 && mark > 60) {
    return "B";
  } else if (mark <= 60 && mark > 50) {
    return "C";
  }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(49));
console.log("'" + grade2 + "': " + calculateGrade(90));
console.log("'" + grade3 + "': " + calculateGrade(70));
console.log("'" + grade4 + "': " + calculateGrade(55));

/* 
  EXPECTED RESULT
  ---------------
  '49': F
  '90': A
  '70': B
  '55': C
  */
