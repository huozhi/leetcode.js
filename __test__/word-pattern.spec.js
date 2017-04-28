const wordPattern = require('../src/word-pattern')

describe('word pattern', () => {
  it('1', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
  })

  it('2', () => {
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
  })

  it('3', () => {
    expect(wordPattern('aaaa', 'dog cat cat fish')).toBe(false)
  })

  it('4', () => {
    expect(wordPattern('abba', 'dog dog dog dog')).toBe(false)
  })
})
