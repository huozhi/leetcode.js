/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  const paths = path.split('/')
  const stack = []
  for (let i = 0; i < paths.length; i++) {
      const curr = paths[i]
      if (curr === '..') {
          if (stack.length) stack.pop()
      } else if (curr !== '.' && curr) {
          stack.push(curr)
      }
  }
  return '/' + stack.join('/')
}

module.exports = simplifyPath
