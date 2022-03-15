let añoNacimiento = [1964, 2008, 1999, 2005, 1978, 1985, 1919]
function edad(birthYear) {
    return 2022 - birthYear
}

function verificandoEstado(birthYear) {
    const age = edad (birthYear)
if (age >= 17)
{
    return "Nació en " + (birthYear) + " puede manejar." 
}
else {
    const añosParaManejar = 17 - age
    return "Nació en " + (birthYear) + " puede manejar en " + (añosParaManejar) + " años." 
}
}
console.log(añoNacimiento.map(verificandoEstado));

añoNacimiento.forEach( year => console.log(verificandoEstado(year)))