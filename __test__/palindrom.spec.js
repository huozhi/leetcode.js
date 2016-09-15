const {expect} = require('chai')
const {isPalindrome} = require('../src/palindrome-number')

describe('palindrome number', () => {
  it('1', () => {
    expect(isPalindrome(-2147483648)).to.equal(false)
  })

  it('2', () => {
    expect(isPalindrome(0)).to.equal(true)
  })

  it('3', () => {
    expect(isPalindrome(121)).to.equal(true)
  })
})
