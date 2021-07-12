//Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console|

function calculadora(operação, num1, num2) {
    let resultado

    switch (operação.toLowerCase()) {

        case 'adição':
            resultado = num1 + num2
            return `${num1} + ${num2} = ${resultado.toFixed(2)}`

        case 'subtração':
            resultado = num1 - num2
            return `${num1} - ${num2} = ${resultado.toFixed(2)}`

        case 'multiplicação':
            resultado = num1 * num2
            return `${num1} * ${num2} = ${resultado.toFixed(2)}`

        case 'divisão':
            resultado = num1 / num2
            return `${num1} / ${num2} = ${resultado.toFixed(2)}`

        default:
            return `Operação Incorreta. Escolha: [Adição], [Subtração], [Multiplicação], [Divisão]`
    }
}

console.log(calculadora('multiplicação', -5, 8))