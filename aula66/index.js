// Objeto Map()
const pessoas = [
    { id: 3, nome: 'Valmir'},
    { id: 2, nome: 'Lucas'},
    { id: 1, nome: 'Rafael'}
]
const novasPessoas = new Map()
for(const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id,{ ...pessoa })
}

for (const [identifier, {id, nome }] of novasPessoas) {
    console.log(identifier, id, nome)
}