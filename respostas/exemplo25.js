// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

// function divisor(num1, num2) {
//     let resultadoDivisão = num1 / num2

//     if (num1 % num2 === 0) {
//         console.log(`${resultadoDivisão} é PAR!`)
//     } else {
//         console.log(`${resultadoDivisão.toFixed(2)}`)
//     }
// }

// divisor(1, 5)

let resultado;

function divisao (a, b) {
    resultado = a/b;
    if (a % b === 0) {
        console.log(`Resultado da divisão: ${resultado}`)
        console.log(`${resultado} é par`)
    } else {
        console.log(`Resultado da divisão: ${resultado}`)
    }
}

divisao(5, 4);
