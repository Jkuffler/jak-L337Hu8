/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = 0;
    let last = nums.length-1;
    let mid;
    
    while(first <= last) {
        mid = Math.floor((first+last)/2);
        if(nums[mid] === target) {
            first = mid;
            last = mid;
            break;
        }
        else if(nums[mid] < target) first = mid+1;
        else last = mid-1;
    }
    if (first > last) return [-1,-1];
    while(nums[first-1] === target) first--;
    while(nums[last+1] === target) last++;
    return [first, last];
};
    