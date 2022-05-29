/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length === 0) {
        arr = [-1];
    }
    for(let i=arr.length; i > 0; i--) {
        if(arr[i] > arr[i-1]) {
            arr[i-1] = arr[i];
        }
    
    }
    arr.splice(0, 1)
    arr.splice(arr.length, 0, -1);
    return arr;
};