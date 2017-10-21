const dfs = (root, path, res) => {
  if (!root) {
    return
  }
  const currentPath = path.concat(root.val)
  if (root && !root.left && !root.right && currentPath.length) {
    res.push(currentPath)
    return
  }

  dfs(root.left, currentPath, res)
  dfs(root.right, currentPath, res)
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const res = []
  dfs(root, [], res)

  return res.map(path => path.join('->'))
}
