//Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado|

function boletimEscolar(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        console.log(`Média: ${media.toFixed(2)}  -->  Situação: Aprovado!`)
    } else if(media < 7 && media >= 5) {
        console.log(`Média: ${media.toFixed(2)}  -->  Situação: Recuperação.`)
    } else {
        console.log(`Média: ${media.toFixed(2)}  -->  Situação: Reprovado.`)
    }
}

boletimEscolar(5.5, 7, 8.7)