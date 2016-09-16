/**
 * @param {number[]} data
 * @return {boolean}
 */

const validUtf8 = (data) => {
  let count = 0
  for (const byte of data) {
    if (count) {
      if (byte >> 6 !== 0b10) {
        return false
      }
      count--
    } else {
      if (byte >> 5 === 0b110) count = 1
      else if (byte >> 4 === 0b1110) count = 2
      else if (byte >> 3 === 0b11110) count = 3
      else if (byte >> 7) return false
    }
  }
  return count === 0
}

module.exports = {validUtf8}
