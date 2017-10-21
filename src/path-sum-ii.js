const dfs = (root, path, sum, res, target) => {
  if (!root) {
    return
  }
  const curr = path.concat(root.val)
  sum += root.val
  if (!root.left && !root.right) {
    if (sum === target) {
      res.push(curr)
    }
    return
  }
  dfs(root.left, curr, sum, res, target)
  dfs(root.right, curr, sum, res, target)
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
  const res = []
  dfs(root, [], 0, res, sum)
  return res
}
