var eps = 0.001
var closeTo = (a, b) => Math.abs(a - b) < eps

var reduce24 = function(nums, i, res) {
    if (res[0]) return
    if (nums.length === 1) {
        if (closeTo(nums[0], 24)) {
            res[0] = true
        }
        return
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const x = nums[i], y = nums[j]
            const next = [x + y, x - y, y - x, x * y]
            if (!closeTo(x, eps)) next.push(y / x)
            if (!closeTo(y, eps)) next.push(x / y)

            const rest = nums.filter((_, index) => index !== i && index !== j)
            for (const val of next) {
                reduce24(rest.concat(val), i + 1, res)
            }
        }
    }
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
    const res = [false]
    reduce24(nums, 0, res)
    return res[0]
};
