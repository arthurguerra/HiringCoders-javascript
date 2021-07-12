// Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function calculaIMC(altura, massa) {
    let IMC = massa / (altura * altura)
    return `IMC: ${IMC.toFixed(3)}`
}

console.log(calculaIMC(altura,massa))