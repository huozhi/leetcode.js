/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var inorderDiff = function(root, min, last) {
    if (root) {
        inorderDiff(root.left, min, last)
        min[0] = Math.min(min[0], Math.abs(root.val - last[0].val))
        last[0] = root
        inorderDiff(root.right, min, last)
    }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const min = [Number.MAX_SAFE_INTEGER]
    const dummy = [new TreeNode(Number.MAX_SAFE_INTEGER)]
    inorderDiff(root, min, dummy)

    return min[0]
};
