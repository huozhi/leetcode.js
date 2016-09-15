/**
 * @constructor
 * Initialize your data structure here.
 */
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

  /**
   * @param {string} word
   * @return {void}
   * Inserts a word into the trie.
   */
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

  /**
   * @param {string} word
   * @return {boolean}
   * Returns if the word is in the trie.
   */
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

  /**
   * @param {string} prefix
   * @return {boolean}
   * Returns if there is any word in the trie
   * that starts with the given prefix.
   */
  startsWith(prefix) {
    let curr = this.root
    for (const c of prefix) {
      if (!curr.next[c]) {
        return false
      }
      curr = curr.next[c]
    }
    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */

module.exports = {Trie}
