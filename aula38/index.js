// Declaração de função (Function hoisting)
falaOi()
function falaOi(){
    console.log('Oi')   
}


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log("Sou um Dado")
}
souUmDado()

function executaFuncao(funcao){
    funcao()
}
executaFuncao(souUmDado)


// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function")
}
funcaoArrow()


// Dentro de um objeto eu posso ter uma função
const obj = {
    falar() {
        console.log("Sou um objeto")
    }
}
obj.falar()