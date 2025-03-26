// Manipulando Prototypes

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveA: 'B'
}

const objC = new Object()
objC.chaveC = "C"

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}


const p1 = new Produto('Relogio', 127.000)
const p2 = new Produto("Tênis", 1.400)
Object.setPrototypeOf(p2, Produto.prototype)
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 38.000
    }
})
p3.aumento(5)

console.log(p1)
console.log(p2)
console.log(p3)
