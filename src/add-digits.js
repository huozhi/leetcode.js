/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((prev, curr) => {
      return prev += Number(curr)
    }, 0)
  }
  return num
}

var addDigits_ = function(num) {
  return (num - 1) % 9 + 1
}

module.exports = {addDigits, addDigits_}
