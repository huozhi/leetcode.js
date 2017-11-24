var generate = function(lc, rc, n, str, res) {
    if (lc === n && rc === n) {
        return res.push(str)
    }

    if (lc < n) {
        generate(lc + 1, rc, n, str + '(', res)
    }
    if (rc < lc) {
        generate(lc, rc + 1, n, str + ')', res)
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    generate(0, 0, n, '', res)
    return res
};
