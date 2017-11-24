var dfs = function(nums, target, i, sum) {
    if (i == nums.length) {
        return (sum === target) ? 1 : 0
    }
    const curr = nums[i]
    const add = dfs(nums, target, i + 1, sum + curr)
    const sub = dfs(nums, target, i + 1, sum - curr)
    return add + sub
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    return dfs(nums, S, 0, 0)
};
