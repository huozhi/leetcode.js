/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  var sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 !== 0) {
    return false
  } else {
    sum /= 2
  }
  var dp = Array(sum + 1).fill(false)
  dp[0] = true
  for (var i = 0; i < nums.length; i++) {
    for (var j = sum; j > 0; j--) {
      if (j >= nums[i]) {
        dp[j] = dp[j] || dp[j - nums[i]]
      }
    }
  }
  return dp[sum]
}

module.exports = canPartition
