function verificacaoDeIdade(){
//ENTRADA
let idade = Number(document.getElementById('valorIdade').value);
let ocupacao = document.getElementById('valorOcupacao').value;
let permissao;

//PROCESSAMENTO
if (idade < 18){
    permissao = 'Entrada Proibida'
}
else if (ocupacao === 'estudante'){
    permissao = 'Meia Entrada'
}
else {
    permissao = 'Entrada Inteira'
}

//SAÍDA
document.getElementById('permissao').textContent = permissao;

}