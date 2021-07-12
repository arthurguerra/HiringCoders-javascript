//Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros.

function conversorDeMedidas(metros) {
    let milimetros = metros * 1000
    return `${metros} metros correspondem à ${milimetros} milímetros.`
}

console.log(conversorDeMedidas())