const idade = Number(prompt('Digite a sua idade'))

if (idade >= 18){
    alert("Pode entrar")
} else {
    alert("Proibido a entrada")
}

const password = prompt("Digite a senha")

if(password === 'valmir123'){
    alert("Login liberado")
} else {
    alert("Acesso negado")
}

const resposta = prompt("Você gosta de cats?").toLowerCase()
const res = resposta === 'Sim'

if (resposta){
    alert('Você é legal')
} else {
    alert("Você não é legal")
}