//ENTRADA


//PROCESSAMENTO


//SAÍDA


//MISC
document.addEventListener('DOMContentLoaded', function () {
    const botaoDica = document.getElementById('comoJogar');
    const dica = document.getElementById('pOculto');

    botaoDica.addEventListener('click', function () {
        dica.classList.toggle('mostrar');
    });
});

