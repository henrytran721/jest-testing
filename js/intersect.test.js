const intersect = require('./intersect');

test('given two arrays, return the intersection', () => {
    let nums1 = [1,2,2,1];
    let nums2 = [2,2];
    expect(intersect(nums1, nums2)).toStrictEqual([2,2]);
})