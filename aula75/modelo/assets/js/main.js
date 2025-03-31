//fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => loadEl(json));

axios('pessoas.json')
    .then(resposta => loadEl(resposta.data))

function loadEl(json) {
    const table = document.createElement("table");
    for (let people of json) {
        const tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = people.nome;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.innerHTML = people.idade
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = people.salario
        tr.appendChild(td3)

        table.appendChild(tr);
    }

    const resultado = document.querySelector(".resultado");
    resultado.appendChild(table);
}