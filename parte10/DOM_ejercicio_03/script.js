/*
Con las imágenes del juego de magic (anverso y reverso) haz una página que muestre primero el reverso de la carta. 
Cuando se haga click en esa imagen, desaparecerá y en su lugar aparecerá el anverso. 
Si hacemos click en el anverso, éste desaparecerá y aparecerá el reverso. Así hasta que nos aburramos*/
let carta = document.getElementById("carta")
carta.src = "/Users/easyer/Desktop/bootcamp/parte10/DOM_ejercicio_03/reverso.png";
let anverso = true;

document.getElementById("carta").addEventListener("click", function(){
if (anverso){
    carta.src="/Users/easyer/Desktop/bootcamp/parte10/DOM_ejercicio_03/anverso.jpg";
}
  else{
    carta.src = "/Users/easyer/Desktop/bootcamp/parte10/DOM_ejercicio_03/reverso.png"
    }
    anverso=!anverso
});








