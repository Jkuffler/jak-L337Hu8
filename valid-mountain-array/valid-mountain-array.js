/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 0;
    
    while( i+1 < arr.length && arr[i] < arr[i+1]) {
        i++; /*will work on valid array or kick down to invalid mountain */
    }
    
    if (i == 0 || i == arr.length-1) {
        return false; /* a plataue while increasing/decreasing, or simply array elements that unilaterally increase OR decrease - not both.  */
    }
    while (i+1 < arr.length && arr[i] > arr[i+1]) {
        i++; /* this will run if, after increasing amounts, there is an immediate decreasae*/
        
    }
    return i == arr.length-1 /* one way or the other all conditional logic will run and if this final return statement is true then valid mt array exists!*/
};