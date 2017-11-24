/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const rows = Array(numRows).fill()
    if (numRows <= 0) return rows
    rows[0] = [1]
    for (let i = 1; i < numRows; i++) {
        rows[i] = [1]
        for (let j = 1; j < i; j++) {
            rows[i].push(rows[i - 1][j - 1] + rows[i - 1][j])
        }
        rows[i].push(1)
    }
    return rows
};
