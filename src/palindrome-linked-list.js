/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  if (!head || !head.next) {
    return true
  }
  let fast = head, slow = head
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let tail = slow.next, pre = null, tmp
  slow.next = null
  while (tail) {
    tmp = tail.next
    tail.next = pre
    pre = tail
    tail = tmp
  }
  tail = pre, slow = head
  while (tail && slow) {
    if (tail.val !== slow.val) {
      return false
    }
    tail = tail.next
    slow = slow.next
  }
  return true
}

module.exports = {isPalindrome}
