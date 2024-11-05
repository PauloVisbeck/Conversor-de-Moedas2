// Carregamento do botão e do select em variáveis
const convertButton = document.querySelector("#converter")
const seletorDeMoedas = document.getElementById("seletorDeMoedas")

// Adicionado ouvinte de evento no botão
convertButton.addEventListener("click", convertValues)

// Função que realiza a conversão de moedas quando clica no botão
async function convertValues() {
    const valorDigitado = document.getElementById("valorParaConversao").value
    const valorFormatado = parseFloat(valorDigitado.replace(",", "."))

    // Escreve o valor informado já formatado em reais na tela
    const valorMoedaReais = document.querySelector(".valorMoedaReais")
    // Formatação de valores para moedas usando a função Intl do JavaScript
    valorMoedaReais.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorFormatado)

    const valorMoedaEstrangeira = document.querySelector(".valorMoedaEstrangeira")

    // Consumindo API para conversão de moedas
    const cotacaoAPI = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then (response => response.json())

    console.log(cotacaoAPI)
    console.log(seletorDeMoedas.value)

    //Utilizando valores de cambio da API
    let cotacaoDolar = cotacaoAPI.USDBRL.high
    let cotacaoEuro = cotacaoAPI.EURBRL.high
    let cotacaoLibra = cotacaoAPI.GBPBRL.high

    // Conforme a moeda escolhida no select, realiza o cálculo e a formatação da mesma
    if (seletorDeMoedas.value == "dolar") {         
        valorMoedaEstrangeira.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorFormatado / cotacaoDolar)
    }
    else if (seletorDeMoedas.value == "euro") {        
        valorMoedaEstrangeira.textContent = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorFormatado / cotacaoEuro)
    }
    else if (seletorDeMoedas.value == "libra") {        
        valorMoedaEstrangeira.textContent = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorFormatado / cotacaoLibra)
    }
}

// Adicionado ouvinte de evento no select
seletorDeMoedas.addEventListener("change", alteraBandeira)

// Função que realiza a alteração da moeda quando muda o select
function alteraBandeira() {
    const nomeMoeda = document.getElementById("nomeMoeda")
    const imagemMoeda = document.getElementById("img-Moeda")
    //console.log(nomeMoeda.textContent)

    if (seletorDeMoedas.value == "dolar") {         
       nomeMoeda.textContent = "Dólar americano"
       imagemMoeda.src = "./assets/dolar.png"
    }
    else if (seletorDeMoedas.value == "euro") {         
        nomeMoeda.textContent = "Euro"
        imagemMoeda.src = "./assets/euro.png"
    }
    else if (seletorDeMoedas.value == "libra") {         
        nomeMoeda.textContent = "Libra esterlina"
        imagemMoeda.src = "./assets/libra.png"
    }

    // Testa se o valor do input não está em branco e então chama a função de converter valor. Desta forma cada vez que mudar o select e já tiver valor digitado o programa além de trocar a bandeira e o nome da moeda já fará a conversão sem precisar clicar no botão.
    const input = document.getElementById("valorParaConversao").value
    if (input.trim() != ""){
        convertValues()
    }
    
}



