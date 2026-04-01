export class Categoria {

    #tipo;
    #valor;

    constructor(tipo){

        this.#tipo = nome;
        this.#valor = 0;
    }

    get valor() {
        return this.#valor;
    }

    get tipo() {
        return this.#tipo;
    }

    adicionarValor(valor) {
        this.#valor += parseFloat(valor);
    }
}

export class ListaDeGastosPorCategoria {

    #categorias;

    constructor(...categorias) {
        
        return this.#categorias = categorias;
    }
}