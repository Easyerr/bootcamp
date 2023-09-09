/* 
Crea un aplicación que nos convierta una cantidad de euros introducida por teclado a otra moneda, 

estas pueden ser a dólares, yenes o libras. 

El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será un string. 

Este no devolverá ningún valor, mostrará un mensaje indicando el cambio.
      
            a. 0.86 libras es un 1 €
            b. 1.28611 $ es un 1 €
            c. 129.852 yenes es un 1 € */

            function convertirMoneda(cantidadEuros , monedaextranjera) {
                return  cantidadEuros * monedaextranjera
            };
                
                let monedaDolares = 1.28;
                let monedaLibras = 0.86;
                let monedaYenes = 129;//he redondeado el número porque si no me aparcen un montón de decimales :)
            
            let cantidadEuros = parseFloat(prompt("Introduce la cantidad en euros:"));
            let resultadoDolares = convertirMoneda(cantidadEuros, monedaDolares);
            let resultadoLibras = convertirMoneda(cantidadEuros, monedaLibras);
            let resultadoYenes = convertirMoneda(cantidadEuros, monedaYenes);
            alert(cantidadEuros + " Euros son " + resultadoDolares + " Dolares, "+ resultadoLibras + " Libras\n "+ resultadoYenes + " Yenes");

           
            


/*let  euro = 1;
let libra = 0.86;
let dolar = 1.28611;
let yen = 129.852;
if(monedaextranjera === libra

)

let resultado = monedaextranjera * euro
alert(resultado)*/