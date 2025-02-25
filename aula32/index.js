// For in
const frutas = ['Manga', 'Uva', 'Pera', 'Maça']

for ( let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log("-")

for (let indice in frutas){
    console.log(frutas[indice])
}

console.log("-")

const pessoa = {
    nome: "Valmir",
    sobrenome: "Avelar",
    idade: 19 
}

console.log("-")


for (let p in pessoa){
    console.log (p, pessoa [p])
}

const usuario = 'Valmir'
for (let u = 0; u < usuario.length; u++){
    console.log (usuario[u])
}

console.log("-")

for ( let u in usuario){
    console.log (usuario[u])
}

console.log("-")

for ( let valor of usuario){
    console.log (valor) 
}