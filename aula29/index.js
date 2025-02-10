const verdadeira = true

let nome = 'Valmir'
var nome2 = "Lucas"

if (verdadeira) {
    let nome = 'Pedro'
    console.log(nome, 'e', nome2)
}

function falaOi(){
    console.log("Oi")
}
falaOi()

function falaOpa(){
    if (verdadeira) {
        let nome = "Valmir"
        var sobrenome = 'Avelar'
        console.log(nome, sobrenome)
    }
}
falaOpa()