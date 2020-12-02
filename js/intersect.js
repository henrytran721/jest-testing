// Given two arrays, write a function to compute their intersection.

function intersect(nums1, nums2) {
    let map = {};
    
    for(let val of nums1) {
        map[val] > 0 ? map[val]++ : map[val] = 1;
    }
    
    var res = [];
    
    for(let i = 0; i < nums2.length; i++) {
        if(nums2[i] in map && map[nums2[i]] > 0) {
            res.push(nums2[i]);
            map[nums2[i]]--;
        }
    }
    
    return res;
}

module.exports = intersect;