/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  const hash = Array(n).fill(true)
  let count = 0

  for (let i = 2 i < n i++) {
    if (hash[i]) {
      count++
      for (let j = 2 j * i <= n j++) {
        hash[i * j] = false
      }
    }
  }
  return count
}

module.exports = countPrimes
