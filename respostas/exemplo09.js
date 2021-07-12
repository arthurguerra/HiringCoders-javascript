// Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número.

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    } else if (num % 3 == 0) {
        return 'Fizz'
    } else if (num % 5 == 0) {
        return 'Buzz'
    } else {
        return num
    }
}

console.log(fizzBuzz(10))