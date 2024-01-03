var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas`)

if (horas >= 7 && horas < 12) {
  console.log(`Olá! Bom dia!`)
}
else if (horas >= 12 && horas < 18) {
  console.log(`Olá! Boa tarde`)

}
else if (horas >= 1 && horas < 7) {
  console.log(`Ola! Boa madrugada!`)
}

else {
  console.log(`Olá! Boa noite!`)
}