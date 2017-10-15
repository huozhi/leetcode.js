/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function(n) {
  const arr = [1]
  let i2 = 0, i3 = 0, i5 = 0
  while (--n) {
    const val = Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5)
    if (arr[i2] * 2 === val) i2++
    if (arr[i3] * 3 === val) i3++
    if (arr[i5] * 5 === val) i5++
    arr.push(val)
  }
  return arr[arr.length - 1]
}

module.exports = nthUglyNumber
