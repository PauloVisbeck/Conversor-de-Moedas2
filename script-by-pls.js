let input = document.getElementById("valorParaConversao")

input.addEventListener("input", function(){
    let valorDigitado = parseFloat(input.value.replace(",","."))
    console.log(valorDigitado)
})



let botao = document.querySelector("#converter")

botao.addEventListener("click", function(){
    //console.log("botão foi clicado")
    input = document.getElementById("valorParaConversao")
    let valorDigitado = parseFloat(input.value.replace(",","."))
    let resultado = valorDigitado * 5.00

    console.log(resultado)

    /* IMPORTANTE: Acesso ao elemento <span>: document.getElementsByTagName("span") retorna uma coleção de elementos (HTMLCollection), mesmo que haja apenas um <span>. Então é necessario informar qual é o span desejado. */ 
    let primeiroSpan = document.getElementsByTagName("span")[0]; // Acessa o primeiro elemento <span> na arvore DOM
    primeiroSpan.textContent = input.value

    let segundoSpan = document.getElementsByTagName("span")[1]; // Acessa o segundo elemento <span> na arvore DOM
    segundoSpan.textContent = resultado.toFixed(2)
    
})

// O CODIGO ACIMA PODERIA SER FEITO DA SEGUINTE MANEIRA (nesse caso colocaria um onclick no botão cfme abaixo):

/* A linha de código abaixo é a que fica no html */
/* <button onclick="calcularCambio()" id="converter">Converter</button> */

function calcularCambio() {
    let valorInput = document.querySelector("#valorParaConversao")
    let valorFormatado = parseFloat(valorInput.value.replace(",","."))

    let resultado = valorFormatado / 5.51
    let span = document.getElementsByTagName("span")

    span[0].textContent = valorFormatado.toFixed(2)
    span[1].textContent = resultado.toFixed(2)
}