// Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem..
//  v = distância/tmpo

function calculaTempoViagem(distância, velocidade) {
    let tempo = distância / velocidade

    let minutos = (tempo * 60) % 60

    console.log(`Velocidade média: ${velocidade} Km/h`)
    console.log(`Distância: ${distância} metros`)
    console.log(`Tempo: ${tempo.toFixed()} horas e ${minutos} minutos`)
}

calculaTempoViagem(100, 80)