const btntema = document.querySelector('#botaotema');

btntema.addEventListener('click', () => {
    //Verificar se o usuário já tem um tema pré-definido:
    const temaatual = localStorage.getItem('tema');

    //Verificar qual é o tema e inverter:
    const novotema = temaatual === 'dark' ? 'light' : 'dark';

    //Adicionar a classe do elemento body:
    document.body.classList.toggle(novotema);

    //Salvar as preferêcia no LocalStorage:
    localStorage.setItem('tema', novotema);

    //Atualiza o texto do botão:
    btntema.textContent = novotema === 'dark' ? '☀' : '☾';
});

document.addEventListener('DOMContentLoaded', () => {
    //Verificar se há um tema salvo:
    const temasalvo = localStorage.getItem('tema');

    //Se for dark, adiciona a classe e altera o botão:
    if (temasalvo === 'dark') {
        document.body.classList.add('dark');
        btntema.textContent = '☀';
    } else {
        //Caso contrário, é light e o botão deve mudar para dark:
        btntema.textContent = '☾';
    }
});