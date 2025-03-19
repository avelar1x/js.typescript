// Método Slice
const nomes = ['Valmir', 'Pedro', 'Rafaela', 'Leticia', 'Eduarda']
//splice (indice, delete, elem1. elem2...)
const removidos = nomes.splice(-3, Number.MAX_VALUE, 'Valmir') // Max value remove tudo que está após o indice definido.
console.log(nomes, removidos)