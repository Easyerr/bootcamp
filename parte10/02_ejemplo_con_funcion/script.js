function saludar(repeticiones) {
  let mensaje = ""; 
  for (let i = 0; i < repeticiones; i++) {
    mensaje += "Hola "; 
  }
  alert(mensaje);
}

saludar(5); 
saludar(3); 
console.log(mensaje);
