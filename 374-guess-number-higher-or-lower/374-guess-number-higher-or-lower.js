/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
    let min = 1, max = n
    
    while (min <= max) {
        let mid = Math.trunc((min + max)/2); //define efficient starting point for each iteration
        const resp = guess(mid);
        if(!resp) return mid
        if(resp < 0) max = mid-1
        else min = mid+1
    }
    return min
};