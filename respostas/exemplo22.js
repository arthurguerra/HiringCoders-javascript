// Vamos criar uma conta bancária com as 3 operações básicas? rs

// a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual|

function contaBancaria(operação, valor) {
    let saldo = 100    

    switch(operação){
        case 'depositar':
            saldo += valor
            console.log(`Saldo Atual: R$${saldo}`)
            break
        case 'sacar':
            if (saldo - valor >= 0){
                saldo -= valor
                console.log(`Saldo Atual: R$${saldo}`)
                break
            } else {
                console.log('Saldo insuficiente')
                break
            }
        case 'consultar saldo':
            console.log(`Saldo Atual: R$${saldo}`)
            break
        default:
            console.log('Operação Inválida')
            break
    }
}

contaBancaria('consultar saldo')
