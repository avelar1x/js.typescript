const produto = {nome: 'Caneca', preco: 20}
Object.defineProperty(produto, "nome", {
    writable: false,
    configurable: false,
})
Object.freeze(produto) // Variavel Produto nao pode ser alterado
const outraCoisa = Object.assign({}, produto, {material: 'plástico'}) // Copia tudo que está dentro de Produto para o parametro vazio

outraCoisa.nome = "Relogio"
produto.nome = "Manete"

console.log(Object.getOwnPropertyDescriptor(produto, "nome"))
console.log(produto)
console.log(outraCoisa)

for( let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}