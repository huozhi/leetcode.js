/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const hash = Array(3).fill(0)
    for (const num of nums) {
        hash[num]++
    }
    let i = 0
    for (let j = 0; j <= 2; j++) {
        while (hash[j]--) nums[i++] = j
    }
};
