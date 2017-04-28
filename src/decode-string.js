/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  const ss = [] // string stack
  const cnts = []
  let str = ''

  const isAlpha = (c) => /[a-zA-Z]/.test(c)
  const isNumber = (c) => /[0-9]/.test(c)

  for (let i = 0; i < s.length; i++) {
    if (isNumber(s[i])) {
      if (i === 0 || isNumber(s[i - 1])) {
        str += s[i]
      } else {
        ss.push(str) // a2[c]
        str = s[i]
      }
    } else if (isAlpha(s[i])) {
      if (i === 0 || isAlpha(s[i - 1])) {
        str += s[i]
      } else {
        str = s[i]
      }
    } else if (s[i] === '[') {
      ss.push('[')
      cnts.push(+str)
      str = ''
    } else if (s[i] === ']') {
      let tmp = str
      let top = ss.pop()
      while (top !== '[') {
        tmp = top + tmp
        top = ss.pop()
      }
      ss.push(tmp.repeat(cnts.pop()))
      str = ''
    }
  }
  return ss.join('') + str
}

module.exports = decodeString
