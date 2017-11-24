var find = function(board, trie, results, i, j, word) {
    if (trie['#']) {
      // NOTE: important, not return
      results.add(word + chr)
    }
    if (i >= board.length || j >= board[0].length || i < 0 || j < 0 || board[i][j] === '\0') {
        return
    }
    const chr = board[i][j]
    const next = trie[chr]
    if (!next) {
        return
    }
    board[i][j] = '\0'
    const dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    for (const dir of dirs) {
        const x = i + dir[0], y = j + dir[1]
        find(board, next, results, x, y, word + chr)
    }
    board[i][j] = chr
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const n = board.length
    if (!n) return []
    const m = board[0].length
    const trie = {}
    for (const word of words) {
        let curr = trie
        for (const c of word) {
            if (!curr[c]) curr[c] = {}
            curr = curr[c]
        }
        curr['#'] = true
    }

    const results = new Set()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          find(board, trie, results, i, j, '')
        }
    }
    return Array.from(results)
};

// findWords([["a","a"]], ["aaa"])
// findWords([["a","b"],["a","a"]], ["aba","baa","bab","aaab","aaa","aaaa","aaba"])
