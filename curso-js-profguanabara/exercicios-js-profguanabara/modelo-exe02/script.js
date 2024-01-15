function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')//este é igual ao de baixo
  var res = document.querySelector('div#res')//este é igual ao de cima. Pode ser feito destas duas maneiras.
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    
  }

  var fsex = document.getElementsByName('radsex')
  var idade = ano - fano.value
  var genero = ''
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  if (fsex[0].checked) {
    genero = 'Homem'
    if (idade >= 0 && idade < 10) {
      //criança
      img.setAttribute('src', 'imagem-menino.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'imagem-jovem-m.png')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'imagem-adulto.png')
    } else {
      //idoso
      img.setAttribute('src', 'imagem-idoso.png')
    }

  } else if (fsex[1].checked) {
    genero = 'Mulher'
    if (idade >= 0 && idade < 10) {
      //criança
      img.setAttribute('src', 'imagem-menina.png')
    } else if (idade < 21) {
      //jovem
      img.setAttribute('src', 'imagem-jovem-f.png')
    } else if (idade < 50) {
      //adulto
      img.setAttribute('src', 'imagem-adulta.png')
    } else {
      //idoso
      img.setAttribute('src', 'imagem-idosa.png')
    }
  }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}