const fibonacci = require('../funcoes/fibonacci');

test('o número da posição 10 da sequência de fibonacci é 55', () => {
  expect(fibonacci(10)).toBe(55);
});

test('os números das posições 0 e 1 são 0 e 1', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
});

test('deve dar erro quando a posição é negativa', () => {
  expect(() => fibonacci(-1)).toThrow(RangeError);
});
