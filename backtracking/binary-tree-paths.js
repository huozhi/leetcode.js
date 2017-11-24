const backtrack = (root, path, res) => {
  if (!root) {
    return
  }
  const currentPath = path.concat(root.val)
  if (root && !root.left && !root.right && currentPath.length) {
    res.push(currentPath)
    return
  }

  backtrack(root.left, currentPath, res)
  backtrack(root.right, currentPath, res)
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const res = []
  backtrack(root, [], res)

  return res.map(path => path.join('->'))
}
