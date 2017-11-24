const sumUp = (root, target, sum) => {
  if (!root) {
    return 0
  }
  const current = sum + root.val
  return (
    Number(target === current) +
    sumUp(root.left, target, current) +
    sumUp(root.right, target, current)
  )
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = function(root, sum) {
  if (!root) return 0
  return (
    pathSum(root.left, sum) + pathSum(root.right, sum) + sumUp(root, sum, 0)
  )
}
