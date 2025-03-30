// Async / Await
function rand(min, max){
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

async function executa(){
    try {
        const fase1 = await esperaAi("Frase 1", rand(0, 3))
        console.log(fase1)
    
        const fase2 = await esperaAi("Frase 2", rand(0, 3))
        console.log(fase2)
    
        const faseE = await esperaAi(3, rand(0, 3))
    
        const fase3 = await esperaAi("Frase 3", rand(0, 3))
        console.log(fase3)
    
        console.log("Terminamos na: ", fase3)
    } catch(e){
        console.log('ERROR', e)
    }
}
executa()