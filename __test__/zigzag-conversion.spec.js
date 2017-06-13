const convert = require('../src/zigzag-conversion')

const tests = [
  [['PAYPALISHIRING', 3], 'PAHNAPLSIIGYIR'],
  [['', 1], ''],
  [['A', 1], 'A'],
  [['AB', 1], 'AB'],
  [['ABCD', 1], 'ABCD'],
]

describe('zigzag-conversion', () => {
  tests.forEach((t, index) => {
    it(index, () => {
      expect(convert(...t[0])).toBe(t[1])
    })
  })
})
