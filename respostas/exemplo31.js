//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(dia) {    

    switch(dia) {
        case 1:
            console.log('DOMINGO!')
            break
        case 2:
            console.log('Segunda-Feira')
            break       
        case 3:
            console.log('Terça-Feira')
            break
        case 4:
            console.log('Quarta-Feira')
            break
        case 5:
            console.log('Quinta-Feira')
            break
        case 6:
            console.log('Sexta-Feira')
            break
        case 7:
            console.log('SÁBADO!')
            break
        default:
            console.log('Dia da semana incorreto. Digite um número de 1 à 7.')
    }
}

diaDaSemana(5)