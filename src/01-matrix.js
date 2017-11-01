/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const n = matrix.length
    if (!n) return []
    const m = matrix[0].length
    const dis = Array.from({length: n}).map(() => Array(m).fill(Number.MAX_SAFE_INTEGER))
    const que = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                que.push([i, j])
                dis[i][j] = 0
            }
        }
    }
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    while (que.length) {
        const [i, j] = que.shift()
        for (const dir of dirs) {
            const x = i + dir[0]
            const y = j + dir[1]

            if (x >= n || x < 0 || y >= m || y < 0 || matrix[x][y] === 0) continue

            if (dis[x][y] > dis[i][j] + 1) {
                dis[x][y] = dis[i][j] + 1
                que.push([x, y])
            }
        }
    }
    return dis
};
