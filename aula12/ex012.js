var agora = new Date ()
var horas = agora.getHours()
console.log(`São exatamente ${horas} horas`)
if (horas >= 6 && horas <=12 ){
    console.log('Bom dia')
} else if (horas >= 13 && horas <= 18){
    console.log('Boa Tarde')
} else if (horas >= 19 && horas <= 23) {
    console.log('Boa noite')
} else if (horas >= 0 && horas <= 5){
    console.log('Boa madrugada')
}