/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode(0)
  let head = dummy
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.next = new ListNode(l1.val)
      head = head.next
      l1 = l1.next
    } else {
      head.next = new ListNode(l2.val)
      head = head.next
      l2 = l2.next
    }
  }
  head.next = l1 ? l1 : l2
  return dummy.next
}

module.exports = mergeTwoLists
