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
const inorderTraversal = function(root) {
  const stack = []
  const result = []
  let node = root
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    if (stack.length) {
      const top = stack.pop()
      result.push(top.val)
      node = top.right
    }
  }
  return result
};

module.exports = inorderTraversal
