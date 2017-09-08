/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const map = new Map()
  nums.sort((a, b) => a - b)
  const size = nums.length
  const res = []

  for (let i = 0; i < size - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    const target = 0 - nums[i]
    let j = i + 1, k = size - 1

    while (j < k) {
      if (nums[k] + nums[j] === target) {
        res.push([nums[i], nums[j++], nums[k--]])
        while (j < k && nums[j] === nums[j - 1]) j++
        while (j < k && nums[k] === nums[k + 1]) k--
      } else if (nums[k] + nums[j] < target) {
        j++
      } else {
        k--
      }
    }
  }
  return res
};

module.exports = threeSum
