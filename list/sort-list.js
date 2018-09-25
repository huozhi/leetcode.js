/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function(head) {
  return partitionList(head, null).head
}

const partitionList = function(head, tail) {
  if (!head || head === tail) return {head, tail}
  const fst = new ListNode()
  const snd = new ListNode()
  
  let pfst = fst
  let psnd = snd
  
  const pivot = head
  let curr = head.next
  head.next = null
  while (curr && curr !== tail) {
    if (curr.val < pivot.val) {
      pfst.next = curr
      pfst = pfst.next
    } else {
      psnd.next = curr
      psnd = psnd.next
    }
    curr = curr.next
  }
  pfst.next = psnd.next = null
  
  const lhs = partitionList(fst.next, pivot)
  const rhs = partitionList(snd.next, tail)

  if (lhs.tail) lhs.tail.next = pivot
  pivot.next = rhs.head

  return {
    head: lhs.head || pivot, 
    tail: rhs.head ? rhs.tail : pivot,
  }
}

