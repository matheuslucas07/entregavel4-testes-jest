/**
 * Ordena uma lista de números em ordem crescente usando o algoritmo Quicksort.
 * Não altera a lista original: devolve uma lista nova.
 * Exemplo: quicksort([5, 3, 8, 1]) retorna [1, 3, 5, 8].
 */
function quicksort(lista) {
  if (!Array.isArray(lista)) {
    throw new TypeError('O valor deve ser uma lista (array).');
  }
  if (lista.some((item) => typeof item !== 'number' || Number.isNaN(item))) {
    throw new TypeError('A lista deve conter apenas números.');
  }

  if (lista.length <= 1) {
    return [...lista];
  }

  const pivo = lista[Math.floor(lista.length / 2)];
  const menores = lista.filter((numero) => numero < pivo);
  const iguais = lista.filter((numero) => numero === pivo);
  const maiores = lista.filter((numero) => numero > pivo);

  return [...quicksort(menores), ...iguais, ...quicksort(maiores)];
}

module.exports = quicksort;
