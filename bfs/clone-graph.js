/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
const cloneGraph = function(graph) {
  if (!graph) {
    return null
  }
  const queue = []
  const map = new Map()
  const copy = new UndirectedGraphNode(graph.label)
  map.set(graph.label, copy)

  queue.push(graph)
  while (queue.length) {
    const front = queue.shift()
    const dist = map.get(front.label)
    front.neighbors.forEach(node => {
      if (!map.has(node.label)) {
        queue.push(node)
        const neigh = new UndirectedGraphNode(node.label)
        map.set(node.label, neigh)
      }
      dist.neighbors.push(map.get(node.label))
    })
  }
  return copy
}
