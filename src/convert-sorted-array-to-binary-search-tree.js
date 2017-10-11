/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return convert(nums, 0, nums.length - 1)
}

var convert = function(nums, start, end) {
  if (start > end) {
    return null
  } else if (start === end) {
    return new TreeNode(nums[start])
  }
  const mid = Math.floor((start + end) / 2)
  const node = new TreeNode(nums[mid])
  node.left = convert(nums, start, mid - 1)
  node.right = convert(nums, mid + 1, end)
  return node
}

module.exports = sortedArrayToBST
