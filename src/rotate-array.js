/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length
    k %= n
    let start = 0
    let next
    let value
    let cnt = 0
    let idx = start
    while (cnt < n) {
        idx = start
        do {
            next = (idx + k) % n
            const temp = nums[idx]
            nums[idx] = value
            value = temp
            idx = next
            cnt++
        } while (idx !== start)
        nums[idx] = value
        start++
    }
};
