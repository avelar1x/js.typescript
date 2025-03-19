// Função Map ( Mapeando o Array )
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros.map(valor => valor*2)
console.log(dobro)







const pessoas = [
    {nome: 'Valmir', idade: 20 },
    {nome: 'Luciana', idade: 59 },
    {nome: 'Mateus', idade: 13},
    {nome: 'Melissa', idade: 16},
    {nome: 'Lucas', idade: 22},
    {nome: 'Eduarda', idade: 20},
]

const nomes = pessoas.map(valor => valor.nome)
const idade = pessoas.map(valor => ({idade: valor.idade }))
const comIds = pessoas.map((valor, indice) => valor.id = (indice + 1)* 1000)
console.log(pessoas)
console.log(nomes)
console.log(idade) 
console.log(comIds)