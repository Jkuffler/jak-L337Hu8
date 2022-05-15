/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1
        while(n > start){
            let mid = Math.floor(start + (n-start)/2)
            isBadVersion(mid) ? n=mid : start = mid+1;
          /*  if(isBadVersion(mid) === true){
                n = mid;
            } else {
                start = mid+1;
            } */
        } return start
    };
};