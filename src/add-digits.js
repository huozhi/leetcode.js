'use strict'

/**
 * @param {number} num
 * @return {number}
 */

// brute force
const addDigits_ = function(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((prev, curr) => {
      return prev += Number(curr)
    }, 0)
  }
  return num
}

// regular pattern
const addDigits = function(num) {
  return (num - 1) % 9 + 1
}

module.exports = {addDigits, addDigits_}
