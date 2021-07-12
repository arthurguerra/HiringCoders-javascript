// Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function conversorDeMoedas(real) {
    let dolar = real / 5.26

    return `R$${real}  <------------>  U$${dolar.toFixed(2)}`
}

console.log(conversorDeMoedas(10))