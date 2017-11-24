const backtrack = (root, path, sum, res, target) => {
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
  backtrack(root.left, curr, sum, res, target)
  backtrack(root.right, curr, sum, res, target)
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
  const res = []
  backtrack(root, [], 0, res, sum)
  return res
}
