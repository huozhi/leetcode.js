const isPalindrome = require('../src/palindrome-number')

describe('palindrome number', () => {
  it('1', () => {
    expect(isPalindrome(-2147483648)).toBe(false)
  })

  it('2', () => {
    expect(isPalindrome(0)).toBe(true)
  })

  it('3', () => {
    expect(isPalindrome(121)).toBe(true)
  })
})
