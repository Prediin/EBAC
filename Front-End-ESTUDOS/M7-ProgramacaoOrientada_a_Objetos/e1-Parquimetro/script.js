class Informacoes {
    constructor(placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
    }

    mostrarInfo() {
        document.getElementById('valorPLaca').textContent = this.placa;
        document.getElementById('textoModelo').textContent = this.modelo;
    }
}

class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcularTempo() {
        let tempo = 0;

        if (this.valor >= 3) {
            tempo = 120;
        } else if (this.valor >= 1.75) {
            tempo = 60;
        } else if (this.valor >= 1) {
            tempo = 30;
        } else {
            document.getElementById('valorTempo').textContent = '0';
            document.getElementById('valorTroco').textContent = 'Saldo insuficiente';
            return;
        }

        document.getElementById('valorTempo').textContent = tempo;
        this.calcularTroco();
    }

    calcularTroco() {
        let troco = 0;

        if (this.valor > 3) {
            troco = this.valor - 3;
        }

        document.getElementById('valorTroco').textContent = troco.toFixed(2);
    }
}

function calcularTempo() {
    let placa = document.getElementById('placa').value;
    let modelo = document.getElementById('modelo').value;
    let valor = parseFloat(document.getElementById('valorEstacionamento').value);

    let info = new Informacoes(placa, modelo);
    let parquimetro = new Parquimetro(valor);

    info.mostrarInfo();
    parquimetro.calcularTempo();
}
