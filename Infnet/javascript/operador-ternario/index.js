const idade = 19
const ehMaiorDeIdade = idade >= 18 ? 'é maior de idade' : 'é menor de idade'
console.log(ehMaiorDeIdade) 

const nome = "Valmir"
const sobrenome = "Caro"

const nome1 = nome === '' ? "Sem nome" : nome
const sobrenome1 = sobrenome === "" ? "Sem sobrenome" : sobrenome

const nomeCompleto = nome + ' ' + sobrenome

console.log(nomeCompleto)

const resposta = 'Talvez'
const gostaDeFifa = 
    resposta === "Sim" 
    ? true
    : resposta === 'Não' 
    ? false 
    : resposta === "Talvez" 
    ? null 
    : undefined
console.log(gostaDeFifa)