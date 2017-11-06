/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix.length
    if (!n) return false
    const m = matrix[0].length

    let i = n - 1
    let j = 0
    while (i >= 0 && j < m) {
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
};
