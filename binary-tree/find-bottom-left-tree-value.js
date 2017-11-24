/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = function(root) {
  let fque = []
  let sque = []
  let res = null

  fque.push(root)
  while (fque.length) {
    sque = sque.concat(fque)
    fque = []
    sque.forEach(node => {
      if (node.left) {
        fque.push(node.left)
      }
      if (node.right) {
        fque.push(node.right)
      }
    })
    if (sque.length && !fque.length) {
      res = sque[0].val
      break
    }
    sque = []
  }
  return res
};
