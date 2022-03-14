let claseEs =["Vanessa", "Jorgelina", "Javier", "Linda"]
let claseEN =["Gloria", "Mathew", "Carlos"]
let claseCompleta = claseEs.concat(claseEN)
let claseOrdenada = claseCompleta.sort()
 function alumnosMigra(nombre) {
     let arregloConvertido = claseOrdenada.join(",");
     if (claseCompleta.includes(nombre)) {
        return nombre + " está en la clase con " + arregloConvertido}
        {return nombre + " no está en la clase con " + arregloConvertido}
    }      
console.log(claseOrdenada);
console.log(alumnosMigra("Linda"));

/*let alumnosMigraCode = ["Vanessa", "jorgelina", "javier", "linda"]
function verificacionDeNombre (nombre){
    if(alumnosMigraCode.includes(nombre)){
    return nombre + "está en la clase with " + alumnosMigraCode}
    {return nombre + " no está en la clase con " + alumnosMigraCode}
}
console.log(verificacionDeNombre("laeken"));*/
