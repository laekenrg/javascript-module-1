function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}
function nombresMayusculas(array) {
 return array.map(nombres => nombres.toUpperCase()).sort()
}

console.log(magician(nombresMayusculas));

console.log(magician(nombres => nombres.map(names => names.toUpperCase()).sort()));