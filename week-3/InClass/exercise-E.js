
function edad(birthYear) {
    return 2022 - birthYear
}

let añoNacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

let edades = añoNacimiento.map(edad)

console.log(edades);

console.log(añoNacimiento.map(año => 2022 - año ));