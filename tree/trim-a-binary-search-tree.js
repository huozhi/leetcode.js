/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (root) {
        const lst = trimBST(root.left, L, R)
        const rst = trimBST(root.right, L, R)
        if (root.val >= L && root.val <= R) {
            root.left = lst
            root.right = rst
            return root
        } else {
            return lst || rst
        }
    }
    return null
};
