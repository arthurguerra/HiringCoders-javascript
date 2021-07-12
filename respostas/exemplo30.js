//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function calculaJantar(preço) {
    let garçom = preço * 10 / 100
    let valorFinal = preço + garçom

    console.log(`Taxa do Garçom (10%): R$${garçom}`)
    console.log(`Valor Total = R$${valorFinal}`)
}

calculaJantar(75.58)