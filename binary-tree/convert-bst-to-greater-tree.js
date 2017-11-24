/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  convertBSTHelper(root, 0)
  return root
}

var convertBSTHelper = function(node, parentVal) {
  if (node) {
    node.val += parentVal + getValue(node.right)
    convertBSTHelper(node.left, node.val)
    convertBSTHelper(node.right, parentVal)
  }
}

var getValue = (node) => {
  if (node) {
    return node.val + getValue(node.left) + getValue(node.right)
  }
  return 0
}

module.exports = convertBST
