/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const valuMap = new Map()
    for(i=0; i < nums.length; i++) {
        const difference = target - nums[i]
        const match = valuMap.get(difference)
        
        if(match !== undefined){
            return [match, i]
        } valuMap.set(nums[i], i)
    } 
};