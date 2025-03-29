// Promises
function aleat(min, max){
    min *= 1000
    max *= 1000 
    return Math.floor(Math.random() * (max - min ) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject (new Error('Bad Value')) 
        setTimeout( () => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi("Oi 1", aleat(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Oi 2', aleat(1, 3))
})
.then(resposta => {
 console.log(resposta)
 return esperaAi(1, aleat(1, 3)).then(resposta => {
    console.log(resposta)})
}).catch(e => {
    console.log('ERROR: ', e);
})
