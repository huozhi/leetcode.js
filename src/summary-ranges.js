/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const len = nums.length
  const ranges = []
  let i = 0
  for (; i < len; ) {
    let j = i + 1
    for (; j < len && nums[j] - nums[i] == j - i; j++) {}
    ranges.push([i, j - 1])
    i = j
  }
  return ranges.map(([lhs, rhs]) =>
    lhs === rhs ? `${nums[lhs]}` : `${nums[lhs]}->${nums[rhs]}`
  )
}

module.exports = {summaryRanges}
