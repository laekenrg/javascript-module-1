var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentores(mentor) {
  const UpperCaseNames = mentor.toUpperCase();
  return UpperCaseNames;
}
/*console.log(mentores(mentor1));
 console.log(mentores(mentor2));
 console.log(mentores(mentor3));
 console.log(mentores(mentor4));
 console.log(mentores(mentor5));*/

function saludoCompleto(mentor) {
  return "HELLO" + " " + mentores(mentor);
}

console.log(saludoCompleto(mentor1));
console.log(saludoCompleto(mentor2));
console.log(saludoCompleto(mentor3));
console.log(saludoCompleto(mentor4));
console.log(saludoCompleto(mentor5));
