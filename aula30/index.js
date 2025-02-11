// Atribuação via desestruturação
let a = 'A'
let b = 'B' 
let c = 'C'

const letras = [b, c, a]
let = [a, b, c] = letras

console.log(a, b, c)

const num = [1, 2, 3, 4,5, 6, 7, 8, 9]
//const primeiroNum = num[0]
const[um, , tres, , cinco, , sete, , nove] = num
console.log(um, tres, cinco)

const num1 = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9]]
console.log(num1[1][2])  
const [lista1, lista2, lista3] = num1
console.log(lista1[1])

const pessoa = {
    nome:'Valmir',
    sobrenome: 'Avelar',
    idade: '19',
    endereco:{
        rua: 'Niterói',
        numero: 1236
    }
}
// Atribuação via desestruturação
const { endereco: { rua, numero} } = pessoa
console.log(rua, numero)

const { nome, ...resto } = pessoa
console.log(nome, resto) 