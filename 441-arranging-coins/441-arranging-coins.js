/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
    let r = 0;
    while(r  <= n){
         n -= r;
        r++;
    }
    return r - 1
};