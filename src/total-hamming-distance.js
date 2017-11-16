/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let len = 0
    for (let i = 1; i <= 32; i++) {
        let k = 0
        for (let j = 0; j < nums.length; j++) {
            k += ((nums[j]) >> (i - 1)) & 1
        }
        len += (nums.length - k) * k
    }
    return len
};
