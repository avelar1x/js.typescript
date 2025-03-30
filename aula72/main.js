// Métodos para Promises (Promise.all Promise.race Promise.resolve Promise.reject)
function aleat(min, max){
    min *= 1000
    max *= 1000 
    return Math.floor(Math.random() * (max - min ) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(typeof msg !== "string") reject (new Error('Bad Value')) 
            resolve(msg)
            return
        }, tempo)
    })
}   

function baixaPagina(){
    const emCache = true
    if(emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a página', 2000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => {
        console.log('ERROR', e)
    })

const promises = [
    esperaAi('Promise 1', aleat(1, 3)),
    esperaAi('Promise 2', aleat(1, 3)),
    esperaAi("Promise 3", aleat(1, 3)),
    esperaAi(1, aleat(1, 3 ))
]
Promise.race(promises)
.then(valor => {
    console.log(valor)
}).catch(e => {
    console.log(ERROR, e)
})