//Definir classe ContaBancária
class ContaBancaria {
    #saldo;
    constructor(){
        this.#saldo = 0;
    }

    //Métodos
    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        this.#saldo -= valor;
    }

    analiseSaldo(valor){
        return valor <= this.#saldo;
        }

    get saldo(){
        return this.#saldo;
    }
}

class CaixaEletronico {
    constructor(conta){
        this.conta = conta;
    }

    depositar(){
        //Obter o valor do depósito
        const valorDeposito = parseFloat(document.getElementById('valorDeposito').value);
        //Fazer o depósito na conta
        this.conta.depositar(valorDeposito);
        //Exibir saldo atualizado        
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar(){
        const valorSaque = parseFloat(document.getElementById('valorSaque').value);

        if(this.conta.analiseSaldo(valorSaque)){
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        }
        else {
            this.mostrarSaldo('Insuficiente!');
        }
    }
    
    mostrarSaldo(saldo){
        document.getElementById('valorSaldo').textContent = `R$${saldo.toFixed(2)}`;
        document.getElementById('valorDeposito').value = '';
        document.getElementById('valorSaque').value = '';
    }
}

//Criar instâncias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);
