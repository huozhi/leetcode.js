/**
  * @param {number[]} nums
  * @return {number[]}
  */
 const findDuplicates = function(nums) {
   const disppares = []

   for (let i = 0; i < nums.length; i++) {
     const hole = Math.abs(nums[i]) - 1
     nums[hole] = -nums[hole]
     if (nums[hole] > 0) {
       disppares.push(Math.abs(nums[i]))
     }
   }
   return disppares
 };
