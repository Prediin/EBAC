//Objeto Literal
const pessoa = { nome: 'Carlos', Idade: 20 }

//Criar uma classe
class Veiculo {

    //Método construtor    
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        //Atributo privado para indicar se o vepiculo está ligado
        this._ligado = false;
    }

    ligar(){
        this._ligado = true;
        console.log('O veículo foi ligado.');
    }
    desligar(){
        this._ligado = false;
        console.log('O veículo foi desligado.');
    }

    //Método getter para obter valor do atributo privado
    get ligado(){
        return this._ligado;
    }
}

//Herança
class Moto extends Veiculo {
    constructor(marca, modelo, ano){
        super(marca, modelo, ano)
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroPortas){
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    abrirPortas(){
        console.log('As portas do carro foram abertas.');
    }
}

const carroNovo = new Carro('Honda','Civic', 2024, 4);
const motoNova = new Moto('Honda', 'POP 100', 2008);

console.log(motoNova);
console.log(carroNovo);

carroNovo.ligar();
carroNovo.abrirPortas();
motoNova.ligar();
motoNova.desligar();

console.log('Numero de portas do carro: ', carroNovo.numeroPortas)
console.log('O carro está ligado?', carroNovo.ligado);
console.log('A moto está ligada?', motoNova.ligado);
