// Criando Classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Valmir', 'Avelar');
const p2 = new Pessoa('Pedro', 'Gonzaga')
const p3 = new Pessoa('Lucas', 'Aperol')
const p4 = new Pessoa('Mateus','Caro')

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);