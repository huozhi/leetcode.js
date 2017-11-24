/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findFrequentTreeSum = function(root) {
  const res = []
  const count = new Map()
  let maxCount = Number.MIN_SAFE_INTEGER

  const sumTree = function(root) {
    if (!root) return 0
    const sum = root.val + sumTree(root.left) + sumTree(root.right)
    if (!count.has(sum)) {
      count.set(sum, 0)
    }
    const times = count.get(sum) + 1
    count.set(sum, times)
    if (times > maxCount) {
      maxCount = Math.max(maxCount, times)
    }
    return sum
  }

  sumTree(root)
  count.forEach((value, key) => {
    if (value === maxCount) res.push(key)
  })

  return res
}
