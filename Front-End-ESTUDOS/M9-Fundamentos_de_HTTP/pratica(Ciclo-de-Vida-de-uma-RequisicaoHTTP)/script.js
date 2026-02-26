//Seleciona a lista de tarefas no HTML com o DOM e define para a variável 'tarefas':
const tarefas = document.getElementById('listaTarefas');

//Faz uma requisição GET para a API externa para buscar todas as tarefas:
fetch('https://crudcrud.com/api/cc49034b01534314869ab026e21485f0/tarefas')
.then(resposta => resposta.json()) //Converte o corpo da resposta em JSON gerando um array:
.then((listaDeTarefas) => {

    //Itera sobre cada uma das tarefas do array:
    listaDeTarefas.forEach(tarefa => {
        //Cria um novo elemento de lista <li> para cada tarefa encontrada 
        const item = document.createElement('li');

        //Define o conteúdo HTML desse <li>:
        item.innerHTML = `${tarefa.descricao} <button onclick="remover(event, '${tarefa._id}')">X</button>`;

        //Adiciona o item <li> na lista de tarefas:
        tarefas.appendChild(item);
    });
});

//Adiciona um ouvinte de evento 'click' no botão adicionar:
document.getElementById('add').addEventListener('click', () => {

    //Recebe a descrição que o usuário inserio no input de Nova Tarefa
    const descricao = document.getElementById('tarefa').value;

    //Faz a requisição POST para a API externa para criar a tarefa:
    fetch('https://crudcrud.com/api/cc49034b01534314869ab026e21485f0/tarefas', {

        //Definido como POST, mas também pode ser definido como GET, PUT e DELETE:
        method: 'POST',

        //Define o cabeçalho da requisição com tipo de conteúdo JSON:
        headers: {
            "Content-Type": "application/json"
        },

        //Convertemos um objeto JS para uma string JSON e passamos para o corpo:
        body: JSON.stringify({
            descricao: descricao
        })
    })
    .then(resposta => resposta.json())
    .then((tarefa) => {

            //Cria um novo elemento de lista <li> para cada tarefa encontrada 
            const item = document.createElement('li');

            //Define o conteúdo HTML desse <li>:
            item.innerHTML = `${tarefa.descricao} <button onclick="remover(event, '${tarefa._id}')">X</button>`;

            //Adiciona o item <li> na lista de tarefas:
            tarefas.appendChild(item);
    })
});

function remover(event, id) {

    fetch(`https://crudcrud.com/api/cc49034b01534314869ab026e21485f0/tarefas/${id}`, {
        
        method: 'DELETE'
    })
    .then(() => {

        event.target.parentElement.remove();
    });
}