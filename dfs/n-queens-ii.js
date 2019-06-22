/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const board = Array(n).fill(0)
  const res = {
    count: 0
  }
  resolveQueensPuzzle(board, 0, res)
  return res.count
};

function resolveQueensPuzzle(board, i, res) {
  if (i === board.length) {
    res.count++
    return
  }
  for (let pos = 0; pos < board.length; pos++) {
    board[i] = pos
    let valid = true
    for (let j = 0; j < i; j++) {
      if (board[i] === board[j] || Math.abs(i - j) === Math.abs(board[i] - board[j]))
        valid = false
    }

    if (valid) {
      resolveQueensPuzzle(board, i + 1, res)
    }
  }
}


