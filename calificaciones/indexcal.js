
function enviar(){
let cal_1= parseFloat(document.getElementById("cal1").value)
let cal_2= parseFloat(document.getElementById("cal2").value)
let cal_3= parseFloat(document.getElementById("cal3").value)

cal_final= (cal_1+cal_2+cal_3)/3

if (cal_final>=8){
    document.write('¡Felicidades, lo lograste!')
}
else {
    document.write('¡Lo siento, tienes ordinario!')
}
}
