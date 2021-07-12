// Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos.

function mediaEntreNumeros(num1, num2, num3, num4, num5) {
    let media = (num1 + num2 + num3 + num4 + num5) / 5
    return `${num1} + ${num2} + ${num3} + ${num4} + ${num5} = ${media} `
}

console.log(mediaEntreNumeros(2, 6, 2, 8, 8))