//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function fatorial(num) {
    let resultado = 1
    let string = ''

    for (let i = num; i > 0; i--) {
        resultado *= i             
        string += `${i} * `       
    }
    let fatorial = string.slice(0, -2)
    return `${num}! = ${fatorial} = ${resultado}`
}

console.log(fatorial(5))