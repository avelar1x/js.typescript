// Objetos 
const pessoa = {
    nome: 'Valmir',
    sobrenome: 'Caro'
}
const chave = 'nome'
console.log(pessoa[chave], pessoa.sobrenome)


const pessoa1 = new Object()
pessoa1.nome ='Luciana'
pessoa1.sobrenome = "Avelar"
console.log(pessoa1.nome, pessoa1.sobrenome)

const pessoa2 = new Object()    
pessoa2.nome ="Ana"
pessoa2.sobrenome = "Castela"
pessoa2.idade = 24
pessoa2.falaNome = function(){
    console.log(`${this.sobrenome} está falando seu nome.`)
}
pessoa2.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa2.getDataNascimento())
pessoa2.falaNome()

function criaPessoa(nome,sobrenome,idade){
    return{
        nome,
        sobrenome,
        idade,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome} ${this.idade} anos`
        }
    }
}

const p1 = criaPessoa('Valmir', 'Avelar', 20)
console.log(p1.nomeCompleto())
