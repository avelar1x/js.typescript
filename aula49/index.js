// Revisão Arrays
const nomes = ['Valmir', 'Luciana', 'Pablo']
nomes[2] = 'Pedro'
delete nomes[0]
nomes[0] = "Valmir"
console.log(nomes)

const nome2 = new Array('Kaua', 'Pablo', 'Fabio')
nome2[0] = 'Felipe'
delete nome2[2]
console.log(nome2)

const novo = [...nomes]
novo[0] = "Matheus"
const removido = novo.pop() // retira no final do array e shift retira no cmc do array
novo.push("Leila") // Adicionar elementos no final do array
novo.unshift("Rafaela") // Adiciona elementos no começo do array
console.log(novo, removido)

const novo2 = novo.slice(1, -1)
console.log(novo2)

const nome3 = 'Valmir Avelar Caro'
const nomes3 = nome3.split(' ') // Converter String para array
console.log(nomes3)

const nome4 = ["Valmir", "Avelar", "Caro",]
const nomes4 = nome4.join(" ") // Converter Array para String
console.log(nomes4)
