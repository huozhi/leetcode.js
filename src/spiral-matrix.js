/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  const n = matrix.length
  const r = []
  if (!n) return r
  const m = matrix[0].length
  const size = n * m

  let i = -1, j = -1, circle = 0
  while (r.length < size) {
    i++
    j++
    while (j < m - circle && r.length < size) r.push(matrix[i][j++])
    i++
    j--
    while (i < n - circle && r.length < size) r.push(matrix[i++][j])
    i--
    j--
    while (j >= circle && r.length < size) r.push(matrix[i][j--])
    i--
    j++
    while (i >= circle + 1 && r.length < size) r.push(matrix[i--][j])
    circle++
  }
  return r
}

module.exports = spiralOrder
