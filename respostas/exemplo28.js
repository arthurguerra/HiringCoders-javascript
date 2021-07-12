//Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

function desconto(preço, percentual) {
    let desconto = preço * percentual / 100
    let precoFinal = preço - desconto
    
    console.log(`Valor Originla: ${preço}`)
    console.log(`Valor do Desconto: ${desconto}`)
    console.log(`Preço a pagar: ${precoFinal}`)
}

desconto(700, 30)