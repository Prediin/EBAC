//1. Ouvir o evento de quamdo o usuário sair do campo de CEP
document.querySelector('input#cep').addEventListener('blur', (evento) => {
    const elemento = evento.target
    const cepinformado = elemento.value

    //2. Validar CEP
    if (!(cepinformado.length === 8))
        return

    //3. Faer busca no ViaCEP
    //Promessa de que o fetch vai buscar esse recurso?
    fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
        .then(response => response.json())
        .then(data => {
            //3.2 Processamento da página
            if (!data.erro) {
                document.querySelector('input#logradouro').value = data.logradouro
                document.querySelector('input#bairro').value = data.bairro
                document.querySelector('input#cidade').value = data.localidade
                document.querySelector('input#estado').value = data.uf
            } else {
                alert('CEP Não encontrado.')
            }
        })
        .catch(error => console.error('Erro ao bucar o CEP: ', error))
})
