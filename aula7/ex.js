const nome = 'Valmir'
const firstName = 'Avelar'
const idade = 20
const peso = 72
const alturaEmM = 1.83
let imc
imc = peso / (alturaEmM * alturaEmM)
let anoNascimento 
anoNascimento = 2025 - idade

console.log(`${nome} ${firstName} tem ${idade} anos, pesa ${peso} kg`)
console.log(`Tem ${alturaEmM} de altura e seu imc é de ${imc}`)
console.log(`${nome} ${firstName} nascem em ${anoNascimento}`)