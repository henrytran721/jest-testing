// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

var majorityElement = function(nums) {
    var findRepetition = Math.floor(nums.length / 3);
    let map = {};
    var newArr = [];
    
    for(let val of nums) {
        map[val] > 0 ? map[val]++ : map[val] = 1;  
    }
    
    for(let key in map) {
        if(map[key] > findRepetition) {
            newArr.push(parseInt(key));
        }
    }
    
    return newArr;
};

module.exports = majorityElement;