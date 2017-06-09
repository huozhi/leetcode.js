/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function(board) {
  const n = board.length
  const m = board[0].length

  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === ".") continue
      if (i > 0 && board[i - 1][j] === "X") continue
      if (j > 0 && board[i][j - 1] === "X") continue
      count++
    }
  }
  return count
}

