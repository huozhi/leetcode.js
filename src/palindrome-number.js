/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let l = x, r = 0
  while (l > 0) {
    r = r * 10 + l % 10
    l = parseInt(l / 10)
  }
  return x >= 0 && x === r
};

