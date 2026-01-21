function calcularIMC(){
//Entrada
    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

//Processamento
    let valorIMC = (valorPeso / (valorAltura * valorAltura))
    if (valorIMC < 18.4) {
        situacao = "Abaixo do Peso"
    }
    else if (valorIMC >= 18.5 && valorIMC < 25) {
        situacao = "Peso Normal"
    }
    else if (valorIMC >= 29.9 && valorIMC < 40) {
        situacao = "Acima do Peso"
    }

//Saída
    document.getElementById("resultadoIMC").textContent = "IMC: " + valorIMC.toFixed(1);
    document.getElementById("situacao").textContent = "Situação: " + situacao;

}
