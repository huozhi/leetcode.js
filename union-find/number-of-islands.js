class UnionSet {
  constructor(size) {
    this.us = Array.from({ length: size }).map((_, i) => i)
  }

  find(x) {
    while (x !== this.us[x]) x = this.us[x]
    return x
  }

  union(x, y) {
    this.us[y] = x
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  const n = grid.length
  if (!n) return count
  const m = grid[0].length
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  const us = new UnionSet(n * m)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== '1') continue
      count++
      for (const dir of dirs) {
        const [x, y] = dir
        if (i + x >= 0 && i + x < n && j + y >= 0 && j + y < m && grid[i + x][j + y] === '1') {
          const pRoot = us.find(i * m + j)
          const qRoot = us.find((i + x) * m + (j + y))
          if (pRoot !== qRoot) {
            us.union(pRoot, qRoot)
            --count
          }
        }
      }
    }
  }
  return count
}

