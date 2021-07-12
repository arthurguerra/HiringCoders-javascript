//Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorDeIdade(nascimento) {
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - nascimento

    console.log(`Você tem ${idade} anos.`)
    
    idade >= 18 ? console.log('Maior de Idade') : console.log('Menor de Idade')
}

maiorDeIdade(2010)