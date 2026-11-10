const ehPrimo = require('../funcoes/ehPrimo');

test('17 é um número primo', () => {
  expect(ehPrimo(17)).toBe(true);
});

test('10 não é um número primo', () => {
  expect(ehPrimo(10)).toBe(false);
});

test('0 e 1 não são números primos', () => {
  expect(ehPrimo(0)).toBe(false);
  expect(ehPrimo(1)).toBe(false);
});

test('deve dar erro quando o valor não é um número inteiro', () => {
  expect(() => ehPrimo('sete')).toThrow(TypeError);
});
