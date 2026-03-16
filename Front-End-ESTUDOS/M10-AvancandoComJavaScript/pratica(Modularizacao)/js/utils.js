const obterElemento = (id) => document.getElementById(id);

const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

export const valorNegativo = (valor) => parseFloat(valor) < 0;

export const atualizarInterface = (gastosPorCategoria) => {

    const categorias = gastosPorCategoria.categorias;

    categorias.forEach(({nome, valor}) => {

        const elemento = obterElemento(nome);
        elemento.textContent = formataMoeda(valor);
    });

    const elementoTotal = obterElemento('Total');
    elementoTotal.textContent = formataMoeda(gastosPorCategoria.obterTotal());
}