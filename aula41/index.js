// Escopo léxico
const nome = 'Valmir'
function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Pedro'
    falaNome()
}
usaFalaNome()