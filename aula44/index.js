// Funções imediatas ( IIFE )
(function(idade, peso, altura){
    const sobrenome = 'Avelar'
    function criaNome(nome){
    return nome + " " + sobrenome
    }
    function falaNome(){
        console.log(criaNome('Valmir'))
    }
    falaNome()
    console.log(idade, peso, altura)
})('19 anos', '76kg', '1.85m')
const nome = 'Lucas'