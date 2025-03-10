// Closures
function retornaFuncao(nome){
    return function(){
        return nome
    } 
}
const funcao = retornaFuncao('Valmir')
const funcao2 = retornaFuncao("Luciana")

console.log(funcao(), funcao2())
