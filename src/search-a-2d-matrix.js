/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length
  const n = m > 0 ? matrix[0].length : 0

  for (let i = m - 1, j = 0; i >= 0 && j < n;) {
    const val = matrix[i][j]
    if (val === target) {
      return true
    } else if (val < target) {
      j++
    } else {
      i--
    }
  }
  return false
}

module.exports = searchMatrix
