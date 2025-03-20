// Reduce = Reduzir o Array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const somaTotal = numeros.reduce((acumulador, valor) => acumulador += valor, 0)
const somaPares= numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(somaTotal)
console.log(somaPares)



const pessoas = [
    {nome: 'Valmir', idade: 20 },
    {nome: 'Luciana', idade: 59 },
    {nome: 'Mateus', idade: 13},
    {nome: 'Melissa', idade: 16},
    {nome: 'Lucas', idade: 22},
    {nome: 'Eduarda', idade: 20},
]
const pessoaVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade)
        return acumulador
        return valor
},0)
console.log(pessoaVelha)