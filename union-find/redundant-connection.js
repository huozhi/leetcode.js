/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const n = edges.length
  const us = Array.from({length: n + 1}).map((_, i) => i)
  for (let i = 0; i < n; i++) {
    let [u, v] = edges[i]

    while (v !== us[v]) { v = us[v] }
    while (u !== us[u]) { u = us[u] }
    if (us[u] !== us[v]) {
      us[v] = u
    } else {
      return edges[i]
    }
  }
  return []
}

module.exports = findRedundantConnection
