const decodeString = require('../src/decode-string')

describe('decode string', () => {
  it('1', () => {
    expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
  })

  it('2', () => {
    expect(decodeString('3[a2[c]]')).toBe('accaccacc')
  })

  it('3', () => {
    expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
  })

  it('4', () => {
    expect(decodeString('sd2[f2[e]g]i')).toBe('sdfeegfeegi')
  })

  it('5', () => {
    expect(decodeString('2[2[a]2[b]2[c]]')).toBe('aabbccaabbcc')
  })
})
