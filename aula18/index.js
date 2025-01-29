//Funções
    
function saudacao(nome) {
    console.log(`Bom dia ${nome}`);
    return `Bom dia ${nome}`
}
saudacao('Lucas')
saudacao("Luciana")

const variavel = saudacao("Valmir")
console.log(variavel)


function soma(num1 = 10 , num2 = 20){
   const resultado = num1 + num2
   return resultado
}
console.log(soma(2, 2))
console.log(soma(2, 20))
console.log(soma(2, 10))

const raiz = function (n){
    return n ** 0.5
}
console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(32))