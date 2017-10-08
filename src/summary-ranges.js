/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  const ranges = []
  let start = 0
  while (start < nums.length) {
    let end = start
    while (end + 1 < nums.length && nums[end + 1] - 1 === nums[end]) {
      end++
    }
    ranges.push(start === end ? [nums[start]] : [nums[start], nums[end]])
    start = end + 1
  }
  return ranges.map(r => r.join('->'))
}

module.exports = summaryRanges
