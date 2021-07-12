//Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function conversorDeTemperatura(celsius) {
    let fahrenheit = (celsius * 1.8) + 32
    return `${celsius}°C equivalem à ${fahrenheit.toFixed(2)}°F`
}

console.log(conversorDeTemperatura(22.25))