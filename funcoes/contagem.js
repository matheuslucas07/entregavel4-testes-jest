/**
 * Conta quantos números inteiros existem entre "primeiro" e "ultimo" (incluindo os dois).
 * Exemplo: contagem(1, 10) retorna 10.
 */
function contagem(primeiro, ultimo) {
  if (!Number.isInteger(primeiro) || !Number.isInteger(ultimo)) {
    throw new TypeError('Os dois valores devem ser números inteiros.');
  }
  if (primeiro > ultimo) {
    throw new RangeError('O primeiro número deve ser menor ou igual ao último.');
  }

  let quantidade = 0;
  for (let numero = primeiro; numero <= ultimo; numero++) {
    quantidade++;
  }
  return quantidade;
}

module.exports = contagem;
