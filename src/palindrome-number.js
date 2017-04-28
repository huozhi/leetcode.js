'use strict'

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => (
  x.toString() === x.toString().split('').reverse().join('')
)

module.exports = isPalindrome
