agora = new Date() 
diasem = agora.getDay()
/* Para o javascript, os dias da semana são mostrados da seguinte forma.
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
console.log(diasem)

switch(diasem) {
  case 0:
    console.log('Domingo')
    break

  case 1:
    console.log('Segunda-feira')
    break

  case 2: 
    console.log('Terça-feira')
    break

  case 3:
    console.log('Quarta-feira')
    break

  case 4:
    console.log('Quinta-feira')
    break

  case 5:
    console.log('Sexta-feira')
    break

  case 6:
    console.log('Sábado')
    break

  default:
    console.log('[ERRO] Dia inválido')

}