/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const zero = '0'.charCodeAt(0)
    const vec1 = Array.from(num1).reverse().map((c) => c.charCodeAt(0) - zero)
    const vec2 = Array.from(num2).reverse().map((c) => c.charCodeAt(0) - zero)

    const res = Array(num1.length + num2.length).fill(0)
    for (let i = 0; i < vec1.length; i++) {
        for (let j = 0; j < vec2.length; j++) {
            res[i + j] += vec1[i] * vec2[j]
            res[i + j + 1] += Math.floor(res[i + j] / 10)
            res[i + j] %= 10
        }
    }
    let last = num1.length + num2.length - 1
    while (last >= 0 && res[last] === 0) last--

    return res.slice(0, Math.max(last + 1, 1)).reverse().join('')
};
