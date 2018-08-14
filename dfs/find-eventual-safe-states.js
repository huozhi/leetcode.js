/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const length = graph.length
  const path = Array(length).fill(0)
  const result = []
  for (let node = 0; node < length; node++) {
      if (traverseGraphFrom(node, path, graph)) {
          result.push(node)
      }
  }
  return result
};

var traverseGraphFrom = function(start, path, graph) {
  if (path[start] === 1) return true
  if (path[start] === 2) return false
  
  const externs = graph[start]
  path[start] = 2
  for (const next of externs) {
      if (!traverseGraphFrom(next, path, graph)) return false
  }
  path[start] = 1
  return true
}

module.exports = eventualSafeNodes
