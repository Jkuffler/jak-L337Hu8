/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const createCompare = str => str.split('').sort().join('');
    
    return createCompare(s) === createCompare(t);
    
};