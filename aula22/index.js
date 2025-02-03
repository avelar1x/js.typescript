/*
Operadores Lógicos
&& -> AND
|| -> OR
! -> NOT
*/

const expressaoAND = true && true && true //Todas precisam ser verdadeiras para retornar true, caso contrário retorna false
console.log(expressaoAND)

const expressaoOR = true || false
console.log(expressaoOR) // Se qualquer uma for verdadeira, retornará sempre true

const expressaoNOT = !false && true // Inverte a expressão
console.log(expressaoNOT)