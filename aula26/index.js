// Operação Ternária -> (Condição verdadeira '?') (Condição falsa ':') \\
const pontuacaoUsuario = 1999

/*if(pontuacaoUsuario >= 1000 ){
    console.log("Usuário VIP")
} else {
    console.log("Usuário Normal")
}
*/

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'
console.log(nivelUsuario)

const corUsuario = null 
const corPadrao = corUsuario || 'Preto'
console.log(corPadrao)