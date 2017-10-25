/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return construct(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1
  )
}

var construct = function(preorder, inorder, ps, pe, is, ie) {
  if (pe < ps || ie < is) return null

  const val = preorder[ps]
  const pos = inorder.indexOf(val)

  const node = new TreeNode(val)
  const move = pos - is
  node.left = construct(preorder, inorder, ps + 1, ps + move, is, pos - 1)
  node.right = construct(preorder, inorder, ps + move + 1, pe, pos + 1, ie)
  return node
}
