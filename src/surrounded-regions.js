/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function(board) {
  const queue = []
  const n = board.length
  if (!n) return
  const m = board[0].length

  const save = (i, j) => {
    if (board[i][j] === 'O') {
      board[i][j] = 'S'
      queue.push([i, j])
    }
  }

  for (let j = 0; j < m; j++) {
    save(0, j)
    save(n - 1, j)
  }
  for (let i = 0; i < n; i++) {
    save(i, 0)
    save(i, m - 1)
  }

  while (queue.length) {
    const [i, j] = queue.shift()
    if (j + 1 < m && board[i][j + 1]) save(i, j + 1)
    if (j - 1 >= 0 && board[i][j - 1]) save(i, j - 1)
    if (i + 1 < n && board[i + 1][j]) save(i + 1, j)
    if (i - 1 >= 0 && board[i - 1][j]) save(i - 1, j)
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'
      else if (board[i][j] === 'S') board[i][j] = 'O'
    }
  }
}

module.exports = solve
