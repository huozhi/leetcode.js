const {expect} = require('chai')
const LinkedList = require('@huozhi/collection/lib/linked-list').default
const {isPalindrome} = require('../src/palindrome-linked-list')

describe('palindrome linked list', () => {
  it('1', () => {
    const result = isPalindrome(new LinkedList().formArray([1, 1, 2, 1]))
    expect(result).to.equal(false)
  })

  it('2', () => {
    const result = isPalindrome(new LinkedList().formArray([1, 2, 1]))
    expect(result).to.equal(true)
  })

  it('3', () => {
    const result = isPalindrome(new LinkedList().formArray([1, 2, 2, 1]))
    expect(result).to.equal(true)
  })
})
