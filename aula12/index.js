let varA = 'A'  // B
let varB = "B"  // C
let varC = "C" // A

const tempA = varA
varA = varB
varB = varC
varC = tempA

console.log(varA, varB, varC)