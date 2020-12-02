const { test, expect } = require('@jest/globals');
const reverseString = require('./reverseString');

test('check if string is in reverse order', () => {
    expect(reverseString('john')).toBe('nhoj');
})