let edad = prompt('introduce tu edad')
let nombre= prompt('introduce tu nombre')
let apellido= prompt('introduce tu apellido')

if (edad>=18 && edad<100) {
    document.write('Hola '+nombre+' '+apellido +' eres mayor de edad')
}else if(edad<18 && edad>0){
    document.write('Hola '+nombre+' '+apellido +' eres menor de edad')
}
else if (edad>=100 || edad<=0 ) {
    document.write('Ingrese una edad valida');
}


