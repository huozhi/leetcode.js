'use strict'

const expect = require('chai').expect
const palindromeNumber = require('../src/palindrome-number').isPalindrome

describe('palindrome number', () => {
  it('1', () => {
    expect(palindromeNumber(-2147483648)).to.equal(false)
  })

  it('2', () => {
    expect(palindromeNumber(0)).to.equal(true)
  })

  it('3', () => {
    expect(palindromeNumber(121)).to.equal(true)
  })
})
