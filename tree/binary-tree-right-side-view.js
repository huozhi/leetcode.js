/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var postOrderLevelTraversal = function(root, depth, res) {
    if (!root) return
    if (depth === res.length) res.push(root.val)

    postOrderLevelTraversal(root.right, depth + 1, res)
    postOrderLevelTraversal(root.left, depth + 1, res)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = []
    postOrderLevelTraversal(root, 0, res)
    return res
};
