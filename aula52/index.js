// Filter ( Filtrar os Arrays )

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor){
    return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter)
const numerosFiltrados2 = numeros.filter(valor => valor < 10)
console.log(numerosFiltrados)
console.log(numerosFiltrados2)

const pessoas = [
    {nome: 'Valmir', idade: 20 },
    {nome: 'Luciana', idade: 59 },
    {nome: 'Mateus', idade: 13},
    {nome: 'Melissa', idade: 16},
    {nome: 'Lucas', idade: 22},
    {nome: 'Eduarda', idade: 20},
]

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7) // Length pega o tamanho do obj
const pessoasVelhas = pessoas.filter(valor => valor.idade > 50)
const pessoasComFinalA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(pessoasNomeGrande)
console.log(pessoasVelhas)
console.log(pessoasComFinalA)


