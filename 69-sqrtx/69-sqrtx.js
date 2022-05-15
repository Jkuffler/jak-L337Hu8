/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let ans = 1;
    while(ans*ans <= x) ans++;
    return ans-1
};