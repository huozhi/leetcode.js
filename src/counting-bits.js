/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
  // example: 3(10), 6(110), 7(111)
  // 6 === 3 << 1 + (6 & 1), 7 === 3 << 1 + (7 & 1)
  const dp = Array(num + 1).fill(0)
  for (let i = 1; i <= num; i++) {
    dp[i] = dp[i >> 1] + (i & 1)
  }
  return dp
}

module.exports = countBits
