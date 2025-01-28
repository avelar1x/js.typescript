let num1 = 15
let num2 = 2.5  

// num1 = num1.toString

console.log(num1.toString()+num2)
console.log(num1.toString(2)) // Representação binária
console.log(num1.toFixed(2)) // Arredondar número (2 números após a virgula)
console.log(Number.isInteger(num1)) // Vai retornar verdadeiro ou falso (número inteiro ou flutuante)

let temp = num1 * "olá" // Número não soma com text
console.log(Number.isNaN(temp)) // Vai retornar verdadeiro ou falso ( Se a conta for inválida ou válida)

let temp1 = 0.7
let temp2 = 0.1

temp1 += temp2 // 0.8
temp1 += temp2 // 0.9
temp1 += temp2 // 1.0
temp1 += temp2 // 1.1
temp1 += temp2 // 1.2
temp1 += temp2 // 1.3
temp1 += temp2 // 1.4
temp1 += temp2 // 1.5
temp1 += temp2 // 1.6
temp1 += temp2 // 1.7
temp1 += temp2 // 1.8
temp1 += temp2 // 1.9
temp1 += temp2 // 2.0

temp1 = Number(temp1.toFixed(2))

console.log(temp1)
console.log(Number.isInteger(temp1)) // Vai retornar verdadeiro ou falso (número inteiro ou flutuante)