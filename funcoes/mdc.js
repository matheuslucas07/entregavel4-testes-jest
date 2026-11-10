/**
 * Calcula o Máximo Divisor Comum (MDC) entre dois números inteiros,
 * usando o algoritmo de Euclides.
 * Exemplo: mdc(48, 18) retorna 6.
 */
function mdc(primeiroNumero, segundoNumero) {
  if (!Number.isInteger(primeiroNumero) || !Number.isInteger(segundoNumero)) {
    throw new TypeError('Os dois valores devem ser números inteiros.');
  }

  // Math.abs garante que o resultado seja positivo mesmo com números negativos
  let dividendo = Math.abs(primeiroNumero);
  let divisor = Math.abs(segundoNumero);

  while (divisor !== 0) {
    const resto = dividendo % divisor;
    dividendo = divisor;
    divisor = resto;
  }
  return dividendo;
}

module.exports = mdc;
