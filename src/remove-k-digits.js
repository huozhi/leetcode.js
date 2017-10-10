/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function(num, k) {
    const stack = []
    let i = 0
    for (; i < num.length; i++) {
        while (stack.length && num[i] < stack[stack.length - 1] && k) {
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    for (i = 0; stack[i] === '0' && i < stack.length; ) i++
    return stack.slice(i, num.length - k).join('') || '0'
}

module.exports = removeKdigits
