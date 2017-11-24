/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const dp = Array(n + 1).fill().map((_, i) => i) // steps
    dp[0] = dp[1] = 0

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                dp[i] = dp[j] + i / j
            }
        }
    }
    return dp[n]
};
