// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

function diaDeAula(diaDaSemana) {
    let dia = diaDaSemana.toLowerCase()
    switch (dia) {
        case 'segunda':
            return 'Segundou!!!'
        case 'terça':
            return 'Terçou!!!'
        case 'quarta':
            return 'Quartou!!!'
        case 'quinta':
            return 'Quintou!!!'
        case 'sexta':
            return 'Sextou!!!!!!'
        case 'sabado':
            return 'Sabadou!!!!!!'
        case 'sábado':
            return 'Sábadou!!!!!!'
        case 'domingo':
            return 'Domingou!!!!!!'
        default:
            return 'Dia da semana Inválido!'
    }
}

console.log(diaDeAula('Sábado'))