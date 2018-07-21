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
const addTwoNumbers = function (l1, l2) {
  let p1 = l1,
    p2 = l2
  while (p1 && p2) {
    p1 = p1.next
    p2 = p2.next
  }
  let rest = p1 || p2
  let long = rest === p1 ? l1 : l2
  let short = rest === p1 ? l2 : l1
  let pl = long
  let ps = short
  while (pl && rest) {
    rest = rest.next
    pl = pl.next
  }
  let dummy = new ListNode(0)
  let pd = dummy
  for (let p = long; p !== pl; p = p.next) {
    pd.next = new ListNode(p.val)
    pd = pd.next
  }

  while (ps && pl) {
    pd.next = new ListNode(ps.val + pl.val)
    pd = pd.next
    ps = ps.next
    pl = pl.next
  }
  let carry
  let head = dummy.next
  let curr = head

  while (head) {
    carry = 0
    curr = curr.next
    if (curr && curr.val === 9) {
      while (curr && curr.val === 9) curr = curr.next
    }

    while (head !== curr) {
      head.val += Number(curr && curr.val >= 10)
      head = head.next
    }
  }

  head = dummy.next
  dummy.val = Number(head && head.val >= 10)

  for (; head; head = head.next) {
    head.val %= 10
  }

  return dummy.val ? dummy : dummy.next
};

module.exports = addTwoNumbers
