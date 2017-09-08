/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  nums.forEach((num, index) => {
    map.set(num, index)
  })

  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i]
    const j = map.get(val)
    if (j >= 0 && j !== i) {
      return [i, j]
    }
  }
  return null
}

module.exports = twoSum
