/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const count = 1 << nums.length
    const res = []
    for (let i = 0; i < count; i++) {
        const curr = []
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                curr.push(nums[j])
            }
        }
        res.push(curr)
    }
    return res
};
