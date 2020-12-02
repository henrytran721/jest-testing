const majorityElement = require('./majorityElement');


test('array should return an array [3]', () => {
    let array = [3,2,3];
    expect(majorityElement(array)).toStrictEqual([3]);
})

test('array should return an array [1]', () => {
    let array = [1];
    expect(majorityElement(array)).toStrictEqual([1]);
})

test('array should return an array of [1,2]', () => {
    let array = [1,2];
    expect(majorityElement(array)).toStrictEqual([1,2]);
})