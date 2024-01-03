var idade = 69
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
  console.log(`Não Vota`)/*OBS. Dentro do node utilizamos o console.log. Só utilizamos o window.document quando estivermos dentro do navegador*/
}
else if (idade >= 16 && idade < 18){
  console.log(`Voto opcional`)
  }
  
  else if (idade >= 65) {
    console.log(`Voto opcional`)
  }

else  {
  console.log(`Voto obrigatório`)
}