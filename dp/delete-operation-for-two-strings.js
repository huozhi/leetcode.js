/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0))
    for (let i = 0; i <= word1.length; i++) {
        dp[i][0] = 0
    }

    for (let j = 0; j <= word2.length; j++) {
        dp[0][j] = 0
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    for(const row of dp) console.log(row)
    // console.log()
    const commonLength = dp[word1.length][word2.length]
    return word1.length + word2.length - commonLength * 2
};
