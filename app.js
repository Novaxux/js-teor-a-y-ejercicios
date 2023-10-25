"use strict"
// alert('Hola mundo');
//declarar variables en javascript
//var variable global
//let variable 
//const constante
//let y const nacen por que que son variables con alcance o con alcance/scope {}
// Ecmascript 6

// let nombre = prompt('Dame tu nombre')
// console.log(nombre)
// document.write(nombre)
let texto = 'mi nombre es manuel "otro texto"'
console.log(texto);


let edad = prompt('Dame tu edad')
// suma

Number(edad);
edad+5;
console.log(edad);
console.log(typeof(edad));
// concatenar
String(edad);
edad+5;
console.log(edad);

// booleanos
let boolean= true;
// triple igual es exactamente igual
let menor =(10==='10');
console.log(menor);

// fechas
let fecha= Date();
console.log(fecha);

// operadores aritmeticos
let suma = 1+2;
let resta = 1-6;
let multiplicacion= 4*6;
let division= 8/8;
let mod = 10%5;
let uno= 1;
uno++;
console.log(uno);

// operadores relacionales
let mayor = 5>3;
let menorq = 5<3;
let mayorigualque = 3>=5
let menorigualque = 3<=5
let igual = 10=='10'
// exactamente igual tambien cuenta los datos primitivos (string, number, bigint, boolean, undefined y symbol).
let exactamenteigual= 10==="10"
let diferente= 5!=4

// arrays conjunto de datos que se almacenan en una variable (inician en la posición 0)
let frutas=['pera','manzana','platano',null];
let numeros = ['uno',2,3,'cuatro']
console.log(frutas[3])
// cuando en una array tenemos una posición pero no está definida aparecerá un undefined

// objetos
let persona = {nombre:'manuel',edad:18, correo:'manuel@example.com'}

// objeto JSON (Javascript Object Notation) Formato de intercambio de datos ligero y descriptivo es un array de objetos

let personas = [
    {nombre:'manuel',edad:18, correo:'manuel@example.com'},
    {nombre:'juan',edad:32, correo:'juan@example.com'},
    {nombre:'pedro',edad:14, correo:'pedro@example.com'},
    persona,
]

// destructury Object
console.log(personas[2].correo)

// api es un servicio de backend que da una información tipo json  para la integración de datos, lo que facilita la transferencia eficiente de datos.


// operadores
let numero1=3;
let numero2=34;
// and ambas condiciones se tienen que cumplir
numero1>10 && numero2>0;
// or una condicion se tiene que cumplir
numero1>10 || numero2>0;
// not es la negación de una situación}
let negacion= !(numero1<10)