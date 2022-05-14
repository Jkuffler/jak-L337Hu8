/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
    nums.push(target)
    nums.sort((a,b) => a-b)
    
    return nums.indexOf(target)
} 