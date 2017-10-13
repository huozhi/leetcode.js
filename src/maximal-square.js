/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function(matrix) {
  const n = matrix.length
  if (!n) return 0
  const m = matrix[0].length
  const dp = Array(n).fill().map(() => Array(m).fill(0))
  let width = 0

  for (let i = 0; i < n; i++) {
    if (matrix[i][0] === '1') dp[i][0] = 1
    width = Math.max(dp[i][0], width)
  }
  for (let j = 0; j < m; j++) {
    if (matrix[0][j] === '1') dp[0][j] = 1
    width = Math.max(dp[0][j], width)
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
        if (matrix[i][j] === '1') {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
            width = Math.max(width, dp[i][j])
        }
    }
  }
  return width * width
}

module.exports = maximalSquare
