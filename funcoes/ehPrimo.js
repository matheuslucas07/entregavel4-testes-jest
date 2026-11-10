/**
 * Verifica se um número é primo (só é divisível por 1 e por ele mesmo).
 * Exemplo: ehPrimo(17) retorna true.
 */
function ehPrimo(numero) {
  if (!Number.isInteger(numero)) {
    throw new TypeError('O valor deve ser um número inteiro.');
  }
  if (numero < 2) {
    return false;
  }

  const limite = Math.sqrt(numero);
  for (let divisor = 2; divisor <= limite; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}

module.exports = ehPrimo;
