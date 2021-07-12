//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function comparador(num1, num2) {
    
    if (num1 > num2) {
        console.log(`${num1} é maior que ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} é maior que ${num1}`)
    } else {
        console.log(`${num1} e ${num2} são iguais`)
    }
}

comparador(5, 5)