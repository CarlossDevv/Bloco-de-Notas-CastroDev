let input = document.querySelector('.add-tarefa')
let button = document.querySelector('.adicionar')
let Listas = document.querySelector('.afazeres')

let arrayDeTarefas = []

function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
}

button.addEventListener("click", cliqueiNoBotao)

function mostrarNaTela(){
    let novaLista = " "

    arrayDeTarefas.forEach(tarefa => {

        novaLista = novaLista + `
            <li class="afazeres-list">
                <p>${tarefa}</p>
            </li>
        `
    })

    Listas.innerHTML = novaLista
}