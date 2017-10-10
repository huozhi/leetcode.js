/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let count = 0
  const n = grid.length
  if (!n) return count
  const m = grid[0].length
  const visited = Array(n).fill().map(() => Array(m).fill(false))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        count++
        dfs(i, j, grid, visited)
      }
    }
  }
  return count
}

function dfs(i, j, grid, visited) {
  const n = grid.length
  const m = grid[0].length
  visited[i][j] = true
  if (grid[i][j] === '1') {
    if (i + 1 < n && !visited[i + 1][j]) dfs(i + 1, j, grid, visited)
    if (i - 1 >= 0 && !visited[i - 1][j]) dfs(i - 1, j, grid, visited)
    if (j + 1 < m && !visited[i][j + 1]) dfs(i, j + 1, grid, visited)
    if (j - 1 >= 0 && !visited[i][j - 1]) dfs(i, j - 1, grid, visited)
  }
}
