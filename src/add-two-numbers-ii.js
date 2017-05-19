/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const stack1 = []
  const stack2 = []
  let p1 = l1
  let p2 = l2
  let head = null
  let carry = 0

  const insertNodeAtFront = (val) => {
    const tmp = new ListNode(val)
    tmp.next = head
    head = tmp
  }

  while (p1) {
    stack1.push(p1.val)
    p1 = p1.next
  }

  while (p2) {
    stack2.push(p2.val)
    p2 = p2.next
  }

  while (stack1.length && stack2.length) {
    const val = stack1.pop() + stack2.pop() + carry
    carry = val >= 10 ? 1 : 0
    insertNodeAtFront(val % 10, head)
  }

  while (stack1.length) {
    const val = stack1.pop() + carry
    carry = val >= 10 ? 1 : 0
    insertNodeAtFront(val % 10, head)
  }
  while (stack2.length) {
    const val = stack2.pop() + carry
    carry = val >= 10 ? 1 : 0
    insertNodeAtFront(val % 10, head)
  }
  if (carry) {
    insertNodeAtFront(1, head)
  }
  return head
};

module.exports = addTwoNumbers
