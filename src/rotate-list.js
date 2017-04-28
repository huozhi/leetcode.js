/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (!head || k === 0) return head
  let len = 0
  let prev = null
  let curr = head
  while (curr) {
    prev = curr
    curr = curr.next
    len++
  }
  prev.next = head
  let m = len - (k % len) // move m nodes
  while (m--) {
    prev = prev.next
  }
  curr = prev.next
  prev.next = null
  return curr
}

module.exports = rotateRight
