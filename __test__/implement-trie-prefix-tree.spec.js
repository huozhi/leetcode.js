const {expect} = require('chai')
const {Trie} = require('../src/implement-trie-prefix-tree')

describe('implement trie prefix tree', () => {
  const trie = new Trie()
  trie.insert('apple')
  trie.insert('banana')

  it('1', () => {
    expect(trie.search('banana')).to.equal(true)
    expect(trie.search('bcc')).to.equal(false)
  })

  it('2', () => {
    expect(trie.startsWith('app')).to.equal(true)
    expect(trie.startsWith('xxx')).to.equal(false)
  })
})
