// let numero1=25;
// let numero2=20;

// if (numero1>numero2){
//     console.log("El número "+numero1+' es mayor que el numero '+numero2)
// }
// else{
//     console.log("El número "+numero2+' es mayor que el numero '+numero1)
// }

// // pedir la edad de un usuario y decirle si es mayor y edad siempre y cuando te de un valor mayor a 0

// let edad=prompt('Dame tu edad');
// if (edad>0){
//     if (edad>=18){
//         document.write('Eres mayor de edad')
//     }   
//     else{
//         document.write('Eres menor de edad')
//     }
// }
// else{
//     document.write('Edad no válida')
// }

// // toLowerCase sirve para convertir a minúsculas
// let dia= prompt('ingrese un día de la semana').toLowerCase();


// switch(dia){
// case 'lunes':
//     console.log('El día que escribiste es lunes');
//     break;
// case 'martes':
//     console.log('El día que escribiste es martes');    
//     break;
// case 'miercoles':
//     console.log('El día que escribiste es miercoles');    
//     break;
// case 'jueves':
//     console.log('El día que escribiste es jueves');   
//     break;
// case 'viernes':
//     console.log('El día que escribiste es viernes');    
//     break;
// case 'sabado':
//     console.log('El día que escribiste es sabado');    
//     break;
// case 'domingo':
//     console.log('El día que escribiste es domingo');    
//     break;
// default:
//     console.log('Este no es un día de la semana');
//     break;
// }

// // operador ternario sintaxis: condicion ? true:false
// let numero1=15;
// let numero2=20;
// let valor=(numero1>numero2) ? 'el numero1 es mayor':'el numero 2 es mayor';
// document.write(valor);

// tipos de ciclos: definidos= foreach, for; e indefinidos: while, do while
//  los ciclos tienen repeticiones e iteraciones

// partes de un for= variable asignada - condicion - paso (incremento o decremento)
// for(let index=0; index <10; index++){
//  console.log(index);
// }

// let contador=0;

// while(contador<10){
//     console.log(contador)
//     contador++
// }

// let contador2=0;
// do{console.log('el valor de mi ciclo es '+(contador2++))
// }while(contador2<10)

// // tabla del uno
// numero=0
// while (numero<=10){
//     res=1*numero;
// console.log('1 x '+numero+' = '+res)
//     numero++ 
// }

// let dia= 1;

// while(dia<=5){
//     let horastrabajadas=prompt('¿Cuantas horas trabajaste el dia '+dia)
//     document.write('Trabajaste '+ horastrabajadas + ' horas el día '+ dia)
//     dia++
// }

// push introduce el valor dentro de una variable 

let array=[]
let dias=['lunes','martes','miercoles','Jueves','viernes']
for(let index=0; index <= 4; index++ ){
    let horastrabajadas=prompt('¿Cuantas horas trabajaste el dia '+dias[index]+'?');
    array.push(horastrabajadas);
    document.write('Trabajaste '+ horastrabajadas + ' horas el día '+ dias[index]);
}

let sueldo=0
for(let contador=0;contador<array.length;contador++){
    sueldo= sueldo+ (15*array[contador]);
}
document.write('tu sueldo es de ' + sueldo)

