// Crie uma função que determina se um número é par ou impar.

function parOuImpar(numero) {
    let num = parseInt(numero)
    if (num % 2 == 0) {
        return `O número ${num} é PAR!`
    } else {
        return `O número ${num} é ÍMPAR!`
    }
}

console.log(parOuImpar(-2))