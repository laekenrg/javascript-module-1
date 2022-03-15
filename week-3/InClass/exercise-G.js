let añoNacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
function edad(birthYear) {
    return 2022 - birthYear
}


const añosQuePuedenManejar = "Estas son los años de nacimiento en que la gente puede manejar : " + añoNacimiento.filter( year => edad (year) > 17) 

const stringToArray = añosQuePuedenManejar.split(',')

console.log(stringToArray);
