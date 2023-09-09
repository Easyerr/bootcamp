/*Escribe un programa que pida al usuario dos números. 
Usa esos 2 números en una función que divide el primero por el segundo y devuelve el resultado. 
Muestra el resultado que devuelve la función en un alert. 
Después vuelve a pedir los números y hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número.*/

function operacionUno (numeroUno, numeroDos){
return numeroUno/numeroDos
}
while (true){

    numeroUno = parseInt(prompt("Ingresa un número:"));
    numeroDos = parseInt(prompt("Ingresa otro número"));

  if (numeroDos === 0){

    alert ("Dividir por 0 es como no dividir")
    break;//esto no esta en los PDFs pero es la hostia juasjuas
}
let resultado = operacionUno (numeroUno, numeroDos);
alert(resultado)
}



