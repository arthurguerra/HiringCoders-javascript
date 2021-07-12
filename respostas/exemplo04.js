// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

function queroLucar(porcentagem, valor, lucro) {

    let valorTotal = (valor * 100) / porcentagem

    let valorVenda = valorTotal + (valorTotal * lucro / 100)

    return `Valor total do produto: R$${valorTotal} \nPara obter um lucro de ${lucro}% é necessário vender o produto por: R$${valorVenda}.`
}

console.log(queroLucar(60, 300, 25))