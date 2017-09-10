const numberToWords = require('../src/integer-to-english-words')

describe('integer-to-english-words', () => {
  it('1', () => {
    expect(numberToWords(0)).toBe('Zero')
    expect(numberToWords(110)).toBe('One Hundred Twenty Three')
    expect(numberToWords(123)).toBe('Twelve Thousand Three Hundred Forty Five')
    expect(numberToWords(12345)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven')
    expect(numberToWords(1234567)).toBe('One Hundred Ten')
  })
})
