/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
const printTree = function(root) {
  const height = getHeight(root)
  const size = Math.pow(2, height) - 1
  const res = [...Array(height)].map(() => Array(size).fill(''))
  fillMatrix(res, root, 0, 0, size - 1)
  return res
}

function fillMatrix(res, node, i, l, r) {
  if (node) {
    const mid = Math.floor((l + r) / 2)
    res[i][mid] = node.val.toString()
    fillMatrix(res, node.left, i + 1, l, mid - 1)
    fillMatrix(res, node.right, i + 1, mid + 1, r)
  }
}

function getHeight(root) {
  if (!root) {
    return null
  }
  return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}
