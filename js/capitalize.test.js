const { test, expect } = require('@jest/globals');
const capitalize = require('./capitalize');

test('capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('henry')).toBe('Henry');
    expect(capitalize('priscilla')).toBe('Priscilla');
})