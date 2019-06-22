/**
 * Initialize your data structure here.
 */
const MapSum = function() {
  this.trie = {}
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
  let t = this.trie
  for (const chr of key) {
      if (!t[chr]) t[chr] = {}
      t = t[chr]
  }
  t.val = val
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
  let val = 0
  let t = this.trie
  for (const chr of prefix) {
      if (!t[chr]) return val
      t = t[chr]
  }
  function dfs(node) {
      if (node) {
          val += (node.val || 0)
          for (const key in node) {
              dfs(node[key])
          }
      } 
  }
  
  dfs(t)
  return val
};

