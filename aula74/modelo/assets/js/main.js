const request = Obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.open(Obj.method, Obj.url, true)
    xhr.send()
    
    xhr.addEventListener("load", () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText)
        } else {
            reject({
                code: xhr.status,
                message: xhr.responseText
            })
        }
    })
    }) 
    
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === "a") {
        e.preventDefault()
        carregaPag(el)
    }
})

async function carregaPag(el) {
    try{
        const href = el.getAttribute("href")

        const objConfig = {
            method: "GET",
            url: href,
        }

        const response = await request(objConfig);
            loadRes(response)
        } catch(e){
            console.log('ERROR', e)
        }
    }   
    
function loadRes(response) {
    const resultado = document.querySelector(".Resultado")
     resultado.innerHTML = response;
}

fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error("Erro ao carregar a página");
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));