//.map()============================================
//Função que mapea (passa pro cada elemento de um array):
const propriedades = [10, 8, 9]

const propriedadesDuplicadas = propriedades.map((propriedade) => propriedade * 2);

console.log('Resultado do .map() duplicando os valores da propriedade:');
console.log('Propriedades originaiS: ' + propriedades);
console.log('Propriedades x2: ' + propriedadesDuplicadas);

//========================
const tarefas = ['Tomar banho', 'Limpar a casa', 'Fazer compras'];

//tarefas.push('Jogar o lixo fora', 'Consertar a TV')

const listaTarefasHTML = tarefas.map((tarefa) => `<li>${tarefa}</li>`);

console.log('Resultado do .map() criando uma tabela em HTML:');
console.log(listaTarefasHTML);
//=================================================



//.filter()=========================================
//Filtra números de acordo com a propriedade especificada:
const numeros = [1, 4, 89, 56, 43, 21, 22, 33, 32, 4, 6, 7, 5];

const maioresQueDez = numeros.filter((n) => n > 10);

console.log('Resultado do .filter():');
console.log('Não filtrados: ' + numeros);
console.log('Filtrados (maiores que 10): ' + maioresQueDez);
//==================================================



//.reduce()==========================================
//Uma função que acumula todos os valores de um array em um só valor:
const valores = [10, 8, 39, 4, 88];

const somaTotal = valores.reduce((acumulador, numero) => acumulador + numero, 0);

console.log('Resultado do .reduce():')
console.log('Valores separados: ' + valores);
console.log('Soma total: ' + somaTotal);
//==================================================



//.some()============================================
//Retorna true se pelo meno um elemento do array satisfazer a condição:
const idades = [10, 18, 8, 9, 12, 2, 3];

const temMaiorDeIdade = idades.some(n => n >= 18);

console.log('resultado do .some(): ' + temMaiorDeIdade);

temMaiorDeIdade ? console.log('Tem maiores de idade') : console.log('Não há maiores de idade');
//===================================================



//.every()===========================================
//Returna true se todos os elementos do array atenderem a condição:
const numerosPositivos = [10, 6, 7, 78, 65, 5];

const temNumerosPositivos = numerosPositivos.every(n => n > 0);

const numerosNegativos = numerosPositivos.filter((n) => n <= 0);

temNumerosPositivos ? console.log('Todos os números são positivos!') : console.log('Nem todos os números são positivos! Os números negativos são: ' + numerosNegativos);
//====================================================



//Rest operator(...)==================================
//Com o rest (...) podemos criar uma função capaz de receber uma quantidade de parâmetros indefinida.

//Podemos, por exemplo, fazer uma função que faz a soma dos números de um array em uma função sem precisar selecionar um por um.
function somarSalarios(...salarios) {
    return salarios.reduce((totalSalarios, salario) => totalSalarios + salario, 0);
}

//Podendo assim, usar ela para somar o valores que a gente selecionar como parâmetro
console.log('A soma dos salários 2700, 2000 e 1518 é: ' + somarSalarios(2700, 2000, 1518));
//====================================================