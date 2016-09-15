/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  const strs = []
  const cnts = []

  const isAlpha = c => /[a-zA-Z]/.test(c)
  const isNumber = c => /[0-9]/.test(c)
  const mergeString = str => {
    if (strs.length && isAlpha(strs[strs.length - 1])) {
      strs.push(`${strs.pop()}${str}`)
    } else {
      strs.push(str)
    }
  }

  for (let i = 0; i < s.length; ) {
    let curr = i
    if (isNumber(s[i])) {
      while (i < s.length && isNumber(s[i])) { i++ }
      cnts.push(parseInt(s.slice(curr, i)))
    } else if (isAlpha(s[i])) {
      while (i < s.length && isAlpha(s[i])) { i++ }
      mergeString(s.slice(curr, i))
    } else if (s[i] === '[') {
      strs.push('[')
      i++
    } else if (s[i] === ']') {
      const tmpString = strs.pop().repeat(cnts.pop())
      strs.pop()
      mergeString(tmpString)
      i++
    }
  }
  return strs.join('')
}

module.exports = {decodeString}
