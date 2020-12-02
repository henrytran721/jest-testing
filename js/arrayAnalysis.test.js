const { test, expect } = require('@jest/globals');
const arrayAnalysis = require('./arrayAnalysis');

test('return of array average', () => {
    let array = [1,2,3,4,5];
    expect(arrayAnalysis(array).average).toBe(3);
})

test('return of minimum value from the array', () => {
    let array = [1,2,3,4,5];
    expect(arrayAnalysis(array).min).toBe(1);
})

test('return of maximum value from the array', () => {
    let array = [1,2,3,4,5];
    expect(arrayAnalysis(array).max).toBe(5);
})

test('return of length of the array', () => {
    let array = [1,2,3,4,5];
    expect(arrayAnalysis(array).length).toBe(5);
})