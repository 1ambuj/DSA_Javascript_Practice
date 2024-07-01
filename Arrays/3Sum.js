/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.com/problems/3sum/
 */
var threeSum = function(nums) {
    let newArr = [];
    
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicate elements for the current index
      if (i > 0 && nums[i] === nums[i - 1]) continue;
 
      let left = i + 1;
      let right = nums.length - 1;
 
      // Use two pointers to find pairs that sum with nums[i] to zero
      while (left < right) {
           const sum = nums[i] + nums[left] + nums[right];
 
           if (sum === 0) {
             // Found a triplet
             newArr.push([nums[i], nums[left], nums[right]]);
             
             // Move left and right to the next different numbers to avoid duplicates
             while (left < right && nums[left] === nums[left + 1]) left++;
             while (left < right && nums[right] === nums[right - 1]) right--;
 
             left++;
             right--;
           } else if (sum > 0) {
             right--; // We need a smaller sum, move the right pointer to the left
           } else {
             left++; // We need a larger sum, move the left pointer to the right
           }
      }
    }
    
    return newArr;
 };
 