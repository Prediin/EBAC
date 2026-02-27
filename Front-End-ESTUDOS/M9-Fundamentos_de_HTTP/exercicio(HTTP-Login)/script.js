//Itens
let clienteCad = {
    nome: document.getElementById('nome'),
    email: document.getElementById('email')
};

let clientes = document.getElementById('listaClientes')

const btnCadastrar = document.getElementById('btnCadastrar');

const btnDeletar = document.getElementsByClassName('btnDeletar');

//Buscar Clientes
fetch('https://crudcrud.com/api/fe7eea1ef9e34a7686575624e21dfa96/clientes')
.then(resposta => resposta.json())
.then((listaClientes) => {

    listaClientes.forEach(cliente => {
        
        const item = document.createElement('li');

        item.innerHTML = `<img src="IMGS/cliente_perfil_icon.jpg" alt=""><p>${cliente.nome}</p><i>${cliente.email}</i><button class="btnDeletar" onclick="remover(event, '${cliente._id}')">X</button>`

        clientes.appendChild(item);
    });
});

//Cadastrar Cliente:
btnCadastrar.addEventListener('click', (add) => {

    add.preventDefault();

    fetch('https://crudcrud.com/api/fe7eea1ef9e34a7686575624e21dfa96/clientes', {

        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: clienteCad.nome.value,
            email: clienteCad.email.value
        })
    })
    .then(resposta => resposta.json())
    .then((cliente) => {

            //Cria um novo elemento de lista <li> para cada tarefa encontrada 
            const item = document.createElement('li');

            //Define o conteúdo HTML desse <li>:
            item.innerHTML = `<img src="IMGS/cliente_perfil_icon.jpg" alt=""><p>${cliente.nome}</p><i>${cliente.email}</i><button class="btnDeletar" onclick="remover(event, '${cliente._id}')">X</button>`;

            //Adiciona o item <li> na lista de tarefas:
            clientes.appendChild(item);
    });
});

//Remover Cliente:
function remover(event, id) {

    fetch(`https://crudcrud.com/api/fe7eea1ef9e34a7686575624e21dfa96/clientes/${id}`, {

        method: 'DELETE',
    })
    .then(() => {

        event.target.parentElement.remove();
    });
};