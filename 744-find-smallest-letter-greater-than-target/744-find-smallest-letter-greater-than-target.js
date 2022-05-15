/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
    return letters.find(char => char > target) || letters[0]
//     if(letters[0] > target || target >= letters[letters.length - 1])
//         return letters[0];
//     let left = 0, 
//         right = letters.length - 1;
    
//     while (left < right) {
//         const mid = left + Math.floor((right-left)/2);
//         if(letters[mid] <= target) left = mid + 1;
//         else if(letters[mid] > target) right = mid;
//     }
//     return letters[left];
};