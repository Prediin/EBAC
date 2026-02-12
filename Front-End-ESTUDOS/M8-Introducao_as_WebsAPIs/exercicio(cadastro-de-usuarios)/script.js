//Busca aos dads do CEP:
document.querySelector('#cep').addEventListener('blur', (busca) => {
    const cepinformado = busca.target.value

    if(!(cepinformado.length === 8))
        return

    fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.querySelector('#logradouro').value = data.logradouro
                document.querySelector('#bairro').value = data.bairro
                document.querySelector('#localidade').value = data.localidade
                document.querySelector('#uf').value = data.uf
                document.querySelector('#regiao').value = data.regiao
                
            } else {
                alert('CEP não encontrado. Revise os dados e ente novamente.')

            }
        })
        .catch(error => console.error('Erro ao bucar o CEP: ', error))
})

//Salvar os dados do usuário:
const form = document.querySelector('form')

form.addEventListener('submit', function(salvarDados) {
    salvarDados.preventDefault()

    const userDados = {
        cep: document.querySelector('#cep').value,
        logradouro: document.querySelector('#logradouro').value,
        bairro: document.querySelector('#bairro').value,
        localidade: document.querySelector('#localidade').value,
        uf: document.querySelector('#uf').value,
        regiao: document.querySelector('#regiao').value
    }

    localStorage.setItem('cadastro', JSON.stringify(userDados))
    alert('Cadastro salvo com sucesso!')

})

//Limpar todos os dados:
const btnLimpar = document.querySelector('#limpar')
btnLimpar.addEventListener('click', () => {
    document.querySelector('#cep').value = ''
    document.querySelector('#logradouro').value = ''
    document.querySelector('#bairro').value = ''
    document.querySelector('#localidade').value = ''
    document.querySelector('#uf').value = ''
    document.querySelector('#regiao').value = ''

})

//Recuperar os dados ao recarregar a pgina:
document.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = localStorage.getItem('cadastro')

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos)

        document.querySelector('#cep').value = dados.cep || ''
        document.querySelector('#logradouro').value = dados.logradouro || ''
        document.querySelector('#bairro').value = dados.bairro || ''
        document.querySelector('#localidade').value = dados.localidade || ''
        document.querySelector('#uf').value = dados.uf || ''
        document.querySelector('#regiao').value = dados.regiao || ''

    } else {
        document.querySelector('#cep').value = ''
        document.querySelector('#logradouro').value = ''
        document.querySelector('#bairro').value = ''
        document.querySelector('#localidade').value = ''
        document.querySelector('#uf').value = ''
        document.querySelector('#regiao').value = ''

    }
})