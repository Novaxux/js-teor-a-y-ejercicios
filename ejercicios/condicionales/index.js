// // if-else
// let edad = 50;

// if (edad>=18 && edad<100) {
//     console.log('Eres mayor de edad');
// }else if(edad<18 && edad>0){
//     console.log('Eres menor de edad');
// }
// else if (edad>=100 || edad<=0 ) {
//     console.log('Ingrese una edad válida');
// }
// // switch
// let Ave = "Perro";
// switch (Ave) {
//   case "Gallina":
//   case "Pato":
//   case "Cuervo":
//   case "Paloma":
//     console.log("Este animal es un ave.");
//     break;
//   case "Perro":
//   default:
//     console.log("Este animal no es un ave");
// }

let numero1=prompt('ingrese un numero')
let numero2=prompt('ingrese otro numero')

if (numero1==numero2){
  document.write("Son iguales")
}
else if (numero1<numero2){
  document.write('El numero dos es mayor al numero uno')
}
else if (numero1>numero2){
  document.write('El numero uno es mayor que el numero dos')
}
// numero par o impar

let numpar= prompt('Ingrese un numero')

if (numpar%2==0){
  console.log('Su numero es par')
}
else{
console.log('su numero es impar')
}

// división

let num1= prompt('ingrese un numero a dividir')
let num2= prompt('ingrese un numero a dividir')
let division = num1/num2;

if (num1==0 || num2==0){
console.log('Error')
}
else{
  console.log(division)
}