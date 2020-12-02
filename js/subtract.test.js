const { test, expect } = require('@jest/globals');
const subtract = require('./subtract');

test('properly returns a difference', () => {
    expect(subtract(3,1)).toBe(2);
})