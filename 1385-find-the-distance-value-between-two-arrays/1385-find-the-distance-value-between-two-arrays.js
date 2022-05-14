/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d){
    
    return arr1.filter(n1 => arr2.every(n2 => Math.abs(n1 - n2) > d)).length 
    
    /*BRUTE FORCE
    let count = 0;
    for(let i=0; i<arr1.length; i++) { //as long as we go through the arrays length we will start with 
    let diff=true
    for(let j=0; j<arr2.length; j++) {
        if(Math.abs(arr1[i] - arr2[j] <= d)){
            diff = false;
           break;
            }
        } 
        if (diff) {
            count+=1;
        }
    } 
    return count;*/
};