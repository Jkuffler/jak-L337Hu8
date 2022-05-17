/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] === 0) {
            arr.splice(i+1, 0, 0 );
            arr.pop();
            i++;
        }
    }        
};

//edge case to handle would be an arr[i] === 02. in which case it needs to be stringfied and parsed back to an array