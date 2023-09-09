/*
      Crea un html con un párrafo y un botón. 
      El párrafo tendrá dentro la frase “la variable está en false”. 
      Cuando hagamos click en el botón, el valor de la variable cambiará a: 
      true y el párrafo tendrá dentro la frase “la variable está en true”.*/
      
      let button = document.querySelector("#btn");
      let p = document.querySelector("#num")
      button.addEventListener("click", function () {
        p.innerHTML = "la variable está en true"
    })
