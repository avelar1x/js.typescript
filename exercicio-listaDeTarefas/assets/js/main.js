const inputNovaTarefa = document.querySelector(".input-nova-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi(){
    const li = document.createElement("li");
    return li
}

inputNovaTarefa.addEventListener("keypress", function(e){
    if (e.keyCode === 13){
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value)
    }
});

function limpaInput(){
    inputNovaTarefa.value = ''
    inputNovaTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = "Apagar"
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.textContent = textoInput;
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnAddTarefa.addEventListener('click', function(e){
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value)
})

document.addEventListener("click", function(e){
    const el = e.target
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll("li")
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem("tarefas", tarefasJSON)
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem("tarefas")
    const listaDeTarefas = JSON.parse(tarefas)
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
addTarefasSalvas()
