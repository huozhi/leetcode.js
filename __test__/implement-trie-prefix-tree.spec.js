const Trie = require('../src/implement-trie-prefix-tree')

describe('implement trie prefix tree', () => {
  const trie = new Trie()
  trie.insert('apple')
  trie.insert('banana')

  it('1', () => {
    expect(trie.search('banana')).toBe(true)
    expect(trie.search('bcc')).toBe(false)
  })

  it('2', () => {
    expect(trie.startsWith('app')).toBe(true)
    expect(trie.startsWith('xxx')).toBe(false)
  })
})
