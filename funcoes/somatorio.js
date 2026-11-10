/**
 * Soma todos os números de uma lista.
 * Exemplo: somatorio([1, 2, 3, 4, 5]) retorna 15.
 */
function somatorio(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError('O valor deve ser uma lista (array).');
  }
  if (numeros.some((item) => typeof item !== 'number' || Number.isNaN(item))) {
    throw new TypeError('A lista deve conter apenas números.');
  }

  let soma = 0;
  for (const numero of numeros) {
    soma += numero;
  }
  return soma;
}

module.exports = somatorio;
