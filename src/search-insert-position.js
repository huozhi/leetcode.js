/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0, j = nums.length - 1
    while (i < j) {
        const mid = (i + j) >> 1
        if (nums[mid] >= target) {
            j = mid - 1
        } else {
            i = mid + 1
        }
    }
    return nums[i] < target ? i + 1 : i
};
