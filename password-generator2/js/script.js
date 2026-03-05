const palavra = document.getElementById('palavra')
const tamanho = document.getElementById('tamanho')
const maiusculas = document.getElementById('maiusculas')
const minusculas = document.getElementById('minusculas')
const numero = document.getElementById('numero')
const simbolo = document.getElementById('simbolo')
const final = document.getElementById('final')
const botaocopia = document.getElementById('botaocopia')
const senhacopa = document.getElementById('final')


const form = document.getElementById('form')

const todosmaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const todosminusculas = "abcdefghijklmnopqrtsuvwxyz"
const todosnumeros = "0123456789"
const todossimbolos = "!@#$%&"



form.addEventListener('submit', (e) => {

    var digitos = ""
    var senhafinal = ""
    const tamanhosenha = tamanho.value

    if (maiusculas.checked) { digitos += todosmaiusculas }
    if (minusculas.checked) { digitos += todosminusculas }
    if (numero.checked) { digitos += todosnumeros }
    if (simbolo.checked) { digitos += todossimbolos }

    for (var i = 0; i < tamanhosenha; i++) {
        var aleatorio = Math.floor(Math.random() * digitos.length)
        senhafinal += digitos[aleatorio]
    }

    if(digitos === "") {
        window.alert("Selecione os itens para sua senha")
        senhafinal = ""
    }

    /*var posicao = Math.floor(Math.random() * ((tamanhosenha - tamanhopalavra)))
    var j = 0
    for (var i = posicao; i < tamanhosenha; i++) {
    
        senhafinal = senhafinal.replace(senhafinal[i],palavraescrita[j])
        j++
    }*/

    final.value = senhafinal

    e.preventDefault()

})


botaocopia.onclick = function() {
    senhacopa.select();
    document.execCommand("Copy")
}

