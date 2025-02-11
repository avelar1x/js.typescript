// Estrutura de repetição : For

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maça', 'Pera', 'Uva', 'Manga', 'Banana'];
for (let f = 0; f < frutas.length; f++){
    console.log(`Índice ${f}`, frutas[f]);
} 