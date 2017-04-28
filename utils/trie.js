class TrieNode {
  constructor(c, isEnd=false) {
    this.c = c
    this.isEnd = isEnd
    this.next = {}
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let curr = this.root
    for (const c of word) {
      if (!curr.next[c]) {
        curr.next[c] = new TrieNode(c)
      }
      curr = curr.next[c]
    }
    curr.isEnd = true
  }

  search(word) {
    let curr = this.root
    for (const c of word) {
      if (!curr.next[c]) {
        return false
      }
      curr = curr.next[c]
    }
    return curr.isEnd
  }
}


module.exports = Trie
