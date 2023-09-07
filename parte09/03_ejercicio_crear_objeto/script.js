/*Crea un objeto coche con las siguientes propiedades:
a. Color → rojo
b. Marca → Ford
c. Modelo → Focus
d. Motor → cilindros: 4, capacidad: 2.2
*/
let coche = {
    color: "Rojo",
    marca: "Ford",
    modelo:"Focus",
    motor:{
        cilindros:4,
        capacidad:2.2,
    }
}
let motorcilindros = coche.motor.cilindros;
let motorcapacidad = coche.motor.capacidad;

console.log(coche.color);
console.log(coche.marca);
console.log(coche.modelo);
console.log(motorcilindros);
console.log(motorcapacidad);