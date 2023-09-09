/*
Pide por prompt un número. Recójelo en una variable. 

Pinta un párrafo en el html en el que inicialmente se mostrará ese valor, y un botón debajo. 
El botón ejecutará una función que recibirá ese número 
como argumento y lo sumará al número inicial.  */


let number = parseInt(prompt("teclea un numero:"));
document.querySelector("#num").innerHTML = number

let button = document.querySelector("#btn");



button.addEventListener("click", function () {
    addNumber(number)
})
function addNumber(number){
    let p = document.querySelector("#num");
    p.innerHTML = parseInt(p.innerHTML) + number
}

 