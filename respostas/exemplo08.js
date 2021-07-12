// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo(cor) {
    let corDoSinal = cor.toLowerCase()
    switch(corDoSinal) {
        case 'verde':
            console.log('Siga em frente!')
            break
        case 'amarelo':
            console.log('Cuidado, prossiga com cautela!')
            break
        case 'vermelho':
            console.log('Pare!!! O sinal está fechado!')
            break
        default:
            console.log('Cor Inválida.')
    }
}

semaforo('AMARELO')