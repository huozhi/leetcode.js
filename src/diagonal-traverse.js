/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = function(matrix) {
	const n = matrix.length
	const m = n > 0 ? matrix[0].length : 0
	const res = []

	for (let i = 0; i < n + m - 1; i++) {
		let x = Math.min(i, n - 1)
		let y = Math.max(0, i - n + 1)
		const line = []
		while (x < n && x >= 0 && y >= 0 && y < m) {
			line.push(matrix[x--][y++])
		}
		res.push(res.length % 2 === 0 ? line : line.reverse())
	}

	return res.length ? res.reduce((r, c) => r.concat(c)) : res
};

module.exports = findDiagonalOrder
