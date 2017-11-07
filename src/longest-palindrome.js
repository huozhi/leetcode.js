/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hash = Array(256).fill(0)
    for (const chr of s) hash[chr.charCodeAt(0)]++
    let len = 0
    let oddCount = 0
    for (const freq of hash) {
        if (freq) {
            if (freq % 2 === 0) {
                len += freq
            }
            else {
                len += Math.max(0, freq - 1)
                oddCount++
            }
        }
    }
    return len + (oddCount ? 1 : 0)
};
