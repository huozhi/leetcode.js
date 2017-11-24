var inorderFindKth = function(root, k, index, res) {
    if (root && k) {
        inorderFindKth(root.left, k, index, res)
        if (index[0] === k) {
            res.push(root.val)
            return
        } else {
            index[0]++
        }
        inorderFindKth(root.right, k, index, res)
    }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = []
    const index = [1]
    inorderFindKth(root, k, index, res)
    return res[0]
};
