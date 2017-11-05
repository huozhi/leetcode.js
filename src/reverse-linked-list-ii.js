function reverseList(head, end) {
    const dummy = new ListNode()
    let curr = head
    while (curr != end) {
        const tmp = dummy.next
        dummy.next = curr
        const next = curr.next
        curr.next = tmp
        curr = next
    }
    head.next = end
    return dummy.next
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    const dummy = new ListNode()
    dummy.next = head

    let prev = dummy
    let next = head
    for (let i = 0; i < m - 1; i++) prev = prev.next
    for (let i = 0; i < n; i++) next = next.next

    const middle = reverseList(prev.next, next)
    prev.next = middle
    return dummy.next
};
