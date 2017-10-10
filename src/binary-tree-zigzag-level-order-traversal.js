/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  const levels = []
  const queue = []
  if (root) queue.push(root)
  let leftToRight = true
  while (queue.length) {
    const level = []
    const tmp = []
    while (queue.length) {
      const front = queue.shift()
      level.push(front.val)
      if (front.left) tmp.push(front.left)
      if (front.right) tmp.push(front.right)
    }
    queue.push(...tmp)
    levels.push(leftToRight ? level : level.reverse())
    leftToRight = !leftToRight
  }
  return levels
}
