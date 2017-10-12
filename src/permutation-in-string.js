/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false
  }
  const count = Array(26).fill(0)
  const isIncluded = () => count.every(c => c === 0)
  const charCode = ch => ch.charCodeAt(0) - 'a'.charCodeAt(0)

  // use sliding window to avoid TLE
  for (let i = 0; i < s1.length; i++) {
    count[charCode(s1[i])]++
    count[charCode(s2[i])]--
  }
  if (isIncluded()) return true
  for (let i = s1.length; i < s2.length; i++) {
    count[charCode(s2[i])]--
    count[charCode(s2[i - s1.length])]++
    if (isIncluded()) return true
  }
  return false
}

module.exports = checkInclusion
