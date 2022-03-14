// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplicarPor(number){
    return number * 100;
}
numbersPorCien = numbers.map(multiplicarPor)

console.log(numbersPorCien);

console.log(numbers.map(function (number){ return number *100}));

console.log(numbers.map((number) => { return number *100}));

console.log(numbers.map(number => number *100));

let numeroPorCien = number => number *100;

console.log(numbers.map(numeroPorCien));