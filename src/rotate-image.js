/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
        }
    }
    for (let row = 0; row < n; row++) {
        for (let i = 0, j = n - 1; i < j; i++, j--) {
            [matrix[row][i], matrix[row][j]] = [matrix[row][j], matrix[row][i]]
        }
    }
};
