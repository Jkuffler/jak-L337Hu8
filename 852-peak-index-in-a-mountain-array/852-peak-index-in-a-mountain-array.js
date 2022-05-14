/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
   let strt = 0
   let end = arr.length - 1;
   
   while(strt <= end) {
       let mid = Math.floor((strt + end) / 2);
       if (arr[mid] > arr[mid+1]) {
           end = mid-1;
       } else {
           strt = mid+1;
       }
       if (arr[mid] > [arr[mid-1]] && arr[mid] > arr[mid+1]){
           return mid
       }
   }
};