const somatorio = require('../funcoes/somatorio');

test('a soma de [1, 2, 3, 4, 5] é 15', () => {
  expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
});

test('a soma de [-10, 20] é 10', () => {
  expect(somatorio([-10, 20])).toBe(10);
});

test('a soma de uma lista vazia é 0', () => {
  expect(somatorio([])).toBe(0);
});

test('deve dar erro quando a lista tem algo que não é número', () => {
  expect(() => somatorio([1, 'dois', 3])).toThrow(TypeError);
});
