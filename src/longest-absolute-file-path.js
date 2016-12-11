/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = function(input) {
  const state = {'-1': 0}
  let maxLength = 0

  input
    .split('\n')
    .map(v => v.split('\t'))
    .forEach(curr => {
      const path = curr[curr.length - 1]
      const level = curr.length - 1
      if (path.includes('.')) {
        maxLength = Math.max(maxLength, state[level - 1] + path.length)
      } else {
        state[level] = state[level - 1] + path.length + 1
      }
    })
  return maxLength
}

module.exports = {lengthLongestPath}
