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
var deleteDuplicates = function(head) {
    const dummy = new ListNode()
    let res = dummy
    let curr = head

    while (curr) {
        if (curr.next && curr.next.val === curr.val) {
            const value = curr.val
            while (curr && curr.val === value) curr = curr.next
        } else {
            const next = curr.next
            res.next = curr
            curr.next = null
            res = res.next
            curr = next
        }
    }
    return dummy.next
};
