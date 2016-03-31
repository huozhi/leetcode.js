import {expect} from 'chai'
import {isPalindrome} from '../src/palindrome-linked-list'
import {LinkedList} from '../lib/linked-list'


describe('palindrome linked list', () => {
  it('1', () => {
    const result = isPalindrome(new LinkedList().buildFromArray([1, 1, 2, 1]))
    expect(result).to.equal(false)
  })
  it('2', () => {
    const result = isPalindrome(new LinkedList().buildFromArray([1, 2, 1]))
    expect(result).to.equal(true)
  })
  it('3', () => {
    const result = isPalindrome(new LinkedList().buildFromArray([1, 2, 2, 1]))
    expect(result).to.equal(true)
  })
})
