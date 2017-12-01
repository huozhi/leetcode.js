/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let start = 0
    let tmp = null
    while (start < nums.length) {
        let j = start
        tmp = null

        while (nums[j] !== j + 1) {
            const val = nums[j]
            nums[j] = tmp
            j = val - 1
            tmp = val
            if (val === null) {
              break
            }
        }
        start++
    }
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) res.push(i + 1)
    }
    return res
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

module.exports = findDisappearedNumbers
