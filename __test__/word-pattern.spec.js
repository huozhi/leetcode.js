const {expect} = require('chai')
const {wordPattern} = require('../src/word-pattern')

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
