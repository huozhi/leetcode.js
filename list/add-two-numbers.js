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
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode()
    let head = dummy
    let carry = 0
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        let curr = val1 + val2 + carry

        carry = (curr >= 10 ? 1 : 0)
        curr = curr % 10
        head.next = new ListNode(curr)
        head = head.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carry) {
        head.next = new ListNode(carry)
    }
    return dummy.next
};
