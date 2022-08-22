/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) j++;
            else if (sum > 0) k--;
            else {
                results.push([nums[i], nums[j], nums[k]]);
                while (nums[i] === nums[i + 1]) i++;
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                j++; k--;
            }
        }
    }
    return results;
};