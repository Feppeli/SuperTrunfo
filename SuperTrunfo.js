var cartaChristiane = {
    nome: "Thor",
    imagem:"https://cdn.ome.lt/pfIcbIk870YITAzNsEQ2Tx8kdlA=/1200x630/smart/extras/conteudos/thor-love-5.jpg",
    atributos:{ 
    ataque:80,
    defesa:60,
    magia:90
    }
}
  
var cartaArthur = {
    nome: "Homem Aranha",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOZ3Jd6cPfwq-kv9jnB8LEg95WhRHDVtcgg&usqp=CAU",
    atributos: {
    ataque:80, 
    defesa:65,
    magia:60
  }
}
  
var cartaAlex = {
    nome: "Homem de Ferro",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKJaG94gKfqvjaeYebES0loDS_uImMaru1Q&usqp=CAU",
     atributos: {
    ataque:90, 
    defesa:65,
    magia:68
  }
}
  
var cartaIsabella = {
    nome: "Viuva negra",
    imagem:"https://files.nsctotal.com.br/s3fs-public/styles/itapema_blog_post_header/public/2019-07/VN003.jpg?2u4baFQ6jFSzBsibg3hCB5Ce3us8vNbK&itok=8Ie-DBXO",
    atributos:{ 
    ataque:88,
    defesa:70,
    magia:90
    }
}
  
var cartaYasmin = {
    nome: "capitã Marvel",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGO-NcF2g0EKppmElNs4Exrsg4JOLmmxKTdw&usqp=CAU",
    atributos: {
    ataque:88, 
    defesa:75,
    magia:80
  }
}
  
var cartaMarcela = {
    nome: "Feiticeira Escarlate",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3cPMwzgeB3j_66vFOcf4BWKQxV6YWIW2cg&usqp=CAU",
    atributos: {
    ataque:90, 
    defesa:80,
    magia:90
  }
}

var cartaRosana = {
    nome: "Hulk",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcvu6kdrV-Pp81CZ_113v2J83RjiPDmHVXg&usqp=CAU",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
      }
}
  
var cartaLucas = {
    nome: "Dr EStranho",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jnWN7BtCYecm2HjtgIsCMbcI4jkg5xhHVw&usqp=CAU",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 100
      }
}
  
var cartaMaquina 
var cartaJogador 
var cartas = [cartaChristiane, cartaArthur, cartaAlex, cartaIsabella, cartaYasmin, cartaMarcela, cartaRosana, cartaLucas]
                // 0              1             2            3             4               5           6           7            
  
var pontosJogador = 0
var pontosMaquina = 0
  
atualizaPlacar()
atualizaQuantidadeDeCartas()
  
function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
  
    divQuantidadeCartas.innerHTML = html
}
  
function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
    divPlacar.innerHTML = html
}
  
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
}
  
function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
  
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status'>"
  
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
  
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}
  
function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
          pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}
  
function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
  
    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status --spacing'>"
  
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
  
function proximaRodada() {
    var divCartas = document.getElementById('cartas')
  
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
  
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}
