const quicksort = require('../funcoes/quicksort');

test('deve ordenar a lista [5, 3, 8, 1, 9, 2] em ordem crescente', () => {
  expect(quicksort([5, 3, 8, 1, 9, 2])).toEqual([1, 2, 3, 5, 8, 9]);
});

test('deve ordenar uma lista com números repetidos', () => {
  expect(quicksort([100, 4, 3, 150, 4])).toEqual([3, 4, 4, 100, 150]);
});

test('uma lista vazia continua vazia', () => {
  expect(quicksort([])).toEqual([]);
});

test('deve dar erro quando o valor não é uma lista', () => {
  expect(() => quicksort('5,3,8')).toThrow(TypeError);
});
