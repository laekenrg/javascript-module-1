function upperCase(ment1 , ment2, ment3, ment4, ment5){
    
return ment1 + "\n" + ment2 + "\n" + ment3 + "\n" + ment4 + "\n" + ment5;
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var greetingMentor1 = "hello " + mentor1;
var greetingMentor2 = "hello " + mentor2;
var greetingMentor3 = "hello " + mentor3;
var greetingMentor4 = "hello " + mentor4;
var greetingMentor5 = "hello " + mentor5;

var ment1UC = greetingMentor1.toUpperCase();
var ment2UC = greetingMentor2.toUpperCase();
var ment3UC = greetingMentor3.toUpperCase();
var ment4UC = greetingMentor4.toUpperCase();
var ment5UC = greetingMentor5.toUpperCase();

 

var mentorsNames = upperCase(ment1UC, ment2UC, ment3UC, ment4UC, ment5UC)

console.log(mentorsNames);

