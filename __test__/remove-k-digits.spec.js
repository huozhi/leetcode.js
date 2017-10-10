const removeKdigits = require('../src/remove-k-digits')

describe('remove-k-digits', () => {
  it('1', () => {
    let num, k, digit
    num = '1432219', k = 3, digit = '1219'
    expect(removeKdigits(num, k)).toBe(digit)
    num = '10200', k = 1, digit = '200'
    expect(removeKdigits(num, k)).toBe(digit)
    num = '10', k = 2, digit = '0'
    expect(removeKdigits(num, k)).toBe(digit)
  })

  it('2: corner case', () => {
    // abandon last k char in tail
    expect(removeKdigits('112', 1)).toBe('11')
    expect(removeKdigits('9', 1)).toBe('0')
  })
})
