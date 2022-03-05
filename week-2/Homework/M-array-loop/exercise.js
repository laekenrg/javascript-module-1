/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function getDaysStartingWithT(array){
  for (let index = 0; index < array.length; index++){
    const day = array[index]
    if (day.startsWith('T')){
      console.log(day);
    }
  }
}

getDaysStartingWithT(daysOfWeek)