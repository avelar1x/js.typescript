// Uma String é igual a um Texto

let umaString = "Um texto de uma manhã"

//console.log(umaString.concat(' em um lindo dia'))
//console.log(umaString + ' em um lindo dia' )

console.log(umaString)
//Mostrar a String

console.log(`${umaString} em um lindo dia`)
//Complementar a String

console.log(umaString.indexOf("texto"))  
//Indíce que começa a palavra 'texto'

console.log(umaString.replace('Um', 'Outro'))
//Substituir uma palavra da String

console.log(umaString.length)
//Verificar o tamanho da String

console.log(umaString.slice(0, 8))
console.log(umaString.slice(-5))
//Mostrar apenas os indíces desejados

console.log(umaString.split(' ', 2))
//Dividir uma String (quantidade de divisões)


/*document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf(a)}<br />`
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <br /> document.body.innerHTML += `As palavras do seu nome são: <br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: <br />`
document.body.innerHTML += `Seu nome com letras minúsculas: <br />`*/