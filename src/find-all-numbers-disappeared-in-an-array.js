/*
 * This is not the best solution. The easiest way is mark each position as bool flag.
 * Hash each value like nums[ nums[i] ], to meet the correct position and flip it.
 * The values which flipped twice are the duplicated values.
 *
 * reference: find-all-duplicates-in-an-array.js
 */
var findDisappearedNumbers = function(nums) {
  const disppares = []
  let i = 0
  while (i < nums.length) {
    if (nums[i] > 0 && (nums[i] !== i + 1) && (i !== nums[i] - 1)) {
      if (nums[i] === nums[nums[i] - 1]) {
        nums[i] = -1
        i++
      }
      let tmp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = tmp
    } else {
      i++
    }
  }
  nums.forEach((val, i) => { if (val === -1) disppares.push(i + 1) })
  return disppares
};

module.exports = findDisappearedNumbers
