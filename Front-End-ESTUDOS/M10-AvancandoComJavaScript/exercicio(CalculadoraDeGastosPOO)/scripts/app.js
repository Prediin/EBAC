import { Categoria, ListaGastosPorCategoria } from "../../pratica(Modularizacao)/js/classes.js";
import { obterElemento } from "./utils.js";

const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria('Alimentação'),
    new Categoria('Transporte'),
    new Categoria('Lazer'),
    new Categoria('Outros'),
);

const form = obterElemento('form');
const saldo = obterElemento('saldo');
const categoria = obterElemento('categorias');
const total = obterElemento('total');
const btnCalcular = obterElemento('btnCalcular');
const inputGasto = obterElemento('gasto');

btnCalcular.addEventListener('click', (evento) => {
    evento.preventDefault();

    const categoriaSelecionada = categoria.value;
    const saldoAtual = parseFloat(saldo.value);
    const valorGasto = parseFloat(inputGasto.value);

    if (!categoriaSelecionada || isNaN(saldoAtual) || isNaN(valorGasto)) {
        alert("Preencha todos os campos corretamente");
        return;
    }

    if (valorGasto > saldoAtual) {
        alert("Saldo insuficiente");
        return;
    }

    const categoriaObj = gastosPorCategoria.obterCategoriaPorNome(categoriaSelecionada);

    if (!categoriaObj) {
        alert("Categoria inválida");
        return;
    }

    categoriaObj.adicionarValor(valorGasto);

    const totalGeral = gastosPorCategoria.obterTotal();
    total.textContent = totalGeral.toFixed(2);

    const novoSaldo = saldoAtual - valorGasto;
    saldo.value = novoSaldo.toFixed(2);

    inputGasto.value = "";
});