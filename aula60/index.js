// Assunto da Aula = Prototypes


// Construction Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;  
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + " " + this.sobrenome 
}

Pessoa.prototype.nomeCompleto = () => {
    return this.nome + " " + this.sobrenome 
}

// Instância
const pessoa1 = new Pessoa('Valmir', "O.") // <- Pessoa = Construction Function
const pessoa2 = new Pessoa('Luciana', 'A.') // <- Pessoa = Construction Function

console.dir(pessoa1.nomeCompleto())
console.dir(pessoa2)
