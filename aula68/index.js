// Getter e Setters em Classes
const vel = Symbol('Velocidade')

class Carro {
    constructor(nome, marca){
        this.nome = nome;
        this.marca = marca;
        this[vel] = 0
    }

    acelerar() {
        if(this[vel] >= 100) return
        this[vel]++
    }

    freiar() {
        if(this[vel] <= 0) return
        this[vel]--
    }
}

const carro1 = new Carro("Creta", "Hyundai")

for (let i = 0; i < 200; i++) {
    carro1.acelerar()
}

carro1.vel = 150
console.log(carro1)

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }

set nomeCompleto(valor) {
    valor = valor.split(" ")
    this.nome = valor.shift()
    this.sobrenome = valor.join(" ")
    }

}

const p1 = new Pessoa("Valmir", 'Avelar')
p1.nomeCompleto = 'Valmir de Avelar'
console.log(p1.nome)
console.log(p1.sobrenome)