/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(numCourses, prerequisites) {
  const queue = []
  const graph = Object.create(null)
  const indgree = Array(numCourses).fill(0)
  for (let i = 0; i < prerequisites.length; i++) {
    const [from, to] = prerequisites[i]
    indgree[to]++
    if (!graph[from]) graph[from] = []

    graph[from].push(to)
  }
  indgree.forEach((dgree, id) => {
    if (dgree == 0) queue.push(id)
  })

  let count = 0
  while (queue.length) {
    const front = queue.shift()
    count++
    const neighbors = graph[front] || []
    neighbors.forEach(label => {
      --indgree[label]
      if (indgree[label] === 0) {
        queue.push(label)
      }
    })
  }
  return count === numCourses
}

module.exports = canFinish
