/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = []
  const isPair = (a, b) => {
    return (a === '(' && b === ')')
      || (a === '{' && b === '}')
      || (a === '[' && b === ']')
  }
  for (let i = 0; i < s.length; i++) {
    const size = stack.length
    if (!size || !isPair(stack[size - 1], s[i])) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
};

module.exports = isValid
