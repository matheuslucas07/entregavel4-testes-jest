const mdc = require('../funcoes/mdc');

test('o MDC de 48 e 18 é 6', () => {
  expect(mdc(48, 18)).toBe(6);
});

test('o MDC de 5 e 10 é 5', () => {
  expect(mdc(5, 10)).toBe(5);
});

test('o MDC de números primos entre si (7 e 13) é 1', () => {
  expect(mdc(7, 13)).toBe(1);
});

test('deve dar erro quando um dos valores não é um número inteiro', () => {
  expect(() => mdc(10, 'cinco')).toThrow(TypeError);
});
