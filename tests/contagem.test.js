const contagem = require('../funcoes/contagem');

test('entre 1 e 10 existem 10 números inteiros', () => {
  expect(contagem(1, 10)).toBe(10);
});

test('entre 5 e 5 existe apenas 1 número inteiro', () => {
  expect(contagem(5, 5)).toBe(1);
});

test('deve dar erro quando o primeiro número é maior que o último', () => {
  expect(() => contagem(10, 1)).toThrow(RangeError);
});
