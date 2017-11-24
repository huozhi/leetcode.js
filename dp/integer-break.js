/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = Array(n + 1).fill(0)
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++)
            dp[i] = Math.max(dp[i], Math.max(dp[i - j], i - j) * Math.max(dp[j], j))
    }
    return dp[n]
};

