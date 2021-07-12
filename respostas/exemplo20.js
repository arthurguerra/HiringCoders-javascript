// Utilize a estrutura de repetição for para imprimir no console conforme instruções:

// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução|

function forBreakContinue(tamanho) {
    for (let i = 0; i < tamanho; i++) {
        if (i == 25) break

        if (i % 10 == 0) continue

        i % 2 == 0 ? console.log(`${i} par`) : console.log(`${i} ímpar`)
    }
}

forBreakContinue(50)