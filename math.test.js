const sum = require('./math');

describe('Função sum', () => {
    test('soma de dois números positivos', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('soma de números negativos', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    test('soma de um número positivo com zero', () => {
        expect(sum(5, 0)).toBe(5);
    });
});
