/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length
    for(let i= 0; i<=len-2; i++){
       for(j = i+1 ; j<=len-1 ; j++){
           if(nums[i] + nums[j] == target){
               return [[i], [j]]
           }
       }
    }
   };