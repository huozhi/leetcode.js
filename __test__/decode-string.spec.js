const {expect} = require('chai')
const {decodeString} = require('../src/decode-string')

describe('decode string', () => {
  it('1', () => {
    expect(decodeString('3[a]2[bc]')).to.equal('aaabcbc')
  })

  it('2', () => {
    expect(decodeString('3[a2[c]]')).to.equal('accaccacc')
  })

  it('3', () => {
    expect(decodeString('2[abc]3[cd]ef')).to.equal('abcabccdcdcdef')
  })

  it('4', () => {
    expect(decodeString('sd2[f2[e]g]i')).to.equal('sdfeegfeegi')
  })

  it('5', () => {
    expect(decodeString('2[2[a]2[b]2[c]]')).to.equal('aabbccaabbcc')
  })
})
