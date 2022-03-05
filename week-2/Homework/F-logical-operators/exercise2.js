/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(negativeNumb) { if
 (negativeNumb < 0) {
   return true
 } else { (negativeNumb > 0)}
 return false
}

function isBetween5and10(number){
  if (number<= 10 && number>= 5)
  {return true}
  else{
    return false
  }
}
function isShortName (name) {
  const nameLength = name.length;
  if( nameLength<= 6) {
    return true
  }
  else {
    return false
  }
}

function startsWithD (nameInitial) {
  const firstLetter = nameInitial.charAt(0);
  if(firstLetter === "D") {
    return true
  }
  else {
    return false
  }
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'? true
*/
