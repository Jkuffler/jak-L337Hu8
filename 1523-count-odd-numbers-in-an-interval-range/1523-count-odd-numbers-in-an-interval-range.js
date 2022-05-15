/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let evRng = Math.round(high-low)/2;
    return low%2 === 1 && high%2 === 1 ? evRng+1 : evRng;
};