function age(raiz, name, numero){
    
    return "Hola! mi nombre es " + name + " y este programa calcula la raiz cuadrada de un numero." + "\n" + " Por ejemplo la raiz cuadrada de " + numero + " es " + (Math.sqrt(raiz)) + "." ;
}

const result = age (100, "laeken", 100)


console.log(result);


/*Lo que hace mi funcion es calcular la raiz cuadrada de cualquier numero a traves de la funcion Math.sqrt(), al cual le di el parametro "raiz". 
El parametro "numero" es para referirse al numero con el cual estamos calculando la raiz cuadrada y se pueda mostrar en el bash al igual que el parametro "name" que use para mostrar mi nombre.
De esta manera llamando a cada uno de estos parametros dentro de la funcion puedo obtener lo que quiero de regreso en el return.*/

/*La diferencia es que a traves del comando console.log podemos observar las cadenas u objetos que componen nuestro codigo en cambio el comando return finaliza la funcion y devuelve un valor a quien llama a la misma.*/