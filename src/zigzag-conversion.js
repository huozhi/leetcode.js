/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows >= s.length || numRows <= 1) {
    return s
  }
  const lines = Array(numRows).fill('')
  const seg = numRows * 2 - 2
  for (let i = 0; i < s.length; i++) {
    const idx = i % seg
    const hashIdx = idx >= numRows ? seg - idx : idx
    lines[hashIdx] += s[i]
  }
  return lines.join('')
};

module.exports = convert
