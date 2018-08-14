/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function (root, target, K) {
  const path = []
  findParents(root, target, path, K)
  const res = new Set()
  const visited = new Set()
  for (let i = 0; i < path.length && K >= i; i++) {
    searchDistanceK(path[i], K - i, res, visited)
  }
  if (K !== 0) res.delete(target.val)
  return Array.from(res)
};

var findParents = function (root, target, path, K) {
  if (path.length > K) return false
  if (!root) return false
  if (root === target) {
    path.push(root)
    return true
  }
  const lhs = findParents(root.left, target, path, K)
  const rhs = findParents(root.right, target, path, K)
  if (lhs || rhs) {
    path.push(root)
  }
  return lhs || rhs
}

var searchDistanceK = function (root, K, res, visited) {
  if (!root || K < 0) return
  if (visited.has(root)) return
  visited.add(root)
  if (K === 0) {
    res.add(root.val)
    return
  }
  searchDistanceK(root.left, K - 1, res, visited)
  searchDistanceK(root.right, K - 1, res, visited)
};

module.exports = distanceK
