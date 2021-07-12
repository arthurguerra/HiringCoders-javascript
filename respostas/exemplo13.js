// Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(num) {   
    
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i
        console.log(`${num} x ${i} = ${resultado}`)
    }
}

tabuada(-2.5)