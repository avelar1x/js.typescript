// Object.defineProperty() e Object.defineProperties()
// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
  
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Mostra a chave
        //value: estoque, // Mostra o valor
        //writable: false,   // Permite ou não alterar o valor
        configurable: false, // Pode redefinir ou mão a propriedade 
        get: function() {
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== "number"){
                throw new TypeError("Value Error");
            }       

            estoquePrivado = valor;
        }
    })


    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    }
}


const p1 = new Produto("Camiseta",20, 3,)
p1.estoque = 4
console.log(p1);
p1.estoque = 10
console.log(p1.estoque)
const p2 = criaProduto('Camisa')
console.log(p2.nome);    


console.log(Object.keys(p1))  // Mostra as chaves do obj  


