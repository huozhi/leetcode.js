/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function(s) {
  const m = {}
  Array.from(s).forEach(chr => {
    if (typeof m[chr] === 'number') {
      m[chr]++
    } else {
      m[chr] = 1
    }
  })
  return Object.entries(m)
    .sort((a, b) => (b[1] - a[1]))
    .reduce((r, [c, t]) => {
      return r + Array(t).fill(c).join('')
    }, '')
};
