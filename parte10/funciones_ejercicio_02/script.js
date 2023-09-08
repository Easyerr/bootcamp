/*Escribe una función a la que le damos dos números y que devuelva 
true si el primer número es más grande que el segundo número y 
false en el caso contrario. 
Pide dos números al usuario, y pásalos a la función. 
Muestra en consola “El primer número es más grande” o “El primer número no es más grande”.*/


function comparador (numeroUno, numeroDos){
return numeroUno>numeroDos;
}
numeroUno = parseInt(prompt("Ingresa un número:"));
numeroDos = parseInt(prompt("Ingresa otro número"));
if(comparador(numeroUno, numeroDos)){
    alert("el primer número es mas grande");
}
else if(numeroUno === numeroDos){
    alert("Los dos numeros son iguales")
}
else (
alert("el primer numero es mas pequeño")
    )


/*numeroUno = parseInt(prompt("Ingresa un número:"));
numeroDos = parseInt(prompt("Ingresa otro número"));
if(numeroUno > numeroDos){
alert("el primer número es mas grande");
}
if(numeroUno<numeroDos){
    alert("el primer numero es mas pequeño")
}
if(numeroUno=numeroDos){
    alert("Los dos numeros son iguales")
}*/