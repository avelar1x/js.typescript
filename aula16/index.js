const num1 = Number(prompt ('Digite seu número'))

const numeroTitulo = document.getElementById ('num1')
const numeroDiv = document.getElementById ('txt')

numeroTitulo.innerHTML = num1
numeroDiv.innerHTML += `<p> Raiz quadrada: ${num1 ** 0.5} </p>`
numeroDiv.innerHTML += `<p> ${num1} é ${Number.isInteger(num1)}</p>`
numeroDiv.innerHTML += `<p> É NaN: ${isNaN(num1)}</p>`
numeroDiv.innerHTML += `<p> Arredondando para baixo: ${Math.ceil(num1)}</p>`
numeroDiv.innerHTML += `<p> Arredondando para cima: ${Math.floor(num1)}</p>`
numeroDiv.innerHTML += `<p> Com duas casas decimais: ${num1.toFixed(2)}</p>`