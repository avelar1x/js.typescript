// Herança 

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

function Camiseta(nome,preco,cor) {
    Produto.call(this, nome, preco,)
    this.cor = cor;
}

function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco)
    this.cor = cor
    this.material = material 

    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta 

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca


const camiseta = new Camiseta('Polo', 799, 'Branca')
const caneca = new Caneca("Stanley", 150, 'Vinho', 'Aluminio', 10)



caneca.desconto(5)
camiseta.desconto(10)

console.log(caneca)
console.log(camiseta)