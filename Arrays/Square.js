// square of sorted array
// Given an integer array nums sorted in non-decreasing order, 
//return an array of the squares of each number sorted in non-decreasing order.

 
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    let newArray = []
    for(let i=0; i<nums.length; i++){
        newArray.push(nums[i]**2)
    }
    return newArray.sort((a,b)=>{
        return a - b
    })
};