/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var copynums = nums.slice()
  var less = (a, b) => { return a - b }
  nums.sort(less)
  var subs = nums.map(num => {
    return target - num
  })
  var i = 0, j = nums.length - 1
  while (i < j) {
    if (nums[i] === subs[j]) {
      break
    } else if (nums[i] < subs[j]) {
      i++
    } else {
      j--
    }
  }
  var first, second
  first = copynums.indexOf(nums[i])
  second = copynums.indexOf(target - nums[i])
  if (first === second) {
    second = copynums.slice(first + 1).indexOf(target - nums[i]) + first + 1
  }
  return [first, second].sort(less)
}


module.exports = {twoSum}
