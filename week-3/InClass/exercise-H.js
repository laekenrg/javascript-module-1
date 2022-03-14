function confirmar(nombres) {
    if(nombres.find(nombre => nombre == "Laeken")){
        return "Me!"
    }else{
        return "Not Me!"
    }
    
}

console.log(confirmar(["Laeken","Linda","Linker"]));