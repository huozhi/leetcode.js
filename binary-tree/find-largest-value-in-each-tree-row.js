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
const largestValues = function(root) {
  let fque = []
  let sque = []
  const res = []

  if (root) {
    fque.push(root)   
  }
  
  while (fque.length) {
    sque = sque.concat(fque)
    const maxv = sque.map(n => n.val).reduce((c, p) => Math.max(c, p))
    res.push(maxv)
    fque = []
    while (sque.length) {
      const node = sque.shift()
      if (node.left) { fque.push(node.left) }
      if (node.right) { fque.push(node.right) }  
    }
  }
  return res
};

