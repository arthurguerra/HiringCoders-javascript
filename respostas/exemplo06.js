//Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

function desapegada(custo, desconto) {
    let valorVenda = custo - ((custo * desconto) / 100)
    return `Custo do Produto: R$${custo} \nDesconto: ${desconto}% \nValor de Venda: R$${valorVenda}`
}

console.log(desapegada(3000, 25))
