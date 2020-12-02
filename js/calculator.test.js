const { test, expect } = require('@jest/globals');
const calculator = require('./calculator');

test('Add: should take two parameters and return a sum', () => {
    expect(calculator.add(7,9)).toBe(16);
})

test('Subtract: should take two parameters and return a difference', () => {
    expect(calculator.subtract(10, 3)).toBe(7);
})

test('Multiply: should take two parameters and return a product', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
})

test('Divide: should take two parameters and returns a quotient', () => {
    expect(calculator.divide(10, 5)).toBe(2);
})