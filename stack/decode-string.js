/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let nums = []
    let strs = ['']
    let num = 0

    for (const chr of s) {
        if (chr >= '0' && chr <= '9') {
            num = (num * 10 + Number(chr))
        } else if (chr === '[') {
            nums.push(num)
            num = 0
            strs.push('')
        } else if (chr === ']') {
            const times = nums.pop()
            const temp = strs.pop().repeat(times)
            strs[strs.length - 1] += temp
        } else {
            strs[strs.length - 1] += chr
        }
    }
    return strs.join('')
};

module.exports = decodeString
