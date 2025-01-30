// Objetos

const array = [1,2,3]
array.push(4)
console.log(array)

const pessoa1 = {
    nome: 'Valmir',
    sobrenome: 'Avelar',
    idade: 19
}
console.log(pessoa1)
console.log(pessoa1.nome) // Acessar os valores dentro do objeto

function criaPessoa(nome, sobrenome, idade){ //Utilizar função para criar objeto
    return{
        nome, sobrenome, idade    
    }
}
const pessoa2 = criaPessoa('Luciana', 'Francisco', 57)
const pessoa3 = criaPessoa('Valmir', 'Silvestre', 51)
const pessoa4 = criaPessoa('Melissa', 'Caro', 16)
const pessoa5 = criaPessoa('Matheus', 'Caro', 13)

console.log(pessoa2, pessoa3, pessoa4, pessoa5)

const pessoa6 = { //função dentro da const
    nome: "Lucas",
    sobrenome: 'Oliveira',
    idade: 25,
    //function 
    fala(){
        console.log(`A minha idade atual é ${this.idade}`) //função dentro da const
    },

    incrementaIdade(){
        this.idade++    //Incrementar a idade
    }
}

pessoa6.fala()
pessoa6.incrementaIdade()
pessoa6.fala()
pessoa6.incrementaIdade()
pessoa6.fala()
pessoa6.incrementaIdade()
pessoa6.fala()
pessoa6.incrementaIdade()