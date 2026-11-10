/**
 * Retorna o número da sequência de Fibonacci que está na posição informada.
 * Sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
 * Exemplo: fibonacci(10) retorna 55.
 */
function fibonacci(posicao) {
  if (!Number.isInteger(posicao)) {
    throw new TypeError('A posição deve ser um número inteiro.');
  }
  if (posicao < 0) {
    throw new RangeError('A posição não pode ser negativa.');
  }
  if (posicao === 0) {
    return 0;
  }

  let anterior = 0;
  let atual = 1;
  for (let i = 2; i <= posicao; i++) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  return atual;
}

module.exports = fibonacci;
