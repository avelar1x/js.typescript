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

for (let p in pessoa){
    console.log (p, pessoa [p])
}