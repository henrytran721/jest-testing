function arrayAnalysis(arr) {
    let obj = Object.create({});
    let total = 0;
    let average = 0;
    let min = Infinity;
    let max = -Infinity;

    // find average
    arr.map((val) => total += val);
    average = total / arr.length;
    obj.average = average;

    // find min value without Math.min
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    obj.min = min;

    // find max value without Math.max
    arr.map((val) => {
        if(val > max) {
            max = val;
        }
    })
    obj.max = max;

    // find length of array
    obj.length = arr.length;
    
    return obj;
}

module.exports = arrayAnalysis;