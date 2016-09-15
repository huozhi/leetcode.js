'use strict'

const expect = require('chai').expect
const wordPattern = require('../src/word-pattern').wordPattern


describe('word pattern', () => {
  it('1', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).to.equal(true)
  })
  it('2', () => {
    expect(wordPattern('abba', 'dog cat cat fish')).to.equal(false)
  })
  it('3', () => {
    expect(wordPattern('aaaa', 'dog cat cat fish')).to.equal(false)
  })
  it('4', () => {
    expect(wordPattern('abba', 'dog dog dog dog')).to.equal(false)
  })
})
