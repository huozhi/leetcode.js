/**
 * @param  {string} s
 * @return {string}
 */

const reverseString = function(s) {
  return s.split('').reverse().join('')
}

module.exports = {reverseString}
