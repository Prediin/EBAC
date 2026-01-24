//ENTRADA
let numeroSecreto = Math.floor(Math.random() * 100 + 1);
let tentativas = 20;
let tentativasRestantes = tentativas;
let botao;
let botaoReset;
document.addEventListener('DOMContentLoaded', function () {
    botao = document.getElementById('botaoChute');
});
document.addEventListener('DOMContentLoaded', function () {
    botaoReset = document.getElementById('botaoReiniciar');
});
document.addEventListener('DOMContentLoaded', function () {
    botaoDenovo = document.getElementById('botaoDenovo');
});

//PROCESSAMENTO
function tentarChute() {
    let valorChute = Number(document.getElementById('chute').value);

//SAÍDA
    if (valorChute < 1 || valorChute > 100 || isNaN(valorChute)) {
        document.getElementById('dialogo').textContent = 'Ei! Só vale números de 1 a 100, bobão!';
        return;
    }

    if (valorChute === numeroSecreto) {
        document.getElementById('dialogo').textContent = 'VOCÊ CONSEGUIU! O NÚMERO SECRETO ERA: ' + numeroSecreto + '!';

        botao.disabled = true;

        botao.style.cssText = 'display: none; margin: 0; padding: 0; font-size: 0;';

        botaoDenovo.style.cssText = 'display: block; transition: all 0.2s ease-in-out; color: rgba(26, 99, 10, 0.63); margin: 10px auto; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 10px; border: white solid 1px; background-color: rgb(78, 255, 111); box-shadow: rgb(157, 255, 191) 0px 0px 30px;';
    }
    else if (valorChute < numeroSecreto) {
        document.getElementById('dica').textContent = 'O número secreto é maior!';
        }
    else if (valorChute > numeroSecreto) {
        document.getElementById('dica').textContent = 'O número secreto é menor!'
    }

    tentativasRestantes--;
    document.getElementById('chances').textContent = 'Chances: ' + tentativasRestantes;

    if (tentativasRestantes === 0) {
        document.getElementById('dialogo').textContent = 'Acabou as chances! Quer tentar de novo?';

        botao.disabled = true;

        botao.style.cssText = 'display: none;';
        botaoDenovo.style.cssText = 'display: none;';
        botaoReset.style.cssText = 'display: block; transition: all 0.2s ease-in-out; color: rgba(16, 30, 185, 0.625); margin: 10px auto; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 10px; border: white solid 1px; background-color: rgb(218, 97, 255); box-shadow: rgb(255, 40, 183) 0px 0px 30px;';
    }
}

//MISC
document.addEventListener('DOMContentLoaded', function () {
    const botaoDica = document.getElementById('comoJogar');
    const dica = document.getElementById('pOculto');

    botaoDica.addEventListener('click', function () {
        dica.classList.toggle('mostrar');
    });
});

function limitarCaracteres(input, max) {
  if (input.value.length > max) {
    input.value = input.value.slice(0, max);
  }
}

function reiniciar() {
    tentativasRestantes = tentativas;
    numeroSecreto = Math.floor(Math.random() * 100 + 1);

    document.getElementById('chute').value = '';

    document.getElementById('dialogo').textContent = 'Vai, chuta um número aí!';
    document.getElementById('dica').textContent = 'Tenta aí!';
    document.getElementById('chances').textContent = 'Chances: ' + tentativasRestantes;

    botao.disabled = false;
    botao.style.cssText = 'display: block;';

    botaoReset.style.cssText = 'display: none;';
    botaoDenovo.style.cssText = 'display: none;';

    document.getElementById('chute').focus();
}
