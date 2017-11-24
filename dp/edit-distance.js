/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const l1 = word1.length, l2 = word2.length
    let prev = Array(l2 + 1).fill().map((_, i) => i)
    for (let i = 1; i <= l1; i++) {
        let curr = Array(l2 + 1).fill()
        curr[0] = i
        for (let j = 1; j <= l2; j++) {
            if (word1[i - 1] !== word2[j - 1])
                curr[j] = Math.min(prev[j - 1], curr[j - 1], prev[j]) + 1
            else
                curr[j] = prev[j - 1]
        }
        prev = curr
    }
    return prev[l2]
}
