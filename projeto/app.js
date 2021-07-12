const praias = require('./database')
const readline = require('readline-sync')

let entradaInicial;
while (true) {
    entradaInicial = readline.question('Deseja buscar uma praia por regiao? [S/N]').toLowerCase()

    if (entradaInicial[0] == 's' || entradaInicial[0] == 'n') break
}

if (entradaInicial[0] === 's') {
    console.log('Regiões Disponíveis: Norte, Sul ou Leste')

    const entradaRegiao = readline.question("Qual região você escolhe? ").toLowerCase()

    const retorno = praias.filter(praia => praia.regiao === entradaRegiao)

    console.table(retorno)
} else {
    const praiasOrdenadas = praias.sort((a, b) => a.orla - b.orla)
    console.log('Essas são todas as praias de Florianópolis: ')
    console.table(praiasOrdenadas)
}
