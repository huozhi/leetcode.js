/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

var swapPairs = function(head) {
  const odd = new ListNode(-1)
  const even = new ListNode(-1)
  let podd = odd
  let peven = even

  let len = 0
  for (let p = head; p !== null; p = p.next) {
    if (len & 1) {
      podd.next = p
      podd = podd.next
    } else {
      peven.next = p
      peven = peven.next
    }
    len++
  }
  podd.next = null
  peven.next = null
  podd = odd.next
  peven = even.next
  const dist = new ListNode(-1)
  let pdist = dist
  for (let i = 0; i < len && peven && podd; i++) {
    if (i & 1) {
      if (peven) {
        pdist.next = peven
        peven = peven.next
      }
    } else {
      if (podd) {
        pdist.next = podd
        podd = podd.next
      }
    }
    pdist = pdist.next
  }
  pdist.next = podd || peven
  return dist.next
}

module.exports = swapPairs
