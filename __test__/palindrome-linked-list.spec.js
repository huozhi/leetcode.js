const LinkedList = require('../utils/linked-list')
const isPalindrome = require('../src/palindrome-linked-list')

describe('palindrome linked list', () => {
  it('1', () => {
    const result = isPalindrome(new LinkedList().fromArray([1, 1, 2, 1]))
    expect(result).toBe(false)
  })

  it('2', () => {
    const result = isPalindrome(new LinkedList().fromArray([1, 2, 1]))
    expect(result).toBe(true)
  })

  it('3', () => {
    const result = isPalindrome(new LinkedList().fromArray([1, 2, 2, 1]))
    expect(result).toBe(true)
  })
})
