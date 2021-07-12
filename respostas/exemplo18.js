// Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function calculaDesconto(valor, desconto) {
    let valorDesconto = valor * desconto / 100

    return `Valor Original: R$${valor} \nValor após desconto de ${desconto}%: R$${valorDesconto}`
}

console.log(calculaDesconto(100, 5))
