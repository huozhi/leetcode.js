/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  return convertToBST(head, null)
}

var convertToBST = function(head, tail) {
  if (head === tail) return null
  let slow = head,
    fast = head
  while (fast !== tail && fast.next !== tail) {
    fast = fast.next.next
    slow = slow.next
  }
  const node = new TreeNode(slow.val)
  node.left = convertToBST(head, slow)
  node.right = convertToBST(slow.next, tail)
  return node
}

module.exports = sortedListToBST
